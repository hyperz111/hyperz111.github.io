<script>
	import "$styles/index.scss";
	import Icon from "@iconify/svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<header>
	<h1>Hyper-Z11</h1>
	<p>A beginner programmer</p>

	<nav>
		<ul>
			<li><a href="/"><Icon icon="mdi:home" />Home</a></li>
			<li><a href="/about"><Icon icon="mdi:info" />About</a></li>
			<li><a href="/projects"><Icon icon="mdi:paper" />Projects</a></li>
			<li><a href="/blogs"><Icon icon="mdi:book" />Blogs</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>Copyright &copy; 2025-Present Hyper-Z11. All rights reserved.</p>
</footer>
