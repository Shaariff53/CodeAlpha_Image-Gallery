# Contributing to SnapGallery

First off, thank you for considering contributing to SnapGallery! It's people like you that make SnapGallery such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, Node version, npm/bun version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the TypeScript/React styleguides
* Include appropriate test cases
* End all files with a newline
* Avoid platform-dependent code

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  * 🎨 `:art:` - Improve structure/format
  * 🐛 `:bug:` - Fix a bug
  * ✨ `:sparkles:` - Introduce new features
  * 📚 `:books:` - Documentation
  * 🔥 `:fire:` - Remove code or files
  * 🚀 `:rocket:` - Deploy stuff
  * ✅ `:white_check_mark:` - Add tests
  * 🔒 `:lock:` - Fix security issues

### TypeScript/React Style Guide

* Use functional components with hooks
* Use TypeScript for all new code
* Follow the existing code style
* Use meaningful variable names
* Add JSDoc comments for complex functions
* Use proper TypeScript types

Example:
```typescript
/**
 * Filters images by category
 * @param images - Array of image objects
 * @param category - Category filter
 * @returns Filtered images array
 */
const filterImages = (images: Image[], category: string): Image[] => {
  return category === 'all' 
    ? images 
    : images.filter(img => img.category === category);
};
```

### CSS/Tailwind Guidelines

* Use Tailwind CSS utility classes when possible
* Keep custom CSS minimal and well-organized
* Use meaningful class names
* Ensure responsive design

### Testing

* Write tests for new features
* Ensure all tests pass before submitting PR
* Run: `npm run test`

### Linting

* Run ESLint before committing
* Fix all linting errors and warnings
* Command: `npm run lint`

## Development Setup

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature or bugfix
4. Install dependencies: `npm install` or `bun install`
5. Make your changes
6. Run tests: `npm run test`
7. Run linter: `npm run lint`
8. Build: `npm run build`
9. Commit your changes with a meaningful commit message
10. Push to your fork
11. Create a Pull Request to the main repository

## Pull Request Process

1. Update the README.md with any new features or installation instructions
2. Update CHANGELOG.md with changes and version bump
3. Ensure all tests pass and linting is clean
4. Request review from maintainers
5. Address any feedback or requested changes
6. Once approved, your PR will be merged

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on

## Community

* Join our discussions for questions and ideas
* Follow us on social media for updates
* Read our blog for behind-the-scenes insights

Thank you for your interest in contributing to SnapGallery! 🎉
