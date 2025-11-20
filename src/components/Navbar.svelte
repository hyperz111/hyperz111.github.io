<script>
	import { getContext } from "svelte";
	import { fade, slide } from "svelte/transition";
	import { defineTheme } from "$lib/theme.js";
	import Icon from "$components/Icon.svelte";

	let { menu } = $props();

	let opened = $state(false);
	const toggle = (state) => () => (opened = state);

	const { getTheme, toggleTheme } = getContext("Z11_THEME");
	const navbarTheme = $derived(
		defineTheme({
			dark: "bg-neutral-900 text-white",
			light: "bg-neutral-200 text-black",
		})[getTheme()],
	);

	const themeIcons = {
		auto: "laptop",
		light: "sun",
		dark: "moon",
	};
</script>

<nav class="fixed top-0 left-0 flex w-dvw items-center justify-between p-4 {navbarTheme}">
	<a class="font-black" href="/">Hyper-Z11</a>
	<button class="flex md:hidden" onclick={toggle(true)}><Icon icon="three-dots-vertical" class="h-5 w-5" /></button>
	<ul class="hidden flex-row gap-4 md:flex">
		{#each menu as { name, icon, url } (url)}
			<li>
				<a href={url} class="flex items-center gap-1" onclick={() => setTimeout(toggle(false), 100)}
					><Icon {icon} />{name}</a>
			</li>
		{/each}
		<li class="flex items-center gap-1">
			<button onclick={toggleTheme} aria-label="switch theme" class="cursor-pointer"
				><Icon icon={themeIcons[getTheme()]} /></button>
		</li>
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
			class="fixed top-0 right-0 z-100 flex h-dvh flex-col gap-4 {navbarTheme} w-35 p-5"
			in:slide={{ axis: "x" }}
			out:slide={{ axis: "x" }}>
			<li class="flex items-center justify-between">
				<button onclick={toggleTheme}><Icon icon={themeIcons[getTheme()]} /></button>
				<button onclick={toggle(false)}><Icon icon="x" /></button>
			</li>
			{#each menu as { name, icon, url } (url)}
				<li>
					<a href={url} class="flex items-center gap-1" onclick={() => setTimeout(toggle(false), 100)}
						><Icon {icon} />{name}</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
