<script>
	import { fade, slide } from "svelte/transition";
	import Icon from "@iconify/svelte";

	let { menu } = $props();
	let opened = $state(false);

	const toggle = (state) => () => (opened = state);
</script>

<nav class="flex justify-between items-center p-4 bg-gray-800 text-white fixed w-dvw top-0 left-0">
	<a class="font-black" href="/">Hyper-Z11</a>
	<button class="flex md:hidden" onclick={toggle(true)}><Icon icon="mdi:menu" class="w-5 h-5" /></button>
	<ul class="hidden md:flex flex-row gap-4">
		{#each menu as { name, icon, url } (url)}
			<li>
				<a href={url} class="flex items-center gap-1" onclick={() => setTimeout(toggle(false), 100)}
					><Icon {icon} />{name}</a>
			</li>
		{/each}
	</ul>

	<!--- Mobile sidebar -->
	{#if opened}
		<button
			class="fixed z-98 top-0 left-0 h-dvh w-dvw backdrop-brightness-50"
			onclick={toggle(false)}
			aria-label="layer"
			in:fade
			out:fade></button>

		<ul
			class="flex flex-col gap-4 fixed z-100 top-0 right-0 h-dvh bg-neutral-900 p-5 w-35"
			in:slide={{ axis: "x" }}
			out:slide={{ axis: "x" }}>
			<li class="ml-auto"><button onclick={toggle(false)}><Icon icon="mdi:close" /></button></li>
			{#each menu as { name, icon, url } (url)}
				<li>
					<a href={url} class="flex items-center gap-1" onclick={() => setTimeout(toggle(false), 100)}
						><Icon {icon} />{name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
