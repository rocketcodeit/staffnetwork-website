/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2.5rem',
        xl: '2.75rem',
        '2xl':'3rem'
      }
    },
    extend: {
      height:{
        'screen-90': '90vh'
      },
      colors:{
        primary:{
          '100': '#d1dbe7',
          '200': '#a3b7cf',
          '300': '#7593b7',
          '400': '#476e9f',
          light: '#2263B3',
          DEFAULT: '#1A4B88',
          '600': '#143c6c',
          '700': '#0f2d51',
          '800': '#0a1e36',
          '900': '#050f1b',
          dark: '#12335D',
        }
      },
      container:{
        screens:{
          '3xl': '1600px',
          '4xl': '2000px'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
