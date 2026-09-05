<script>
	import Head from "$components/Head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: "Blogs",
		description: "Zen's blogs",
		type: "website",
		url: "/blogs",
	};
</script>

<Head {config} />

<section>
	<h1>Blogs</h1>
	<p><i>I wrote these when i have a time and a mood.</i></p>
	<div role="listbox" class="grid-list">
		{#each data.blogs as blog}
			<a role="option" href="/blogs/{blog.slug}">
				<span>{blog.title}</span>
				<span>[see more]</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.grid-list > *:focus {
		color: var(--bright-white);
	}
</style>
