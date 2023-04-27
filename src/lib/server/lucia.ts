import lucia from "lucia-auth"
import prismaAdapter from "@lucia-auth/adapter-prisma"
import redisAdapter from "@lucia-auth/adapter-session-redis"
import { sveltekit } from "lucia-auth/middleware"
import { dev } from "$app/environment"
import { prisma } from "$lib/server/prisma"
import { createClient } from "redis";
import { SECRET_REDIS_URL, SECRET_REDIS_PASSWORD } from "$env/static/private"

export const sessionClient = createClient({
	url: dev ? `redis://localhost:6379` : "redis://localhost",
	// password: dev ? SECRET_REDIS_PASSWORD : "123456"
});
export const userSessionClient = createClient({
	url: dev ? `redis://localhost:6380` : "redis://localhost",
	// password: dev ? SECRET_REDIS_PASSWORD : "123456"
});

export const auth = lucia({
	adapter: {
		user: prismaAdapter(prisma),
		session: redisAdapter({
			session: sessionClient,
			userSession: userSessionClient
		})
	},
    env: dev ? "DEV" : "PROD",
	transformDatabaseUser(databaseUser) {
		return {
			userId: databaseUser.id,
			email: databaseUser.email,
			firstName: databaseUser.firstName,
			lastName: databaseUser.lastName,
			role: databaseUser.role,
			orgId: databaseUser.orgId
		}
	},
	middleware: sveltekit()
});

export type Auth = typeof auth