import {useCallback, useEffect, useMemo, useState} from "react";
import CompanyAPIDataSourceImpl from "@/data/datasource/api/CompanyAPIDataSourceImpl.ts";
import {CompanyRepositoryImpl} from "@/data/repository/CompanyRepositoryImpl.ts";
import {GetCompanies} from "@/domain/usecase/company/GetCompanies.ts";
import {Company} from "@/domain/model/Company.ts";
import {CompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";
import {InsertCompany} from "@/domain/usecase/company/InsertCompany.ts";
import {DeleteCompany} from "@/domain/usecase/company/DeleteCompany.ts";
import {InsertCompanyBulk} from "@/domain/usecase/company/InsertCompanyBulk.ts";
import {CompanyInsertCompanyBulkAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyBulkAPIRequest.ts";

export default function CompanyPageViewModel() {
    const [loading, setLoading] = useState(true);
    const [openDialog, setOpenDialog] = useState(false)
    const [openDialogBulk, setOpenDialogBulk] = useState(false)
    const [companies, setCompanies] = useState<Company[]>([])

    const companyAPIDataSourceImpl = useMemo(() => new CompanyAPIDataSourceImpl(), [])
    const companyRepositoryImpl = useMemo(() => new CompanyRepositoryImpl(companyAPIDataSourceImpl), [companyAPIDataSourceImpl])

    const getCompaniesUseCase = useMemo(() => new GetCompanies(companyRepositoryImpl), [companyRepositoryImpl])
    const insertCompanyUseCase = useMemo(() => new InsertCompany(companyRepositoryImpl), [companyRepositoryImpl])
    const deleteCompanyUseCase = useMemo(() => new DeleteCompany(companyRepositoryImpl), [companyRepositoryImpl])
    const insertCompanyBulkUseCase = useMemo(() => new InsertCompanyBulk(companyRepositoryImpl), [companyRepositoryImpl])

    const getCompanies = useCallback(async () => {
        return await getCompaniesUseCase.invoke();
    }, [getCompaniesUseCase])

    const insertCompany = useCallback(async (data: CompanyInsertCompanyAPIRequest) => {
        return await insertCompanyUseCase.invoke(data);
    }, [insertCompanyUseCase])

    const deleteCompany = useCallback(async (id: string) => {
        return await deleteCompanyUseCase.invoke(id)
    }, [deleteCompanyUseCase])

    const insertCompanies  = useCallback(async (data: CompanyInsertCompanyBulkAPIRequest) => {
        return await insertCompanyBulkUseCase.invoke(data)
    }, [insertCompanyBulkUseCase])

    useEffect(() => {
        const fetchCompanies = async () => {
            const res = await getCompanies();
            setCompanies(res);
        };

        if(loading) {
            fetchCompanies().then(() => setLoading(false));
        }

    }, [loading]);

    function handleCreate(data: CompanyInsertCompanyAPIRequest) {
        insertCompany(data).then(() => setLoading(true));
        setOpenDialog(false)
    }

    function handleDelete(id: string) {
        deleteCompany(id).then(() => setLoading(true));
    }

    function handleEdit(data: CompanyInsertCompanyAPIRequest) {
        console.log(data);
    }

    function handleBulkInsert(data: CompanyInsertCompanyBulkAPIRequest) {
        insertCompanies(data).then(() => setLoading(true));
        setOpenDialogBulk(false)
    }

    return {
        loading,
        openDialog,
        setOpenDialog,
        openDialogBulk,
        setOpenDialogBulk,
        companies,
        handleCreate,
        handleDelete,
        handleEdit,
        handleBulkInsert,
    }
}