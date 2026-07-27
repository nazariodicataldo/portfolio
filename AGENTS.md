<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Portfolio conventions

- Build the portfolio as a single Italian App Router page. Keep static content in
  typed data modules; keep browser-only state and effects inside small client
  components.
- Preserve the agreed section order in navigation and DOM: Competenze, Progetti,
  Formazione, Esperienza, Contatti.
- Use only CSS variables and Tailwind semantic tokens for the visual system. Do
  not hardcode a final palette or custom font because the theme will be supplied
  later in `app/globals.css`.
- Use neutral, clearly replaceable placeholders for the profile image and all
  project screenshots. Centralize temporary CV and contact values in constants.
- Hero technologies are Next.js, TypeScript, Tailwind CSS, Laravel, PostgreSQL,
  and React Native, rendered as a 3-by-2 icon grid with accessible tooltips.
- The education timeline may have a subtle scroll-linked accent. Other timeline
  content is static; general reveal animations must be subtle and disabled for
  `prefers-reduced-motion`.
- Treat keyboard navigation, visible focus, reduced motion, and semantic
  landmarks as non-negotiable acceptance criteria.
- Keep page composition in `components/portfolio-page.tsx`; place each section,
  shared UI primitive, and client hook in its own file under `components/portfolio/`.
- Keep project cards at a fixed 16:9 ratio with `next/image`, `fill`, and
  `object-cover`; visual uniformity takes precedence over showing every edge.
