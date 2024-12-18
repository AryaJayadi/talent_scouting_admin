import {UserApiEntity} from "@/data/datasource/api/entity/UserApiEntity.ts";

export interface CompanyAPIEntity {
    Id: string;
    UserId: string;
    Name: string;
    LogoUrl: string;
    Description: string;
    Location: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date | null;

    User: UserApiEntity;
}
