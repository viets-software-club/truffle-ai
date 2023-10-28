/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      fontSize: {
        xxs: '10px'
      },
      colors: {
        teal: '#01B3C0',
        red: {
          300: '#e57069',
          500: '#c5534b'
        },
        mustard: '#988300',
        yellow: '#F3CA4D',
        orange: '#F3A04B',
        purple: {
          300: '#BC88FD',
          500: '#8c8fd9'
        },
        blue: '#4FA8FD',
        green: {
          300: '#3ad48d',
          500: '#36956a'
        },
        indigo: {
          100: '#E1E8FF',
          300: '#A6B5FD',
          500: '#585cc8',
          700: '#4439CB',
          900: '#322F82'
        },
        gray: {
          100: '#EFF0FD',
          300: '#D3D4E1',
          500: '#86879A',
          600: '#2E2F48',
          700: '#27283C',
          800: '#2D2E3D',
          850: '#202231',
          900: '#1A1B24'
        },
        twitter: '#1DA1F2',
        hackernews: '#FF6600'
      },
      borderRadius: {
        md: '5px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(circle at 50% -70%, #191D3B, #191D3B, #191A23)'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
