<script>
	let {
		title,
		isHome = false,

		description,
	} = $props();
</script>

<title>{title}{!isHome ? "- Hyper-Z11" : ""}</title>
<meta name="description" content={description} />

<meta property="og:title" content="" />
<meta property="og:type" content="" />
<meta property="og:url" content="" />
<meta property="og:image" content="" />
<meta property="og:image:alt" content="" />
