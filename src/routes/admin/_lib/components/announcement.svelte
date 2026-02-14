<script lang="ts">
	type Announcement = {
		title: Type;
		subtitle: string;
		type: Type;
	};

	type Type = 'active' | 'ticket' | 'suspended' | 'expire';

	const ANNOUNCEMENT_LABEL_MAP: Record<Type, string> = {
		active: 'سرویس فعال',
		expire: 'در آستانه انقضا',
		ticket: 'تیکت باز',
		suspended: 'سرویس معلق'
	};

	const ANNOUNCEMENT_CLASS_MAP: Record<Type, string> = {
		active: 'bg-success',
		expire: 'bg-error',
		suspended: 'bg-warning',
		ticket: 'bg-info'
	};

	const ANNOUNCEMENTS: Announcement[] = [
		{
			title: 'active',
			subtitle: '1',
			type: 'active'
		},
		{
			title: 'expire',
			subtitle: '6',
			type: 'expire'
		},
		{
			title: 'suspended',
			subtitle: '2',
			type: 'suspended'
		},
		{
			title: 'ticket',
			subtitle: '9',
			type: 'ticket'
		}
	];
</script>

<ul class="grid h-fit w-full grid-cols-2 grid-rows-2 gap-2">
	{#each ANNOUNCEMENTS as { subtitle, title, type }}
		<li
			class={[
				'flex flex-col items-center rounded-2xl py-8 text-lg font-bold',
				ANNOUNCEMENT_CLASS_MAP[type]
			]}
		>
			<span>{subtitle}</span>
			<span>{ANNOUNCEMENT_LABEL_MAP[title]}</span>
		</li>
	{/each}
</ul>
