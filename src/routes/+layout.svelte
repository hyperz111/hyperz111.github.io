<script>
	import "$styles/index.css";
	import Navbar from "$components/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<Navbar />

<main class="">
	<div class="">
		{@render children()}
	</div>
</main>
