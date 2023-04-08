<div class="row">
	<div class="col">
		<h2>New Organization</h2>
	</div>
</div>
<form action="?/createOrganization" method="post">
	<div class="row">
		<div class="col-12 mb-2">
			<label for="name" class="form-label">Name</label>
			<input type="text" id="name" name="name" class="form-control" />
		</div>
		<div class="col-12">
			<label for="emailPolicy" class="form-label">Email Policy</label>
			<select name="emailPolicy" id="emailPolicy" class="form-select">
				<option selected value="Open">Open</option>
				<option value="FirstNameLastInitial">First Name and Last Initial</option>
				<option value="Initials">Initials</option>
				<option value="FullyRedacted">Fully Redacted</option>
			</select>
		</div>
        <div class="col-12">
			<label for="orgType" class="form-label">Organization Type</label>
			<select name="orgType" id="orgType" class="form-select">
				<option selected value="Opr">OPR</option>
				<option value="PlacingAgency">Placing Agency</option>
				<option value="ServiceProvider">Service Provider</option>
				<option value="Unassigned">Unassigned</option>
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