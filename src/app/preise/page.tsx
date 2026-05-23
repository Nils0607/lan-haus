import { Metadata } from "next";
import { ArrowRight, ChevronRight, Check, X, Info, Calculator, CalendarClock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Preise & Kosten | Pulse LAN-Haus",
  description: "Transparente Preise pro Person und Nacht. Ab 44 € bei längeren Aufenthalten. Keine versteckten Kosten — inkl. Gaming-Setup, Haus und Nebenkosten.",
};

export default function PreisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-brand-from/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="max-w-4xl font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-headline mb-6 tracking-display">
            Fair & Transparent:{" "}
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              Die Kosten für euer Wochenende.
            </span>
          </h1>
          
          <p className="max-w-2xl font-body text-xl text-fg-muted leading-body">
            Keine komplizierten Pakete, keine versteckten Kosten. Bei uns seht ihr genau, was ihr bezahlt. Je länger ihr bleibt, desto günstiger wird es pro Person.
          </p>
        </div>
      </section>

      {/* Preisstruktur */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Unsere Preisstruktur: Flexibel & fair
            </h2>
            <p className="text-xl text-fg-muted">
              Der Preis wird pro Person und Nacht berechnet. So zahlt ihr nur für die Leute, die auch wirklich dabei sind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Table */}
            <div className="bg-elevated/80 border border-outline-default rounded-3xl overflow-hidden shadow-lg">
              <div className="bg-surface/50 border-b border-outline-subtle p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-fg-muted uppercase tracking-wider">Preis pro Person & Nacht</h3>
              </div>
              <table className="w-full text-left">
                <tbody className="divide-y divide-outline-subtle">
                  {[
                    { nights: "2 Nächte", price: "59 €", isBest: false },
                    { nights: "3 Nächte", price: "54 €", isBest: false },
                    { nights: "4 Nächte", price: "49 €", isBest: false },
                    { nights: "Ab 5 Nächten", price: "44 €", isBest: true },
                  ].map((row, i) => (
                    <tr key={i} className={`transition-colors ${row.isBest ? "bg-brand-from/5 relative" : "hover:bg-surface/30"}`}>
                      {row.isBest && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-from" />
                      )}
                      <td className="px-8 py-5 text-fg-headline font-bold text-lg">{row.nights}</td>
                      <td className="px-8 py-5 text-right font-display text-2xl font-bold text-fg-body">
                        {row.isBest ? <span className="text-brand-from drop-shadow-[0_0_8px_var(--color-brand-glow)]">{row.price}</span> : row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6 bg-surface/50 border-t border-outline-subtle flex items-start gap-3 text-fg-muted">
                <Info className="w-5 h-5 shrink-0 text-brand-to" />
                <p className="text-sm leading-relaxed">
                  <strong className="text-fg-headline">Zusätzlich:</strong> Einmalig pro Buchung eine Reinigungspauschale von 150 €.<br />
                  <strong className="text-fg-headline">Mindestbelegung:</strong> Für eine Buchung sind mindestens 6 Personen erforderlich.
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-surface border border-outline-default rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-brand-to/10 rounded-full blur-[40px] group-hover:bg-brand-to/20 transition-colors" />
              <h3 className="font-heading text-xl font-bold text-fg-headline mb-4">Ihr seid eine kleinere Gruppe?</h3>
              <p className="text-fg-muted text-lg mb-6 leading-relaxed">
                Kein Problem! Schreibt uns einfach eine Mail für eine individuelle Anfrage. Manchmal finden wir eine Lösung, auch wenn ihr keine 6 Personen seid.
              </p>
              <Button href="mailto:anfrage@pulse-lan.de" variant="secondary" size="md">
                Individuelle Anfrage stellen
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Inklusive & Exklusive */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Inklusive */}
            <div className="bg-elevated border border-success/20 rounded-3xl p-8 lg:p-10 shadow-[0_0_30px_rgba(46,204,113,0.05)]">
              <h2 className="font-display text-2xl font-bold text-success mb-2">Im Preis enthalten</h2>
              <p className="text-fg-muted mb-8 pb-6 border-b border-outline-subtle">Alles, was ihr für ein reibungsloses Erlebnis braucht:</p>
              <ul className="space-y-4">
                {[
                  "Exklusive Nutzung des kompletten Hauses nur für eure Gruppe",
                  "12 voll ausgestattete Gaming-Plätze (Tisch, Stuhl, 240-Hz-WQHD-Monitor)",
                  "Stabiles Gigabit-Netzwerk und eine für Dauerlast ausgelegte Stromversorgung",
                  "Nutzung der voll ausgestatteten Küche inklusive Pizzaofen",
                  "Schlafplätze für bis zu 12 Personen",
                  "Frische Bettwäsche für alle Betten",
                  "Nutzung der Lounge mit Beamer und Konsolen (PS5 & Switch)",
                  "Alle Nebenkosten wie Strom, Wasser und Heizung",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-fg-muted">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exklusive */}
            <div className="bg-elevated border border-outline-default rounded-3xl p-8 lg:p-10">
              <h2 className="font-display text-2xl font-bold text-fg-headline mb-2">Zusatzkosten & Kaution</h2>
              <p className="text-fg-muted mb-8 pb-6 border-b border-outline-subtle">Volle Transparenz, was nicht inklusive ist:</p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-fg-body block mb-1">Endreinigung</strong>
                    <span className="text-fg-muted">Diese wird mit einer Pauschale von 150 € pro Buchung berechnet.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-fg-body block mb-1">Verpflegung</strong>
                    <span className="text-fg-muted">Ihr organisiert euer Essen und eure Getränke selbst.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-fg-body block mb-1">Handtücher</strong>
                    <span className="text-fg-muted">Diese bringt bitte jeder von euch selbst mit.</span>
                  </div>
                </li>
              </ul>

              <div className="bg-surface/50 border border-outline-subtle rounded-xl p-6">
                <strong className="text-fg-headline block mb-2">Sicherheit: Die Kaution</strong>
                <p className="text-sm text-fg-muted leading-relaxed">
                  Wir erheben eine Kaution als Sicherheit. Das ist Standard und schützt beide Seiten. Wenn ihr das Haus und die Ausstattung pfleglich behandelt, bekommt ihr die Kaution nach der Abreise natürlich vollständig und umgehend zurück.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Beispielrechnung */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-brand-from/10 border border-brand-from/20 flex items-center justify-center mx-auto mb-6 shadow-[var(--glow-brand)]">
              <Calculator className="w-8 h-8 text-brand-from" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Beispielrechnung: Was kostet der Spaß pro Person?
            </h2>
            <p className="text-xl text-fg-muted">
              Um es greifbar zu machen – hier ein typisches Wochenende (Fr–So) für eine Gruppe von 10 Personen:
            </p>
          </div>

          <div className="bg-elevated border border-outline-default rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-brand-from to-brand-to opacity-50" />
            
            <table className="w-full text-left mb-8">
              <tbody className="divide-y divide-outline-subtle">
                <tr>
                  <td className="py-4 text-fg-muted text-lg">Unterkunft (10 Personen × 2 Nächte × 59 €)</td>
                  <td className="py-4 text-right font-mono text-lg text-fg-body">1.180 €</td>
                </tr>
                <tr>
                  <td className="py-4 text-fg-muted text-lg">Reinigung</td>
                  <td className="py-4 text-right font-mono text-lg text-fg-body">+ 150 €</td>
                </tr>
                <tr>
                  <td className="py-6 text-fg-headline font-bold text-xl">Gesamtkosten</td>
                  <td className="py-6 text-right font-display text-2xl font-bold text-brand-from">1.330 €</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-surface/50 border border-outline-default rounded-xl p-6 text-center">
              <p className="text-lg text-fg-muted">
                Das sind nur <strong className="text-fg-headline text-xl">133 € pro Person</strong> für das komplette Wochenende.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stornierung */}
      <section className="relative py-24 z-10 bg-background border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <CalendarClock className="w-10 h-10 text-fg-muted mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-fg-headline mb-6">
            Stornierung: Pläne ändern sich
          </h2>
          <p className="text-lg text-fg-muted leading-relaxed mb-8">
            Manchmal kommt etwas dazwischen, das kennen wir. Bis 8 Wochen vor Anreise könnt ihr kostenlos stornieren. Danach müssen wir leider einen Teil des Preises berechnen. Alle genauen Details dazu findet ihr transparent in unseren AGB.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Fragen rund um Preis & Bezahlung"
        items={[
          {
            question: "Wie wird bezahlt?",
            answer: "Nach der Buchung ist eine Anzahlung fällig, um den Termin fest für euch zu blocken. Der Restbetrag wird vor der Anreise fällig."
          },
          {
            question: "Was passiert, wenn wir weniger als 6 Personen sind?",
            answer: "Eine direkte Buchung ist ab 6 Personen möglich. Seid ihr eine kleinere Gruppe, schreibt uns bitte eine E-Mail an anfrage@pulse-lan.de für ein individuelles Angebot."
          },
          {
            question: "Ist die Endreinigung inklusive?",
            answer: "Nein. Die Endreinigung kostet pauschal 150 € pro Buchung. Dafür könnt ihr am Abreisetag einfach eure Sachen packen und los, wir kümmern uns um den Rest."
          },
          {
            question: "Gibt es Rabatte für längere Aufenthalte?",
            answer: "Ja! Unser Preissystem ist bereits so aufgebaut. Ab der dritten Nacht sinkt der Preis pro Person und Nacht deutlich. Die genaue Staffelung siehst du oben."
          },
          {
            question: "Sind die Nebenkosten wie Strom und Wasser abgedeckt?",
            answer: "Ja, komplett. Ihr müsst euch keine Sorgen über eine Nachzahlung machen, egal wie lange eure Rechner laufen."
          }
        ]}
      />

      {/* Final CTA */}
      <section className="relative py-24 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
            Preis passt?
          </h2>
          <p className="text-xl text-fg-muted mb-10">
            Prüft die Verfügbarkeit für euren Wunschtermin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {BOOKING_ENABLED && (
              <Button href="/buchen" variant="primary" size="lg">
                Verfügbarkeit prüfen
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            )}
            <Button href="/ablauf" variant="secondary" size="lg">
              Ablauf ansehen
              <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
