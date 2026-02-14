<script>
	import Head from "$components/Head.svelte";
	import { page } from "$app/state";

	const config = {
		title: "Oops...",
		description: "Anda mendapatkan kesalahan",
		type: "website",
		url: false,
	};
</script>

<svelte:head>
	<Head {config} />
</svelte:head>

<section class="flex items-center justify-center">
	<div class="text-center">
		<h2 class="my-2 text-6xl font-extrabold">{page.status}</h2>
		<p class="text-sm text-gray-500">Jika anda di sini, Mari saya jelaskan ini.</p>
		<p class="text-sm text-gray-500">
			Anda memiliki pesan <span class="font-bold text-gray-200">"{page.error.message}"</span>
		</p>
	</div>
</section>
