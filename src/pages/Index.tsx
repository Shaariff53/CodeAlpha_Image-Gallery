import { useEffect, useRef } from 'react';

// Import images
import nature1 from '@/assets/gallery/nature-1.jpg';
import nature2 from '@/assets/gallery/nature-2.jpg';
import city1 from '@/assets/gallery/city-1.jpg';
import city2 from '@/assets/gallery/city-2.jpg';
import animals1 from '@/assets/gallery/animals-1.jpg';
import animals2 from '@/assets/gallery/animals-2.jpg';
import people1 from '@/assets/gallery/people-1.jpg';
import people2 from '@/assets/gallery/people-2.jpg';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ============================================
    // DATA - Image gallery data array
    // ============================================
    const images = [
      { id: 1, src: nature1, title: 'Yosemite Sunrise', category: 'nature', description: 'Golden light breaks over granite cliffs' },
      { id: 2, src: city1, title: 'Manhattan Blue Hour', category: 'city', description: 'Empire State Building at twilight' },
      { id: 3, src: animals1, title: 'African Giant', category: 'animals', description: 'Elephant in the golden savanna' },
      { id: 4, src: people1, title: 'Café Conversations', category: 'people', description: 'Friends sharing laughter' },
      { id: 5, src: nature2, title: 'Aurora Dreams', category: 'nature', description: 'Northern Lights over Iceland' },
      { id: 6, src: city2, title: 'Tokyo Rain', category: 'city', description: 'Neon reflections on wet streets' },
      { id: 7, src: animals2, title: 'Ocean Voyager', category: 'animals', description: 'Sea turtle in crystal waters' },
      { id: 8, src: people2, title: 'The Craftsman', category: 'people', description: 'Skilled hands at work' },
    ];

    const categories = ['all', 'nature', 'city', 'animals', 'people'];

    // ============================================
    // STATE - Track current filter and lightbox state
    // ============================================
    let currentCategory = 'all';
    let currentImageIndex = -1;
    let filteredImages = [...images];

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const container = containerRef.current;
    const filterContainer = container.querySelector('.filter-buttons') as HTMLElement;
    const galleryGrid = container.querySelector('.gallery-grid') as HTMLElement;
    const lightbox = container.querySelector('.lightbox') as HTMLElement;
    const lightboxImage = container.querySelector('.lightbox-image') as HTMLImageElement;
    const lightboxTitle = container.querySelector('.lightbox-title') as HTMLElement;
    const lightboxCategory = container.querySelector('.lightbox-category') as HTMLElement;
    const lightboxDescription = container.querySelector('.lightbox-description') as HTMLElement;
    const prevBtn = container.querySelector('.prev-btn') as HTMLButtonElement;
    const nextBtn = container.querySelector('.next-btn') as HTMLButtonElement;
    const closeBtn = container.querySelector('.close-btn') as HTMLButtonElement;

    // ============================================
    // FUNCTIONS
    // ============================================

    // Filter images by category
    function filterImages(category: string) {
      currentCategory = category;
      filteredImages = category === 'all' 
        ? [...images] 
        : images.filter(img => img.category === category);
      
      // Update active filter button
      filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === category);
      });

      // Render gallery with animation
      renderGallery();
    }

    // Render gallery grid
    function renderGallery() {
      galleryGrid.innerHTML = '';
      
      filteredImages.forEach((image, index) => {
        // Create gallery item
        const item = document.createElement('article');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1}s`;
        item.setAttribute('data-index', String(index));

        item.innerHTML = `
          <img src="${image.src}" alt="${image.title}" loading="lazy" />
          <div class="gallery-overlay">
            <span class="overlay-category">${image.category}</span>
            <h3 class="overlay-title">${image.title}</h3>
            <p class="overlay-description">${image.description}</p>
          </div>
        `;

        // Click to open lightbox
        item.addEventListener('click', () => openLightbox(index));

        galleryGrid.appendChild(item);
      });
    }

    // Open lightbox
    function openLightbox(index: number) {
      currentImageIndex = index;
      updateLightboxContent();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.add('closing');
      setTimeout(() => {
        lightbox.classList.remove('active', 'closing');
        document.body.style.overflow = '';
      }, 300);
    }

    // Update lightbox content
    function updateLightboxContent(direction?: 'next' | 'prev') {
      const image = filteredImages[currentImageIndex];
      
      // Add slide animation class
      if (direction) {
        lightboxImage.classList.add(`slide-${direction}`);
        setTimeout(() => {
          lightboxImage.src = image.src;
          lightboxImage.alt = image.title;
          lightboxImage.classList.remove(`slide-${direction}`);
          lightboxImage.classList.add(`slide-${direction}-enter`);
          setTimeout(() => lightboxImage.classList.remove(`slide-${direction}-enter`), 300);
        }, 150);
      } else {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.title;
      }

      lightboxTitle.textContent = image.title;
      lightboxCategory.textContent = image.category;
      lightboxDescription.textContent = image.description;

      // Update navigation buttons visibility
      prevBtn.style.display = currentImageIndex > 0 ? 'flex' : 'none';
      nextBtn.style.display = currentImageIndex < filteredImages.length - 1 ? 'flex' : 'none';
    }

    // Navigate to previous image
    function prevImage() {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxContent('prev');
      }
    }

    // Navigate to next image
    function nextImage() {
      if (currentImageIndex < filteredImages.length - 1) {
        currentImageIndex++;
        updateLightboxContent('next');
      }
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    // Filter button clicks
    filterContainer.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-btn');
      if (btn) {
        const category = btn.getAttribute('data-category') || 'all';
        filterImages(category);
      }
    });

    // Lightbox navigation
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    closeBtn.addEventListener('click', closeLightbox);

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    function handleKeyDown(e: KeyboardEvent) {
      if (!lightbox.classList.contains('active')) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    // ============================================
    // INITIALIZE
    // ============================================
    renderGallery();

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="gallery-page">
      {/* ============================================
          HTML STRUCTURE
          ============================================ */}
      
      {/* Header */}
      <header className="gallery-header">
        <h1 className="gallery-title">Image Gallery</h1>
        <p className="gallery-subtitle">
          Explore stunning photography. Click any image to view full size.
        </p>
      </header>

      {/* Filter Buttons */}
      <nav className="filter-buttons" aria-label="Filter images by category">
        <button className="filter-btn active" data-category="all">All</button>
        <button className="filter-btn" data-category="nature">Nature</button>
        <button className="filter-btn" data-category="city">City</button>
        <button className="filter-btn" data-category="animals">Animals</button>
        <button className="filter-btn" data-category="people">People</button>
      </nav>

      {/* Gallery Grid */}
      <main className="gallery-grid" role="list" aria-label="Image gallery">
        {/* Gallery items rendered by JavaScript */}
      </main>

      {/* Lightbox Modal */}
      <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
        <div className="lightbox-content">
          {/* Close Button */}
          <button className="close-btn" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Previous Button */}
          <button className="nav-btn prev-btn" aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Image Container */}
          <figure className="lightbox-figure">
            <img className="lightbox-image" src="" alt="" />
            <figcaption className="lightbox-info">
              <span className="lightbox-category"></span>
              <h2 className="lightbox-title"></h2>
              <p className="lightbox-description"></p>
            </figcaption>
          </figure>

          {/* Next Button */}
          <button className="nav-btn next-btn" aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="gallery-footer">
        <p>Use ← → arrow keys to navigate • Press ESC to close</p>
      </footer>
    </div>
  );
};

export default Index;
