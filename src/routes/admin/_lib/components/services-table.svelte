<script lang="ts">
	import type { LucideIcon } from '$lib/types/general';
	import { toPersianNumber } from '$lib/utilities/to-persian-number';
	import {
		BotIcon,
		CopyIcon,
		EllipsisVerticalIcon,
		HeadsetIcon,
		PowerIcon,
		RotateCcwIcon
	} from '@lucide/svelte';

	type Service = {
		id: number;
		type: Type;
		tag: string;
		serviceStatus: ServiceStatus;
		serverStatus: ServerStatus;
		address: string;
	};

	type ServiceStatus = 'active' | 'inactive' | 'suspended';
	type ServerStatus = 'online' | 'offline' | 'connecting';
	type Type = 'ts' | 'bot';

	const SERVICE_STATUS_LABEL_MAP: Record<ServiceStatus, string> = {
		active: 'فعال',
		inactive: 'غیر فعال',
		suspended: 'معلق'
	};

	const SERVER_STATUS_LABEL_MAP: Record<ServerStatus, string> = {
		online: 'آنلاین',
		offline: 'آفلاین',
		connecting: 'درحال اتصال'
	};

	const TYPE_ICON_MAP: Record<Type, LucideIcon> = {
		ts: HeadsetIcon,
		bot: BotIcon
	};

	const SERVICES: Service[] = [
		{
			type: 'ts',
			id: 12358,
			tag: 'سرور تی اس من',
			serviceStatus: 'active',
			serverStatus: 'online',
			address: '192.168.1.10:2555'
		},
		{
			type: 'bot',
			id: 12358,
			tag: 'سرور تی اس رضا و علی',
			serviceStatus: 'suspended',
			serverStatus: 'offline',
			address: '192.168.56.334:2255'
		}
	];
</script>

<div class="card bg-base-300 p-4">
	<span class="mb-4 card-title">سرویس ها</span>
	<div class="overflow-x-auto">
		<table class="table-pin-rows table-pin-cols table bg-base-300">
			<thead class="bg-base-300">
				<tr class="bg-base-300">
					<th class="bg-base-300"></th>
					<td>شناسه</td>
					<td>برچسب</td>
					<td>وضعیت سرویس</td>
					<td>وضعیت فنی</td>
					<td>آدرس</td>
					<td>عملیات ها</td>
				</tr>
			</thead>
			<tbody class="bg-base-300">
				{#each SERVICES as { address, id, serverStatus, serviceStatus, tag, type }}
					{@const Icon = TYPE_ICON_MAP[type]}
					<tr class="">
						<th class="bg-base-300"><Icon /></th>
						<td>{toPersianNumber(id)}</td>
						<td><span class="line-clamp-1 text-nowrap">{tag}</span></td>
						<td>{SERVICE_STATUS_LABEL_MAP[serviceStatus]}</td>
						<td>{SERVER_STATUS_LABEL_MAP[serverStatus]}</td>
						<td class="space-x-1 text-nowrap">
							<button class="btn btn-square btn-ghost btn-sm"><CopyIcon class="size-4" /></button>
							{address}
						</td>
						<td class="space-x-1 text-nowrap">
							<button class="btn btn-square btn-sm btn-info">
								<RotateCcwIcon class="size-4" />
							</button>
							<button class="btn btn-square btn-sm btn-error">
								<PowerIcon class="size-4" />
							</button>
							<button class="btn btn-square btn-sm btn-neutral">
								<EllipsisVerticalIcon class="size-4" />
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
