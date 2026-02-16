<script lang="ts">
	import { toPersianNumber } from '$lib/utilities/to-persian-number';
	import { MessageSquare, PlusIcon } from '@lucide/svelte';

	type Ticket = {
		name: string;
		text: string;
		count: string;
		time: string;
		image: string;
	};

	const TICKETS: Ticket[] = [
		{
			name: 'ابوالفضل عدالتی',
			text: 'سلام. خسته نباشید ببخشید یه سوال داشتم در مورد اینکه این سرور ها چطور فعال میشوند.',
			time: '12:59',
			count: '2',
			image: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
		},
		{
			name: 'امیر امیری',
			text: 'سلام. یه سوال داشتم.',
			time: '21:26',
			count: '4',
			image: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
		}
	];
</script>

<div class="h-full max-w-76 min-w-64 bg-base-200">
	<div class="flex items-center justify-between px-2 py-3">
		<div class="flex items-center gap-2">
			<span class="rounded-full bg-accent p-2">
				<MessageSquare class="size-4 text-accent-content" />
			</span>
			<span class="text-accent-content">تیکت ها</span>
		</div>
		<button class="btn btn-xs btn-accent"><PlusIcon class="size-4" /></button>
	</div>
	<div class="divider my-1"></div>
	<ul class="list">
		{#each TICKETS as { count, image, name, text, time }}
			<li class="list-row cursor-pointer p-3 hover:bg-base-300">
				<div>
					<img alt="chat img" class="size-10 rounded-box" src={image} />
				</div>
				<div class="min-w-0">
					<div>{name}</div>
					<div class="truncate text-xs font-semibold uppercase opacity-60">{text}</div>
				</div>
				<div class="flex h-full flex-col items-end gap-1">
					<span class="text-xs">
						{toPersianNumber(time)}
					</span>
					<div class="badge badge-xs badge-primary">{count}</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
