const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["only-warn", "import-access"],
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "eslint-config-turbo",
  ].map(require.resolve),
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
    "dist/",
    "coverage/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: [require.resolve("@vercel/style-guide/eslint/jest")],
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
  ],
};
