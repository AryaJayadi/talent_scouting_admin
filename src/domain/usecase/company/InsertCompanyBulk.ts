import {CompanyInsertCompanyBulkAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyBulkAPIRequest.ts";
import {Company} from "@/domain/model/Company.ts";
import {CompanyRepository} from "@/domain/repository/CompanyRepository.ts";

export interface InsertCompanyBulkUseCase {
    invoke: (data: CompanyInsertCompanyBulkAPIRequest) => Promise<Company[]>
}

export class InsertCompanyBulk implements InsertCompanyBulkUseCase {
    repository: CompanyRepository;

    constructor(_repository: CompanyRepository) {
        this.repository = _repository;
    }

    invoke(data: CompanyInsertCompanyBulkAPIRequest): Promise<Company[]> {
        return this.repository.insertBulkCompany(data)
    }
}