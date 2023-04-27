import { superValidate } from "sveltekit-superforms/server";
import type { PageServerLoad } from "./$types";
import { z } from "zod";
import { fail, type Actions } from "@sveltejs/kit";
import { OrgEmailPolicy, OrgEmailType, OrgType } from "@prisma/client";

const schema = z.object({
    name: z.string(),
    emailPolicy: z.nativeEnum(OrgEmailType)
})

const orgSchema = z.object({
    name: z.string(),
    orgType: z.nativeEnum(OrgType),
    emailPolicy: z.nativeEnum(OrgEmailPolicy)
})

export const load: PageServerLoad = async () => {
    const form = superValidate(orgSchema)
    try {
        const placingAgencies = await prisma.organization.findMany({
            where: {
                orgType: 'PlacingAgency'
            },
            orderBy: [
                {
                    name: 'asc'
                }
            ]
        })
        return {
            placingAgencies,
            form
        }
    } catch (error) {
        console.error(error)
        return fail(404, { message: 'No Placing Agencies found.'})
    }
}

export const actions: Actions = {
    createPlacingAgency: async ({ request }) => {
        const form = await superValidate(request, orgSchema)
        if (!form.valid) return fail(400, { form })
        try {
            await prisma.organization.create({
                data: {
                    name: form.data.name,
                    orgType: 'PlacingAgency',
                    emailPolicy: form.data.emailPolicy
                }
            })
        } catch (error) {
            console.error(error)
            return fail(500, { message: 'Could not create the Placing Agency.'})
        }

        return { form }
    }
}