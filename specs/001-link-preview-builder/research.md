# Technical Research: Link Preview Card Builder

**Date**: 2026-03-04
**Feature**: Link Preview Card Builder
**Research Phase**: Resolving technical uncertainties for implementation planning

## Research Decisions

### 1. Framework Choice: Vite + TypeScript

**Decision**: Use Vite as build tool with TypeScript for type safety

**Rationale**:
- Vite provides fast development builds and optimized production bundles
- Built-in TypeScript support without additional configuration
- Excellent tree-shaking for bundle size optimization (<1MB target)
- Fast hot module replacement for real-time development
- Static build output perfect for GitHub Pages deployment

**Alternatives Considered**:
- Create React App: Heavier bundle, slower builds
- Webpack directly: More complex configuration
- Vanilla JavaScript: No type safety, harder to maintain

**Implementation Considerations**:
- Use `vite build` for production builds optimized for static hosting
- Configure bundle splitting to keep initial load small
- TypeScript ensures type safety for metadata and export functions

### 2. UI Framework: Tailwind CSS

**Decision**: Use Tailwind CSS for styling with responsive design

**Rationale**:
- Utility-first approach enables rapid responsive development
- Built-in responsive modifiers (sm:, md:, lg:) for mobile compatibility
- Excellent tree-shaking removes unused styles (bundle size optimization)
- No runtime CSS-in-JS overhead for better performance
- Pre-configured design system ensures consistent UI

**Alternatives Considered**:
- Styled Components: Runtime overhead, larger bundle
- Plain CSS: More maintenance, no design system
- Bootstrap: Larger bundle, less customizable

**Implementation Considerations**:
- Use Tailwind's responsive utilities for mobile-first design
- Configure custom colors/spacing for link preview card templates
- Leverage Tailwind's animation classes for smooth preview updates

### 3. Metadata Extraction Method: Open Graph Proxy

**Decision**: Use a CORS proxy service for metadata extraction

**Rationale**:
- Client-side direct requests blocked by CORS policy
- Proxy services like `allorigins.win` or `cors-anywhere` enable client-side fetching
- Fallback to manual input when proxy fails
- No server-side infrastructure required (GitHub Pages compatible)

**Alternatives Considered**:
- Server-side API: Requires backend infrastructure (not compatible with GitHub Pages)
- Browser extension: Limited distribution and user experience
- Manual input only: Poor user experience for core feature

**Implementation Considerations**:
- Implement fallback chain: proxy → manual input
- Cache successful responses in sessionStorage
- Add loading states for network requests
- Parse Open Graph tags and Twitter Card metadata

### 4. PNG Export Implementation: html2canvas

**Decision**: Use `html2canvas` library for DOM-to-PNG conversion

**Rationale**:
- Mature library specifically for DOM element capture
- Supports high-resolution output (can achieve 1200x630px requirement)
- Client-side only, no server dependency
- Good browser compatibility across target browsers

**Alternatives Considered**:
- Canvas API manually: Complex implementation, reinventing the wheel
- SVG + foreignObject: Browser compatibility issues
- Puppeteer: Requires server-side infrastructure

**Implementation Considerations**:
- Configure scale factor for high-resolution export (2x for retina)
- Handle custom fonts and external images properly
- Implement download trigger with proper filename
- Add loading state during export process

### 5. Testing Framework: Vitest + Playwright

**Decision**: Use Vitest for unit tests and Playwright for cross-browser testing

**Rationale**:
- Vitest integrates seamlessly with Vite (same config, fast execution)
- Playwright provides reliable cross-browser testing (Chrome, Firefox, Safari, Edge)
- Supports mobile viewport testing for responsive validation
- TypeScript support out of the box

**Alternatives Considered**:
- Jest: Requires additional configuration with Vite
- Cypress: Heavier, less reliable for cross-browser testing
- Browser-specific testing: Manual and incomplete coverage

**Implementation Considerations**:
- Unit tests for utility functions (validation, formatting)
- Integration tests for component interactions
- E2E tests for complete user workflows across browsers
- Visual regression tests for export quality validation

### 6. Performance Optimization Strategies

**Decision**: Multiple optimization approaches for <1s load, <200ms updates

**Strategies Implemented**:

- **Bundle Optimization**:
  - Vite's built-in code splitting and tree-shaking
  - Dynamic imports for heavy dependencies (html2canvas)
  - Minimize initial JavaScript bundle

- **Real-time Updates**:
  - Reactive data binding (no full DOM re-renders)
  - Debounced input handlers (200ms delay)
  - CSS transitions for smooth visual feedback

- **Asset Optimization**:
  - Optimize images and fonts
  - Use modern formats (WebP for images)
  - Implement lazy loading for non-critical resources

**Performance Targets**:
- Initial bundle: <500KB (leaves room for dependencies)
- First Contentful Paint: <1s
- Preview update latency: <200ms
- Export generation: <3s for typical cards

## Architecture Summary

**Technology Stack**:
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest + Playwright
- **Key Libraries**: html2canvas (PNG export)

**Deployment**:
- Static build output via `vite build`
- Deploy to GitHub Pages via GitHub Actions
- CDN delivery for global performance

**Browser Support**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

This architecture fully supports all constitutional requirements while maintaining the static hosting constraint for GitHub Pages deployment.