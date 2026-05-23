import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TokensGallery } from "./TokensGallery";

const meta = {
  /** Slug: `design-system-tokens` — muss zum Sidebar-Pfad passen (Docs-ID: …--docs). */
  title: "Design System/Tokens",
  component: TokensGallery,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Übersicht aller NEXUS UI Design Tokens aus `globals.css` – Farben, Typografie, Abstände, Radius und Effekte.",
      },
    },
    a11y: { element: "#storybook-root" },
  },
} satisfies Meta<typeof TokensGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  name: "Übersicht",
  parameters: { layout: "fullscreen" },
  render: () => <TokensGallery />,
};
