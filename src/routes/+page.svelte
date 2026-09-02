<script>
	import Head from "$components/Head.svelte";

	const config = {
		description: "Zen's personal website",
		type: "website",
		url: "/",
	};

	const age = new Date().getFullYear() - 2011;

	const connections = [
		{
			name: "GitHub",
			url: "https://github.com/hyperz111",
		},
		{
			name: "YouTube",
			url: "https://youtube.com/@hyperz111",
		},
		{
			name: "TikTok",
			url: "https://tiktok.com/@hyperz111",
		},
		{
			name: "Gravatar",
			url: "https://gravatar.com/hyperz111",
		},
		{
			name: "Spotify",
			url: "https://open.spotify.com/user/31oib2epa67o7ccro3j2z6pf55cq",
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/hyperz111",
		},
	];

	const projects = [
		{
			name: "hyperz111.github.io",
			url: "https://github.com/hyperz111/hyperz111.github.io",
		},
		{
			name: "npsze",
			url: "https://github.com/hyperz111/npsze",
		},
		{
			name: "tryurl",
			url: "https://github.com/hyperz111/tryurl",
		},
	];
</script>

<Head {config} />

<section>
	<h1>Hello there :)</h1>
	<p>
		Hello visitor, i'm <b>Zen</b>, but my real nickname is <b>Zeroun</b> (<i>ze-ron</i>). I'm {age} years old beginner programmer
		from Indonesia. I like coding as my hobby and contribute to some open source projects, if i want.
	</p>
</section>

<section>
	<h2>Projects</h2>
	<p>I have some cool stuffs, and you probably will like it.</p>
	<ul class="grid-list">
		{#each projects as link}
			<li>
				<span>{link.name}:</span>
				<a href={link.url}>[open]</a>
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Connections</h2>
	<ul class="grid-list">
		{#each connections as link}
			<li>
				<span>{link.name}:</span>
				<a href={link.url}>[open]</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.grid-list > li > span {
		color: var(--blue);
	}
</style>
