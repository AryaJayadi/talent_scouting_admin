import {useCallback, useEffect, useMemo, useState} from "react";
import CompanyAPIDataSourceImpl from "@/data/datasource/api/CompanyAPIDataSourceImpl.ts";
import {CompanyRepositoryImpl} from "@/data/repository/CompanyRepositoryImpl.ts";
import {GetCompanies} from "@/domain/usecase/company/GetCompanies.ts";
import {Company} from "@/domain/model/Company.ts";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";
import {InsertCompany} from "@/domain/usecase/company/InsertCompany.ts";

export default function CompanyPageViewModel() {
    const [loading, setLoading] = useState(true);
    const [openDialog, setOpenDialog] = useState(false)
    const [companies, setCompanies] = useState<Company[]>([])

    const companyAPIDataSourceImpl = useMemo(() => new CompanyAPIDataSourceImpl(), [])
    const companyRepositoryImpl = useMemo(() => new CompanyRepositoryImpl(companyAPIDataSourceImpl), [companyAPIDataSourceImpl])

    const getCompaniesUseCase = useMemo(() => new GetCompanies(companyRepositoryImpl), [companyRepositoryImpl])
    const insertCompanyUseCase = useMemo(() => new InsertCompany(companyRepositoryImpl), [companyRepositoryImpl])

    const getCompanies = useCallback(async () => {
        return await getCompaniesUseCase.invoke();
    }, [getCompaniesUseCase])

    const insertCompany = useCallback(async (data: CompanyInsertCompanyAPIRequest) => {
        return await insertCompanyUseCase.invoke(data);
    }, [insertCompanyUseCase])

    useEffect(() => {
        const fetchCompanies = async () => {
            const res = await getCompanies();
            setCompanies(res);
        };

        if(loading) {
            fetchCompanies().then(() => setLoading(false));
        }

    }, [loading]);

    const handleCreate = (data: CompanyInsertCompanyAPIRequest) => {
        insertCompany(data).then(() => setLoading(true));
        setOpenDialog(false)
    }

    return {
        loading,
        openDialog,
        setOpenDialog,
        companies,
        handleCreate,
    }
}