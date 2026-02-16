<script>
	import { toPersianNumber } from '$lib/utilities/to-persian-number';
</script>

<div class="grid w-full grid-cols-2 gap-2">
	<div class="flex w-full flex-wrap justify-between gap-2">
		<div class="grid w-full grid-rows-2 gap-2 rounded-2xl bg-base-300 p-4">
			<span class=" flex w-full items-center justify-center text-nowrap opacity-60">
				خرج شده این ماه
			</span>
			<div class="divider m-0"></div>
			<span class="flex w-full items-center justify-center gap-1 text-2xl">
				{toPersianNumber('46,000')}
				<div class="text-sm">تــومان</div></span
			>
		</div>
		<div class="grid w-full grid-rows-2 gap-2 rounded-2xl bg-base-300 p-4">
			<span class=" flex w-full items-center justify-center text-nowrap opacity-60"
				>تراکنش های این ماه</span
			>
			<div class="divider m-0"></div>
			<span class="flex w-full justify-center text-2xl">{toPersianNumber('78')}</span>
		</div>
	</div>
	<div class="grid grid-rows-2 items-center gap-3 rounded-2xl bg-base-300 p-4">
		<div class="grid w-full grid-rows-2 gap-2 rounded-2xl bg-base-300">
			<span class=" flex w-full items-center justify-center text-nowrap opacity-60">
				موجودی فعلی
			</span>
			<div class="divider m-0"></div>
			<span class="flex w-full items-center justify-center gap-1 text-2xl">
				{toPersianNumber('250,000')}
				<div class="text-sm">تــومان</div>
			</span>
		</div>
		<button class="btn w-full self-end btn-info">افزایش</button>
	</div>
</div>
