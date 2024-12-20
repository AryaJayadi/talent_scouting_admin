import {CompanyRepository} from "@/domain/repository/CompanyRepository.ts";
import CompanyDataSource from "@/data/datasource/CompanyDataSource.ts";
import {Company} from "@/domain/model/Company.ts";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";

export class CompanyRepositoryImpl implements CompanyRepository {
    private dataSource: CompanyDataSource;

    constructor(_dataSource: CompanyDataSource) {
        this.dataSource = _dataSource;
    }

    deleteCompany(id: string): Promise<void> {
        return this.dataSource.delete(id);
    }

    getAllCompany(): Promise<Company[]> {
        return this.dataSource.getAll();
    }

    getCompany(id: number): Promise<Company> {
        return this.dataSource.get(id);
    }

    insertBulkCompany(file: File): Promise<Company[]> {
        return this.dataSource.saveBulk(file);
    }

    insertCompany(company: CompanyInsertCompanyAPIRequest): Promise<Company> {
        return this.dataSource.save(company);
    }

}