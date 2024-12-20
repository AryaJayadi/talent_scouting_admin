import {CompanyRepository} from "@/domain/repository/CompanyRepository.ts";

interface DeleteCompanyUseCase {
    invoke: (id: string) => Promise<void>;
}

export class DeleteCompany implements DeleteCompanyUseCase {
    private repository: CompanyRepository;

    constructor(_repository: CompanyRepository) {
        this.repository = _repository;
    }

    invoke(id: string): Promise<void> {
        return this.repository.deleteCompany(id);
    }
}