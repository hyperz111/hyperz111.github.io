<script>
	import projects from "./projects.json";
	import Icon from "@iconify/svelte";
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<h2>Projects</h2>
	<p>I have work and contribute in some projects below:</p>
	<ul class="projects">
		{#each projects as { name, description, url }}
			<li><Icon icon="mdi:arrow-right" /><a href={url}>{name} - {description}</a></li>
		{/each}
	</ul>
</section>

<style lang="scss">
</style>
