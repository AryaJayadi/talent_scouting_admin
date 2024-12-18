import {useState} from "react";
import {Company} from "@/domain/model/Company.ts";

export default function CompanyFormViewModel(company: Company, onSubmit: (data: Company) => void) {
    const [formData, setFormData] = useState(company || { name: '', industry: '', employees: 0 })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return {
        formData,
        setFormData,
        handleSubmit
    }
}