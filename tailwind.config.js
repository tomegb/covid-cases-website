module.exports = {
	content: [
		'./components/*.{html,js,ts,vue}',
		'./layouts/*.{html,js,ts,vue}',
		'./pages/*.{html,js,ts,vue}',
		'./app.vue'
	],
	theme: {
		extend: {},
		fontFamily: {
			inter: ['inter', 'sans-serif'],
			poppins: ['poppins', 'serif'],
			'space-mono': ['space-mono']
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('prettier-plugin-tailwindcss'),
		require('daisyui')
	],
	// daisyUI config (optional)
	daisyui: {
		themes: ["dark", "light"],

	}
};
