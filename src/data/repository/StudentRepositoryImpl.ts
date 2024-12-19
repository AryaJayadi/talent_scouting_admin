import {StudentRepository} from "@/domain/repository/StudentRepository.ts";
import {Student} from "@/domain/model/Student.ts";
import StudentDataSource from "@/data/datasource/StudentDataSource.ts";
import {StudentGetByFilterAPIRequest} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";

export class StudentRepositoryImpl implements StudentRepository {
    private datasource: StudentDataSource;

    constructor(_datasource: StudentDataSource) {
        this.datasource = _datasource;
    }

    getAllStudents(): Promise<Student[]> {
        return this.datasource.getAll();
    }

    getByFilter(query: StudentGetByFilterAPIRequest): Promise<Student[]> {
        return this.datasource.getByFilter(query);
    }

}