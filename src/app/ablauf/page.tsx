import { Metadata } from "next";
import { ArrowRight, CalendarDays, CheckCircle2, KeySquare, Gamepad, Sparkles, Download, ShieldAlert, ListChecks, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Ablauf & Regeln | Pulse LAN-Haus",
  description: "Vom Buchen bis zur Abreise: Pincode-Check-in, vorbereitete Gaming-Plätze, Fairplay-Regeln und Checkliste. Kein Orga-Stress, maximale Spielzeit.",
};

export default function AblaufPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-from/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-to/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="max-w-4xl font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-headline mb-6 tracking-display">
            Ankommen, einloggen, loszocken.{" "}
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              So einfach ist euer Wochenende.
            </span>
          </h1>
          
          <p className="max-w-2xl font-body text-xl text-fg-muted leading-body">
            Kein Orga-Stress, keine komplizierten Übergaben. Wir haben den kompletten Ablauf so optimiert, dass ihr maximale Zeit zum Zocken habt.
          </p>
        </div>
      </section>

      {/* Der Ablauf */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Der Ablauf: Vom Buchen bis zur Abreise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-outline-strong -translate-x-1/2" />
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 ml-20 md:ml-0 pr-0 md:pr-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    1. Verfügbarkeit prüfen & buchen
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Prüft in unserem Kalender, ob euer Wunschtermin noch frei ist, und sichert euch euren Slot. Nach der bestätigten Buchung ist das Haus exklusiv für euch reserviert.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-from group-hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all order-1 md:order-2">
                  <CalendarDays className="w-5 h-5 text-brand-from" />
                </div>
                <div className="md:w-5/12 order-3 hidden md:block" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 order-1 hidden md:block" />
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-to group-hover:shadow-[0_0_15px_hsl(276_100%_56%/0.4)] transition-all order-1 md:order-2">
                  <KeySquare className="w-5 h-5 text-brand-to" />
                </div>
                <div className="md:w-5/12 text-left order-2 md:order-3 ml-20 md:ml-0 pl-0 md:pl-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    2. Ankommen & Haus übernehmen
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Ein paar Tage vor der Anreise erhaltet ihr euren persönlichen Pincode. Das ist euer Schlüssel für das Wochenende. Kein Warten auf einen Gastgeber, kein Stress. Ihr kommt an und könnt direkt rein.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 ml-20 md:ml-0 pr-0 md:pr-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    3. Setup & Start
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Euer Platz ist vorbereitet: Tisch, Stuhl, 240-Hz-Monitor und alle nötigen Kabel warten auf euch. Ihr müsst nur noch euer eigenes Gear anschließen. In wenigen Minuten seid ihr startklar für die erste Runde.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-from group-hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all order-1 md:order-2">
                  <Gamepad className="w-5 h-5 text-brand-from" />
                </div>
                <div className="md:w-5/12 order-3 hidden md:block" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 order-1 hidden md:block" />
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-to group-hover:shadow-[0_0_15px_hsl(276_100%_56%/0.4)] transition-all order-1 md:order-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-to" />
                </div>
                <div className="md:w-5/12 text-left order-2 md:order-3 ml-20 md:ml-0 pl-0 md:pl-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    4. Euer Wochenende, eure Freiheit
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Das Haus ist euer privates Reich. Ihr entscheidet, wann gespielt, gegessen oder geschlafen wird. Es gibt keine Sperrstunde. Wir vertrauen auf euren gesunden Menschenverstand und einen respektvollen Umgang (siehe unsere Fairplay-Regeln).
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 ml-20 md:ml-0 pr-0 md:pr-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    5. Die Abreise
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Am Abreisetag packt ihr einfach euer Equipment zusammen, bringt den Müll raus und zieht die Tür hinter euch zu. Um die professionelle Endreinigung kümmern wir uns.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-success group-hover:shadow-[0_0_15px_hsl(146_72%_48%/0.4)] transition-all order-1 md:order-2">
                  <Sparkles className="w-5 h-5 text-success" />
                </div>
                <div className="md:w-5/12 order-3 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorbereitung & Fairplay */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Vorbereitung */}
            <div className="bg-elevated/40 border border-outline-default rounded-2xl p-8 lg:p-10 hover:border-brand-from/30 transition-colors shadow-lg">
              <h2 className="font-display text-3xl font-bold text-fg-headline mb-4">Vorbereitung: Euer Gameplan für maximale Spielzeit</h2>
              <p className="text-fg-muted text-lg mb-8">
                Gute Vorbereitung bedeutet mehr Zeit für den Grind. Klärt vorab im Team, welche Spiele ihr zocken wollt. So kann jeder die Games schon zu Hause herunterladen und patchen. Das spart am Anreisetag wertvolle Zeit und ihr könnt direkt loslegen.
              </p>
              <Button href="#" variant="secondary" size="md">
                <Download className="w-4 h-4 mr-2" />
                Planungsvorlage herunterladen
              </Button>
            </div>

            {/* Fairplay-Regeln */}
            <div className="bg-elevated/40 border border-brand-to/20 rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:border-brand-to/40 transition-colors shadow-lg">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-to/5 rounded-full blur-[40px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert className="w-8 h-8 text-brand-to" />
                  <h2 className="font-display text-3xl font-bold text-fg-headline">Unsere Fairplay-Regeln</h2>
                </div>
                <p className="text-fg-muted text-lg mb-6">
                  Wir hassen lange Regelwerke. Deshalb gibt es bei uns nur drei einfache Grundsätze:
                </p>
                <ol className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-brand-to/10 text-brand-to flex items-center justify-center font-bold shrink-0">1</div>
                    <p className="text-fg-muted"><strong className="text-fg-headline">Respektiert die Ausstattung:</strong> Behandelt alles (Monitore, Stühle etc.) so, als wäre es euer eigenes.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-brand-to/10 text-brand-to flex items-center justify-center font-bold shrink-0">2</div>
                    <p className="text-fg-muted"><strong className="text-fg-headline">Respektiert die Nachbarn:</strong> Ab 22 Uhr gilt draußen und bei offenen Fenstern eine angemessene Lautstärke. Drinnen könnt ihr natürlich weiterzocken.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-brand-to/10 text-brand-to flex items-center justify-center font-bold shrink-0">3</div>
                    <p className="text-fg-muted"><strong className="text-fg-headline">Rauchen verboten:</strong> Im gesamten Haus ist Rauchen nicht erlaubt.</p>
                  </li>
                </ol>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Checkliste */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-brand-from/10 border border-brand-from/20 flex items-center justify-center mx-auto mb-6">
              <ListChecks className="w-8 h-8 text-brand-from" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Checkliste: Die wichtigsten Dinge zum Mitnehmen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-background border border-outline-default rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-fg-headline mb-6 flex items-center gap-2 border-b border-outline-subtle pb-4">
                Das müsst ihr mitbringen
              </h3>
              <ul className="space-y-4">
                {[
                  "Deinen Gaming-PC oder Laptop",
                  "Deine Peripherie (Maus, Tastatur, Headset, Mauspad)",
                  "Stromkabel für deinen PC",
                  "Handtuch & Duschzeug",
                  "Bequeme Kleidung / Jogginghose",
                  "Hausschuhe",
                  "TK Pizza",
                  "Euren Lieblingskaffee",
                  "Snacks für die Nacht-Sessions",
                  "Ladekabel für dein Handy",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-fg-muted">
                    <div className="w-5 h-5 rounded-md bg-outline-strong flex items-center justify-center shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-outline-subtle">
                <Button href="#" variant="tertiary" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Ausführliche Checkliste herunterladen
                </Button>
              </div>
            </div>

            <div className="bg-elevated border border-success/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(46,204,113,0.05)]">
              <h3 className="font-heading text-xl font-bold text-success mb-6 flex items-center gap-2 border-b border-outline-subtle pb-4">
                <Check className="w-5 h-5" /> Das ist für euch da
              </h3>
              <ul className="space-y-4">
                {[
                  "Ein kompletter Gaming-Platz pro Person",
                  "Ein 240-Hz-WQHD-Monitor pro Platz",
                  "Ein DisplayPort-Kabel und eine 6er-Steckdosenleiste",
                  "Stabiles LAN an jedem Platz",
                  "Frische Bettwäsche",
                  "Voll ausgestattete Küche",
                  "Tee und die grundlegenden Gewürze",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-fg-muted">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
            Bereit für euer Wochenende?
          </h2>
          <p className="text-xl text-fg-muted mb-10">
            Prüft die Verfügbarkeit und sichert euch euren Slot.
          </p>
          {BOOKING_ENABLED && (
            <Button href="/buchen" variant="primary" size="lg">
              Verfügbarkeit prüfen
              <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
            </Button>
          )}
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Alles rund um den Ablauf"
        items={[
          {
            question: "Wann ist Check-in und Check-out?",
            answer: "Die genauen Zeiten für An- und Abreise werden euch im Buchungsprozess angezeigt. Wir versuchen, euch immer so viel Zeit wie möglich zu geben."
          },
          {
            question: "Müssen wir am Ende selbst putzen?",
            answer: "Nein. Die professionelle Endreinigung ist im Preis inbegriffen. Ihr müsst lediglich euren Müll in die dafür vorgesehenen Tonnen bringen und die Spülmaschine einmal laufen lassen."
          },
          {
            question: "Gibt es eine Kaution?",
            answer: "Ja, wir erheben eine Kaution, die ihr nach dem Wochenende vollständig zurückbekommt, wenn alles in Ordnung ist. Das ist Standard und dient als Sicherheit für beide Seiten."
          },
          {
            question: "Ist jemand vor Ort, wenn wir Hilfe brauchen?",
            answer: "Das Haus ist eine „gastgeberfreie Zone“, damit ihr komplett ungestört seid. Für technische Notfälle oder dringende Fragen erhaltet ihr aber eine Notfall-Nummer, unter der ihr uns erreichen könnt."
          },
          {
            question: "Dürfen wir eigene Getränke und Essen mitbringen?",
            answer: "Ja, absolut! Das Haus ist auf Selbstversorgung ausgelegt. Bringt mit, worauf ihr Lust habt."
          }
        ]}
      />

    </div>
  );
}
