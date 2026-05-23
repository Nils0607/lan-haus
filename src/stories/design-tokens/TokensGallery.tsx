"use client";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ColorItem = { name: string; var: string; note?: string };

function ColorGrid({
  title,
  items,
  className,
}: {
  title: string;
  items: ColorItem[];
  className?: string;
}) {
  return (
    <section className={cn("space-y-3", className)}>
      <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
        {title}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <ColorSwatch key={item.var} {...item} />
        ))}
      </div>
    </section>
  );
}

function ColorSwatch({ name, var: cssVar, note }: ColorItem) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div
        className="h-16 w-full border-b border-border"
        style={{ background: `var(${cssVar})` }}
        title={cssVar}
      />
      <div className="space-y-0.5 p-3">
        <p className="text-body font-medium text-card-foreground">{name}</p>
        <code className="block break-all text-label text-muted-foreground">
          {cssVar}
        </code>
        {note ? (
          <p className="text-label text-fg-muted">{note}</p>
        ) : null}
      </div>
    </div>
  );
}

function BorderSwatch({ name, var: cssVar }: ColorItem) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
      <div
        className="size-14 shrink-0 rounded-md bg-bg-elevated"
        style={{ boxShadow: `inset 0 0 0 2px var(${cssVar})` }}
      />
      <div className="min-w-0">
        <p className="text-body font-medium text-card-foreground">{name}</p>
        <code className="break-all text-label text-muted-foreground">
          {cssVar}
        </code>
      </div>
    </div>
  );
}

function TypographyScale() {
  const rows = [
    {
      label: "Display",
      className:
        "font-display text-display leading-display tracking-display font-bold text-fg-headline",
      vars: "--font-display · --font-size-display …",
    },
    {
      label: "Überschrift 1",
      className:
        "font-heading text-h1 leading-heading tracking-heading font-bold text-fg-headline",
      vars: "--font-heading · --font-size-h1",
    },
    {
      label: "Überschrift 2",
      className:
        "font-heading text-h2 leading-heading tracking-heading font-bold text-fg-headline",
      vars: "--font-heading · --font-size-h2",
    },
    {
      label: "Body",
      className:
        "text-body leading-body font-normal text-fg-body",
      vars: "--font-body · --font-size-body",
    },
    {
      label: "Label",
      className:
        "text-label uppercase leading-body tracking-label font-medium text-fg-muted",
      vars: "--font-size-label · --letter-spacing-label",
    },
  ];

  return (
    <section className="space-y-3">
      <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
        Typografie
      </h3>
      <div className="divide-y divide-border rounded-lg border border-border bg-card">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-2 p-4 md:flex-row md:items-baseline md:justify-between"
          >
            <div className={row.className}>Nexus – {row.label}</div>
            <code className="shrink-0 text-label text-muted-foreground">{row.vars}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

function ButtonShowcase() {
  return (
    <section className="space-y-3">
      <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
        Buttons (<code className="text-label font-mono">Button</code>)
      </h3>
      <p className="text-body text-fg-muted">
        Alle Action-Flächen nutzen{" "}
        <code className="rounded-md bg-muted px-1 py-px text-label text-primary">
          src/components/ui/button.tsx
        </code>{" "}
        — nur Primary (Gradient), Secondary (Outline Brand), Tertiary (Outline
        Default); Größen S/M/L plus Icon.
      </p>
      <div className="space-y-8 rounded-lg border border-border bg-card p-6">
        <div>
          <p className="mb-3 text-label font-medium text-muted-foreground">
            Primary — Gradient, Shadow Glow
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button type="button" variant="primary" size="sm">
              Primary S
            </Button>
            <Button type="button" variant="primary" size="md">
              Primary M
            </Button>
            <Button type="button" variant="primary" size="lg">
              Primary L
            </Button>
          </div>
        </div>
        <div>
          <p className="mb-3 text-label font-medium text-muted-foreground">
            Secondary — Outline Brand (Cyan)
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button type="button" variant="secondary" size="sm">
              Secondary S
            </Button>
            <Button type="button" variant="secondary" size="md">
              Secondary M
            </Button>
            <Button type="button" variant="secondary" size="lg">
              Secondary L
            </Button>
          </div>
        </div>
        <div>
          <p className="mb-3 text-label font-medium text-muted-foreground">
            Tertiary — Outline Default (Grau)
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button type="button" variant="tertiary" size="sm">
              Tertiary S
            </Button>
            <Button type="button" variant="tertiary" size="md">
              Tertiary M
            </Button>
            <Button type="button" variant="tertiary" size="lg">
              Tertiary L
            </Button>
            <Button type="button" variant="tertiary" size="icon" aria-label="Menü">
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpaceScale() {
  const steps = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20] as const;
  return (
    <section className="space-y-3">
      <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
        Abstände (Spacing)
      </h3>
      <div className="space-y-2 rounded-lg border border-border bg-card p-4">
        {steps.map((n) => (
          <div key={n} className="flex items-center gap-4">
            <code className="w-28 shrink-0 text-label text-muted-foreground">
              --space-{n}
            </code>
            <div
              className="h-8 rounded bg-brand/90"
              style={{ width: `var(--space-${n})` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function RadiusScale() {
  const items: { label: string; var: string }[] = [
    { label: "none", var: "--radius-none" },
    { label: "sm", var: "--radius-sm" },
    { label: "md", var: "--radius-md" },
    { label: "lg", var: "--radius-lg" },
    { label: "full", var: "--radius-full" },
  ];
  return (
    <section className="space-y-3">
      <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
        Radius (Primitive-Skala)
      </h3>
      <p className="text-body text-muted-foreground">
        shadcn verwendet zusätzlich <code className="text-label">--radius</code> als
        Basis; siehe Dokumentation in{" "}
        <code className="text-label">globals.css → @theme</code>.
      </p>
      <div className="flex flex-wrap gap-4 rounded-lg border border-border bg-card p-4">
        {items.map((item) => (
          <div key={item.var} className="text-center">
            <div
              className="mb-2 size-16 bg-brand"
              style={{ borderRadius: `var(${item.var})` }}
            />
            <p className="text-label text-muted-foreground">{item.label}</p>
            <code className="text-label text-muted-foreground">{item.var}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShadowScale() {
  return (
    <section className="space-y-3">
      <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
        Glow &amp; Effekte
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-bg-surface p-6">
          <div
            className="mx-auto mb-3 h-24 w-24 rounded-lg bg-brand/30"
            style={{ boxShadow: "var(--glow-brand)" }}
          />
          <code className="text-label text-muted-foreground">--glow-brand</code>
        </div>
        <div className="rounded-lg border border-border bg-bg-surface p-6">
          <div
            className="mx-auto mb-3 h-24 w-24 rounded-lg bg-bg-elevated"
            style={{ boxShadow: "var(--glow-focus)" }}
          />
          <code className="text-label text-muted-foreground">--glow-focus</code>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-4">
        <div
          className="mb-3 h-20 w-full rounded-md"
          style={{ background: "var(--color-brand-gradient)" }}
        />
        <code className="text-label text-muted-foreground">
          --color-brand-gradient
        </code>
      </div>
    </section>
  );
}

function SemanticShadcn() {
  const items: { label: string; var: string; desc: string }[] = [
    { label: "Background", var: "--background", desc: "Seitengrund" },
    { label: "Foreground", var: "--foreground", desc: "Standardtext" },
    { label: "Primary", var: "--primary", desc: "Aktion / Fokus" },
    {
      label: "Primary FG",
      var: "--primary-foreground",
      desc: "Text auf Primary",
    },
    { label: "Secondary", var: "--secondary", desc: "Sekundär" },
    { label: "Muted", var: "--muted", desc: "Zurückhaltende Fläche" },
    {
      label: "Muted FG",
      var: "--muted-foreground",
      desc: "Sekundärtext",
    },
    { label: "Accent", var: "--accent", desc: "Hover / Highlights" },
    { label: "Destructive", var: "--destructive", desc: "Destruktiv" },
    { label: "Border", var: "--border", desc: "Rahmen" },
    { label: "Input", var: "--input", desc: "Eingaben" },
    { label: "Ring", var: "--ring", desc: "Fokusring" },
  ];

  return (
    <section className="space-y-3">
      <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
        shadcn-Semantik (Mapped auf NEXUS)
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.var}
            className="flex gap-3 rounded-lg border border-border p-3"
            style={{
              backgroundColor: `color-mix(in srgb, var(${item.var}) 18%, transparent)`,
            }}
          >
            <div
              className="size-12 shrink-0 rounded-md ring-2 ring-border"
              style={{ backgroundColor: `var(${item.var})` }}
            />
            <div className="min-w-0">
              <p className="text-body font-medium text-card-foreground">
                {item.label}
              </p>
              <p className="text-label text-muted-foreground">{item.desc}</p>
              <code className="mt-1 block break-all text-label text-muted-foreground">
                {item.var}
              </code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TokensGallery() {
  return (
    <div className="min-h-screen bg-background p-8 text-foreground">
      <header className="mx-auto mb-12 max-w-6xl">
        <p className="font-heading text-label uppercase tracking-[0.2em] text-brand-from">
          NEXUS UI
        </p>
        <h1 className="mt-2 font-display text-display leading-display tracking-display text-fg-headline">
          Design Tokens
        </h1>
        <p className="mt-4 max-w-2xl text-body leading-body text-fg-muted">
          Überblick über Primitive, Semantik und die Zuordnung zu shadcn-Variablen
          in{" "}
          <code className="rounded-md bg-muted px-1 py-px text-label text-primary">
            src/app/globals.css
          </code>
          .
        </p>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 pb-16">
        <ColorGrid
          title="Brand"
          items={[
            { name: "Brand von", var: "--color-brand-from" },
            { name: "Brand nach", var: "--color-brand-to" },
            { name: "Brand Glow", var: "--color-brand-glow" },
          ]}
        />

        <ColorGrid
          title="Hintergrund"
          items={[
            { name: "Base", var: "--color-bg-base" },
            { name: "Surface", var: "--color-bg-surface" },
            { name: "Elevated", var: "--color-bg-elevated" },
            { name: "Overlay", var: "--color-bg-overlay" },
          ]}
        />

        <ColorGrid
          title="Text / Vordergrund"
          items={[
            { name: "Headline", var: "--color-fg-headline" },
            { name: "Body", var: "--color-fg-body" },
            { name: "Muted", var: "--color-fg-muted" },
            { name: "Disabled", var: "--color-fg-disabled" },
            { name: "On Brand", var: "--color-fg-on-brand" },
          ]}
        />

        <ColorGrid
          title="Rot-Skala"
          items={[100, 300, 500, 700, 900].map((s) => ({
            name: `Red ${s}`,
            var: `--color-red-${s}`,
          }))}
        />

        <ColorGrid
          title="Blau-Skala"
          items={[100, 300, 500, 700, 900].map((s) => ({
            name: `Blue ${s}`,
            var: `--color-blue-${s}`,
          }))}
        />

        <ColorGrid
          title="Lila-Skala"
          items={[100, 300, 500, 700, 900].map((s) => ({
            name: `Purple ${s}`,
            var: `--color-purple-${s}`,
          }))}
        />

        <ColorGrid
          title="Statusfarben"
          items={[
            { name: "Success", var: "--color-success-default" },
            { name: "Success Subtle", var: "--color-success-subtle" },
            {
              name: "Success FG",
              var: "--color-success-foreground",
            },
            { name: "Warning", var: "--color-warning-default" },
            { name: "Warning Subtle", var: "--color-warning-subtle" },
            {
              name: "Warning FG",
              var: "--color-warning-foreground",
            },
            { name: "Error", var: "--color-error-default" },
            { name: "Error Subtle", var: "--color-error-subtle" },
            { name: "Error FG", var: "--color-error-foreground" },
            { name: "Info", var: "--color-info-default" },
            { name: "Info Subtle", var: "--color-info-subtle" },
            { name: "Info FG", var: "--color-info-foreground" },
          ]}
        />

        <section className="space-y-3">
          <h3 className="font-heading text-h2 tracking-heading text-fg-headline">
            Konturen / Outlines
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                { name: "Subtle", var: "--outline-subtle" },
                { name: "Default", var: "--outline-default" },
                { name: "Strong", var: "--outline-strong" },
                { name: "Brand", var: "--outline-brand" },
                { name: "Danger", var: "--outline-danger" },
              ] satisfies ColorItem[]
            ).map((item) => (
              <BorderSwatch key={item.var} {...item} />
            ))}
          </div>
        </section>

        <SemanticShadcn />

        <TypographyScale />

        <ButtonShowcase />

        <SpaceScale />

        <RadiusScale />

        <ShadowScale />
      </div>
    </div>
  );
}
