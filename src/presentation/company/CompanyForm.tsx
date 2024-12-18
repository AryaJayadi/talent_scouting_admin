import useViewModel from "./CompanyFormViewModel.ts"
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Company} from "@/domain/model/Company.ts";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";
import {FC} from "react";

interface Props {
    company: Company,
    onSubmit: (data: CompanyInsertCompanyAPIRequest) => void
}

export const CompanyForm: FC<Props> = (p) => {
    const {
        formData,
        setFormData,
        handleSubmit,
    } = useViewModel(p)

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="Name">Company Name</Label>
                <Input
                    id="Name"
                    value={formData.Name}
                    onChange={(e) => setFormData({...formData, Name: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Email">Company Email</Label>
                <Input
                    id="Email"
                    value={formData.Email}
                    onChange={(e) => setFormData({...formData, Email: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="LogoUrl">Company LogoUrl</Label>
                <Input
                    id="LogoUrl"
                    value={formData.LogoUrl}
                    onChange={(e) => setFormData({...formData, LogoUrl: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Description">Company Description</Label>
                <Input
                    id="Description"
                    value={formData.Description}
                    onChange={(e) => setFormData({...formData, Description: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Location">Company Location</Label>
                <Input
                    id="Location"
                    value={formData.Location}
                    onChange={(e) => setFormData({...formData, Location: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Password">Company Password</Label>
                <Input
                    id="Password"
                    value={formData.Password}
                    onChange={(e) => setFormData({...formData, Password: e.target.value})}
                    required
                />
            </div>
            <Button type="submit">Create Company</Button>
        </form>
    )
}