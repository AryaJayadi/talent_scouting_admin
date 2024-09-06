import {useCallback, useMemo, useRef} from "react";
import CompanyAPIDataSourceImpl from "@/data/datasource/api/CompanyAPIDataSourceImpl.ts";
import {CompanyRepositoryImpl} from "@/data/repository/CompanyRepositoryImpl.ts";
import {InsertCompany} from "@/domain/usecase/company/InsertCompany.ts";
import {createCompanyInsertCompanyAPIRequest} from "@/data/datasource/api/request/CompanyInsertCompanyAPIRequest.ts";
import {useToast} from "@/components/ui/use-toast.ts";

export default function InsertCompanyPageViewModel() {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLTextAreaElement | null>(null);
    const picRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);
    const salaryRangeRef = useRef<HTMLInputElement | null>(null);
    const locRef = useRef<HTMLInputElement | null>(null);

    const {toast} = useToast()

    const companyDataSourceImpl = useMemo(() => new CompanyAPIDataSourceImpl(), [])
    const companyRepositoryImpl = useMemo(() => new CompanyRepositoryImpl(companyDataSourceImpl), [companyDataSourceImpl])

    const insertCompanyUseCase = useMemo(() => new InsertCompany(companyRepositoryImpl), [companyRepositoryImpl])

    const insertCompany = useCallback(async (name: string, desc: string, pic: string, email: string, pass: string, salaryRange: string, location: string) => {
        const data = createCompanyInsertCompanyAPIRequest(name, desc, pic, email, pass, salaryRange, location);
        return await insertCompanyUseCase.invoke(data);
    }, [insertCompanyUseCase])

    async function handleSubmit() {
        if(!nameRef.current || !descRef.current || !picRef.current || !emailRef.current || !passRef.current || !salaryRangeRef.current || !locRef.current) return;

        const name = nameRef.current['value'];
        const desc = descRef.current['value'];
        const pic = picRef.current['value'];
        const email = emailRef.current['value'];
        const pass = passRef.current['value'];
        const salaryRange = salaryRangeRef.current['value'];
        const location = locRef.current['value'];

        await insertCompany(name, desc, pic, email, pass, salaryRange, location);
        toast({
            title: "Success insert company!",
            description: `insert company: ${name}`,
        })

        nameRef.current['value'] = null;
        descRef.current['value'] = null;
        picRef.current['value'] = null;
        emailRef.current['value'] = null;
        passRef.current['value'] = null;
        salaryRangeRef.current['value'] = null;
        locRef.current['value'] = null;
    }

    return {
        nameRef,
        descRef,
        picRef,
        emailRef,
        passRef,
        salaryRangeRef,
        locRef,
        handleSubmit,
    }
}