import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Buchen | Pulse LAN-Haus",
  description: "Prüft die Verfügbarkeit und sichert euch euer Gaming-Wochenende.",
};

export default function BuchenPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background selection:bg-brand-from/30 selection:text-brand-from">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-brand-to/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex-1 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl mx-auto w-full">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-headline mb-6 tracking-display">
            Termin sichern
          </h1>
          
          <p className="font-body text-xl text-fg-muted leading-body mb-12">
            Wählt euren Wunschzeitraum aus und prüft direkt die Verfügbarkeit.
          </p>

          <div className="p-12 rounded-2xl border border-outline-default bg-elevated/50 backdrop-blur-sm shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-brand-from/10 border border-brand-from/30 flex items-center justify-center mx-auto mb-6">
              <span className="text-brand-from">📅</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-fg-headline mb-4">
              Buchungssystem in Vorbereitung
            </h2>
            <p className="font-body text-fg-muted mb-8">
              Aktuell nehmen wir Buchungsanfragen per E-Mail entgegen. Schreibt uns einfach euren Wunschtermin und die ungefähre Personenzahl.
            </p>
            <Button href="mailto:booking@pulse-lan.de" variant="primary" size="md">
              Anfrage senden
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
