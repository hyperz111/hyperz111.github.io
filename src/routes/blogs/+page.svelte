<script>
	import Head from "$components/head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: "Blogs",
		description: "Hyper-Z11 blogs",
		type: "blogs",
		url: "/blogs",
	};
</script>

<svelte:head>
	<Head {config} />
</svelte:head>

<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each data.blogs as { title, description, date, slug } (date)}
		<div class="py-2">
			<h3 class="text-3xl font-extrabold">{title}</h3>
			<p class="text-sm text-gray-500 my-1">{formatDate(date)}</p>
			<p class="text-sm my-2">{description}</p>
			<a class="text-blue-500 hover:text-blue-400" href="/blogs/{slug}">Read more</a>
		</div>
	{/each}
</section>
