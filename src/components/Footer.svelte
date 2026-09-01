<script>
	const keys = [
		{
			key: "F1",
			label: "Help",
		},
		{
			key: "↑↓",
			label: "Select item",
		},
		{
			key: "Enter",
			label: "Select",
		},
		{
			key: "F11",
			label: "Fullscreen",
		},
	];

	const keysGrid = keys.map((key) => Object.values(key)).flat();
</script>

<footer>
	{#each keysGrid as key, index}
		<span class="footer-{index % 2 === 1 ? 'key' : 'label'}">{key}</span>
	{/each}
</footer>

<style>
	footer {
		background-color: var(--cyan);
		padding: 0.75rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.footer-key {
		color: var(--black);
	}

	.footer-label {
		color: var(--bright-white);
	}

	@media (min-width: 768px) {
		footer {
			grid-template-columns: repeat(8, 1fr);
		}
	}
</style>
