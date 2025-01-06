import {
    createStudentInsertStudentBulkAPIRequest,
    StudentInsertStudentBulkAPIRequest
} from "@/data/datasource/api/request/StudentInsertStudentBulkAPIRequest.ts";
import {useState} from "react";

interface Props {
    onSubmit: (data: StudentInsertStudentBulkAPIRequest) => Promise<void>;
}

export default function StudentBulkFormViewModel(p: Props) {
    const [formData, setFormData] = useState<StudentInsertStudentBulkAPIRequest>(createStudentInsertStudentBulkAPIRequest())

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        p.onSubmit(formData)
    }

    return {
        formData,
        setFormData,
        handleSubmit
    }
}