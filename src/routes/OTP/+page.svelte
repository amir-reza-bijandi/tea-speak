<script lang="ts">
	import { alertStore } from '$lib/stores/alert-store.svelte';
	import type { EventHandler } from 'svelte/elements';

	const MAX_DIGIT = 6;

	const otp = $state<(number | null)[]>(Array.from({ length: MAX_DIGIT }, () => null));
	const inputs = $state<HTMLInputElement[]>([]);
	let submitBtn = $state<HTMLButtonElement | null>(null);
	let currentInputiIndex = 0;

	type Data = {
		success: boolean;
		type: 'ERROR' | 'LOGIN_SUCCESS';
		message: string;
	};

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('https://dev.xperia.top/v1/auth/login', {
				body: JSON.stringify({
					twoFactorCode: otp.join(''),
					rememberMe: true
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const data = (await response.json()) as Data;

			if (response.status === 400) {
				alertStore.sendAlert('error', data.message);
			}
		} catch (_) {
			alertStore.sendAlert('error', 'خطا در برقراری اتصال با سرور');
		}
	};
</script>

<main class="flex min-h-screen flex-col items-center justify-center">
	<div class="mb-6 grid gap-2 text-center">
		<h2 class="text-2xl leading-none font-bold text-primary">خوش آمدید</h2>
		<p>لطفاً کد تایید رو وارد کن!</p>
	</div>
	<form class="card w-96 bg-base-200 shadow-sm" onsubmit={handleSubmit}>
		<div class="card-body">
			<div class="card-actions justify-end gap-6">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					dir="ltr"
					class="flex w-full items-center justify-center divide-x divide-primary overflow-hidden rounded-2xl border border-primary"
					onclick={() => {
						let index = otp.findIndex((value) => !value);

						if (index >= 0) {
							inputs[index].focus();
						} else {
							inputs[inputs.length - 1].focus();
						}
					}}
				>
					{#each { length: MAX_DIGIT }, index}
						<input
							type="number"
							inputmode="numeric"
							class="otp-inputs pointer-events-none aspect-square h-auto w-full rounded-none bg-base-100 text-center text-2xl outline-0"
							bind:value={otp[index]}
							bind:this={inputs[index]}
							onfocus={() => {
								currentInputiIndex = index;
							}}
							oninput={(e) => {
								if (inputs.length - 1 >= index + 1) {
									if (otp[index] !== null) {
										inputs[index + 1].focus();
									} else {
									}
								}
								if (otp[index]) {
									if (otp[index].toString().length > 1) {
										otp[index] = +otp[index].toString()[0];
									}
								}
								if (index === otp.length - 1) {
									submitBtn?.focus();
								}
							}}
							onkeydown={(e) => {
								if (!(+e.key >= 0)) {
									e.preventDefault();
								}
								if (e.key === 'Backspace') {
									if (otp[index]) {
										otp[index] = null;
									} else {
										if (index - 1 >= 0) {
											otp[index - 1] = null;
											inputs[index - 1].focus();
										}
									}
								}
							}}
						/>
					{/each}
				</div>
				<button class="btn w-full btn-lg btn-primary" bind:this={submitBtn}>تأیید </button>
			</div>
		</div>
	</form>
</main>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
