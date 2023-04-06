<script lang="ts">
	export let id: string;
</script>

<div class="row align-items-start">
	<div class="col">
		<h2>Add Email</h2>
	</div>
</div>
<form action="/placingagencies/{id}?/addEmail" method="post">
	<div class="row mb-2">
		<div class="col-6">
			<select name="type" id="type" class="form-select">
				<option selected value="Admin">Admin</option>
				<option value="Billing">Billing</option>
				<option value="Placement">Placement</option>
				<option value="SRA">SRA</option>
				<option value="Unassigned">Unassigned</option>
			</select>
		</div>
	</div>
	<div class="row">
		<div class="col-6">
			<label for="email" class="form-label">Email</label>
			<input type="text" name="email" id="email" class="form-control" />
		</div>
		<div class="col-6">
			<label for="contactName" class="form-label">Contact Name</label>
			<input type="text" name="contactName" id="contactName" class="form-control" />
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
