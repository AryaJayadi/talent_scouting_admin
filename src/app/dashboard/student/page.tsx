import { useState } from 'react'
import { Search, Plus, FileEdit, Trash } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Mock data for students
const mockStudents = [
  { id: 1, name: 'John Doe', major: 'Computer Science', gpa: 3.8 },
  { id: 2, name: 'Jane Smith', major: 'Biology', gpa: 3.9 },
  { id: 3, name: 'Bob Johnson', major: 'Mathematics', gpa: 3.7 },
  { id: 4, name: 'Alice Brown', major: 'Physics', gpa: 4.0 },
  { id: 5, name: 'Charlie Davis', major: 'Chemistry', gpa: 3.6 },
]

export default function StudentPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [students, setStudents] = useState(mockStudents)
  const [editingStudent, setEditingStudent] = useState<typeof mockStudents[0] | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filteredStudents = mockStudents.filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.major.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setStudents(filteredStudents)
  }

  const handleCreate = (newStudent: typeof mockStudents[0]) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }])
  }

  const handleEdit = (updatedStudent: typeof mockStudents[0]) => {
    setStudents(students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    ))
    setEditingStudent(null)
  }

  const handleDelete = (id: number) => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Management</h1>
      <form onSubmit={handleSearch} className="flex gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Student
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Student</DialogTitle>
            </DialogHeader>
            <StudentForm onSubmit={handleCreate} />
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
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.major}</TableCell>
              <TableCell>{student.gpa}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mr-2">
                      <FileEdit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Student</DialogTitle>
                    </DialogHeader>
                    <StudentForm student={student} onSubmit={handleEdit} />
                  </DialogContent>
                </Dialog>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(student.id)}>
                  <Trash className="mr-2 h-4 w-4" /> Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function StudentForm({ student, onSubmit }: { student?: typeof mockStudents[0], onSubmit: (student: typeof mockStudents[0]) => void }) {
  const [formData, setFormData] = useState(student || { name: '', major: '', gpa: 0 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Student Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="major">Major</Label>
        <Input
          id="major"
          value={formData.major}
          onChange={(e) => setFormData({ ...formData, major: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, gpa: parseFloat(e.target.value) })}
          required
        />
      </div>
      <Button type="submit">{student ? 'Update' : 'Create'} Student</Button>
    </form>
  )
}

