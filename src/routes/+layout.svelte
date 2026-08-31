<script>
	import "./global.css";
	import Navbar from "$components/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<meta name="google-site-verification" content="4uDolj24sCSRqDkEoBUWcz7oafNptj-pA_oAnF8szyU" />
</svelte:head>

<Navbar />

<main>
	<div class="children">{@render children()}</div>

	<div class="tip-title">
		<span>Good Tip</span>
	</div>
	<div class="tip-text">
		<p>You can use keyboard keys for do a navigation.</p>
	</div>
</main>

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

	@media (min-width: 768px) {
		main {
			grid-template-columns: 3fr 1fr;
			grid-template-rows: auto 1fr;
		}

		main > .children {
			grid-row: 1 / 3;
		}

		main > .tip-title {
			display: block;
			grid-column: 2;
			grid-row: 1;
		}

		main > .tip-text {
			display: block;
			grid-column: 2;
			grid-row: 2;
		}
	}
</style>
