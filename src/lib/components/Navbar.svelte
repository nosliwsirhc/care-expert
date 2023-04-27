<script lang="ts">
	import { page } from '$app/stores';
	import type { Session, User } from 'lucia-auth';
	import { onDestroy } from 'svelte';

	let section = '';
	export let user: User | null;

	const unsubscribe = page.subscribe((currentPage) => {
		section = currentPage.url.pathname.split('/')[1];
	});

	onDestroy(unsubscribe);

	export const links = [
		{
			href: '/placingagencies',
			slug: 'placingagencies',
			hyperlink: 'Placing Agencies',
			permissions: []
		},
		{ href: '/admin/dashboard', slug: 'admin', hyperlink: 'Admin', permissions: ['Admin'] }
	];
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
				{#if user}
					<li class="nav-item">
						<a class="nav-link" class:active={section === 'placingagencies'} href="/placingagencies"
							>Placing Agencies</a
						>
					</li>
					{#if (user.role = 'Admin')}
						<li class="nav-item">
							<a class="nav-link" class:active={section === 'admin'} href="/admin/dashboard">Admin</a>
						</li>
					{/if}
				{/if}
			</ul>
			<div class="d-flex">
				{#if !user}
					<a href="/login" class="btn btn-primary">Login</a>
				{:else}
					<form method="POST">
						<button class="btn btn-warning" formaction="/logout" type="submit">Logout</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</nav>
