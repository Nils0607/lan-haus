"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Clock, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_ENABLED } from "@/lib/feature-flags";
import { cn } from "@/lib/utils";

const PRIMARY_LINKS = [
  { href: "/ausstattung", label: "Ausstattung" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/preise", label: "Preise" },
  { href: "/ratgeber", label: "Ratgeber" },
] as const;

const FUER_EUCH_LINKS = [
  {
    href: "/bootcamp-esport",
    label: "Teams & Bootcamp",
    description: "Für E-Sport & Training",
  },
  {
    href: "/gaming-wochenende-freunde",
    label: "Freunde / Gaming-Wochenende",
    description: "Locker zusammen zocken",
  },
  {
    href: "/gaming-location",
    label: "Gaming Haus erklärt",
    description: "Konzept & Einstieg",
  },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [desktopFuerEuchOpen, setDesktopFuerEuchOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const fuerEuchRef = useRef<HTMLDivElement>(null);

  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setMobileOpen(false);
    setMobileSubOpen(false);
    setDesktopFuerEuchOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!desktopFuerEuchOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopFuerEuchOpen(false);
    };

    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      const el = fuerEuchRef.current;
      if (el && !el.contains(e.target as Node)) {
        setDesktopFuerEuchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [desktopFuerEuchOpen]);

  const fuerEuchActive = FUER_EUCH_LINKS.some(({ href }) =>
    isActive(pathname, href),
  );

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-outline-subtle bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="font-display text-sm font-bold tracking-heading text-fg-headline transition-colors hover:text-brand-from sm:text-base"
        >
          Pulse{" "}
          <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)]">
            LAN-Haus
          </span>
        </Link>

        {/* Desktop */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2"
          aria-label="Hauptnavigation"
        >
          {PRIMARY_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(pathname, href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-body font-medium transition-colors",
                isActive(pathname, href)
                  ? "text-brand-from shadow-[0_0_12px_rgba(0,255,255,0.12)]"
                  : "text-fg-muted hover:bg-elevated hover:text-fg-headline",
              )}
            >
              {label}
            </Link>
          ))}

          <div ref={fuerEuchRef} className="relative">
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-md border-0 bg-transparent px-3 py-2 text-sm font-body font-medium transition-colors",
                fuerEuchActive || desktopFuerEuchOpen
                  ? "text-brand-from shadow-[0_0_12px_rgba(0,255,255,0.12)]"
                  : "text-fg-muted hover:bg-elevated hover:text-fg-headline",
              )}
              aria-expanded={desktopFuerEuchOpen}
              aria-haspopup="menu"
              aria-controls="nav-fuer-euch-desktop"
              id="nav-fuer-euch-trigger"
              onClick={() => setDesktopFuerEuchOpen((o) => !o)}
            >
              Für euch
              <ChevronDown
                className={cn(
                  "size-3.5 opacity-70 transition-transform duration-200",
                  desktopFuerEuchOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>

            <div
              id="nav-fuer-euch-desktop"
              role="menu"
              aria-labelledby="nav-fuer-euch-trigger"
              hidden={!desktopFuerEuchOpen}
              className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,20rem)] -translate-x-1/2 pt-2"
            >
              <div className="rounded-xl border border-outline-default bg-popover/95 p-2 shadow-[0_24px_48px_rgba(0,0,0,0.45)] backdrop-blur-md">
                {FUER_EUCH_LINKS.map(({ href, label, description }) => (
                  <Link
                    key={href}
                    href={href}
                    role="menuitem"
                    aria-current={
                      isActive(pathname, href) ? "page" : undefined
                    }
                    className={cn(
                      "block rounded-lg px-3 py-2.5 transition-colors",
                      isActive(pathname, href)
                        ? "bg-brand-from/10 text-brand-from"
                        : "text-fg-body hover:bg-elevated hover:text-fg-headline",
                    )}
                    onClick={() => setDesktopFuerEuchOpen(false)}
                  >
                    <span className="font-body text-sm font-medium">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-xs text-fg-muted">
                      {description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {BOOKING_ENABLED ? (
            <div className="hidden sm:block">
              <Button href="/buchen" variant="primary" size="sm">
                Buchen
              </Button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FF6B6B]/40 bg-[#FF6B6B]/10 text-[#FF6B6B]">
              <Clock className="size-3 shrink-0" aria-hidden />
              <span className="text-xs font-bold tracking-wide uppercase whitespace-nowrap">
                Bald verfügbar
              </span>
            </div>
          )}

          <Button
            type="button"
            variant="tertiary"
            size="icon"
            className="lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </Button>
        </div>
      </div>
    </header>

    {/* Mobile sheet: outside header so backdrop-filter does not break position:fixed */}
    <div
      id="mobile-nav"
      className={cn(
        "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-outline-subtle bg-background/95 backdrop-blur-xl lg:hidden transition-[opacity,visibility] duration-200",
        mobileOpen
          ? "visible opacity-100"
          : "pointer-events-none invisible opacity-0",
      )}
      aria-hidden={!mobileOpen}
    >
      <nav
        className="container mx-auto flex flex-col gap-1 px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6"
        aria-label="Mobile Navigation"
      >
        {PRIMARY_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(pathname, href) ? "page" : undefined}
            className={cn(
              "rounded-lg px-4 py-3 font-body text-base font-medium",
              isActive(pathname, href)
                ? "bg-brand-from/10 text-brand-from"
                : "text-fg-muted hover:bg-elevated hover:text-fg-headline",
            )}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}

        <div className="border-t border-outline-subtle pt-2 mt-2">
          <button
            type="button"
            className={cn(
              "flex w-full items-center justify-between rounded-lg border-0 bg-transparent px-4 py-3 text-left font-body text-base font-medium transition-colors",
              fuerEuchActive || mobileSubOpen
                ? "bg-brand-from/10 text-brand-from"
                : "text-fg-muted hover:bg-elevated hover:text-fg-headline",
            )}
            aria-expanded={mobileSubOpen}
            onClick={() => setMobileSubOpen((o) => !o)}
          >
            Für euch
            <ChevronDown
              className={cn(
                "size-4 shrink-0 transition-transform",
                mobileSubOpen && "rotate-180",
              )}
              aria-hidden
            />
          </button>
          <div
            className={cn(
              "grid gap-1 overflow-hidden transition-[grid-template-rows] duration-200",
              mobileSubOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="min-h-0">
              <div className="space-y-1 pb-2 pl-2">
                {FUER_EUCH_LINKS.map(({ href, label, description }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={
                      isActive(pathname, href) ? "page" : undefined
                    }
                    className={cn(
                      "block rounded-lg px-3 py-2.5",
                      isActive(pathname, href)
                        ? "bg-brand-from/10 text-brand-from"
                        : "text-fg-body hover:bg-elevated",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-body text-base font-medium">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-xs text-fg-muted">
                      {description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {BOOKING_ENABLED ? (
          <Button
            href="/buchen"
            variant="primary"
            size="md"
            className="mt-4 w-full sm:hidden"
            onClick={() => setMobileOpen(false)}
          >
            Buchen
          </Button>
        ) : (
          <div className="mt-4 sm:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#FF6B6B]/40 bg-[#FF6B6B]/10 text-[#FF6B6B]">
            <Clock className="size-4 shrink-0" aria-hidden />
            <span className="text-sm font-bold tracking-wide uppercase">
              Bald verfügbar
            </span>
          </div>
        )}
      </nav>
    </div>
    </>
  );
}
