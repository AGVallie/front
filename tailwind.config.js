/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "../.storybook/*"],
  theme: {
    extend: {
      screens: {
        iPhone: "390px",
      },
      width: {
        iPhone: "390px",
      },
      height: {
        iPhone: "844px",
      },
      backgroundImage: {
        smartthings:
          "radial-gradient(circle at top right, #3072A5 0%, #84A8D1 47%, #95B1DF 67%, #9BA1C9 100%)",
      },
      fontFamily: {
        samsungSharpSans: ["SamsungSharpSans", "sans-serif"], // 폰트 이름을 지정
      },
    },
  },
  plugins: [],
};