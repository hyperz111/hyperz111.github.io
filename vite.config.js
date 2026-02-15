import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { iconify } from "./scripts/iconify-plugin.js";
import dataForHome from "./src/routes/data-for-home.json" with { type: "json" };

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		/* prettier-ignore */
		iconify([
			...dataForHome.languages.map((data) => data.icon),
			...dataForHome.tools.map((data) => data.icon),
			...dataForHome.frameworkLibrary.map((data) => data.icon),
			"bookstack",
			"github",
			"googlemaps"
		]),
	],
	json: {
		namedExports: true,
	},
});
