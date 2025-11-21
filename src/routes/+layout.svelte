<script>
	import "$styles/index.css";
	import Navbar from "$components/Navbar.svelte";
	import Footer from "$components/Footer.svelte";

	let { children } = $props();

	const navbarMenu = [
		{
			name: "Home",
			icon: "house",
			url: "/",
		},
		{
			name: "Blogs",
			icon: "book-half",
			url: "/blogs",
		},
	];
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<Navbar menu={navbarMenu} />

<main class="grow bg-neutral-800 p-3 pt-16 text-white">
	<div class="container mx-auto">
		{@render children()}
	</div>
</main>

<Footer text="Copyright &copy; 2025-Present Hyper-Z11. All rights reserved." />

<!--
	Ghost element for register some classes to make
	theme switcher works properly.
-->
<span class={["dark:bg-neutral-800", "dark:bg-neutral-900", "dark:text-white"].join(" ")}></span>
