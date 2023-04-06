<script lang="ts">
    export let address: {
        street1: string,
        street2: string | null,
        poBox: string | null,
        city: string,
        province: string,
        postalCode: string | null,
        label: string,
        primary: boolean
    }

    let primaryAsString = address.primary ? "Yes" : "No"
</script>

<div class="address">
    <h3>{address.label}</h3>
    <p>Street 1: {address.street1}</p>
    <p>Street 2: {address.street2}</p>
    <p>PO Box: {address.poBox}</p>
    <p>City: {address.city}</p>
    <p>Province: {address.province}</p>
    <p>Potal Code: {address.postalCode}</p>
    <p>Primary?: {primaryAsString}</p>
</div>