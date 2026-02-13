<script lang="ts">
	import type { LucideIcon } from '$lib/types/general';
	import { CircleCheck, CircleX, InfoIcon, TriangleAlert } from '@lucide/svelte';

	type Alert = {
		type: AlertType;
		title: string;
		subTitle: string;
	};

	type AlertType = 'info' | 'warning' | 'success' | 'danger';

	const TYPE_CLASS_MAP: Record<AlertType, Record<'text' | 'btn', string>> = {
		danger: {
			btn: 'btn-error',
			text: 'text-error'
		},
		info: {
			btn: 'btn-info',
			text: 'text-info'
		},
		success: {
			btn: 'btn-success',
			text: 'text-success'
		},
		warning: {
			btn: 'btn-warning',
			text: 'text-warning'
		}
	};

	const TYPE_ICON_MAP: Record<AlertType, LucideIcon> = {
		danger: CircleX,
		info: InfoIcon,
		success: CircleCheck,
		warning: TriangleAlert
	};

	const ALERTS: Alert[] = [
		{
			type: 'success',
			title: 'عملیات',
			subTitle: 'سرویس 2 با موفقیت حذف شد.'
		},
		{
			type: 'warning',
			title: 'هشدار',
			subTitle: 'سرویس درحال منقضی شدن است'
		}
	];
</script>

<div class="card bg-base-300">
	<div class="card-body">
		<span class="card-title">رخداد های اخیر</span>
		<ul class="space-y-4">
			{#each ALERTS as alert}
				{@const { text, btn } = TYPE_CLASS_MAP[alert.type]}
				{@const Icon = TYPE_ICON_MAP[alert.type]}
				<li role="alert" class={['alert alert-vertical sm:alert-horizontal', text]}>
					<Icon />
					<div>
						<h3 class="font-bold">عملیات</h3>
						<div class="text-xs">فلان سرویس حذف شد</div>
					</div>
					<button class={['btn btn-sm', btn]}>دیدن</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
