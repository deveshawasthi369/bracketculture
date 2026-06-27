# Codebase Map

npm workspaces monorepo at `/home/${username}/websites/${sandboxId}/public_html`. The web app ships standalone. Call `enable_pocketbase_integration` to add a database, or `enable_api_server_integration` to add an Express backend — each tool appends its own `## apps/<service>` section to this file.

## apps/web (React + Vite + Tailwind + shadcn/ui, port 3000)

Located at apps/web/. Run: `cd apps/web && npm run dev` (auto-started by the sandbox supervisor).
src/main.jsx — entry point, mounts <App />
src/App.jsx — React Router, all routes defined here
src/index.css — Tailwind theme, CSS variables, dark slate + orange accent colors, glassmorphism card styles
src/pages/HomePage.jsx — "/" route, BracketCulture B2B SaaS landing page with hero, features, team building, science, events grid, testimonials, pricing (9 tiers with 3x inflated original prices in large orange font, 40% FIFA WC 2026 discount applied and displayed prominently, savings shown, tier-specific descriptions), footer; marquee band displays sports leagues (FIFA, EPL, Super Bowl, UFC, NBA, MLB, IPL, ICC, UEFA); social media links removed
src/components/ScrollToTop.jsx — resets scroll on route change
src/components/ui/ — shadcn/ui primitives — import from `@/components/ui/<name>`, do not edit the files
src/hooks/use-mobile.jsx — mobile breakpoint detection
src/hooks/use-toast.js — toast notifications
src/lib/utils.js — cn() Tailwind class merge
vault/wiki/skills/design/SKILL.md — frontend craft, styling, typography, motion, and shadcn policy for UI surfaces.
apps/web/plugins/session-journal/ — infrastructure, DO NOT edit. Vite dev plugin injects the browser session journal client; events go over HMR (`import.meta.hot.send('session-journal:event', …)`); the plugin arranges persistence under `vault/temp/SESSION_JOURNAL.md`.
Routes: / → HomePage
