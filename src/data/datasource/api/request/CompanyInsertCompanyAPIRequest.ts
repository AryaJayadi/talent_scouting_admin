export interface CompanyInsertCompanyAPIRequest {
    Name: string;
    LogoUrl: string;
    Description: string;
    Location: string;
    Email: string;
    Password: string;
}

export function createCompanyInsertCompanyAPIRequest(
    name: string,
    logoUrl: string,
    description: string,
    location: string,
    email: string,
    password: string,
) : CompanyInsertCompanyAPIRequest {
    return {
        Name: name,
        LogoUrl: logoUrl,
        Description: description,
        Location: location,
        Email: email,
        Password: password,
    }
}