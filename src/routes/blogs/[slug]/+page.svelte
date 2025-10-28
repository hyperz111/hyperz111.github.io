<script>
	import Head from "$components/head.svelte";
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

<h1 class="text-4xl font-black my-2">{data.frontmatter.title}</h1>
<p class="my-4 text-xs text-gray-400">
	{formatDate(data.frontmatter.date)} - {data.frontmatter.readingTime}
</p>

<section class="blog">
	<data.component />
</section>

<style>
	@reference "tailwindcss";

	:global(.blog pre, .blog p) {
		@apply my-2;
	}

	:global(.blog pre.code-highlight > .badge) {
		@apply absolute text-white right-3 px-3 py-1 bg-neutral-700 transition-opacity duration-500 opacity-0;
	}

	:global(.blog pre.code-highlight:focus > .badge) {
		@apply opacity-100;
	}

	:global(.blog a) {
		@apply text-blue-500;
	}

	:global(.blog a:hover) {
		@apply text-blue-400;
	}

	:global(.blog h2, .blog h3, .blog h4, .blog h5, .blog h6) {
		@apply font-black mb-2 mt-4;
	}

	:global(.blog h2) {
		@apply text-3xl;
	}

	:global(.blog h3) {
		@apply text-2xl;
	}

	:global(.blog h4) {
		@apply text-xl;
	}

	:global(.blog h5) {
		@apply text-xl;
	}

	:global(.blog h6) {
		@apply text-xl;
	}

	:global(.blog ul) {
		@apply list-disc;
	}

	:global(.blog ol) {
		@apply list-decimal;
	}

	:global(.blog li) {
		@apply mx-3;
	}
</style>
