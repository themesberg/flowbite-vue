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

  // A consumer app with all peers, including optional ones like @nuxt/kit,
  // so every entry (the Nuxt module too) can load.
  const appDir = join(workDir, 'app')
  mkdirSync(appDir)
  writeFileSync(join(appDir, 'package.json'), JSON.stringify({
    name: 'flowbite-vue-pack-check',
    private: true,
    type: 'module',
    dependencies: {
      ...pkg.peerDependencies,
      'flowbite-vue': `file:${join(workDir, filename)}`,
    },
  }, null, 2))
  npm(['install', '--omit=dev', '--ignore-scripts', '--no-audit', '--no-fund', '--prefer-offline'], appDir)

  const installed = join(appDir, 'node_modules', 'flowbite-vue')
  const chunks = readdirSync(join(installed, 'dist'), { recursive: true })
    .filter(file => file.endsWith('.js'))
    .sort()

  const failures = []
  for (const chunk of chunks) {
    try {
      await import(pathToFileURL(join(installed, 'dist', chunk)).href)
    } catch (error) {
      failures.push(`dist/${chunk}: ${error.message.split('\n')[0]}`)
    }
  }
  if (failures.length) {
    console.error(`flowbite-vue pack check failed for ${failures.length} of ${chunks.length} chunks:\n  ${failures.join('\n  ')}`)
    process.exitCode = 1
  } else {
    console.log(`flowbite-vue pack check passed (${chunks.length} chunks loaded from a production-only install)`)
  }
} finally {
  rmSync(workDir, { recursive: true, force: true })
}
