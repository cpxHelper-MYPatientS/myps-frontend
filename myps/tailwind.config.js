/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9FBFF",
        b: "#191919",
        button: "#5338FF",
        border: "#EDEFF3",
        chatinput: "#F7FAFF",
        nav: "rgba(0, 0, 0, 0.20)",
        violet: {
          10: "#EAEFF8",
          25: "#E9E6FF",
          50: "#ECF0FF",
          100: "#DCE3FF",
          500: "#5750FF",
          600: "#5039FA",
          700: "#3F25DD",
        },
        cgray: {
          50: "#F6F7F8",
          100: "#EAEDEF",
          200: "#D9E0E4",
          300: "#BFCAD1",
          400: "#AFBCC5",
          500: "#8999A8",
          600: "#778799",
          700: "#6B778A",
          900: "#4B535D",
          950: "#30353B",
        },
        blue: {
          10: "#E2F6FF",
          50: "#EFF5FF",
          600: "#3C88B7",
        },
      },
      backgroundImage: {
        gradientViolet: "linear-gradient(90deg, #7176FF 0%, #5039FA 100%)", // bg-gradientViolet으로 사용
        gradientRecordText:
          "linear-gradient(90deg, #5039FA -33.33%, #66EDCD 63.81%)",
        gradientChat: "linear-gradient(180deg, #ECF0FF 0%, #FFF 100%)",
        gradientTestBar:
          "linear-gradient(90deg, #B7FFEE 0%, #BADDF9 42%, #BCB4FF 100%);",
      },
      fontSize: {
        p1: ["1rem", { lineHeight: "1.5rem" }], //16px / 24px
        p2: ["0.875rem", { lineHeight: "1.3125rem" }], //14px/ 21px
        p3: ["0.75rem", { lineHeight: "1.125rem" }], //12px / 18px
        b1: ["1.25rem", { lineHeight: "1.875rem" }], //20px / 30px
        b2: ["1.125rem", { lineHeight: "1.6875rem" }], //18px / 27px
        t1: ["1.5rem", { lineHeight: "2.25rem" }], //24px / 36px
        h1: ["2rem", { lineHeight: "3rem" }], //32px / 48px
        h2: ["1.625rem", { lineHeight: "2.4375rem" }], //26px / 39px
        m1: ["1.25rem", { lineHeight: "2.125rem" }], //20px / 34px
        st: ["22px", { lineHeight: "33px" }], //22px / 33px
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        regular: 400,
      },
      boxShadow: {
        custom1: "0px 4px 4px 0px #EFF4FD",
        custom2: "0px 2px 10px rgba(214, 216, 219, 0.25)",
        custom3: "0px 4px 10px 0px rgba(113, 118, 255, 0.15)",
        custom4: "0px -1px 10px 0px rgba(255, 255, 255, 0.16)",
      },
      borderRadius: {
        aa: "0.3125rem",
        bb: "0.625rem",
      },
      animation: {
        "slide-down": "slideDown 0.5s ease-in-out", // slideDown 애니메이션을 0.5초로 설정
        "slide-up": "slideUp 0.5s ease-in-out", // slideUp 애니메이션을 0.5초로 설정
        "slide-up-translate": "slideUpTranslate 0.5s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { height: "0px" },
          "100%": { height: "787px" },
        },
        slideUp: {
          "0%": { height: "787px" },
          "100%": { height: "0px" },
        },
        slideUpTranslate: {
          "0%": { transform: "translateY(10%)", opacity: "0.3" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
