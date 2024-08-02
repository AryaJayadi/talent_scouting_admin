import {AdminRepository} from "@/domain/repository/AdminRepository.ts";
import {Admin} from "@/domain/model/Admin.ts";
import AdminDataSource from "@/data/datasource/AdminDataSource.ts";

export class AdminRepositoryImpl implements AdminRepository {
    datasource: AdminDataSource;

    constructor(_datasource: AdminDataSource) {
        this.datasource = _datasource;
    }

    getAdmins(): Promise<Admin[]> {
        return this.datasource.getAdmins();
    }

    loginAdmin(name: string, password: string): Promise<Admin> {
        return this.datasource.login(name, password);
    }

}