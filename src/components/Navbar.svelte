<script>
	import { fade, slide } from "svelte/transition";
	import Icon from "$components/Icon.svelte";

	const pages = [
		{
			name: "Blog",
			icon: "bookstack",
			url: "/blogs",
		},
	];

	const social = [
		{
			name: "GitHub",
			url: "https://github.com/hyperz111",
			icon: "github",
		},
	];

	const menu = [...pages, ...social];
</script>

<nav class="fixed top-0 left-0 w-dvw animate-down bg-neutral-950 p-4 text-white drop-shadow-lg drop-shadow-black">
	<div class="mx-auto flex w-full max-w-3xl items-center justify-between">
		<a href="/" class="hover:text-neutral-300">Z11</a>
		<ul class="flex flex-row gap-4">
			{#each menu as { name, icon, url } (url)}
				<li>
					<a href={url} title={name} class="flex gap-2 hover:text-neutral-300">
						<Icon {icon} />
						<span class="hidden md:inline">{name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
