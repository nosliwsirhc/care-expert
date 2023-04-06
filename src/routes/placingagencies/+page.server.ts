import { fail, type Actions } from "@sveltejs/kit";
import { prisma } from '$lib/server/prisma';
import type { OrgEmailPolicy } from "@prisma/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
        const placingAgencies = await prisma.organization.findMany({
            orderBy: [
                {
                    name: 'asc'
                }
            ]
        })
        return {
            placingAgencies
        }
    } catch (error) {
        console.error(error)
        return fail(404, { message: 'No Placing Agencies found.'})
    }
}

export const actions: Actions = {
    createPlacingAgency: async ({ request }) => {
        const { name, emailPolicy } = Object.fromEntries(await request.formData()) as { name: string, emailPolicy: OrgEmailPolicy }

        try {
            await prisma.organization.create({
                data: {
                    name,
                    orgType: 'PlacingAgency',
                    emailPolicy: emailPolicy
                }
            })
        } catch (error) {
            console.error(error)
            return fail(500, { message: 'Could not create the Placing Agency.'})
        }

        return {
            status: 201
        }
    }
}