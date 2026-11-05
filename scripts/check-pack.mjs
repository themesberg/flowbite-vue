// Installs the packed tarball into a fresh project with production
// dependencies only, then loads every built entry and component chunk in
// plain Node (run after `npm run build:package`). Catches runtime imports
// that resolve in this repo only because a devDependency installed them,
// such as an optional peer of a dependency (#471).
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = new URL('..', import.meta.url)
const pkg = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'))
// npm is npm.cmd on Windows, which Node only runs through a shell.
const npm = (args, cwd) => execFileSync('npm', args, {
  cwd,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'inherit'],
  shell: process.platform === 'win32',
})

const workDir = mkdtempSync(join(tmpdir(), 'flowbite-vue-pack-'))
try {
  const [{ filename }] = JSON.parse(npm(['pack', '--json', '--pack-destination', workDir], root))

  // A consumer app with the required peers only: everything except the Nuxt
  // module must load without optional peers such as @nuxt/kit.
  const optionalPeers = Object.keys(pkg.peerDependenciesMeta ?? {})
    .filter(name => pkg.peerDependenciesMeta[name].optional)
  const requiredPeers = Object.fromEntries(Object.entries(pkg.peerDependencies)
    .filter(([name]) => !optionalPeers.includes(name)))
  const appDir = join(workDir, 'app')
  mkdirSync(appDir)
  writeFileSync(join(appDir, 'package.json'), JSON.stringify({
    name: 'flowbite-vue-pack-check',
    private: true,
    type: 'module',
    dependencies: { ...requiredPeers, 'flowbite-vue': `file:${join(workDir, filename)}` },
  }, null, 2))
  const install = (...specs) => npm(['install', ...specs, '--omit=dev', '--ignore-scripts', '--no-audit', '--no-fund', '--prefer-offline'], appDir)
  install()

  // Public entries resolve from inside the app, through the exports map.
  writeFileSync(join(appDir, 'load.mjs'), 'export const load = specifier => import(specifier)\n')
  const { load } = await import(pathToFileURL(join(appDir, 'load.mjs')).href)
  const installed = join(appDir, 'node_modules', 'flowbite-vue')
  const nuxtEntry = pkg.exports['./nuxt'].import.replace(/^\.\//, '')

  const failures = []
  const check = async (label, importIt) => {
    try {
      await importIt()
    } catch (error) {
      failures.push(`${label}: ${error.message.split('\n')[0]}`)
    }
  }

  await check('flowbite-vue', () => load('flowbite-vue'))
  const chunks = readdirSync(join(installed, 'dist'), { recursive: true })
    .map(file => `dist/${file}`)
    .filter(file => file.endsWith('.js') && file !== nuxtEntry)
    .sort()
  for (const chunk of chunks) {
    await check(chunk, () => import(pathToFileURL(join(installed, chunk)).href))
  }

  // Then the Nuxt module, with the optional peers a Nuxt app has.
  install(...optionalPeers.map(name => `${name}@${pkg.peerDependencies[name]}`))
  await check('flowbite-vue/nuxt', () => load('flowbite-vue/nuxt'))

  const total = chunks.length + 2
  if (failures.length) {
    console.error(`flowbite-vue pack check failed for ${failures.length} of ${total} modules:\n  ${failures.join('\n  ')}`)
    process.exitCode = 1
  } else {
    console.log(`flowbite-vue pack check passed (${total} modules loaded from a production-only install)`)
  }
} finally {
  rmSync(workDir, { recursive: true, force: true })
}
