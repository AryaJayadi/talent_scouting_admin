import {useCallback, useEffect, useMemo, useState} from "react";
import {Student} from "@/domain/model/Student.ts";
import {StudentRepositoryImpl} from "@/data/repository/StudentRepositoryImpl.ts";
import StudentAPIDataSourceImpl from "@/data/datasource/api/StudentAPIDataSourceImpl.ts";
import {GetStudentsByFilter} from "@/domain/usecase/student/GetStudentsByFilter.ts";
import {
    createStudentGetByFilterAPIRequest,
    StudentGetByFilterAPIRequest
} from "@/data/datasource/api/request/StudentGetByFilterAPIRequest.ts";

export default function StudentPageViewModel() {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState<Student[]>([])

    const studentAPIDataSourceImpl = useMemo(() => new StudentAPIDataSourceImpl(), [])
    const studentRepositoryImpl = useMemo(() => new StudentRepositoryImpl(studentAPIDataSourceImpl), [studentAPIDataSourceImpl])

    const getStudentByFilterUseCase = useMemo(() => new GetStudentsByFilter(studentRepositoryImpl), [studentRepositoryImpl])

    const getStudentsByFilter = useCallback(async (query: StudentGetByFilterAPIRequest) => {
        return await getStudentByFilterUseCase.invoke(query)
    }, [getStudentByFilterUseCase])

    useEffect(() => {
        async function fetchStudents() {
            setLoading(true)
            const res = await getStudentsByFilter(createStudentGetByFilterAPIRequest())
            setStudents(res)
            setLoading(false)
        }
        console.log("test")
        fetchStudents()
    }, [])

    function handleCreate() {
        
    }

    return {
        loading,
        students,
        handleCreate,
    }
}