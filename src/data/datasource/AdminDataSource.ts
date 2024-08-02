import {Admin} from "@/domain/model/Admin.ts";

export default interface AdminDataSource {
    getAdmins(): Promise<Admin[]>;
    login(name: string, password: string): Promise<Admin>;
}