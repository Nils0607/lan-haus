import { Metadata } from "next";
import { ArrowRight, ChevronRight, Monitor, Network, Zap, Armchair, Wifi, PlugZap, Wind, Bed, Gamepad2, ChefHat, Coffee, ZapIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Ausstattung & Technik | Pulse LAN-Haus",
  description: "12 identische Gaming-Plätze mit 240-Hz-WQHD-Monitoren, CAT-7-LAN, Glasfaser und Dauerlast-Stromversorgung. Das komplette Setup im Detail.",
};

export default function AusstattungPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-brand-from/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="max-w-4xl font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-headline mb-6 tracking-display">
            Das Fundament für euer legendäres Wochenende:{" "}
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              Unser Setup.
            </span>
          </h1>
          
          <p className="max-w-2xl font-body text-xl text-fg-muted leading-body">
            Keine Kompromisse, keine halben Sachen. Wir haben die komplette Infrastruktur so gebaut, wie wir sie uns selbst für eine perfekte LAN wünschen würden. Hier seht ihr im Detail, was euch erwartet.
          </p>
        </div>
      </section>

      {/* Der Gaming-Platz */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-16 md:mb-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-from/10 border border-brand-from/20 flex items-center justify-center mx-auto mb-6 shadow-[var(--glow-brand)]">
              <Monitor className="w-8 h-8 text-brand-from" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Der Gaming-Platz: Deine persönliche Battlestation
            </h2>
            <p className="text-xl text-fg-muted">
              An jedem der 12 Plätze erwartet dich ein identisches, auf Performance getrimmtes Setup. Einsteigen, einstöpseln, dominieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-elevated/50 border border-outline-default rounded-2xl p-8 hover:border-brand-from/30 transition-colors">
              <Armchair className="w-8 h-8 text-brand-from mb-4" />
              <h3 className="font-heading text-xl font-bold text-fg-headline mb-3">Tisch & Stuhl</h3>
              <p className="text-fg-muted mb-3"><strong className="text-fg-body">Gaming-Tisch:</strong> Stabile 120 x 60 cm Fläche. Genug Platz für dein Gear und schnelle Mausbewegungen.</p>
              <p className="text-fg-muted"><strong className="text-fg-body">Ergonomischer Gaming-Stuhl:</strong> Kein billiger Bürostuhl, sondern Quality-Gear von Marken wie Backforce, Recaro oder Secretlab für lange, schmerzfreie Sessions.</p>
            </div>
            <div className="bg-elevated/50 border border-outline-default rounded-2xl p-8 hover:border-brand-from/30 transition-colors">
              <Monitor className="w-8 h-8 text-brand-from mb-4" />
              <h3 className="font-heading text-xl font-bold text-fg-headline mb-3">High-Performance-Monitor</h3>
              <ul className="text-fg-muted space-y-2">
                <li><strong className="text-fg-body">Größe:</strong> 27 Zoll – der Sweet Spot für kompetitives Gaming.</li>
                <li><strong className="text-fg-body">Auflösung:</strong> WQHD (2560x1440) – scharfe Optik ohne Performance-Fresser.</li>
                <li><strong className="text-fg-body">Bildwiederholrate:</strong> 240 Hz – für maximale Flüssigkeit.</li>
                <li><strong className="text-fg-body">Reaktionszeit:</strong> 0,5 ms – weil jede Millisekunde zählt.</li>
              </ul>
            </div>
            <div className="md:col-span-2 bg-surface border border-brand-from/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-from/10 rounded-full blur-[40px]" />
              <div className="relative z-10">
                <PlugZap className="w-8 h-8 text-brand-from mb-4" />
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-3">Anschlüsse & Kabel</h3>
                <p className="text-fg-muted max-w-3xl">
                  Ein hochwertiges DisplayPort-Kabel liegt für dich bereit. Dein Monitor hat natürlich auch einen freien HDMI-Anschluss. Eine 6er-Steckdosenleiste direkt am Platz sorgt für Saft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Netzwerk & Internet */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-brand-to/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-brand-to/10 border border-brand-to/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(157,78,221,0.2)]">
                <div className="absolute inset-0 rounded-full border border-brand-to/20 animate-ping opacity-50" />
                <Network className="w-16 h-16 text-brand-to" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="font-display text-3xl font-bold text-fg-headline mb-4">
                Netzwerk & Internet: Das Herzstück für Zero Lag
              </h2>
              <p className="text-xl text-fg-muted mb-8">
                Hier trennt sich die Spreu vom Weizen. Unser Netzwerk ist auf maximale Stabilität und minimalen Ping ausgelegt. Wenn du verlierst, liegt es nicht am Lag.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-outline-strong flex items-center justify-center shrink-0">
                    <Wifi className="w-5 h-5 text-brand-to" />
                  </div>
                  <div>
                    <h3 className="font-bold text-fg-headline">Internetanschluss</h3>
                    <p className="text-fg-muted">Stabile 1 Gbit/s Glasfaser (Ziel). Genug Bandbreite für 12 Gamer, die gleichzeitig zocken, streamen und downloaden.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-outline-strong flex items-center justify-center shrink-0">
                    <Network className="w-5 h-5 text-brand-to" />
                  </div>
                  <div>
                    <h3 className="font-bold text-fg-headline">Netzwerk-Hardware</h3>
                    <p className="text-fg-muted">Ein professioneller Router und ein zentraler 24-Port-Gigabit-Switch bilden das Rückgrat.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-outline-strong flex items-center justify-center shrink-0">
                    <PlugZap className="w-5 h-5 text-brand-to" />
                  </div>
                  <div>
                    <h3 className="font-bold text-fg-headline">Verkabelung</h3>
                    <p className="text-fg-muted">Von dort führt eine strukturierte CAT-7-Verkabelung direkt zu deinem Platz. Kein WLAN-Stress, nur pure, stabile LAN-Power. Für alles andere gibt es im ganzen Haus ein starkes Wi-Fi 6 Mesh-System.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strom & Kühlung */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Strom & Kühlung: Die unbesungenen Helden
            </h2>
            <p className="text-xl text-fg-muted max-w-3xl mx-auto">
              12 High-End-Rechner unter Volllast? Für eine normale Haussicherung der Endboss. Für uns: Standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-elevated/50 border border-success/20 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-[30px] group-hover:bg-success/20 transition-colors" />
              <ZapIcon className="w-10 h-10 text-success mb-6 drop-shadow-[0_0_10px_hsl(146_72%_48%/0.3)]" />
              <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">Stabile Stromversorgung</h3>
              <p className="text-fg-muted text-lg">
                Die gesamte Elektroinstallation ist nachweislich für die hohe Dauerlast von 12 Gaming-Setups plus Küche ausgelegt. Getrennte, hoch abgesicherte Stromkreise für den Gaming-Bereich garantieren maximale Stabilität.
              </p>
            </div>
            <div className="bg-elevated/50 border border-brand-from/20 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-from/10 rounded-full blur-[30px] group-hover:bg-brand-from/20 transition-colors" />
              <Wind className="w-10 h-10 text-brand-from mb-6 drop-shadow-[0_0_10px_var(--color-brand-glow)]" />
              <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">Klimatisierung</h3>
              <p className="text-fg-muted text-lg">
                Gaming heizt auf. Leistungsstarke Ventilatoren und eine Klimaanlage sorgen auch im Sommer dafür, dass nur die CPUs schwitzen, nicht ihr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schlafen & Erholen / Küche & Gemeinschaftsbereich */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Schlafen & Erholen */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-to/10 border border-brand-to/20 flex items-center justify-center mb-6">
                <Bed className="w-6 h-6 text-brand-to" />
              </div>
              <h2 className="font-display text-3xl font-bold text-fg-headline mb-4">Schlafen & Erholen: HP regenerieren</h2>
              <p className="text-lg text-fg-muted mb-8">Auch der härteste Grinder braucht mal eine Pause.</p>
              
              <div className="space-y-6">
                <div className="bg-surface border border-outline-default rounded-xl p-6 border-l-4 border-l-brand-to">
                  <h3 className="font-bold text-fg-headline mb-2 flex items-center gap-2">
                    <Bed className="w-5 h-5 text-fg-muted" /> Schlafplätze
                  </h3>
                  <p className="text-fg-muted">Einfache und funktionale Schlafplätze für die ganze Crew (bis zu 12 Personen). Bettwäsche ist von uns, Handtücher bringst du mit.</p>
                </div>
                <div className="bg-surface border border-outline-default rounded-xl p-6 border-l-4 border-l-brand-to">
                  <h3 className="font-bold text-fg-headline mb-2 flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-fg-muted" /> Lounge / Safe Zone
                  </h3>
                  <p className="text-fg-muted">Kein Bock mehr auf den Bildschirm? Zieht euch auf die Sofas in der Lounge zurück, quatscht oder startet eine Runde auf der PS5 oder Switch am großen Beamer.</p>
                </div>
              </div>
            </div>

            {/* Küche */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center mb-6">
                <ChefHat className="w-6 h-6 text-success" />
              </div>
              <h2 className="font-display text-3xl font-bold text-fg-headline mb-4">Küche & Gemeinschaft: Die Buff-Station</h2>
              <p className="text-lg text-fg-muted mb-8">Der soziale Hub für die Stärkung zwischendurch.</p>
              
              <div className="space-y-6">
                <div className="bg-surface border border-outline-default rounded-xl p-6 border-l-4 border-l-success">
                  <h3 className="font-bold text-fg-headline mb-2 flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-success" /> Voll ausgestattete Küche
                  </h3>
                  <p className="text-fg-muted">Hier könnt ihr euer Essen zubereiten. Mit großem Kühlschrank, Spülmaschine, Backofen, Mikrowelle und einem <strong className="text-fg-body">Pizzaofen</strong> für das wichtigste LAN-Party-Gericht.</p>
                </div>
                <div className="bg-surface border border-outline-default rounded-xl p-6 border-l-4 border-l-success">
                  <h3 className="font-bold text-fg-headline mb-2 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-fg-muted" /> Mana-Tränke
                  </h3>
                  <p className="text-fg-muted">Eine Kaffeemaschine, Wasserkocher und ein Getränkeautomat mit Softdrinks und Energy Drinks stehen bereit, um eure Mana-Balken für die Nacht-Session aufzufüllen.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Fragen zur Ausstattung"
        items={[
          {
            question: "Muss ich ein eigenes LAN-Kabel mitbringen?",
            answer: "Nein. Jeder Platz ist fest mit einem CAT-7-Kabel am zentralen Switch angeschlossen. Du musst nur deinen Rechner damit verbinden."
          },
          {
            question: "Welche Anschlüsse haben die Monitore genau?",
            answer: "Jeder Monitor hat DisplayPort- und HDMI-Anschlüsse. Ein DisplayPort-Kabel, um die 240 Hz voll auszunutzen, liegt an jedem Platz für dich bereit."
          },
          {
            question: "Hält die Sicherung wirklich, wenn alle gleichzeitig zocken und wir Pizza machen?",
            answer: "Ja, absolut. Die Stromkreise für den Gaming-Bereich sind von der Küche getrennt und für genau diese Spitzenlast ausgelegt. Das ist einer der Kernpunkte unseres Konzepts."
          },
          {
            question: "Kann ich meinen Laptop mitbringen und trotzdem den 240-Hz-Monitor nutzen?",
            answer: "Ja, solange dein Laptop über einen passenden DisplayPort- oder HDMI-2.0/2.1-Ausgang verfügt, der die hohe Bildwiederholrate bei WQHD unterstützt."
          },
          {
            question: "Gibt es die Möglichkeit, den Raum zwischen den Plätzen abzutrennen?",
            answer: "Ja, wir haben flexible Raumtrenner, die ihr bei Bedarf zwischen den Tischen aufstellen könnt, um mehr Privatsphäre zu schaffen."
          },
          {
            question: "Wie ist das WLAN für Smartphones & Co.?",
            answer: "Für eure mobilen Geräte gibt es ein flächendeckendes und starkes Wi-Fi 6 (AX-Standard) Mesh-System im ganzen Haus."
          }
        ]}
      />

      {/* Final CTA */}
      <section className="relative py-24 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
            Überzeugt vom Setup?
          </h2>
          <p className="text-xl text-fg-muted mb-10">
            Sichert euch euren Termin und erlebt die Infrastruktur live.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {BOOKING_ENABLED && (
              <Button href="/buchen" variant="primary" size="lg">
                Verfügbarkeit prüfen
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            )}
            <Button href="/preise" variant="secondary" size="lg">
              Preise ansehen
              <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
