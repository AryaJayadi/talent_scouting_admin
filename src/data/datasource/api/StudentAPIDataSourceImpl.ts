import StudentDataSource from "@/data/datasource/StudentDataSource.ts";
import {Student} from "@/domain/model/Student.ts";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default class StudentAPIDataSourceImpl implements StudentDataSource {
    private axiosInstance = axios.create({
        baseURL: BASE_URL + "student",
        transformResponse: [function (response) {
            let resp

            try {
                resp = JSON.parse(response);
            } catch (e) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(e)}`)
            }

            return resp;
        }]
    })

    async getAll(): Promise<Student[]> {
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
}