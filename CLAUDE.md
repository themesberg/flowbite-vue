# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
# Start development server (VitePress documentation site)
npm run dev

# Build documentation site
npm run build

# Build the Vue component library for production
npm run build:production
```

### Testing & Quality
```bash
# Run tests with Vitest
npm run test

# Run tests with coverage
npm run coverage

# Run linting
npm run lint

# Fix linting issues
npm run lint-fix

# Type checking
npm run typecheck
```

### Library Build
```bash
# Build the package for distribution
npm run build:package

# Build type declarations only
npm run build:types

# Full production build (package + types)
npm run build:production
```

## Architecture

### Component Structure
The project is a Vue 3 component library implementing Flowbite design system. Each component follows this structure:
- `src/components/FwbComponentName/` - Component directory
  - `FwbComponentName.vue` - Main component implementation
  - `types.ts` - TypeScript type definitions for props and types
  - `composables/` - Vue composables for component logic (classes, state management)
  - `tests/` - Vitest test files (when present)

### Key Patterns
- **Class Generation**: Components use composables (e.g., `useComponentClasses.ts`) to generate Tailwind CSS classes based on props
- **Type Safety**: All components have TypeScript definitions in separate `types.ts` files
- **Composition API**: All components use Vue 3 Composition API with `<script setup>`
- **Tailwind Integration**: Components use Tailwind CSS v4 with `tailwind-merge` for class management
- **Component Prefix**: All components use `Fwb` prefix (Flowbite Web)

### Import Aliases
- `@/` maps to `./src/` directory for clean imports

### Testing
Tests use Vitest with Vue Test Utils. Test files are located in component-specific `tests/` folders and use the `.spec.ts` extension.

### Documentation
The project includes a VitePress documentation site in the `docs/` directory. Component examples and documentation are maintained as Markdown files.

## Development Workflow

When creating or modifying components:
1. Component implementation goes in `src/components/FwbComponentName/`
2. Use existing component patterns for consistency
3. Create TypeScript types in a separate `types.ts` file
4. Use composables for class generation logic
5. Export the component from `src/index.ts` for library consumers
6. Add documentation in `docs/components/` if creating a new component