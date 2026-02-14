<script>
	import { icons } from "@iconify-json/simple-icons/icons.json";
	import { height } from "@iconify-json/simple-icons/info.json";

	let { icon, class: classes, ...rest } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={height}
	{height}
	fill="currentColor"
	viewBox="0 0 {height} {height}"
	class={classes}
	{...rest}>{@html icons[icon]?.body ?? ""}</svg>
