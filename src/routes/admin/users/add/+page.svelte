<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="row">
	<div class="col">
		<h2>New User</h2>
	</div>
</div>
<form method="POST">
	<div class="row mb-2">
		<div class="col-6">
			<label for="firstName" class="form-label">First Name</label>
			<input type="text" name="firstName" id="firstName" class="form-control" />
		</div>
		<div class="col-6">
			<label for="lastName" class="form-label">Last Name</label>
			<input type="text" name="lastName" id="lastName" class="form-control" />
		</div>
	</div>
	<div class="row mb-2">
		<div class="col">
			<label for="email" class="form-label">Email</label>
			<input type="text" name="email" id="email" class="form-control" />
		</div>
		<div class="col">
			<label for="password" class="form-label">Password</label>
			<input type="password" class="form-control" id="password" name="password" />
		</div>
	</div>
	<div class="row">
		<div class="col">
			<label for="role" class="form-label">Role</label>
			<select name="role" id="role" class="form-select">
                <option>--Select a Role--</option>
				<option value="Admin">Admin</option>
				<option value="FosterParent">Foster Parent</option>
				<option value="EmployeeCaregiver">Employee Caregiver</option>
				<option value="Director">Director</option>
				<option value="Bookkeeper">Bookkeeper</option>
				<option value="ProgramSupervisor">Program Supervisor</option>
				<option value="ResourceWorker">Resource Worker</option>
				<option value="Unassigned" selected>Unassigned</option>
			</select>
		</div>
		<div class="col">
			<label for="orgId" class="form-label">Organization</label>
			<select name="orgId" id="orgId" class="form-select">
                <option>--Select an Organization--</option>
				{#if data.orgs}
					{#each data.orgs as org}
						<option value={org.id}>{org.name}</option>
					{/each}
				{:else}
					<option>Could not load organizations</option>
				{/if}
			</select>
		</div>
	</div>

	<div class="row justify-content-center mt-5">
		<div class="col-6 text-center">
			<div class="d-grid">
				<button type="submit" class="btn btn-primary">Save</button>
			</div>
		</div>
	</div>
</form>
