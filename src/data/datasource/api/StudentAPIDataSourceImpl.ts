import StudentDataSource from "@/data/datasource/StudentDataSource.ts";
import {Student} from "@/domain/model/Student.ts";
import axios from "axios";
import {StudentGetByFilterAPIRequest} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";
import {StudentInsertStudentAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentAPIRequest.ts";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default class StudentAPIDataSourceImpl implements StudentDataSource {
    private token = JSON.parse(localStorage.getItem("token") || '""');
    private axiosInstance = axios.create({
        baseURL: BASE_URL + "/student",
        headers: {
            Authorization : `Bearer ${this.token}`,
        },
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

    async save(data: StudentInsertStudentAPIRequest): Promise<Student> {
        try {
            const response = await this.axiosInstance({
                method: "POST",
                url: "/",
                data: data,
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }
}