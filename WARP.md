# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

NCoffee is a Next.js 14 application for a Polish coffee business specializing in coffee machines, water systems, and artisan coffee blends. The website serves as both a product catalog and business showcase for clients in the HO.RE.CA (Hotel, Restaurant, Café) sector.

## Development Commands

### Core Development
```bash
npm run dev        # Start development server on localhost:3000
npm run build      # Build production application
npm start          # Start production server
npm run lint       # Run ESLint for code quality checks
```

### Testing
This project does not currently have a test suite configured. To add testing:
- Consider `npm install --save-dev @testing-library/react @testing-library/jest-dom jest`
- For component testing, use: `npm test`

### Database Operations
```bash
npx prisma generate    # Generate Prisma client after schema changes
npx prisma migrate dev # Apply database migrations in development
npx prisma studio      # Open Prisma Studio for database inspection
npx prisma db push     # Push schema changes to database (development)
```

## Architecture Overview

### Application Structure
This is a **Next.js 14 App Router** application with TypeScript, featuring:
- **App Router** (not Pages Router) - all routes in `src/app/`
- **React Server Components** by default
- **Client Components** explicitly marked with `'use client'`
- **Prisma ORM** for PostgreSQL database operations
- **Static JSON data** in `src/data/db.json` for content management

### Key Architectural Patterns

#### Route Organization
- Each route has its own folder in `src/app/`
- Each route contains `layout.tsx` and `page.tsx`
- Dynamic routes use bracket notation: `[...slug]/`
- API routes in `src/app/api/` (email notifications)

#### Component Hierarchy
```
src/components/
├── common/          # Shared layout components (nav, footer)
├── elements/        # Reusable UI elements (carousel, cards, buttons)
└── sections/        # Page-specific content sections
```

#### Data Management
- **Static Content**: JSON file (`src/data/db.json`) contains carousel data, client information, and product details
- **Dynamic Content**: Prisma schema defines User, Product, About, and Partners models
- **Email System**: Nodemailer integration for contact forms with auto-response

#### Styling System
- **Tailwind CSS** with custom color palette
- **Custom colors**: nblue, nturkis, norange, nbraun, nbeige, nlila, ngreen
- **Responsive breakpoints**: xs (320px), sm (576px), md (768px), lg (992px), xl (1200px)
- **Framer Motion** for animations and page transitions

### Component Architecture Patterns

#### Navigation System
- Dynamic logo and color switching based on route (`/water` routes use turkis theme, others use orange)
- Dropdown menus with hover states
- Scroll-based navigation hiding/showing
- Mobile burger menu implementation

#### Carousel System
- Auto-advancing carousel with 15-second intervals
- Manual navigation controls
- Image optimization with Next.js Image component
- Dynamic content from JSON data structure

#### Email Integration
- Two API endpoints: `/api/email` (contact form) and `/api/answer` (auto-response)
- Environment variables: `MY_EMAIL`, `MY_PASSWORD`, `NCOFFEE_EMAIL`
- HTML email templates using Handlebars-style syntax

## Content Management

### Static Data Structure
The `src/data/db.json` contains structured content for:
- `carouselAbout`: Company information and services
- `carouselClients`: Partner/client showcases  
- `artisanCoffees`: Product catalog for custom coffee blends

### Image Assets
All images stored in `/public/` directory as WebP format for optimization:
- Background images: `bg*Portrait.webp` and `bg*.webp`
- Logo variations: `ncoffee*.webp` and `logo*.webp`
- Client logos and product images

### Internationalization
- Application is primarily in Polish (`lang="pl"`)
- Content is hardcoded in Polish throughout components
- Consider i18n implementation for multilingual support

## Environment Configuration

### Required Environment Variables
```bash
DATABASE_URL="postgresql://..."  # PostgreSQL connection string
MY_EMAIL="..."                   # Gmail account for sending emails
MY_PASSWORD="..."                # Gmail app password
NCOFFEE_EMAIL="..."              # Recipient email for contact forms
```

### Database Schema
Key models:
- **User**: Authentication system (id, name, surname, email, password)
- **product**: Product catalog with multilingual support and pricing
- **about**: Company information content
- **partners**: Business partner information

## Development Guidelines

### File Naming Conventions
- Components: camelCase (e.g., `carousell.tsx`, `burgerButton.tsx`)
- Pages: lowercase (e.g., `page.tsx`, `layout.tsx`)
- Images: camelCase WebP format

### Import Path Aliases
- Use `@/` for src directory imports
- Use `@/../public/` for public asset imports

### Responsive Design Patterns
- Mobile-first approach with Tailwind breakpoints
- Portrait/landscape orientation handling with CSS classes
- Dynamic sizing with viewport units (`dvh`, `svh`)

### Performance Considerations
- Next.js Image component with WebP optimization
- Dynamic imports for carousel content
- Scroll-based navigation optimizations
- Auto-prefixer for CSS compatibility
