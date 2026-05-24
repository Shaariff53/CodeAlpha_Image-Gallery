# API Documentation

## Gallery Component

The main gallery functionality is implemented in `src/pages/Index.tsx`.

### Image Object

```typescript
interface Image {
  id: number;
  src: string;
  title: string;
  category: 'nature' | 'city' | 'animals' | 'people';
  description: string;
}
```

### Categories

```typescript
const categories = ['all', 'nature', 'city', 'animals', 'people'];
```

### Functions

#### filterImages(category: string)

Filters the gallery images by selected category.

**Parameters:**
- `category` (string): The category to filter by ('all', 'nature', 'city', 'animals', 'people')

**Example:**
```typescript
filterImages('nature');
```

#### openLightbox(index: number)

Opens the lightbox modal with the image at the specified index.

**Parameters:**
- `index` (number): The index of the image in the filtered array

**Example:**
```typescript
openLightbox(0);
```

#### closeLightbox()

Closes the lightbox modal.

**Example:**
```typescript
closeLightbox();
```

#### prevImage()

Navigates to the previous image in the lightbox.

**Example:**
```typescript
prevImage();
```

#### nextImage()

Navigates to the next image in the lightbox.

**Example:**
```typescript
nextImage();
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous image in lightbox |
| `→` | Next image in lightbox |
| `ESC` | Close lightbox |

## HTML Classes

### Gallery

- `.gallery-page` - Main container
- `.gallery-header` - Header section
- `.gallery-title` - Title text
- `.gallery-subtitle` - Subtitle text
- `.filter-buttons` - Filter button container
- `.filter-btn` - Individual filter button
- `.filter-btn.active` - Active filter button
- `.gallery-grid` - Gallery grid container
- `.gallery-item` - Individual gallery item
- `.gallery-overlay` - Image overlay
- `.overlay-category` - Category label
- `.overlay-title` - Image title
- `.overlay-description` - Image description
- `.gallery-footer` - Footer with hints

### Lightbox

- `.lightbox` - Lightbox container
- `.lightbox.active` - Active/visible state
- `.lightbox.closing` - Closing animation state
- `.lightbox-content` - Lightbox content wrapper
- `.lightbox-figure` - Figure element
- `.lightbox-image` - Image element
- `.lightbox-info` - Info section
- `.lightbox-category` - Category label
- `.lightbox-title` - Image title
- `.lightbox-description` - Image description
- `.nav-btn` - Navigation button
- `.prev-btn` - Previous button
- `.next-btn` - Next button
- `.close-btn` - Close button

## CSS Animations

### Gallery Items

- `gallery-item` - Staggered fade-in animation
- Animation delay calculated per item: `index * 0.1s`

### Lightbox

- `slide-next` / `slide-prev` - Slide-out animation
- `slide-next-enter` / `slide-prev-enter` - Slide-in animation
- `closing` - Close animation

## Styling with Tailwind

The project uses Tailwind CSS for styling. Common utility classes:

```html
<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<!-- Responsive text -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">

<!-- Responsive padding -->
<div class="p-4 md:p-6 lg:p-8">

<!-- Dark mode support -->
<div class="dark:bg-slate-900 dark:text-white">
```

## Component Usage

### NavLink Component

A wrapper around React Router's NavLink with enhanced styling.

```typescript
import { NavLink } from '@/components/NavLink';

<NavLink 
  to="/gallery" 
  className="px-4 py-2"
  activeClassName="font-bold"
>
  Gallery
</NavLink>
```

### Using shadcn/ui Components

Import and use shadcn/ui components:

```typescript
import { Button } from "@/components/ui/button";

<Button variant="outline" size="lg">
  Click me
</Button>
```

## Hooks

### use-mobile

Detects if the device is mobile.

```typescript
import { useIsMobile } from '@/hooks/use-mobile';

const isMobile = useIsMobile();
```

### use-toast

Shows toast notifications.

```typescript
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();

toast({
  title: "Success",
  description: "Image uploaded successfully"
});
```

## Utilities

### cn() - Class Name Utility

Combines and merges Tailwind classes intelligently.

```typescript
import { cn } from "@/lib/utils";

const className = cn(
  "p-4 rounded",
  isActive && "bg-blue-500"
);
```

## Extending the Gallery

### Add New Image Category

1. Add new category to `categories` array
2. Add filter button in JSX
3. Update `Image` interface if needed

```typescript
const categories = ['all', 'nature', 'city', 'animals', 'people', 'custom'];
```

### Add New Images

Add entries to the `images` array in `Index.tsx`:

```typescript
{
  id: 9,
  src: newImage,
  title: 'New Image',
  category: 'nature',
  description: 'Image description'
}
```

### Customize Styling

Modify global styles:
- `src/index.css` - Global Tailwind
- `src/App.css` - Component styles
- `tailwind.config.ts` - Theme configuration

## Events

### Gallery Item Click

Opens lightbox when gallery item is clicked.

```typescript
item.addEventListener('click', () => openLightbox(index));
```

### Filter Button Click

Filters gallery by category.

```typescript
filterContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (btn) {
    const category = btn.getAttribute('data-category');
    filterImages(category);
  }
});
```

### Keyboard Events

Navigate lightbox with arrow keys, close with ESC.

```typescript
document.addEventListener('keydown', handleKeyDown);
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Tips

1. **Lazy Loading**: Images use `loading="lazy"`
2. **Image Optimization**: Use optimized image formats (WebP)
3. **Caching**: Browser caching enabled for assets
4. **Code Splitting**: Automatic with Vite

## Accessibility

- ARIA labels on buttons
- Semantic HTML elements
- Keyboard navigation support
- Color contrast compliant
- Alt text on images

## Security

- XSS protection via React's escaping
- Content Security Policy ready
- No inline scripts
- TypeScript for type safety

---

For more information, see [ARCHITECTURE.md](ARCHITECTURE.md) and [README.md](../README.md)
