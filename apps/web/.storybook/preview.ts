import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";

const preview: Preview = {
  decorators: [withScreenshot as any],
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
