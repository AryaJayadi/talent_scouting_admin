import {Student} from "@/domain/model/Student.ts";
import {StudentGetByFilterAPIRequest} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";
import {StudentInsertStudentAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentAPIRequest.ts";
import {StudentInsertStudentBulkAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentBulkAPIRequest.ts";

export default interface StudentDataSource {
    getAll(): Promise<Student[]>;
    getByFilter(query: StudentGetByFilterAPIRequest): Promise<Student[]>;
    save(data: StudentInsertStudentAPIRequest): Promise<Student>;
    saveBulk(data: StudentInsertStudentBulkAPIRequest): Promise<Student[]>;
}