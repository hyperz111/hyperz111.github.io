<script>
	import "$styles/index.css";
	import Navbar from "$components/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<Navbar />

<main class="grow bg-neutral-950 p-4 py-16 text-white">
	<div class="mx-auto w-full max-w-3xl animate-up">
		{@render children()}
	</div>
</main>
