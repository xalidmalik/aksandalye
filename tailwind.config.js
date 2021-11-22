module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        astoria: ["AstoriaMedium", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
