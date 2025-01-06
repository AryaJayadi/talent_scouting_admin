import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import useViewModel from "./CompanyBulkFormViewModel.ts"
import {CompanyInsertCompanyBulkAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyBulkAPIRequest.ts";
import {FC} from "react";
import {Button} from "@/components/ui/button.tsx";

interface Props {
    onSubmit: (data: CompanyInsertCompanyBulkAPIRequest) => void
}

export const CompanyBulkForm: FC<Props> = (p) => {
    const {
        formData,
        setFormData,
        handleSubmit,
    } = useViewModel(p)

    return (
        // <div className="grid w-full max-w-sm items-center gap-1.5">
        //
        // </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <Label htmlFor="companyFile">Upload CSV File</Label>
            <Input
                id="companyFile"
                type="file"
                accept=".csv"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        setFormData({...formData, companyFile: file});
                    } else {
                        console.warn("No file selected");
                        setFormData({...formData, companyFile: null});
                    }
                }}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}