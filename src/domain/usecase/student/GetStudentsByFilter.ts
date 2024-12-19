import {Student} from "@/domain/model/Student.ts";
import {StudentRepository} from "@/domain/repository/StudentRepository.ts";
import {StudentGetByFilterAPIRequest} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";

export interface GetStudentsByFilterUseCase {
    invoke: (query: StudentGetByFilterAPIRequest) => Promise<Student[]>
}

export class GetStudentsByFilter implements GetStudentsByFilterUseCase {
    private repository: StudentRepository;

    constructor(_repository: StudentRepository) {
        this.repository = _repository;
    }

    invoke(query: StudentGetByFilterAPIRequest): Promise<Student[]> {
        return this.repository.getByFilter(query);
    }
}