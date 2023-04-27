import type { OrgEmailPolicy } from "@prisma/client";

export function emailPolicyParser(policy: OrgEmailPolicy) {
    switch (policy) {
        case "FirstNameLastInitial":
            return "Full First Name and Last Initial"
        case "FullyRedacted":
            return "Fully Redacted"
        case "Initials":
            return "Initials Only"
        case "Open":
            return "No Redactions Required"
        default:
            return "No Policy Defined"
    }
}