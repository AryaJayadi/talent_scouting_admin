import useViewModel from "./StudentFormViewModel.ts"
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FC} from "react";
import {StudentInsertStudentAPIRequest} from "@/data/datasource/api/request/StudentInsertStudentAPIRequest.ts";

interface Props {
    onSubmit: (data: StudentInsertStudentAPIRequest) => void;
}

export const StudentForm: FC<Props> = (p) => {
    const {
        formData,
        setFormData,
        handleSubmit
    } = useViewModel(p)

    return (
        <form onSubmit={handleSubmit} className="space-y-0">
            <div>
                <Label htmlFor="Nim">Student Nim</Label>
                <Input
                    id="Nim"
                    value={formData.Nim}
                    onChange={(e) => setFormData({...formData, Nim: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Name">Student Name</Label>
                <Input
                    id="Name"
                    value={formData.Name}
                    onChange={(e) => setFormData({...formData, Name: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Phone">Student Phone</Label>
                <Input
                    id="Phone"
                    value={formData.Phone}
                    onChange={(e) => setFormData({...formData, Phone: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Major">Major</Label>
                <Input
                    id="Major"
                    value={formData.Major}
                    onChange={(e) => setFormData({...formData, Major: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Gpa">GPA</Label>
                <Input
                    id="Gpa"
                    type="number"
                    step="0.1"
                    min="0"
                    max="4"
                    value={formData.Gpa}
                    onChange={(e) => setFormData({...formData, Gpa: parseFloat(e.target.value)})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Address">Student Address</Label>
                <Input
                    id="Address"
                    value={formData.Address}
                    onChange={(e) => setFormData({...formData, Address: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="City">Student City</Label>
                <Input
                    id="City"
                    value={formData.City}
                    onChange={(e) => setFormData({...formData, City: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="State">Student State</Label>
                <Input
                    id="State"
                    value={formData.State}
                    onChange={(e) => setFormData({...formData, State: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="PictureUrl">Student PictureUrl</Label>
                <Input
                    id="PictureUrl"
                    value={formData.PictureUrl}
                    onChange={(e) => setFormData({...formData, PictureUrl: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Description">Student Description</Label>
                <Input
                    id="Description"
                    value={formData.Description}
                    onChange={(e) => setFormData({...formData, Description: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="PersonalUrl">Student PersonalUrl</Label>
                <Input
                    id="PersonalUrl"
                    value={formData.PersonalUrl}
                    onChange={(e) => setFormData({...formData, PersonalUrl: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Email">Student Email</Label>
                <Input
                    id="Email"
                    value={formData.Email}
                    onChange={(e) => setFormData({...formData, Email: e.target.value})}
                    required
                />
            </div>
            <div>
                <Label htmlFor="Password">Student Password</Label>
                <Input
                    id="Password"
                    value={formData.Password}
                    onChange={(e) => setFormData({...formData, Password: e.target.value})}
                    required
                />
            </div>
            <Button type="submit">Create Student</Button>
        </form>
    )
}