# Design Guidelines: Pulse LAN-Haus

Diese Design Guidelines definieren die visuelle Ausrichtung und die technischen Vorgaben für die Frontend-Entwicklung des Pulse LAN-Haus Projekts.

## Grundsatz: Kreativität innerhalb des Systems

Das Design soll **ausgefallen, prägnant und unverwechselbar** wirken — aber **niemals** auf Kosten der Design Tokens oder vorhandenen Komponenten. Kreativität zeigt sich in Layout, Komposition, Motion und atmosphärischen Details, nicht durch neue Farben, Schriften oder eigene Button-Implementierungen.

**Reihenfolge bei Konflikten:**

1. Design Tokens
2. Vorhandene Komponenten
3. Gestaltungsprinzipien (Kreativität)

Umsetzung soll production-grade, funktional und visuell prägnant sein. Intentionalität ist wichtiger als maximale Effektdichte — eine klare Richtung präzise umsetzen schlägt beliebige Dekoration.

---

## 1. Zielgruppe & Visuelle Ausrichtung

Das Design richtet sich primär an **Tech- und Gaming-affine Personen** (E-Sport-Teams, Clans, Freundeskreise).

- **Look & Feel**: Modern, technisch und ansprechend — retro-futuristisch / industrial-utilitarian im Gaming-Kontext.
- **Differentiation**: Jede Seite braucht ein prägnantes Merkmal, das hängenbleibt (z. B. Hero-Stats, Bento-Grid, Tech-Grid im Hintergrund, etc.
- **Verläufe (Gradients)**: Zentrales Stilmittel für den Gaming-Charakter. Es dürfen **ausschließlich die in den Design Tokens definierten Verläufe** verwendet werden. Punktuell einsetzen und nicht überladen
- **Glow-Effekte**: Dürfen punktuell eingesetzt werden, um besondere Aufmerksamkeit auf wichtige Elemente (z. B. primäre CTAs, USPs) zu lenken. Es gelten ausschließlich die definierten Glow-Tokens.

---


---

## 3. Design Tokens

Die Design Tokens bilden die unumstößliche Basis für das gesamte visuelle System. Bei der Erstellung von Frontend-Code müssen **ausschließlich Werte aus den Design Tokens** genutzt werden — für Farben, Schriften, Schriftgrößen, Zeilenhöhen, Letter-Spacing, Abstände, Radien, Verläufe, Glows und semantische UI-Farben. Hardcodierte Werte (Hex, RGB, px-Werte außerhalb der Skala) sind nicht zulässig.

**Speicherort:** `src/app/globals.css` (CSS-Variablen in `:root` sowie Tailwind-`@theme`-Aliase)

**Visuelle Übersicht:** `src/stories/design-tokens/TokensGallery.tsx` (Storybook)

### Was in den Tokens definiert ist

Alle konkreten Werte stehen in `globals.css`. In den Guidelines werden nur die **Kategorien** genannt:

- **Brand** — Verlauf, Verlaufs-Stops, Brand-Glow
- **Farbpaletten** — Rot-, Blau-, Lila-Skalen
- **Hintergründe** — Base, Surface, Elevated, Overlay
- **Text / Vordergrund** — Headline, Body, Muted, Disabled, On-Brand
- **Statusfarben** — Success, Warning, Error, Info (jeweils Default, Subtle, Foreground)
- **Konturen / Outlines** — Subtle, Default, Strong, Brand, Danger
- **Typografie** — Font-Familien (Display, Heading, Body, Mono), Schriftgrößen, Font-Weights, Line-Heights, Letter-Spacing
- **Abstände (Spacing)** — Skala auf 4-px-Basis
- **Border Radius** — none, sm, md, lg, full
- **Glow & Effekte** — Brand-Glow, Focus-Glow, Brand-Gradient
- **Semantische shadcn-Variablen** — Background, Foreground, Primary, Secondary, Muted, Accent, Destructive, Border, Input, Ring, Card, Popover, Sidebar, Chart

Neue visuelle Werte gehören in `globals.css`, nicht ad hoc im Komponenten-Code.

---

## 4. Komponenten-Wiederverwendung

Um ein konsistentes Design und eine wartbare Codebasis zu gewährleisten:

- **Vorhandene Komponenten nutzen**: Wenn eine Komponente für einen Anwendungsfall existiert, **muss** sie genutzt werden.
- **Keine redundanten Komponenten**: Keine neuen Komponenten für bereits gelöste Probleme. Beispiel: Immer `<Button />` aus `src/components/ui/button.tsx` (Varianten primary, secondary, tertiary; Größen sm, md, lg, icon) — keine eigenen Button-Implementierungen.
- **shadcn/ui**: Vorhandene UI-Primitive unter `src/components/ui/` bevorzugen, statt neue zu bauen.

---

## 5. Gestaltungsprinzipien

Kreativität ist erwünscht — aber nur innerhalb der Design Tokens und vorhandenen Komponenten.

### Typografie

Schriftarten, -größen, -gewichte und Abstände ausschließlich über die Typografie-Tokens. Rollen (Display, Heading, Body, Label, Mono) und deren Zuordnung siehe `globals.css` und Tokens Gallery.

### Farbe & Theme

Dominante dunkle Flächen über Background-Tokens, Akzente sparsam über Brand- und Status-Tokens. Keine freien Farbwerte.

### Motion

- CSS-first (z. B. `animate-in`, `fade-in`, `slide-in-from-bottom` via `tw-animate-css`)
- Gestaffelte Einblendungen beim Page Load (Hero: Badge → Headline → CTAs)
- Hover-States mit dezenter Border- und Glow-Transition über Token-Shadows
- Fokus auf wenige, wirkungsvolle Momente — nicht an jedem Element animieren

### Layout & Komposition

- Bento-Grids, asymmetrische Section-Layouts, klare visuelle Hierarchie
- Overlap, Grid-breaking Elemente, großzügiger oder kontrollierter Weißraum
- Abwechselnde Section-Hintergründe über Background-Tokens
- Referenz: `src/components/landing/lan-haus-landing.tsx`

### Atmosphäre & visuelle Details (token-basiert)

- Tech-Grid-Patterns (dezent, mit Mask)
- Blur-Orbs über Brand-Farben mit Transparenz aus den Tokens
- Verläufe nur über definierte Gradient-Tokens
- Glow punktuell für CTAs und USPs über Glow-Tokens
- Subtile Texturen/Noise nur, wenn sie das Token-System nicht sprengen

---

## 6. Was vermeiden (Anti-Patterns)

- Generisches AI-Look: austauschbare Landing Page ohne Charakter
- Vorhersehbare, symmetrische Block-Layouts ohne visuelle Spannung
- Cookie-cutter-Komponenten-Muster
- Hardcodierte Farben, Schriften oder Abstände statt Tokens
- Freie Gradients oder Glows außerhalb der definierten Tokens
- Eigene Button-/CTA-Implementierungen statt `<Button />`
- Neue UI-Primitive, wenn eine Projekt- oder shadcn-Komponente existiert
- Überladene Micro-Interactions an jedem Element
Stimmt schöne Strände chillen