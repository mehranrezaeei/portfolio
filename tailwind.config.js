/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        mover: "mover 3s ease-in-out infinite",
      },
      keyframes: {
        mover: {
          "0% , 100%": { transform: "translate(0 , 0)" },
          "50%": { transform: "translate(0 , -20px)" },
        },
      },
      colors: {
        ClBlack: {
          700: "#7e7e82",
          800: "#232323",
          900: "#111111",
        },
        ctrgreen: "#0aff9d",
      },
    },
  },
  plugins: [],
};
