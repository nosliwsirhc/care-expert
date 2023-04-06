<script lang="ts">
	import type { PageServerData } from './$types';
	import OrgAddress from '$lib/components/OrgAddress.svelte';
	import OrgAddressForm from '$lib/components/OrgAddressForm.svelte';
	import OrgEmailForm from '$lib/components/OrgEmailForm.svelte';
	import OrgEmail from '$lib/components/OrgEmail.svelte';

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
		{#if data.placingAgency.addresses.length < 1}
			<div class="row">
				<div class="col">
					<OrgAddressForm id={data.placingAgency.id} />
				</div>
			</div>
		{/if}
		{#if data.placingAgency.emailAddresses.length > 0}
			<div class="row mb-4">
				{#each data.placingAgency.emailAddresses as email}
					<div class="col-4">
						<OrgEmail {email} />
					</div>
				{/each}
			</div>
		{/if}
		<div class="row">
			<div class="col">
				<OrgEmailForm id={data.placingAgency.id} />
			</div>
		</div>
	{:else}
		<h1>No Placing Agency Found</h1>
	{/if}
</div>
