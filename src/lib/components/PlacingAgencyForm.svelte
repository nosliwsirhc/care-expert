<div class="row">
	<div class="col">
		<h2>New Placing Agency</h2>
	</div>
</div>
<form action="?/createPlacingAgency" method="post">
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
	</div>
    <div class="row justify-content-center mt-4">
        <div class="col-6 text-center">
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</form>
