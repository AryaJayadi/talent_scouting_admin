import {Student} from "@/domain/model/Student.ts";

export interface StudentRepository {
    getAllStudents(): Promise<Student[]>;
}