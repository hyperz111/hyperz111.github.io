<script>
	import "$styles/index.css";
	import Nav from "$components/navigation.svelte";
	import Footer from "$components/footer.svelte";
	import { setContext } from "svelte";
	import { defineTheme, themes } from "$lib/theme.js";

	let { children } = $props();

	const navbarMenu = [
		{
			name: "Home",
			icon: "mdi:home",
			url: "/",
		},
		{
			name: "About",
			icon: "mdi:account-circle",
			url: "/about",
		},
		{
			name: "Blogs",
			icon: "mdi:book",
			url: "/blogs",
		},
	];

	let themeIndex = $state(0);
	const toggleTheme = () => (themeIndex = (themeIndex + 1) % themes.length);
	const currentTheme = $derived(themes[themeIndex]);

	setContext("Z11_THEME", {
		toggleTheme,
		getTheme: () => currentTheme,
	});

	const baseTheme = $derived(
		defineTheme({
			dark: "bg-neutral-800 text-white",
			light: "bg-neutral-100 text-black",
		})[currentTheme],
	);
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<Nav menu={navbarMenu} />

<main class="grow p-3 pt-16 {baseTheme}">
	{@render children()}
</main>

<Footer text="Copyright &copy; 2025-Present Hyper-Z11. All rights reserved." />

<!--
	Ghost element for register some classes to make
	theme switcher works properly.
-->
<span class={["dark:bg-neutral-800", "dark:bg-neutral-900", "dark:text-white"].join(" ")}></span>
