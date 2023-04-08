import type { OrgEmailPolicy, OrgType } from '@prisma/client';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
    createOrganization: async ({ request }) => {
        const { name, emailPolicy, orgType } = Object.fromEntries(await request.formData()) as { name: string, emailPolicy: OrgEmailPolicy, orgType: OrgType }

        try {
            await prisma.organization.create({
                data: {
                    name,
                    orgType,
                    emailPolicy
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