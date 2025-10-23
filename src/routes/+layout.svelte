<script>
	import "$styles/index.css";
	import Nav from "$components/navigation.svelte";
	import Footer from "$components/footer.svelte";

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
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<Nav menu={navbarMenu} />

<main class="p-3 pt-15.5 grow bg-gray-900 text-white">
	{@render children()}
</main>

<Footer text="Copyright &copy; 2025-Present Hyper-Z11. All rights reserved." />
