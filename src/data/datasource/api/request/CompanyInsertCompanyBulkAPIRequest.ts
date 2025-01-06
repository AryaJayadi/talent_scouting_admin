export interface CompanyInsertCompanyBulkAPIRequest {
    companyFile: File;
}

export function createCompanyInsertCompanyBulkAPIRequest(file: File) : CompanyInsertCompanyBulkAPIRequest {
    return {
        companyFile: file,
    }
}