import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import remarkReadingTime from "./scripts/remark-reading-time.js";
import highlighter from "./scripts/highlighter.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"],
			remarkPlugins: [remarkReadingTime],
			highlight: {
				highlighter: highlighter,
			},
		}),
	],
	kit: {
		adapter: adapter({
			pages: "dist",
			strict: true,
		}),
		alias: {
			$styles: "./src/styles",
			$components: "./src/components",
		},
	},
};

export default config;
