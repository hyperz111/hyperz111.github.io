<script>
	import "$styles/index.css";
	import Navbar from "$components/Navbar.svelte";
	import Lines from "$components/Lines.svelte";

	let { children } = $props();

	let innerHeight = $state(0);
	let innerWidth = $state(0);
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<svelte:window bind:innerHeight bind:innerWidth />

<Navbar />

<main class="grow bg-neutral-950 p-4 py-16 text-white">
	<Lines width={innerWidth - 50} height={innerHeight} />
	<div class="relative mx-auto w-full max-w-3xl animate-up">
		{@render children()}
	</div>
</main>
