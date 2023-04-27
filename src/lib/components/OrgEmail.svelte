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
			{#if email.contactName}
				{email.contactName}<br/>
			{/if}
			<a href="mailto:{email.email}">{email.email}</a>
		</p>
	</div>
</div>