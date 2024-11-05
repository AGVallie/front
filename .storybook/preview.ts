import type { Preview } from "@storybook/react";
import "../src/index.css";
import "./cdn.tailwindcss-3.4.14.js"; // storybook 상에서 모든 tailwindcss 클래스 사용 가능

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
