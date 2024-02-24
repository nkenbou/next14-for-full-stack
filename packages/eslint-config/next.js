/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve("./_base"),
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  rules: {
    "import-access/jsdoc": [
      "warn",
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
    browser: true,
  },
  settings: {
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
