const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:eslint-comments/recommended",
    "turbo",
  ],
  plugins: ["only-warn", "import-access"],
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
    "eslint-comments/require-description": "warn",
    "import-access/jsdoc": "warn",
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          "builtin", // Node.js built-in modules
          "external", // Packages
          "internal", // Aliased modules
          "parent", // Relative parent
          "sibling", // Relative sibling
          "index", // Relative index
        ],
        "newlines-between": "never",
      },
    ],
    "no-await-in-loop": "warn",
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  reportUnusedDisableDirectives: true,
};
