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
		title: "About",
		description: "About Hyper-Z11",
		type: "profile",
		url: "/about",
	};
</script>

<Head {config} />

<section id="about">
	<img class="mx-auto w-1/3 rounded border-4 border-neutral-600" src="/favicon.png" alt="Profile" />
	<h2>About</h2>
	<p class="**:inline">
		Hello, i'm <b>Hyper-Z11</b> (he/him). The {yearsOld} years old beginner programmer. My real name is
		<b>Firjatullah Zeroun</b>. I'm from
		<a href="https://en.wikipedia.org/wiki/Tangerang"><b><Icon icon="pin-map" />Tangereng, Banten, Indonesia</b></a>. I like
		coding as my hobby and contributing to open source projects if i want.
	</p>
</section>

<section id="profile">
	<h2>Profile</h2>
	<p>You can visit my profile if you want 😁</p>
	<ul class="**:flex">
		{#each profiles as { name, icon, url } (url)}
			<li><a href={url} class="items-center gap-1"><Icon {icon} />{name}</a></li>
		{/each}
	</ul>
</section>

<section id="projects">
	<h2>Projects</h2>
	<p>I have worked and contributed to some projects below:</p>
	<ul class="list-disc">
		{#each projects as { name, description, url } (url)}
			<li class="mx-4"><a href={url}>{name} - {description}</a></li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	@reference "tailwindcss";

	section {
		@apply my-4;
	}

	section > h2 {
		@apply text-3xl font-black;
	}

	a {
		@apply text-blue-500;
	}

	a:hover {
		@apply text-blue-400;
	}
</style>
