# Export Formats Contract

## Overview

Defines the output specifications for PNG and HTML exports from link preview cards.

## PNG Export Format

### Technical Specifications

```typescript
interface PNGExportConfig {
  // Dimensions (social media standard)
  width: 1200;          // Fixed width in pixels
  height: 630;          // Fixed height in pixels (1.91:1 aspect ratio)
  scale: 2;             // Scale factor for high-DPI displays
  quality: 0.95;        // PNG quality (0.0 - 1.0)
  backgroundColor: string; // Fallback background color

  // Output format
  format: 'image/png';
  filename: string;     // Generated filename pattern
}
```

### Filename Convention

```typescript
interface FilenameFormat {
  pattern: '{title}-{timestamp}.png';
  // Examples:
  // "github-homepage-20240304-143022.png"
  // "my-awesome-project-20240304-143022.png"

  sanitization: {
    // Remove invalid filename characters
    invalidChars: /[<>:"/\\|?*]/g;
    replacement: '-';
    maxLength: 50; // Truncate long titles
  }
}
```

### Quality Requirements

- **Resolution**: Minimum 1200x630 pixels (Facebook/Twitter standard)
- **Color Depth**: 24-bit RGB or 32-bit RGBA
- **File Size**: Target <500KB for social sharing
- **Browser Compatibility**: Support Chrome, Firefox, Safari, Edge

### Export Process

```typescript
interface PNGExportProcess {
  // 1. Prepare card element for export
  prepareElement(): HTMLElement;

  // 2. Configure html2canvas options
  getCanvasOptions(): {
    width: 1200;
    height: 630;
    scale: 2;
    backgroundColor: string;
    useCORS: true;
    allowTaint: false;
    logging: false;
  };

  // 3. Generate and download
  exportToPNG(element: HTMLElement): Promise<void>;
}
```

## HTML Export Format

### Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link Preview Card</title>
    <style>
        /* Embedded CSS for standalone rendering */
        .link-preview-card { /* ... */ }
    </style>
</head>
<body>
    <div class="link-preview-card">
        <div class="card-content">
            <img src="{imageUrl}" alt="Preview image" class="card-image">
            <div class="card-text">
                <h2 class="card-title">{title}</h2>
                <p class="card-description">{description}</p>
                <span class="card-url">{displayUrl}</span>
            </div>
        </div>
    </div>
</body>
</html>
```

### CSS Standards

```css
/* Embedded CSS requirements */
.link-preview-card {
    /* Fixed dimensions matching PNG export */
    width: 1200px;
    height: 630px;

    /* Social media compatibility */
    box-sizing: border-box;
    overflow: hidden;

    /* Typography */
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: 24px;
    line-height: 1.4;

    /* Layout */
    display: flex;
    align-items: center;
    background: var(--bg-color);
    color: var(--text-color);
}
```

### Semantic Structure

```typescript
interface HTMLExportStructure {
  // Required semantic elements
  elements: {
    container: 'div[role="article"]';      // Main container
    image: 'img[alt="Preview image"]';     // Preview image
    title: 'h2';                          // Card title
    description: 'p';                     // Card description
    url: 'span[aria-label="Source URL"]';  // Source URL
  };

  // Accessibility requirements
  accessibility: {
    altText: string;        // Image alt text
    ariaLabels: string[];   // ARIA labels for screen readers
    colorContrast: number;  // WCAG 2.1 AA compliance (4.5:1 minimum)
  };
}
```

### Embedding Compatibility

```typescript
interface EmbedRequirements {
  // Platform compatibility
  platforms: [
    'WordPress',      // Blog embedding
    'Medium',         // Article embedding
    'Ghost',          // CMS embedding
    'Static Sites'    // Direct HTML inclusion
  ];

  // CSS isolation
  cssScope: {
    useNamespacing: true;     // Prefix all classes
    prefix: 'lpc-';           // Link Preview Card prefix
    resetStyles: boolean;     // Include CSS reset
  };

  // Content Security Policy
  csp: {
    inlineStyles: true;       // Must work with inline CSS
    externalFonts: false;     // No external font dependencies
    images: 'data-uri | url'; // Support both data URIs and URLs
  };
}
```

## Copy-to-Clipboard Integration

### JavaScript API

```typescript
interface ClipboardAPI {
  // Copy HTML to clipboard
  copyHTML(htmlContent: string): Promise<void>;

  // Fallback for older browsers
  fallbackCopy(content: string): Promise<void>;

  // User feedback
  showCopySuccess(): void;
  showCopyError(error: string): void;
}
```

### Browser Compatibility

- **Modern Browsers**: Use Clipboard API with `text/html` MIME type
- **Fallback**: Use `document.execCommand('copy')` with textarea
- **User Feedback**: Toast notification for success/error states

## Export Testing Requirements

### Validation Checklist

```typescript
interface ExportValidation {
  png: {
    dimensions: [1200, 630];     // Exact pixel dimensions
    fileSize: '<500KB';          // Size constraint
    quality: '>90%';             // Visual quality
    browserSupport: string[];    // Cross-browser validation
  };

  html: {
    validity: 'W3C HTML5';       // HTML validation
    accessibility: 'WCAG 2.1 AA'; // Accessibility compliance
    embedding: string[];         // Platform compatibility
    standalone: boolean;         // Works without external dependencies
  };
}
```

### Performance Targets

- **PNG Generation**: <3 seconds for typical cards
- **HTML Generation**: <100ms (template rendering)
- **Download Trigger**: Immediate (no additional loading)
- **Clipboard Copy**: <200ms feedback response