---
description: "Task list template for feature implementation"
---

# Tasks: Link Preview Card Builder

**Input**: Design documents from `/specs/001-link-preview-builder/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No tests explicitly requested in feature specification - focusing on implementation tasks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Project structure based on plan.md: TypeScript + Vite + Tailwind CSS

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan
- [ ] T002 Initialize TypeScript project with Vite and Tailwind CSS dependencies
- [x] T003 [P] Configure ESLint and Prettier for TypeScript
- [x] T004 [P] Setup Vite configuration for GitHub Pages deployment in vite.config.ts
- [x] T005 [P] Configure Tailwind CSS with custom theme in tailwind.config.js
- [x] T006 [P] Setup TypeScript configuration in tsconfig.json
- [x] T007 Create main HTML template in index.html

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Create TypeScript type definitions in src/types/index.ts
- [ ] T009 [P] Create LinkMetadata interface in src/types/metadata.ts
- [ ] T010 [P] Create PreviewCard interface in src/types/card.ts
- [ ] T011 [P] Create CardTemplate interface in src/types/template.ts
- [ ] T012 [P] Create ExportResult interface in src/types/export.ts
- [ ] T013 [P] Create UserInput interface in src/types/input.ts
- [ ] T014 Setup base CSS styles and Tailwind utilities in src/styles/index.css
- [ ] T015 Create main application entry point in src/main.ts
- [ ] T016 Create basic application state management in src/store/app-state.ts
- [ ] T017 Setup error handling utilities in src/utils/error-handler.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Create Basic Link Preview Card (Priority: P1) 🎯 MVP

**Goal**: Users can input URLs, fetch metadata, see instant preview, and export PNG/HTML

**Independent Test**: Enter URL → see preview card → export PNG → copy HTML (complete workflow)

### Implementation for User Story 1

- [ ] T018 [P] [US1] Create URL validation utility in src/utils/validation/url-validator.ts
- [ ] T019 [P] [US1] Create URLInput component in src/components/URLInput/URLInput.vue
- [ ] T020 [P] [US1] Create URLInput styles in src/components/URLInput/URLInput.css
- [ ] T021 [US1] Implement metadata extraction service in src/services/metadata-extractor/metadata-service.ts
- [ ] T022 [US1] Create CORS proxy helper in src/services/metadata-extractor/cors-proxy.ts
- [ ] T023 [US1] Create HTML metadata parser in src/services/metadata-extractor/html-parser.ts
- [ ] T024 [P] [US1] Create PreviewCard component in src/components/PreviewCard/PreviewCard.vue
- [ ] T025 [P] [US1] Create PreviewCard styles in src/components/PreviewCard/PreviewCard.css
- [ ] T026 [US1] Implement PNG export service in src/services/export-generator/png-exporter.ts
- [ ] T027 [US1] Implement HTML export service in src/services/export-generator/html-exporter.ts
- [ ] T028 [P] [US1] Create ExportControls component in src/components/ExportControls/ExportControls.vue
- [ ] T029 [P] [US1] Create ExportControls styles in src/components/ExportControls/ExportControls.css
- [ ] T030 [US1] Create clipboard utility in src/utils/clipboard.ts
- [ ] T031 [US1] Create download trigger utility in src/utils/download.ts
- [ ] T032 [US1] Integrate components in main App component in src/App.vue
- [ ] T033 [US1] Add error states and loading indicators for metadata fetching
- [ ] T034 [US1] Add sessionStorage caching for fetched metadata in src/utils/cache.ts

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Customize Card Content (Priority: P2)

**Goal**: Users can override title, description, and image with real-time preview updates

**Independent Test**: Enter URL → modify title/description → upload image → see immediate preview changes

### Implementation for User Story 2

- [ ] T035 [P] [US2] Create text input validation utility in src/utils/validation/text-validator.ts
- [ ] T036 [P] [US2] Create image validation utility in src/utils/validation/image-validator.ts
- [ ] T037 [P] [US2] Create CustomizationPanel component in src/components/CustomizationPanel/CustomizationPanel.vue
- [ ] T038 [P] [US2] Create CustomizationPanel styles in src/components/CustomizationPanel/CustomizationPanel.css
- [ ] T039 [P] [US2] Create TextInput subcomponent in src/components/CustomizationPanel/TextInput.vue
- [ ] T040 [P] [US2] Create ImageUpload subcomponent in src/components/CustomizationPanel/ImageUpload.vue
- [ ] T041 [US2] Implement image processing service in src/services/image-processor/image-processor.ts
- [ ] T042 [US2] Create image resize utility in src/services/image-processor/image-resizer.ts
- [ ] T043 [US2] Create image format converter in src/services/image-processor/format-converter.ts
- [ ] T044 [US2] Add real-time preview updates with debouncing in src/utils/debounce.ts
- [ ] T045 [US2] Create character count utility in src/utils/formatters/text-formatter.ts
- [ ] T046 [US2] Integrate CustomizationPanel with PreviewCard for reactive updates
- [ ] T047 [US2] Add file size validation and error handling for image uploads
- [ ] T048 [US2] Add visual feedback for form validation (success/error states)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Mobile-Friendly Card Creation (Priority: P3)

**Goal**: Full functionality on mobile devices with touch-optimized interface

**Independent Test**: Access on mobile → complete full workflow → verify touch interactions work smoothly

### Implementation for User Story 3

- [ ] T049 [P] [US3] Add responsive Tailwind breakpoints to URLInput component
- [ ] T050 [P] [US3] Add responsive Tailwind breakpoints to PreviewCard component
- [ ] T051 [P] [US3] Add responsive Tailwind breakpoints to CustomizationPanel component
- [ ] T052 [P] [US3] Add responsive Tailwind breakpoints to ExportControls component
- [ ] T053 [P] [US3] Add touch-friendly button sizing and spacing to all components
- [ ] T054 [US3] Create mobile-specific layout component in src/components/Layout/MobileLayout.vue
- [ ] T055 [US3] Add viewport meta tag and responsive CSS to index.html
- [ ] T056 [US3] Implement touch gesture handling for image upload in ImageUpload component
- [ ] T057 [US3] Add mobile-optimized modal for export options in ExportControls
- [ ] T058 [US3] Create responsive navigation/header component in src/components/Layout/Header.vue
- [ ] T059 [US3] Optimize bundle loading for mobile networks (code splitting)
- [ ] T060 [US3] Add mobile-specific error handling and user feedback
- [ ] T061 [US3] Test and adjust touch target sizes per accessibility guidelines

**Checkpoint**: All user stories should now be independently functional across all devices

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T062 [P] Add loading animations and transitions in src/styles/animations.css
- [ ] T063 [P] Create comprehensive error boundary component in src/components/ErrorBoundary.vue
- [ ] T064 [P] Add accessibility attributes (ARIA labels, alt text) to all components
- [ ] T065 [P] Create favicon and app icons in src/assets/icons/
- [ ] T066 [P] Add Open Graph meta tags to index.html for social sharing
- [ ] T067 [P] Optimize images and assets for production build
- [ ] T068 [P] Add keyboard navigation support for all interactive elements
- [ ] T069 Setup GitHub Actions for automated deployment in .github/workflows/deploy.yml
- [ ] T070 Create comprehensive README.md with usage instructions
- [ ] T071 Add performance monitoring and bundle size analysis
- [ ] T072 Final cross-browser testing and compatibility fixes
- [ ] T073 Security review: sanitization, CSP headers, input validation
- [ ] T074 Run quickstart.md validation and update documentation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1 components but independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Enhances US1/US2 components but independently testable

### Within Each User Story

- TypeScript interfaces before services
- Services before components
- Components before integration
- Core implementation before error handling
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All component creation tasks marked [P] can run in parallel within each story
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Create URLInput component in src/components/URLInput/URLInput.vue"
Task: "Create URLInput styles in src/components/URLInput/URLInput.css"
Task: "Create PreviewCard component in src/components/PreviewCard/PreviewCard.vue"
Task: "Create PreviewCard styles in src/components/PreviewCard/PreviewCard.css"
Task: "Create ExportControls component in src/components/ExportControls/ExportControls.vue"
Task: "Create ExportControls styles in src/components/ExportControls/ExportControls.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence