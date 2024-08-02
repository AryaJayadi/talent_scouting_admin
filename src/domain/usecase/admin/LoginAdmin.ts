import {Admin} from "@/domain/model/Admin.ts";
import {AdminRepository} from "@/domain/repository/AdminRepository.ts";
import {AdminLoginAdminAPIRequest} from "@/data/datasource/api/request/AdminLoginAdminAPIRequest.ts";

export interface LoginAdminUseCase {
    invoke: (data: AdminLoginAdminAPIRequest) => Promise<Admin>;
}

export class LoginAdmin implements LoginAdminUseCase {
    private adminRepo: AdminRepository;

    constructor(_adminRepo: AdminRepository) {
        this.adminRepo = _adminRepo;
    }

    invoke(data: AdminLoginAdminAPIRequest): Promise<Admin> {
        return this.adminRepo.loginAdmin(data);
    }
}