import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { sessionClient, userSessionClient } from '$lib/server/lucia';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals = auth.handleRequest(event);
	return await resolve(event);
};
