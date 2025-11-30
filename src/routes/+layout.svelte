<script>
	import "$styles/index.css";
	import Navbar from "$components/Navbar.svelte";

	let { children } = $props();

	const navbarMenu = [
		{
			name: "Beranda",
			icon: "house",
			url: "/",
		},
		{
			name: "Blog",
			icon: "book-half",
			url: "/blogs",
		},
	];
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<Navbar menu={navbarMenu} />

<main class="grow bg-neutral-800 p-3 py-16 text-white">
	<div class="container mx-auto">
		{@render children()}
	</div>
</main>
