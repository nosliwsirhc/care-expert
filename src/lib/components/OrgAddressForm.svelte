<script lang="ts">
	export let id: string;
	console.log(id);
</script>

<div class="row align-items-start">
	<div class="col">
		<h2>Add Address</h2>
	</div>
</div>
<form action="/placingagencies/{id}?/addAddress" method="post">
    <div class="row justify-content-between">
        <div class="col-7">
            <div class="row align-items-start mb-2">
                <div class="col-5">
                    <label for="street1" class="form-label">Street 1</label>
                    <input type="text" name="street1" id="street1" class="form-control" />
                </div>
                <div class="col-5">
                    <label for="street2" class="form-label">Street 2</label>
                    <input type="text" name="street2" id="street2" class="form-control" />
                </div>
                <div class="col-2">
                    <label for="poBox" class="form-label">PO Box</label>
                    <input type="text" name="poBox" id="poBox" class="form-control" />
                </div>
            </div>
            <div class="row align-items-start">
                <div class="col-5">
                    <label for="city" class="form-label">City</label>
                    <input type="text" name="city" id="city" class="form-control" />
                </div>
                <div class="col-5">
                    <label for="province" class="form-label">Province</label>
                    <input type="text" name="province" id="province" value="Ontario" class="form-control" />
                </div>
                <div class="col-2">
                    <label for="postalCode" class="form-label">Postal Code</label>
                    <input type="text" name="postalCode" id="postalCode" class="form-control" />
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="row mb-2">
                <div class="col">
                    <label for="label" class="form-label">Label</label>
                    <input type="text" name="label" id="label" value="Head Office" class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" id="primary" name="primary" value="true" class="form-check-input" />
                        <label for="primary" class="form-check-label"> Primary Location</label>
                    </div>
                </div>
            </div>
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
