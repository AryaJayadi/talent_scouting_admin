import StudentDataSource from "@/data/datasource/StudentDataSource.ts";
import {Student} from "@/domain/model/Student.ts";
import axios from "axios";
import * as console from "node:console";
import {StudentGetByFilterAPIRequest} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";

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

    async getByFilter(query: StudentGetByFilterAPIRequest): Promise<Student[]> {
        try {
            const response = await this.axiosInstance({
                method: "POST",
                url: "/getStudentByFilter",
                data: query,
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }
}