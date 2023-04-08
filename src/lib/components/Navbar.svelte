<script lang="ts">
	import { page } from "$app/stores";
	import { onDestroy } from "svelte";

		let section = ''

		const unsubscribe = page.subscribe(currentPage => {
			section = currentPage.url.pathname.split('/')[1]
		})

		onDestroy(unsubscribe)

	export const links = [
		{ href: "/placingagencies", slug: "placingagencies", hyperlink: "Placing Agencies" },
		{ href: "/admin/dashboard", slug: "admin", hyperlink: "Admin" } 
	]
</script>

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">CareExpert</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarCollapse"
			aria-controls="navbarCollapse"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarCollapse">
			<ul class="navbar-nav me-auto mb-2 mb-md-0">
				{#each links as link}
				<li class="nav-item">
					<a class="nav-link" class:active={section === link.slug} href={link.href}>{link.hyperlink}</a>
				</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
