import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const isValidated = await locals.validate()
    console.log(isValidated)
    return {};
}) satisfies PageServerLoad;