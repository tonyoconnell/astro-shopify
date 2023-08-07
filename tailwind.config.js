/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#333",
        black: "#000",
      },
      fontFamily: {
        "text-regular-normal": "Roboto",
      },
    },
    fontSize: {
      xs: "12px",
      "3xs": "10px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      "11xl": "30px",
      "5xl": "24px",
      xl: "20px",
      "13xl": "32px",
      "37xl": "56px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "768px",
      },
      sm: {
        max: "428px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
