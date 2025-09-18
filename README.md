# IONexus Real Estate Platform Mockup

A comprehensive React.js real estate platform with role-based dashboard system, built with Material-UI and modern design principles.

## Features

- **Role-Based Dashboard System**: 5 different user roles with customized access
- **Modern Design**: Clean, minimalist interface with elegant gradients
- **Responsive Layout**: Optimized for desktop and mobile viewing
- **Material-UI Components**: Professional UI components with custom theming
- **Real Estate Focus**: Property search, listings, and area exploration
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Secure Authentication**: Role-based login system with localStorage persistence

## Design Specifications

- **Canvas Size**: 1140x1280px
- **Color Palette**: 
  - Primary Blue: #1D4F91
  - Primary Light Blue: #3C8DFF
  - White: #FFFFFF
  - Black: #000000
  - Neutral Gray: #E0E0E0
- **Typography**: Inter font family
- **Border Radius**: 24px (2xl) for cards and buttons
- **Shadows**: Subtle 0 2px 6px rgba(0,0,0,0.08)

## Role-Based Dashboard System

### User Roles & Access Levels

#### 🔐 Login Credentials
- **Admin**: `superadmin@ionexus.com` / `123456`
- **Developer**: `developer@ionexus.com` / `123456`
- **Sale**: `sale@ionexus.com` / `123456`
- **Partner**: `partner@ionexus.com` / `123456`
- **End-user/Investor**: `investor@ionexus.com` / `123456`

#### 👨‍💼 Admin (10 Features)
- Project Management
- Lead & Customer Management
- Search & Marketplace Listings
- Booking & Transaction Flow
- Realtime Chat & Inquiry
- Payment & Commission Tracking
- Reports & Dashboard
- User Management & Roles
- Source Tracking (UTM/Marketing)
- Document Upload / Legal

#### 👨‍💻 Developer (2 Features)
- Project Management
- Document Upload / Legal

#### 💼 Sale & Partner (8 Features Each)
- Project Management
- Lead & Customer Management
- Search & Marketplace Listings
- Booking & Transaction Flow
- Realtime Chat & Inquiry
- Payment & Commission Tracking
- Reports & Dashboard
- Document Upload / Legal

#### 💰 End-user/Investor (8 Features)
- Lead & Customer Management
- Search & Marketplace Listings
- Booking & Transaction Flow
- Realtime Chat & Inquiry
- Payment & Commission Tracking
- Reports & Dashboard
- User Management & Roles
- Document Upload / Legal

### Theme System
- **Admin**: Purple theme (#8b5cf6)
- **Developer**: Blue theme (#1e40af)
- **Sale**: Green theme (#059669)
- **Partner**: Orange theme (#d97706)
- **Investor**: Dark theme (#0f172a)

## Components

### Landing Page Sections
1. **Header Navigation** - Logo, tabs, login/register
2. **Hero Search** - Property search with filters
3. **Popular Searches** - Trending search terms
4. **Featured Projects** - Carousel of new developments
5. **Explore by Area** - Grid of popular locations
6. **Featured Properties** - Property listings grid
7. **Footer** - Links, newsletter signup, social media

### Dashboard Components
1. **Role-based Navigation** - Dynamic sidebar based on user permissions
2. **Statistics Cards** - Role-specific KPI displays
3. **Project Management** - Comprehensive project tracking
4. **Lead Management** - Customer relationship management
5. **Marketplace Listings** - Property search and management
6. **Booking System** - Transaction flow management
7. **Chat System** - Real-time communication
8. **Payment Tracking** - Commission and payment management
9. **Reports Dashboard** - Analytics and reporting
10. **User Management** - Role and permission management
11. **Document Management** - File upload and legal documents

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/admin/Desktop/mockup-IONexus/IONexus-mockup
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Demo & Deployment

### Live Demo
- **GitHub Repository**: [https://github.com/namivince/ionexus_mockup](https://github.com/namivince/ionexus_mockup)
- **Live Demo**: Deploy using Vercel, Netlify, or GitHub Pages

### Quick Deploy Options

#### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Deploy to Netlify
```bash
npm run build
# Upload the build folder to Netlify
```

#### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://namivince.github.io/ionexus_mockup"
npm run build
npx gh-pages -d build
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Dependencies

- React 18.2.0
- Material-UI 5.14.20
- React Router DOM 6.20.1
- Emotion (for styled components)

## Image Sources

All images are sourced from Unsplash.com with proper attribution:
- Property images: High-quality real estate photography
- Area images: Dubai landmarks and cityscapes
- All images are linked directly from Unsplash CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for mockup and demonstration purposes only.
