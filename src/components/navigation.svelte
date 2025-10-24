<script>
	import Icon from "@iconify/svelte";

	let { menu } = $props();
	let opened = $state(false);

	const toggle = (state) => () => (opened = state);
</script>

<!--- TODO: Improve navbar -->

<header class="flex justify-between items-center p-4 bg-gray-800 text-white fixed w-dvw top-0 left-0">
	<a href="/">Hyper-Z11</a>
	<button class="flex md:hidden" onclick={toggle(true)}><Icon icon="mdi:menu" /></button>
	<button
		class="transition ease-linear delay-100 fixed z-98 top-0 left-0 h-dvh w-dvw backdrop-brightness-{opened
			? '50'
			: '0 hidden'}"
		onclick={toggle(false)}
		aria-label="layer"
	></button>
	<nav
		class={opened
			? "flex z-100 *:flex-col flex-col gap-4 fixed top-0 right-0 bg-gray-900 h-full p-5 w-40"
			: "hidden md:block"}
		tabindex="-1"
	>
		{#if opened}
			<button class="ml-auto" onclick={toggle(false)}><Icon icon="mdi:close" /></button>
		{/if}
		<ul class="flex gap-4">
			{#each menu as { name, icon, url }}
				<li>
					<a href={url} class="flex items-center gap-1" onclick={() => setTimeout(toggle(false), 100)}
						><Icon {icon} />{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
