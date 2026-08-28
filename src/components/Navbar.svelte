<script>
	import Icon from "$components/Icon.svelte";

	const pages = [
		{
			name: "Blog",
			icon: "bookstack",
			url: "/blogs",
		},
	];

	const social = [
		{
			name: "GitHub",
			url: "https://github.com/hyperz111",
			icon: "github",
		},
	];

	const menu = [...pages, ...social];
</script>
