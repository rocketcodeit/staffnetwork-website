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
      keyframes:{

      },
      screens:{
        '3xs': '320px',
        '2xs': '375px',
        'xs': '480px',
      },
      colors:{
        primary:{
          '50': '#e8edf3',
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
        }
      },
      container:{
        screens:{
          '3xl': '1600px',
          '4xl': '2000px'
        }
      },
      flex:{
        '16-1': '0 0 calc(83.34% - 8px)',
        '16-1.125': '0 0 calc(83.34% - 12px)',
        '16-1.25': '0 0 calc(83.34% - 14px)',
        '16-1.5': '0 0 calc(83.34% - 18px)',

        '6-1': '0 0 calc(16.66% - 8px)',
        '6-1.125': '0 0 calc(16.66% - 12px)',
        '6-1.25': '0 0 calc(16.66% - 14px)',
        '6-1.5': '0 0 calc(16.66% - 18px)',

        '5-1': '0 0 calc(20% - 8px)',
        '5-1.125': '0 0 calc(20% - 12px)',
        '5-1.25': '0 0 calc(20% - 14px)',
        '5-1.5': '0 0 calc(20% - 18px)',

        '4-1': '0 0 calc(25% - 8px)',
        '4-1.125': '0 0 calc(25% - 12px)',
        '4-1.25': '0 0 calc(25% - 14px)',
        '4-1.5': '0 0 calc(25% - 18px)',

        '3-1': '0 0 calc(33.33% - 8px)',
        '3-1.125': '0 0 calc(33.33% - 12px)',
        '3-1.25': '0 0 calc(33.33% - 14px)',
        '3-1.5': '0 0 calc(33.33% - 18px)',

        '2-1': '0 0 calc(50% - 8px)',
        '2-1.125': '0 0 calc(50% - 12px)',
        '2-1.25': '0 0 calc(50% - 14px)',
        '2-1.5': '0 0 calc(50% - 18px)',

      },
      height:{
        'screen-90': '90vh'
      },
      fontSize:{
        '1.5xl':['1.125rem',{
          lineHeight:'1.5rem',
          fontWeight: '500'
        }],
        '2.5xl':['1.75rem',{
          lineHeight:'2rem',
          fontWeight: '500'
        }],
        '3.5xl':['2rem',{
          lineHeight: '2.25rem',
          fontWeight: '500'
        }],
        '4.5xl':['2.5rem',{
          lineHeight: '3rem',
          fontWeight: '500'
        }],
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
