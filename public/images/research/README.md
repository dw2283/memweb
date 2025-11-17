# Research Images Folder

This folder is for storing research-related images that will be displayed on the homepage research section.

## How to Add Images

1. **Place your images here**: Copy your image files (PNG, JPG, etc.) to this folder
   - Example: `intro.png`, `research-diagram.jpg`, etc.

2. **Update HomeView.vue**: Edit `src/views/HomeView.vue` and add your images to the `researchImages` array:

```typescript
const researchImages = ref<Array<{ url: string; alt?: string; title?: string; description?: string }>>([
  { 
    url: '/images/research/intro.png', 
    alt: 'Research Introduction', 
    title: 'Introduction', 
    description: 'Overview of our research methodology' 
  },
  { 
    url: '/images/research/diagram.jpg', 
    alt: 'Architecture Diagram', 
    title: 'System Architecture', 
    description: 'High-level system design' 
  },
  // Add more images as needed
])
```

## Image Path Format

- Images in this folder should be referenced as: `/images/research/your-image-name.png`
- The path is relative to the `public` folder

## Supported Formats

- PNG
- JPG/JPEG
- WebP
- SVG

## Notes

- Images will be displayed in a responsive grid layout
- Recommended aspect ratio: 16:9 (landscape)
- Keep file sizes reasonable for web performance

