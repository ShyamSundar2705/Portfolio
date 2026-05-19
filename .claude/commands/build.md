# /build — Portfolio Build Command

Use this command to scaffold or rebuild a section of the portfolio from scratch.

## Usage
```
/build [section-name]
```

## Examples
```
/build hero
/build projects
/build skills
/build contact
```

## What This Command Does
1. Reads `src/data/portfolio.ts` for the section's content/data shape
2. Creates or updates the component at `src/components/sections/[SectionName].tsx`
3. Applies glassmorphism styling from the design system in CLAUDE.md
4. Adds Framer Motion scroll animation (`useInView`, `once: true`, fade-up)
5. Ensures the component is exported and imported in `src/app/page.tsx`
6. Runs `npm run type-check` after generation to confirm no TS errors

## Design Checklist (apply to every section)
- [ ] Dark background with glass card effect on content blocks
- [ ] Section has a heading with gradient text (`bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`)
- [ ] Responsive: stacks on mobile, grid on desktop
- [ ] Scroll-triggered fade-in animation
- [ ] No hardcoded content — all text from `portfolio.ts`

## Never Do
- Don't create a new Framer Motion component if `AnimatedSection` wrapper already exists
- Don't add new npm packages without asking first
- Don't modify `globals.css` unless adding a truly global style
