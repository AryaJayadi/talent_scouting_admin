import {Admin} from "@/domain/model/Admin.ts";
import {AdminRepository} from "@/domain/repository/AdminRepository.ts";

export interface LoginAdminUseCase {
    invoke: (name: string, password: string) => Promise<Admin>;
}

export class LoginAdmin implements LoginAdminUseCase {
    private adminRepo: AdminRepository;

    constructor(_adminRepo: AdminRepository) {
        this.adminRepo = _adminRepo;
    }

    invoke(name: string, password: string): Promise<Admin> {
        return this.adminRepo.loginAdmin(name, password);
    }
}