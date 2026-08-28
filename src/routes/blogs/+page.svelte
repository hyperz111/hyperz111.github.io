<script>
	import Head from "$components/Head.svelte";
	import { formatDate } from "$lib/utils.js";

	let { data } = $props();

	const config = {
		title: "Blog",
		description: "Blog Hyper-Z11",
		type: "website",
		url: "/blogs",
	};
</script>

<Head {config} />
