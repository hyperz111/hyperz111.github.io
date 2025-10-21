<script>
	import Icon from "@iconify/svelte";

	const bornYear = 2011;
	let yearsOld = $state(new Date().getFullYear() - bornYear);
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section id="about">
	<img src="/favicon.png" alt="Profile" />
	<h2>About</h2>
	<p>
		Hello, i'm <b>Hyper-Z11</b> (he/him). The {yearsOld} years old beginner programmer. My real name is
		<b>Firjatullah Zeroun</b>. I'm from
		<a href="https://en.wikipedia.org/wiki/Tangerang"><b><Icon icon="mdi:location" />Tangereng, Banten, Indonesia</b></a>. I
		like coding as my hobby and contributing to open source projects if i want.
	</p>
</section>

<section id="profile">
	<h2>Profile</h2>
	<p>You can visit my profile if you want 😁</p>
	<ul>
		<li><a href="https://github.com/hyperz111"><Icon icon="mdi:github" />GitHub</a></li>
		<li><a href="https://tiktok.com/@hyperz111"><Icon icon="simple-icons:tiktok" />TikTok</a></li>
	</ul>
</section>

<style lang="scss">
	@use "$styles/mixins.scss" as mx;

	#about {
		& > img {
			border: 3px solid #222;
			width: 50%;
			max-width: 100%;
			float: left;
			margin-right: 1rem;

			@media (min-width: 768px) {
				& {
					width: 25%;
				}
			}
		}
	}

	#profile {
		& ul > li > a {
			@include mx.items-center;
			gap: 0.5rem;
		}
	}
</style>
