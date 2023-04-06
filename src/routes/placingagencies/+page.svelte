<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="container">
	<h1>Placing Agencies</h1>

	{#if data?.placingAgencies}
		<ul>
			{#each data.placingAgencies as placingAgency}
				<li>
					<a href="/placingagencies/{placingAgency.id}">
						{placingAgency.name}
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	<form action="?/createPlacingAgency" method="post">
		<h2>New Placing Agency</h2>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" />
		<label for="emailPolicy">Email Policy</label>
		<select name="emailPolicy" id="emailPolicy">
			<option value="Open">Open</option>
			<option value="FirstNameLastInitial">First Name and Last Initial</option>
			<option value="Initials">Initials</option>
			<option value="FullyRedacted">Fully Redacted</option>
		</select>
		<button type="submit">Save Placing Agency</button>
	</form>
</div>
