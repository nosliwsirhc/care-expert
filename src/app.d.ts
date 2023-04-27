import type { PrismaClient, Role } from "@prisma/client";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		type AuthRequest = import("lucia-auth").AuthRequest;
		// interface Error {}
		interface Locals extends AuthRequest {}
		// interface PageData {}
		// interface Platform {}
		// Locals must be an interface and not a type
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
	}
	var prisma: PrismaClient

	declare namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth
		type UserAttributes = {
			email: string,
			firstName: string,
			lastName: string,
			role: Role,
			orgId: string
		}
	}
}

export {};
