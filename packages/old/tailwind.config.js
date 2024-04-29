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
					400: '#c55049'
				},
				mustard: '#988300',
				yellow: '#F3CA4D',
				orange: '#F3A04B',
				purple: '#BC88FD',
				blue: '#4FA8FD',
				green: {
					300: '#3ad48d',
					500: '#36956a'
				},
				indigo: {
					100: '#E1E8FF',
					300: '#A6B5FD',
					500: '#575BC7',
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
					850: '#222',
					900: '#111'
				},
				twitter: '#1DA1F2',
				hackernews: '#FF6600'
			},
			borderRadius: {
				md: '7px'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
}
