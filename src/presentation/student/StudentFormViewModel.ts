import {useState} from "react";
import {
    createStudentInsertStudentAPIRequest,
    StudentInsertStudentAPIRequest
} from "@/data/datasource/api/request/StudentInsertStudentAPIRequest.ts";

interface  Props {
    onSubmit: (data: StudentInsertStudentAPIRequest) => Promise<void>;
}

export default function StudentFormViewModel(p: Props) {
    const [formData, setFormData] = useState<StudentInsertStudentAPIRequest>(createStudentInsertStudentAPIRequest())

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        p.onSubmit(formData)
    }

    return {
        formData,
        setFormData,
        handleSubmit,
    }
}