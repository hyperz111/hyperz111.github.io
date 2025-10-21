<script>
	import { formatDate } from "$lib/utils.js";
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>
</svelte:head>

<div>
	<h1>{data.frontmatter.title}</h1>
	<p>{formatDate(data.frontmatter.date)} - {data.frontmatter.readingTime} ({data.frontmatter.wordCount})</p>
</div>

<data.component />
