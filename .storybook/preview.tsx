import type { Preview } from "@storybook/nextjs-vite";
import { Geist } from "next/font/google";
import "../src/app/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "oklch(1 0 0)" },
        { name: "dark", value: "oklch(0.145 0 0)" },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Helles oder dunkles Theme (CSS-Variablen)",
      defaultValue: "light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "dark" ? "dark" : "light";
      return (
        <div
          className={`${geistSans.variable} min-h-[50vh] bg-background font-sans text-foreground antialiased ${theme === "dark" ? "dark" : ""}`}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
