export interface CompanyInsertCompanyAPIRequest {
    name: string;
    logoUrl: string;
    description: string;
    email: string;
    password: string;
    salaryRange: string;
    location: string;
}

export function createCompanyInsertCompanyAPIRequest(
    name: string,
    logoUrl: string,
    description: string,
    email: string,
    password: string,
    salaryRange: string,
    location: string,
) : CompanyInsertCompanyAPIRequest {
    return {
        name,
        logoUrl,
        description,
        email,
        password,
        salaryRange,
        location
    }
}