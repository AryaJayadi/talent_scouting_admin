import {Company} from "@/domain/model/Company.ts";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";

export default interface CompanyDataSource {
    get(id: number): Promise<Company>;
    save(company: CompanyInsertCompanyAPIRequest): Promise<Company>;
    delete(id: string): Promise<void>;
    getAll(): Promise<Company[]>;
    saveBulk(file: File): Promise<Company[]>;
}