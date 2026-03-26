# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Production build
pnpm build
```

No test suite is configured.

## Architecture

This is a single-page React 18 + Vite application for a premium futuristic digital agency website. Content is in Spanish.

**Entry point**: `src/main.tsx` → `src/app/App.tsx` → sequential section components

**Component layout** (rendered in order):
- `Navbar` — scroll-reactive navigation
- `Hero` — landing section with animations
- `Services` — AI, Automation, Growth, UX offerings
- `Process` — 4-step process visualization
- `TechShowcase` — technology stack display
- `CaseStudies` — portfolio section
- `FinalCTA` — call-to-action
- `Footer`
- `CustomCursor`, `FloatingElements`, `ScrollProgress` — globally rendered UI overlays

**`src/app/components/ui/`** — 50+ shadcn/ui components (Radix UI primitives + Tailwind). Treat these as library code; prefer editing feature components instead.

## Key Patterns

**Animations**: Uses `motion/react` (Framer Motion fork) throughout. Common patterns:
- `useScroll` + `useTransform` for parallax/scroll-linked effects
- `useInView` for triggering entrance animations
- `animate` prop for continuous/declarative animations

**Styling**: Tailwind CSS 4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed). Dynamic values use inline styles alongside Tailwind utilities.

**Path alias**: `@` maps to `src/` (configured in `vite.config.ts`).

**Assets**: Figma-exported images use `figma:asset/[hash].png` syntax — these are resolved by the Vite config at build time.

**Theme**: CSS variables defined in `src/styles/theme.css`; default shadcn tokens in `default_shadcn_theme.css`.
