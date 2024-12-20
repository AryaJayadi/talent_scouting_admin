import useViewModel from "./StudentPageViewModel.ts"
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FileEdit, Plus, Search, Trash} from "lucide-react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {StudentForm} from "@/presentation/student/StudentForm.tsx";

export const StudentPage = () => {
    const {
        loading,
        students,
        searchKeyword,
        setSearchKeyword,
        handleCreate,
        handleSearch,
    } = useViewModel()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Student Management</h1>
            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
                <Input
                    type="text"
                    placeholder="Search students..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="max-w-sm"
                />
                <Button type="submit">
                    <Search className="mr-2 h-4 w-4"/> Search
                </Button>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4"/> Create Student
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Student</DialogTitle>
                        </DialogHeader>
                        <StudentForm onSubmit={handleCreate}/>
                    </DialogContent>
                </Dialog>
            </form>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Major</TableHead>
                        <TableHead>GPA</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map((s) => (
                        <TableRow key={s.id}>
                            <TableCell>{s.name}</TableCell>
                            <TableCell>{s.major}</TableCell>
                            <TableCell>{s.gpa}</TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" className="mr-2">
                                            <FileEdit className="mr-2 h-4 w-4"/> Edit
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit Student</DialogTitle>
                                        </DialogHeader>
                                        {/*<StudentForm student={s} onSubmit={handleEdit}/>*/}
                                        <StudentForm onSubmit={handleCreate}/>
                                    </DialogContent>
                                </Dialog>
                                {/*<Button variant="destructive" size="sm" onClick={() => handleDelete(s.id)}>*/}
                                <Button variant="destructive" size="sm">
                                    <Trash className="mr-2 h-4 w-4"/> Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}