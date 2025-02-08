/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['FiraSans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      shad,
    },
  },
  plugins: [],
};
