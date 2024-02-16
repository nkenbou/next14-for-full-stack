const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["only-warn", "import-access"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@next/next/recommended",
    "plugin:eslint-comments/recommended",
    "turbo",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowExpressions: true },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
    "eslint-comments/no-unused-disable": "warn",
    "eslint-comments/require-description": "warn",
    "import-access/jsdoc": [
      "warn",
      {
        defaultImportability: "package",
      },
    ],
    "no-await-in-loop": "warn",
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    ".*.js",
    "node_modules/",
    "coverage/",
    "next.config.js",
    "jest.config.mjs",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
    {
      files: ["*.stories.jsx", "*.stories.tsx"],
      extends: ["plugin:storybook/recommended"],
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      excludedFiles: "**/e2e/**/*",
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
    },
    {
      files: "**/e2e/**/?(*.)+(spec|test).[jt]s?(x)",
      extends: ["plugin:playwright/recommended"],
    },
  ],
};
