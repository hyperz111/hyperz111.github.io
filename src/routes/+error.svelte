<script>
	import { page } from "$app/state";
</script>

<div>
	<p>{page.status}: {page.error.message}</p>
</div>

<style>
	div {
		background-color: var(--black);
		color: var(--white);
		height: 100dvh;
		margin: 0;
		font-family: ibmbios2y;
		padding: 0.75rem;
	}

	p {
		margin: 0;
	}
</style>
