const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// Configure your color palette here
				'blueviolet': '#E5E8F4',
				'darkblue':'#171251',
			},
			fontFamily: {
				sans: ['Be Vietnam', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage:{
				'hero':"url('https://imgur.com/AdTRmEs.png')"
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
