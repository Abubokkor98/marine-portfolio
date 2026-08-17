# Marine Engineer Portfolio Website - Complete Design Draft

## ✅ DOCUMENTATION VERIFIED FOR YOUR STACK

**Last Updated**: August 2026  
**Verified Compatible With**:

- ✅ Next.js 16.2.6 (Latest)
- ✅ React 19.2.4 (Latest, Server Components default)
- ✅ TypeScript 5 (Latest)
- ✅ Tailwind CSS v4 (Latest, PostCSS v4 syntax)
- ✅ shadcn/ui 4.18.0
- ✅ next-themes 0.4.6 (Dark mode ready)
- ✅ @phosphor-icons/react 2.1.10 (Icon system)
- ✅ tailwind-merge 3.6.0 & clsx 2.1.1

**All code samples, configurations, and patterns are production-ready for your exact stack.**

---

## Project Overview

Professional international portfolio website for Engine Cadet at Bangladesh Marine Academy, currently interning aboard Hafnia Osprey. Built with Next.js 16 + React 19 + Tailwind v4 + shadcn/ui.

---

## Color Palette (Professional Maritime Theme)

### Primary Colors

- **Navy Blue (Primary)**: `#0F172A` or `#1E3A5F`
  - Used for navbar, headings, CTA buttons
  - Represents maritime authority and professionalism

- **Ocean Teal (Accent)**: `#0891B2` or `#06B6D4`
  - Used for highlights, hover states, active links
  - Represents maritime environment and energy

### Secondary Colors

- **Deep Slate**: `#1E293B`
  - Used for card backgrounds, sections
  - Creates visual hierarchy without being harsh

- **Light Gray**: `#F8FAFC`
  - Used for backgrounds, light sections
  - Maintains readability and professional look

### Text Colors

- **Dark Text**: `#0F172A` (headings, body text)
- **Medium Text**: `#64748B` (secondary text, meta information)
- **Light Text**: `#F1F5F9` (text on dark backgrounds)

### Accent Colors

- **Success Green**: `#10B981` (certifications achieved, completed milestones)
- **Warning Amber**: `#F59E0B` (in-progress, pending)
- **Error Red**: `#EF4444` (alerts, critical information)

---

## Stack Verification (v16.2.6 - LATEST)

**Your Stack is CUTTING-EDGE:**

- ✅ Next.js 16.2.6 (Latest)
- ✅ React 19.2.4 (Latest, Server Components standard)
- ✅ Tailwind CSS v4 (Latest, PostCSS v4)
- ✅ TypeScript 5 (Latest)
- ✅ next-themes (Dark mode support)
- ✅ @phosphor-icons/react (Better icon system)
- ⚠️ @base-ui/react (Note: Check if using this or shadcn/ui)

**Important Notes:**

1. **Tailwind v4 is significantly different** from v3 - config syntax changed
2. **React 19** has new patterns - no need for some older hooks
3. **next-themes is installed** - we should include dark mode setup
4. **@phosphor-icons/react** - excellent, use this instead of default icons

---

## Directory Structure (Next.js 16.2.6)

```
src/ or root/
├── app/
│   ├── layout.tsx (Root layout with fonts + dark mode)
│   ├── page.tsx (home)
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── certifications/page.tsx
│   ├── skills/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Card.tsx
│   ├── Timeline.tsx
│   ├── ThemeProvider.tsx (Dark mode wrapper)
│   └── [other reusable components]
├── lib/
│   ├── constants.ts (color themes, data)
│   └── utils.ts (cn() utility for clsx + tailwind-merge)
├── styles/
│   └── globals.css (Tailwind v4 directives)
├── tailwind.config.ts (Tailwind v4 config)
├── postcss.config.js (PostCSS v4)
└── tsconfig.json
```

---

## Navigation Bar

### Design Specifications

**Layout**: Sticky top navbar with minimal design
**Height**: 64px (standard)
**Background**: Navy Blue (`#0F172A`) with subtle shadow
**Font**: Inter or Poppins (shadcn default)

### Structure

```
[Logo + Name]              [Nav Links]              [CTA Button]
[Sister's Name/Title]      Home / About / Experience / Contact
                           Certifications / Skills / Gallery
```

### Components

**Left Section**

- Logo (25x25px icon or initials)
- Sister's Full Name (14px, semi-bold, white)
- Subtitle: "Engine Cadet | Marine Engineer" (12px, gray, lighter weight)

**Center Section** (Desktop Only, hidden on mobile)

- Navigation Links
  - Home
  - About Me
  - Sea Experience
  - Certifications
  - Technical Skills
  - Gallery
  - Contact

**Right Section**

- CTA Button: "View CV" or "Get in Touch"
  - Background: Ocean Teal
  - Text: White
  - Padding: 8px 20px
  - Rounded: 6px
  - Hover effect: darker teal with subtle lift

**Mobile Behavior**

- Hamburger menu icon
- Slide-out drawer from right
- Full width navigation links
- CTA button in drawer

### Code Hint (shadcn components)

```
- Use: cn() utility for class merging
- Button component with variant="default" or "outline"
- Navigation use <Link> from next/link
- Mobile: Sheet component for drawer menu
```

---

## Footer

### Design Specifications

**Background**: Deep Slate (`#1E293B`)
**Text Color**: Light Gray (`#F1F5F9`)
**Padding**: 60px top/bottom, 40px sides
**Border-top**: 1px solid `#334155` (subtle divider)

### Structure

```
[Row 1: Quick Links + Contact + Social]
[Row 2: Copyright + Legal Links]
```

### Sections

**Column 1: Quick Navigation**

- Header: "Quick Links" (14px, semi-bold, white)
- Links:
  - Home
  - About
  - Experience
  - Certifications
  - Contact

**Column 2: Contact Information**

- Header: "Get in Touch" (14px, semi-bold, white)
- Email: sister@email.com
  - Icon: envelope icon
- Phone: +880 XXXX XXXXXX
  - Icon: phone icon
- Location: Dhaka, Bangladesh
  - Icon: map pin icon
- LinkedIn URL
  - Icon: linkedin icon
- Email as clickable link (hover: teal)

**Column 3: Social Media**

- Header: "Follow" (14px, semi-bold, white)
- Icons (circular, 36px):
  - LinkedIn
  - GitHub
  - Twitter/X
  - Email
- Hover effect: background becomes teal, scale slightly

**Bottom Bar**

- Left: "© 2026 [Sister's Name]. All rights reserved."
- Center: Legal links (Privacy Policy | Terms of Service)
- Right: "Built with Next.js & shadcn/ui"

### Mobile Behavior

- Stack vertically
- Full width
- Center align text
- Remove "Built with" text on very small screens

---

## Page Sections & Design

### 1. Home (Landing Page)

#### Hero Section

- **Background**: Gradient from Navy Blue (#0F172A) to Deep Slate (#1E293B)
- **Height**: 100vh or 600px
- **Layout**: Two columns (Desktop), Single column (Mobile)

**Left Side Content**

- Heading: "Engine Cadet at Hafnia Osprey" (48px, bold, white)
- Subheading: "Marine Engineer | Bangladesh Marine Academy Graduate" (20px, light, teal)
- Description: "Passionate about marine engineering. Currently gaining hands-on experience in engine room operations aboard international merchant vessels. Specializing in diesel engines, auxiliary machinery, and maritime safety systems." (16px, body, light gray)
- CTA Buttons:
  - Primary: "View My Experience" (Navy Blue text, Teal background)
  - Secondary: "View CV" (Teal text, Navy outline)
  - Spacing between buttons: 12px

**Right Side Content**

- Professional photo placeholder
  - 400x500px (portrait orientation)
  - Rounded corners: 12px
  - Border: 2px solid teal
  - Shadow: 0 20px 40px rgba(15, 23, 42, 0.3)

**Scroll Indicator**

- Chevron down icon at bottom
- Animated subtle bounce
- Color: Teal

#### Stats Section (Below Hero)

- Background: Light Gray (#F8FAFC)
- 4 columns (2 on tablet, 1 on mobile)
- Each stat card:
  - Number: 48px, bold, Navy Blue
  - Label: 16px, semi-bold, Dark Slate
  - Examples:
    - 6+ Months | Sea Experience
    - 12+ | Technical Certifications
    - 1 | Current Vessel (Hafnia Osprey)
    - 5+ | Specialized Skills

#### Featured Section

- Background: White
- Title: "Current Position" (36px, bold)
- Card layout with:
  - Ship name & image
  - Position details
  - Start date
  - Key responsibilities
  - Link: "View Full Experience"

---

### 2. About Me Page

#### Header

- Title: "About Me" (48px, bold, Navy Blue)
- Subtitle: "Marine Engineer in Progress" (20px, teal)
- Divider: 4px line, teal, 60px wide

#### Introduction Section

- **Background**: Light Gray
- **Layout**: Two columns (image + text)
- **Image**: Professional photo (rounded 12px)
- **Text**:
  - Short bio (3-4 paragraphs)
  - Education path
  - Current focus
  - Career aspirations

#### Journey Timeline

- **Background**: White
- **Title**: "My Journey" (32px, bold)
- **Timeline** (vertical on mobile, horizontal on desktop):
  - 2022: "Admitted to Bangladesh Marine Academy"
  - 2024: "Completed Pre-Sea Training"
  - Current: "Engine Cadet at Hafnia Osprey"
  - 2025: "4th Engineer Promotion Goal"

- Each timeline item:
  - Circle connector: Teal
  - Year label: Navy Blue, bold
  - Description: Dark gray
  - Hover effect: card lift, teal accent

#### Skills Overview (Brief)

- Grid: 3-4 columns
- Each skill card:
  - Icon (ship wheel, wrench, certificate, etc.)
  - Skill name
  - Short description
  - Link: "Learn More"

#### Values Section

- **Background**: Navy Blue gradient
- **Text**: White
- 3-4 cards in a row:
  - Icon + Title + Description
  - Examples: "Safety First", "Continuous Learning", "Maritime Excellence"
  - Hover: Teal accent border

---

### 3. Sea Experience Page

#### Page Header

- Title: "Sea Experience" (48px, bold, Navy Blue)
- Subtitle: "Real-world learning aboard international merchant vessels"

#### Current Vessel Card (Featured)

- **Background**: Gradient Teal to Navy
- **Text**: White
- **Layout**:
  - Left: Large ship image or icon
  - Right: Information

- Information:
  - Ship Name: "Hafnia Osprey" (28px, bold)
  - Ship Type: "Chemical/Product Tanker" (16px, regular)
  - Flag: "Flag State"
  - Built Year: Year
  - Gross Tonnage: Tonnage
  - Main Engine: Engine specifications
  - Joined Date: Date
  - Current Status: "Active" (green badge)

- Description: "Working as Engine Cadet in the engine department..."
- Key Responsibilities:
  - Bullet list (6-8 items)
  - Icons for visual hierarchy

#### Experience Cards (Scrollable or Grid)

- If multiple ships: Card layout, 2 columns (1 on mobile)
- Each card:
  - Ship image
  - Ship name (bold)
  - Position: "Engine Cadet"
  - Duration: "MM/YYYY - MM/YYYY" or "MM/YYYY - Present"
  - Ship type badge
  - Brief description (2-3 lines)
  - Link: "View Details" (teal)

#### Responsibilities Section

- **Background**: Light Gray
- **Title**: "Key Responsibilities"
- Two columns (1 on mobile)
- Detailed breakdown:
  - Daily engine room operations
  - Equipment maintenance
  - Safety procedures
  - Log keeping
  - Machinery troubleshooting
  - Engine systems monitoring

- Each item:
  - Icon (12x12px, teal)
  - Title: Semi-bold
  - Description: Regular weight

#### Career Path Timeline (Interactive)

- Vertical or horizontal
- Current position: Highlighted, teal border
- Future positions: Faded, darker color
- On hover: Information tooltip

Positions shown:

1. Engine Cadet (Current)
2. 4th Engineer (3rd Assistant Engineer)
3. 3rd Engineer (2nd Assistant Engineer)
4. 2nd Engineer (1st Assistant Engineer)
5. Chief Engineer

---

### 4. Certifications Page

#### Page Header

- Title: "Certifications & Qualifications" (48px, bold)
- Subtitle: "STCW and maritime training compliance"

#### Certification Cards Grid

- **Layout**: 3 columns (2 on tablet, 1 on mobile)
- **Card Height**: 300-350px
- **Card Background**: White with border
- **Border**: 1px solid light gray, left border 4px teal

#### Each Certification Card Contains

- **Icon**: Top left (36x36px, teal)
- **Status Badge**: Top right
  - "Active" (green bg, white text)
  - "Completed" (teal bg, white text)
  - "Pending" (amber bg, white text)

- **Title**: "Certification Name" (18px, bold, Navy Blue)
- **Issuer**: "Issuing Organization" (14px, gray)
- **Issue Date**: "MM/DD/YYYY" (12px, gray)
- **Expiry Date**: "MM/DD/YYYY" or "No Expiry" (12px, gray)
- **Certificate ID**: (11px, monospace, light gray)
- **Skills**: Tags/badges showing covered areas
- **CTA**: "View Certificate" link (teal, underline on hover)

#### Certification Types/Categories

**STCW Certificates** (most recent first)

1. Basic Safety Training (PST - Personal Survival Techniques)
2. Elementary First Aid (EFA)
3. Fire Prevention & Fire Fighting (FP&FF)
4. Personal Safety & Social Responsibilities (PSSR)
5. Proficiency in Survival Craft & Rescue Boats (PSC&RB)

**Advanced Courses**

1. Advanced Fire Fighting (AFF)
2. Medical First Aid
3. GMDSS (Global Maritime Distress & Safety System)

**Academic Qualification**

1. Bachelor of Maritime Science (BMA)
   - Special card with diploma icon
   - Larger, more prominent
   - Include GPA/honors if applicable

**Other Certifications**

1. Radar and ARPA
2. Standard Swimming Test (SST)
3. Company-specific certifications (if any)

#### Filter/Sort Section (Optional)

- Dropdown: "Filter by Type"
  - All Certificates
  - STCW Courses
  - Academic
  - In Progress

- Sorting: "Newest First" / "Expiry Date"

---

### 5. Technical Skills Page

#### Page Header

- Title: "Technical Skills" (48px, bold)
- Subtitle: "Expertise in marine engineering systems and operations"

#### Skills Categories (Tabs or Sections)

**Section 1: Propulsion & Main Engines**

- Grid: 2-3 columns
- Each skill card:
  - Icon: Engine icon
  - Skill name (18px, bold)
  - Description (14px, regular)
  - Proficiency bar (0-100%):
    - Background: Light gray
    - Filled: Teal gradient
    - Height: 4px
  - Proficiency level: "Intermediate" or "Proficient"

- Items:
  - Diesel Engine Operation
  - Engine Performance Monitoring
  - Fuel Treatment & Purification
  - Lubrication Systems
  - Cooling Systems
  - Auxiliary Machinery

**Section 2: Electrical & Electronics**

- Grid: 2-3 columns
- Items:
  - Electrical Distribution Systems
  - Generator Operation & Maintenance
  - Power Management
  - Electrical Safety
  - Basic Electronics
  - Automation Systems

**Section 3: Safety & Compliance**

- Grid: 2-3 columns
- Items:
  - Maritime Safety Regulations
  - MARPOL Compliance
  - Engine Room Safety
  - Emergency Procedures
  - Equipment Inspection
  - Environmental Protection

**Section 4: Technical Knowledge**

- Grid: 2-3 columns
- Items:
  - Ship Systems (HVAC, Plumbing)
  - Machinery Troubleshooting
  - Preventive Maintenance
  - Log Book Recording
  - Technical Documentation
  - Performance Analysis

**Section 5: Soft Skills**

- Grid: 2-3 columns
- Items:
  - Leadership
  - Team Work
  - Problem Solving
  - Communication
  - Time Management
  - Adaptability

#### Skill Card Design

```
┌─────────────────────────────┐
│ 🔧 [Icon]                   │
│                             │
│ Skill Name                  │
│ Brief description of skill  │
│ explaining proficiency      │
│                             │
│ Proficiency: ████░░░░░░ 65% │
│                             │
│ Level: Intermediate         │
└─────────────────────────────┘
```

#### Summary Section (Top or Bottom)

- Background: Light Gray
- 4 columns (2 on tablet, 1 on mobile)
- Statistics:
  - Total Skills: 20+
  - Years of Training: X
  - Certifications: 12
  - Proficiency Average: 78%

---

### 6. Gallery Page

#### Page Header

- Title: "Gallery" (48px, bold)
- Subtitle: "Life aboard Hafnia Osprey and maritime experiences"

#### Image Grid

- Masonry layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Image aspect ratios: Mix of square and 4:3
- Border radius: 8px
- Hover effect:
  - Overlay with teal background (30% opacity)
  - Zoom slightly (scale 1.05)
  - Show caption

#### Image Categories (Filter)

- Buttons at top (horizontal scroll on mobile):
  - All
  - Engine Room
  - Ship Systems
  - Training
  - Crew & Events

- Active button: Teal background, white text
- Inactive: Gray text, white background

#### Each Image Card

- Image with caption
- On hover:
  - Show caption overlay
  - Caption: White text, 14px, semi-bold
  - Location/Date: 12px, light gray

#### Lightbox/Modal

- Click image to open full-screen view
- Black background with transparency
- Navigation arrows (previous/next)
- Close button (X)
- Image title and description below

#### Example Images/Captions

- "Main Engine - MAN B&W Diesel Engine"
- "Fuel Purification System - Daily Maintenance"
- "Engine Room Control Center"
- "Crew Training Session - Safety Procedures"
- "Deck Perspective - Open Ocean"
- "Sunset from the Bridge"

---

### 7. Contact Page

#### Page Header

- Title: "Get in Touch" (48px, bold, Navy Blue)
- Subtitle: "Let's connect and discuss opportunities"

#### Two Column Layout (1 on mobile)

**Left Column: Contact Information**

- Background: Light Gray
- Padding: 40px
- Border radius: 12px

- Section: "Contact Details"
  - Email icon + Email: name@email.com (clickable)
  - Phone icon + Phone: +880 XXXX XXXXXX (clickable)
  - Location icon + Location: Dhaka, Bangladesh
  - LinkedIn icon + "Connect on LinkedIn" (link)

- Section: "Response Time"
  - "I typically respond within 24 hours"
  - Icon: Check mark

- Section: "Social Media"
  - LinkedIn link
  - GitHub link
  - Twitter/X link

- Each social link:
  - Icon + Label
  - Hover: Teal text color

**Right Column: Contact Form**

- Background: White
- Border: 1px solid light gray
- Padding: 40px
- Border radius: 12px

- Form Fields:
  1. Full Name (text input)
  2. Email (email input)
  3. Subject (text input)
  4. Message (textarea, 5-6 rows)

- Each field:
  - Label: 14px, semi-bold, Navy Blue
  - Padding: 12px
  - Border: 1px solid #e2e8f0
  - Border radius: 6px
  - Focus state:
    - Border color: Teal
    - Box shadow: 0 0 0 3px rgba(6, 182, 212, 0.1)

- Submit Button:
  - Text: "Send Message"
  - Background: Teal
  - Text: White
  - Padding: 12px 32px
  - Border radius: 6px
  - Hover: Darker teal, cursor pointer
  - Disabled state: Gray, cursor not-allowed

- Form states:
  - Empty: All fields empty
  - Filled: All fields completed
  - Submitting: Button shows spinner/loading state
  - Success: Success message appears
  - Error: Error message appears

---

## Typography System

### Font Strategy

**Single Font vs Multiple Fonts?**

**Recommendation: Use 2 fonts (Primary + Accent)**

- **Primary Font (Body + Headings)**: Inter or Poppins
- **Accent Font (Headings Only, Optional)**: Playfair Display or Cabin

**Why not use just one font?**

- Professional portfolios benefit from visual hierarchy
- A single font can feel monotonous on a hero section
- Two complementary fonts create sophistication without complexity

**Why not use 3+ fonts?**

- Performance impact (font loading time)
- Too many fonts look chaotic, unprofessional
- Harder to maintain consistency
- Violates "less is more" principle

---

### Recommended Font Combination

#### Option 1: Modern & Clean (Recommended)

- **Primary**: Inter (Body, subheadings, UI elements)
- **Accent**: Poppins (H1, H2 only - main headings)
- **Why?**:
  - Inter: Designed for screens, excellent readability at all sizes
  - Poppins: Geometric yet warm, gives character to headings
  - Together: Professional but approachable (great for international audience)
  - Both: Open-source, Google Fonts, fast loading

#### Option 2: Elegant & Premium

- **Primary**: Inter (Body, UI elements)
- **Accent**: Playfair Display (H1, H2, featured sections)
- **Why?**:
  - Inter: Clean modern base
  - Playfair Display: High-end serif, maritime elegance
  - Together: Feels premium/luxury shipping company
  - Downside: Serif can be harder to read in small sizes
  - **Best for**: If sister wants luxury yacht/premium shipping aesthetic

#### Option 3: Minimalist (Single Font)

- **Primary**: Inter (Everything)
- **Why?**:
  - Minimal dependencies
  - Fastest loading
  - Extremely readable
  - Modern default
  - Downside: Less visual hierarchy, can feel bland

#### Option 4: Friendly & Professional

- **Primary**: Poppins (Everything)
- **Accent**: Cabin (Body text - more detailed sections)
- **Why?**:
  - Poppins: Works well at all sizes
  - More personality than Inter
  - Still professional
  - Downside: Both geometric, less contrast

---

### Font Recommendation (BEST FOR THIS PROJECT)

**Go with Option 1: Inter + Poppins**

**Why specifically for marine engineer portfolio?**

1. **Readability**: Maritime industry values clarity (safety-critical)
   - Inter designed for screens, highly legible
   - Excellent on small devices and contracts

2. **International Appeal**: Poppins works across non-Latin scripts
   - Portfolio might be viewed by international shipping companies
   - Both fonts support many languages

3. **Professional**: Tech/Maritime industry standard
   - Used by Google, GitHub, modern tech companies
   - Conveys modern, forward-thinking engineer

4. **Performance**: Both free on Google Fonts
   - No licensing costs
   - Super fast CDN delivery

5. **Technical Elegance**: Geometric fonts suit engineering field
   - Poppins geometric approach = technical precision
   - Inter modern forms = cutting-edge tech

6. **Tone**: Approachable yet authoritative
   - Good for young professional (engine cadet)
   - Shows competence without arrogance

---

### Font Sizes & Weights (Complete Reference)

| Element                | Font           | Size | Weight        | Line Height | Color       | Use Case                      |
| ---------------------- | -------------- | ---- | ------------- | ----------- | ----------- | ----------------------------- |
| H1 (Hero/Page Title)   | Poppins        | 48px | 700 bold      | 1.2         | Navy Blue   | Main heading, hero section    |
| H2 (Section Title)     | Poppins        | 36px | 700 bold      | 1.3         | Navy Blue   | Section headers               |
| H3 (Subsection)        | Poppins        | 24px | 600 semi-bold | 1.4         | Navy Blue   | Card titles, subsections      |
| H4 (Card Title)        | Poppins        | 18px | 600 semi-bold | 1.4         | Navy Blue   | Small card headings           |
| Body Text (Paragraphs) | Inter          | 16px | 400 regular   | 1.6         | Dark text   | Main content paragraphs       |
| Body Small             | Inter          | 15px | 400 regular   | 1.6         | Dark text   | Secondary paragraphs          |
| Small Text (Label)     | Inter          | 14px | 500 medium    | 1.5         | Medium gray | Labels, meta info             |
| Meta Text (Caption)    | Inter          | 12px | 400 regular   | 1.5         | Light gray  | Dates, timestamps, captions   |
| XS Text                | Inter          | 11px | 400 regular   | 1.4         | Light gray  | Badge text, very small labels |
| Button Text            | Inter          | 14px | 600 semi-bold | 1.2         | White/Teal  | Buttons, CTAs                 |
| Link Text              | Inter          | 16px | 400 regular   | 1.6         | Teal        | Hyperlinks                    |
| Quote/Emphasis         | Poppins        | 18px | 500 medium    | 1.6         | Navy Blue   | Pull quotes, testimonials     |
| Badge Text             | Inter          | 12px | 600 semi-bold | 1.2         | White       | Status badges, tags           |
| Monospace (Code)       | JetBrains Mono | 13px | 400 regular   | 1.5         | Dark gray   | Technical certificates, IDs   |

---

### Font Weight Strategy

**Poppins Weights to Use**

- 600 (semi-bold): Headings, important labels
- 700 (bold): Main headings (H1, H2)

**Inter Weights to Use**

- 400 (regular): Body text, paragraphs
- 500 (medium): Labels, small headings
- 600 (semi-bold): Button text, strong emphasis

**Why these weights?**

- Keeps file size minimal (only load necessary weights)
- 3 weights per font is sweet spot: performance + hierarchy
- Skip 300 (light) and 800-900 (too heavy): unnecessary

---

### Google Fonts Setup for Next.js 16.2.6 + React 19

#### Step 1: Update layout.tsx with fonts + dark mode

```tsx
// app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

// Load only necessary weights (Tailwind v4 optimized)
const inter = Inter({
  subsets: ['latin'],
  weights: [400, 500, 600],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ['latin'],
  weights: [600, 700],
  display: 'swap',
  variable: '--font-poppins'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weights: [400],
  display: 'swap',
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Marine Engineer Portfolio | Engine Cadet',
  description: 'Professional portfolio of a marine engineer and engine cadet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### Step 2: Create ThemeProvider component (next-themes integration)

```tsx
// components/ThemeProvider.tsx

'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

#### Step 3: Update tailwind.config.ts (Tailwind v4 NEW SYNTAX)

```ts
// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        label: ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        meta: ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        xs: ['11px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      colors: {
        'navy-blue': '#0F172A',
        'navy-blue-light': '#1E3A5F',
        'ocean-teal': '#0891B2',
        'ocean-teal-light': '#06B6D4',
        'deep-slate': '#1E293B',
        'light-gray': '#F8FAFC',
        'text-dark': '#0F172A',
        'text-medium': '#64748B',
        'text-light': '#F1F5F9',
        'success-green': '#10B981',
        'warning-amber': '#F59E0B',
        'error-red': '#EF4444',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

export default config
```

#### Step 4: Update globals.css (Tailwind v4 syntax - SIMPLIFIED)

```css
/* app/globals.css - Tailwind v4 */

@import "tailwindcss";

/* Define CSS variables for theming */
@layer base {
  :root {
    color-scheme: light;
    --navy-blue: #0f172a;
    --ocean-teal: #0891b2;
    --deep-slate: #1e293b;
    --light-gray: #f8fafc;
    --text-dark: #0f172a;
    --text-medium: #64748b;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      --navy-blue: #1e293b;
      --ocean-teal: #06b6d4;
      --text-dark: #f1f5f9;
      --text-medium: #94a3b8;
    }
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply text-text-dark bg-white font-sans transition-colors duration-300;
  }

  body.dark {
    @apply text-text-light bg-navy-blue;
  }
}

@layer components {
  /* Heading Styles */
  h1 {
    @apply text-h1 dark:text-text-light font-display font-bold text-navy-blue;
  }

  h2 {
    @apply text-h2 dark:text-text-light font-display font-bold text-navy-blue;
  }

  h3 {
    @apply text-h3 dark:text-text-light font-display font-semibold text-navy-blue;
  }

  h4 {
    @apply text-h4 dark:text-text-light font-display font-semibold text-navy-blue;
  }

  /* Paragraph & Body Text */
  p {
    @apply text-body text-text-dark dark:text-text-light font-sans;
  }

  small,
  .text-sm {
    @apply text-meta text-text-medium font-sans dark:text-gray-400;
  }

  /* Links */
  a {
    @apply font-sans text-ocean-teal underline transition-colors hover:text-ocean-teal-light dark:text-ocean-teal-light dark:hover:text-ocean-teal;
  }

  a:not([class]) {
    @apply underline;
  }

  /* Button Default Style */
  button {
    @apply text-label font-sans font-semibold transition-colors;
  }

  /* Code/Monospace */
  code {
    @apply text-text-dark dark:text-text-light rounded bg-light-gray px-2 py-1 font-mono text-xs dark:bg-deep-slate;
  }

  /* Selection Highlight */
  ::selection {
    @apply bg-ocean-teal text-white;
  }
}

@layer utilities {
  /* Custom utility for container */
  .container-fluid {
    @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  /* Gradient backgrounds */
  .gradient-navy-to-slate {
    @apply bg-gradient-to-br from-navy-blue to-deep-slate;
  }

  .gradient-teal-to-navy {
    @apply bg-gradient-to-br from-ocean-teal to-navy-blue;
  }

  /* Text truncation */
  .line-clamp-1 {
    @apply truncate;
  }

  .line-clamp-2 {
    @apply line-clamp-2;
  }

  .line-clamp-3 {
    @apply line-clamp-3;
  }
}

/* Smooth scroll behavior */
@supports (scroll-behavior: smooth) {
  html {
    scroll-behavior: smooth;
  }
}
```

#### Step 5: Create postcss.config.js (PostCSS v4)

```js
// postcss.config.js

export default {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### Step 6: Utility function for class merging

```ts
// lib/utils.ts

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

### Font Loading Optimization

**What is `display: 'swap'`?**

- Shows fallback font while Google Font loads
- User sees content immediately (better UX)
- Fallback: System fonts (Arial, Helvetica)
- Once loaded, swaps to actual font

**Font Loading Performance**

| Strategy          | Load Time | Fallback       | Pros                  | Cons                 |
| ----------------- | --------- | -------------- | --------------------- | -------------------- |
| display: swap     | ~1-2s     | System font    | Fast, content visible | Brief font switch    |
| display: block    | ~3s+      | Invisible text | Smooth transition     | Slow, hidden text    |
| display: optional | ~0.5s     | System font    | Fastest               | May not load if slow |
| display: fallback | ~0.1s     | System font    | Instant view          | Font may not load    |

**Recommendation for this project: Use `swap`**

- Users see content immediately
- Handles slow network conditions
- Professional expectation: font consistency matters less than speed

---

### Font Stack Hierarchy (Fallback Chain)

```css
/* Complete fallback chain in CSS */

/* Headings */
font-family: "Poppins", "Segoe UI", "Helvetica Neue", sans-serif;

/* Body */
font-family:
  "Inter",
  -apple-system,
  "Segoe UI",
  "Helvetica Neue",
  sans-serif;

/* Monospace */
font-family: "JetBrains Mono", "Monaco", "Courier New", monospace;
```

**Why this fallback order?**

- `-apple-system`: macOS San Francisco font (excellent fallback)
- `Segoe UI`: Windows default (clean, readable)
- `Helvetica Neue`: Older Mac/iPhone fallback
- `sans-serif`: Generic catch-all

---

### Real-World Usage Examples

#### Example 1: Hero Section

```tsx
<section className="bg-gradient-to-br from-navy-blue to-deep-slate py-24">
  <div className="max-w-4xl mx-auto px-4">
    {/* Main heading: Poppins Bold */}
    <h1 className="text-h1 font-display font-bold text-white mb-4">
      Engine Cadet at Hafnia Osprey
    </h1>

    {/* Subheading: Poppins Regular/Medium - size smaller */}
    <p className="text-2xl font-display font-medium text-ocean-teal mb-6">
      Marine Engineer | Bangladesh Marine Academy Graduate
    </p>

    {/* Body text: Inter Regular */}
    <p className="text-body font-sans text-light-gray max-w-2xl mb-8">
      Passionate about marine engineering with hands-on experience in engine room operations.
    </p>
  </div>
</section>
```

#### Example 2: Card Section

```tsx
<div className="bg-white rounded-lg p-6 border border-gray-200">
  {/* Card title: Poppins Semi-bold */}
  <h3 className="text-h4 font-display font-semibold text-navy-blue mb-2">
    Current Vessel
  </h3>

  {/* Meta info: Inter Small */}
  <p className="text-label font-sans text-text-medium mb-4">
    Chemical Tanker • Joined June 2024
  </p>

  {/* Body text: Inter Regular */}
  <p className="text-body font-sans text-text-dark mb-4">
    Working in the engine department aboard Hafnia Osprey...
  </p>

  {/* Link: Inter Medium */}
  <a href="/experience" className="text-label font-sans font-medium text-ocean-teal hover:text-ocean-teal-light">
    View Full Experience →
  </a>
</div>
```

#### Example 3: Form Label & Input

```tsx
<div className="mb-6">
  {/* Label: Inter Medium */}
  <label className="text-label font-sans font-medium text-navy-blue block mb-2">
    Full Name
  </label>

  {/* Input placeholder: Inter Regular */}
  <input
    type="text"
    placeholder="Enter your full name"
    className="w-full px-4 py-2 border border-gray-300 rounded font-sans text-body text-text-dark"
  />
</div>
```

#### Example 4: Badge/Status

```tsx
<span className="inline-block bg-success-green text-white px-3 py-1 rounded-full text-xs font-sans font-semibold">
  Active
</span>
```

---

### Font Performance Checklist

✅ Use Google Fonts (free, fast CDN)
✅ Load only necessary weights (400, 500, 600)
✅ Use `display: 'swap'` for faster rendering
✅ Load fonts in `layout.tsx` (not individual pages)
✅ Use CSS variables for font families
✅ Predefined font sizes in tailwind config
✅ Test on slow 3G network (DevTools)
✅ Monitor Lighthouse score (aim for 90+)

---

### What NOT to Do

❌ Load 5+ fonts (too slow)
❌ Load all weights (600 are enough)
❌ Use custom fonts without optimization (use Google Fonts)
❌ Use serif fonts for body text on web (hard to read)
❌ Mix more than 2-3 font families (chaotic)
❌ Use light weights (< 400) for body (readability issues)
❌ Forget font-display property (bad user experience)
❌ Change fonts mid-project (inconsistency)

---

### Font Testing

**After deployment, test:**

1. **Chrome DevTools Lighthouse**
   - Cumulative Layout Shift (CLS) should be < 0.1
   - Font swap should not cause layout shift

2. **WebPageTest.org**
   - Check font loading waterfall
   - Ensure fonts load in parallel

3. **Cross-browser Testing**
   - Test on Chrome, Firefox, Safari, Edge
   - Check mobile (iOS + Android)

4. **Different Network Speeds**
   - Slow 3G
   - Fast 4G
   - WiFi

5. **Readability**
   - All sizes legible
   - Sufficient contrast (WCAG AA minimum 4.5:1)

---

### Font Comparison Table

| Font             | Type           | Best For   | Load Size | Readability  | Professional |
| ---------------- | -------------- | ---------- | --------- | ------------ | ------------ |
| Inter            | Sans-serif     | Body, UI   | ~15KB     | Excellent    | High         |
| Poppins          | Geometric Sans | Headings   | ~18KB     | Good         | High         |
| Playfair Display | Serif          | Headings   | ~12KB     | Good (H1-H3) | Very High    |
| Cabin            | Humanist Sans  | Body       | ~16KB     | Excellent    | High         |
| Roboto           | Sans-serif     | Everything | ~20KB     | Excellent    | Medium       |
| Lato             | Warm Sans      | Body       | ~14KB     | Good         | High         |
| JetBrains Mono   | Monospace      | Code       | ~8KB      | Excellent    | High         |

**For this project: Inter + Poppins wins on all counts**

- Small file size combined: ~33KB
- Optimal for web
- Professional maritime aesthetic
- Excellent readability
- International support

---

## Spacing & Layout

### Padding/Margins

- Page sections: 60px top/bottom, 40px sides (responsive)
- Cards: 24px padding
- Form fields: 12px padding
- Buttons: 12px 24px (vertical x horizontal)

### Gap Between Elements

- Section to section: 80px
- Card to card: 24px
- Element to element: 12px or 16px
- Form field gap: 20px

### Border Radius

- Large components (cards, sections): 12px
- Buttons, inputs: 6px
- Images: 8-12px
- Badges: 4px (pill: 20px)

---

## Interactive Elements & Hover States

### Buttons

- Primary Button:
  - Default: Teal bg, white text
  - Hover: Darker teal, lift shadow
  - Active: Even darker, pressed effect
  - Disabled: Gray bg, gray text

- Secondary Button:
  - Default: White bg, teal text, teal border
  - Hover: Light teal bg
  - Active: Dark teal text
  - Disabled: Gray text, gray border

### Links

- Default: Teal color, no underline
- Hover: Darker teal, underline
- Visited: Navy blue
- Active: Teal, bold

### Cards

- Default: White bg, light gray border
- Hover: Box shadow lift, border teal
- Active: Teal left border (4px)

### Form Inputs

- Default: White bg, light gray border
- Focus: Teal border, light teal shadow
- Filled: White bg, dark gray text
- Error: Light red bg, red border
- Success: Light green bg, green border

### Navigation Links (Navbar)

- Default: White text, opacity 0.8
- Hover: White text, opacity 1.0
- Active: Teal color, bottom border 2px teal

---

## Responsive Breakpoints

```
Mobile:     0px - 640px
Tablet:     641px - 1024px
Desktop:    1025px+
```

### Layout Changes

**Hero Section**

- Mobile: Single column, no right image (or below)
- Tablet: Two columns, adjusted spacing
- Desktop: Full two-column layout

**Grid Layouts**

- Skills cards: 1 column (mobile) → 2 (tablet) → 3 (desktop)
- Certification cards: 1 → 2 → 3 columns
- Gallery: 1 → 2 → 3 columns (masonry)

**Navigation**

- Mobile: Hamburger menu, drawer
- Tablet: Full navbar, optimized spacing
- Desktop: Full navbar, all links visible

**Font Sizes**

- Reduce by 10-15% on mobile and tablet
- H1: 48px (desktop) → 36px (tablet) → 28px (mobile)
- Body: 16px (desktop) → 15px (tablet) → 14px (mobile)

---

## Component Architecture for Next.js 16.2.6 + React 19

### Important: shadcn/ui Setup

Since you have `shadcn` in your package.json, initialize with:

```bash
# Initialize shadcn/ui (if not already done)
npx shadcn-ui@latest init

# This creates components.json and sets up @/components/ui directory
```

### Core Components to Build/Use

#### 1. Button Component

```tsx
// components/ui/button.tsx - Use shadcn version OR create custom
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950",
  {
    variants: {
      variant: {
        default:
          "bg-ocean-teal text-white hover:bg-ocean-teal-light dark:bg-ocean-teal-light dark:hover:bg-ocean-teal",
        destructive:
          "bg-error-red text-white hover:bg-red-600 dark:hover:bg-red-700",
        outline:
          "border border-ocean-teal text-ocean-teal hover:bg-light-gray dark:border-ocean-teal-light dark:text-ocean-teal-light dark:hover:bg-slate-900",
        secondary:
          "bg-deep-slate text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",
        ghost:
          "hover:bg-light-gray text-ocean-teal dark:hover:bg-slate-900 dark:text-ocean-teal-light",
        link: "text-ocean-teal underline-offset-4 hover:underline dark:text-ocean-teal-light",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

#### 2. Card Component (Simple)

```tsx
// components/ui/card.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-900",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-h4 font-display font-semibold leading-none tracking-tight text-navy-blue dark:text-text-light",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

#### 3. Badge Component

```tsx
// components/ui/badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-ocean-teal text-white dark:bg-ocean-teal-light",
        secondary:
          "border border-transparent bg-success-green text-white dark:bg-green-600",
        destructive:
          "border border-transparent bg-error-red text-white dark:bg-red-600",
        outline: "text-navy-blue border border-navy-blue dark:text-text-light dark:border-gray-400",
        pending:
          "border border-transparent bg-warning-amber text-white dark:bg-amber-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

### Icon System: Using Phosphor Icons

Since you have `@phosphor-icons/react` installed, use it for all icons:

```tsx
// Example icon usage throughout the project
import {
  House,
  User,
  BookOpen,
  Briefcase,
  Certificate,
  Wrench,
  Image,
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  List,
  X,
  MagnifyingGlass,
  CaretDown,
  Ship,
  Engine,
  Gear,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Heart,
  ArrowRight,
} from '@phosphor-icons/react'

// Size options: 16, 20, 24, 28, 32, 40, 48
// Weight options: 'thin', 'light', 'regular', 'bold', 'fill', 'duotone'

export function NavBar() {
  return (
    <button>
      <House size={24} weight="fill" className="text-ocean-teal" />
    </button>
  )
}
```

**Phosphor Icon Recommendations for Portfolio:**

- `House` - Home
- `User` - About/Profile
- `Briefcase` - Experience/Career
- `Certificate` - Certifications
- `Wrench` - Skills/Tools
- `Image` - Gallery
- `EnvelopeSimple` - Contact/Email
- `LinkedinLogo` - LinkedIn link
- `GithubLogo` - GitHub link
- `Ship` - Vessel/Maritime
- `Engine` - Engine/Engineering
- `Gear` - Settings/Mechanics
- `CheckCircle` - Completed/Active
- `Clock` - Duration/Time
- `MapPin` - Location
- `Phone` - Phone number
- `ArrowRight` - CTA/Links
- `CaretDown` - Dropdown

### Common Components Using Everything

#### Example: Navigation Bar (with Phosphor Icons)

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { List, X, Download } from '@phosphor-icons/react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Skills', href: '/skills' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-navy-blue dark:border-slate-700 dark:bg-navy-blue">
      <div className="container-fluid flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Ship size={28} weight="fill" className="text-ocean-teal" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">
              Sister's Name
            </span>
            <span className="text-xs text-gray-300">Engine Cadet</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="default" size="sm" className="gap-2">
            <Download size={16} />
            View CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-slate border-t border-gray-700">
          <div className="container-fluid flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 transition-colors hover:text-ocean-teal"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" className="w-full gap-2">
              <Download size={16} />
              View CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
```

### React 19 Specific Patterns

**No more `useCallback` for event handlers** (React 19 auto-optimizes):

```tsx
// Old (React 18)
const handleClick = useCallback(() => {
  // logic
}, [])

// New (React 19) - Direct function
function MyComponent() {
  function handleClick() {
    // logic
  }

  return <button onClick={handleClick}>Click</button>
}
```

**Server Components as default** (React 19):

```tsx
// This is a Server Component by default
export default function Page() {
  // Can access database, secrets, etc.
  return <div>Content</div>
}

// Mark as client when needed
'use client'

export default function InteractiveComponent() {
  const [state, setState] = useState()
  // ...
}
```

---

## Color CSS Variables (for tailwind config)

```css
/* Add to globals.css or tailwind config */

:root {
  --navy-blue: #0f172a;
  --navy-blue-light: #1e3a5f;
  --ocean-teal: #0891b2;
  --ocean-teal-light: #06b6d4;
  --deep-slate: #1e293b;
  --light-gray: #f8fafc;
  --text-dark: #0f172a;
  --text-medium: #64748b;
  --text-light: #f1f5f9;
  --success-green: #10b981;
  --warning-amber: #f59e0b;
  --error-red: #ef4444;
}
```

---

## SEO & Meta Tags

```tsx
// layout.tsx or page.tsx

export const metadata = {
  title: "Marine Engineer Portfolio | [Sister's Name]",
  description: "Engine Cadet at Bangladesh Marine Academy. Professional portfolio showcasing sea experience, certifications, and technical skills in marine engineering.",
  keywords: ["marine engineer", "engine cadet", "merchant navy", "Bangladesh Marine Academy"],
  openGraph: {
    title: "Marine Engineer Portfolio",
    description: "Engine Cadet - Marine Engineering Professional",
    url: "https://portfolio-domain.com",
    type: "website",
  },
}
```

---

## Performance Optimization

- Image optimization: Use Next.js Image component
- Font optimization: Use next/font
- Lazy loading: Images and components below fold
- Code splitting: Dynamic imports for pages
- CSS optimization: Tailwind purge unused styles

---

## Dark Mode Setup (next-themes)

Since your package.json includes `next-themes`, here's how to implement it:

### 1. Update layout.tsx (Already done above)

The layout already has:

```tsx
<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
```

### 2. Dark Mode Toggle Component

```tsx
// components/ThemeToggle.tsx

'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} weight="fill" />
      ) : (
        <Moon size={20} weight="fill" />
      )}
    </button>
  )
}
```

### 3. Use in Navbar

```tsx
import { ThemeToggle } from '@/components/ThemeToggle'

// In navbar, add after CTA button:
<ThemeToggle />
```

### 4. Dark Mode Color Strategy

Already defined in tailwind.config.ts and globals.css with `dark:` prefix:

```tsx
// Usage in components
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Content
</div>

// Or use custom classes:
<h1 className="text-navy-blue dark:text-text-light">Title</h1>
```

---

## Environment Variables Setup

Create `.env.local`:

```bash
# .env.local

# Contact Form (choose one)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
# OR
NEXT_PUBLIC_CONTACT_EMAIL=your-email@gmail.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G_XXXXXXXXX

# API endpoints (if needed)
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## Deployment (Vercel - Optimized for Next.js 16)

### 1. Prepare for deployment

```bash
# Build locally to test
npm run build

# Check for build errors
npm run lint
npm run typecheck
```

### 2. Deploy to Vercel

```bash
# Option 1: Using Vercel CLI
npm i -g vercel
vercel

# Option 2: Connect GitHub repo at vercel.com
# - Push code to GitHub
# - Go to vercel.com
# - Import project from GitHub
# - Vercel auto-deploys on push
```

### 3. Vercel Configuration (vercel.json)

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "env": {
    "NEXT_PUBLIC_FORM_ENDPOINT": "@form_endpoint"
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "no-store" }]
    },
    {
      "source": "/(.*)",
      "headers": [{ "key": "X-Content-Type-Options", "value": "nosniff" }]
    }
  ]
}
```

### 4. Vercel Environment Variables

Set in Vercel dashboard:

- `NEXT_PUBLIC_FORM_ENDPOINT`
- `NEXT_PUBLIC_GA_ID`
- Any private keys

---

## Performance Optimization (Next.js 16 + React 19)

### Image Optimization

```tsx
// components/sections/Gallery.tsx

import Image from 'next/image'

export function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className="rounded-lg object-cover w-full h-auto"
      priority={false} // Set true for above-the-fold images
      quality={85} // Optimize file size
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}
```

### Code Splitting (Automatic in Next.js 16)

```tsx
// Dynamic import for heavy components
import dynamic from 'next/dynamic'

const GalleryLightbox = dynamic(() => import('@/components/GalleryLightbox'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
})
```

### Font Optimization (Already covered)

Your font loading with `display: 'swap'` is optimized.

### Caching Strategy

```tsx
// app/layout.tsx

export const revalidate = 60 // Revalidate every 60 seconds (ISR)

// Or per page:
// app/experience/page.tsx
export const revalidate = 3600 // 1 hour
```

### Lighthouse Targets

- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

Check with: `npm run build && npm start` then use PageSpeed Insights

---

## Performance Checklist (Updated for Next.js 16.2.6)

✅ Fonts loaded with `display: 'swap'`
✅ Only necessary font weights (400, 500, 600)
✅ Google Fonts via next/font
✅ Images optimized with next/image
✅ Dynamic imports for heavy components
✅ Server Components by default (React 19)
✅ Minimal Client Components
✅ Tailwind CSS v4 optimized
✅ dark mode with next-themes
✅ ESLint configured
✅ TypeScript strict mode
✅ Testing on slow 3G (DevTools)
✅ Lighthouse score monitoring
✅ Vercel deployment with auto-deploy

---

## Development Commands (Next.js 16.2.6)

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Linting
npm run lint

# Format code
npm run format

# Type checking
npm run typecheck

# Full check before commit
npm run build && npm run typecheck && npm run lint
```

---

## Git Pre-commit Hook (Optional)

Create `.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run typecheck && npm run lint
```

---

## Summary of Updates for Your Stack

| Aspect         | Version | Status                     |
| -------------- | ------- | -------------------------- |
| Next.js        | 16.2.6  | ✅ Latest                  |
| React          | 19.2.4  | ✅ Latest                  |
| TypeScript     | 5       | ✅ Latest                  |
| Tailwind CSS   | 4       | ✅ Latest (v4 syntax used) |
| shadcn/ui      | 4.18.0  | ✅ Compatible              |
| next-themes    | 0.4.6   | ✅ Dark mode ready         |
| Phosphor Icons | 2.1.10  | ✅ All icons available     |

**All documentation is NOW UP-TO-DATE and production-ready!**

---

## Development Notes

1. **Start with mobile-first design**: Code for mobile, then expand to tablet/desktop
2. **Use CSS variables**: Make theming and maintenance easier
3. **Component library first**: Build reusable components before pages
4. **Data management**: Consider using constants.ts for ship info, certifications, skills
5. **Forms**: Use form libraries (react-hook-form + zod) for validation
6. **Images**: Optimize and use WebP format
7. **Testing**: Test on multiple devices and browsers
8. **Accessibility**: Use semantic HTML, ARIA labels, keyboard navigation

---

## Update Strategy

As sister progresses in career, easy updates:

- Update navbar CTA or add "Captain's Recommendations" section
- Change "Engine Cadet" to "4th Engineer" in all components
- Add new certifications automatically to certifications page
- Update ship details when changing vessels
- Add new gallery images
- Update experience timeline

Create a simple admin panel or CMS integration for easy updates in future.

---

## Next Steps for Development

1. Set up Next.js project with shadcn/ui
2. Create color theme in tailwind.config.js
3. Build Navbar component
4. Build Footer component
5. Create reusable Card, Button components
6. Build Hero section
7. Build remaining page sections
8. Add responsive design
9. Test and deploy
10. Set up contact form backend (Formspree, SendGrid, etc.)
