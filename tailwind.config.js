/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-low': 'var(--surface-low)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right bottom, var(--gradient-start), var(--gradient-end))',
      },
    },
  },
  plugins: [],
};