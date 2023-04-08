<script lang="ts">
import { page } from "$app/stores";

const links = [
    { href: "/admin/dashboard", class: "fi fi-rr-dashboard bi pe-none me-2", hyperlink: "Dashboard" },
    { href: "/admin/users", class: "fi fi-rr-users bi pe-none me-2", hyperlink: "Users" },
    { href: "/admin/organizations", class: "fi fi-rr-building bi pe-none me-2", hyperlink: "Organizations"},
    { href: "/admin/security", class: "fi fi-rr-shield-check bi pe-none me-2", hyperlink: "Security" }
]
</script>

<div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
	<a
		href="/"
		class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
	>
		<span class="fs-4">Admin Console</span>
	</a>
	<hr />
	<ul class="nav nav-pills flex-column mb-auto">
        {#each links as link}
        <li>
            <a href={link.href} class="nav-link text-white" class:active={$page.url.pathname === link.href}>
                <i class={link.class}/>
                {link.hyperlink}
            </a>
        </li>
        {/each}
	</ul>
</div>
<div class="container">
    <slot></slot>
</div>

<style>
	.bi {
		vertical-align: -0.125em;
		fill: currentColor;
	}
</style>