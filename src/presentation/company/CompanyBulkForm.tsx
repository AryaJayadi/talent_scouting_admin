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
        setFormData,
        handleSubmit,
    } = useViewModel(p)

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Label htmlFor="companyFile">Upload CSV File</Label>
            <Input
                id="companyFile"
                type="file"
                accept=".csv, .xlsx"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        console.log("Selected file:", file);
                        setFormData((prevFormData) => {
                            const updatedFormData = { ...prevFormData, companyFile: file };
                            console.log("Updated formData:", updatedFormData); // Log updated state
                            return updatedFormData;
                        });
                    } else {
                        console.warn("No file selected");
                        setFormData((prevFormData) => ({ ...prevFormData, companyFile: null }));
                    }
                }}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}