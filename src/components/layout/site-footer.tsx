import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-subtle bg-surface/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-fg-muted font-body">
          &copy; {new Date().getFullYear()} Pulse LAN-Haus. Alle Rechte vorbehalten.
        </div>
        <nav className="flex items-center gap-6">
          <Link 
            href="/impressum" 
            className="text-sm font-body text-fg-muted hover:text-brand-from transition-colors"
          >
            Impressum
          </Link>
          <Link 
            href="/datenschutz" 
            className="text-sm font-body text-fg-muted hover:text-brand-from transition-colors"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
