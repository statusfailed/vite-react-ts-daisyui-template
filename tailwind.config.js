/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your project structure
	],
	theme: {
		extend: {},
	},
	plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],

  // set data-theme on <html> tag to change theme.
  daisyui: {
    themes: ["light", "aqua", "retro"],
  }
}
