import {AdminRepository} from "@/domain/repository/AdminRepository.ts";
import {Admin} from "@/domain/model/Admin.ts";
import AdminDataSource from "@/data/datasource/AdminDataSource.ts";
import {AdminLoginAdminAPIRequest} from "@/data/datasource/api/request/AdminLoginAdminAPIRequest.ts";

export class AdminRepositoryImpl implements AdminRepository {
    datasource: AdminDataSource;

    constructor(_datasource: AdminDataSource) {
        this.datasource = _datasource;
    }

    getAdmins(): Promise<Admin[]> {
        return this.datasource.getAdmins();
    }

    loginAdmin(data: AdminLoginAdminAPIRequest): Promise<Admin> {
        return this.datasource.login(data);
    }

}