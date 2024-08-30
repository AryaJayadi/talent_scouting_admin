import {Admin} from "@/domain/model/Admin.ts";
import {AdminLoginAdminAPIRequest} from "@/data/datasource/api/request/AdminLoginAdminAPIRequest.ts";

export default interface AdminDataSource {
    getAdmins(): Promise<Admin[]>;
    login(data: AdminLoginAdminAPIRequest): Promise<Admin>;
}