import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Menu } from "lucide-react";

import { Button } from "./button";

const meta = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Einheitliche Action-Komponente: Primary (Gradient), Secondary (Outline Brand), Tertiary (Outline Default); Größen sm/md/lg und icon. Mit `href` wird automatisch ein Next.js-Link oder (bei mailto/http) ein externes `<a>` gerendert.",
      },
    },
  },
  args: {
    children: "Label",
    type: "button",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    href: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: { variant: "primary", size: "sm", children: "Primary S" },
};

export const PrimaryMedium: Story = {
  args: { variant: "primary", size: "md", children: "Primary M" },
};

export const PrimaryLarge: Story = {
  args: { variant: "primary", size: "lg", children: "Primary L" },
};

export const SecondaryMedium: Story = {
  args: { variant: "secondary", size: "md", children: "Secondary" },
};

export const TertiaryMedium: Story = {
  args: { variant: "tertiary", size: "md", children: "Tertiary" },
};

export const IconMenu: Story = {
  render: () => (
    <Button
      type="button"
      variant="tertiary"
      size="icon"
      aria-label="Menü öffnen"
    >
      <Menu className="size-5" />
    </Button>
  ),
};

export const AsLink: Story = {
  args: {
    href: "/buchen",
    variant: "primary",
    size: "md",
    children: "Zu Buchen",
  },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};
