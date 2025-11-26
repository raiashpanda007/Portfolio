# Ashwin Rai Portfolio

## Overview

This is a personal portfolio website for Ashwin Rai, a Backend Engineer & Full-Stack Developer. The application is built as a single-page React application with a modern, professional aesthetic inspired by contemporary portfolio best practices. The site showcases professional experience, projects, technical skills, and leadership accomplishments through a metric-driven storytelling approach.

The portfolio emphasizes impact metrics (800+ commits, 99.99% uptime, 8,000+ users impacted) and presents information through clean, spacious layouts with generous breathing room and clear visual hierarchy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety and developer experience
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (replaces React Router)
- Single-page application (SPA) architecture with component-based design

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and API interactions
- Custom query client configuration with specific retry and refetch policies
- React hooks for local component state and side effects

**Design System**
- Custom CSS variables for theming (light mode defined, dark mode infrastructure ready)
- Consistent spacing primitives using Tailwind units (4, 8, 12, 16, 20, 24, 32)
- Typography scale with Inter for body text and Space Grotesk for metrics/numbers
- Design guidelines document specifying layout system, component patterns, and visual hierarchy

**Animation & Interactions**
- Intersection Observer API for scroll-based animations (custom `useScrollAnimation` hook)
- CSS transitions and Tailwind animation utilities for micro-interactions
- Responsive breakpoints for mobile-first design

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- TypeScript for type-safe server-side code

**Development vs Production**
- **Development Mode**: Vite dev server middleware integration for HMR and on-demand compilation
- **Production Mode**: Serves pre-built static assets from `dist/public` directory
- Build process bundles server code with esbuild for production deployment

**API Structure**
- RESTful API design with routes prefixed under `/api`
- Centralized route registration through `registerRoutes` function
- Request/response logging middleware for debugging and monitoring

**Storage Layer**
- Abstract storage interface (`IStorage`) for database operations
- In-memory storage implementation (`MemStorage`) as default
- Ready for database migration with defined schema and CRUD methods
- User entity with basic authentication fields (username, password)

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Database schema defined in shared directory for type safety across client/server
- Migration system configured with `drizzle-kit` (migrations output to `/migrations`)
- Schema uses UUID for primary keys with PostgreSQL's `gen_random_uuid()`

**Schema Design**
- Users table with id, username (unique), and password fields
- Zod schemas generated from Drizzle schemas for runtime validation
- Shared TypeScript types between frontend and backend

**Current Implementation**
- In-memory storage used by default (no database connection required for basic operation)
- Database credentials expected via `DATABASE_URL` environment variable
- Architecture supports seamless migration from in-memory to PostgreSQL

### Authentication and Authorization

**Current State**
- User schema includes username/password fields
- No active authentication middleware implemented
- Session management infrastructure present (connect-pg-simple for PostgreSQL sessions)
- Ready for implementation of login/registration flows

### External Dependencies

**Core Dependencies**
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **drizzle-orm**: TypeScript ORM for type-safe database queries
- **drizzle-zod**: Schema validation integration between Drizzle and Zod
- **express**: Web server framework
- **react**: UI library
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework

**UI Component Libraries**
- **@radix-ui/***: Complete suite of accessible, unstyled UI primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-styled components built on Radix UI
- **lucide-react**: Icon library for consistent iconography
- **embla-carousel-react**: Carousel/slider functionality

**Developer Tools**
- **@replit/vite-plugin-***: Replit-specific development tooling (error modal, cartographer, dev banner)
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds

**Styling Utilities**
- **clsx** & **tailwind-merge**: Class name management and merging
- **class-variance-authority**: Component variant system
- **autoprefixer** & **postcss**: CSS processing

**Form Management**
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **zod**: Schema validation

**Date Handling**
- **date-fns**: Date manipulation and formatting

**Other Integrations**
- **cmdk**: Command palette component
- **wouter**: Lightweight routing
- **nanoid**: Unique ID generation

### Path Aliases

The application uses TypeScript path aliases for cleaner imports:
- `@/*`: Maps to `client/src/*`
- `@shared/*`: Maps to `shared/*` (types/schemas shared between client and server)
- `@assets/*`: Maps to `attached_assets/*` (static assets)

### Build Process

**Development**
- Run `npm run dev` to start development server with HMR
- Vite middleware serves client with hot reload
- Server code executed via tsx for TypeScript support

**Production**
- `npm run build` creates optimized production build
- Client built with Vite (output: `dist/public`)
- Server bundled with esbuild (output: `dist/index.js`)
- `npm start` runs the production server serving static files