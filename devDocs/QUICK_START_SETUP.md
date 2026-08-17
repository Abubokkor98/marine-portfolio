# Quick Start Setup Guide - Marine Engineer Portfolio

**Stack**: Next.js 16.2.6 + React 19.2.4 + Tailwind CSS v4 + shadcn/ui v4.18.0 (Base UI + base-luma)

> **Already completed**: Project initialized via `create-next-app` + `pnpm dlx shadcn@latest init`.
> This guide covers the **design system, page sections, and component architecture** built on top of the existing setup.

---

## Actual Stack Reference

| Package                    | Version         | Notes                                                           |
| -------------------------- | --------------- | --------------------------------------------------------------- |
| `next`                     | 16.2.6          | App Router, Server Components default                           |
| `react` / `react-dom`      | 19.2.4          | No `useCallback` needed for handlers                            |
| `tailwindcss`              | ^4              | CSS-first config via `@theme`, no `tailwind.config.ts`          |
| `@tailwindcss/postcss`     | ^4              | Single PostCSS plugin (replaces old tailwindcss + autoprefixer) |
| `shadcn`                   | ^4.18.0         | v4 rewrite, uses Base UI instead of Radix                       |
| `@base-ui/react`           | ^1.7.0          | Successor to Radix UI primitives                                |
| `next-themes`              | ^0.4.6          | Dark mode via `.dark` class                                     |
| `@phosphor-icons/react`    | ^2.1.10         | Icon system                                                     |
| `class-variance-authority` | ^0.7.1          | Component variant styling                                       |
| `clsx` + `tailwind-merge`  | ^2.1.1 / ^3.6.0 | Class merging via `cn()`                                        |
| `tw-animate-css`           | ^1.4.0          | shadcn animation layer                                          |

---

## Phase 1: Maritime Design System

### Color Palette (Professional Maritime Theme)

The shadcn setup uses **oklch()** colors with semantic tokens (`--primary`, `--accent`, etc.).
Our maritime colors map onto these tokens. Extend them in `globals.css` inside the existing `@theme inline {}` block or as CSS custom properties.

#### Maritime Color Reference

| Name             | Hex       | oklch()                  | Usage                                 |
| ---------------- | --------- | ------------------------ | ------------------------------------- |
| Navy Blue        | `#0F172A` | `oklch(0.148 0.04 260)`  | Headings, hero backgrounds, authority |
| Navy Blue Light  | `#1E3A5F` | `oklch(0.295 0.06 255)`  | Section backgrounds, hover states     |
| Ocean Teal       | `#0891B2` | `oklch(0.59 0.14 210)`   | Highlights, CTAs, active states       |
| Ocean Teal Light | `#06B6D4` | `oklch(0.68 0.15 210)`   | Hover states, dark mode accent        |
| Deep Slate       | `#1E293B` | `oklch(0.218 0.008 224)` | Card backgrounds, sections            |
| Light Gray       | `#F8FAFC` | `oklch(0.985 0.002 250)` | Light section backgrounds             |
| Text Dark        | `#0F172A` | `oklch(0.148 0.04 260)`  | Body text, headings                   |
| Text Medium      | `#64748B` | `oklch(0.56 0.02 250)`   | Secondary text, meta info             |
| Text Light       | `#F1F5F9` | `oklch(0.965 0.005 250)` | Text on dark backgrounds              |
| Success Green    | `#10B981` | `oklch(0.68 0.16 165)`   | Certifications achieved               |
| Warning Amber    | `#F59E0B` | `oklch(0.78 0.17 75)`    | In-progress, pending items            |
| Error Red        | `#EF4444` | `oklch(0.63 0.24 25)`    | Alerts, critical info                 |

#### How to Add Maritime Colors (Tailwind v4 Way)

Add custom maritime tokens inside the existing `@theme inline {}` block in `app/globals.css`:

```css
@theme inline {
  /* ... existing shadcn tokens ... */

  /* Maritime custom colors */
  --color-navy-blue: oklch(0.148 0.04 260);
  --color-navy-blue-light: oklch(0.295 0.06 255);
  --color-ocean-teal: oklch(0.59 0.14 210);
  --color-ocean-teal-light: oklch(0.68 0.15 210);
  --color-deep-slate: oklch(0.218 0.008 224);
  --color-light-gray: oklch(0.985 0.002 250);
  --color-text-dark: oklch(0.148 0.04 260);
  --color-text-medium: oklch(0.56 0.02 250);
  --color-text-light: oklch(0.965 0.005 250);
  --color-success-green: oklch(0.68 0.16 165);
  --color-warning-amber: oklch(0.78 0.17 75);
  --color-error-red: oklch(0.63 0.24 25);
}
```

> **Important**: In Tailwind v4, the `--color-` prefix in `@theme` makes these usable as `bg-navy-blue`, `text-ocean-teal`, etc. No `tailwind.config.ts` needed.

#### Dark Mode Color Overrides

Add maritime dark mode overrides inside the existing `.dark {}` block:

```css
.dark {
  /* ... existing shadcn dark tokens ... */

  /* Maritime dark overrides (optional, override if needed) */
  --color-navy-blue: oklch(0.218 0.008 224);
  --color-ocean-teal: oklch(0.68 0.15 210);
}
```

#### Dark Mode Usage in Components

```tsx
// Use shadcn semantic tokens for auto dark mode:
<div className="bg-background text-foreground">Auto dark mode</div>

// Use maritime colors with explicit dark: overrides:
<h1 className="text-navy-blue dark:text-text-light">Title</h1>
<div className="bg-light-gray dark:bg-deep-slate">Section</div>
```

---

### Typography System

#### Font Strategy: Why 2 Fonts

**Recommendation: Public Sans (Body) + Poppins (Headings)**

| Option                     | Fonts                          | Best For                | Pros                            | Cons                        |
| -------------------------- | ------------------------------ | ----------------------- | ------------------------------- | --------------------------- |
| **Option 1 (Recommended)** | Public Sans + Poppins          | Maritime portfolio      | Professional + visual hierarchy | Two font loads              |
| Option 2                   | Public Sans + Playfair Display | Luxury/premium feel     | High-end serif elegance         | Serif harder at small sizes |
| Option 3                   | Public Sans only               | Minimalist              | Fastest loading, simple         | Less visual hierarchy       |
| Option 4                   | Poppins only                   | Friendly + professional | More personality                | Both body + heading same    |

**Why Public Sans + Poppins for this project:**

1. **Readability**: Maritime industry values clarity (safety-critical) — Public Sans is highly legible
2. **International Appeal**: Both fonts support many languages — viewed by international shipping companies
3. **Professional**: Tech/Maritime industry standard — conveys modern, forward-thinking engineer
4. **Performance**: Both free on Google Fonts — no licensing, fast CDN delivery
5. **Technical Elegance**: Geometric fonts suit engineering field
6. **Tone**: Approachable yet authoritative — great for young professional (engine cadet)

#### Font Comparison Table

| Font             | Type           | Best For | Load Size | Readability  | Professional |
| ---------------- | -------------- | -------- | --------- | ------------ | ------------ |
| Public Sans      | Sans-serif     | Body, UI | ~15KB     | Excellent    | High         |
| Inter            | Sans-serif     | Body, UI | ~15KB     | Excellent    | High         |
| Poppins          | Geometric Sans | Headings | ~18KB     | Good         | High         |
| Playfair Display | Serif          | Headings | ~12KB     | Good (H1-H3) | Very High    |
| Cabin            | Humanist Sans  | Body     | ~16KB     | Excellent    | High         |
| JetBrains Mono   | Monospace      | Code     | ~8KB      | Excellent    | High         |
| Geist Mono       | Monospace      | Code     | ~10KB     | Excellent    | High         |

#### Current Font Setup (in `app/layout.tsx`)

The shadcn init set up **Public Sans** as primary and **Geist Mono** for monospace.

To add **Poppins** for display headings:

```tsx
// app/layout.tsx — add Poppins import
import { Geist_Mono, Public_Sans, Poppins } from "next/font/google"

const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-sans' })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-display',
})

// In the <html> tag, add the variable:
className={cn("antialiased", fontMono.variable, "font-sans", publicSans.variable, poppins.variable)}
```

Then register the display font in `globals.css`:

```css
@theme inline {
  --font-display: var(--font-display);
}
```

#### Font Sizes & Weights (Complete Reference)

| Element                | Font        | Size | Weight        | Line Height | Color       | Use Case                      |
| ---------------------- | ----------- | ---- | ------------- | ----------- | ----------- | ----------------------------- |
| H1 (Hero/Page Title)   | Poppins     | 48px | 700 bold      | 1.2         | Navy Blue   | Main heading, hero section    |
| H2 (Section Title)     | Poppins     | 36px | 700 bold      | 1.3         | Navy Blue   | Section headers               |
| H3 (Subsection)        | Poppins     | 24px | 600 semi-bold | 1.4         | Navy Blue   | Card titles, subsections      |
| H4 (Card Title)        | Poppins     | 18px | 600 semi-bold | 1.4         | Navy Blue   | Small card headings           |
| Body Text (Paragraphs) | Public Sans | 16px | 400 regular   | 1.6         | Dark text   | Main content paragraphs       |
| Body Small             | Public Sans | 15px | 400 regular   | 1.6         | Dark text   | Secondary paragraphs          |
| Small Text (Label)     | Public Sans | 14px | 500 medium    | 1.5         | Medium gray | Labels, meta info             |
| Meta Text (Caption)    | Public Sans | 12px | 400 regular   | 1.5         | Light gray  | Dates, timestamps, captions   |
| XS Text                | Public Sans | 11px | 400 regular   | 1.4         | Light gray  | Badge text, very small labels |
| Button Text            | Public Sans | 14px | 600 semi-bold | 1.2         | White/Teal  | Buttons, CTAs                 |
| Link Text              | Public Sans | 16px | 400 regular   | 1.6         | Teal        | Hyperlinks                    |
| Quote/Emphasis         | Poppins     | 18px | 500 medium    | 1.6         | Navy Blue   | Pull quotes, testimonials     |
| Badge Text             | Public Sans | 12px | 600 semi-bold | 1.2         | White       | Status badges, tags           |
| Monospace (Code)       | Geist Mono  | 13px | 400 regular   | 1.5         | Dark gray   | Technical certificates, IDs   |

#### Font Weight Strategy

**Poppins Weights to Use**: 600 (semi-bold) for H3-H4, 700 (bold) for H1-H2
**Public Sans Weights to Use**: 400 (regular) for body, 500 (medium) for labels, 600 (semi-bold) for buttons

> Keep only necessary weights for minimal file size. 3 weights per font is the sweet spot.

#### Font Stack Hierarchy (Fallback Chain)

```css
/* Headings */
font-family: "Poppins", "Segoe UI", "Helvetica Neue", sans-serif;

/* Body */
font-family:
  "Public Sans",
  -apple-system,
  "Segoe UI",
  "Helvetica Neue",
  sans-serif;

/* Monospace */
font-family: "Geist Mono", "Monaco", "Courier New", monospace;
```

#### Font Loading Optimization

**What is `display: 'swap'`?**

- Shows fallback font while Google Font loads
- User sees content immediately (better UX)
- Once loaded, swaps to actual font

| Strategy            | Load Time | Fallback       | Pros                  | Cons                 |
| ------------------- | --------- | -------------- | --------------------- | -------------------- |
| `display: swap`     | ~1-2s     | System font    | Fast, content visible | Brief font switch    |
| `display: block`    | ~3s+      | Invisible text | Smooth transition     | Slow, hidden text    |
| `display: optional` | ~0.5s     | System font    | Fastest               | May not load if slow |

**Recommendation for this project: Use `swap`** — users see content immediately.

#### Font Performance Checklist

- ✅ Use Google Fonts (free, fast CDN)
- ✅ Load only necessary weights (400, 500, 600, 700)
- ✅ Use `display: 'swap'` for faster rendering
- ✅ Load fonts in `layout.tsx` (not individual pages)
- ✅ Use CSS variables for font families
- ✅ Test on slow 3G network (DevTools)
- ✅ Monitor Lighthouse score (aim for 90+)

#### Font — What NOT to Do

- ❌ Load 5+ fonts (too slow)
- ❌ Load all weights (only load necessary ones)
- ❌ Use custom fonts without optimization (use Google Fonts via next/font)
- ❌ Use serif fonts for body text on web (hard to read)
- ❌ Mix more than 2-3 font families (chaotic)
- ❌ Use light weights (< 400) for body (readability issues)
- ❌ Forget `display` property (bad user experience)
- ❌ Change fonts mid-project (inconsistency)

---

### Spacing & Layout

| Element                        | Value                                          |
| ------------------------------ | ---------------------------------------------- |
| Page section padding           | `py-16 lg:py-20` (60-80px top/bottom)          |
| Page section side padding      | `px-4 sm:px-6 lg:px-8` (16-32px)               |
| Container max-width            | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`       |
| Card padding                   | `p-6` (24px)                                   |
| Card gap                       | `gap-6` (24px)                                 |
| Section-to-section gap         | `gap-20` (80px)                                |
| Element-to-element gap         | `gap-3` or `gap-4` (12-16px)                   |
| Button padding                 | `px-4 py-2` (12px 24px vertical × horizontal)  |
| Form field padding             | `p-3` (12px)                                   |
| Form field gap                 | `gap-5` (20px)                                 |
| Border radius (cards/sections) | `rounded-xl` (12px)                            |
| Border radius (buttons)        | `rounded-4xl` (pill, shadcn base-luma default) |
| Border radius (inputs)         | `rounded-md` (6px)                             |
| Border radius (images)         | `rounded-lg` (8-12px)                          |
| Border radius (badges)         | `rounded-full` (pill)                          |

---

### Responsive Breakpoints

```
Mobile:     0px   - 640px    (default / sm)
Tablet:     641px - 1024px   (md, lg)
Desktop:    1025px+          (xl, 2xl)
```

| Layout              | Mobile                           | Tablet                         | Desktop                        |
| ------------------- | -------------------------------- | ------------------------------ | ------------------------------ |
| Hero                | Single column, no right image    | Two columns, adjusted spacing  | Full two-column layout         |
| Skill cards         | 1 col                            | 2 col                          | 3 col                          |
| Certification cards | 1 col                            | 2 col                          | 3 col                          |
| Gallery             | 1 col                            | 2 col                          | 3 col masonry                  |
| Navigation          | Hamburger menu, drawer           | Full navbar, optimized spacing | Full navbar, all links visible |
| Footer              | Stacked vertical, center aligned | 2 columns                      | 3 columns                      |
| H1 size             | 28px                             | 36px                           | 48px                           |
| Body text           | 14px                             | 15px                           | 16px                           |

---

## Phase 2: Directory Structure

```
marine_portfolio/
├── app/
│   ├── layout.tsx            ← Root layout (fonts + ThemeProvider)
│   ├── globals.css           ← Tailwind v4 + shadcn tokens + maritime colors
│   ├── page.tsx              ← Home (landing page)
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── certifications/page.tsx
│   ├── skills/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── theme-provider.tsx    ← Dark mode (shadcn-generated, with hotkey)
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── theme-toggle.tsx
│   ├── timeline.tsx
│   └── ui/                   ← shadcn components (install via `pnpm dlx shadcn@latest add <name>`)
│       ├── button.tsx        ← Already installed (Base UI + base-luma)
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── sheet.tsx         ← Mobile nav drawer
│       ├── separator.tsx
│       └── ... (add as needed)
├── lib/
│   ├── utils.ts              ← cn() utility (shadcn-generated)
│   └── constants.ts          ← Site data, nav items, ship info
├── hooks/                    ← Custom hooks (shadcn-generated directory)
├── public/
│   └── images/
├── components.json           ← shadcn config (base-luma, phosphor, mist)
├── postcss.config.mjs        ← @tailwindcss/postcss only
├── tsconfig.json             ← Next.js generated
├── .env.local                ← Environment variables
└── package.json
```

---

## Phase 3: Core Data & Constants

### `lib/constants.ts`

```ts
export const SITE_NAME = 'Marine Engineer Portfolio'
export const SITE_DESCRIPTION = 'Engine Cadet - Professional Portfolio'

export interface NavItem {
  readonly label: string
  readonly href: string
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Skills', href: '/skills' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
  email: 'your.email@example.com',
} as const

export const SHIP_INFO = {
  name: 'Hafnia Osprey',
  type: 'Chemical/Product Tanker',
  imo: 'IMO_NUMBER',
  mmsi: 'MMSI_NUMBER',
  joinedDate: 'June 2024',
  status: 'Active',
} as const
```

### `.env.local`

```bash
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

## Phase 4: Component Architecture

### Installing shadcn Components

```bash
# Add components as needed (uses components.json config)
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add textarea
pnpm dlx shadcn@latest add separator
pnpm dlx shadcn@latest add sheet         # Mobile nav drawer
```

> These will auto-generate components using **Base UI** primitives (not Radix), matching `components.json` config.

### Existing Components (Already Generated)

#### Button (`components/ui/button.tsx`)

- Uses `@base-ui/react/button` (not Radix `Slot`)
- Variants: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`
- Sizes: `xs`, `sm`, `default`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`
- Style: `rounded-4xl` (pill shape, base-luma default)
- Uses `data-slot="button"` pattern

#### ThemeProvider (`components/theme-provider.tsx`)

- Uses `next-themes` with `attribute="class"` and `defaultTheme="system"`
- Includes **ThemeHotkey**: press `D` key to toggle dark mode
- Props type: `React.ComponentProps<typeof NextThemesProvider>` (not the removed `ThemeProviderProps`)

#### Utils (`lib/utils.ts`)

- `cn()` function using `clsx` + `tailwind-merge`

### Components to Build

#### Theme Toggle (`components/theme-toggle.tsx`)

```tsx
'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg bg-muted p-2 text-foreground transition-colors hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun size={20} weight="fill" />
      ) : (
        <Moon size={20} weight="fill" />
      )}
    </button>
  )
}
```

> **Note**: Uses `resolvedTheme` (not `theme`) to correctly handle `"system"` default. Uses shadcn semantic colors (`bg-muted`, `text-foreground`) instead of hardcoded colors.

#### Navbar (`components/navbar.tsx`)

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Ship, List, X, Download } from '@phosphor-icons/react'
import { NAV_ITEMS } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Ship size={28} weight="fill" className="text-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">
              Sister&apos;s Name
            </span>
            <span className="text-xs text-muted-foreground">Engine Cadet</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="default" size="sm" className="hidden gap-2 md:flex">
            <Download size={16} />
            View CV
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground md:hidden"
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-muted md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground no-underline transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" className="w-full">
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

**Navbar Design Specs**:

- **Height**: 64px (`h-16`)
- **Background**: `bg-background/95` with `backdrop-blur-sm` (glassmorphism)
- **Position**: Sticky top with `z-50`
- **Left**: Ship icon (28px, fill, primary color) + Name (14px, bold) + "Engine Cadet" (12px, muted)
- **Center**: Nav links (14px, `text-muted-foreground`, hover → `text-foreground`)
- **Right**: ThemeToggle + "View CV" button (default variant, sm size)
- **Mobile**: Hamburger toggle (Phosphor `List`/`X`), slide-down drawer
- **Active link**: `text-primary` with bottom border 2px Ocean Teal

---

## Phase 5: Page Sections & Design

### 1. Home (Landing Page)

#### Hero Section

- **Background**: Gradient from Navy Blue to Deep Slate (`bg-gradient-to-br from-navy-blue to-deep-slate`)
- **Height**: Full viewport or min 600px
- **Layout**: Two columns (desktop), single column (mobile — no right image or image below)

**Left Side Content**:

- Heading: "Engine Cadet at Hafnia Osprey" (48px, bold, white)
- Subheading: "Marine Engineer | Bangladesh Marine Academy Graduate" (20px, medium, Ocean Teal)
- Description: "Passionate about marine engineering with hands-on experience in engine room operations aboard international merchant vessels. Specializing in diesel engines, auxiliary machinery, and maritime safety systems." (16px, regular, Light Gray)
- CTA Buttons (12px gap between them):
  - Primary: "View My Experience" (default variant, lg size) + ArrowRight icon
  - Secondary: "View CV" (outline variant, lg size)

**Right Side Content** (desktop only):

- Professional photo placeholder
  - 400×500px (portrait orientation)
  - Rounded corners: `rounded-xl` (12px)
  - Border: 2px solid Ocean Teal
  - Shadow: `shadow-[0_20px_40px_rgba(15,23,42,0.3)]`

**Scroll Indicator**:

- Chevron down icon (Phosphor `CaretDown`) at bottom center
- Animated subtle bounce (`animate-bounce`)
- Color: Ocean Teal

#### Stats Section (Below Hero)

- **Background**: Light Gray (`bg-light-gray dark:bg-card`)
- **Padding**: `py-20`
- **Grid**: `grid-cols-2 md:grid-cols-4 gap-8`
- Each stat:
  - Number: 48px (`text-5xl`), bold, Navy Blue
  - Label: 16px, semi-bold, Medium Text
  - Stats:
    - 6+ | Months Sea Experience
    - 12+ | Technical Certifications
    - 1 | Current Vessel (Hafnia Osprey)
    - 5+ | Specialized Skills

#### Featured Section (Current Position)

- **Background**: White (`bg-background`)
- **Padding**: `py-20`
- Title: "Current Position" (36px, bold)
- Card layout:
  - Ship name & image
  - Position details
  - Start date
  - Key responsibilities (bullet list)
  - Link: "View Full Experience →" (Ocean Teal, with ArrowRight icon)

---

### 2. About Me Page

#### Page Header

- Title: "About Me" (48px, bold, Navy Blue)
- Subtitle: "Marine Engineer in Progress" (20px, Ocean Teal)
- Divider: 4px line, Ocean Teal, 60px wide (`w-15 h-1 bg-ocean-teal`)

#### Introduction Section

- **Background**: Light Gray
- **Layout**: Two columns (image + text), single on mobile
- **Image**: Professional photo (rounded 12px, `rounded-xl`)
- **Text Content**:
  - Short bio (3-4 paragraphs)
  - Education path
  - Current focus
  - Career aspirations

#### Journey Timeline

- **Background**: White
- **Title**: "My Journey" (32px, bold)
- **Timeline**: Vertical on mobile, horizontal on desktop
- Milestones:
  - 2022: "Admitted to Bangladesh Marine Academy"
  - 2024: "Completed Pre-Sea Training"
  - Current: "Engine Cadet at Hafnia Osprey"
  - 2025: "4th Engineer Promotion Goal"
- Each timeline item:
  - Circle connector: Ocean Teal (`bg-ocean-teal rounded-full`)
  - Year label: Navy Blue, bold
  - Description: Dark gray
  - Hover effect: card lift (`hover:-translate-y-1`), Ocean Teal accent

#### Skills Overview (Brief)

- **Grid**: 3-4 columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
- Each skill card:
  - Icon (Phosphor — Ship, Wrench, Certificate, etc.)
  - Skill name (semi-bold)
  - Short description
  - Link: "Learn More →"

#### Values Section

- **Background**: Navy Blue gradient (`bg-gradient-to-br from-navy-blue to-deep-slate`)
- **Text**: White
- 3-4 cards in a row:
  - Icon + Title + Description
  - Examples: "Safety First", "Continuous Learning", "Maritime Excellence"
  - Hover: Ocean Teal accent border (`hover:border-ocean-teal`)

---

### 3. Sea Experience Page

#### Page Header

- Title: "Sea Experience" (48px, bold, Navy Blue)
- Subtitle: "Real-world learning aboard international merchant vessels"

#### Current Vessel Card (Featured)

- **Background**: Gradient Ocean Teal to Navy (`bg-gradient-to-br from-ocean-teal to-navy-blue`)
- **Text**: White
- **Layout**: Two columns — Left: large ship image/icon, Right: information
- Ship info:
  - Ship Name: "Hafnia Osprey" (28px, bold)
  - Ship Type: "Chemical/Product Tanker" (16px, regular)
  - Flag: "Flag State"
  - Built Year: Year
  - Gross Tonnage: Tonnage
  - Main Engine: Engine specifications
  - Joined Date: Date
  - Current Status: "Active" (Success Green badge)
- Description paragraph
- Key Responsibilities: Bullet list (6-8 items) with icons for visual hierarchy

#### Experience Cards (If Multiple Ships)

- Card layout: 2 columns (1 on mobile), scrollable or grid
- Each card:
  - Ship image
  - Ship name (bold)
  - Position: "Engine Cadet"
  - Duration: "MM/YYYY - MM/YYYY" or "MM/YYYY - Present"
  - Ship type badge
  - Brief description (2-3 lines)
  - Link: "View Details" (Ocean Teal)

#### Responsibilities Section

- **Background**: Light Gray
- **Title**: "Key Responsibilities"
- **Layout**: Two columns (1 on mobile)
- Detailed breakdown:
  - Daily engine room operations
  - Equipment maintenance
  - Safety procedures
  - Log keeping
  - Machinery troubleshooting
  - Engine systems monitoring
- Each item:
  - Icon (Phosphor, 12px, Ocean Teal)
  - Title: Semi-bold
  - Description: Regular weight

#### Career Path Timeline (Interactive)

- Vertical or horizontal layout
- Current position: Highlighted with Ocean Teal border
- Future positions: Faded, darker color
- On hover: Information tooltip
- Positions shown:
  1. Engine Cadet (Current) — highlighted
  2. 4th Engineer (3rd Assistant Engineer)
  3. 3rd Engineer (2nd Assistant Engineer)
  4. 2nd Engineer (1st Assistant Engineer)
  5. Chief Engineer

---

### 4. Certifications & Qualifications Page

#### Page Header

- Title: "Certifications & Qualifications" (48px, bold)
- Subtitle: "STCW and maritime training compliance"

#### Certification Cards Grid

- **Layout**: 3 columns (2 on tablet, 1 on mobile)
- **Card Height**: 300-350px
- **Card Background**: White with border
- **Border**: 1px solid light gray, left border 4px Ocean Teal

#### Each Certification Card Contains

- **Icon**: Top left (36×36px, Phosphor, Ocean Teal)
- **Status Badge**: Top right
  - "Active" — Success Green bg, white text
  - "Completed" — Ocean Teal bg, white text
  - "Pending" — Warning Amber bg, white text
- **Title**: "Certification Name" (18px, bold, Navy Blue)
- **Issuer**: "Issuing Organization" (14px, gray)
- **Issue Date**: "MM/DD/YYYY" (12px, gray)
- **Expiry Date**: "MM/DD/YYYY" or "No Expiry" (12px, gray)
- **Certificate ID**: (11px, monospace/Geist Mono, light gray)
- **Skills**: Tags/badges showing covered areas
- **CTA**: "View Certificate" link (Ocean Teal, underline on hover)

#### Certification Categories

**STCW Certificates** (most recent first):

1. Basic Safety Training (PST - Personal Survival Techniques)
2. Elementary First Aid (EFA)
3. Fire Prevention & Fire Fighting (FP&FF)
4. Personal Safety & Social Responsibilities (PSSR)
5. Proficiency in Survival Craft & Rescue Boats (PSC&RB)

**Advanced Courses**:

1. Advanced Fire Fighting (AFF)
2. Medical First Aid
3. GMDSS (Global Maritime Distress & Safety System)

**Academic Qualification**:

1. Bachelor of Maritime Science (BMA)
   - Special card with diploma icon
   - Larger, more prominent
   - Include GPA/honors if applicable

**Other Certifications**:

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
- Active filter button: Ocean Teal bg, white text
- Inactive: Gray text, white bg

---

### 5. Technical Skills Page

#### Page Header

- Title: "Technical Skills" (48px, bold)
- Subtitle: "Expertise in marine engineering systems and operations"

#### Skills Categories (Tabs or Sections)

**Section 1: Propulsion & Main Engines** (grid 2-3 columns)

- Diesel Engine Operation
- Engine Performance Monitoring
- Fuel Treatment & Purification
- Lubrication Systems
- Cooling Systems
- Auxiliary Machinery

**Section 2: Electrical & Electronics** (grid 2-3 columns)

- Electrical Distribution Systems
- Generator Operation & Maintenance
- Power Management
- Electrical Safety
- Basic Electronics
- Automation Systems

**Section 3: Safety & Compliance** (grid 2-3 columns)

- Maritime Safety Regulations
- MARPOL Compliance
- Engine Room Safety
- Emergency Procedures
- Equipment Inspection
- Environmental Protection

**Section 4: Technical Knowledge** (grid 2-3 columns)

- Ship Systems (HVAC, Plumbing)
- Machinery Troubleshooting
- Preventive Maintenance
- Log Book Recording
- Technical Documentation
- Performance Analysis

**Section 5: Soft Skills** (grid 2-3 columns)

- Leadership
- Team Work
- Problem Solving
- Communication
- Time Management
- Adaptability

#### Skill Card Design

```
┌─────────────────────────────┐
│ 🔧 [Phosphor Icon]          │
│                             │
│ Skill Name        (18px, b) │
│ Brief description of skill  │
│ explaining proficiency      │
│                             │
│ Proficiency: ████░░░░░░ 65% │
│ (Light gray track, Teal fill, 4px height)
│                             │
│ Level: Intermediate         │
└─────────────────────────────┘
```

#### Summary Section (Top or Bottom)

- **Background**: Light Gray
- **Grid**: 4 columns (2 on tablet, 1 on mobile)
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

#### Image Categories (Filter)

- Buttons at top (horizontal scroll on mobile):
  - All | Engine Room | Ship Systems | Training | Crew & Events
- Active button: Ocean Teal background, white text
- Inactive: Gray text, white background

#### Image Grid

- **Masonry layout**: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Image aspect ratios: Mix of square and 4:3
- Border radius: 8px (`rounded-lg`)
- Hover effect:
  - Overlay with Ocean Teal background (30% opacity)
  - Zoom slightly (`scale-105`)
  - Show caption

#### Each Image Card

- Image with caption
- On hover:
  - Caption overlay appears
  - Caption: White text, 14px, semi-bold
  - Location/Date: 12px, light gray

#### Lightbox/Modal

- Click image to open full-screen view
- Black background with transparency
- Navigation arrows (previous/next) — Phosphor `CaretLeft`/`CaretRight`
- Close button (Phosphor `X`)
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

- **Background**: Light Gray (`bg-light-gray dark:bg-card`)
- **Padding**: 40px (`p-10`)
- **Border radius**: 12px (`rounded-xl`)

- Section: "Contact Details"
  - Email icon (`EnvelopeSimple`) + Email: name@email.com (clickable)
  - Phone icon (`Phone`) + Phone: +880 XXXX XXXXXX (clickable)
  - Location icon (`MapPin`) + Location: Dhaka, Bangladesh
  - LinkedIn icon (`LinkedinLogo`) + "Connect on LinkedIn" (link)

- Section: "Response Time"
  - "I typically respond within 24 hours"
  - Icon: `CheckCircle` (Success Green)

- Section: "Social Media"
  - LinkedIn, GitHub, Twitter/X links
  - Each: Icon + Label
  - Hover: Ocean Teal text color

**Right Column: Contact Form**

- **Background**: White (`bg-background`)
- **Border**: 1px solid light gray (`border border-border`)
- **Padding**: 40px (`p-10`)
- **Border radius**: 12px (`rounded-xl`)

- Form Fields:
  1. Full Name (text input)
  2. Email (email input)
  3. Subject (text input)
  4. Message (textarea, 5-6 rows)

- Each field:
  - Label: 14px, semi-bold, Navy Blue
  - Padding: 12px
  - Border: `border-input` (shadcn default)
  - Border radius: 6px (`rounded-md`)
  - Focus state: `border-ring ring-3 ring-ring/30` (shadcn default focus ring)

- Submit Button:
  - Text: "Send Message"
  - Default variant button, full width or auto
  - Hover: Built-in base-luma hover
  - Disabled state: `opacity-50`, cursor not-allowed

- Form states:
  - Empty: All fields empty
  - Filled: All fields completed
  - Submitting: Button shows spinner/loading state
  - Success: Success message appears (Success Green)
  - Error: Error message appears (Error Red)

---

## Phase 6: Footer Design

### Design Specifications

- **Background**: Deep Slate (`bg-deep-slate dark:bg-background`)
- **Text Color**: Text Light (`text-text-light`)
- **Padding**: 60px top/bottom, container side padding
- **Border-top**: 1px solid `border-border` (subtle divider)

### Structure

```
[Row 1: Quick Links + Contact + Social]
[Row 2: Copyright + Legal Links]
```

### Columns (3 columns → stacked on mobile)

**Column 1: Quick Navigation**

- Header: "Quick Links" (14px, semi-bold, white)
- Links: Home, About, Experience, Certifications, Contact
- Link style: `text-text-light/70 hover:text-ocean-teal transition-colors`

**Column 2: Contact Information**

- Header: "Get in Touch" (14px, semi-bold, white)
- `EnvelopeSimple` icon + Email (clickable, hover: Ocean Teal)
- `Phone` icon + Phone number
- `MapPin` icon + Location: Dhaka, Bangladesh
- `LinkedinLogo` icon + LinkedIn URL

**Column 3: Social Media**

- Header: "Follow" (14px, semi-bold, white)
- Icons (circular, 36px): LinkedIn, GitHub, Twitter/X, Email
- Style: `bg-deep-slate` border circle, hover: `bg-ocean-teal scale-110`

### Bottom Bar

- **Border-top**: 1px solid subtle divider
- **Left**: "© 2026 [Sister's Name]. All rights reserved."
- **Center**: Legal links (Privacy Policy | Terms of Service)
- **Right**: "Built with Next.js & shadcn/ui"

### Mobile Behavior

- Stack all columns vertically
- Full width
- Center align text
- Remove "Built with" text on very small screens (`hidden sm:block`)

---

## Phase 7: Icon System (Phosphor Icons)

Already configured in `components.json` as `"iconLibrary": "phosphor"`.

```tsx
import {
  House, User, Briefcase, Certificate,
  Wrench, Image, EnvelopeSimple,
  LinkedinLogo, GithubLogo, TwitterLogo, List, X,
  CaretDown, CaretLeft, CaretRight,
  Ship, Engine, Gear,
  CheckCircle, Clock, MapPin, Phone, Heart,
  ArrowRight, Download, Moon, Sun,
  MagnifyingGlass, BookOpen,
} from '@phosphor-icons/react'

// Size options: 16, 20, 24, 28, 32, 40, 48
// Weight options: 'thin', 'light', 'regular', 'bold', 'fill', 'duotone'
```

#### Icon Mapping for Portfolio

| Icon                       | Use                         |
| -------------------------- | --------------------------- |
| `House`                    | Home nav                    |
| `User`                     | About/Profile               |
| `Briefcase`                | Experience/Career           |
| `Certificate`              | Certifications              |
| `Wrench`                   | Skills/Tools                |
| `Image`                    | Gallery                     |
| `EnvelopeSimple`           | Contact/Email               |
| `LinkedinLogo`             | LinkedIn link               |
| `GithubLogo`               | GitHub link                 |
| `TwitterLogo`              | Twitter/X link              |
| `Ship`                     | Vessel/Maritime/Logo        |
| `Engine`                   | Engineering                 |
| `Gear`                     | Mechanics/Settings          |
| `CheckCircle`              | Active/Completed status     |
| `Clock`                    | Duration/Time               |
| `MapPin`                   | Location                    |
| `Phone`                    | Phone number                |
| `Heart`                    | Values/Passion              |
| `ArrowRight`               | CTA arrows                  |
| `Download`                 | CV download                 |
| `Moon` / `Sun`             | Theme toggle                |
| `CaretDown`                | Scroll indicator / Dropdown |
| `CaretLeft` / `CaretRight` | Gallery lightbox nav        |
| `MagnifyingGlass`          | Search/Filter               |
| `BookOpen`                 | Education/Academic          |
| `List` / `X`               | Mobile menu open/close      |

---

## Phase 8: Interactive Elements & Hover States

### Buttons (shadcn base-luma variants)

| State    | Primary (default)                    | Outline                       | Ghost           |
| -------- | ------------------------------------ | ----------------------------- | --------------- |
| Default  | `bg-primary text-primary-foreground` | `border-border bg-background` | transparent     |
| Hover    | `bg-primary/80`                      | `bg-muted`                    | `bg-muted`      |
| Active   | translate-y-1px (built-in)           | translate-y-1px               | translate-y-1px |
| Disabled | `opacity-50, pointer-events-none`    | `opacity-50`                  | `opacity-50`    |

### Links

- Default: Ocean Teal color, no underline
- Hover: Darker teal, underline
- Visited: Navy Blue
- Active: Ocean Teal, bold

### Cards

- Default: `bg-card border-border rounded-xl shadow-sm`
- Hover: `shadow-md hover:border-primary` (Ocean Teal border), `hover:-translate-y-1 transition-all`
- Active/Featured: Left border 4px Ocean Teal

### Form Inputs

- Default: `border-input bg-background`
- Focus: `border-ring ring-3 ring-ring/30` (shadcn default focus)
- Filled: `bg-background text-foreground`
- Error: `border-destructive ring-destructive/20` + light red tint
- Success: `border-success-green ring-success-green/20` + light green tint

### Navigation Links (Navbar)

- Default: `text-muted-foreground` (opacity 0.8 feel)
- Hover: `text-foreground` (opacity 1.0 feel)
- Active: `text-primary` with bottom border 2px Ocean Teal

### Social Icons (Footer)

- Default: Circle bg, muted color
- Hover: Ocean Teal bg, white icon, `scale-110 transition-transform`

---

## Phase 9: React 19 Specific Patterns

### Server Components as Default

```tsx
// This is a Server Component by default — no 'use client' needed
// Can access database, secrets, etc.
export default function Page() {
  return <div>Content</div>
}

// Mark as client ONLY when needed (state, effects, browser APIs)
'use client'
export default function InteractiveComponent() {
  const [state, setState] = useState()
  // ...
}
```

### No More useCallback for Event Handlers

```tsx
// React 19 — direct function is fine, auto-optimized
function MyComponent() {
  function handleClick() {
    // logic
  }

  return <button onClick={handleClick}>Click</button>
}
```

### When to Use `'use client'`

- Components with `useState`, `useEffect`, `useRef`
- Event handlers that need browser APIs
- Components using `next-themes` (`useTheme`)
- Components using Phosphor icons with dynamic weight/size
- Interactive elements (modals, drawers, toggles)

---

## Phase 10: SEO & Metadata

```tsx
// app/layout.tsx — add Metadata export
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Marine Engineer Portfolio | Engine Cadet",
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

## Phase 11: Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image'

export function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className="rounded-lg object-cover w-full h-auto"
      priority={false}   // Set true for above-the-fold images
      quality={85}        // Optimize file size
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}
```

### Code Splitting (Dynamic Import)

```tsx
import dynamic from 'next/dynamic'

const GalleryLightbox = dynamic(() => import('@/components/gallery-lightbox'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
})
```

### Caching Strategy

```tsx
// app/layout.tsx — ISR revalidation
export const revalidate = 60 // Revalidate every 60 seconds

// Or per page:
// app/experience/page.tsx
export const revalidate = 3600 // 1 hour
```

### Performance Summary

- **Images**: Use `next/image` with `quality={85}` and `sizes` prop
- **Fonts**: Loaded via `next/font/google` (auto-optimized, no external requests)
- **Code splitting**: `dynamic()` import for heavy components (gallery lightbox)
- **Server Components**: Default in React 19 — only mark `'use client'` when needed
- **Tailwind v4**: Auto-purges unused styles

### Lighthouse Targets

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### Font Testing Checklist

1. **Chrome DevTools Lighthouse**: CLS should be < 0.1, font swap should not cause layout shift
2. **WebPageTest.org**: Check font loading waterfall, ensure parallel load
3. **Cross-browser**: Test on Chrome, Firefox, Safari, Edge + mobile (iOS + Android)
4. **Network speeds**: Slow 3G, Fast 4G, WiFi
5. **Readability**: All sizes legible, WCAG AA minimum 4.5:1 contrast

---

## Phase 12: Deployment

### Deploy to Vercel

```bash
# Option 1: Connect GitHub repo at vercel.com (recommended)
# Push to GitHub → Import project → Auto-deploys on push

# Option 2: CLI
npm i -g vercel
vercel
```

### Vercel Configuration (`vercel.json`)

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

### Vercel Environment Variables

Set in Vercel dashboard:

- `NEXT_PUBLIC_FORM_ENDPOINT`
- `NEXT_PUBLIC_GA_ID`
- Any private keys

---

## Phase 13: Testing & Launch

### Commands (uses pnpm)

```bash
# Development
pnpm dev

# Type check
pnpm typecheck

# Lint
pnpm lint

# Format
pnpm format

# Build (production)
pnpm build

# Full check before deploy
pnpm build && pnpm typecheck && pnpm lint
```

### Manual Testing Checklist

- [ ] Navbar displays correctly on all breakpoints
- [ ] Dark mode toggle works (button + `D` hotkey)
- [ ] Hero section renders with correct maritime colors
- [ ] Stats section visible
- [ ] Footer 3-column layout on desktop, stacked on mobile
- [ ] All page routes work (/about, /experience, etc.)
- [ ] Contact form states (empty, filled, submitting, success, error)
- [ ] Gallery lightbox opens/closes with nav arrows
- [ ] Certification filter works
- [ ] No console errors
- [ ] Test on slow 3G (DevTools)
- [ ] Lighthouse score > 90 on all metrics

### Git Pre-commit Hook (Optional)

```bash
# Install husky
pnpm add -D husky
npx husky init
```

Create `.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm typecheck && pnpm lint
```

---

## File Checklist

```
Existing (shadcn-generated):
✓ components.json              (base-luma, phosphor, mist)
✓ postcss.config.mjs           (@tailwindcss/postcss)
✓ tsconfig.json                (Next.js generated)
✓ app/layout.tsx               (Public Sans + Geist Mono + ThemeProvider)
✓ app/globals.css              (Tailwind v4 + shadcn tokens)
✓ components/theme-provider.tsx (next-themes + hotkey)
✓ components/ui/button.tsx     (Base UI + base-luma)
✓ lib/utils.ts                 (cn utility)

To Create:
○ .env.local                   (form endpoint, analytics, API URL)
○ lib/constants.ts             (nav items, site data, ship info, social links)
○ components/theme-toggle.tsx  (Moon/Sun toggle button)
○ components/navbar.tsx        (sticky nav with mobile drawer)
○ components/footer.tsx        (3-column maritime footer)
○ components/hero.tsx          (landing hero section)
○ components/timeline.tsx      (career/journey timeline)
○ app/page.tsx                 (home — hero + stats + featured)
○ app/about/page.tsx           (intro + timeline + skills overview + values)
○ app/experience/page.tsx      (vessel card + responsibilities + career path)
○ app/certifications/page.tsx  (cert grid + filter/sort)
○ app/skills/page.tsx          (5 categories + proficiency bars + summary)
○ app/gallery/page.tsx         (masonry grid + filter + lightbox)
○ app/contact/page.tsx         (contact info + form with states)
○ Maritime color tokens in globals.css @theme block
○ Poppins font in layout.tsx (optional display font)
○ vercel.json                  (deployment config)
```

---

## Update Strategy

As sister progresses in career, easy updates:

- Change "Engine Cadet" → "4th Engineer" in constants and components
- Add new certifications to certifications data
- Update ship details when changing vessels
- Add new gallery images
- Update experience timeline
- Update navbar CTA or add "Captain's Recommendations" section
- Consider simple admin panel or CMS integration for easy future updates

---

## Development Notes

1. **Mobile-first**: Code for mobile, expand to tablet/desktop
2. **Semantic colors**: Use `bg-primary`, `text-foreground`, `border-border` for auto dark mode
3. **Maritime colors**: Use `bg-navy-blue`, `text-ocean-teal` for brand-specific elements
4. **Component library first**: Build reusable components before pages
5. **Data in constants**: Ship info, certifications, skills in `lib/constants.ts`
6. **Forms**: Use `react-hook-form` + `zod` for contact form validation
7. **Images**: Optimize with WebP format + `next/image`
8. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
9. **React 19**: No `useCallback` needed for handlers — React auto-optimizes
10. **Server Components**: Default — only add `'use client'` for interactive components
11. **Testing**: Test on multiple devices and browsers before launch
12. **Performance**: Monitor Lighthouse, aim for 90+ on all metrics

Ready to build! 🚀
