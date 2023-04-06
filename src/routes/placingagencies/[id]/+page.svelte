<script lang="ts">
	import type { PageServerData } from './$types';
	import OrgAddress from '$lib/components/OrgAddress.svelte';
	import OrgAddressForm from '$lib/components/OrgAddressForm.svelte';

	export let data: PageServerData;
</script>

<div class="container">
	{#if data?.placingAgency}
	<div class="row">
		<div class="col-12">
			<h1>{data.placingAgency.name}</h1>
		</div>
		<div class="col-3">
			{#if data?.placingAgency?.addresses.length > 0}
				<OrgAddress address={data.placingAgency?.addresses[0]} />
			{/if}
		</div>
		<div class="col-12">
			<p>Email Policy: {data.placingAgency.emailPolicy}</p>
		</div>
	</div>
	<div class="row">
		<div class="col">
			{#if data.placingAgency.addresses.length === 0}
				<OrgAddressForm id={data.placingAgency.id} />
			{/if}
		</div>
	</div>
	{:else}
		<h1>No Placing Agency Found</h1>
	{/if}
</div>
