<script>
	import data from "virtual:iconify-simple-icons";
	import { height } from "@iconify-json/simple-icons/info.json";

	let { icon, class: classes, ...rest } = $props();

	const icons = new Proxy(data, {
		get(o, p) {
			if (p in o) {
				return o[p];
			} else {
				throw new Error(`Icon \`${p}\` is not available.`);
			}
		},
	});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={height}
	{height}
	fill="currentColor"
	viewBox="0 0 {height} {height}"
	class={classes}
	{...rest}>{@html icons[icon] ?? ""}</svg>
