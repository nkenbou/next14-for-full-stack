import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.+)": "<rootDir>/src/$1",
  },
  testEnvironment: "@quramy/jest-prisma-node/environment",
  collectCoverage: true,
  coverageDirectory: "coverage",
};

export default config;
