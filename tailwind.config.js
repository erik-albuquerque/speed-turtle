/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        green: {
          500: '#28a745',
        },
        blue: {
          500: '#1e90ff',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
