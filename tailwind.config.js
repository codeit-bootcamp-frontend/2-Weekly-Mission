/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linkbrary-primary-color':'#6D6AFE',
        'linkbrary-red': '#FF5B56',
        'the-julge-black': '#111322',
        'linkbrary-white': '#FFF',
        'linkbrary-gray-100': '#373740',
        'linkbrary-gray-60': '#9FA6B2',
        'linkbrary-gray-20': '#CCD5E3',
        'linkbrary-gray-10': '#E7EFFB',
        'linkbrary-bg': '#F0F6FF',
        'gra-purpleblue-to-skyblue' : 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)',
      },
    },
  },
  plugins: [],
}

