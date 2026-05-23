import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Pulse LAN-Haus",
  description: "Impressum und rechtliche Angaben.",
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-fg-headline mb-8">Impressum</h1>
      <div className="font-body text-fg-muted space-y-6">
        <p>
          Angaben gemäß § 5 TMG
        </p>
        <div>
          <strong className="text-fg-body block mb-1">Pulse LAN-Haus GmbH</strong>
          <p>Musterstraße 123<br />12345 Musterstadt</p>
        </div>
        <div>
          <strong className="text-fg-body block mb-1">Vertreten durch:</strong>
          <p>Max Mustermann</p>
        </div>
        <div>
          <strong className="text-fg-body block mb-1">Kontakt:</strong>
          <p>Telefon: +49 (0) 123 456789<br />E-Mail: info@pulse-lan.de</p>
        </div>
      </div>
    </div>
  );
}
