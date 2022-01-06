module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontSize: {
			html: '62.5%',
			sm: '1.6rem',
			md: '2.1rem',
			lg: '5rem',
		},
		screens: {
			'2xl': { max: '1536px' },
			xl: { max: '1280px' },
			lg: { max: '1024px' },
			md: { max: '768px' },
			sm: { max: '640px' },
			xs: { max: '500px' },
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				gray: {
					DEFAULT: '#222222',
				},
			},
			spacing: {
				'2xl': '100rem',
				xl: '50rem',
				lg: '20rem',
				md: '5rem',
				sm: '3rem',
				xs: '1rem',
			},
		},
	},
	variants: {
		extend: {},
	},
};
