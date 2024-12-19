import CompanyDataSource from "@/data/datasource/CompanyDataSource.ts";
import {Company} from "@/domain/model/Company.ts";
import axios from "axios";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";
import {CompanyAPIEntity} from "@/data/datasource/api/entity/CompanyAPIEntity.ts";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default class CompanyAPIDataSourceImpl implements CompanyDataSource {
    private axiosInstance = axios.create({
        baseURL: BASE_URL + "/company",
        headers: {
            Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxYTQ3NjRlNi1hZTg1LTRlYmYtOGNkZC04MWQ4YTI0YzhjMDQiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaXNzIjoiMWE0NzY0ZTYtYWU4NS00ZWJmLThjZGQtODFkOGEyNGM4YzA0IiwiZXhwIjoxNzM0NjU5Mjk4fQ.eF2f9gSQ4gxw1sk8euMzgC0lK70ClVZE6BfdiM1yKqs`,
        },
        transformResponse: [function (response) {
            let resp

            try {
                resp = JSON.parse(response);
            } catch (e) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(e)}`)
            }

            if(resp && Array.isArray(resp)) {
                return resp.map((item: CompanyAPIEntity): Company => ({
                    id: item.Id,
                    userId: item.UserId,
                    name: item.Name,
                    logoUrl: item.LogoUrl,
                    description: item.Description,
                    location: item.Location,
                    createdAt: new Date(item.CreatedAt)
                }))
                    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
            } else if(resp != null) {
                const item: CompanyAPIEntity = resp;
                return {
                    id: item.Id,
                    userId: item.UserId,
                    name: item.Name,
                    logoUrl: item.LogoUrl,
                    description: item.Description,
                    location: item.Location,
                    createdAt: item.CreatedAt
                }
            } else return resp;
        }]
    })

    async getAll(): Promise<Company[]> {
        try {
            const response = await this.axiosInstance({
                method: "GET",
                url: "/"
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const response = await this.axiosInstance({
                method: "DELETE",
                url: "/delete",
                data: id
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async get(id: number): Promise<Company> {
        try {
            const response = await this.axiosInstance({
                method: "GET",
                url: `/get/${id}`,
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

   async saveBulk(file: File): Promise<Company[]> {
        try {
            const response = await this.axiosInstance({
                method: "POST",
                url: `/saveBulk`,
                data: file
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async save(company: CompanyInsertCompanyAPIRequest): Promise<Company> {
        try {
            const response = await this.axiosInstance({
                method: "POST",
                url: `/createNewCompany`,
                data: company
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }
}