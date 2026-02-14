<script>
	import { toPersianNumber } from '$lib/utilities/to-persian-number';
</script>

<div class="w-full">
	<div></div>
	<div class="flex flex-col items-center rounded-xl border">
		<span>موجودی فعلی</span>
		<span>{toPersianNumber('250,000')}</span>
		<button class="btn btn-info">افزایش</button>
	</div>
</div>
