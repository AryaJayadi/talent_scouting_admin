import {useCallback, useMemo, useRef} from "react";
import AdminAPIDataSourceImpl from "@/data/datasource/api/AdminAPIDataSourceImpl.ts";
import {AdminRepositoryImpl} from "@/data/repository/AdminRepositoryImpl.ts";
import {LoginAdmin} from "@/domain/usecase/admin/LoginAdmin.ts";
import {createAdminLoginAdminAPIRequest} from "@/data/datasource/api/request/AdminLoginAdminAPIRequest.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {useLocalStorage} from "usehooks-ts";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

export default function HomePageViewModel() {
    const [value, setValue, removeValue] = useLocalStorage('token', '')
    const navigate = useNavigate()
    const location = useLocation()
    const {toast} = useToast()

    const from = location.state?.from || "/"

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const adminAPIDataSourceImpl = useMemo(() => new AdminAPIDataSourceImpl(), []);
    const adminRepositoryImpl = useMemo(() => new AdminRepositoryImpl(adminAPIDataSourceImpl), [adminAPIDataSourceImpl]);

    const loginAdminUseCase = useMemo(() => new LoginAdmin(adminRepositoryImpl), [adminRepositoryImpl]);

    const loginAdmin = useCallback(async (email: string, password: string) => {
        const data = createAdminLoginAdminAPIRequest(email, password)
        return await loginAdminUseCase.invoke(data);
    }, [loginAdminUseCase]);

    async function handleSubmit() {
        if (!emailRef.current || !passRef.current) {
            toast({
                title: "Login failed!",
                description: `Failed to bind refs!`,
            });
            return;
        }
        if (emailRef.current['value'] == "" || passRef.current['value'] == "") {
            toast({
                title: "Login failed!",
                description: `Please make sure to fill all fields!`,
            });
            return;
        }
        const email: string = emailRef.current['value'];
        const pass: string = passRef.current['value'];

        const res = await loginAdmin(email, pass);
        console.log(res);

        toast({
            title: "Login success!",
            description: `Welcome, ${res.email}!`,
        });

        emailRef.current['value'] = "";
        passRef.current['value'] = "";

        setValue(res.token)

        navigate(from, {replace: true})
    }

    return {
        emailRef,
        passRef,
        handleSubmit
    }
}