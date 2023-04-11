<script lang="ts">
    import type { OrgEmailType } from "@prisma/client";
	export let email: {
		orgId: string;
		email: string;
        type: OrgEmailType;
		contactName: string | null;
    };
</script>

<div class="card">
	<div class="card-body">
		<h6 class="card-subtitle">{email.type}</h6>
		<p class="card-text">
			{email.email}<br/>
			{#if email.contactName}
				{email.contactName}<br/>
			{/if}
		</p>
	</div>
</div>