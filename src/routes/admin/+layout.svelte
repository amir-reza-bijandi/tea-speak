<script lang="ts">
	import { page } from '$app/state';
	import {
		Banknote,
		CpuIcon,
		LayoutGridIcon,
		Icon as LucideIcon,
		MessagesSquareIcon,
		ShoppingBasket,
		UserPen,
		Wallet
	} from '@lucide/svelte';

	type Item = {
		label: string;
		pathname: string;
		icon: typeof LucideIcon;
	};
	const ITEMS = [
		{
			label: 'داشبورد',
			pathname: '/admin',
			icon: LayoutGridIcon
		},
		{
			label: 'تیکت‌ها',
			pathname: '/admin/tickets',
			icon: MessagesSquareIcon
		},
		{
			label: 'سرورها',
			pathname: '/admin/servers',
			icon: CpuIcon
		},
		{
			label: 'کیف پول',
			pathname: '/admin/wallet',
			icon: Wallet
		},
		{
			label: 'فاکتور',
			pathname: '/admin/factor',
			icon: Banknote
		},
		{
			label: 'محصولات',
			pathname: '/admin/products',
			icon: ShoppingBasket
		}
	] as const satisfies Item[];

	const { children } = $props();
</script>

<div class="drawer h-screen lg:drawer-open">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<nav class="navbar w-full bg-base-300">
			<label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linejoin="round"
					stroke-linecap="round"
					stroke-width="2"
					fill="none"
					stroke="currentColor"
					class="my-1.5 inline-block size-4"
					><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
					></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg
				>
			</label>
			<div class="px-4">Navbar Title</div>
		</nav>
		<div class="h-full">{@render children()}</div>
	</div>

	<div class="drawer-side is-drawer-close:overflow-visible">
		<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
		<div
			class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64"
		>
			<ul class="menu flex w-full grow flex-col justify-between">
				<div class="space-y-2">
					{#each ITEMS as { label, pathname, icon: Icon }, index}
						<li>
							<a
								href={pathname}
								class={[
									'is-drawer-close:tooltip is-drawer-close:tooltip-right',
									(index === 0
										? page.url.pathname === pathname
										: page.url.pathname.includes(pathname)) && 'menu-active'
								]}
								data-tip="Homepage"
							>
								<Icon class="my-1.5 inline-block size-4" />
								<span class="is-drawer-close:hidden">{label}</span>
							</a>
						</li>
					{/each}
				</div>
				<li>
					<button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
						<UserPen class="my-1.5 inline-block size-4" />
						<span class="is-drawer-close:hidden">پروفایل</span>
					</button>
				</li>
			</ul>
		</div>
	</div>
</div>
