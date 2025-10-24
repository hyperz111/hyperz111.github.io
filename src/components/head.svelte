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

<title>{title}{!isHome ? "- Hyper-Z11" : ""}</title>
<meta name="description" content={description} />

<meta property="og:title" content={title} />
<meta property="og:type" content={type} />
<meta property="og:url" content={ogUrl} />
<meta
	property="og:image"
	content="https://www.gravatar.com/avatar/14ef2f372719714e6084be2efb400f069316e03aa62c87a28e17f92544a547e0?s=200" />
