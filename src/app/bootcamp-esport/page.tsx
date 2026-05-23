import type { Metadata } from "next";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Bootcamp für E-Sport Teams | Pulse LAN-Haus",
  description: "Professionelle E-Sport Bootcamp Location in NRW. 12 identische Plätze, Low-Latency-Netzwerk, exklusives Haus — Fokus statt Infrastruktur-Roulette.",
};

export default function BootcampEsportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-from/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-to/20 rounded-full blur-[150px] mix-blend-screen" />
          
          {/* Diagonal vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background/80" />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-20 pb-32">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-outline-default shadow-[var(--glow-brand)] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-4 h-4 text-brand-from" />
            <span className="text-label font-bold tracking-label uppercase text-brand-from">
              E-Sport Bootcamp · NRW
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl font-display text-display font-bold leading-display tracking-display text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
            Eure E-Sport Bootcamp Location ohne Kompromisse.<br />
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              Voller Fokus. Zero Lag.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl text-h2 font-body text-fg-muted leading-body animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            Vergesst unzuverlässiges WLAN und flackernde Sicherungen. Bei uns mietet ihr ein komplettes Haus, das als professionelle Gaming-Unterkunft für intensive Scrims und Strategie-Sessions konzipiert ist. <strong className="text-fg-headline font-medium">Ankommen, anschließen, besser werden.</strong>
          </p>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 left-0 right-0 w-full flex justify-center opacity-80 animate-in fade-in duration-1000 delay-700 fill-mode-both">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 text-label font-mono uppercase tracking-label text-fg-muted">
            <div className="flex flex-col items-center">
              <span className="text-brand-from font-bold text-xl drop-shadow-[0_0_8px_var(--color-brand-glow)]">12</span>
              <span className="mt-1">Gaming-Plätze</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-outline-strong" />
            <div className="flex flex-col items-center">
              <span className="text-brand-from font-bold text-xl drop-shadow-[0_0_8px_var(--color-brand-glow)]">240Hz</span>
              <span className="mt-1">Pro-Monitore</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-outline-strong" />
            <div className="flex flex-col items-center">
              <span className="text-brand-from font-bold text-xl drop-shadow-[0_0_8px_var(--color-brand-glow)]">1 Gbit/s</span>
              <span className="mt-1">Glasfaser (Ziel)</span>
            </div>
          </div>
        </div>
      </section>
      {/* Proof Section */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-block px-3 py-1 rounded-full bg-elevated border border-outline-subtle text-fg-muted text-sm font-bold tracking-wider uppercase mb-6">
              Proof sofort
            </span>
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Keine Ausreden. Nur Performance.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
            <p className="text-fg-muted leading-body text-lg mt-6 max-w-2xl mx-auto">
              Wir wissen, was zählt. Deshalb ist unsere Infrastruktur nicht „ganz gut“, sondern kompromisslos auf Low-Latency-Gaming ausgelegt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Item 1 */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-xl p-8 transition-colors hover:border-brand-from/50 hover:bg-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-outline-strong flex items-center justify-center mb-6 text-brand-from shadow-[var(--glow-brand)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="16" height="16" x="4" y="4" rx="2" ry="2"/><rect width="6" height="6" x="9" y="9" rx="1" ry="1"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-4">
                  Netzwerk auf Pro-Niveau
                </h3>
                <p className="text-fg-muted leading-body">
                  <strong className="text-fg-body">1 Gbit/s Glasfaser (Ziel)</strong>, zentraler 24-Port-Gigabit-Switch und CAT-7-Verkabelung zu jedem einzelnen Platz. Das ist die Basis für euer Training.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-xl p-8 transition-colors hover:border-brand-to/50 hover:bg-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-to/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-outline-strong flex items-center justify-center mb-6 text-brand-to shadow-[0_0_12px_2px_hsl(276_100%_56%/0.4)]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-4">
                  Stabile Stromversorgung
                </h3>
                <p className="text-fg-muted leading-body">
                  Die gesamte Elektrik ist für die <strong className="text-fg-body">Dauerlast von 12 High-End-Setups</strong> ausgelegt. Hier fliegt keine Sicherung, nur weil die Mikrowelle läuft.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-xl p-8 transition-colors hover:border-brand-from/50 hover:bg-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-outline-strong flex items-center justify-center mb-6 text-brand-from shadow-[var(--glow-brand)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-4">
                  Identische Pro-Monitore
                </h3>
                <p className="text-fg-muted leading-body">
                  An jedem der 12 Plätze: <strong className="text-fg-body">27″ WQHD, 240 Hz, 0,5 ms Reaktionszeit</strong>. Gleiche Bedingungen für alle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trainings-Ready Setup */}
      <section className="relative py-24 lg:py-32 z-10 bg-background overflow-hidden border-t border-outline-subtle">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Ein Setup, gebaut für produktives Training
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-to to-brand-from mx-auto mt-6 rounded-full" />
            <p className="text-fg-muted leading-body text-lg mt-6 max-w-2xl mx-auto">
              Ein erfolgreiches Bootcamp braucht mehr als nur gute Server. Es braucht ein Umfeld, das Konzentration fördert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Item 1 */}
            <div className="group relative bg-surface border border-outline-default rounded-2xl p-8 lg:p-10 overflow-hidden transition-all hover:border-brand-from/40 hover:bg-elevated/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-from/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-brand-from/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-from/10 border border-brand-from/30 flex items-center justify-center mb-6 text-brand-from font-display font-bold text-xl">
                  1
                </div>
                <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">
                  Fokus durch Exklusivität
                </h3>
                <p className="text-fg-muted leading-body text-lg">
                  Das Haus gehört euch allein. Keine anderen Gäste, keine Ablenkungen. Nur ihr, euer Gameplan und das Ziel, besser zu werden.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative bg-surface border border-outline-default rounded-2xl p-8 lg:p-10 overflow-hidden transition-all hover:border-brand-to/40 hover:bg-elevated/50">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-to/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 group-hover:bg-brand-to/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-to/10 border border-brand-to/30 flex items-center justify-center mb-6 text-brand-to font-display font-bold text-xl">
                  2
                </div>
                <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">
                  Raum für Analyse & Strategie
                </h3>
                <p className="text-fg-muted leading-body text-lg">
                  Lounge mit großem 4K-Beamer für VOD-Analyse. Taktiken abseits der PCs in ruhiger Atmosphäre.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group relative bg-surface border border-outline-default rounded-2xl p-8 lg:p-10 overflow-hidden transition-all hover:border-success/40 hover:bg-elevated/50">
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-success/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 group-hover:bg-success/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mb-6 text-success font-display font-bold text-xl">
                  3
                </div>
                <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">
                  Regeneration für den nächsten Tag
                </h3>
                <p className="text-fg-muted leading-body text-lg">
                  Funktionale Schlafplätze und voll ausgestattete Küche — HP für die nächste Session wieder voll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Standardisierung */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-from/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline mb-6">
                Gleiche Bedingungen, echte Vergleichbarkeit
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mb-8 rounded-full" />
              
              <div className="space-y-6 text-fg-muted leading-body text-lg">
                <p>
                  Im Wettkampf entscheiden Millisekunden. Im Training entscheidet ein faires und vergleichbares Setup über den Lernerfolg.
                </p>
                <p>
                  Bei uns spielt jeder auf einem identischen 240-Hz-Monitor und einem ergonomischen Gaming-Stuhl. Das eliminiert Hardware-Unterschiede als Ausrede und sorgt dafür, dass sich euer Training voll auf Skill, Taktik und Kommunikation konzentrieren kann.
                </p>
              </div>

              <div className="mt-10">
                <Button href="/ausstattung" variant="primary" size="md">
                  Komplette Specs
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-2xl border border-outline-default bg-elevated overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-from/20 to-brand-to/20 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4 items-end">
                    <div className="w-24 h-32 bg-surface border border-brand-from/30 rounded-lg shadow-[0_0_15px_var(--color-brand-glow)]" />
                    <div className="w-24 h-32 bg-surface border border-brand-from/30 rounded-lg shadow-[0_0_15px_var(--color-brand-glow)]" />
                    <div className="w-24 h-32 bg-surface border border-brand-from/30 rounded-lg shadow-[0_0_15px_var(--color-brand-glow)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ablauf */}
      <section className="relative py-24 lg:py-32 z-10 bg-background overflow-hidden border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Minimale Downtime. Maximale Trainingszeit.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
            <p className="text-fg-muted leading-body text-lg mt-6 max-w-2xl mx-auto">
              Eure Zeit ist kostbar. Deshalb haben wir den Prozess von Ankunft bis „live im Game“ maximal optimiert.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-outline-strong -translate-x-1/2" />
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 ml-20 md:ml-0 pr-0 md:pr-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    Ankommen & Einloggen
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Per Pincode betretet ihr die Instanz — wann immer ihr wollt.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-from group-hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all order-1 md:order-2">
                  <span className="font-display font-bold text-brand-from">1</span>
                </div>
                <div className="md:w-5/12 order-3 hidden md:block" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 order-1 hidden md:block" />
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-to group-hover:shadow-[0_0_15px_hsl(276_100%_56%/0.4)] transition-all order-1 md:order-2">
                  <span className="font-display font-bold text-brand-to">2</span>
                </div>
                <div className="md:w-5/12 text-left order-2 md:order-3 ml-20 md:ml-0 pl-0 md:pl-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    Setup anschließen
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Euer Platz ist vorbereitet. Tisch, Stuhl, Monitor, Kabel — alles steht. Nur euer eigenes Gear anschließen.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 ml-20 md:ml-0 pr-0 md:pr-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    Grinden
                  </h3>
                  <p className="text-fg-muted leading-body">
                    In wenigen Minuten startklar. Keine stundenlange Fehlersuche, kein Kabelchaos.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-success group-hover:shadow-[0_0_15px_hsl(146_72%_48%/0.4)] transition-all order-1 md:order-2">
                  <span className="font-display font-bold text-success">3</span>
                </div>
                <div className="md:w-5/12 order-3 hidden md:block" />
              </div>
            </div>
          </div>

          <div className="mt-20 text-center flex justify-center">
            <Button href="/ablauf" variant="tertiary" size="md">
              Ablauf & Regeln im Detail
              <ArrowRight className="w-5 h-5 text-brand-from transition-transform group-hover/button:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-to/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <h2 className="font-display text-h1 md:text-5xl font-bold text-fg-headline mb-6">
            Bereit für euer nächstes Bootcamp?
          </h2>
          <p className="text-fg-muted leading-body text-xl mb-12">
            Prüft die Verfügbarkeit und reserviert das Haus exklusiv für euer Team.
          </p>
          
          {BOOKING_ENABLED && (
            <Button href="/buchen" variant="primary" size="lg">
              Bootcamp-Verfügbarkeit prüfen
              <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
            </Button>
          )}
        </div>
      </section>
      {/* FAQ */}
      <FaqSection
        title="Fragen, die euer Team-Manager hat"
        items={[
          {
            question: "Wie stabil ist das Internet wirklich? Können wir mit konstant niedrigem Ping rechnen?",
            answer: "Ja. Die gesamte Netzwerk-Infrastruktur ist auf stabiles Low-Latency-Gaming ausgelegt. Wir zielen auf einen Glasfaseranschluss ab und nutzen ausschließlich hochwertige Switches und CAT-7-Verkabelung."
          },
          {
            question: "Was passiert, wenn technische Probleme auftreten?",
            answer: "Obwohl wir auf maximale Stabilität setzen, gibt es für den Notfall eine Hotline, über die ihr uns erreichen könnt."
          },
          {
            question: "Gibt es einen separaten Raum für Taktikbesprechungen?",
            answer: "Die Lounge mit Sofas und großem Beamer eignet sich perfekt für VOD-Reviews und Strategie-Talks abseits der Gaming-Plätze."
          },
          {
            question: "Ist die Location für ein E-Sport Bootcamp in NRW gut erreichbar?",
            answer: "Ja, die zentrale Lage in NRW sorgt für eine unkomplizierte Anreise für Teams aus der ganzen Region und darüber hinaus."
          },
          {
            question: "Können wir die Tische für unser Team-Setup anders anordnen?",
            answer: "Die Tische sind für eine optimale Verkabelung und Platzausnutzung fest positioniert. Für spezielle Wünsche sprecht uns aber gerne im Vorfeld an."
          }
        ]}
      />
    </div>
  );
}
