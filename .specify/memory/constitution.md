<!--
SYNC IMPACT REPORT:
Version change: INITIAL → 1.0.0 (new constitution)
Modified principles: N/A (initial creation)
Added sections:
- User-Centric Design principle
- Real-time Preview principle
- Export Quality (NON-NEGOTIABLE) principle
- Data Privacy principle
- Cross-Platform Compatibility principle
- Performance Standards section
- Quality Assurance section
Removed sections: N/A (initial creation)
Templates requiring updates:
✅ .specify/templates/plan-template.md (Constitution Check references)
✅ .specify/templates/spec-template.md (requirements alignment)
✅ .specify/templates/tasks-template.md (task categorization alignment)
Follow-up TODOs: None
-->

# Link Preview Card Builder Constitution

## Core Principles

### User-Centric Design
Every feature must prioritize user experience and accessibility. Interface must be intuitive with minimal learning curve. Support for multiple export formats (PNG, HTML) is mandatory.

### Real-time Preview
Users must see immediate visual feedback when inputting URL, title, description, or image changes. No delay between input and preview update exceeding 200ms.

### Export Quality (NON-NEGOTIABLE)
Generated cards must meet social media platform standards. PNG exports must be high-resolution. HTML exports must be valid, semantic, and optimized for sharing.

### Data Privacy
User-provided URLs and content must not be stored permanently. Processing must be client-side when possible. No tracking or analytics without explicit consent.

### Cross-Platform Compatibility
Tool must work consistently across modern browsers (Chrome, Firefox, Safari, Edge). Mobile responsive design required. Touch-friendly interface for tablets and phones.

## Performance Standards

Card generation must complete within 2 seconds. Initial page load must be under 1 second. Bundle size must remain under 1MB. Image processing must support common formats (JPEG, PNG, WebP, SVG).

## Quality Assurance

All export formats must be tested across target platforms. Visual regression testing required for UI changes. Accessibility compliance (WCAG 2.1 AA) mandatory for all interface elements.

## Governance

All changes must maintain export compatibility with existing social media platforms. User interface changes require usability testing. Performance regressions are blocking for releases.

**Version**: 1.0.0 | **Ratified**: 2026-03-04 | **Last Amended**: 2026-03-04