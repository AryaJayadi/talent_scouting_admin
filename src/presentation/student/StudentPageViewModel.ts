import {useCallback, useEffect, useMemo, useState} from "react";
import {Student} from "@/domain/model/Student.ts";
import {StudentRepositoryImpl} from "@/data/repository/StudentRepositoryImpl.ts";
import StudentAPIDataSourceImpl from "@/data/datasource/api/StudentAPIDataSourceImpl.ts";
import {GetStudentsByFilter} from "@/domain/usecase/student/GetStudentsByFilter.ts";
import {
    createStudentGetByFilterAPIRequest,
    StudentGetByFilterAPIRequest
} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";
import {StudentInsertStudentAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentAPIRequest.ts";
import {InsertStudent} from "@/domain/usecase/student/InsertStudent.ts";

export default function StudentPageViewModel() {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState<Student[]>([])
    const [searchKeyword, setSearchKeyword] = useState<string>("")

    const studentAPIDataSourceImpl = useMemo(() => new StudentAPIDataSourceImpl(), [])
    const studentRepositoryImpl = useMemo(() => new StudentRepositoryImpl(studentAPIDataSourceImpl), [studentAPIDataSourceImpl])

    const getStudentByFilterUseCase = useMemo(() => new GetStudentsByFilter(studentRepositoryImpl), [studentRepositoryImpl])
    const insertStudentUseCase = useMemo(() => new InsertStudent(studentRepositoryImpl), [studentRepositoryImpl])

    const getStudentsByFilter = useCallback(async (query: StudentGetByFilterAPIRequest) => {
        return await getStudentByFilterUseCase.invoke(query)
    }, [getStudentByFilterUseCase])

    const insertStudent = useCallback(async (data: StudentInsertStudentAPIRequest) => {
        return await insertStudentUseCase.invoke(data);
    }, [insertStudentUseCase])

    useEffect(() => {
        async function fetchStudents() {
            setLoading(true)
            const res = await getStudentsByFilter(createStudentGetByFilterAPIRequest())
            setStudents(res)
            setLoading(false)
        }
        fetchStudents()
    }, [])

    async function handleCreate(data: StudentInsertStudentAPIRequest) {
        setLoading(true)
        const res = await insertStudent(data)
        setLoading(false)
        return res
    }

    async function handleSearch(e: React.FormEvent) {
        e.preventDefault()

        setLoading(true)
        const res = await getStudentsByFilter(createStudentGetByFilterAPIRequest(searchKeyword))
        setStudents(res)
        setLoading(false)
    }

    return {
        loading,
        students,
        searchKeyword,
        setSearchKeyword,
        handleCreate,
        handleSearch,
    }
}