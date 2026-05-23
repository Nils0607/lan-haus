import type { Metadata } from "next";
import { MarketingPageShell } from "@/components/layout/marketing-page-shell";

export const metadata: Metadata = {
  title: "Ratgeber | Pulse LAN-Haus",
  description: "Tipps, Tricks und Checklisten für die perfekte LAN-Party.",
};

export default function RatgeberPage() {
  return (
    <MarketingPageShell
      title="LAN-Party Ratgeber"
      description="Alles was ihr wissen müsst, um euer Gaming-Wochenende perfekt zu planen."
    >
      <div className="grid gap-6">
        <div className="p-6 bg-surface border border-outline-default rounded-xl hover:border-brand-from/50 transition-colors">
          <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">Die ultimative Packliste</h3>
          <p className="text-fg-muted mb-4">Was ihr unbedingt mitbringen müsst und was ihr getrost zuhause lassen könnt.</p>
          <span className="text-brand-from text-sm font-bold uppercase tracking-wider">Bald verfügbar</span>
        </div>
        <div className="p-6 bg-surface border border-outline-default rounded-xl hover:border-brand-from/50 transition-colors">
          <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">Verpflegung & Kochen</h3>
          <p className="text-fg-muted mb-4">Einkaufstipps, schnelle Rezepte für Gamer und wie ihr den Pizzaofen optimal nutzt.</p>
          <span className="text-brand-from text-sm font-bold uppercase tracking-wider">Bald verfügbar</span>
        </div>
        <div className="p-6 bg-surface border border-outline-default rounded-xl hover:border-brand-from/50 transition-colors">
          <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">Turnier-Ideen für eure Gruppe</h3>
          <p className="text-fg-muted mb-4">Wie ihr euer Wochenende mit kleinen internen Turnieren noch spannender macht.</p>
          <span className="text-brand-from text-sm font-bold uppercase tracking-wider">Bald verfügbar</span>
        </div>
      </div>
    </MarketingPageShell>
  );
}
