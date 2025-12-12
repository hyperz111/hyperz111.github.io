import config from "@hyperz111/prettier-config/svelte";

export default {
	...config,
	plugins: [...config.plugins, "prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./src/styles/index.css",
};
