<script>
	import Head from "$components/head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: "Blogs",
		description: "Hyper-Z11 blogs",
		type: "website",
		url: "/blogs",
	};
</script>

<svelte:head></svelte:head>
<Head {config} />

<section class="grid grid-cols-1 gap-4 md:grid-cols-2">
	{#each data.blogs as { title, description, date, slug } (date)}
		<div class="py-2">
			<h3 class="text-3xl font-extrabold">{title}</h3>
			<p class="my-1 text-sm text-gray-500">{formatDate(date)}</p>
			<p class="my-2 text-sm">{description}</p>
			<a class="text-blue-500 hover:text-blue-400" href="/blogs/{slug}">Read more</a>
		</div>
	{/each}
</section>
