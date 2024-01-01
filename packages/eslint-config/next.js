const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["only-warn", "import-access"],
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ].map(require.resolve),
  rules: {
    "import/no-default-export": "off",
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
      rules: {
        "tsdoc/syntax": "off",
        "jest/prefer-lowercase-title": [
          "warn",
          {
            ignore: ["describe"],
          },
        ],
      },
    },
    {
      files: "**/e2e/**/?(*.)+(spec|test).[jt]s?(x)",
      extends: [require.resolve("@vercel/style-guide/eslint/playwright-test")],
    },
  ],
};
