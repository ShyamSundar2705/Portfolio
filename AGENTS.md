# AGENTS.md — Shared AI Agent Rules

> This file is imported by CLAUDE.md and applies to all AI coding agents
> (Claude Code, Cursor, Copilot, etc.) working on this project.

## Project Identity
- Project: Personal Developer Portfolio
- Owner: Shyam Sundar (ShyamSundar2705)
- Stack: Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
- Deployment target: Vercel

## Universal Rules for All Agents

### Before Making Any Change
1. Read `src/data/portfolio.ts` before touching any section component
2. Check existing component structure in `src/components/` before creating new files
3. Never duplicate a component that already exists

### Code Quality
- TypeScript strict — all props must be typed with interfaces or types
- No `eslint-disable` comments unless absolutely necessary (explain why in a comment)
- Every new component must be importable without breaking existing imports
- Keep components under 150 lines — split if larger

### Styling Rules
- Tailwind only — no inline styles, no CSS modules (except `globals.css`)
- Glassmorphism pattern: `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl`
- Hover states: `hover:bg-white/10 transition-colors duration-200`
- Responsive: always mobile-first (`sm:` → `md:` → `lg:`)

### Git Discipline
- Never commit `node_modules/`, `.next/`, `.env.local`
- Commit message format: `feat:`, `fix:`, `style:`, `chore:` prefixes
- One logical change per commit

### Content Rule
- ALL display text (names, project descriptions, skills, links) lives in `src/data/portfolio.ts`
- Components must read from data — never hardcode strings in JSX

## What This Project Is NOT
- Not a blog platform
- Not an e-commerce site
- Not a multi-user app
- No backend / database needed (static + contact form only)

## Contact Form Handling
- Use a third-party service for form submission (Resend, Formspree, or EmailJS)
- No custom backend API routes needed
- Store API keys in `.env.local` only
