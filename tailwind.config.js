// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // HTML 파일
    "./src/**/*.{js,jsx,ts,tsx}", // React와 TypeScript 파일
    "./.storybook/**/*.ts", // Storybook 관련 파일도 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
