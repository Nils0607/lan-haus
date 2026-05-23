import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

interface MarketingPageShellProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  showCta?: boolean;
  ctaText?: string;
}

export function MarketingPageShell({
  title,
  description,
  children,
  showCta = true,
  ctaText = "Buchen",
}: MarketingPageShellProps) {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-brand-from/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex-1 flex flex-col">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-headline mb-6 tracking-display">
            {title}
          </h1>
          
          {description && (
            <p className="font-body text-xl text-fg-muted leading-body mb-12">
              {description}
            </p>
          )}

          <div className="font-body text-fg-body leading-body space-y-6 text-lg">
            {children || (
              <div className="p-8 rounded-2xl border border-outline-default bg-surface/50 backdrop-blur-sm">
                <p className="text-fg-muted">
                  Diese Seite befindet sich noch im Aufbau. Hier entstehen in Kürze detaillierte Informationen zum Thema.
                </p>
              </div>
            )}
          </div>

          {showCta && BOOKING_ENABLED && (
            <div className="mt-16 pt-12 border-t border-outline-subtle">
              <div className="bg-elevated/50 border border-outline-default rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-from/5 to-brand-to/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="font-display text-2xl font-bold text-fg-headline mb-4 relative z-10">
                  Bereit für euer nächstes Gaming-Wochenende?
                </h2>
                <p className="font-body text-fg-muted mb-8 relative z-10">
                  Sichert euch jetzt euren Wunschtermin im Pulse LAN-Haus.
                </p>
                <Button href="/buchen" variant="primary" size="md" className="relative z-10">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
