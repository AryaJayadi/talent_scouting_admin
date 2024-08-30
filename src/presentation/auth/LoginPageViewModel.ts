import {useCallback, useMemo, useRef} from "react";
import AdminAPIDataSourceImpl from "@/data/datasource/api/AdminAPIDataSourceImpl.ts";
import {AdminRepositoryImpl} from "@/data/repository/AdminRepositoryImpl.ts";
import {LoginAdmin} from "@/domain/usecase/admin/LoginAdmin.ts";
import {createAdminLoginAdminAPIRequest} from "@/data/datasource/api/request/AdminLoginAdminAPIRequest.ts";
import {useToast} from "@/components/ui/use-toast.ts";

export default function HomePageViewModel() {
    const { toast } = useToast()

    const nameRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const adminAPIDataSourceImpl = useMemo(() => new AdminAPIDataSourceImpl(), []);
    const adminRepositoryImpl = useMemo(() => new AdminRepositoryImpl(adminAPIDataSourceImpl), [adminAPIDataSourceImpl]);

    const loginAdminUseCase = useMemo(() => new LoginAdmin(adminRepositoryImpl), [adminRepositoryImpl]);

    const loginAdmin = useCallback(async (name: string, password: string) => {
        const data = createAdminLoginAdminAPIRequest(name, password)
        return await loginAdminUseCase.invoke(data);
    }, [loginAdminUseCase]);

    async function handleSubmit() {
        if(!nameRef.current || !passRef.current) {
            toast({
                title: "Login failed!",
                description: `Failed to bind refs!`,
            });
            return;
        }
        if(nameRef.current['value'] == "" || passRef.current['value'] == "") {
            toast({
                title: "Login failed!",
                description: `Please make sure to fill all fields!`,
            });
            return;
        }
        const name: string = nameRef.current['value'];
        const pass: string = passRef.current['value'];

        const admin = await loginAdmin(name, pass);
        console.log(admin);
        toast({
            title: "Login success!",
            description: `Welcome, ${admin.name}!`,
        });

        nameRef.current['value'] = null;
        passRef.current['value'] = null;
    }

    return {
        nameRef,
        passRef,
        handleSubmit
    }
}