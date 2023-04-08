<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="row">
	<div class="col">
		<h2>Organizations&nbsp;&nbsp;<a href="/admin/organizations/add"><img src="/square-plus.svg" width="32" height="32" alt=""></a></h2>
    </div>
</div>
{#if data.organizations?.length}
	<div class="row">
		<div class="col">
			<table class="table table-striped table-hover table-light">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Type</th>
					</tr>
				</thead>
				<tbody>
					{#each data.organizations as org}
						<tr>
							<td>{org.name}</td>
							<td>{org.orgType}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{/if}
