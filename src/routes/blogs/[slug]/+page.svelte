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

<data.component />
