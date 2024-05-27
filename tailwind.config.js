/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F2F4FF",
          200: "#BCCAFF",
          300: "#85A5FB",
          400: "#4E84F3",
          500: "#1966E3",
          600: "#0854B4",
          700: "#024385",
          800: "#003055",
          900: "#001826",
        },
      },
    },
  },
  plugins: [],
};
