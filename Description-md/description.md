## Role
You are a **senior front-end developer** building the **IONEXUS Real Estate Platform**.

## Design Style (Updated)
- A **perfect balance** between **elegant minimalism** and **functional design**.
- **Clean, professional color scheme** with primary blue and accent red.
- **Well-proportioned white space** for a clean layout.
- **Modern and professional** user experience focused on real estate.
- **Clear information hierarchy** using **subtle shadows and card layouts**.
- **Natural focus on core functionalities**: Property search and listings.
- **Medium rounded corners** (8px) for a modern, clean feel.
- **Smooth micro-interactions** with hover effects and transitions.
- **Comfortable visual proportions** optimized for property browsing.
- **Solid Colors**: Primary #1A237E, Secondary #FF5252, clean backgrounds
- **Rounded Corners**: Use medium radius `8px` for modern, clean appearance
- **Micro-interactions**: Hover effects (translateY(-4px)), smooth transitions, property card animations
- **Typography**: **Inter** font family for all text elements

## Technical Specifications (Updated)
1. **Responsive Design**: Desktop-first approach with mobile considerations
2. **Icons**: **MUI Icons** for consistency - Bed, Bathtub, SquareFoot, Search, Social icons
3. **Images**: **Pexels** for property images - high-quality real estate photography
4. **Styles**: **Material-UI with Styled Components** for custom styling
5. **Framework**: **React 18.2.0** with **Material-UI 5.14.20**
6. **Clean mockup presentation** - no status bars or scrollbars
7. **Text Colors**: Primary text #212121, Secondary text #757575, White on dark backgrounds
8. **Icon Library**: **MUI Icons** - clean, consistent, lightweight
9. **Image Source**: **Pexels** - property photos linked directly from CDN
10. **Typography**: **Inter font** loaded from Google Fonts
11. **Card Styling**: MUI Card with 8px border radius, subtle shadows, hover effects
12. **Layout**: Container max-width 'lg' (1200px), responsive grid system

## Global UI Elements
- **Header**: Navigation links with active states, logo, login button
- **Hero Section**: Background image with overlay, search functionality
- **Property Cards**: Consistent card design with images, badges, pricing, features
- **Footer**: Multi-column layout with links and social media
- **Buttons**: Primary (filled), Secondary (outlined), consistent styling
- **Search Components**: Tabs, input fields, filter chips
- Refer to `landing_page.md` for detailed specifications

## Color Palette (Updated)
- **Primary Blue:** #1A237E (main brand color)
- **Primary Dark:** #0f1654 (hover states)
- **Secondary Red:** #FF5252 (accent color, badges)
- **Success Green:** #16A34A (exclusive badges)
- **Warning Orange:** #FF9800 (off-plan badges)
- **Background:** #FAFAFA (page background)
- **Paper:** #FFFFFF (card backgrounds)
- **Text Primary:** #212121 (main text)
- **Text Secondary:** #757575 (secondary text)
- **Divider:** #E0E0E0 (borders)
- **Gray Scale:** 50-900 (various UI elements)

### Usage
- **Header background:** White (#FFFFFF)
- **Hero background:** Primary Blue (#1A237E) with image overlay
- **Active navigation:** Primary Blue (#1A237E) with underline
- **Buttons Primary:** Primary Blue (#1A237E)
- **Property badges:** Various colors based on type
- **Main content background:** Light Gray (#FAFAFA)
- **Card backgrounds:** White (#FFFFFF)  

## Typography Scale (Updated)
- **H1 (Hero):** 36px / bold / Inter
- **H2 (Section titles):** 24px / bold / Inter
- **H3 (Property titles):** 16px / semibold / Inter
- **Body (General text):** 16px / regular / Inter
- **Caption (Features, meta):** 14px / regular / Inter
- **Price text:** 20px / bold / Inter
- **Navigation:** 16px / medium / Inter

## Shadows & Corners (Updated)
- **Card shadow (default):** 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **Card shadow (hover):** 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- **Search card shadow:** 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- **Corner radius:** 8px (medium) – default for cards, buttons, inputs
- **Button radius:** 8px for consistency
- **Chip radius:** 100px (fully rounded) for filter chips

## Component Specifications

### Property Cards
- **Size:** Responsive grid (3 columns on desktop)
- **Image height:** 200px
- **Padding:** 16px
- **Hover effect:** translateY(-4px) + shadow change
- **Badge positioning:** Absolute, top-left (12px, 12px)

### Search Component
- **Floating card:** Negative margin (-48px) over hero
- **Tab indicators:** 3px bottom border
- **Input height:** 48px with 12px padding
- **Filter chips:** Rounded, hover effects

### Navigation
- **Height:** 70px
- **Active state:** 3px bottom border
- **Logo:** 24px font size, primary color
- **Links:** 16px medium weight

## Implementation Status
✅ **Completed:**
- React + Material-UI setup
- Theme configuration with new color palette
- Header with navigation
- Hero section with background image
- Search component with tabs and filters
- Property grid with 12 sample properties
- Footer with multi-column layout
- Hover effects and transitions
- Responsive design considerations

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations
- Images optimized and served from Pexels CDN
- Material-UI components for consistency
- Minimal custom CSS, leveraging theme system
- Smooth animations with CSS transforms
- Clean component architecture for maintainability
