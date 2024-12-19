import useViewModel from "./StudentFormViewModel.ts"
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FC} from "react";

interface Props {
    onSubmit: () => void;
}

export const StudentForm: FC<Props> = (p) => {
    const {
        handleSubmit
    } = useViewModel(p)

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Student Name</Label>
                <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="major">Major</Label>
                <Input
                    id="major"
                    value={formData.major}
                    onChange={(e) => setFormData({...formData, major: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="gpa">GPA</Label>
                <Input
                    id="gpa"
                    type="number"
                    step="0.1"
                    min="0"
                    max="4"
                    value={formData.gpa}
                    onChange={(e) => setFormData({...formData, gpa: parseFloat(e.target.value)})}
                    required
                />
            </div>
            <Button type="submit">{student ? 'Update' : 'Create'} Student</Button>
        </form>
    )
}