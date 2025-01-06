import {Student} from "@/domain/model/Student.ts";
import {StudentGetByFilterAPIRequest} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";
import {StudentInsertStudentAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentAPIRequest.ts";
import {StudentInsertStudentBulkAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentBulkAPIRequest.ts";

export interface StudentRepository {
    getAllStudents(): Promise<Student[]>;
    getByFilter(query: StudentGetByFilterAPIRequest): Promise<Student[]>;
    insertStudent(data: StudentInsertStudentAPIRequest): Promise<Student>;
    insertStudents(data: StudentInsertStudentBulkAPIRequest): Promise<Student[]>;
}