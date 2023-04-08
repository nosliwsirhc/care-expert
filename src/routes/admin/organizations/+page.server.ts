import type { PageServerLoad } from './$types';
import { prisma } from "$lib/server/prisma";
import { fail } from '@sveltejs/kit';

export const load = (async () => {
    try {
        const organizations = await prisma.organization.findMany({
            orderBy: {
                name: 'asc'
            }
        })
        return {
            organizations
        };
    } catch (error) {
        return fail(500, { message: 'Unable to fetch organizations.'})
    }
}) satisfies PageServerLoad;