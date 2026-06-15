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
        <p>Angaben gemäß § 5 TMG</p>
        <div>
          <strong className="text-fg-body block mb-1">Nils Coenen</strong>
          <p>
            Richard Wagner Straße 42
            <br />
            50674 Köln
          </p>
        </div>
        <div>
          <strong className="text-fg-body block mb-1">Kontakt:</strong>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:coensky@gmail.com"
              className="text-brand-from hover:underline"
            >
              coensky@gmail.com
            </a>
          </p>
        </div>
        <div>
          <strong className="text-fg-body block mb-1">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          </strong>
          <p>
            Nils Coenen
            <br />
            Richard Wagner Straße 42
            <br />
            50674 Köln
          </p>
        </div>
      </div>
    </div>
  );
}
