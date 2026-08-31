<script>
	const menus = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Blog",
			url: "/blogs",
		},
	];
</script>

<nav>
	<ul>
		{#each menus as menu}
			<li>
				<a href={menu.url}>{menu.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav > ul > li {
		color: var(--blue);
	}
</style>
