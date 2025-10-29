import config from "@hyperz111/prettier-config";

export default {
	...config,
	bracketSameLine: true,
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./src/styles/index.css",
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
