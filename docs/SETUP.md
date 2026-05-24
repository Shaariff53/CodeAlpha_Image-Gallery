# Setup Guide

## Prerequisites

- **Node.js** version 18.0.0 or higher
- **npm** version 9.0.0+ OR **bun** version 1.0.0+
- A code editor (VS Code recommended)
- Git installed on your system

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/snapgallery.git
cd snapgallery
```

### 2. Install Dependencies

#### Using npm

```bash
npm install
```

#### Using bun (recommended for faster installation)

```bash
bun install
```

### 3. Verify Installation

```bash
npm run lint
npm run test
```

Both commands should complete without errors.

## Development Server

### Start Development Server

```bash
npm run dev
```

The application will be available at:
- **http://localhost:8080** (if port 8080 is available)
- **http://localhost:5173** (Vite default)

The development server includes:
- Hot Module Replacement (HMR)
- Instant feedback on code changes
- Source maps for debugging

### Key Development Features

- **Auto-reload**: Changes reflect immediately
- **Fast refresh**: State preserved during reload
- **Error overlay**: Helpful error messages
- **TypeScript checking**: Real-time type validation

## Building for Production

### Create Optimized Build

```bash
npm run build
```

This generates a `dist/` directory with:
- Minified HTML, CSS, and JavaScript
- Optimized assets
- Production-ready code

### Preview Production Build

```bash
npm run preview
```

This starts a local server serving the production build, useful for testing before deployment.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## IDE Setup

### VS Code Recommended Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - Publisher: dsznajder
   - ID: dsznajder.es7-react-js-snippets

2. **Tailwind CSS IntelliSense**
   - Publisher: bradlc
   - ID: bradlc.vscode-tailwindcss

3. **TypeScript Vue Plugin (Volar)**
   - Publisher: Vue
   - ID: Vue.vscode-typescript-vue-plugin

4. **ESLint**
   - Publisher: Microsoft
   - ID: dbaeumer.vscode-eslint

### VS Code Settings

Create/update `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Configuration Files

### TypeScript Configuration

The project uses multiple TypeScript configs:

- **tsconfig.json** - Main configuration
- **tsconfig.app.json** - App settings
- **tsconfig.node.json** - Build tools settings

No changes needed for basic development.

### Vite Configuration

`vite.config.ts` includes:

```typescript
- Port: 8080
- Path alias: @ → src/
- React plugin with SWC
- Development component tagging
```

### Environment Variables

Create `.env.local` for local environment variables:

```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=SnapGallery
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Project Structure

```
snapgallery/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Route pages
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities
│   ├── assets/             # Static assets
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── public/                 # Static files (robots.txt, etc.)
├── docs/                   # Documentation
├── package.json            # Dependencies
└── vite.config.ts          # Build config
```

## Adding New Features

### Adding a New Page

1. Create new file in `src/pages/YourPage.tsx`
2. Export component as default
3. Add route in `src/App.tsx`:

```typescript
<Route path="/your-page" element={<YourPage />} />
```

### Adding a New Component

1. Create file in `src/components/YourComponent.tsx`
2. Define and export component
3. Import and use in pages or other components

### Adding UI Components

1. Copy component from [shadcn/ui](https://ui.shadcn.com)
2. Paste into `src/components/ui/`
3. Customize with Tailwind classes as needed

### Styling Components

- Use Tailwind utility classes in JSX
- Add custom CSS in `src/App.css` when needed
- Follow existing patterns and conventions

## Testing

### Running Tests

```bash
# Run all tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### Test Configuration

Tests use:
- **Vitest** - Fast unit test framework
- **React Testing Library** - Component testing utilities

Test files should be named:
- `*.test.ts` or `*.test.tsx`

## Linting

### Check Code Quality

```bash
npm run lint
```

### Fix Linting Issues

```bash
npm run lint -- --fix
```

### ESLint Configuration

- Configuration in `eslint.config.js`
- Checks TypeScript, React best practices
- Ensures code consistency

## Deployment Checklist

Before deploying to production:

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run test` - all tests pass
- [ ] Run `npm run build` - builds successfully
- [ ] Test production build with `npm run preview`
- [ ] Update version in `package.json`
- [ ] Update `docs/CHANGELOG.md`
- [ ] Commit and push changes
- [ ] Create GitHub release

## Troubleshooting

### Port Already in Use

If port 8080 is busy, Vite will use the next available port.

To specify a custom port:
```bash
npm run dev -- --port 3000
```

### Dependencies Issues

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

Or with bun:
```bash
rm -rf node_modules bun.lockb
bun install
```

### TypeScript Errors

- Ensure you're running Node.js 18+
- Check `tsconfig.json` is properly configured
- Restart TypeScript server in IDE

### Build Fails

1. Check for TypeScript errors: `npm run lint`
2. Clear dist folder: `rm -rf dist`
3. Rebuild: `npm run build`

## Next Steps

1. Read the [Architecture Guide](ARCHITECTURE.md)
2. Review the [Contributing Guide](../CONTRIBUTING.md)
3. Check the [API Documentation](API.md)
4. Explore example code in `src/pages/Index.tsx`

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/snapgallery/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/snapgallery/discussions)
- **Email**: support@snapgallery.com

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
