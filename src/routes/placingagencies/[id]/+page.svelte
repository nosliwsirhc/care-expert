<script lang="ts">
	import type { PageServerData } from './$types';
	import OrgAddress from '$lib/components/OrgAddress.svelte';
	import OrgAddressForm from '$lib/components/OrgAddressForm.svelte';
	import OrgEmailForm from '$lib/components/OrgEmailForm.svelte';
	import OrgEmail from '$lib/components/OrgEmail.svelte';
	import { emailPolicyParser } from './helpers';

	export let data: PageServerData;
</script>

<div class="container">
	{#if data?.placingAgency}
		<div class="row mb-4">
			<div class="col-12">
				<h1>{data.placingAgency.name}</h1>
			</div>
			<div class="col-3">
				{#if data?.placingAgency?.addresses.length > 0}
					<OrgAddress address={data.placingAgency?.addresses[0]} />
				{/if}
			</div>
			{#if data.placingAgency.emailAddresses}
				<div class="col-9">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Important Email Info</h5>
							<h6 class="card-subtitle mb-2">Email Policy for Client Names is <strong>{emailPolicyParser(data.placingAgency.emailPolicy)}</strong></h6>
							<div class="row">
								{#each data.placingAgency.emailAddresses as email}
									<div class="col-4">
										<OrgEmail {email} />
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
		{#if data.placingAgency.addresses.length < 1}
			<div class="row">
				<div class="col">
					<OrgAddressForm id={data.placingAgency.id} />
				</div>
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
