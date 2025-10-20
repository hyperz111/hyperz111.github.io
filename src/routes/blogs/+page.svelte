<script>
import { formatDate } from "$lib/utils.js";
	let { data } = $props();
</script>

{#each data.blogs as { title, description, date, slug }}
	<div>
		<h3><a href="/blogs/{slug}">{title}</a></h3>
		<p>{formatDate(date)}</p>
		<p>{description}</p>
	</div>
{/each}
