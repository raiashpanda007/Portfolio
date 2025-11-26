# Design Guidelines: Ashwin Rai Portfolio Landing Page

## Design Approach
**Reference-Based Design** inspired by riverline.ai's modern, professional aesthetic combined with contemporary portfolio best practices (Linear's typography clarity, Vercel's technical sophistication, Stripe's restraint).

**Core Principles:**
- Metric-driven storytelling with prominent impact numbers
- Clean, spacious layouts with generous breathing room
- Professional business aesthetic that showcases technical depth
- Visual hierarchy through typography scale and strategic whitespace

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, and 32 for consistent rhythm
- Section padding: `py-20 md:py-32` for major sections
- Component spacing: `space-y-8` to `space-y-16` between elements
- Card padding: `p-8` to `p-12`
- Grid gaps: `gap-8` to `gap-12`

**Container Strategy:**
- Full-width sections with inner `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Text content: `max-w-3xl` for readability
- Grid layouts: `max-w-6xl` for balanced composition

## Typography

**Font Families:**
- Headlines: Inter or DM Sans (bold, 600-700 weight)
- Body: Inter (regular 400, medium 500)
- Accent/Metrics: Space Grotesk or similar for numbers

**Type Scale:**
- Hero headline: `text-5xl md:text-6xl lg:text-7xl font-bold`
- Section headlines: `text-4xl md:text-5xl font-bold`
- Subsection titles: `text-2xl md:text-3xl font-semibold`
- Card titles: `text-xl md:text-2xl font-semibold`
- Metrics/Numbers: `text-4xl md:text-5xl font-bold` (featured prominently)
- Body text: `text-base md:text-lg leading-relaxed`
- Small text: `text-sm md:text-base`

## Component Library

### Hero Section
- Full-width layout with `min-h-[80vh]` centered content
- Large headline: "Backend Engineer & Full-Stack Developer"
- Subheadline highlighting key metrics: "800+ commits | 99.99% uptime | 8,000+ users impacted"
- Dual CTA buttons: Primary "View Projects", Secondary "Download Resume"
- Professional portrait image (circular or subtle rounded, positioned right side on desktop)
- Subtle gradient background treatment

### Experience Timeline
- Two-column grid on desktop (`grid-cols-1 lg:grid-cols-2 gap-8`)
- Each experience card with:
  - Company name as prominent heading
  - Role and dates
  - Bullet points with impact metrics in bold inline format
  - Subtle border or shadow for card distinction

### Projects Showcase
- Three-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)
- Featured project cards with:
  - Project title with tech stack tags below
  - Key metrics prominently displayed (e.g., "300+ participants", "95% data-loss reduction")
  - Brief description (2-3 lines)
  - GitHub link and live demo buttons
  - Hover effect: subtle elevation increase

### Skills Section
- Multi-column tag cloud layout (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`)
- Categorized by: Languages, Tools & Platforms, Technologies & Frameworks
- Each category in its own subsection
- Skills displayed as rounded pill badges with subtle backgrounds

### Leadership & Achievements
- Two-column split layout
- Left: Achievements with bold metrics (SSB selection, 800+ commits)
- Right: Positions of Responsibility cards showing impact numbers
- Timeline-style connectors for positions

### Contact Section
- Centered layout with clear hierarchy
- Headline: "Let's Build Something Great Together"
- Contact methods in horizontal pill/button format
- Links to LinkedIn, GitHub, Email, Phone
- Background treatment similar to riverline.ai's final CTA

## Navigation
- Fixed header with transparent-to-solid transition on scroll
- Logo/Name on left: "Ashwin Rai"
- Navigation links: Experience, Projects, Skills, Contact
- CTA button: "Download Resume" (outlined style)

## Images

**Hero Section:**
- Professional headshot or workspace photo (circular frame, 300-400px diameter on desktop)
- Positioned in right half of hero on desktop, centered on mobile
- Subtle shadow or glow effect

**Project Cards:**
- Optional: Screenshot placeholders for each project (16:9 aspect ratio)
- Can use gradient placeholders with project tech stack icons if no screenshots

**Background Elements:**
- Subtle gradient overlays (top to bottom fade)
- Optional: Geometric pattern backgrounds in very low opacity for visual interest

## Interaction Patterns
- Smooth scroll behavior for anchor navigation
- Subtle fade-in animations on scroll for section entries
- Hover states: cards lift slightly (`hover:shadow-lg hover:-translate-y-1 transition-transform`)
- Buttons: scale on hover (`hover:scale-105`)
- Links: underline on hover with smooth transition

## Multi-Column Strategy
- Hero: Single column centered content with image aside
- Experience: 2 columns on desktop
- Projects: 3 columns on desktop, 2 on tablet, 1 on mobile
- Skills: 4 columns tags on desktop, 2 on mobile
- Contact: Centered single column with horizontal button layout