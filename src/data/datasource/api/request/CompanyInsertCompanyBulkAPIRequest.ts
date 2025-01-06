export interface CompanyInsertCompanyBulkAPIRequest {
    companyFile: File | null;
}

export function createCompanyInsertCompanyBulkAPIRequest(
    file?: File
) : CompanyInsertCompanyBulkAPIRequest {
    return {
        companyFile: file ?? null,
    }
}