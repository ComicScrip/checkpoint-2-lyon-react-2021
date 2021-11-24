module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        500: '500px',
      },
      dropShadow: {
        white: '0 35px 35px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
