<script>
	import "./global.css";

	let { children } = $props();
	let height = $state(100);

	const interval = setInterval(() => {
		if (height-- < 0) {
			clearInterval(interval);
		}
	}, 50);
</script>

<div class="blackframe" style:top="{100 - height}%" style:height="{height}%" hidden={height <= 0}></div>

{@render children?.()}

<style>
	.blackframe {
		position: absolute;
		height: 100dvh;
		width: 100dvw;
		background: var(--black);
	}
</style>
