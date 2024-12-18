import {useEffect, useState} from "react";
import {Student} from "@/domain/model/Student.ts";

export default function StudentPageViewModel() {
    const [loading, setLoading] = useState(true)
    const [student, setStudent] = useState<Student[]>([])

    useEffect(() => {

    }, [])

    function handleCreate() {
        
    }

    return {
        loading,
        student,
        handleCreate,
    }
}