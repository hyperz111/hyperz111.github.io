<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import { likelyWithKeyboard } from "keyux";
	import { onMount } from "svelte";

	let hidden = $state(false);
	let maybeHasKeyboard = $state(false);

	setInterval(() => {
		hidden = !hidden;
	}, 500);

	onMount(() => {
		maybeHasKeyboard = likelyWithKeyboard(window);
	});
</script>

<svelte:window onkeydown={() => goto("/")} />

<div>
	<p>{page.status} {page.error.message}</p>
	<p>{maybeHasKeyboard ? "Press any key" : "Touch anything"} to continue...<span class="cursor" {hidden}>|</span></p>
</div>

<style>
	div {
		background-color: var(--black);
		color: var(--white);
		height: 100dvh;
		margin: 0;
		font-family: ibmbios2y;
		padding: 0.25rem;
	}

	p {
		margin: 0;
	}

	.cursor {
		background-color: var(--white);
	}
</style>
