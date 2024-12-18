import useViewModel from "./CompanyFormViewModel.ts"
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Company} from "@/domain/model/Company.ts";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";
import {FC} from "react";

interface Props {
    company: Company,
    onSubmit: (data: CompanyInsertCompanyAPIRequest | Company) => void
}

export const CompanyForm: FC<Props> = (p) => {
    const {
        formData,
        setFormData,
        handleSubmit,
    } = useViewModel(p.company, p.onSubmit)

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Company Name</Label>
                <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="industry">Industry</Label>
                <Input
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="employees">Number of Employees</Label>
                <Input
                    id="employees"
                    type="number"
                    value={formData.employees}
                    onChange={(e) => setFormData({...formData, employees: parseInt(e.target.value)})}
                    required
                />
            </div>
            <Button type="submit">{company ? 'Update' : 'Create'} Company</Button>
        </form>
    )
}