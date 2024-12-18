import {useState} from "react";

export default function CompanyFormViewModel() {
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