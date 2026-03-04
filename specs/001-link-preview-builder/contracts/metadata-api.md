# Metadata Extraction API Contract

## Overview

Defines the interface for extracting Open Graph and Twitter Card metadata from URLs via CORS proxy services.

## Request Format

### Primary Proxy Service

```typescript
interface MetadataRequest {
  // Base URL: https://api.allorigins.win/get
  url: string;          // Target URL to extract metadata from
  format: 'raw';        // Response format
  callback?: string;    // Optional JSONP callback
}
```

**Example Request**:
```
GET https://api.allorigins.win/get?format=raw&url=https://example.com
```

### Fallback Proxy Services

1. **cors-anywhere.herokuapp.com**
   ```
   GET https://cors-anywhere.herokuapp.com/https://example.com
   ```

2. **allorigins.win (JSON format)**
   ```
   GET https://api.allorigins.win/get?format=json&url=https://example.com
   ```

## Response Format

### Successful Response

```typescript
interface MetadataResponse {
  // Raw HTML content from target URL
  html: string;

  // Extracted Open Graph metadata
  openGraph: {
    title?: string;       // og:title
    description?: string; // og:description
    image?: string;       // og:image
    url?: string;         // og:url
    type?: string;        // og:type
    siteName?: string;    // og:site_name
  };

  // Extracted Twitter Card metadata
  twitterCard: {
    title?: string;       // twitter:title
    description?: string; // twitter:description
    image?: string;       // twitter:image
    card?: string;        // twitter:card
  };

  // Basic HTML metadata
  basic: {
    title?: string;       // <title> tag
    description?: string; // meta[name="description"]
    favicon?: string;     // link[rel="icon"] or link[rel="shortcut icon"]
  };
}
```

### Error Response

```typescript
interface MetadataError {
  error: string;          // Error description
  code: 'CORS_ERROR' |    // CORS policy blocking
        'NETWORK_ERROR' |  // Network/DNS failure
        'TIMEOUT_ERROR' |  // Request timeout
        'INVALID_URL' |    // Malformed URL
        'NOT_FOUND';       // 404 or similar
  url: string;           // Original requested URL
}
```

## Implementation Requirements

### Timeout Handling
- Maximum request timeout: 10 seconds
- Show loading state during fetch
- Graceful degradation to manual input on timeout

### Error Handling
- Implement fallback chain across multiple proxy services
- Cache successful responses for 1 hour in sessionStorage
- Provide clear user feedback for different error types

### Rate Limiting
- Debounce URL input changes (500ms)
- Avoid duplicate requests for same URL
- Respect proxy service rate limits

## Security Considerations

### Input Validation
- Validate URL format before sending requests
- Sanitize extracted metadata before display
- Filter out potentially malicious script content

### Content Security Policy
- Ensure proxy services are whitelisted in CSP
- Handle mixed content warnings (HTTP vs HTTPS)
- Validate image URLs before preview display

## Performance Optimization

### Caching Strategy
```typescript
interface MetadataCache {
  [url: string]: {
    data: MetadataResponse;
    timestamp: number;
    ttl: number; // 1 hour = 3600000ms
  }
}
```

### Prefetch Optimization
- Extract metadata as soon as valid URL is entered
- Use web workers for HTML parsing (if needed)
- Compress cached data to reduce storage usage

## Testing Contract

### Mock Response Format
```typescript
interface MockMetadataService {
  // Test different response scenarios
  success(url: string): Promise<MetadataResponse>;
  corsError(url: string): Promise<MetadataError>;
  networkError(url: string): Promise<MetadataError>;
  timeout(url: string): Promise<MetadataError>;

  // Control test behavior
  setLatency(ms: number): void;
  enableRandomFailures(rate: number): void;
}