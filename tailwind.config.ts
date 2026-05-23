import type { Config } from "tailwindcss";

/**
 * NEXUS UI — Tailwind v4 configuration
 *
 * Tailwind v4 reads design tokens primarily from `@theme` in CSS, so this
 * file only carries values that cannot be expressed there:
 *   - `content` glob patterns
 *   - JavaScript-level plugins
 *
 * Custom token aliases (colors.brand, fontSize.display, etc.) are
 * defined via `@theme inline` in globals.css and are automatically
 * available as Tailwind utilities (e.g. `bg-brand`, `text-display`).
 *
 * Reference map  (CSS var → Tailwind utility):
 *
 * Colors
 *   --color-brand             → bg-brand / text-brand / border-brand
 *   --color-brand-from        → bg-brand-from …
 *   --color-brand-to          → bg-brand-to …
 *   --color-bg-base           → bg-bg-base
 *   --color-bg-surface        → bg-bg-surface
 *   --color-bg-elevated       → bg-bg-elevated
 *   --color-fg-headline       → text-fg-headline
 *   --color-fg-body           → text-fg-body
 *   --color-fg-muted          → text-fg-muted
 *   --color-fg-disabled       → text-fg-disabled
 *   --color-fg-on-brand       → text-fg-on-brand
 *   --color-red-{100…900}     → text-red-100 … bg-red-900
 *   --color-blue-{100…900}    → text-blue-100 …
 *   --color-purple-{100…900}  → text-purple-100 …
 *   --color-success           → text-success / bg-success
 *   --color-warning           → text-warning / bg-warning
 *   --color-error             → text-error / bg-error
 *   --color-info              → text-info / bg-info
 *   --color-outline-subtle    → border-outline-subtle
 *   --color-outline-default   → border-outline-default
 *   --color-outline-strong    → border-outline-strong
 *
 * Typography
 *   --text-display            → text-display  (Display: Rajdhani)
 *   --text-h1 / --text-h2     → text-h1 / text-h2  (Überschriften: Rajdhani)
 *   --text-body               → text-body  (Copy Body: DM Sans)
 *   --text-label              → text-label
 *   Buttons / CTAs            → Tailwind font-body (Konvention in globals.css :root)
 *
 * Radius
 *   --radius-sm / -md / -lg / -full  → rounded-sm / rounded-md / rounded-lg / rounded-full
 */

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./.storybook/**/*.{ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
};

export default config;
