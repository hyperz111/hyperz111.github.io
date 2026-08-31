<script>
	import Head from "$components/Head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: data.frontmatter.title,
		description: data.frontmatter.description,
		type: "article",
		url: `/blogs/${data.frontmatter.slug}`,
	};
</script>

<Head {config} />

<section class="blog">
	<h1>{data.frontmatter.title}</h1>
	<span>{formatDate(data.frontmatter.date)}</span>
	<data.component />
</section>

<style>
	:global(.blog pre.code-highlight) {
		background-color: var(--blue);
		color: var(--white);
		padding: 0.5rem;
		overflow-x: auto;
		white-space: pre;
	}
</style>
