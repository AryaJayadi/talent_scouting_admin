import {useState} from "react";
import {Company} from "@/domain/model/Company.ts";
import {
    CompanyInsertCompanyAPIRequest,
    createCompanyInsertCompanyAPIRequest
} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";

interface Props {
    company?: Company,
    onSubmit: (data: CompanyInsertCompanyAPIRequest) => void
}

export default function CompanyFormViewModel(p: Props) {
    const [formData, setFormData] = useState<CompanyInsertCompanyAPIRequest>(createCompanyInsertCompanyAPIRequest('', '', '', '', '', ''))

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