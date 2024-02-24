/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve("./_base"), "prettier"],
  globals: {},
  env: {
    node: true,
  },
  ignorePatterns: [".*.js", "node_modules/", "dist/", "coverage/"],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:jest/recommended"],
    },
  ],
};
