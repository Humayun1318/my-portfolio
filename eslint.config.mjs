import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      // Code quality and style
      "no-console": "warn",
      "no-debugger": "warn",
      "prefer-const": "warn",
      eqeqeq: ["error", "always"],

      // React / Next best practices
      "react/react-in-jsx-scope": "off", // not needed in Next.js
      "react/jsx-uses-react": "off", // not needed in Next.js

      // Prettier formatting
      "prettier/prettier": "error",
    },
  },
];

export default eslintConfig;
