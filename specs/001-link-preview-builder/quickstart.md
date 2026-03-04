# Quickstart Guide: Link Preview Card Builder

## Prerequisites

- **Node.js**: Version 18+ (LTS recommended)
- **npm** or **pnpm**: Package manager
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

## Installation & Setup

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd link-preview-card-builder
npm install
```

### 2. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
npm run preview  # Test production build locally
```

## Project Structure

```
src/
├── components/           # UI components
│   ├── PreviewCard/     # Main preview card component
│   ├── URLInput/        # URL input with validation
│   ├── CustomizationPanel/ # Title/description/image editing
│   └── ExportControls/  # PNG/HTML export buttons
├── services/            # Business logic
│   ├── metadata-extractor/ # URL metadata fetching
│   ├── image-processor/    # Image upload/processing
│   └── export-generator/   # PNG/HTML export logic
├── utils/              # Utility functions
│   ├── validation/     # Input validation
│   └── formatters/     # Data formatting
├── styles/             # Tailwind CSS customizations
└── types/              # TypeScript definitions
```

## Development Workflow

### 1. Basic Usage (User Perspective)

1. **Enter URL**: Paste any URL into the input field
2. **Auto-fetch**: Metadata (title, description, image) loads automatically
3. **Customize**: Edit title, description, or upload custom image
4. **Export**: Download as PNG or copy HTML code

### 2. Component Development

```typescript
// Example: Creating a new card template
import { CardTemplate } from '@/types/card';

const newTemplate: CardTemplate = {
  layout: 'horizontal',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  fontSize: 24,
  fontFamily: 'Inter, sans-serif',
  padding: 24,
  borderRadius: 8
};
```

### 3. Adding New Features

```typescript
// Example: New metadata source
export class MetadataExtractor {
  async extract(url: string): Promise<LinkMetadata> {
    // 1. Validate URL
    // 2. Fetch via CORS proxy
    // 3. Parse HTML for Open Graph tags
    // 4. Return structured metadata
  }
}
```

## Configuration

### Environment Variables

Create `.env.local` for local development:

```bash
# CORS Proxy Configuration
VITE_PRIMARY_PROXY=https://api.allorigins.win/get
VITE_FALLBACK_PROXY=https://cors-anywhere.herokuapp.com
VITE_CACHE_TTL=3600000  # 1 hour in milliseconds

# Export Settings
VITE_DEFAULT_EXPORT_WIDTH=1200
VITE_DEFAULT_EXPORT_HEIGHT=630
VITE_MAX_IMAGE_SIZE=5242880  # 5MB in bytes
```

### Tailwind Configuration

Customize design system in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'card-bg': '#ffffff',
        'card-text': '#1f2937',
        'card-border': '#e5e7eb',
      },
      fontFamily: {
        'card': ['Inter', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        'social': '1.91/1', // 1200x630 ratio
      }
    }
  }
}
```

## Testing

### Unit Tests

```bash
npm run test          # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Cross-Browser Testing

```bash
npm run test:e2e      # Playwright tests across browsers
npm run test:mobile   # Mobile viewport tests
```

### Visual Regression Tests

```bash
npm run test:visual   # Screenshot comparisons
npm run test:exports  # Validate PNG/HTML exports
```

## Deployment

### GitHub Pages

1. **Automatic**: Push to main branch triggers GitHub Actions deployment
2. **Manual**: Run `npm run build` and deploy `/dist` folder

### Build Configuration

```typescript
// vite.config.ts
export default defineConfig({
  base: '/link-preview-card-builder/', // GitHub Pages base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'html2canvas': ['html2canvas'], // Separate chunk for export library
        }
      }
    }
  }
});
```

## Common Use Cases

### 1. Social Media Managers

```bash
# Use case: Create multiple cards for campaign
1. Enter blog post URL
2. Customize title for Twitter vs Facebook
3. Export PNG for each platform
4. Copy HTML for website embedding
```

### 2. Content Creators

```bash
# Use case: Custom preview for newsletter
1. Enter article URL
2. Upload brand logo as image
3. Customize description for audience
4. Export high-res PNG for email
```

### 3. Developers

```bash
# Use case: Generate previews for documentation
1. Enter GitHub repo URL
2. Add custom description
3. Copy HTML for README embedding
4. Export PNG for presentations
```

## Troubleshooting

### Common Issues

**Issue**: "CORS Error" when fetching URL metadata
**Solution**: URL might block CORS requests. Try manual input or different proxy.

**Issue**: PNG export quality is poor
**Solution**: Ensure browser zoom is 100% and image sources are high resolution.

**Issue**: HTML export not rendering correctly
**Solution**: Check for external dependencies (fonts, images) that need to be embedded.

### Performance Optimization

```typescript
// Optimize large images before preview
const optimizeImage = (file: File): Promise<File> => {
  // Resize to max 800x600 for preview
  // Keep original for export
  // Compress if over 1MB
};

// Debounce URL input to avoid excessive requests
const debouncedFetch = debounce(fetchMetadata, 500);
```

## API Reference

### Core Types

```typescript
interface LinkMetadata {
  url: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  favicon?: string;
}

interface PreviewCard {
  metadata: LinkMetadata;
  template: CardTemplate;
  status: 'idle' | 'loading' | 'loaded' | 'error';
}

interface ExportOptions {
  format: 'png' | 'html';
  quality?: number;      // PNG only
  scale?: number;        // PNG only
  filename?: string;     // Custom filename
}
```

### Main Functions

```typescript
// Metadata extraction
export const extractMetadata = (url: string): Promise<LinkMetadata>;

// Card generation
export const generateCard = (metadata: LinkMetadata, template: CardTemplate): PreviewCard;

// Export functions
export const exportToPNG = (card: PreviewCard, options?: ExportOptions): Promise<Blob>;
export const exportToHTML = (card: PreviewCard): string;
export const copyToClipboard = (content: string): Promise<void>;
```

## Next Steps

1. **Customize Templates**: Modify card layouts and styling
2. **Add Integrations**: Connect to content management systems
3. **Extend Export Formats**: Add SVG or PDF export options
4. **Analytics**: Track usage patterns (privacy-compliant)
5. **Batch Processing**: Support multiple URLs at once

For detailed implementation guidance, see the [data-model.md](./data-model.md) and [contracts/](./contracts/) documentation.