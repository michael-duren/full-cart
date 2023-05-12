/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        geraldine: '#f99b7d',
        'geraldine-light': '#f9b7a1',
        'geraldine-dark': '#f97d5f',
        mandy: '#e76161',
        'mandy-light': '#e77d7d',
        'mandy-dark': '#e73d3d',
        'h-pink': '#b04759',
        'h-pink-light': '#b05f6f',
        'h-pink-dark': '#b02f45',
        'cascade-blue': '#8bacaa',
        'del-purple': '#ac8b8d',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Bitter"', 'serif'],
      },
    },
  },
  plugins: [],
};

// default text color for text-gray-800
