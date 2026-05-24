# SnapGallery

A responsive image gallery application built with React and TypeScript.

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)

## Overview

SnapGallery is a modern image gallery with category filtering, lightbox viewing, and keyboard navigation. Built with React 18, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive grid layout with lazy loading
- Image filtering by category
- Full-screen lightbox viewer
- Keyboard navigation (arrow keys, ESC)
- Accessible markup and ARIA labels
- Mobile-responsive design
- Fast builds with Vite

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+ or bun 1.0+

### Installation

```bash
git clone https://github.com/yourusername/snapgallery.git
cd snapgallery
npm install
npm run dev
```

Development server runs on http://localhost:8080.

### Production

```bash
npm run build
npm run preview
```

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Project Structure

```
src/
├── components/       React components
│   ├── ui/          shadcn/ui components
│   └── NavLink.tsx
├── pages/           Page components
│   ├── Index.tsx    Main gallery
│   └── NotFound.tsx 404 page
├── hooks/           Custom hooks
├── lib/             Utilities
├── assets/gallery/  Gallery images
├── App.tsx          Root component
└── main.tsx         Entry point
```

## Gallery Configuration

Add images to `src/assets/gallery/` and update the images array in `src/pages/Index.tsx`:

```typescript
{
  id: 9,
  src: yourImage,
  title: 'Image Title',
  category: 'nature',
  description: 'Image description'
}
```

Categories are defined in the same file and can be customized.

## Technology

- React 18
- TypeScript 5
- Vite 5
- Tailwind CSS 3
- shadcn/ui
- React Router 6
- TanStack Query
- Vitest

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — Design and structure
- [Setup Guide](docs/SETUP.md) — Development setup
- [API Reference](docs/API.md) — Component and function reference
- [Contributing](CONTRIBUTING.md) — Contribution guidelines
- [Code of Conduct](CODE_OF_CONDUCT.md) — Community standards

## License

MIT

## 🛠️ Tech Stack

- **Frontend Framework** - [React 18](https://react.dev)
- **Language** - [TypeScript 5](https://www.typescriptlang.org)
- **Build Tool** - [Vite 5](https://vitejs.dev)
- **Styling** - [Tailwind CSS 3](https://tailwindcss.com)
- **UI Components** - [shadcn/ui](https://ui.shadcn.com)
- **Component Library** - [Radix UI](https://www.radix-ui.com)
- **Routing** - [React Router 6](https://reactrouter.com)
- **State Management** - [TanStack Query](https://tanstack.com/query)
- **Form Handling** - [React Hook Form](https://react-hook-form.com)
- **Testing** - [Vitest](https://vitest.dev)

## 📖 Usage

### Adding New Images

1. Add your images to `src/assets/gallery/`
2. Edit `src/pages/Index.tsx` and add entries to the `images` array:

   ```typescript
   {
     id: 9,
     src: yourImage,
     title: 'Image Title',
     category: 'nature', // or 'city', 'animals', 'people'
     description: 'Image description'
   }
   ```

### Customizing Categories

Edit the `categories` array in `src/pages/Index.tsx`:

```typescript
const categories = ['all', 'nature', 'city', 'animals', 'people', 'your-category'];
```

### Styling

- **Global Styles** - `src/index.css`
- **Component Styles** - `src/App.css`
- **Tailwind Config** - `tailwind.config.ts`

## 🤝 Contributing

We love contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

- **Issues** - [GitHub Issues](https://github.com/yourusername/snapgallery/issues)
- **Documentation** - [docs/](docs/)
- **Email** - your-email@example.com

## 🗺️ Roadmap

- [ ] Advanced filtering options
- [ ] Image search functionality
- [ ] User favorites/bookmarks
- [ ] Image upload feature
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Backend integration

## 📚 Documentation

- [Architecture](docs/ARCHITECTURE.md) - Project architecture and design decisions
- [Contributing](CONTRIBUTING.md) - Contribution guidelines
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines
- [Setup Guide](docs/SETUP.md) - Detailed setup instructions

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for amazing UI components
- [Radix UI](https://www.radix-ui.com) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- All contributors and users who have supported this project

## 📝 Changelog

See [docs/CHANGELOG.md](docs/CHANGELOG.md) for version history and updates.

---

**Made with ❤️ by the SnapGallery Team**

