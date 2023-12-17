const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["only-warn", "import-access"],
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
  ],
  rules: {
    "import-access/jsdoc": [
      "error",
      {
        defaultImportability: "package",
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "coverage/",
  ],
  overrides: [
    { files: ["*.js?(x)", "*.ts?(x)"] },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      excludedFiles: "**/e2e/**/*",
      extends: [require.resolve("@vercel/style-guide/eslint/jest-react")],
    },
    {
      files: "**/e2e/**/?(*.)+(spec|test).[jt]s?(x)",
      extends: [require.resolve("@vercel/style-guide/eslint/playwright-test")],
    },
  ],
};
