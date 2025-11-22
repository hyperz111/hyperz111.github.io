<script>
	import Icon from "$components/Icon.svelte";
	import Head from "$components/Head.svelte";
	import projects from "./projects.json";

	const profiles = [
		{
			url: "https://github.com/hyperz111",
			icon: "github",
		},
		{
			url: "https://discord.gg/hyperz111",
			icon: "discord",
		},
	];

	const config = {
		title: "Hyper-Z11",
		description: "Hyper-Z11 Personal Website",
		type: "website",
		url: "/",
		isHome: true,
	};
</script>

<Head {config} />

<div class="flex flex-col gap-2 md:flex-row">
	<div class="flex w-fit md:flex-col">
		<img
			class="m-auto max-h-fit max-w-30 rounded border-4 border-neutral-600 md:max-w-60"
			src="/favicon.png"
			alt="Profile" />
		<div class="mx-4 grow md:*:text-center">
			<h2 class="text-3xl font-semibold">Hyper-Z11</h2>
			<p class="text-gray-500">The beginner programmer</p>
			<ul class="my-2 flex w-fit flex-row flex-wrap-reverse justify-center gap-2 md:mx-auto">
				{#each profiles as { icon, url } (url)}
					<li><a href={url} class="flex items-center gap-1"><Icon {icon} /></a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="grow">
		<section id="about">
			<h2>About</h2>
			<p class="**:inline">
				Hello, i'm <b>Hyper-Z11</b> (he/him). The beginner programmer. My real name is
				<b>Firjatullah Zeroun</b>. I'm from
				<a href="https://en.wikipedia.org/wiki/Indonesia"><b><Icon icon="pin-map" class="mx-1" />Indonesia</b></a>. I like
				coding as my hobby and contributing to open source projects if i want.
			</p>
		</section>

		<section id="projects">
			<h2>Projects</h2>
			<p>I have worked and contributed to some projects below:</p>
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
