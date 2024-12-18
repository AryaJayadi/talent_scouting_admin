import {Student} from "@/domain/model/Student.ts";

export default interface StudentDataSource {
    getAll(): Promise<Student[]>;
}