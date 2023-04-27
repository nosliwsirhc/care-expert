import type { PageServerLoad } from './$types';
import { prisma } from "$lib/server/prisma";
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = (async () => {
    try {
        const users = await prisma.authUser.findMany()
        return {
            users
        }
    } catch (error) {
        return fail(500, { message: 'Unable to retrieve users.'})
    }
})