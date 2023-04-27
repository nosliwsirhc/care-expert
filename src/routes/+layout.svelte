<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData
</script>

<Navbar user={data.user} />
<slot />
