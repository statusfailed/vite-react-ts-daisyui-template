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

  daisyui: {
    themes: ["aqua", "retro"],
    lightTheme: "retro",
    darkTheme: "aqua",
  }
}
