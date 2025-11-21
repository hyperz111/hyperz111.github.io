<script>
	import Icon from "$components/Icon.svelte";
	import Head from "$components/Head.svelte";
	import projects from "./projects.json";

	const bornYear = 2011;
	let yearsOld = $state(new Date().getFullYear() - bornYear);

	const profiles = [
		{
			name: "GitHub",
			url: "https://github.com/hyperz111",
			icon: "github",
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
	<div>
		<img class="mx-auto max-h-fit max-w-3xs rounded border-4 border-neutral-600" src="/favicon.png" alt="Profile" />
		<ul class="flex my-2 flex-row gap-2 mx-auto w-fit flex-wrap-reverse justify-center">
			{#each profiles as { name, icon, url } (url)}
				<li><a href={url} class="flex items-center gap-1"><Icon {icon} />{name}</a></li>
			{/each}
		</ul>
	</div>
	<div>
		<section id="about">
			<h2>About</h2>
			<p class="**:inline">
				Hello, i'm <b>Hyper-Z11</b> (he/him). The {yearsOld} years old beginner programmer. My real name is
				<b>Firjatullah Zeroun</b>. I'm from
				<a href="https://en.wikipedia.org/wiki/Indonesia"><b><Icon icon="pin-map" class="mx-1" />Indonesia</b></a>. I like coding as my
				hobby and contributing to open source projects if i want.
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
