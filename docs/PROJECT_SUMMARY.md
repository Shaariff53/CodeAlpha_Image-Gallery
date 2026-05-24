# Project Overview

SnapGallery is a responsive image gallery application built with React, TypeScript, and modern web technologies.

## Stack

- React 18 + TypeScript 5
- Vite 5 (build tool)
- Tailwind CSS 3 (styling)
- shadcn/ui + Radix UI (components)
- React Router 6 (routing)
- TanStack Query (state management)
- Vitest (testing)

## Project Structure

```
src/
├── components/       React components
├── pages/           Page-level components
├── hooks/           Custom React hooks
├── lib/             Utility functions
├── assets/gallery/  Gallery images
├── App.tsx          Root component
└── main.tsx         Entry point

docs/                Documentation
.github/
├── workflows/       CI/CD automation
└── ISSUE_TEMPLATE/  Issue templates
```

## Key Features

- Responsive grid layout with lazy loading
- Category-based image filtering
- Full-screen lightbox viewer
- Keyboard navigation support
- Accessible markup and ARIA labels
- Fast builds with Vite

## Getting Started

```bash
git clone https://github.com/yourusername/snapgallery.git
cd snapgallery
npm install
npm run dev
```

See [SETUP.md](SETUP.md) for detailed setup instructions.

## Documentation

- [README](../README.md) — Project overview and quick start
- [ARCHITECTURE.md](ARCHITECTURE.md) — Design decisions and structure
- [SETUP.md](SETUP.md) — Development setup and configuration
- [API.md](API.md) — Component and API reference
- [CHANGELOG.md](CHANGELOG.md) — Version history
- [../CONTRIBUTING.md](../CONTRIBUTING.md) — Contribution guidelines
- [../CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md) — Community standards

## License

MIT
