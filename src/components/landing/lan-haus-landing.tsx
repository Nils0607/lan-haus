import { 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Users, 
  Monitor, 
  Banknote,
  Crown,
  Gamepad2,
  Network,
  PlugZap,
  Coffee,
  Swords,
  Trophy,
  MonitorPlay,
  Wifi,
  Armchair,
  ChefHat,
  CalendarDays,
  CheckCircle2,
  KeySquare,
  Gamepad,
  Sparkles,
  Info,
  HardHat,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

export function LanHausLanding() {
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
          
          {/* Sub-Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-outline-default shadow-[var(--glow-brand)] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-4 h-4 text-brand-from" />
            <span className="text-label font-bold tracking-label uppercase text-brand-from">
              High-End Infrastruktur
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl font-display text-display font-bold leading-display tracking-display text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
            Pulse LAN Haus mieten.<br />
            Nur für euch.<br />
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              Bis zu 12 Personen.
            </span>
          </h1>

          {/* Subline */}
          <p className="max-w-3xl text-h2 font-body text-fg-muted leading-body mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            Ihr bringt eure Rechner. <strong className="text-fg-headline font-medium">Pulse LAN-Haus</strong> stellt alles andere: 12 Gaming-Plätze, professionelles Netzwerk, 240-Hz-Monitore, Schlafplätze, Küche.{" "}
            <strong className="text-fg-headline font-medium">Instanz betreten, anschließen, loslegen.</strong>
          </p>

          {/* Coming-soon notice */}
          {!BOOKING_ENABLED && (
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400 fill-mode-both max-w-2xl w-full">
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-5 rounded-2xl border border-[#FF6B6B]/40 bg-[#FF6B6B]/10 backdrop-blur-sm overflow-hidden">
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/5 to-transparent pointer-events-none" />
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FF6B6B]/15 border border-[#FF6B6B]/30 flex items-center justify-center">
                  <HardHat className="w-5 h-5 text-[#FF6B6B]" aria-hidden />
                </div>
                <div className="text-left relative z-10">
                  <p className="font-bold text-[#FF6B6B] text-base leading-snug">
                    Location wird momentan aufgebaut
                  </p>
                  <p className="text-[#FF6B6B]/80 text-sm mt-1 leading-relaxed">
                    Das Pulse LAN-Haus öffnet in den nächsten Monaten — die Infrastruktur ist in vollem Aufbau. Schaut bald wieder rein oder merkt euch die Seite für euren ersten Slot.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-5 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
            {BOOKING_ENABLED && (
              <Button href="/buchen" variant="primary" size="lg">
                Jetzt buchen
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            )}

            <Button href="/ausstattung" variant="secondary" size="lg">
              Ausstattung ansehen
              <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom Tech Stats */}
        <div className="absolute bottom-12 left-0 right-0 w-full flex justify-center opacity-80 animate-in fade-in duration-1000 delay-700 fill-mode-both">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 text-label font-mono uppercase tracking-label text-fg-muted">
            <div className="flex flex-col items-center">
              <span className="text-brand-from font-bold text-xl drop-shadow-[0_0_8px_var(--color-brand-glow)]">10G</span>
              <span className="mt-1">Sym. Uplink</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-outline-strong" />
            <div className="flex flex-col items-center">
              <span className="text-brand-from font-bold text-xl drop-shadow-[0_0_8px_var(--color-brand-glow)]">240Hz</span>
              <span className="mt-1">Monitore</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-outline-strong" />
            <div className="flex flex-col items-center">
              <span className="text-brand-from font-bold text-xl drop-shadow-[0_0_8px_var(--color-brand-glow)]">12</span>
              <span className="mt-1">Plätze</span>
            </div>
          </div>
        </div>
      </section>

      {/* Das Wichtigste auf einen Blick */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Das Wichtigste auf einen Blick
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Kachel 1 */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-xl p-8 transition-colors hover:border-brand-from/50 hover:bg-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-outline-strong flex items-center justify-center mb-6 text-brand-from shadow-[var(--glow-brand)]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-4">
                  Für wie viele?
                </h3>
                <p className="text-fg-muted leading-body">
                  Das Haus ist exklusiv für eure Gruppe — <strong className="text-fg-body">bis zu 12 Personen</strong>. Keine fremden Gäste, kein Parallelbetrieb.
                </p>
              </div>
            </div>

            {/* Kachel 2 */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-xl p-8 transition-colors hover:border-brand-from/50 hover:bg-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-outline-strong flex items-center justify-center mb-6 text-brand-to shadow-[0_0_12px_2px_hsl(276_100%_56%/0.4)]">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-4">
                  BYO-PC. Alles andere steht.
                </h3>
                <p className="text-fg-muted leading-body">
                  Ihr bringt euren eigenen Rechner — mit eurem vertrauten Setup, euren Games, euren Einstellungen. Monitore, Tische, Stühle, Kabel, Netzwerk — alles ist bereit. <strong className="text-fg-body">Anschließen, loslegen.</strong>
                </p>
              </div>
            </div>

            {/* Kachel 3 */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-xl p-8 transition-colors hover:border-brand-from/50 hover:bg-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-outline-strong flex items-center justify-center mb-6 text-success shadow-[0_0_12px_2px_hsl(146_72%_48%/0.4)]">
                  <Banknote className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-4">
                  Was kostet das grob?
                </h3>
                <p className="text-fg-muted leading-body mb-6">
                  Der Preis liegt bei einem Wochenende bei <strong className="text-fg-body">59 € pro Person</strong> und kann je nach Aufenthaltsdauer noch günstiger werden.
                </p>
                <Button href="/preise" variant="secondary" size="sm">
                  Zur Preisübersicht
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Gruppen immer wieder buchen */}
      <section className="relative py-24 lg:py-32 z-10 bg-background overflow-hidden border-t border-outline-subtle">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Was Pulse LAN-Haus bietet
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-to to-brand-from mx-auto mt-6 rounded-full" />
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
            
            {/* USP 1: Exklusivität */}
            <div className="group relative md:col-span-3 bg-surface border border-outline-default rounded-2xl p-8 lg:p-10 overflow-hidden transition-all hover:border-brand-from/40 hover:bg-elevated/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-from/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-brand-from/10 transition-colors" />
              <div className="relative z-10">
                <Crown className="w-10 h-10 text-brand-from mb-6 drop-shadow-[0_0_15px_var(--color-brand-glow)]" />
                <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">
                  Exklusivität:<br />
                  Das Haus gehört nur euch.
                </h3>
                <p className="text-fg-muted leading-body text-lg">
                  Kein Teilen, kein Warten, keine fremden Leute. Für die gesamte Dauer eures Aufenthalts ist das Haus exklusiv für eure Gruppe reserviert.
                </p>
              </div>
            </div>

            {/* USP 2: BYO-Prinzip */}
            <div className="group relative md:col-span-3 bg-surface border border-outline-default rounded-2xl p-8 lg:p-10 overflow-hidden transition-all hover:border-brand-to/40 hover:bg-elevated/50">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-to/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 group-hover:bg-brand-to/10 transition-colors" />
              <div className="relative z-10">
                <Gamepad2 className="w-10 h-10 text-brand-to mb-6 drop-shadow-[0_0_15px_hsl(276_100%_56%/0.4)]" />
                <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">
                  BYO-Prinzip:<br />
                  Euer Setup, eure Regeln.
                </h3>
                <p className="text-fg-muted leading-body text-lg">
                  Ihr spielt auf eurem eigenen Rechner. Eure Games, eure Einstellungen, eure Maus — alles genau so, wie ihr es kennt. Wir stellen die Infrastruktur drum herum. <strong className="text-fg-body">Anschließen, direkt loslegen.</strong>
                </p>
              </div>
            </div>

            {/* USP 3: Professionelle Infrastruktur */}
            <div className="group relative md:col-span-2 bg-surface border border-outline-default rounded-2xl p-8 transition-all hover:border-brand-from/30 hover:bg-elevated/50">
              <div className="relative z-10">
                <Network className="w-8 h-8 text-brand-from mb-5" />
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-3">
                  Professionelle Infrastruktur: Netzwerk und Strom, die mithalten.
                </h3>
                <p className="text-fg-muted leading-body">
                  Glasfaser, 24-Port-Gigabit-Switch, CAT-7-Direktverkabelung an jedem Platz. Die Elektrik ist von Grund auf für 12 High-End-Gaming-Setups ausgelegt — stabil, zuverlässig, ohne Kompromisse.
                </p>
              </div>
            </div>

            {/* USP 4: Schlüsselfertig */}
            <div className="group relative md:col-span-2 bg-surface border border-outline-default rounded-2xl p-8 transition-all hover:border-success/30 hover:bg-elevated/50">
              <div className="relative z-10">
                <PlugZap className="w-8 h-8 text-success mb-5 drop-shadow-[0_0_10px_hsl(146_72%_48%/0.3)]" />
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-3">
                  Schlüsselfertig:<br />
                  Kein Aufbau. Kein Kabelchaos. Kein Stress.
                </h3>
                <p className="text-fg-muted leading-body">
                  Alles steht, wenn ihr ankommt. Check-in per Pincode, Plätze vorkonfiguriert, Kabel liegen bereit. Der Orga-Aufwand einer privaten LAN entfällt komplett.
                </p>
              </div>
            </div>

            {/* USP 5: Autonomie */}
            <div className="group relative md:col-span-2 bg-surface border border-outline-default rounded-2xl p-8 transition-all hover:border-brand-to/30 hover:bg-elevated/50">
              <div className="relative z-10">
                <Coffee className="w-8 h-8 text-brand-to mb-5" />
                <h3 className="font-heading text-xl font-bold text-fg-headline mb-3">
                  Autonomie:<br />
                  Kein Personal vor Ort. Volle Freiheit.
                </h3>
                <p className="text-fg-muted leading-body">
                  Ihr seid unter euch. Keine Gastgeber, die durch die Tür schauen. Ihr entscheidet, wann ihr zockt, wann ihr eure HP in unserer Chill-Area regeneriert oder wann ihr euch eine Pizza reinschmeißt.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Für wen ist das Gaming Haus gemacht? */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Für wen ist Pulse LAN-Haus gemacht?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
            {/* Kachel 1: Gamer & Freundeskreise */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-2xl p-8 lg:p-10 overflow-hidden transition-all hover:border-brand-from/50 hover:bg-elevated shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-surface border border-outline-strong flex items-center justify-center mb-8 text-brand-from shadow-[var(--glow-brand)]">
                  <Swords className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl text-brand-from mb-2 tracking-wide uppercase">
                  Gamer & Freundeskreise
                </h3>
                <h4 className="font-display text-2xl font-bold text-fg-headline mb-4">
                  Einfach wieder zusammen zocken.
                </h4>
                <p className="text-fg-muted leading-body text-lg mb-8 flex-grow">
                  Ob ihr euch seit Jahren kennt oder bisher nur aus dem Voice-Chat — das Gefühl ist dasselbe: Rechner aufbauen, loslegen, den Rest der Welt vergessen. Früher hieß das Kabelchaos und drei Stunden Aufbau. <strong className="text-fg-body">Heute heißt es LAN Haus mieten und es kann direkt losgehen.</strong>
                </p>
                <Button
                  href="/gaming-wochenende-freunde"
                  variant="secondary"
                  size="sm"
                  className="uppercase tracking-wider"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Kachel 2: E-Sport-Teams & Clans */}
            <div className="group relative bg-elevated/50 border border-outline-default rounded-2xl p-8 lg:p-10 overflow-hidden transition-all hover:border-brand-to/50 hover:bg-elevated shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-to/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-surface border border-outline-strong flex items-center justify-center mb-8 text-brand-to shadow-[0_0_12px_2px_hsl(276_100%_56%/0.4)]">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl text-brand-to mb-2 tracking-wide uppercase">
                  E-Sport-Teams & Clans
                </h3>
                <h4 className="font-display text-2xl font-bold text-fg-headline mb-4">
                  Bootcamp, Teambuilding oder einfach mal zusammen spielen
                </h4>
                <p className="text-fg-muted leading-body text-lg mb-8 flex-grow">
                  — ohne Kompromisse bei der Infrastruktur. <strong className="text-fg-body">High-End-Netzwerk, 12 identische Plätze, keine Ablenkungen.</strong>
                </p>
                <Button
                  href="/bootcamp-esport"
                  variant="secondary"
                  size="sm"
                  className="uppercase tracking-wider"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technik, die für Gamer gemacht ist */}
      <section className="relative py-24 lg:py-32 z-10 bg-background overflow-hidden border-t border-outline-subtle">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-from/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Left Col */}
            <div className="lg:w-1/3 flex flex-col items-start text-left">
              <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline mb-6">
                Technik, die für Gamer gemacht ist
              </h2>
              <p className="text-fg-muted leading-body text-lg mb-10">
                Das Haus ist von Grund auf auf die Bedürfnisse von Gaming-Gruppen ausgelegt — an jedem Platz, in jedem Detail.
              </p>
              
              <div className="p-6 bg-surface/50 border border-outline-default rounded-xl mb-10 inline-block backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <p className="font-mono text-sm uppercase tracking-wider text-brand-from leading-relaxed">
                  <strong className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Spawnen, Setup anschließen</strong><br />
                  — und die Quest kann beginnen.
                </p>
              </div>

              <Button href="/ausstattung" variant="primary" size="md">
                Vollständige Ausstattung ansehen
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            </div>

            {/* Right Col - Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Spec 1 */}
              <div className="bg-elevated/40 border border-outline-default p-8 rounded-2xl relative overflow-hidden group hover:border-brand-from/50 transition-colors shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-from to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-from/10 rounded-full blur-[40px] group-hover:bg-brand-from/20 transition-colors" />
                <MonitorPlay className="w-10 h-10 text-brand-from mb-6 drop-shadow-[0_0_10px_var(--color-brand-glow)]" />
                <p className="text-fg-body leading-body text-lg relative z-10">
                  <strong className="text-white">
                    {`27" WQHD-Monitor, 240 Hz, 0,5 ms`}
                  </strong> — an jedem der 12 Plätze identisch.
                </p>
              </div>

              {/* Spec 2 */}
              <div className="bg-elevated/40 border border-outline-default p-8 rounded-2xl relative overflow-hidden group hover:border-brand-to/50 transition-colors shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-to to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-to/10 rounded-full blur-[40px] group-hover:bg-brand-to/20 transition-colors" />
                <Wifi className="w-10 h-10 text-brand-to mb-6 drop-shadow-[0_0_10px_hsl(276_100%_56%/0.4)]" />
                <p className="text-fg-body leading-body text-lg relative z-10">
                  <strong className="text-white">Glasfaser-Internet, CAT-7-Direktverkabelung</strong>, Wi-Fi 6 im gesamten Haus.
                </p>
              </div>

              {/* Spec 3 */}
              <div className="bg-elevated/40 border border-outline-default p-8 rounded-2xl relative overflow-hidden group hover:border-brand-from/50 transition-colors shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-from to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-from/10 rounded-full blur-[40px] group-hover:bg-brand-from/20 transition-colors" />
                <Armchair className="w-10 h-10 text-brand-from mb-6 drop-shadow-[0_0_10px_var(--color-brand-glow)]" />
                <p className="text-fg-body leading-body text-lg relative z-10">
                  <strong className="text-white">Ergonomische Gaming-Stühle</strong>, 120×60 cm Tische, Kabelmanagement ab Werk.
                </p>
              </div>

              {/* Spec 4 */}
              <div className="bg-elevated/40 border border-outline-default p-8 rounded-2xl relative overflow-hidden group hover:border-brand-to/50 transition-colors shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-to to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-to/10 rounded-full blur-[40px] group-hover:bg-brand-to/20 transition-colors" />
                <ChefHat className="w-10 h-10 text-brand-to mb-6 drop-shadow-[0_0_10px_hsl(276_100%_56%/0.4)]" />
                <p className="text-fg-body leading-body text-lg relative z-10">
                  <strong className="text-white">Vollausgestattete Küche</strong> mit Pizzaofen, Kaffeemaschine und großem Kühlschrank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* So läuft euer Wochenende ab */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              So läuft euer Wochenende ab
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
                    Datum wählen
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Schaut, wann ihr Zeit habt, und bucht euer Wochenende direkt online. Schnell, unkompliziert, ohne Hin-und-Her.
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
                  <CheckCircle2 className="w-5 h-5 text-brand-to" />
                </div>
                <div className="md:w-5/12 text-left order-2 md:order-3 ml-20 md:ml-0 pl-0 md:pl-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    Bestätigung
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Nach der Buchung ist das Haus für euch reserviert. Ihr bekommt alle Infos, die ihr braucht.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 ml-20 md:ml-0 pr-0 md:pr-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    Check-in
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Ihr kommt an, gebt den Pincode ein — fertig. Kein Warten, kein Schlüsselübergabe-Termin.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-from group-hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all order-1 md:order-2">
                  <KeySquare className="w-5 h-5 text-brand-from" />
                </div>
                <div className="md:w-5/12 order-3 hidden md:block" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 order-1 hidden md:block" />
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-brand-to group-hover:shadow-[0_0_15px_hsl(276_100%_56%/0.4)] transition-all order-1 md:order-2">
                  <Gamepad className="w-5 h-5 text-brand-to" />
                </div>
                <div className="md:w-5/12 text-left order-2 md:order-3 ml-20 md:ml-0 pl-0 md:pl-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    Zocken
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Rechner anschließen, loslegen. Alles steht. Ihr entscheidet, wie das Wochenende läuft.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 ml-20 md:ml-0 pr-0 md:pr-12">
                  <h3 className="font-heading text-xl font-bold text-fg-headline mb-2">
                    Abreise
                  </h3>
                  <p className="text-fg-muted leading-body">
                    Ihr packt eure Sachen und hinterlasst das Haus ordentlich. Die Endreinigung übernehmen wir.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-outline-strong flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-success group-hover:shadow-[0_0_15px_hsl(146_72%_48%/0.4)] transition-all order-1 md:order-2">
                  <Sparkles className="w-5 h-5 text-success" />
                </div>
                <div className="md:w-5/12 order-3 hidden md:block" />
              </div>
            </div>
          </div>

          <div className="mt-20 text-center flex justify-center">
            <Button href="/ablauf" variant="tertiary" size="md">
              Ablauf im Detail ansehen
              <ArrowRight className="w-5 h-5 text-brand-from transition-transform group-hover/button:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Was kostet ein LAN Party Haus mieten? */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-to/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Was kostet ein LAN Party Haus mieten?
            </h2>
            <p className="text-fg-muted leading-body text-lg mt-6 max-w-2xl mx-auto">
              Der Preis hängt von Personenzahl und Aufenthaltsdauer ab.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 relative z-10">
            {/* 2 Tage */}
            <div className="bg-surface/80 border border-outline-default rounded-3xl p-8 text-center backdrop-blur-md transition-all hover:border-brand-from/50 hover:bg-elevated/80 shadow-lg flex flex-col items-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-elevated border border-outline-subtle text-fg-muted text-sm font-bold tracking-wider uppercase mb-8">
                2 Tage
              </span>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">59</span>
                <span className="font-heading text-2xl font-bold text-white">€</span>
              </div>
              <span className="text-fg-muted text-sm block">pro Person / Tag</span>
            </div>

            {/* 3 Tage */}
            <div className="bg-elevated/90 border-2 border-brand-from/50 rounded-3xl p-8 text-center backdrop-blur-md relative overflow-hidden transition-all hover:border-brand-from shadow-[0_0_30px_rgba(0,255,255,0.15)] transform md:-translate-y-4 flex flex-col items-center">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-from to-brand-to" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-from/20 rounded-full blur-[40px] pointer-events-none" />
              
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-from/10 border border-brand-from/30 text-brand-from text-sm font-bold tracking-wider uppercase mb-8 relative z-10">
                3 Tage
              </span>
              <div className="flex items-baseline justify-center gap-1 mb-2 relative z-10">
                <span className="font-display text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/90 drop-shadow-[0_0_15px_var(--color-brand-glow)]">54</span>
                <span className="font-heading text-3xl font-bold text-white">€</span>
              </div>
              <span className="text-fg-muted text-sm block relative z-10">pro Person / Tag</span>
            </div>

            {/* 4 Tage */}
            <div className="bg-surface/80 border border-outline-default rounded-3xl p-8 text-center backdrop-blur-md transition-all hover:border-brand-to/50 hover:bg-elevated/80 shadow-lg flex flex-col items-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-elevated border border-outline-subtle text-fg-muted text-sm font-bold tracking-wider uppercase mb-8">
                4 Tage
              </span>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">49</span>
                <span className="font-heading text-2xl font-bold text-white">€</span>
              </div>
              <span className="text-fg-muted text-sm block">pro Person / Tag</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center relative z-10">
            <Button
              href="/preise"
              variant="primary"
              size="lg"
              className="mb-10"
            >
              Alle Preise & Pakete ansehen
              <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
            </Button>

            {/* Bottom Microcopy */}
            <div className="pt-6 border-t border-outline-subtle flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-fg-disabled text-center w-full max-w-2xl">
              <Info className="w-4 h-4 flex-shrink-0" />
              <p>
                <strong className="text-fg-muted font-medium">Endreinigung: 100 €.</strong> Bettwäsche inklusive. Handtücher bitte selbst mitbringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Die häufigsten Fragen zu Pulse LAN-Haus"
        items={[
          {
            question: "Kann ich meinen eigenen PC mitbringen?",
            answer:
              "Ja — das ist sogar der Kern des Konzepts. Ihr bringt euren Rechner mit euren Games, euren Einstellungen und eurem Gear. Wir stellen Monitor, Tisch, Stuhl, Kabel und Netzwerk. Anschließen, direkt loslegen.",
          },
          {
            question: "Wie viele Personen passen ins Haus?",
            answer: (
              <>
                Das LAN Haus ist für{" "}
                <strong className="text-fg-body">bis zu 12 Personen</strong> ausgelegt — 12
                Gaming-Plätze, 12 Schlafplätze. Kleinere Gruppen sind natürlich auch willkommen.
              </>
            ),
          },
          {
            question:
              "Ist das Internet wirklich stabil genug für 12 Gaming-PCs gleichzeitig?",
            answer:
              "Ja. Glasfaser, professioneller Switch, CAT-7-Direktverkabelung an jedem Platz. Wenn ihr verliert, liegt's nicht an uns.",
          },
          {
            question: "Gibt es Personal vor Ort?",
            answer:
              "Nein — und das ist Absicht. Ihr seid unter euch. Bei Problemen sind wir per Telefon erreichbar.",
          },
          {
            question: "Wie funktioniert der Check-in?",
            answer:
              "Schlüssellos per Pincode. Ihr bekommt den Code vor der Anreise — und kommt rein, wann ihr wollt.",
          },
          {
            question: "Was ist mit Verpflegung?",
            answer:
              "Die Küche ist voll ausgestattet. Ihr kauft selbst ein und kocht, was ihr wollt. Pizzaofen ist vorhanden — Prioritäten stimmen.",
          },
          {
            question: "Ist das auch was für uns, wenn wir keine Profis sind?",
            answer:
              "Absolut. Ob Retro-Gamer, Clan oder Gaming-Buddies — das Haus ist für alle, die gemeinsam zocken wollen.",
          },
          {
            question: "Wie weit im Voraus muss ich buchen?",
            answer:
              "Je früher, desto sicherer. Wochenenden sind gefragt — besonders Freitag bis Sonntag.",
          },
        ]}
      />
    </div>
  );
}
