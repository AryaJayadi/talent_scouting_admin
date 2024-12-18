import {useCallback, useEffect, useMemo, useState} from "react";
import CompanyAPIDataSourceImpl from "@/data/datasource/api/CompanyAPIDataSourceImpl.ts";
import {CompanyRepositoryImpl} from "@/data/repository/CompanyRepositoryImpl.ts";
import {GetCompanies} from "@/domain/usecase/company/GetCompanies.ts";
import {Company} from "@/domain/model/Company.ts";

// Mock data for companies
const mockCompanies = [
    { id: 1, name: 'Acme Corp', industry: 'Technology', employees: 500 },
    { id: 2, name: 'Globex Corporation', industry: 'Manufacturing', employees: 1000 },
    { id: 3, name: 'Soylent Corp', industry: 'Food', employees: 750 },
    { id: 4, name: 'Initech', industry: 'Technology', employees: 250 },
    { id: 5, name: 'Umbrella Corporation', industry: 'Pharmaceuticals', employees: 3000 },
]

export default function CompanyPageViewModel() {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('')
    const [companies, setCompanies] = useState<Company[]>([])
    const [editingCompany, setEditingCompany] = useState<typeof mockCompanies[0] | null>(null)

    const companyAPIDataSourceImpl = useMemo(() => new CompanyAPIDataSourceImpl(), [])
    const companyRepositoryImpl = useMemo(() => new CompanyRepositoryImpl(companyAPIDataSourceImpl), [companyAPIDataSourceImpl])

    const getCompaniesUseCase = useMemo(() => new GetCompanies(companyRepositoryImpl), [companyRepositoryImpl])

    const getCompanies = useCallback(async () => {
        return await getCompaniesUseCase.invoke();
    }, [getCompaniesUseCase])

    useEffect(() => {
        const fetchCompanies = async () => {
            const res = await getCompanies();
            setCompanies(res);
        };
        setLoading(true)
        fetchCompanies().then(() => setLoading(false));
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // const filteredCompanies = mockCompanies.filter(company =>
        //     company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     company.industry.toLowerCase().includes(searchTerm.toLowerCase())
        // )
        // setCompanies(filteredCompanies)
    }

    const handleCreate = (newCompany: typeof mockCompanies[0]) => {
        // setCompanies([...companies, { ...newCompany, id: companies.length + 1 }])
    }

    const handleEdit = (updatedCompany: typeof mockCompanies[0]) => {
        // setCompanies(companies.map(company =>
        //     company.id === updatedCompany.id ? updatedCompany : company
        // ))
        // setEditingCompany(null)
    }

    const handleDelete = (id: number) => {
        // setCompanies(companies.filter(company => company.id !== id))
    }

    return {
        loading,
        searchTerm,
        setSearchTerm,
        companies,
        handleSearch,
        handleCreate,
        handleEdit,
        handleDelete,
    }
}