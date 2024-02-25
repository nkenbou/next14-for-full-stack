/** @type {import("stylelint").Config} */
module.exports = {
  extends: ["@repo/stylelint-config/base.js"],
  ignoreFiles: ["node_modules/**/*.css", "coverage/**/*.css"],
};
