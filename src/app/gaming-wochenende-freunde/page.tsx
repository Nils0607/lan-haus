import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Home, Plug, EyeOff, Package, CheckCircle, Lock, Tv, Pizza, BatteryCharging, Car, Trophy, History, Key, Mouse, ShieldCheck, ListChecks, Gamepad, Utensils } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

const organizerFaqItems = [
  {
    question: "Ist das Haus wirklich exklusiv für uns?",
    answer:
      "Ja, zu 100 %. Wenn ihr bucht, gehört die komplette Location für den gebuchten Zeitraum euch allein.",
  },
  {
    question: "Müssen wir uns um Strom und Internet kümmern?",
    answer:
      "Nein. Das ist unser Job. Die Stromkreise sind für die Last von 12 High-End-PCs ausgelegt und das Netzwerk besteht aus 1 Gb Leitung.",
  },
  {
    question: "Gibt es genug Schlafplätze für alle?",
    answer: "Ja, es gibt 12 einfache und funktionale Schlafplätze.",
  },
  {
    question: "Was ist mit Lärm und Nachbarn?",
    answer:
      "Das Haus ist so konzipiert, dass ihr ungestört zocken könnt. Trotzdem gilt ab 22 Uhr eine angemessene Zimmerlautstärke außerhalb des Gaming-Bereichs.",
  },
  {
    question: "Können wir auch Retro-Konsolen anschließen?",
    answer:
      "Ja, an dem großen Monitor in der Chill Area sind auch HDMI-Anschlüsse frei. Bringt eure alten Schätze gerne mit!",
  },
];

export const metadata: Metadata = {
  title: "Gaming Wochenende mit Freunden | NEXUS LAN",
  description: "Ein ganzes Haus nur für euch: Das Gaming-Wochenende mit deinen Freunden, auf das alle Bock haben.",
};

export default function GamingWochenendePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-from/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-to/20 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-20 pb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-outline-default shadow-[var(--glow-brand)] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-4 h-4 text-brand-from" />
            <span className="text-label font-bold tracking-label uppercase text-brand-from">
              Das ultimative Setup für eure Crew
            </span>
          </div>

          <h1 className="max-w-5xl font-display text-display font-bold leading-display tracking-display text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
            Ein ganzes Haus <br />
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              nur für euch
            </span>
          </h1>

          <p className="max-w-3xl text-h2 font-body text-fg-headline leading-body mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both font-medium">
            Das Gaming-Wochenende mit deinen Freunden, auf das alle Bock haben.
          </p>

          <p className="max-w-3xl text-lg font-body text-fg-muted leading-body animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
            Vergiss den ganzen Orga-Stress. Bei uns spawnt ihr in einer voll ausgestatteten Instanz, die nur auf euch wartet. Rechner anschließen, loszocken. Das ist euer legendäres Wochenende.
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,var(--color-bg-elevated)_0%,transparent_100%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Endlich wieder eine richtige LAN.{" "}
              <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)]">
                Ohne &quot;Wer kümmert sich um ...?&quot;
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
            <p className="font-body text-lg text-fg-muted leading-body mt-6">
              Kennst du das noch? Rechner unterm Arm, Vorfreude im Bauch und das ganze Wochenende nur zocken, Pizza und Energy-Drinks. Oder kennst du es nur aus dem Discord, wenn die Squad davon träumt, sich endlich mal im Real Life zu treffen und gemeinsam zu spielen? Egal, ob Zocker aus den alten Zeiten oder Online-Freundeskreis: Wir kennen die Hürden, die einem legendären Wochenende im Weg stehen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: Home, title: "Kein Platz", desc: "Wohin mit 12 Rechnern, Monitoren und Stühlen in der eigenen Bude?", color: "cyan" },
              { icon: Plug, title: "Der Orga-Stress", desc: "Wer checkt die Sicherungen? Hält das Internet? Reichen die Steckdosen?", color: "purple" },
              { icon: EyeOff, title: "Fehlende Privatsphäre", desc: "Keine Lust auf Mitbewohner, Kinder oder genervte Nachbarn.", color: "cyan" },
              { icon: Package, title: "Die ewige Schlepperei", desc: "Tische, Stühle, Kabeltrommeln – der halbe Hausstand muss mit.", color: "purple" },
            ].map((item, i) => {
              const isCyan = item.color === "cyan";
              return (
                <div key={i} className="relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group transition-all hover:border-outline-strong">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${isCyan ? 'from-brand-from to-transparent' : 'from-brand-to to-transparent'} opacity-80`} />
                  
                  {/* Subtle Top Glow */}
                  <div className={`absolute top-0 left-8 w-32 h-32 rounded-full blur-[50px] ${isCyan ? 'bg-brand-from/15' : 'bg-brand-to/15'} pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <item.icon 
                        className={`w-10 h-10 ${isCyan ? 'text-brand-from drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]' : 'text-brand-to drop-shadow-[0_0_12px_rgba(190,0,255,0.5)]'}`} 
                        strokeWidth={1.5} 
                      />
                    </div>
                    <p className="font-body text-lg leading-relaxed">
                      <strong className="text-fg-headline font-bold">{item.title}</strong>{' '}
                      <span className="text-fg-muted">— {item.desc}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="relative inline-flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-surface border border-brand-from/30 overflow-hidden shadow-[0_0_30px_rgba(190,100%,50%,0.1)]">
              <div className="absolute inset-0 bg-brand-from/5" />
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-from shadow-[0_0_10px_rgba(190,100%,50%,0.8)]" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <CheckCircle className="w-8 h-8 text-brand-from shrink-0" />
                <span className="font-display text-2xl md:text-3xl font-bold text-fg-headline">
                  Bei uns? <span className="text-brand-from">Alles schon erledigt.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-24 lg:py-32 z-10 bg-background overflow-hidden border-t border-outline-subtle">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-to)_0%,transparent_50%)] mix-blend-screen" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Eure Location für ein{" "}
              <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)]">
                perfektes Wochenende
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
            <p className="font-body text-lg text-fg-muted leading-body mt-6">
              Hier geht es um mehr als nur ums Zocken. Es ist der Ort, in der ihr als Team zusammenkommt, eure Strategien besprecht und einfach eine gute Zeit habt. Alles ist exklusiv für euch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Private Instanz */}
            <div className="lg:col-span-1 relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-colors flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-from/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-from/20 transition-colors" />
              <Lock className="w-10 h-10 text-brand-from mb-6 drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-fg-headline mb-3">Private Instanz</h3>
              <p className="font-body text-fg-muted leading-relaxed flex-1">
                Das ganze Haus, alle Räume – nur für eure Gruppe. Keine fremden Leute, keine Kompromisse.
              </p>
            </div>

            {/* Lounge & Entertainment */}
            <div className="lg:col-span-2 relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-colors flex flex-col">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-to/10 rounded-full blur-[60px] translate-y-1/3 translate-x-1/3 group-hover:bg-brand-to/20 transition-colors" />
              <Tv className="w-10 h-10 text-brand-to mb-6 drop-shadow-[0_0_12px_rgba(190,0,255,0.5)]" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-fg-headline mb-3">Lounge & Entertainment</h3>
              <p className="font-body text-fg-muted leading-relaxed flex-1 max-w-2xl">
                Bock auf eine Pause vom Grinden? Switch an den Beamer, startet einen Film oder campt einfach auf dem Sofa und genießt die gemeinsame Zeit.
              </p>
            </div>

            {/* Buff-Station zum Looten */}
            <div className="lg:col-span-2 relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-from/10 rounded-full blur-[60px] -translate-y-1/3 -translate-x-1/3 group-hover:bg-brand-from/20 transition-colors" />
              <Pizza className="w-10 h-10 text-brand-from mb-6 drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-fg-headline mb-3">Buff-Station zum Looten</h3>
              <p className="font-body text-fg-muted leading-relaxed flex-1 max-w-2xl">
                In der voll ausgestatteten Küche könnt ihr euer Essen für die Nacht-Sessions organisieren. Von der obligatorischen Pizza aus dem Pizzaofen, vergünstigtem Lieferservice bis zum Mana-Trank in Form von Kaffee oder Energy Drink aus dem Automat ist alles für die Selbstversorgung da.
              </p>
            </div>

            {/* HP regenerieren */}
            <div className="lg:col-span-1 relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-colors flex flex-col">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-to/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2 group-hover:bg-brand-to/20 transition-colors" />
              <BatteryCharging className="w-10 h-10 text-brand-to mb-6 drop-shadow-[0_0_12px_rgba(190,0,255,0.5)]" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-fg-headline mb-3">HP regenerieren</h3>
              <p className="font-body text-fg-muted leading-relaxed flex-1">
                In den funktionalen Schlafplätzen für bis zu 12 Leute könnt ihr eure Akkus wieder aufladen. Bettwäsche stellen wir, ihr müsst nur Handtücher mitbringen.
              </p>
            </div>

            {/* Sorgenfreier Disconnect */}
            <div className="md:col-span-2 lg:col-span-3 relative p-8 rounded-2xl bg-bg-elevated border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-colors flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
              <div className="p-4 rounded-xl bg-bg-surface border border-outline-default relative z-10 shrink-0">
                <Car className="w-8 h-8 text-fg-headline" strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-xl text-fg-headline mb-2">Sorgenfreier Disconnect</h3>
                <p className="font-body text-fg-muted leading-relaxed">
                  Ausreichend Parkplätze direkt am Haus machen die Anreise entspannt. Und die Endreinigung am Ende? Übernehmen wir.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/ausstattung"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-brand-from text-brand-from hover:bg-brand-from/10 transition-colors font-heading font-medium text-lg w-full sm:w-auto"
            >
              Zur kompletten Ausstattung
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-from/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Macht es zu{" "}
              <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)]">
                eurem Event
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
            <p className="font-body text-lg text-fg-muted leading-body mt-6">
              Ob Geburtstag mit LAN-Party, ein JGA für Gamer oder einfach nur das jährliche Treffen – ihr habt die Kontrolle.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-8">
              {/* Card 1 */}
              <div className="relative p-8 md:p-10 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-from to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-from/10 rounded-full blur-[40px] group-hover:bg-brand-from/20 transition-colors" />
                
                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-4 rounded-xl bg-bg-elevated border border-outline-subtle shrink-0 group-hover:border-brand-from/30 transition-colors">
                    <Trophy className="w-8 h-8 text-brand-from drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-fg-headline mb-4">Euer Turnier, eure Regeln</h3>
                    <p className="font-body text-lg text-fg-muted leading-relaxed">
                      Startet ein 1v1-Turnier, zockt die ganze Nacht im Coop oder schwitzt in eurem Main-Game um die Wette. Das Setup ist bereit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative p-8 md:p-10 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-to to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-to/10 rounded-full blur-[40px] group-hover:bg-brand-to/20 transition-colors" />
                
                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-4 rounded-xl bg-bg-elevated border border-outline-subtle shrink-0 group-hover:border-brand-to/30 transition-colors">
                    <History className="w-8 h-8 text-brand-to drop-shadow-[0_0_12px_rgba(190,0,255,0.5)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-fg-headline mb-4">LAN wie früher -Feeling</h3>
                    <p className="font-body text-lg text-fg-muted leading-relaxed">
                      Bock auf eine Zeitreise? Packt die alten Klassiker aus! Bei uns könnt ihr das Gefühl von damals wieder aufleben lassen – Counterstrike oder Battlefield nur mit stabilen FPS und ohne Röhrenmonitore. Eine perfekte Idee für ein Gaming-Wochenende mit Nostalgie-Faktor.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Zero Orga Section */}
      <section className="relative py-24 lg:py-32 z-10 bg-background overflow-hidden border-t border-outline-subtle">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-brand-from)_0%,transparent_50%)] mix-blend-screen" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-elevated border border-outline-subtle text-fg-muted text-sm font-bold tracking-wider uppercase mb-6">
              Zero-Orga / Wir haben an alles gedacht
            </span>

            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Ankommen, einloggen,{" "}
              <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)]">
                loslegen.
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
            <p className="font-body text-lg text-fg-muted leading-body mt-6">
              Wir haben den ganzen nervigen Teil einer LAN-Party für euch erledigt. Das ist unser Versprechen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-brand-from/50 transition-all text-center flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 rounded-full bg-bg-elevated border border-outline-subtle mb-6 group-hover:scale-110 transition-transform duration-500">
                <Key className="w-8 h-8 text-brand-from" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-xl text-fg-headline mb-4">Schlüsselfertiges Setup</h3>
              <p className="font-body text-fg-muted leading-relaxed">
                Ihr kommt an, die Gaming-Plätze sind bereit. Jeder hat einen 120cm-Tisch, einen ergonomischen Stuhl und einen 240-Hz-WQHD-Monitor. DisplayPort-Kabel liegt bereit.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-brand-to/50 transition-all text-center flex flex-col items-center md:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-to/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 rounded-full bg-bg-elevated border border-outline-subtle mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mouse className="w-8 h-8 text-brand-to" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-xl text-fg-headline mb-4">Euer Gear, euer Sieg</h3>
              <p className="font-body text-fg-muted leading-relaxed">
                Ihr bringt euer Herzstück mit – den eigenen Rechner, eure Maus, eure Tastatur. Keine Kompromisse, nur eure gewohnte Performance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-brand-from/50 transition-all text-center flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-from/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 rounded-full bg-bg-elevated border border-outline-subtle mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-8 h-8 text-brand-from" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-xl text-fg-headline mb-4">Autonom & ungestört</h3>
              <p className="font-body text-fg-muted leading-relaxed">
                Checkt per Pincode ein und seid euer eigener Herr. Kein Personal vor Ort, das stört. Aber falls doch mal was ist, sind wir per Notfall-Hotline erreichbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-brand-to/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline">
              Kleiner Guide für den{" "}
              <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)]">
                Organisator der Gruppe
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
            <p className="font-body text-lg text-fg-muted leading-body mt-6 max-w-2xl mx-auto">
              Du bist derjenige, der die Truppe zusammentrommelt? Cool! Hier sind ein paar Ideen, um die Planung noch einfacher zu machen.
            </p>
          </div>

          <div className="space-y-6">
            {/* Item 1 */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-all">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-from to-brand-to opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-3 rounded-xl bg-bg-elevated border border-outline-subtle shrink-0 group-hover:border-brand-from/30 transition-colors">
                  <ListChecks className="w-6 h-6 text-brand-from drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-fg-headline mb-4">Was braucht man für ein Gaming-Wochenende?</h3>
                  <ul className="space-y-3 font-body text-fg-muted leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-brand-from shrink-0 mt-1">▹</span>
                      <span><strong className="text-fg-body">Jeder bringt mit:</strong> Seinen PC/Laptop, Monitor, Peripherie (Maus, Tasta, Headset) und ein Handtuch.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-from shrink-0 mt-1">▹</span>
                      <span><strong className="text-fg-body">Klärt vorher:</strong> Wer bringt welche Konsole oder Controller mit?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-all">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-to to-brand-from opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-3 rounded-xl bg-bg-elevated border border-outline-subtle shrink-0 group-hover:border-brand-to/30 transition-colors">
                  <Utensils className="w-6 h-6 text-brand-to drop-shadow-[0_0_12px_rgba(190,0,255,0.5)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-fg-headline mb-3">Essens-Planung</h3>
                  <p className="font-body text-fg-muted leading-relaxed">
                    Macht eine einfache Liste! Pizza am Freitag, Grillen am Samstag, Reste am Sonntag. So muss nur einer den Einkauf organisieren.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-bg-surface border border-outline-subtle overflow-hidden group hover:border-outline-strong transition-all">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-from to-brand-to opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-3 rounded-xl bg-bg-elevated border border-outline-subtle shrink-0 group-hover:border-brand-from/30 transition-colors">
                  <Gamepad className="w-6 h-6 text-brand-from drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-fg-headline mb-3">Spiele-Liste</h3>
                  <p className="font-body text-fg-muted leading-relaxed">
                    Sammelt vorab Ideen für Games, auf die alle Bock haben. Das spart am Wochenende Zeit bei der Spielsuche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle overflow-hidden">
        <div className="absolute inset-0 bg-brand-to/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <h2 className="font-display text-h1 md:text-5xl font-bold text-fg-headline">
            Bereit für euer{" "}
            <span className="text-brand-to">legendäres Wochenende?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-from to-brand-to mx-auto mt-6 rounded-full" />
          {BOOKING_ENABLED && (
            <div className="mt-12">
              <Button href="/buchen" variant="primary" size="lg">
                Termin auswählen
                <ArrowRight className="w-6 h-6 transition-transform group-hover/button:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <FaqSection
        title="Fragen, die sich euer Organisator stellt"
        items={organizerFaqItems}
      />
    </div>
  );
}
