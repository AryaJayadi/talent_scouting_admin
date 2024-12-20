import {Company} from "@/domain/model/Company.ts";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";

export interface CompanyRepository {
    getCompany(id: number): Promise<Company>;
    insertCompany(company: CompanyInsertCompanyAPIRequest): Promise<Company>;
    deleteCompany(id: string): Promise<void>;
    getAllCompany(): Promise<Company[]>;
    insertBulkCompany(file: File): Promise<Company[]>;
}