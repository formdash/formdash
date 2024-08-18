/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/your-package-name/**/*.{js,jsx,ts,tsx}', // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
