<script>
	import Head from "$components/head.svelte";
	import { page } from "$app/state";

	const config = {
		title: "Oops...",
		description: "You got an error",
		type: "website",
		url: false,
	};
</script>

<svelte:head>
	<Head {config} />
</svelte:head>

<section class="flex justify-center items-center h-3/4">
	<div class="text-center">
		<h2 class="text-6xl font-extrabold my-2">{page.status}</h2>
		<p class="text-sm text-gray-500">If you in here, let me explain this.</p>
		<p class="text-sm text-gray-500">
			You have a message <span class="font-bold text-gray-200">"{page.error.message}"</span>
		</p>
	</div>
</section>
