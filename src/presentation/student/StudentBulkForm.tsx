import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {StudentInsertStudentBulkAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentBulkAPIRequest.ts";
import {FC} from "react";
import useViewModel from "./StudentBulkFormViewModel.ts"
import {Button} from "@/components/ui/button.tsx";

interface Props {
    onSubmit: (data: StudentInsertStudentBulkAPIRequest) => Promise<void>;
}

export const StudentBulkForm : FC<Props> = (p) => {
    const {
        setFormData,
        handleSubmit,
    } = useViewModel(p)

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Label htmlFor="studentFile">Upload CSV File</Label>
            <Input
                id="studentFile"
                type="file"
                accept=".csv, .xlsx"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        console.log("Selected file:", file);
                        setFormData((prevFormData) => {
                            const updatedFormData = {...prevFormData, studentFile: file};
                            console.log("Updated formData:", updatedFormData); // Log updated state
                            return updatedFormData;
                        });
                    } else {
                        console.warn("No file selected");
                        setFormData((prevFormData) => ({...prevFormData, studentFile: null}));
                    }
                }}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}