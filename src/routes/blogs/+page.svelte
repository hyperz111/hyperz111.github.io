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
	<ul class="grid-list">
		{#each data.blogs as blog}
			<li>
				<span>{blog.title}</span>
				<a href="/blogs/{blog.slug}">[see more]</a>
			</li>
		{/each}
	</ul>
</section>
