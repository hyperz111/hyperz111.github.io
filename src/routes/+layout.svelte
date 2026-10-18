<script>
	import "./global.css";

	let { children } = $props();
	let height = $state(0);

	const interval = setInterval(() => {
		if (height++ > 100) {
			clearInterval(interval);
		}
	}, 50);
</script>

<div class="blackframe" style:transform="translateY({height}%)" hidden={height >= 100}></div>

{@render children?.()}

<style>
	.blackframe {
		background: var(--black);
		position: fixed;
		inset: 0;
		z-index: 9999;
		pointer-events: none;
	}
</style>
