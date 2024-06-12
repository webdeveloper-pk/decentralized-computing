/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "": "rgba(0, 98, 187, 1)",
      },
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
        "futura-light": "FuturaCyrillicLight",
        "futura-medium": "FuturaCyrillicMedium",
        "futura-bold": "FuturaCyrillicBold",
      },
    },
  },
  plugins: [],
};
