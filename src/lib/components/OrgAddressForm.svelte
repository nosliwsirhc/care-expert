<script lang="ts">
    export let id: string
    console.log(id)
</script>

<h2>Add Address</h2>
<form action="/placingagencies/{id}?/addAddress" method="post">
    <label for="street1">Street 1</label>
    <input type="text" name="street1" id="street1" /><br />
    <label for="street2">Street 2</label>
    <input type="text" name="street2" id="street2" /><br />
    <label for="poBox">PO Box</label>
    <input type="text" name="poBox" id="poBox" /><br />
    <label for="city">City</label>
    <input type="text" name="city" id="city" /><br />
    <label for="province">Province</label>
    <input type="text" name="province" id="province" value="Ontario" /><br />
    <label for="postalCode">Postal Code</label>
    <input type="text" name="postalCode" id="postalCode" /><br />
    <label for="label">Label</label>
    <input type="text" name="label" id="label" value="Head Office" /><br />
    <input type="checkbox" id="primary" name="primary" value="true">
    <label for="primary"> Primary</label>
    <button type="submit">Save</button>
</form>