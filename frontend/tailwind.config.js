module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
};
