import {Admin} from "@/domain/model/Admin.ts";

export interface AdminRepository {
    getAdmins(): Promise<Admin[]>;
    loginAdmin(name: string, password: string): Promise<Admin>;
}