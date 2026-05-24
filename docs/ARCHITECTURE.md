# Architecture Guide

## Project Overview

SnapGallery is a modern image gallery application built with React and TypeScript. It demonstrates best practices in component organization, styling, and state management for a responsive web application.

## Architecture Decisions

### 1. React + TypeScript

**Choice**: Functional components with React Hooks + TypeScript
**Rationale**:
- Type safety with TypeScript reduces runtime errors
- Hooks provide a modern, concise way to manage component logic
- Better code reusability and composition

### 2. Build Tool: Vite

**Choice**: Vite over Create React App
**Rationale**:
- Significantly faster development server startup
- Faster HMR (Hot Module Replacement)
- Smaller bundle sizes
- Better developer experience

### 3. Styling: Tailwind CSS + Custom CSS

**Choice**: Utility-first CSS with Tailwind + minimal custom CSS
**Rationale**:
- Rapid UI development with utility classes
- Consistent design system
- Easy to customize via configuration
- Small CSS footprint with purging

### 4. UI Components: shadcn/ui

**Choice**: Shadcn/ui built on Radix UI primitives
**Rationale**:
- Headless, unstyled components for complete control
- Accessibility built-in (ARIA, keyboard support)
- Works seamlessly with Tailwind CSS
- Copy-paste component approach

### 5. Routing: React Router v6

**Choice**: Client-side routing with React Router
**Rationale**:
- Standard solution for React SPAs
- Nested routes support
- Modern API with loaders and actions

### 6. State Management: React Query

**Choice**: TanStack Query for async state
**Rationale**:
- Powerful data synchronization library
- Automatic caching and background refetching
- Excellent for managing server state

## Project Structure

```
snapgallery/
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   └── NavLink.tsx         # Custom navigation component
│   ├── pages/
│   │   ├── Index.tsx           # Gallery page
│   │   └── NotFound.tsx        # 404 page
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn, etc.)
│   ├── assets/
│   │   └── gallery/            # Image assets
│   ├── styles/
│   │   ├── index.css           # Global styles
│   │   └── App.css             # Component styles
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── vite-env.d.ts           # Vite type declarations
├── public/                     # Static assets
├── docs/                       # Documentation
└── [config files]
```

## Component Organization

### UI Components (shadcn/ui)

Located in `src/components/ui/`, these are pre-built, composable components:
- Button, Card, Dialog, Input, etc.
- Direct copy-paste from shadcn/ui repository
- Customizable via Tailwind classes

### Page Components

Located in `src/pages/`, these are route-level components:
- **Index.tsx**: Main gallery page with filtering and lightbox
- **NotFound.tsx**: 404 error page

### Custom Components

Located in `src/components/`, application-specific components:
- **NavLink.tsx**: Enhanced link component with routing

## Data Flow

### Gallery Data Flow

1. **Data Definition** → Images array in Index.tsx
2. **Filtering** → Category filter updates state
3. **Rendering** → Gallery items rendered with animations
4. **Lightbox** → Click handler opens detailed view
5. **Navigation** → Keyboard and button navigation

```
User Action
    ↓
Event Handler
    ↓
Update State
    ↓
Re-render Component
    ↓
Update DOM
```

## Styling Architecture

### Global Styles

- `src/index.css` - Tailwind directives and global CSS variables
- `src/App.css` - Component-specific styles and animations

### Tailwind Configuration

- `tailwind.config.ts` - Theme customization, plugins
- `postcss.config.js` - PostCSS processing for Tailwind

### CSS Organization

```css
/* Global utilities and resets */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Component-specific styles */
.gallery-grid { /* ... */ }
.lightbox { /* ... */ }
```

## Build & Deployment

### Development

```bash
npm run dev
```

- Vite dev server with HMR
- Source maps enabled
- Hot reload on file changes

### Production Build

```bash
npm run build
```

- Optimized production bundle
- Tree-shaking and minification
- Code splitting for better caching

### Output

- `dist/` directory contains:
  - Minified HTML
  - Optimized CSS
  - Minified JavaScript
  - Optimized images

## Performance Considerations

### Image Optimization

- Lazy loading with `loading="lazy"` attribute
- Consider using WebP with fallbacks
- Responsive images with srcset

### Code Splitting

- Automatic by Vite
- Route-based splitting with React Router

### Accessibility

- ARIA labels on interactive elements
- Semantic HTML (`<article>`, `<figure>`, `<nav>`)
- Keyboard navigation support
- Color contrast compliance

## Testing Strategy

### Unit Tests

- Components isolated with React Testing Library
- Utility functions tested with Vitest
- Configuration: `vitest.config.ts`

### E2E Testing

- Consider Playwright or Cypress for future
- Test critical user flows

## Future Architecture Improvements

1. **State Management**: Consider Redux for complex state
2. **API Integration**: Add backend data fetching
3. **Image Optimization**: Implement image processing pipeline
4. **PWA**: Add service workers and offline support
5. **Analytics**: Track user interactions
6. **Error Boundaries**: Add error handling components

## Dependencies

### Core

- `react` - UI library
- `react-dom` - React renderer
- `react-router-dom` - Routing
- `typescript` - Type safety

### Styling

- `tailwindcss` - Utility CSS
- `postcss` - CSS processing
- `class-variance-authority` - Component variants

### UI/Form

- `@hookform/resolvers` - Form validation
- `@radix-ui/*` - UI primitives
- `cmdk` - Command menu

### Utilities

- `@tanstack/react-query` - Data fetching
- `date-fns` - Date utilities
- `clsx` - Class name utility

### Development

- `vite` - Build tool
- `vitest` - Test framework
- `eslint` - Code linting

## Configuration Files

### TypeScript Configuration

- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node build tools settings

### Vite Configuration

- `vite.config.ts` - Build and dev server config
- Alias configuration for `@/` import paths
- React plugin with SWC for faster compilation

### Tailwind Configuration

- `tailwind.config.ts` - Theme and plugin customization
- `postcss.config.js` - PostCSS pipeline

## Environment Variables

Currently, no environment variables are required. To add:

1. Create `.env.local` file
2. Variables must start with `VITE_` to be accessible
3. Access via `import.meta.env.VITE_*`

## Deployment

### Recommended Platforms

- **Netlify** - Built-in Vite support
- **Vercel** - Excellent React support
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable solution

### Basic Deploy Steps

1. Run `npm run build`
2. Deploy `dist/` directory
3. Configure server for SPA (redirect 404 to index.html)

---

For more information, see the main [README.md](../README.md)
