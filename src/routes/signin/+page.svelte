<script lang="ts">
	import { alertStore } from '$lib/stores/alert-store.svelte';
	import type { EventHandler } from 'svelte/elements';

	const MAX_DIGIT = 6;

	const otp = $state<(number | null)[]>(Array.from({ length: MAX_DIGIT }, () => null));
	const inputs = $state<HTMLInputElement[]>([]);
	let submitBtn = $state<HTMLButtonElement | null>(null);
	let currentInputiIndex = 0;

	let name = $state('');
	let lastName = $state('');
	let email = $state('');

	type Data = {
		// twoFactorCode: string;
		// firstName: string;
		// lastName: string;
		// email: string;
		success: boolean;
		type: 'REGISTER_SUCCESS' | 'ERROR';
		message: string;
	};

	let data = $state<Data | null>(null);

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('https://dev.xperia.top/v1/auth/register', {
				method: 'POST',
				body: JSON.stringify({
					twoFactorCode: otp.join(''),
					firstName: name,
					lastName: lastName,
					email: email
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			data = (await response.json()) as Data;

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
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="card-actions justify-end gap-6">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class=" flex w-full flex-col gap-4">
					<label class="pointer-events-none input w-full text-zinc-500">
						<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<g fill="none">
								<path
									d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
									fill="currentColor"
								></path>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
									fill="currentColor"
								></path>
							</g>
						</svg>
						<input type="tel" class="tabular-nums" value="+989201750375" />
					</label>
					<label class="input w-full">
						<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g
								stroke-linejoin="round"
								stroke-linecap="round"
								stroke-width="2.5"
								fill="none"
								stroke="currentColor"
							>
								<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</g>
						</svg>
						<input
							type="text"
							required
							placeholder="نام"
							minlength="3"
							maxlength="30"
							title="نام خود را وارد کنید"
							bind:this={name}
						/>
					</label>
					<label class="input w-full">
						<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g
								stroke-linejoin="round"
								stroke-linecap="round"
								stroke-width="2.5"
								fill="none"
								stroke="currentColor"
							>
								<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</g>
						</svg>
						<input
							type="text"
							required
							placeholder="نام خانوادگی"
							minlength="3"
							maxlength="30"
							title="نام خانوادگی خود را وارد کنید"
							bind:this={lastName}
						/>
					</label>
					<label class="input w-full">
						<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<g
								stroke-linejoin="round"
								stroke-linecap="round"
								stroke-width="2.5"
								fill="none"
								stroke="currentColor"
							>
								<rect width="20" height="16" x="2" y="4" rx="2"></rect>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
							</g>
						</svg>
						<input type="email" placeholder="mail@site.com" bind:this={email} required />
					</label>
				</div>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
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
