module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "black-light": "#2c2c2c",
      },
      fontFamily: {
        pacifico: "Pacifico",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-focus"],
    },
  },
  plugins: [],
};
