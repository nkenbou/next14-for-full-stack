import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import React from "react";
import { withScreenshot } from "storycap";

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
    withScreenshot as any,
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    screenshot: {},
  },
};

export default preview;
