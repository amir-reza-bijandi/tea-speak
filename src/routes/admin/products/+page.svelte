<script lang="ts">
	import { BotIcon, HeadsetIcon } from '@lucide/svelte';
	import type { LucideIcon } from '$lib/types/general';

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
		{#each Array(3) as _}
			<div class="card w-96 bg-base-100 shadow-sm">
				<div class="card-body">
					<span class="badge badge-xs badge-warning">Most Popular</span>
					<div class="flex justify-between">
						<h2 class="text-3xl font-bold">Premium</h2>
						<span class="text-xl">$29/mo</span>
					</div>
					<ul class="mt-6 flex flex-col gap-2 text-xs">
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
							<span>High-resolution image generation</span>
						</li>
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
							<span>Customizable style templates</span>
						</li>
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
							<span>Batch processing capabilities</span>
						</li>
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
							<span>AI-driven image enhancements</span>
						</li>
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
							<span class="line-through">Seamless cloud integration</span>
						</li>
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
							<span class="line-through">Real-time collaboration tools</span>
						</li>
					</ul>
					<div class="mt-6">
						<button class="btn btn-block btn-primary">Subscribe</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
