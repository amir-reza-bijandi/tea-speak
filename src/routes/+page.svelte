<script lang="ts">
	import { alertStore } from '$lib/stores/alert-store.svelte';
	import type { EventHandler } from 'svelte/elements';

	type Data = {
		success: boolean;
		type: 'REGISTER_INITIATED' | 'LOGIN_INITIATED' | 'ERROR';
		message: string;
	};

	let phoneNumber = $state('');
	let isSendingRequest = $state(false);
	let data = $state<Data | null>(null);

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
		e.preventDefault();
		isSendingRequest = true;
		try {
			const response = await fetch('https://dev.xperia.top/v1/auth/initiate', {
				method: 'POST',
				body: JSON.stringify({
					phoneNumber: '+98' + phoneNumber
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			data = (await response.json()) as Data;
			if (response.status === 400) alertStore.sendAlert('error', data.message);
		} catch (ـ) {
			alertStore.sendAlert('error', 'خطا در ارتباط با سرور!');
		}
		isSendingRequest = false;
	};
</script>

<main class="flex min-h-screen flex-col items-center justify-center">
	<div class="mb-6 grid gap-2 text-center">
		<h2 class="text-2xl leading-none font-bold text-primary">خوش آمدید</h2>
		<p>لطفاً شماره موبایلت رو وارد کن!</p>
	</div>
	<form class="card w-96 bg-base-200 shadow-sm" onsubmit={handleSubmit}>
		<div class="card-body">
			<fieldset class="fieldset">
				<legend class="fieldset-legend">شمارهٔ موبایل</legend>
				<label dir="ltr" class="input w-full">
					+۹۸
					<input type="text" class="grow" placeholder="۹۱۲۳۴۵۶۷۸۹" bind:value={phoneNumber} />
				</label>
			</fieldset>
			<div class="card-actions justify-end">
				<button class="btn w-full btn-primary" disabled={isSendingRequest}>
					{#if isSendingRequest}
						<span class="loading loading-md loading-spinner"></span>
					{:else}
						ارسال کد تأیید
					{/if}
				</button>
			</div>
		</div>
	</form>
</main>
