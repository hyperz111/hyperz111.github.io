<script>
	import Icon from "@iconify/svelte";
	import projects from "./projects.json";

	const bornYear = 2011;
	let yearsOld = $state(new Date().getFullYear() - bornYear);

	const profiles = [
		{
			name: "GitHub",
			url: "https://github.com/hyperz111",
			icon: "mdi:github",
		},
		{
			name: "TikTok",
			url: "https://tiktok.com/@hyperz111",
			icon: "simple-icons:tiktok",
		},
	];
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section id="about">
	<img class="w-1/3 mx-auto border-4 rounded border-gray-700" src="/favicon.png" alt="Profile" />
	<h2>About</h2>
	<p class="**:inline">
		Hello, i'm <b>Hyper-Z11</b> (he/him). The {yearsOld} years old beginner programmer. My real name is
		<b>Firjatullah Zeroun</b>. I'm from
		<a href="https://en.wikipedia.org/wiki/Tangerang"><b><Icon icon="mdi:location" />Tangereng, Banten, Indonesia</b></a>. I
		like coding as my hobby and contributing to open source projects if i want.
	</p>
</section>

<section id="profile">
	<h2>Profile</h2>
	<p>You can visit my profile if you want 😁</p>
	<ul class="**:flex">
		{#each profiles as { name, icon, url }}
			<li><a href={url} class="items-center gap-1"><Icon {icon} />{name}</a></li>
		{/each}
	</ul>
</section>

<section id="projects">
	<h2>Projects</h2>
	<p>I have work and contribute in some projects below:</p>
	<ul class="list-disc">
		{#each projects as { name, description, url }}
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
		font-size: theme(--text-3xl);
		font-weight: theme(--font-weight-black);
	}

	a {
		@apply text-blue-500;
	}

	a:hover {
		@apply text-blue-400;
	}
</style>
