<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/state";

	const menus = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Blogs",
			url: "/blogs/",
		},
	];
</script>

<nav>
	<div class="title">Zen's Personal Website</div>
	<div class="menu" role="tablist">
		{#each menus as menu}
			<a
				href={menu.url}
				role="tab"
				class="item {page.url.pathname === menu.url ? 'selected' : undefined}"
				onfocus={() => {
					if (page.url.pathname !== menu.url) {
						goto(menu.url);
					}
				}}>{menu.name}</a>
		{/each}
	</div>
</nav>

<style>
	.title {
		background-color: var(--cyan);
		color: var(--black);
		padding: 0.25rem 0.5rem;
		text-align: center;
	}

	.menu {
		display: flex;
		list-style: none;
		background-color: var(--blue);
		color: var(--white);
		margin: 0;
		padding: 0 1rem;
	}

	.item {
		padding: 0.5rem 0.75rem;
		color: inherit;
		text-decoration: none;
	}

	.item.selected {
		background-color: var(--white);
		color: var(--blue);
	}
</style>
