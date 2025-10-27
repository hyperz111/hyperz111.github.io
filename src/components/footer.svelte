<script>
	import { getContext } from "svelte";
	import { defineTheme } from "$lib/theme.js";

	let { text } = $props();

	const { getTheme } = getContext("Z11_THEME");
	const navbarTheme = $derived(
		defineTheme({
			light: "bg-neutral-200 text-black",
			dark: "bg-neutral-900 text-white",
		})[getTheme()],
	);
</script>

<footer class="p-4 {navbarTheme}">
	<p class="text-xs">{text}</p>
</footer>
