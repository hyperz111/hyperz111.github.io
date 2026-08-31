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
	];
</script>

<Head {config} />

<section>
	<h1>Hello there :)</h1>
	<p>
		Hello visitor, i'm <b>Zen</b> and my real nickname is <b>Zeroun</b> (<i>ze-ron</i>). I'm {age} years old beginner programmer
		from Indonesia. I like coding as my hobby and contribute to some open source projects, if i want.
	</p>
</section>

<section>
	<h2>Connections</h2>
	<ul class="connections">
		{#each connections as link}
			<li>
				<span>{link.name}:</span>
				<a href={link.url}>{link.url}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.connections {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-rows: repeat(1, 1fr);
		gap: 0.25rem;
	}

	.connections > li {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.connections > li > * {
		overflow-wrap: anywhere;
	}

	.connections > li > span {
		text-align: left;
	}

	.connections > li > a {
		text-align: right;
	}
</style>
