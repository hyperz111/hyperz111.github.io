<script>
	let { config } = $props();

	let {
		title,
		isHome = false,

		description,
		type,
		url,
	} = config;

	const ogUrl = `https://hyperz111.github.io${url}`;
</script>

<svelte:head>
	<title>{title}{!isHome ? " - Hyper-Z11" : ""}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta property="og:type" content={type} />
	{#if url !== false}
		<meta property="og:url" content={ogUrl} />
	{/if}
	<meta
		property="og:image"
		content="https://www.gravatar.com/avatar/14ef2f372719714e6084be2efb400f069316e03aa62c87a28e17f92544a547e0?s=200" />
</svelte:head>
