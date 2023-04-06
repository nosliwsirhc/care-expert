<script lang="ts">
	import PlacingAgencyForm from '$lib/components/PlacingAgencyForm.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="container">
	<h1>Placing Agencies</h1>

	<div class="row">
		{#if data?.placingAgencies}
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
		{/if}
		<div class="col-6">
			<PlacingAgencyForm />
		</div>
	</div>
</div>
