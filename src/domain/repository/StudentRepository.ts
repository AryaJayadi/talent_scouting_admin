import {Student} from "@/domain/model/Student.ts";
import {StudentGetByFilterAPIRequest} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";

export interface StudentRepository {
    getAllStudents(): Promise<Student[]>;
    getByFilter(query: StudentGetByFilterAPIRequest): Promise<Student[]>;
}