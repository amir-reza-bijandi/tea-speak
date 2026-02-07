<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	let isSidebarBtnActive = $state<boolean>(false);

	const sideBarClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
		isSidebarBtnActive ? (isSidebarBtnActive = false) : (isSidebarBtnActive = true);
	};
</script>

<div class="flex">
	<ul class="menu flex h-screen flex-col justify-between bg-base-200">
		<!-- svelte-ignore a11y_missing_attribute -->
		<div class="flex flex-col items-center gap-3">
			<li class="flex">
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="/home" data-discover="true"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="200.39"
						height="112.97"
						viewBox="0 0 200.39 112.97"
						class="text-primary-600 dark:text-primary-400 size-10"
						><g id="Layer_2" data-name="Layer 2"
							><g id="Layer_1-2" data-name="Layer 1"
								><path
									d="M199.54,103.9l-60.27-101a6,6,0,0,0-8.87-1.64L2.3,102.26A6,6,0,0,0,6,113H28.33a6,6,0,0,0,3.72-1.29l91.24-71.9a6,6,0,0,1,8.86,1.64L154,78.06a6,6,0,0,1-5.16,9.08H121.13a6,6,0,0,0-3.69,1.26L99.68,102.24A6,6,0,0,0,103.37,113h91A6,6,0,0,0,199.54,103.9Z"
									style="fill: currentcolor;"
								></path></g
							></g
						></svg
					></a
				>
			</li>
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button class={[isSidebarBtnActive ? 'bg-primary' : '']} onclick={sideBarClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
						/>
					</svg>
				</button>
			</li>
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button class={[isSidebarBtnActive ? 'bg-primary' : '']} onclick={sideBarClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
						/>
					</svg>
				</button>
			</li>
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button class={[isSidebarBtnActive ? 'bg-primary' : '']} onclick={sideBarClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
						/>
					</svg>
				</button>
			</li>
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button class={[isSidebarBtnActive ? 'bg-primary' : '']} onclick={sideBarClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</button>
			</li>
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button class={[isSidebarBtnActive ? 'bg-primary' : '']} onclick={sideBarClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
						/>
					</svg>
				</button>
			</li>
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button class={[isSidebarBtnActive ? 'bg-primary' : '']} onclick={sideBarClickHandler}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
						/>
					</svg>
				</button>
			</li>
		</div>
		<div class="flex flex-col items-center gap-3">
			<li>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<!-- svelte-ignore a11y_missing_attribute -->
				<a>
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-7"
						><path
							fill-opacity="0.3"
							fill="currentColor"
							d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"
						></path><path
							fill="currentColor"
							d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"
						></path></svg
					>
				</a>
			</li>
			<li class="avatar avatar-placeholder">
				<div class="size-12 rounded-full bg-neutral text-neutral-content">
					<span class="text-3xl">D</span>
				</div>
			</li>
		</div>
	</ul>
	<div class="drawer">
		<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div class="navbar w-full bg-base-300">
				<div class="flex w-full justify-between">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button class="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
					<div>
						<label class="input">
							<svg
								class="h-[1em] opacity-50"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<g
									stroke-linejoin="round"
									stroke-linecap="round"
									stroke-width="2.5"
									fill="none"
									stroke="currentColor"
								>
									<circle cx="11" cy="11" r="8"></circle>
									<path d="m21 21-4.3-4.3"></path>
								</g>
							</svg>
							<input type="search" required placeholder="جستو‌جو" />
						</label>
					</div>
				</div>
			</div>
			<!-- Page content here -->
			Content
		</div>
	</div>
</div>
