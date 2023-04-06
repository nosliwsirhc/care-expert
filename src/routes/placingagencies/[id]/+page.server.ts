import { prisma } from '$lib/server/prisma';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const id = params.id
    try {
        const placingAgency = await prisma.organization.findUnique({
            where: {
                id
            },
            include: {
                addresses: true
            }
        })
        return {
            placingAgency
        }
    } catch (error) {
        console.error(error)
        return fail(404, { message: 'Could not find Placing Agency.'})
    }
}

export const actions: Actions = {
    addAddress: async ({ request, params }) => {
        const { street1, street2, poBox, city, province, postalCode, label, primary } = Object.fromEntries(await request.formData()) as {
            street1: string, street2: string, poBox: string, city: string, province: string, postalCode: string, label: string, primary: string
        }
        const id = params.id || ""
        const primaryAsBoolean = primary === "true" ? true : false
        try {
            await prisma.organizationAddress.create({
                data: {
                    orgId: id,
                    street1,
                    street2,
                    poBox,
                    city,
                    province,
                    postalCode,
                    label,
                    primary: primaryAsBoolean
                }

            })
        } catch (error) {
            return fail(500, { message: 'Unable to save address.'})
        }

        return {
            status: 201
        }
    }
}