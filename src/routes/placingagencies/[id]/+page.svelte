<script lang="ts">
	import type { PageServerData } from './$types';
	import OrgAddress from '$lib/components/OrgAddress.svelte';
	import OrgAddressForm from '$lib/components/OrgAddressForm.svelte';

	export let data: PageServerData;
</script>

<div class="container">
	{#if data?.placingAgency}
		<h1>{data.placingAgency.name}</h1>
		{#if data?.placingAgency?.addresses.length > 0}
			<OrgAddress address={data.placingAgency?.addresses[0]} />
		{/if}
		<p>Email Policy: {data.placingAgency.emailPolicy}</p>
		{#if data.placingAgency.addresses.length === 0}
			<OrgAddressForm id={data.placingAgency.id} />
		{/if}
	{:else}
		<h1>No Placing Agency Found</h1>
	{/if}
</div>
