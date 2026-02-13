<script>
	import { fade, slide } from "svelte/transition";
	import Icon from "$components/Icon.svelte";

	const menu = [
		{
			name: "Beranda",
			icon: "house",
			url: "/",
		},
		{
			name: "Blog",
			icon: "book-half",
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

	let opened = $state(false);
	const toggle = (state) => () => (opened = state);
</script>

<nav class="fixed top-0 left-0 w-dvw bg-neutral-900 p-4 text-white">
	<div class="mx-auto flex w-full max-w-3xl items-center justify-between">
		<a class="font-black hover:text-neutral-300" href="/">Hyper-Z11</a>
		<button class="flex md:hidden" onclick={toggle(true)}><Icon icon="three-dots-vertical" class="h-5 w-5" /></button>
		<ul class="hidden flex-row gap-4 md:flex">
			{#each menu as { name, icon, url } (url)}
				<li>
					<a
						href={url}
						title={name}
						class="flex items-center gap-1 hover:text-neutral-300"
						onclick={() => setTimeout(toggle(false), 100)}><Icon {icon} />{name}</a>
				</li>
			{/each}
			<li><!-- Dummy, for spacing --></li>
			{#each social as { name, icon, url } (url)}
				<li>
					<a href={url} title={name} class="hover:text-neutral-300" onclick={() => setTimeout(toggle(false), 100)}
						><Icon {icon} /></a>
				</li>
			{/each}
		</ul>

		<!--- Mobile sidebar -->
		{#if opened}
			<button
				class="fixed top-0 left-0 z-98 h-dvh w-dvw backdrop-brightness-50"
				onclick={toggle(false)}
				aria-label="layer"
				in:fade
				out:fade></button>

			<ul
				class="fixed top-0 right-0 z-100 flex h-dvh w-35 flex-col gap-4 bg-neutral-900 p-5 text-white"
				in:slide={{ axis: "x" }}
				out:slide={{ axis: "x" }}>
				<li class="flex items-center justify-between">
					<button onclick={toggle(false)}><Icon icon="x" /></button>
				</li>
				{#each menu as { name, icon, url } (url)}
					<li>
						<a
							href={url}
							class="flex items-center gap-1 hover:text-neutral-300"
							onclick={() => setTimeout(toggle(false), 100)}><Icon {icon} />{name}</a>
					</li>
				{/each}
				<li class="flex items-center gap-2">
					{#each social as { name, icon, url } (url)}
						<a href={url} class="hover:text-neutral-300" onclick={() => setTimeout(toggle(false), 100)}><Icon {icon} /></a>
					{/each}
				</li>
			</ul>
		{/if}
	</div>
</nav>
