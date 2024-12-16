import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for companies
const mockCompanies = [
  { id: 1, name: 'Acme Corp', industry: 'Technology', employees: 500 },
  { id: 2, name: 'Globex Corporation', industry: 'Manufacturing', employees: 1000 },
  { id: 3, name: 'Soylent Corp', industry: 'Food', employees: 750 },
  { id: 4, name: 'Initech', industry: 'Technology', employees: 250 },
  { id: 5, name: 'Umbrella Corporation', industry: 'Pharmaceuticals', employees: 3000 },
]

export default function CompanySearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [companies, setCompanies] = useState(mockCompanies)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filteredCompanies = mockCompanies.filter(company => 
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setCompanies(filteredCompanies)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Company Search</h1>
      <form onSubmit={handleSearch} className="flex gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Employees</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.industry}</TableCell>
              <TableCell>{company.employees}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

