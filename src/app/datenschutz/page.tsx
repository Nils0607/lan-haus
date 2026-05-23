import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Pulse LAN-Haus",
  description: "Datenschutzerklärung.",
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-fg-headline mb-8">Datenschutzerklärung</h1>
      <div className="font-body text-fg-muted space-y-6">
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <h2 className="font-heading text-xl font-bold text-fg-headline mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        </p>
        <h2 className="font-heading text-xl font-bold text-fg-headline mt-8 mb-4">2. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel Inc.
        </p>
      </div>
    </div>
  );
}
