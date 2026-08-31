<script>
	import "$styles/index.css";
	import Navbar from "$components/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<meta name="google-site-verification" content="4uDolj24sCSRqDkEoBUWcz7oafNptj-pA_oAnF8szyU" />
</svelte:head>

<Navbar />

<main>
	{@render children()}
</main>
