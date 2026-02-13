<script lang="ts">
	import { toPersianNumber } from '$lib/utilities/to-persian-number';
	import { EllipsisIcon, EyeIcon, MessageCircleIcon } from '@lucide/svelte';

	type Ticket = {
		id: number;
		title: string;
		department: string;
		status: TicketStatus;
	};

	type TicketStatus = 'waitingForReply' | 'processing' | 'answered' | 'closed';

	const STATUS_LABEL_MAP: Record<TicketStatus, string> = {
		waitingForReply: 'پاسخ داده شده',
		answered: 'در انتظار پاسخ کاربر',
		processing: 'در حال پردازش',
		closed: 'بسته شده'
	};

	const STATUS_CLASS_MAP: Record<TicketStatus, string> = {
		waitingForReply: 'text-success',
		answered: 'text-info',
		processing: 'text-warning',
		closed: 'text-error'
	};

	const TICKETS: Ticket[] = [
		{
			id: 1289,
			title: 'مشکل در راه اندازی...',
			department: 'تکنیکال',
			status: 'waitingForReply'
		},
		{
			id: 1239,
			title: 'مشکل در راه اندازی...',
			department: 'تکنیکال',
			status: 'processing'
		}
	];
</script>

<div class="card bg-base-300">
	<div class="card-body">
		<span class="card-title">تیکت های باز</span>
		<ul class="list rounded-box bg-base-100 shadow-md">
			{#each TICKETS as { department, id, status, title }}
				<li class="list-row">
					<MessageCircleIcon />
					<div class="space-y-0.5">
						<div class="mb-2 font-semibold">{title}</div>
						<div class="text-xs opacity-60">شناسه: {toPersianNumber(id)}</div>
						<div class="text-xs opacity-60">واحد مربوطه: {department}</div>
						<div class={['text-xs', STATUS_CLASS_MAP[status]]}>
							وضعیت: {STATUS_LABEL_MAP[status]}
						</div>
					</div>
					<button class="btn btn-square btn-ghost"><EyeIcon /></button>
					<button class="btn btn-square btn-ghost"><EllipsisIcon /></button>
				</li>{/each}
		</ul>
	</div>
</div>
