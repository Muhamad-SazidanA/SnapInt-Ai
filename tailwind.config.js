/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          50: 'hsl(210, 73%, 95%)',
          100: 'hsl(210, 73%, 90%)',
          200: 'hsl(210, 73%, 80%)',
          300: 'hsl(210, 73%, 70%)',
          400: 'hsl(210, 73%, 60%)',
          500: 'hsl(210, 73%, 50%)',
          600: 'hsl(210, 73%, 40%)',
          700: 'hsl(210, 73%, 30%)',
          800: 'hsl(210, 73%, 23%)',
          900: 'hsl(210, 73%, 15%)',
        },
        blue: {
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'], // Tambahkan font-inter
      },
    },
  },
  plugins: [],
};
