/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		 extend: {
      colors: {
        black: "#0d0d0d",
      },
      fontFamily: {
      },
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
