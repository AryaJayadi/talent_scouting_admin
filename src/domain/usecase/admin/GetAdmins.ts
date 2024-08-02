import {Admin} from "@/domain/model/Admin.ts";
import {AdminRepository} from "@/domain/repository/AdminRepository.ts";

export interface GetAdminsUseCase {
    invoke: () => Promise<Admin[]>;
}

export class GetAdmins implements GetAdminsUseCase {
    private adminRepo: AdminRepository;

    constructor(_adminRepo: AdminRepository) {
        this.adminRepo = _adminRepo;
    }

    invoke(): Promise<Admin[]> {
        return this.adminRepo.getAdmins();
    }
}