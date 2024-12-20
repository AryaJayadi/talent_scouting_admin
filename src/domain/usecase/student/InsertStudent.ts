import {StudentInsertStudentAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentAPIRequest.ts";
import {Student} from "@/domain/model/Student.ts";
import {StudentRepository} from "@/domain/repository/StudentRepository.ts";

export interface InsertStudentUseCase {
    invoke: (data: StudentInsertStudentAPIRequest) => Promise<Student>;
}

export class InsertStudent implements InsertStudentUseCase {
    private repository: StudentRepository;

    constructor(_repository: StudentRepository) {
        this.repository = _repository;
    }

    invoke(data: StudentInsertStudentAPIRequest): Promise<Student> {
        return this.repository.insertStudent(data);
    }
}