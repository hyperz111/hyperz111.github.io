<script>
	let { icon, class: classes, ...rest } = $props();
</script>

<span class="bi bi-{icon} {classes}" {...rest}></span>
