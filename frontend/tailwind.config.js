/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {fontFamily: {
      serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      sans: ['Arial', 'Helvetica', 'sans-serif'],
    },},
  },
  plugins: [],
};
