# Data Model: Link Preview Card Builder

**Date**: 2026-03-04
**Feature**: Link Preview Card Builder

## Core Entities

### LinkMetadata

Represents metadata extracted from a URL or provided by user.

**Fields**:
- `url`: string (required) - The target URL for the preview card
- `title`: string (optional) - Page title or custom title
- `description`: string (optional) - Page description or custom description
- `imageUrl`: string (optional) - URL or data URL for preview image
- `favicon`: string (optional) - Website favicon URL

**Validation Rules**:
- `url` must be valid HTTP/HTTPS URL format
- `title` maximum 100 characters for optimal display
- `description` maximum 300 characters for optimal display
- `imageUrl` must be valid URL or base64 data URL
- Image dimensions should be optimized for 1.91:1 aspect ratio (social media standard)

**State Transitions**:
- Initial → Loading (during metadata fetch)
- Loading → Loaded (successful fetch)
- Loading → Error (failed fetch)
- Loaded → Modified (user customization)

### PreviewCard

Represents the visual preview card configuration and state.

**Fields**:
- `metadata`: LinkMetadata (required) - The content to display
- `template`: CardTemplate (required) - Visual design configuration
- `status`: CardStatus (required) - Current generation state
- `lastModified`: timestamp - When content was last updated

**Validation Rules**:
- `metadata.url` must be present and valid
- `template` must specify all required styling properties
- Card dimensions must support 1200x630px export requirement

**Relationships**:
- Contains one LinkMetadata instance
- Uses one CardTemplate configuration
- Can generate multiple ExportResult instances

### CardTemplate

Defines the visual appearance and layout of preview cards.

**Fields**:
- `layout`: 'horizontal' | 'vertical' (default: 'horizontal')
- `backgroundColor`: string (hex color)
- `textColor`: string (hex color)
- `fontSize`: number (for title)
- `fontFamily`: string
- `padding`: number (internal spacing)
- `borderRadius`: number (corner rounding)

**Validation Rules**:
- Colors must be valid hex format (#RRGGBB)
- Font size must be between 16-48px for readability
- Padding must be between 8-32px for proper spacing
- Border radius must be between 0-16px

**Default Configuration**:
```typescript
{
  layout: 'horizontal',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  fontSize: 24,
  fontFamily: 'Inter, system-ui, sans-serif',
  padding: 24,
  borderRadius: 8
}
```

### ExportResult

Represents the output from card export operations.

**Fields**:
- `type`: 'png' | 'html' (required) - Export format
- `data`: string | Blob (required) - Exported content
- `filename`: string (required) - Suggested filename
- `timestamp`: Date (required) - When export was generated
- `size`: number (optional) - File size in bytes

**Validation Rules**:
- PNG exports must be minimum 1200x630 pixels
- HTML exports must be valid markup
- Filenames must be safe for cross-platform download

### UserInput

Manages form input state and validation.

**Fields**:
- `url`: string - Current URL input value
- `title`: string - Custom title input
- `description`: string - Custom description input
- `customImage`: File | null - Uploaded image file
- `errors`: ValidationErrors - Current validation state

**Validation Rules**:
- URL format validation with real-time feedback
- File type validation for image uploads (JPEG, PNG, GIF, WebP)
- File size limit: 5MB for uploaded images
- Text field length limits with character counters

## Entity Relationships

```
UserInput
    ↓ (validation & processing)
LinkMetadata
    ↓ (content source)
PreviewCard ← CardTemplate (styling)
    ↓ (export generation)
ExportResult (PNG/HTML)
```

## Data Flow

1. **Input Phase**: User enters URL → UserInput validation → LinkMetadata creation
2. **Fetch Phase**: URL metadata extraction → LinkMetadata population
3. **Customization Phase**: User overrides → LinkMetadata updates → PreviewCard refresh
4. **Export Phase**: PreviewCard → ExportResult generation (PNG/HTML)

## State Management

### Application State Structure

```typescript
interface AppState {
  metadata: LinkMetadata | null;
  previewCard: PreviewCard | null;
  userInput: UserInput;
  template: CardTemplate;
  isLoading: boolean;
  error: string | null;
}
```

### State Transitions

- **Idle**: No URL entered, empty preview
- **Loading**: Fetching metadata from URL
- **Preview**: Card displayed with fetched/custom content
- **Exporting**: Generating PNG or HTML output
- **Error**: Display error message with recovery options

## Persistence

- **No Server Storage**: All data client-side only (GitHub Pages constraint)
- **Session Cache**: Use sessionStorage for fetched metadata (performance optimization)
- **No User Data**: No tracking or analytics storage (privacy compliance)

## Performance Considerations

- **Metadata Caching**: Cache successful URL fetches in sessionStorage (24h TTL)
- **Image Optimization**: Resize large uploaded images client-side before preview
- **Reactive Updates**: Immediate preview updates on input changes (<200ms target)
- **Export Optimization**: Generate exports asynchronously with progress feedback