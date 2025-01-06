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
import {InsertStudentBulk} from "@/domain/usecase/student/InsertStudentBulk.ts";
import {StudentInsertStudentBulkAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentBulkAPIRequest.ts";

export default function StudentPageViewModel() {
    const [loading, setLoading] = useState(true)
    const [openDialog, setOpenDialog] = useState(false)
    const [openDialogBulk, setOpenDialogBulk] = useState(false)
    const [students, setStudents] = useState<Student[]>([])
    const [searchKeyword, setSearchKeyword] = useState<string>("")

    const studentAPIDataSourceImpl = useMemo(() => new StudentAPIDataSourceImpl(), [])
    const studentRepositoryImpl = useMemo(() => new StudentRepositoryImpl(studentAPIDataSourceImpl), [studentAPIDataSourceImpl])

    const getStudentByFilterUseCase = useMemo(() => new GetStudentsByFilter(studentRepositoryImpl), [studentRepositoryImpl])
    const insertStudentUseCase = useMemo(() => new InsertStudent(studentRepositoryImpl), [studentRepositoryImpl])
    const insertStudentsUseCase = useMemo(() => new InsertStudentBulk(studentRepositoryImpl), [studentRepositoryImpl])

    const getStudentsByFilter = useCallback(async (query: StudentGetByFilterAPIRequest) => {
        return await getStudentByFilterUseCase.invoke(query)
    }, [getStudentByFilterUseCase])

    const insertStudent = useCallback(async (data: StudentInsertStudentAPIRequest) => {
        return await insertStudentUseCase.invoke(data);
    }, [insertStudentUseCase])

    const insertStudents = useCallback(async (data: StudentInsertStudentBulkAPIRequest) => {
        return await insertStudentsUseCase.invoke(data);
    }, [insertStudentsUseCase])

    useEffect(() => {
        async function fetchStudents() {
            const res = await getStudentsByFilter(createStudentGetByFilterAPIRequest())
            setStudents(res)
        }

        if(loading) {
            fetchStudents().then(() => setLoading(false))
        }
    }, [loading])

    async function handleCreate(data: StudentInsertStudentAPIRequest) {
        insertStudent(data).then(() => setLoading(true));
        setOpenDialog(false)
    }

    async function handleSearch(e: React.FormEvent) {
        e.preventDefault()

        const res = await getStudentsByFilter(createStudentGetByFilterAPIRequest(searchKeyword))
        setStudents(res)
    }

    async function handleInsertBulk(data: StudentInsertStudentBulkAPIRequest) {
        insertStudents(data).then(() => setLoading(true))
        setOpenDialogBulk(false)
    }

    return {
        loading,
        openDialog,
        setOpenDialog,
        openDialogBulk,
        setOpenDialogBulk,
        students,
        searchKeyword,
        setSearchKeyword,
        handleCreate,
        handleSearch,
        handleInsertBulk,
    }
}