# Markdown Preview App - Design Guidelines

## Design Approach: Design System-Based

**Selected System**: Material Design / Clean Utility Focus
**Justification**: This is a productivity-focused application where usability, readability, and functionality are paramount. Users need clear visual hierarchy for code editing and document preview.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 219 78% 20% (Deep blue for headers, buttons)
- Background: 220 13% 98% (Clean white-gray)
- Surface: 0 0% 100% (Pure white for editor/preview panels)
- Text Primary: 220 9% 15% (Dark gray for readability)
- Text Secondary: 220 9% 45% (Medium gray for metadata)
- Border: 220 13% 91% (Subtle panel dividers)
- Success: 142 69% 35% (Save confirmations)
- Error: 0 65% 51% (Error states)

**Dark Mode:**
- Primary: 219 78% 65% (Lighter blue for contrast)
- Background: 222 84% 5% (Deep dark gray)
- Surface: 220 13% 9% (Dark panels)
- Text Primary: 220 9% 85% (Light gray)
- Text Secondary: 220 9% 65% (Medium light gray)
- Border: 220 13% 15% (Dark borders)

### B. Typography

**Primary Font**: Inter (via Google Fonts CDN)
**Monospace Font**: JetBrains Mono (for code editor)

- Headings: Inter, 600 weight
- Body text: Inter, 400 weight
- Code: JetBrains Mono, 400 weight
- UI elements: Inter, 500 weight

### C. Layout System

**Tailwind Spacing Units**: 2, 4, 6, 8, 12, 16
- Micro spacing: p-2, m-2 (buttons, small gaps)
- Standard spacing: p-4, gap-4 (component padding)
- Section spacing: p-6, my-8 (panel separations)
- Large spacing: p-12, my-16 (page-level margins)

### D. Component Library

**Navigation**
- Clean header bar with app title and file operations
- Minimal button design with subtle shadows
- Responsive hamburger menu for mobile

**Editor/Preview Layout**
- 50/50 split on desktop with resizable divider
- Stacked layout on mobile (editor above preview)
- Subtle panel borders and shadows for depth

**Forms & Controls**
- Standard input fields with focus states
- File upload drag-and-drop zones
- Toggle buttons for view modes (side-by-side/stacked)

**Data Display**
- Syntax-highlighted code editor panel
- Clean typography hierarchy for rendered markdown
- Status indicators for save states

**Overlays**
- Simple modal dialogs for file operations
- Toast notifications for user feedback
- Loading spinners for file processing

### E. Key Design Principles

1. **Readability First**: High contrast ratios, generous line spacing
2. **Functional Clarity**: Clear visual separation between editor and preview
3. **Minimal Distraction**: Subdued UI chrome to focus on content
4. **Responsive Efficiency**: Optimized layouts for both editing modes
5. **Accessibility**: Full keyboard navigation, screen reader support

## Special Considerations

- **Editor Focus**: Ensure the code editor has clear focus indicators and syntax highlighting that doesn't strain the eyes
- **Preview Styling**: Style the markdown preview to look like professional documentation (similar to GitHub's markdown rendering)
- **File Operations**: Use clear iconography for save/load operations with descriptive tooltips
- **Error States**: Gentle error highlighting in the editor without being intrusive
- **Mobile Experience**: Prioritize the editor view on mobile with easy toggle to preview

This design approach prioritizes functionality and usability while maintaining a clean, professional appearance appropriate for a developer-focused productivity tool.