<script>
	import Head from "$components/Head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: "Blog",
		description: "Blog Hyper-Z11",
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
			<p class="my-1 text-sm text-gray-400">{formatDate(date)}</p>
			<p class="text-md my-2">{description}</p>
			<a class="text-blue-500 hover:text-blue-400" href="/blogs/{slug}">Baca selengkapnya</a>
		</div>
	{/each}
</section>
