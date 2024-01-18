/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/library.js"],
  globals: {
    jestPrisma: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
