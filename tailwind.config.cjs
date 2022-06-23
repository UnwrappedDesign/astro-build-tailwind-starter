/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		 extend: {

      colors: {
        black: "#0d0d0d",

      },
      fontFamily: {

        display: [
          '"NeueHaasDisplayBlack"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],

      },
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
