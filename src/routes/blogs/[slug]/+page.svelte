<script>
	import Head from "$components/head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: data.frontmatter.title,
		description: data.frontmatter.description,
		type: "blogs",
		url: `/blogs/${data.frontmatter.slug}`,
	};
</script>

<svelte:head>
	<Head {config} />
</svelte:head>

<h1 class="text-4xl font-black">{data.frontmatter.title}</h1>
<p class="my-4 text-xs text-gray-400">
	{formatDate(data.frontmatter.date)} - {data.frontmatter.readingTime}
</p>

<section class="blog-main-content">
	<data.component />
</section>

<style>
	@reference "tailwindcss";

	:global(.blog-main-content pre.code-highlight) {
		@apply my-2;
	}

	:global(.blog-main-content *) {
		@apply text-sm;
	}

	:global(.blog-main-content a) {
		@apply text-blue-500;
	}

	:global(.blog-main-content a:hover) {
		@apply text-blue-400;
	}

	:global(.blog-main-content h2) {
		@apply text-3xl font-black mb-2 mt-4;
	}

	:global(.blog-main-content ul) {
		@apply list-disc;
	}

	:global(.blog-main-content ol) {
		@apply list-decimal;
	}

	:global(.blog-main-content li) {
		@apply mx-3;
	}
</style>
