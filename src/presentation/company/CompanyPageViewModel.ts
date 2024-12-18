import {useState} from "react";

// Mock data for companies
const mockCompanies = [
    { id: 1, name: 'Acme Corp', industry: 'Technology', employees: 500 },
    { id: 2, name: 'Globex Corporation', industry: 'Manufacturing', employees: 1000 },
    { id: 3, name: 'Soylent Corp', industry: 'Food', employees: 750 },
    { id: 4, name: 'Initech', industry: 'Technology', employees: 250 },
    { id: 5, name: 'Umbrella Corporation', industry: 'Pharmaceuticals', employees: 3000 },
]

export default function CompanyPageViewModel() {
    const [searchTerm, setSearchTerm] = useState('')
    const [companies, setCompanies] = useState(mockCompanies)
    const [editingCompany, setEditingCompany] = useState<typeof mockCompanies[0] | null>(null)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const filteredCompanies = mockCompanies.filter(company =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.industry.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setCompanies(filteredCompanies)
    }

    const handleCreate = (newCompany: typeof mockCompanies[0]) => {
        setCompanies([...companies, { ...newCompany, id: companies.length + 1 }])
    }

    const handleEdit = (updatedCompany: typeof mockCompanies[0]) => {
        setCompanies(companies.map(company =>
            company.id === updatedCompany.id ? updatedCompany : company
        ))
        setEditingCompany(null)
    }

    const handleDelete = (id: number) => {
        setCompanies(companies.filter(company => company.id !== id))
    }

    return {
        searchTerm,
        setSearchTerm,
        companies,
        handleSearch,
        handleCreate,
        handleEdit,
        handleDelete,
    }
}