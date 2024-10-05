/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'], // Roboto for base content
        heading: ['Anton', 'sans-serif'], // Anton for headings
        footer: ['Oswald', 'sans-serif'], // Oswald for footer headers
      },
      fontWeight: {
        regular: 400,
        medium: 500, // Medium weight for headings
      },
    },
  },
  plugins: [],
};
