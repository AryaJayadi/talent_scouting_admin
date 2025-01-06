import {useState} from "react";
import {
    CompanyInsertCompanyBulkAPIRequest,
    createCompanyInsertCompanyBulkAPIRequest
} from "@/data/datasource/api/request/CompanyInsertCompanyBulkAPIRequest.ts";

interface Props {
    onSubmit: (data: CompanyInsertCompanyBulkAPIRequest) => void
}

export default function CompanyBulkFormViewModel(p: Props) {
    const [formData, setFormData] = useState<CompanyInsertCompanyBulkAPIRequest>(createCompanyInsertCompanyBulkAPIRequest())

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