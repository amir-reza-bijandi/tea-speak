<script>
	import Announcement from './_lib/components/announcement.svelte';
	import Factor from './_lib/components/factor.svelte';
	import OpenTickets from './_lib/components/open-tickets.svelte';
	import ReceentActivities from './_lib/components/receent-activities.svelte';
	import ServicesTable from './_lib/components/services-table.svelte';
</script>

<div class="grid h-full grid-cols-[1fr_auto] gap-4 p-4">
	<div class="grid grid-rows-[auto_1fr] gap-2">
		<div class="flex">
			<Factor />
			<Announcement />
		</div>
		<div class="relative">
			<ServicesTable />
		</div>
	</div>
	<div class="grid w-96 grid-rows-2 gap-2">
		<ReceentActivities />
		<OpenTickets />
	</div>
</div>
