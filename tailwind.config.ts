const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(180.96deg, #000000 0.82%, #0C489C 129.1%)",
      },
      colors: {
        primary: {
          light: "#00D4FF",
          dark: "#105CE0",
          DEFAULT: "#11ABF2",
        },
        secondary: {
          light: "#A179F5",
          dark: "#7916F5",
          DEFAULT: "#9A33F5",
        },
      },
    },
  },
  plugins: [],
};
