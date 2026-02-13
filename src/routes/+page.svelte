<script>
	import Icon from "$components/Icon.svelte";
	import Head from "$components/Head.svelte";
	import projects from "./projects.json";

	const config = {
		title: "Hyper-Z11",
		description: "Situs Web Pribadi Hyper-Z11",
		type: "website",
		url: "/",
		isHome: true,
	};
</script>

<Head {config} />

<div class="flex flex-col">
	<div class="mx-auto flex w-fit flex-col p-4">
		<img
			class="m-auto max-h-fit max-w-30 rounded border-4 border-neutral-600 md:max-w-60"
			src="/favicon.png"
			alt="Profile" />
		<div class="mx-4 grow text-center">
			<h2 class="text-3xl font-semibold">Hyper-Z11</h2>
			<p class="text-gray-500">Seorang programmer pemula</p>
		</div>
	</div>
	<div class="grow">
		<section id="about">
			<h2>Tentang</h2>
			<p class="**:inline">
				Halo, saya <b>Hyper-Z11</b>. Seorang programmer pemula. Nama asli saya adalah
				<b>Firjatullah Zeroun</b>. Saya dari
				<a href="https://en.wikipedia.org/wiki/Indonesia"><b><Icon icon="pin-map" class="mx-1" />Indonesia</b></a>. Saya suka
				koding sebagai hobi saya dan berkontribusi ke proyek sumber terbuka jika saya mau.
			</p>
		</section>

		<section id="projects">
			<h2>Proyek</h2>
			<p>Saya telah bekerja dan berkontribusi ke beberapa proyek di bawah ini:</p>
			<ul class="list-disc">
				{#each projects as { name, description, url } (url)}
					<li class="mx-5"><a href={url}>{name} - {description}</a></li>
				{/each}
			</ul>
		</section>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	section {
		@apply my-4;
	}

	section > h2 {
		@apply text-3xl font-black;
	}

	a {
		@apply text-blue-500 hover:text-blue-400;
	}
</style>
