/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sub-heading": "#0F172A",
        "sub-nav": "#334155",
        "sub-nav-active": "#993AE2",
        primary: "#181D27",
        tertiary: "#535862",
      },
    },
  },
  plugins: [],
};
