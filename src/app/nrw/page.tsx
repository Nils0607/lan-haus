import { Metadata } from "next";
import { ArrowRight, ChevronRight, Map, Car, Train, ShoppingCart, Pizza, MapPin, MonitorPlay, Banknote, HelpCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "LAN Haus mieten in NRW | Pulse LAN-Haus",
  description: "Gaming Location in Nordrhein-Westfalen für bis zu 12 Personen. Kurze Anreise aus Köln, Düsseldorf, Dortmund und dem Ruhrgebiet. 240-Hz-Setup, transparente Preise.",
};

export default function NRWPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-from/15 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-outline-default shadow-[var(--glow-brand)] mb-8">
            <MapPin className="w-4 h-4 text-brand-from" />
            <span className="text-label font-bold tracking-label uppercase text-brand-from">
              Zentral in Nordrhein-Westfalen
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-headline mb-6 tracking-display">
            LAN Haus mieten in NRW:{" "}
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              Eure Gaming Location.
            </span>
          </h1>
          
          <p className="max-w-2xl font-body text-xl text-fg-muted leading-body mb-10">
            Kurze Anreise, maximaler Spielspaß. Bucht euer exklusives Gaming Haus in NRW für bis zu 12 Personen. Perfekt erreichbar für eure Crew aus Köln, Düsseldorf, Dortmund und dem ganzen Ruhrgebiet.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {BOOKING_ENABLED && (
              <Button href="/buchen" variant="primary" size="lg">
                Verfügbarkeit prüfen & Buchen
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            )}
            <div className="flex gap-4">
              <Button href="/preise" variant="secondary" size="lg">
                Preise ansehen
              </Button>
              <Button href="/ausstattung" variant="secondary" size="lg">
                Zur Ausstattung
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Erreichbarkeit & Warum NRW */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Erreichbarkeit Tabelle */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-from/10 border border-brand-from/20 flex items-center justify-center shadow-[var(--glow-brand)]">
                  <Map className="w-6 h-6 text-brand-from" />
                </div>
                <h2 className="font-display text-3xl font-bold text-fg-headline">Kurze Wege für deine Crew</h2>
              </div>
              <p className="text-lg text-fg-muted mb-8">
                Unser Standort ist der ideale Treffpunkt für eure Gruppe. Statt einer langen Anreise quer durch Deutschland könnt ihr eure Energie direkt ins Zocken stecken.
              </p>
              
              <div className="bg-elevated/80 border border-outline-default rounded-2xl overflow-hidden shadow-lg">
                <table className="w-full text-left">
                  <thead className="bg-surface/50 border-b border-outline-subtle">
                    <tr>
                      <th className="px-6 py-4 font-heading font-bold text-fg-muted text-sm uppercase tracking-wider">Stadt</th>
                      <th className="px-6 py-4 font-heading font-bold text-fg-muted text-sm uppercase tracking-wider text-right">Anreise (Auto)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-subtle">
                    {[
                      { city: "Dortmund", time: "ca. 45 Min." },
                      { city: "Essen", time: "ca. 1 Std." },
                      { city: "Münster", time: "ca. 1 Std." },
                      { city: "Düsseldorf", time: "ca. 1 Std. 15 Min." },
                      { city: "Köln", time: "ca. 1 Std. 30 Min." },
                      { city: "Bonn", time: "ca. 1 Std. 45 Min." },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-surface/30 transition-colors">
                        <td className="px-6 py-4 font-bold text-fg-headline">{row.city}</td>
                        <td className="px-6 py-4 text-fg-muted text-right">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Warum NRW ideal für euch ist */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-to/5 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-surface/50 border border-brand-to/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">
                  Der perfekte Kompromiss für alle
                </h3>
                <p className="text-fg-muted text-lg leading-relaxed">
                  Die zentrale Lage in NRW macht unser Haus zum fairen Treffpunkt für alle, deren Freundeskreis oder Team über das Bundesland verteilt ist. Kein Mitglied eurer Gruppe hat eine Weltreise vor sich. Das bedeutet weniger Reisestress und mehr Zeit für das Wesentliche: ein gemeinsames, unvergessliches Wochenende.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Anreise, Parken & Versorgung vor Ort */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Ankommen und alles finden, was ihr braucht
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-elevated/40 border border-outline-default rounded-2xl p-8 hover:border-brand-from/30 transition-colors flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline-strong flex items-center justify-center shrink-0">
                <Car className="w-5 h-5 text-brand-from" />
              </div>
              <div>
                <h3 className="font-bold text-fg-headline text-lg mb-2">Anreise mit dem Auto</h3>
                <p className="text-fg-muted">Die Anbindung an die Autobahn ist unkompliziert. Direkt am Haus stehen ausreichend kostenlose Parkplätze für eure ganze Gruppe zur Verfügung.</p>
              </div>
            </div>

            <div className="bg-elevated/40 border border-outline-default rounded-2xl p-8 hover:border-brand-from/30 transition-colors flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline-strong flex items-center justify-center shrink-0">
                <Train className="w-5 h-5 text-brand-from" />
              </div>
              <div>
                <h3 className="font-bold text-fg-headline text-lg mb-2">Anreise mit der Bahn</h3>
                <p className="text-fg-muted">Der nächste Bahnhof ist nur eine kurze Taxifahrt entfernt.</p>
              </div>
            </div>

            <div className="bg-elevated/40 border border-outline-default rounded-2xl p-8 hover:border-brand-from/30 transition-colors flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline-strong flex items-center justify-center shrink-0">
                <ShoppingCart className="w-5 h-5 text-brand-from" />
              </div>
              <div>
                <h3 className="font-bold text-fg-headline text-lg mb-2">Einkaufsmöglichkeiten</h3>
                <p className="text-fg-muted">Ein großer Supermarkt für den Wochenendeinkauf ist in 5 Minuten mit dem Auto erreichbar.</p>
              </div>
            </div>

            <div className="bg-elevated/40 border border-outline-default rounded-2xl p-8 hover:border-brand-from/30 transition-colors flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline-strong flex items-center justify-center shrink-0">
                <Pizza className="w-5 h-5 text-brand-from" />
              </div>
              <div>
                <h3 className="font-bold text-fg-headline text-lg mb-2">Notfall-Loot</h3>
                <p className="text-fg-muted">Pizza, Döner oder andere Buff-Food-Lieferdienste bringen eure Bestellung direkt bis an die Haustür.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof-Teaser & Preise */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="bg-elevated border border-outline-default rounded-2xl p-8 lg:p-10 flex flex-col items-start group hover:border-brand-from/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-from/10 border border-brand-from/20 flex items-center justify-center mb-6 shadow-[var(--glow-brand)]">
                <MonitorPlay className="w-6 h-6 text-brand-from" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">Ein Setup ohne Kompromisse</h3>
              <p className="text-fg-muted text-lg mb-8 flex-grow">
                Auch in unserer NRW-Location gilt: Volle Power. An jedem der 12 Plätze wartet ein 240-Hz-WQHD-Monitor, angetrieben von einem Netzwerk, das für Zero Lag gebaut wurde.
              </p>
              <Button href="/ausstattung" variant="secondary" size="md">
                Alle Details zur Ausstattung
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-elevated border border-outline-default rounded-2xl p-8 lg:p-10 flex flex-col items-start group hover:border-brand-to/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-to/10 border border-brand-to/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(276_100%_56%/0.4)]">
                <Banknote className="w-6 h-6 text-brand-to" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">Faire Preise für eure Gruppe</h3>
              <p className="text-fg-muted text-lg mb-8 flex-grow">
                Berechnet die Kosten für euer Team. Unser Preismodell ist transparent und wird günstiger, je länger ihr bleibt.
              </p>
              <Button href="/preise" variant="secondary" size="md">
                Zur detaillierten Preisübersicht
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Fragen zur Location in NRW"
        items={[
          {
            question: "Wie ist die Lärmsituation? Können wir die ganze Nacht zocken?",
            answer: "Ja, absolut. Das Haus ist so gelegen, dass ihr ungestört die ganze Nacht durchmachen könnt. Wir bitten euch lediglich, ab 22 Uhr draußen die Lautstärke anzupassen."
          },
          {
            question: "Wie ist die Parksituation vor Ort?",
            answer: "Es gibt ausreichend kostenlose Parkplätze direkt am Haus für die gesamte Gruppe."
          },
          {
            question: "Gibt es einen Lieferservice, der bis zum Haus kommt?",
            answer: "Ja, die gängigen Lieferdienste für Pizza & Co. kennen unsere Adresse und liefern problemlos."
          },
          {
            question: "Wie weit ist der nächste Supermarkt entfernt?",
            answer: "Der nächste große Supermarkt ist nur ca. 5 Autominuten entfernt."
          },
          {
            question: "Ist die Location auch für ein E-Sport Bootcamp in NRW geeignet?",
            answer: (
              <>
                Ja, perfekt. Die professionelle Infrastruktur und die gute Erreichbarkeit machen es zur idealen Bootcamp-Location für Teams aus ganz NRW und darüber hinaus.{" "}
                <a href="/bootcamp-esport" className="text-brand-from hover:underline inline-block mt-2">Mehr zur E-Sport Bootcamp Location →</a>
              </>
            )
          }
        ]}
      />

      {/* Final CTA */}
      <section className="relative py-24 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
            Bereit für euer Heimspiel in NRW?
          </h2>
          <p className="text-xl text-fg-muted mb-10">
            Sichert euch euren Termin in der perfekten Gaming Location für alle aus Nordrhein-Westfalen.
          </p>
          {BOOKING_ENABLED && (
            <div className="flex justify-center">
              <Button href="/buchen" variant="primary" size="lg">
                Verfügbarkeit prüfen & Buchen
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
