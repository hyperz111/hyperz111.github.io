<script>
	import Icon from "$components/Icon.svelte";
	import Head from "$components/Head.svelte";
	import data from "./data-for-home.json";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	const config = {
		title: "Hyper-Z11",
		description: "Situs Web Pribadi Hyper-Z11",
		type: "website",
		url: "/",
		isHome: true,
	};

	const what = ["programmer", "karbit", "manusia", "WNI"];
	let whatIndex = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			whatIndex = (whatIndex + 1) % what.length;
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});

	const gridMenu = [
		["Bahasa Pemograman", "languages"],
		["Alat-alat", "tools"],
		["Kerangka Kerja & Pustaka", "frameworkLibrary"],
	];

	function applyStyle(style) {
		return (event) => {
			event.target.style = style;
		};
	}
</script>

<Head {config} />

<div>
	<div class="flex flex-col md:flex-row">
		<div class="mx-auto flex w-fit flex-col p-4">
			<img
				class="m-auto max-h-fit max-w-30 rounded border-4 border-neutral-600 md:max-w-60"
				src="/favicon.png"
				alt="Profile" />
			<div class="mx-4 grow text-center">
				<h2 class="text-3xl font-semibold">Hyper-Z11</h2>
				<p class="text-gray-500">
					Seorang
					{#key whatIndex}
						<span in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
							{what[whatIndex]}
						</span>
					{/key}
				</p>
			</div>
		</div>
		<div class="grow">
			<section id="about">
				<h2>Tentang</h2>
				<p class="**:inline">
					Halo, saya <b>Hyper-Z11</b>. Seorang programmer pemula. Nama asli saya adalah
					<b>Firjatullah Zeroun</b>. Saya dari
					<a href="https://id.wikipedia.org/wiki/Indonesia"><b><Icon icon="googlemaps" class="h-5" />Indonesia</b></a>. Saya
					suka koding sebagai hobi saya dan berkontribusi ke proyek sumber terbuka jika saya mau. Anda mungkin tidak akan
					menemukan banyak hal disini. Jadi terima kasih sudah berkunjung. Dan jika anda mau, mungkin anda bisa mengunjungi
					<a href="/blogs">kumpulan blog saya</a>.
				</p>
			</section>

			<section id="projects">
				<h2>Proyek</h2>
				<p>Saya telah bekerja dan berkontribusi ke beberapa proyek di bawah ini:</p>
				<ul class="list-disc">
					{#each data.projects as { name, description, url } (url)}
						<li class="mx-5"><a href={url}>{name} - {description}</a></li>
					{/each}
				</ul>
			</section>
		</div>
	</div>
	<div>
		{#each gridMenu as menu}
			<section>
				<h2>{menu[0]}</h2>
				<div class="grid gap-2 min-[375px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
					{#each data[menu[1]] as { name, icon, color } (name)}
						<!-- svelte-ignore a11y_no_static_element_interactions -- how to fix it? -->
						<div
							class="group flex cursor-pointer gap-2 rounded-xl border-2 border-neutral-300 p-4 hover:scale-90"
							onmouseenter={applyStyle(`color: ${color}; border-color: ${color};`)}
							onmouseleave={applyStyle(``)}
							aria-label={name}>
							<Icon {icon} />
							<span>{name}</span>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	section {
		@apply my-4;
	}

	section > h2 {
		@apply mb-2 text-3xl font-black;
	}

	a {
		@apply text-blue-500 hover:text-blue-400;
	}
</style>
