import {Student} from "@/domain/model/Student.ts";
import {StudentRepository} from "@/domain/repository/StudentRepository.ts";

export interface GetStudentsUseCase {
    invoke: () => Promise<Student[]>
}

export class GetStudents implements GetStudentsUseCase {
    private repository: StudentRepository;

    constructor(_repository: StudentRepository) {
        this.repository = _repository;
    }

    invoke(): Promise<Student[]> {
        return this.repository.getAllStudents();
    }
}