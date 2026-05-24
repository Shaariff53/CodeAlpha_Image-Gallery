# Contributing

We welcome contributions. Before submitting, please review our [Code of Conduct](CODE_OF_CONDUCT.md).

## Bug Reports

When reporting a bug, include:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, npm/bun version)
- Screenshots if applicable

## Feature Requests

Describe:
- Clear title
- What and why you're proposing
- Use cases and examples
- Current workarounds (if any)

## Pull Requests

- Follow the [template](.github/pull_request_template.md)
- Use TypeScript for new code
- Include tests for new features
- Run linter and tests locally
- Keep commits focused and descriptive

## Style Guide

### Code

Use functional components with React hooks. Add TypeScript types and JSDoc comments for complex logic.

Example:
```typescript
/**
 * Filters images by category
 */
const filterImages = (images: Image[], category: string): Image[] => {
  return category === 'all'
    ? images
    : images.filter(img => img.category === category);
};
```

### Commits

- Use present tense: "Add feature" not "Added feature"
- Use imperative mood: "Move cursor" not "Moves cursor"
- Limit first line to 72 characters
- Reference related issues

### Tests

- Write tests for new features
- Run before submitting: `npm run test`

### Linting

- Run ESLint: `npm run lint`
- Fix issues: `npm run lint -- --fix`

## Development Setup

```bash
git clone https://github.com/yourusername/snapgallery.git
cd snapgallery
npm install
npm run dev
```

See [docs/SETUP.md](docs/SETUP.md) for detailed setup.

## Questions?

Open a [GitHub discussion](https://github.com/yourusername/snapgallery/discussions).
