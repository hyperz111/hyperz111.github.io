<script>
	import Head from "$components/head.svelte";

	const config = {
		title: "Hyper-Z11",
		isHome: true,
		description: "Hyper-Z11 personal website",
		type: "homepage",
		url: "",
	};
</script>

<svelte:head>
	<Head {config} />
</svelte:head>

<h2 class="text-xl font-extrabold text-center">Welcome to My Homepage 🎉</h2>
<img class="w-1/2 md:w-1/4 mx-auto" src="/memes/meme-1.png" alt="Salam akal sehat" />
