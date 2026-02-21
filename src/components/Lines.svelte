<script>
	import { onMount } from "svelte";

	const { height = $bindable(0), width = $bindable(0), ...rest } = $props();

	let perHeight = $derived(Math.floor(height / 4));
	let perWidth = $derived(Math.floor(width / 4));

	let halfHeight = $derived(perHeight * 2);

	/** @type {HTMLCanvasElement} */
	let canvas;
	/** @type {number} */
	let frame;

	let offset = $state(0);

	onMount(() => {
		const context = canvas.getContext("2d");
		context.strokeStyle = "#6a7282";

		function animate() {
			context.clearRect(0, 0, width, height);

			context.setLineDash([width, width]);
			offset = offset - 5;
			context.lineDashOffset = offset;

			context.beginPath();

			context.moveTo(0, halfHeight);
			context.lineTo(perWidth, halfHeight);
			context.lineTo(perWidth * 2, perHeight);
			context.lineTo(perWidth * 3, halfHeight + perHeight);

			context.lineTo(width, halfHeight);
			context.stroke();
			frame = requestAnimationFrame(animate);
		}

		animate();

		return () => cancelAnimationFrame(frame);
	});
</script>

<canvas bind:this={canvas} {height} {width} class="fixed mx-auto"></canvas>
