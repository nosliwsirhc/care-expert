<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="row">
	<div class="col">
		<h2>Users&nbsp;&nbsp;<a href="/admin/users/add"><img src="/square-plus.svg" width="32" height="32" alt=""></a></h2>
    </div>
</div>
{#if data.users?.length}
	<div class="row">
		<div class="col">
			<table class="table table-striped table-hover table-light">
				<thead>
					<tr>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Email</th>
						<th scope="col">Role</th>
					</tr>
				</thead>
				<tbody>
					{#each data.users as user}
						<tr>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.email}</td>
							<td>{user.role}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{/if}
