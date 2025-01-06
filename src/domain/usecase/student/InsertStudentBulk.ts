import {StudentInsertStudentBulkAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentBulkAPIRequest.ts";
import {Student} from "@/domain/model/Student.ts";
import {StudentRepository} from "@/domain/repository/StudentRepository.ts";

export interface InsertStudentBulkUseCase {
    invoke: (data: StudentInsertStudentBulkAPIRequest) => Promise<Student[]>
}

export class InsertStudentBulk implements InsertStudentBulkUseCase {
    repository: StudentRepository;

    constructor(_repository: StudentRepository) {
        this.repository = _repository;
    }

    invoke(data: StudentInsertStudentBulkAPIRequest): Promise<Student[]> {
        return this.repository.insertStudents(data);
    }
}