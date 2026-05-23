import { Metadata } from "next";
import { ArrowRight, ChevronRight, Home, Users, Gamepad2, Zap, Server, MapPin, SearchCheck, CheckCircle2, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-section";
import { BOOKING_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Was ist ein Gaming Haus? | Pulse LAN-Haus",
  description: "Guide zur perfekten LAN Location: Definition, Unterschied zur privaten LAN, BYO-Konzept und Einsatz für Freunde oder E-Sport-Teams.",
};

export default function GamingLocationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand-from/30 selection:text-brand-from">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 w-[800px] h-[400px] bg-brand-from/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fg-headline mb-6 tracking-display">
            Was ist ein Gaming Haus?{" "}
            <span className="text-transparent bg-clip-text bg-[image:var(--color-brand-gradient)] drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              Dein Guide zur perfekten LAN Location.
            </span>
          </h1>
          
          <p className="font-body text-xl text-fg-muted leading-body">
            Ein <strong className="text-fg-body">Gaming Haus</strong> (oft auch <strong className="text-fg-body">Gamer Haus</strong> oder <strong className="text-fg-body">LAN Location</strong> genannt) ist ein Ferienhaus, das speziell für Gaming-Wochenenden und LAN-Partys ausgestattet ist. Statt aufwendiger Selbstorganisation mietest du hier eine komplette, professionelle Infrastruktur – von High-End-Monitoren über stabiles Netzwerk bis zur passenden Stromversorgung.
          </p>
        </div>
      </section>

      {/* Intent-Trennung */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-surface border border-brand-from/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-from/10 rounded-full blur-[30px]" />
            <div className="relative z-10">
              <h2 className="font-heading text-xl font-bold text-fg-headline mb-2 flex items-center gap-2">
                <SearchCheck className="w-5 h-5 text-brand-from" /> Gaming Haus verstehen vs. LAN Haus mieten
              </h2>
              <p className="text-fg-muted">
                Du bist hier genau richtig, wenn du verstehen willst, was ein Gaming Haus ausmacht und für wen es sich lohnt.
              </p>
            </div>
            {BOOKING_ENABLED && (
              <div className="relative z-10 shrink-0">
                <Button href="/buchen" variant="primary" size="sm">
                  Haus mieten
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Was ist ein Gaming LAN Haus? */}
      <section className="relative py-20 lg:py-24 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-brand-from/10 border border-brand-from/20 flex items-center justify-center mx-auto mb-6 shadow-[var(--glow-brand)]">
            <Home className="w-8 h-8 text-brand-from" />
          </div>
          <p className="text-xl text-fg-muted leading-relaxed">
            Ein <strong className="text-fg-body">Gaming LAN Haus</strong> ist die Evolution der klassischen Keller-LAN-Party. Es ist ein Ort, der von Grund auf dafür gebaut wurde, einer Gruppe von Gamern ein perfektes, stressfreies Wochenende zu ermöglichen. Der Kern des Konzepts ist einfach: den ganzen organisatorischen Aufwand eliminieren, damit ihr euch voll und ganz aufs Zocken konzentrieren könnt. Egal ob du es <strong className="text-fg-body">LAN House</strong>, <strong className="text-fg-body">Gamer Haus</strong> oder <strong className="text-fg-body">Gaming Location</strong> nennst – das Ziel ist immer dasselbe: gemeinsames <strong className="text-fg-body">Gaming</strong> auf einem neuen Level.
          </p>
        </div>
      </section>

      {/* Segmente */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Für welche Art von Event ist ein Gaming Haus perfekt?
            </h2>
            <p className="text-xl text-fg-muted">
              Ein <strong className="text-fg-body">Gaming Haus</strong> ist die ideale Base für verschiedene Gruppen, die ihre Leidenschaft für <strong className="text-fg-body">LAN Gaming</strong> teilen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-elevated/50 border border-brand-from/30 rounded-2xl p-8 lg:p-10 flex flex-col group hover:bg-elevated transition-colors shadow-lg">
              <Users className="w-10 h-10 text-brand-from mb-6 drop-shadow-[0_0_10px_var(--color-brand-glow)]" />
              <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">Für Freunde & LAN-Veteranen</h3>
              <p className="text-fg-muted text-lg mb-8 flex-grow">
                Der Nostalgie-Trip mit der alten Crew oder das epische Wochenende mit dem Online-Freundeskreis. Hier erlebt ihr die Magie einer LAN-Party ohne den Stress mit Tischen, Kabeln und Sicherungen.
              </p>
              <Button href="/gaming-wochenende-freunde" variant="secondary" size="md" className="self-start">
                Mehr zum Wochenende mit Freunden
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="bg-elevated/50 border border-brand-to/30 rounded-2xl p-8 lg:p-10 flex flex-col group hover:bg-elevated transition-colors shadow-lg">
              <Zap className="w-10 h-10 text-brand-to mb-6 drop-shadow-[0_0_10px_hsl(276_100%_56%/0.4)]" />
              <h3 className="font-heading text-2xl font-bold text-fg-headline mb-4">Für E-Sport-Teams & Bootcamps</h3>
              <p className="text-fg-muted text-lg mb-8 flex-grow">
                Die perfekte <strong className="text-fg-body">Trainingslocation</strong> für ambitionierte Teams. In einer ablenkungsfreien Umgebung mit professioneller, identischer Hardware könnt ihr euch voll auf Taktik, Teamplay und Performance konzentrieren.
              </p>
              <Button href="/bootcamp-esport" variant="secondary" size="md" className="self-start">
                Mehr zur Bootcamp Location
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
              Professionelles Haus vs. private LAN
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-outline-strong font-heading font-bold text-fg-muted uppercase tracking-wider text-sm">Feature</th>
                  <th className="p-4 border-b border-outline-strong font-heading font-bold text-fg-headline text-lg">Private LAN-Party</th>
                  <th className="p-4 border-b border-outline-strong font-heading font-bold text-brand-from text-lg bg-surface/50 rounded-t-xl">Professionelles Gaming Haus</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {[
                  { feature: "Setup-Aufwand", private: "Hoch (Tische, Stühle, Kabel schleppen)", pro: "Null (Alles ist vorbereitet)" },
                  { feature: "Infrastruktur", private: "Risiko (Stromnetz, Internet)", pro: "Garantiert (Profi-Netzwerk, stabile Stromlast)" },
                  { feature: "Gaming-Plätze", private: "Improvisiert, oft eng", pro: "Ergonomisch, standardisiert, 240-Hz-Monitore" },
                  { feature: "Atmosphäre", private: "Stress & Orga vor dem Spaß", pro: "Entspanntes Ankommen & sofort loszocken" },
                  { feature: "Kosten", private: "Unübersichtlich (Stromnachzahlung?)", pro: "Transparent & planbar" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-subtle last:border-0 hover:bg-surface/30 transition-colors">
                    <td className="p-4 text-fg-muted font-medium">{row.feature}</td>
                    <td className="p-4 text-fg-body">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-warning/70 shrink-0" />
                        {row.private}
                      </div>
                    </td>
                    <td className="p-4 text-fg-headline font-medium bg-surface/30">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                        {row.pro}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BYO Konzept & Setup */}
      <section className="relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            <div>
              <Gamepad2 className="w-10 h-10 text-brand-to mb-6" />
              <h2 className="font-display text-3xl font-bold text-fg-headline mb-4">Welche Ausstattung gibt es? (Miet-PCs vs. BYO)</h2>
              <p className="text-fg-muted text-lg mb-6">
                Manche Gaming Häuser bieten Miet-PCs an. Wir haben uns bewusst dagegen entschieden. Warum? Weil echte Gamer auf ihrem eigenen, vertrauten <strong className="text-fg-body">Gear</strong> spielen wollen. Deine Tastatur, deine Maus, deine optimierten Einstellungen – das ist dein Skill.
              </p>
              <p className="text-fg-muted text-lg">
                Bei uns gilt das <strong className="text-fg-body">BYO-Konzept (Bring Your Own Computer)</strong>. Du bringst dein Herzstück mit, wir stellen die komplette, aufwändige Infrastruktur drumherum.
              </p>
            </div>

            <div className="bg-elevated/80 border border-outline-default rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-from/10 rounded-full blur-[40px] group-hover:bg-brand-from/20 transition-colors" />
              <Server className="w-10 h-10 text-brand-from mb-6" />
              <h2 className="font-display text-3xl font-bold text-fg-headline mb-4 relative z-10">Unser Setup im Detail</h2>
              <p className="text-fg-muted text-lg mb-8 relative z-10">
                Wir haben uns auf das konzentriert, was den größten Aufwand macht. Sieh dir an, welche professionelle Infrastruktur auf dich wartet.
              </p>
              <Button href="/ausstattung" variant="secondary" size="md" className="relative z-10">
                Zur detaillierten Ausstattung
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Standort NRW Teaser */}
      <section className="relative py-24 lg:py-32 z-10 bg-background border-t border-outline-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-surface border border-outline-strong flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-fg-muted" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-6">
            Wo findet man Gaming Häuser in Deutschland / NRW?
          </h2>
          <p className="text-xl text-fg-muted mb-8">
            <strong className="text-fg-body">Gaming Häuser</strong> werden in Deutschland immer beliebter. Unser Standort liegt zentral in Nordrhein-Westfalen und ist damit ideal für Gruppen aus der ganzen Region erreichbar.
          </p>
          <Button href="/nrw" variant="tertiary" size="md">
            Alle Infos für Gruppen aus NRW
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 z-10 border-t border-outline-subtle bg-surface/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-headline mb-4">
            Genug erklärt. Bereit, es selbst zu erleben?
          </h2>
          <p className="text-xl text-fg-muted mb-10">
            Schau dir an, was unser Haus zu bieten hat, und sichere dir deinen Termin für ein unvergessliches Wochenende.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {BOOKING_ENABLED && (
              <Button href="/buchen" variant="primary" size="lg">
                Verfügbarkeit prüfen
                <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
              </Button>
            )}
            <Button href="/ausstattung" variant="secondary" size="lg">
              Ausstattung ansehen
              <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Häufige Fragen zum Gaming Haus"
        items={[
          {
            question: "Was bedeutet LAN in LAN-Party oder LAN Haus?",
            answer: "LAN steht für „Local Area Network“. Es bedeutet, dass alle Rechner über Kabel in einem lokalen Netzwerk verbunden sind, was für eine extrem schnelle und stabile Verbindung sorgt – entscheidend beim Gaming."
          },
          {
            question: "Ist ein Gaming Haus nur was für Profis?",
            answer: "Nein, überhaupt nicht. Es ist für jeden, der Lust auf ein gemeinsames Gaming-Wochenende ohne Orga-Stress hat – vom lockeren Freundeskreis bis zum ambitionierten E-Sport-Team."
          },
          {
            question: "Kann man in einem Gamer Haus übernachten?",
            answer: "Ja, das Konzept verbindet das intensive Gaming-Erlebnis mit einer gemeinsamen Unterkunft. Es ist wie ein Kurzurlaub für Gamer."
          },
          {
            question: "Was ist der Unterschied zwischen einem Gaming Haus und einem E-Sport-Hotel?",
            answer: "Ein E-Sport-Hotel vermietet oft einzelne Zimmer und die Gaming-Bereiche sind öffentlich. Ein Gaming Haus mietest du immer exklusiv für deine Gruppe – für maximale Privatsphäre."
          }
        ]}
      />

    </div>
  );
}
