<script lang="ts">
	import Alerts from '$lib/components/alerts.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Alerts />
{@render children()}
