import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { auth, sessionClient, userSessionClient } from '$lib/server/lucia';

export const POST: RequestHandler = async ({ locals }) => {
    const session = await locals.validate()
    if (!session) {
        throw redirect(302, "/")
    }
    await auth.invalidateSession(session.sessionId)
    locals.setSession(null)
    sessionClient.disconnect()
    userSessionClient.disconnect()
    
    throw redirect(302, "/")
};