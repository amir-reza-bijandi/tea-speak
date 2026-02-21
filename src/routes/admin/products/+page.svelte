<script lang="ts">
	import { BotIcon, HeadsetIcon } from '@lucide/svelte';
	import type { LucideIcon } from '$lib/types/general';
	import { toPersianNumber } from '$lib/utilities/to-persian-number';

	type Categories = 'ts-server' | 'audio-bot';

	let activeMenu = $state<Categories>('audio-bot');

	type Category = {
		label: Categories;
		name: string;
		count: string;
		Icon: LucideIcon;
	};

	const CATEGORY_ITEMS: Category[] = [
		{
			label: 'audio-bot',
			count: '5',
			name: 'سرور تیم اسپیک',
			Icon: HeadsetIcon
		},
		{
			label: 'ts-server',
			count: '9',
			name: 'بات موزیک',
			Icon: BotIcon
		}
	];

	type Product = {
		label: string;
		name: string;
		price: string;
		time: string;
		features: Feature[];
		active: boolean;
	};

	type Feature = {
		description: string;
		isActive: boolean;
	};

	const PRODUCTS: Product[] = [
		{
			label: 'پرووایدر اختصاصی',
			name: 'بات صوتی حرفه‌ای',
			price: '299,000',
			time: 'ماهیانه',
			active: true,
			features: [
				{
					description: 'کیفیت صدا',
					isActive: true
				},
				{
					description: 'همزمان',
					isActive: true
				},
				{
					description: 'حافظه',
					isActive: false
				}
			]
		},
		{
			label: '',
			name: 'بات صوتی نیمه حرفه‌ای',
			price: '199,000',
			time: 'ماهیانه',
			active: true,
			features: [
				{
					description: 'کیفیت صدا',
					isActive: true
				},
				{
					description: 'همزمان',
					isActive: false
				},
				{
					description: 'حافظه',
					isActive: false
				}
			]
		},
		{
			label: 'پرووایدر اختصاصی',
			name: 'بات صوتی حرفه‌ای',
			price: '1,299,000',
			time: 'سالیانه',
			active: false,
			features: [
				{
					description: 'کیفیت صدا',
					isActive: true
				},
				{
					description: 'همزمان',
					isActive: true
				},
				{
					description: 'حافظه',
					isActive: false
				}
			]
		}
	];
</script>

<div>
	<div class="flex w-full justify-center p-4">
		<ul class="menu space-x-2 rounded-box bg-base-200 lg:menu-horizontal">
			{#each CATEGORY_ITEMS as { count, Icon, label, name }}
				<li>
					<button
						class={activeMenu === label ? 'menu-active' : ''}
						onclick={() => {
							activeMenu = label;
						}}
					>
						<Icon />
						<span>{name}</span>
						<span class="badge badge-xs">{count}</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<div class="grid grid-cols-3 items-center justify-items-center py-5">
		{#each PRODUCTS as { active, features, label, name, price, time }}
			<div class={['card w-96 bg-base-100 shadow-sm', !active ? '' : '']}>
				<div class="card-body">
					<div
						class={[
							'flex justify-between gap-1',
							label !== '' ? '' : 'pointer-events-none opacity-0'
						]}
					>
						<span class="badge badge-xs badge-warning">
							{label}
						</span>
						{#if !active}
							<span class="badge badge-sm badge-error"> غیر فعال </span>
						{/if}
					</div>
					<div class="flex items-center justify-between">
						<h2 class="text-xl font-bold">{name}</h2>
						<span class="text-l"
							><span class="text-xl">{toPersianNumber(price)} ت</span> / {time}</span
						>
					</div>
					<ul class="mt-6 flex flex-col gap-2 text-sm">
						{#each features as { description, isActive }}
							{#if isActive}
								<li>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="me-2 inline-block size-4 text-success"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/></svg
									>
									<span>{description}</span>
								</li>
							{:else}
								<li class="opacity-50">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="me-2 inline-block size-4 text-base-content/50"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/></svg
									>
									<span class="line-through">{description}</span>
								</li>
							{/if}
						{/each}
					</ul>
					<div class="mt-6">
						<button class={['btn btn-block btn-primary', !active ? 'btn-disabled' : '']}
							>خرید</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
