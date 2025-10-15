import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["app/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      "no-unused-vars": "warn", // Warn about unused variables
      "react/react-in-jsx-scope": "off", // Disable React in JSX scope rule
      "@typescript-eslint/no-explicit-any": "error", // Disallow usage of 'any' in TypeScript
    },
  }
]);
