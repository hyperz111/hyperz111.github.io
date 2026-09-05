<script>
	import Head from "$components/Head.svelte";
	import { page } from "$app/state";

	const config = {
		title: "Oops...",
		description: "Anda mendapatkan kesalahan",
		type: "website",
		url: false,
	};
</script>

<svelte:head>
	<Head {config} />
</svelte:head>
