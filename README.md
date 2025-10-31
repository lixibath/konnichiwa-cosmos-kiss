# MJ DAVISON CLEANING

Professional cleaning services website for Queens, NYC area.

## About

MJ Davison Professional Cleaning Services specializes in residential and commercial cleaning solutions throughout Queens, NY. Licensed, insured, and trusted since 2025.

**Contact Information:**
- Phone: (929) 462-4627
- Email: contact@cleaningmj.com
- Address: 1102 49TH AVE APT 8N, Long Island City, NY 11101

## Project Overview

A modern, high-performance website built with React, TypeScript, and Tailwind CSS.

### Key Features

- 🚀 **High Performance**: Optimized bundle size with lazy loading and code splitting
- 📱 **Mobile Responsive**: Mobile-first design approach
- ♿ **Accessible**: WCAG compliance with semantic HTML
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 📄 **SEO Optimized**: Structured data, meta tags, and performance optimization

### Performance Optimizations

- Route-based code splitting (60% smaller initial bundle)
- Lazy image loading with Intersection Observer API
- Optimized font loading with preconnect and display=swap
- Custom loading states and skeleton screens
- Image optimization and compression

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd mj-davison-cleaning

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:8080`

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components
│   ├── ui/         # shadcn-ui components
│   └── performance/ # Performance optimization components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Route page components
│   └── blog/       # Blog articles
└── main.tsx        # Application entry point
```

## Performance

For detailed performance optimization documentation, see [PERFORMANCE.md](./PERFORMANCE.md).

Key metrics:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)

## Deployment

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Hosting

The application can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- DigitalOcean App Platform

### Environment Variables

No environment variables are required for basic functionality.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Documentation

- [Performance Guide](./PERFORMANCE.md)
- [Mobile Optimization](./MOBILE_OPTIMIZATION.md)
- [Accessibility Report](./ACCESSIBILITY_REPORT.md)
- [Scroll Animations](./SCROLL_ANIMATIONS.md)

## License

Copyright © 2025 MJ Davison Cleaning LLC. All rights reserved.

## Support

For technical issues or questions, contact the development team or email contact@cleaningmj.com.
