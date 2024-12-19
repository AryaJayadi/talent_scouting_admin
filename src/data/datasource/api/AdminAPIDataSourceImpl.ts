import AdminDataSource from "@/data/datasource/AdminDataSource.ts";
import {Admin} from "@/domain/model/Admin.ts";
import axios from "axios";
import {AdminAPIEntity} from "@/data/datasource/api/entity/AdminAPIEntity.ts";
import {AdminLoginAdminAPIRequest} from "@/data/datasource/api/request/AdminLoginAdminAPIRequest.ts";

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/user";

export default class AdminAPIDataSourceImpl implements AdminDataSource {
    private axiosInstance = axios.create({
        baseURL: BASE_URL,
        transformResponse: [function (response) {
            console.log(BASE_URL)
            let resp

            try {
                resp = JSON.parse(response)
            } catch (error) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
            }

            if(resp) {
                if(resp.length)
                return resp.data.map((item: AdminAPIEntity): Admin => ({
                    id: item.id,
                    name: item.name,
                }))
                return resp
            }
        }],
    })

    async getAdmins(): Promise<Admin[]> {
        try {
            const response = await this.axiosInstance({
                method: "get",
                url: "",
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async login(data: AdminLoginAdminAPIRequest): Promise<Admin> {
        try {
            const response = await this.axiosInstance({
                method: "post",
                url: "/login",
                data: data,
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

}