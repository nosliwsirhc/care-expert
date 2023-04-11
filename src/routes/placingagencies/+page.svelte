<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="container">
	<h1>
		Placing Agencies&nbsp;&nbsp;<a href="/placingagencies/add"
			><img src="/square-plus.svg" width="32" height="32" alt="" /></a
		>
	</h1>

	{#if data?.placingAgencies}
		<div class="row">
			<div class="col-6">
				<div class="list-group mb-4">
					{#each data.placingAgencies as placingAgency}
						<a
							href="/placingagencies/{placingAgency.id}"
							class="list-group-item list-group-item-action"
						>
							{placingAgency.name}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
