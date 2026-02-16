<script lang="ts">
	import { toPersianNumber } from '$lib/utilities/to-persian-number';
	import { SendIcon } from '@lucide/svelte';

	type Message = {
		type: Type;
		name: string;
		time: string;
		text: string;
		status: MessageStatus;
		image: string;
	};

	type Type = 'admin' | 'customer';
	type MessageStatus = 'ارسال شده' | 'دیده شده';

	const MESSAGES: Message[] = [
		{
			type: 'customer',
			time: '12:59',
			text: 'سلام. خسته نباشید ببخشید یه سوال داشتم در مورد اینکه این سرور ها چطور فعال میشوند.',
			status: 'ارسال شده',
			name: 'ابوالفضل عدالتی',
			image: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
		},
		{
			type: 'admin',
			time: '01:01',
			text: 'درود. بررسی میشود.',
			status: 'دیده شده',
			name: 'ادمین',
			image: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
		}
	];
</script>

<div class="relative w-full p-4">
	<div>
		{#each MESSAGES as { image, name, status, text, time, type }}
			<div class={['chat', type === 'customer' ? 'chat-start' : 'chat-end']}>
				<div class="avatar chat-image">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component" src={image} />
					</div>
				</div>
				<div class="chat-header">
					{name}
					<time class="text-xs opacity-50">{toPersianNumber(time)}</time>
				</div>
				<div class="chat-bubble">
					{text}
				</div>
				<div class="chat-footer opacity-50">{status}</div>
			</div>
		{/each}
	</div>
	<div class="absolute right-4 bottom-0 left-4 join mb-4">
		<div class="w-full">
			<label class="input join-item w-full">
				<input
					name="text-input"
					type="text"
					placeholder="متن خود را اینجا بنویسید"
					class="w-full"
				/>
			</label>
		</div>
		<button class="btn join-item btn-neutral"><SendIcon /></button>
	</div>
</div>
