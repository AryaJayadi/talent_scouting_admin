import useViewModel from "./StudentPageViewModel.ts"
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Eye, FileEdit, Plus, Search, Trash, Upload } from "lucide-react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {StudentForm} from "@/presentation/student/StudentForm.tsx";
import {Link} from "react-router-dom";
import {StudentBulkForm} from "@/presentation/student/StudentBulkForm.tsx";

export const StudentPage = () => {
    const {
        openDialog,
        setOpenDialog,
        openDialogBulk,
        setOpenDialogBulk,
        students,
        searchKeyword,
        setSearchKeyword,
        handleCreate,
        handleSearch,
        handleInsertBulk,
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
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
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
                <Dialog open={openDialogBulk} onOpenChange={setOpenDialogBulk}>
                    <DialogTrigger asChild>
                        <Button variant="secondary">
                            <Upload className="mr-2 h-4 w-4" /> Insert Bulk
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Bulk Insert Companies</DialogTitle>
                        </DialogHeader>
                        <StudentBulkForm onSubmit={handleInsertBulk}/>
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
                                <div className='flex space-x-2'>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link to={`/dashboard/company/${s.id}`}>
                                            <Eye className="mr-2 h-4 w-4" /> Detail
                                        </Link>
                                    </Button>
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
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}