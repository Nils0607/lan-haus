// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import nextConfig from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "storybook-static/**",
    ],
  },
  ...nextConfig,
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
