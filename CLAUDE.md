# Portfolio — Claude Code Project Memory

## Project Overview
Personal developer portfolio for Shyam Sundar (GitHub: ShyamSundar2705).
Single-page scrollable site showcasing Full Stack + Cloud + AI skills.

## Tech Stack
- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion (subtle only — fade-in on scroll, no heavy effects)
- **Icons:** Lucide React
- **Package Manager:** npm
- **Deployment:** Vercel

## Design System
- **Aesthetic:** Glassmorphism — dark background, frosted glass cards
- **Background:** Deep dark (`#0a0a0f` or similar near-black)
- **Glass cards:** `bg-white/5 backdrop-blur-md border border-white/10`
- **Primary accent:** Soft blue-purple gradient (`from-blue-500 to-purple-600`)
- **Text:** White primary, `text-white/70` for secondary
- **NO:** flashy animations, loud colors, heavy JS on load, spinning elements

## Page Structure (single page, scroll)
1. Navbar — sticky, glassmorphism blur, smooth scroll nav links
2. Hero — name, typewriter cycling tagline, CTA buttons
3. About — short bio paragraph
4. Skills — grouped cards by category
5. Projects — glass cards with live + GitHub links
6. Experience — virtual internships (EduSkills/AICTE)
7. Education — college, degree, year
8. Contact — form + social links

## Code Conventions
- Use named exports for all components
- All page content lives in `src/data/portfolio.ts` — never hardcode content in components
- Components in `src/components/sections/` (one file per section)
- Shared UI in `src/components/ui/`
- Use `clsx` or `cn()` for conditional classNames
- Prefer `const` arrow functions for components
- No default exports except `src/app/page.tsx`
- TypeScript strict mode ON — no `any` types

## Commands
```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint check
npm run type-check # tsc --noEmit
```

## File Placement Rules
- New section component → `src/components/sections/`
- New reusable UI element → `src/components/ui/`
- Update content only → `src/data/portfolio.ts`
- Global styles → `src/app/globals.css`
- Static assets → `public/`

## Framer Motion Rules
- Always wrap scroll animations with `useInView` from framer-motion
- Use `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Duration: `0.5s` max, ease: `easeOut`
- Never animate on every re-render — use `once: true` in viewport options

## Do NOT
- Add a blog section (not requested)
- Use `create-react-app` patterns or CRA-style imports
- Install unnecessary animation libraries (stick to Framer Motion)
- Use `<img>` tags — always use Next.js `<Image />`
- Add Google Analytics or tracking without asking
- Commit `.env.local` or any secrets
- Use inline styles — Tailwind classes only

## @imports
@AGENTS.md
