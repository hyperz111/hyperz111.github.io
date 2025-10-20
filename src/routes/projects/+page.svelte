<script>
	import repos from "$lib/repos.json";
	import githubColors from "$lib/github-colors.json";
	import Icon from "@iconify/svelte";

	// No forked & archived
	let showRepos = new Promise((res, rej) =>
		setTimeout(() => {
			const rand = Math.floor(Math.random() * 10);

			return rand > 5
				? res(repos.filter((i) => !i.fork && !i.archived).slice(0, 10))
				: rej(new Error("Why this is so slow?"));
		}, 5000),
	);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section id="projects">
	<h2>Projects</h2>
	{#await showRepos}
		<p class="waiting"><Icon icon="svg-spinners:ring-resize" />Loading</p>
	{:then resolvedRepos}
		<div class="repos">
			{#each resolvedRepos as repo}
				<div class="repo">
					<h3><a href={repo.html_url}>{repo.name}</a></h3>
					<p>{repo.description}</p>

					<div class="repo-info">
						<p>
							<Icon icon="mdi:star" style="color: {githubColors.JavaScript}" />
							{repo.stargazers_count}
						</p>

						{#if repo.language}
							<p class="language">
								<Icon icon="mdi:square" style="color: {githubColors[repo.language]}" />
								{repo.language}
							</p>
						{/if}

						{#if repo.license}
							<p>
								<Icon icon="mdi:scale-balance" />
								{repo.license.spdx_id}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{:catch error}
		<div class="error">
			<p>Cannot get project repositories with error:</p>
			<pre><code>{error.stack ?? error.message ?? error}</code></pre>
		</div>
	{/await}
</section>
