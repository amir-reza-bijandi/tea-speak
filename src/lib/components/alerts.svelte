<script lang="ts">
	import { alertStore } from '$lib/stores/alert-store.svelte';
</script>

<div class="toast toast-start toast-top">
	{#each alertStore.alerts as { text, variant }}
		<div
			class={[
				'alert',
				variant === 'info'
					? 'alert-info'
					: variant === 'success'
						? 'alert-success'
						: variant === 'warning'
							? 'alert-warning'
							: variant === 'error'
								? 'alert-error'
								: ''
			]}
		>
			<span>{text}</span>
		</div>
	{/each}
</div>
