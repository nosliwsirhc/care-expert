<script lang="ts">
	export let address: {
		street1: string;
		street2: string | null;
		poBox: string | null;
		city: string;
		province: string;
		postalCode: string | null;
		label: string;
		primary: boolean;
	};
</script>

<div class="card">
	<div class="card-body">
		<h5 class="card-title">Address</h5>
		<h6 class="card-subtitle">{address.label} {#if address.primary}(Primary){/if}</h6>
		<p class="card-text">
			{address.street1}<br/>
			{#if address.street2}
				{address.street2}<br/>
			{/if}
			{#if address.poBox}
				PO Box {address.poBox}<br/>
			{/if}
			{address.city}, {address.province}<br/>
			{#if address.postalCode}
				{address.postalCode}<br/>
			{/if}
		</p>
	</div>
</div>
