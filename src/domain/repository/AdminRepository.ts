import {Admin} from "@/domain/model/Admin.ts";
import {AdminLoginAdminAPIRequest} from "@/data/datasource/api/request/AdminLoginAdminAPIRequest.ts";

export interface AdminRepository {
    getAdmins(): Promise<Admin[]>;
    loginAdmin(data: AdminLoginAdminAPIRequest): Promise<Admin>;
}