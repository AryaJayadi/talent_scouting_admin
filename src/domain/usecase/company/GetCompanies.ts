import {Company} from "@/domain/model/Company.ts";
import {CompanyRepository} from "@/domain/repository/CompanyRepository.ts";

export interface GetCompaniesUseCase {
    invoke: () => Promise<Company[]>
}

export class GetCompanies implements GetCompaniesUseCase {
    private companyRepo: CompanyRepository;

    constructor(_companyRepo: CompanyRepository) {
        this.companyRepo = _companyRepo;
    }

    invoke(): Promise<Company[]> {
        return this.companyRepo.getAllCompany();
    }
}