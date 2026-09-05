<script>
	import "./global.css";
	import { startKeyUX, focusGroupKeyUX, likelyWithKeyboard } from "keyux";
	import { onMount } from "svelte";
	import Navbar from "$components/Navbar.svelte";
	import Footer from "$components/Footer.svelte";

	let { children } = $props();
	let maybeHasKeyboard = $state(false);

	onMount(() => {
		maybeHasKeyboard = likelyWithKeyboard(window);
		const stopKeyUX = startKeyUX(window, [focusGroupKeyUX()]);

		return () => {
			stopKeyUX();
		};
	});
</script>

<Navbar />

<main class:maybeHasKeyboard>
	<div class="children">{@render children()}</div>

	{#if maybeHasKeyboard}
		<div class="tip-title">
			<span>Good Tip</span>
		</div>
		<div class="tip-text">
			<p>You can use keyboard keys for do a navigation.</p>
		</div>
	{/if}
</main>

{#if maybeHasKeyboard}
	<Footer />
{/if}

<style>
	main {
		flex: 1;
		margin: 0.75rem 0;
		display: grid;
		grid-template-columns: 1fr;
	}

	main > * {
		padding: 0.75rem;
		border: 0.1rem solid var(--black);
	}

	main > .children {
		min-width: 0;
	}

	main > .tip-title,
	main > .tip-text {
		display: none;
	}

	main > .tip-title {
		text-align: center;
	}

	@media (min-width: 768px) {
		main.maybeHasKeyboard {
			grid-template-columns: 3fr 1fr;
			grid-template-rows: auto 1fr;
		}

		main.maybeHasKeyboard > .children {
			grid-row: 1 / 3;
		}

		main.maybeHasKeyboard > .tip-title {
			display: block;
			grid-column: 2;
			grid-row: 1;
		}

		main.maybeHasKeyboard > .tip-text {
			display: block;
			grid-column: 2;
			grid-row: 2;
		}
	}
</style>
