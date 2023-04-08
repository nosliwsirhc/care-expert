import type { PageServerLoad } from './$types';
import { prisma } from "$lib/server/prisma";
import { fail, type Actions, redirect } from '@sveltejs/kit';
import type { Role } from '@prisma/client';
import bcrypt from "bcrypt";

export const load = (async () => {
    try {
        const orgs = await prisma.organization.findMany({
            orderBy: {
                name: 'asc'
            }
        })
        return {
            orgs
        }
    } catch (error) {
        return fail(500, { message: 'Unable to fetch organization list.'})
    }
}) satisfies PageServerLoad;

export const actions: Actions = {
    createUser: async ({ request }) => {
        const { email, password, firstName, lastName, role, orgId } = Object.fromEntries(await request.formData()) as { email: string, password: string, firstName: string, lastName: string, role: Role, orgId: string }
        try {
            let hashedPassword = await bcrypt.hash(password, 10)
            await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    role,
                    orgId
                }
            })
        } catch (error) {
            console.error(error)
            return fail(500, { message: 'Could not create new user.'})
        }
        throw redirect(300, '/admin/users')
    }
}