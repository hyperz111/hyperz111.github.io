<script>
	import Head from "$components/Head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: "Blogs",
		description: "hyperz111' blogs",
		type: "website",
		url: "/blogs",
	};
</script>

<Head {config} />

<section>
	<h1>Blogs</h1>
	<p><i>I wrote these when i have a time and a mood.</i></p>
	<ul class="blogs">
		{#each data.blogs as blog}
			<li>
				<span>{blog.title}</span>
				<a href="/blogs/{blog.slug}">[see more]</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.blogs {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-rows: repeat(1, 1fr);
		gap: 0.25rem;
	}

	.blogs > li {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.blogs > li > * {
		overflow-wrap: anywhere;
	}

	.blogs > li > span {
		text-align: left;
		color: var(--blue);
	}

	.blogs > li > a {
		text-align: right;
	}
</style>
