<script>
	const menus = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Blogs",
			url: "/blogs",
		},
	];
</script>

<nav>
	<div class="title">Zen's Personal Website</div>
	<ul>
		{#each menus as menu}
			<li>
				<a href={menu.url}>{menu.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav > .title {
		background-color: var(--cyan);
		color: var(--black);
		padding: 0.25rem 0.5rem;
		text-align: center;
	}

	nav > ul {
		display: flex;
		list-style: none;
		background-color: var(--blue);
		color: var(--white);
		margin: 0;
		padding: 0 1rem;
	}

	nav > ul > li {
		padding: 0.5rem 0.75rem;
	}

	nav > ul > li:hover {
		background-color: var(--white);
		color: var(--blue);
	}

	nav > ul > li > a {
		color: inherit;
		text-decoration: none;
	}
</style>
