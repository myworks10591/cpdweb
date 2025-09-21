/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#32C36C',
          50: '#f0fdf4',
          500: '#32C36C',
          600: '#16a34a',
          700: '#15803d',
        },
        dark: '#1A2A36',
        light: '#F6F7F8',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
      }
    },
  },
  plugins: [],
}