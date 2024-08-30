import {Company} from "@/domain/model/Company.ts";
import {CompanyRepository} from "@/domain/repository/CompanyRepository.ts";
import {CompanyAPIEntity} from "@/data/datasource/api/entity/CompanyAPIEntity.ts";

export interface InsertCompanyUseCase {
    invoke: (data: CompanyAPIEntity) => Promise<Company>
}

export class InsertCompany implements InsertCompanyUseCase {
    private companyRepo: CompanyRepository;

    constructor(_companyRepo: CompanyRepository) {
        this.companyRepo = _companyRepo;
    }

    invoke(data: CompanyAPIEntity): Promise<Company> {
        return this.companyRepo.insertCompany(data);
    }
}