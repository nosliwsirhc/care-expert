import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from "$lib/server/lucia"
import { sessionClient, userSessionClient } from '$lib/server/lucia';

export const load = (async ({ locals }) => {
    const session = await locals.validate()
    if(session) {
        throw redirect(302, "/")
    }
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const { email, password } = Object.fromEntries(await request.formData()) as Record<string, string>
        
        try {
            await sessionClient.connect()
            await userSessionClient.connect()
            const key = await auth.useKey("email", email, password)
            const session = await auth.createSession(key.userId)
            locals.setSession(session)
        } catch (error) {
            console.error(error)
            return fail(400, { message: 'Could not sign in user'})
        }
        throw redirect(302, "/")
    }
};