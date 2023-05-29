/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(circle at 50% -70%, #191D3B, #191D3B, #191A23)'
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px'
      },
      colors: {
        teal: '#00B2BF',
        red: '#EB5757',
        mustard: '#978200',
        yellow: '#F2C94C',
        orange: '#F2994A',
        purple: '#BB87FC',
        blue: '#4EA7FC',
        green: '#4CB782',

        indigo: {
          100: '#E0E7FF',
          300: '#A5B4FC',
          500: '#575BC7',
          700: '#4338CA',
          900: '#312E81'
        },
        gray: {
          100: '#EEEFFC',
          300: '#D2D3E0',
          500: '#858699',
          700: '#26273B',
          800: '#2C2D3C',
          850: '#1F2130',
          900: '#191A23'
        }
      }
    }
  },
  plugins: []
}
