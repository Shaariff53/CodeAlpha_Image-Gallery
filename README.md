# 🖼️ SnapGallery

A modern, responsive image gallery application built with React, TypeScript, and Tailwind CSS. Features seamless category filtering, beautiful lightbox viewing, and smooth animations.

[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5+-purple?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org)

## ✨ Features

- **📱 Responsive Design** - Looks great on desktop, tablet, and mobile devices
- **🎨 Dynamic Gallery** - Beautiful grid layout with smooth animations
- **🔍 Category Filtering** - Filter images by nature, city, animals, people, or view all
- **🖼️ Lightbox Viewer** - Full-screen image viewing with image details
- **⌨️ Keyboard Navigation** - Navigate with arrow keys, close with ESC
- **⚡ Modern Stack** - React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **🎯 Accessibility** - ARIA labels, semantic HTML, keyboard support
- **🚀 Performance** - Lazy loading, optimized images, fast build times

## 🎯 Quick Start

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0+ or **bun** 1.0.0+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/snapgallery.git
   cd snapgallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or using bun
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

   The application will open at **http://localhost:8080**

### Building for Production

```bash
npm run build
# or
bun run build
```

Production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## 📁 Project Structure

```
snapgallery/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── NavLink.tsx     # Navigation link wrapper
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Gallery page
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── assets/
│   │   └── gallery/        # Gallery images
│   ├── styles/             # CSS files
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── public/                 # Static files
├── docs/                   # Documentation
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── README.md               # This file
```

## 🎨 Gallery Features

### Categories
- **Nature** - Landscapes and natural scenery
- **City** - Urban and architectural photography
- **Animals** - Wildlife and animal photography
- **People** - Portrait and human photography

### Interactions
- Click any image to open the lightbox
- Use arrow keys (← →) to navigate between images
- Press ESC to close the lightbox
- Filter by category to refine the gallery view

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

