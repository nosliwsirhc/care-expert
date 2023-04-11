<script lang="ts">
	import { enhance } from '$app/forms';
	import { superForm } from 'sveltekit-superforms/client';
	export let data;
	const { form } = superForm(data.form);
</script>

<div class="container">
	<div class="row">
		<div class="col-12">
			<h2>New Placing Agency</h2>
		</div>
		<div class="col-12">
			<form action="?/createPlacingAgency" method="post" use:enhance>
				<div class="row">
					<div class="col-12 mb-2">
						<label for="name" class="form-label">Name</label>
						<input type="text" id="name" name="name" class="form-control" bind:value={$form.name} />
					</div>
					<div class="col-12">
						<label for="emailPolicy" class="form-label">Email Policy</label>
						<select
							name="emailPolicy"
							id="emailPolicy"
							class="form-select"
							bind:value={$form.emailPolicy}
						>
							<option selected value="Open">Open</option>
							<option value="FirstNameLastInitial">First Name and Last Initial</option>
							<option value="Initials">Initials</option>
							<option value="FullyRedacted">Fully Redacted</option>
						</select>
					</div>
				</div>
				<div class="row justify-content-center mt-4">
					<div class="col-6 text-center">
						<div class="d-grid">
							<button type="submit" class="btn btn-primary">Save</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
