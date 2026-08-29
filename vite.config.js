import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { iconify } from "./scripts/iconify-plugin.js";

export default defineConfig({
	plugins: [sveltekit(), iconify()],
});
