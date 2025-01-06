import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";

export const CompanyBulkForm = () => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="bulk-file">Upload CSV File</Label>
            <Input
                id="bulk-file"
                type="file"
                accept=".csv"
                ref={fileInputRef}
                onChange={handleBulkInsert}
            />
        </div>
    )
}