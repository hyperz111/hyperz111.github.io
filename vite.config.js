/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import prismjs from "vite-plugin-prismjs";

export default defineConfig({
	plugins: [
		prismjs({
			languages: ["javascript"],
			plugins: ["normalize-whitespace"],
			theme: "tomorrow",
			css: true,
		}),
	],
});
