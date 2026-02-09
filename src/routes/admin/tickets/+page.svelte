<script lang="ts">
	import { MessageSquare } from '@lucide/svelte';

	function toPersianNumber(str: string) {
		return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
	}
</script>

<div class="flex h-full">
	<div class="h-full max-w-64 border border-zinc-600 bg-base-200">
		<div class="flex items-center gap-2 p-4">
			<span class="rounded-[9999px] bg-primary p-2">
				<MessageSquare class="size-4" />
			</span>
			<span>تیکت ها</span>
		</div>
		<ul class="flex flex-col">
			<div class="flex cursor-pointer items-center justify-between gap-2 p-3 hover:bg-green-800">
				<div class="avatar">
					<div class="size-10 rounded-full">
						<img
							src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
							alt="avatar img"
						/>
					</div>
				</div>

				<div class="flex min-w-0 flex-col gap-1">
					<span class="text-xs">ابوالفضل عدالتی</span>
					<p class="truncate text-xs font-light text-gray-400">
						سلام. خسته نباشید ببخشید یه سوال داشتم در مورد اینکه این سرور ها چطور فعال میشوند.
					</p>
				</div>

				<div class="flex h-full flex-col items-end gap-1">
					<span class="text-xs">
						{toPersianNumber('21:23')}
					</span>
					<div class="badge badge-xs badge-primary">2</div>
				</div>
			</div>
		</ul>
	</div>
	<div class="w-full p-4">
		<div class="chat-start chat">
			<div class="avatar chat-image">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS chat bubble component"
						src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
					/>
				</div>
			</div>
			<div class="chat-header">
				ابوالفضل
				<time class="text-xs opacity-50">{toPersianNumber('12:45')}</time>
			</div>
			<div class="chat-bubble">
				سلام. خسته نباشید ببخشید یه سوال داشتم در مورد اینکه این سرور ها چطور فعال میشوند.
			</div>
			<div class="chat-footer opacity-50">ارسال شده</div>
		</div>
		<div class="chat-end chat">
			<div class="avatar chat-image">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS chat bubble component"
						src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
					/>
				</div>
			</div>
			<div class="chat-header">
				ادمین
				<time class="text-xs opacity-50">{toPersianNumber('12:46')}</time>
			</div>
			<div class="chat-bubble">درود بررسی میشود.</div>
			<div class="chat-footer opacity-50">دیده شده در {toPersianNumber('12:46')}</div>
		</div>
		<div class="chat-start chat">
			<div class="avatar chat-image">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS chat bubble component"
						src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
					/>
				</div>
			</div>
			<div class="chat-header">
				ابوالفضل
				<time class="text-xs opacity-50">{toPersianNumber('12:47')}</time>
			</div>
			<div class="chat-bubble">ممنون.</div>
			<div class="chat-footer opacity-50">ارسال شده</div>
		</div>
	</div>
</div>
