# Navigation Guide

## Page Switching

The application now supports navigation between Services and Projects pages with proper highlighting in the navigation bar.

### How it Works

1. **Current Page**: The app tracks which page you're on using `currentPage` state
2. **Navigation Function**: `handleNavigate(page)` switches pages and scrolls to top
3. **Active Highlighting**: The current page is highlighted in blue in the navbar

### Available Pages

- **Home** - Landing page (not yet implemented)
- **About Us** - About page (not yet implemented)
- **Services** - Complete services page with all sections
- **Projects** - Projects showcase page with filterable portfolio

### Navigation Elements

**Navbar**
- Click any navigation item to switch pages
- The active page is shown in blue
- Works on both desktop and mobile

**Footer**
- Navigate section has clickable links
- Clicking navigates to the respective page
- Maintains consistent navigation throughout the app

### Features

#### Services Page
- Hero section
- 6 service cards with hover effects
- Work process timeline
- Testimonials carousel
- Contact form
- FAQ accordion
- Scrolling banners

#### Projects Page
- Hero section
- Project filter buttons (All, Digital Solutions, Technology Outsourcing, Consultations)
- 6 project cards with:
  - Hover lift effects
  - External link icons
  - Technology tags
  - Category badges
- Testimonials section
- Scrolling banners

### Animations

Both pages feature:
- Page load animations
- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth transitions between states
- Motion effects on interactive elements

### Responsive Design

- Mobile-first approach
- Tablet breakpoints (md)
- Desktop breakpoints (lg)
- Collapsible mobile menus
- Adaptive grid layouts
