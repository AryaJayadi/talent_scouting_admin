import AdminDataSource from "@/data/datasource/AdminDataSource.ts";
import {Admin} from "@/domain/model/Admin.ts";
import axios from "axios";
import {AdminAPIEntity} from "@/data/datasource/api/entity/AdminAPIEntity.ts";

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "admin";

export default class AdminAPIDataSourceImpl implements AdminDataSource {
    private axiosInstance = axios.create({
        baseURL: BASE_URL,
        transformResponse: [function (response) {
            let resp

            try {
                resp = JSON.parse(response)
            } catch (error) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
            }

            if (resp.status === 'OK') {
                if (resp.data) {
                    return resp.data.map((item: AdminAPIEntity): Admin => ({
                        id: item.id,
                        name: item.name,
                    }))
                }
                return resp.data
            } else {
                throw Error(`[requestClient] Request failed with reason -  ${response}`)
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

    async login(name: string, password: string): Promise<Admin> {
        try {
            const response = await this.axiosInstance({
                method: "post",
                url: "/",
                data: {
                    name: name,
                    password: password,
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

}