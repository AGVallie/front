/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "../.storybook/*"],
  theme: {
    extend: {
      animation: {
        "bounce-2": "bounce2 0.5s infinite", // 커스텀 애니메이션 설정
      },
      keyframes: {
        bounce2: {
          "0%, 100%": {
            transform: "translateY(-100%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      translate: {
        iPhone: "390px",
      },
      screens: {
        iPhone: "390px",
      },
      width: {
        iPhone: "390px",
        89.5: "22.375rem",
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
      rotate: {
        315: "315deg",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.6, -0.3, 0.4, 1.2)", // 튕기는 효과를 위한 cubic-bezier 값
      },
      zIndex: {
        60: "60",
      },
    },
  },
  plugins: [],
};
