import useViewModel from "./CompanyPageViewModel.ts"
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Eye, FileEdit, Plus, Search, Trash, Upload } from "lucide-react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {CompanyForm} from "@/presentation/company/CompanyForm.tsx";
import {Link} from "react-router-dom";
import {CompanyBulkForm} from "@/presentation/company/CompanyBulkForm.tsx";

export const CompanyPage = () => {
    const {
        openDialog,
        setOpenDialog,
        openDialogBulk,
        setOpenDialogBulk,
        companies,
        handleCreate,
        handleDelete,
        handleEdit,
        handleBulkInsert,
    } = useViewModel()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Company Management</h1>
            <form className="flex gap-4 mb-6">
            {/*<form onSubmit={handleSearch} className="flex gap-4 mb-6">*/}
                <Input
                    type="text"
                    placeholder="Search companies..."
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
                {/*<Input*/}
                {/*    type="text"*/}
                {/*    placeholder="Search companies..."*/}
                {/*    value={searchTerm}*/}
                {/*    onChange={(e) => setSearchTerm(e.target.value)}*/}
                {/*    className="max-w-sm"*/}
                {/*/>*/}
                <Button type="submit">
                    <Search className="mr-2 h-4 w-4"/> Search
                </Button>
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4"/> Create Company
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Company</DialogTitle>
                        </DialogHeader>
                        <CompanyForm onSubmit={handleCreate}/>
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
                        <CompanyBulkForm onSubmit={handleBulkInsert}/>
                    </DialogContent>
                </Dialog>
            </form>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.map((company) => {
                        console.log(company)
                        return (
                            <TableRow key={company.id}>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.location}</TableCell>
                                <TableCell>{company.description}</TableCell>
                                <TableCell>
                                    <div className='flex space-x-2'>
                                        <Button variant="outline" size="sm" asChild>
                                            <Link to={`/dashboard/company/${company.id}`}>
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
                                                    <DialogTitle>Edit Company</DialogTitle>
                                                </DialogHeader>
                                                <CompanyForm company={company} onSubmit={handleEdit}/>
                                                {/*<CompanyForm company={company} onSubmit={handleEdit}/>*/}
                                            </DialogContent>
                                        </Dialog>
                                        <Button variant="destructive" size="sm" onClick={() => handleDelete(company.id)}>
                                            <Trash className="mr-2 h-4 w-4"/> Delete
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}