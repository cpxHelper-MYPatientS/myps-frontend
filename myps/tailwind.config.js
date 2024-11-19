/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9FBFF",
        b: "#191919",
        violet: {
          10: "#EAEFF8",
          50:"#ECF0FF",
          500:"#5750FF",
          600: "#5039FA",
          700: "#3F25DD",
        },
        cgray: {
          100: "#EAEDEF",
          200: "#D9E0E4",
          400: "#AFBCC5",
          700: "#6B778A",
          900: "#4B535D",
          950: "#30353B",
        }
      },
      fontSize: {
        p1: ["1rem", { lineHeight: "1.5rem" }], //16px / 24px
        p2: ["0.875rem", { lineHeight: "1.3125rem" }], //14px/21px
        p3: ["0.75rem", { lineHeight: "1.125rem" }], //12px / 18px
        b1: ["1.25rem", { lineHeight: "30px" }], //20px / 30px
        b2: ["1.125rem", { lineHeight: "1.6875rem" }], //18px / 27px
        t1: ["1.5rem", { lineHeight: "2.25rem" }], //24px / 36px
        h1: ["2rem", { lineHeight: "3rem" }], //32px / 48px
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        regular: 400,
      },
      boxShadow: {
        custom1: "0px 4px 4px 0px #EFF4FD",
        custom2: "0px 2px 10px rgba(214, 216, 219, 0.25)",
      }
    },
  },
  plugins: [],
}

