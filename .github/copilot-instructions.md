# Netflix Clone - AI Agent Instructions

## Project Overview
This is a React Netflix clone application built with **Vite** (using Rolldown), React 19, and JavaScript (no TypeScript). The project is in early development with a minimal component structure.

## Architecture & Key Patterns

### Project Structure
- **Entry Point**: [src/main.jsx](../src/main.jsx) - Creates React root and mounts `<App />`
- **Root Component**: [src/App.jsx](../src/App.jsx) - Main application component
- **Styling**: Global CSS in [src/index.css](../src/index.css), component-scoped in [src/App.css](../src/App.css)
- **Public Assets**: Static files in [public/](../public/)

### Technology Stack
- **React 19.2.0** - Modern React with latest features
- **Vite + Rolldown** - Fast build tool with Hot Module Replacement (HMR)
- **ESLint** - Linting configuration with React Hooks rules
- **JavaScript/JSX** - No TypeScript; uses .jsx extension for component files

## Developer Workflows

### Build & Run Commands
```bash
npm run dev      # Start dev server with HMR (port 5173)
npm run build    # Build for production (output to dist/)
npm run preview  # Preview production build locally
npm run lint     # Check code quality
```

### Key Build Behaviors
- **HMR**: Fast Refresh enabled via `@vitejs/plugin-react` (Babel-based)
- **Build Output**: Static files generated in `dist/` directory
- **ESLint Config**: Flat config format (eslint.config.js), enforces React Hooks rules

## Coding Conventions

### Component Patterns
- Use `.jsx` extension for all React components
- Export default single components: `export default App`
- Use functional components with hooks (no class components)
- Apply CSS modules via separate `.css` files (one per component)

### ESLint Rules
- Unused variables must start with uppercase or underscore: `const _unused = 5` or `const CONSTANT = 5`
- React Hooks rules enforced automatically - follow dependency arrays strictly
- React Refresh rules prevent default exports in certain contexts

### Styling Approach
- Global styles in [src/index.css](../src/index.css)
- Component styles in corresponding `.css` files (e.g., `App.jsx` uses `App.css`)
- No CSS-in-JS libraries currently (use plain CSS)

## Important Development Notes

### When Adding Features
1. Create component file with `.jsx` extension
2. Create corresponding `.css` file for styles
3. Keep components in `src/` root or create subdirectories as needed
4. Run `npm run lint` to catch rule violations before committing

### No TypeScript
This project intentionally uses JavaScript only. Do not add type annotations or TypeScript configuration unless explicitly requested.

### React Version 19
This uses React 19.2.0 with latest hooks API. Avoid deprecated patterns like legacy Context API or ref forwarding workarounds.

## Common Tasks

**Add a new component**: Create `src/ComponentName.jsx` with default export + `src/ComponentName.css` for styling

**Fix lint errors**: Run `npm run lint` to see issues; common fix is renaming unused variables with `_` prefix

**Build for production**: Run `npm run build` then `npm run preview` to test the output locally

## Debugging & Troubleshooting
- HMR issues: Check browser console for errors; Vite dev server must be running
- Build failures: Ensure all JSX files use `.jsx` extension
- Missing styles: Verify import statement exists in component: `import './ComponentName.css'`
