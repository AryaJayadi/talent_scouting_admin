import {
    createBrowserRouter, Navigate,
    RouterProvider, useLocation,
} from "react-router-dom";
import {Root} from "@/presentation/template/Root.tsx";
import {LoginPage} from "@/presentation/auth/LoginPage.tsx";
import {AuthLayout} from "@/presentation/template/AuthLayout.tsx";
import {CompanyPage} from "@/presentation/company/CompanyPage.tsx";
import {Outlet} from "react-router";
import {FC} from "react";
import {useLocalStorage} from "usehooks-ts";
import {StudentPage} from "@/presentation/student/StudentPage.tsx";
import {DashboardLayout} from "@/presentation/template/DashboardLayout.tsx";

function isAuthenticated(token: string): boolean {
    if (!token) {
        return false
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));

        const expirationTime = payload.exp;

        if (!expirationTime) {
            return true;
        }

        const currentTime = Math.floor(Date.now() / 1000);

        return currentTime < expirationTime;

    } catch (error) {
        console.error("Error decoding token:", error);
        return false;
    }
}

interface ProtectedRouteProps {
    isAuthenticated: (token: string) => boolean;
    redirectPath: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = (p) => {
    const [value, , ] = useLocalStorage('token', '')
    // const [value, setValue, removeValue] = useLocalStorage('token', '')
    const location = useLocation()

    if (!p.isAuthenticated(value)) {
        return <Navigate to={p.redirectPath} state={{from: location}}/>
    }

    return <Outlet/>
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <ProtectedRoute isAuthenticated={isAuthenticated} redirectPath={"/auth/login"}/>,
                children: [
                    {
                        path: "",
                        element: <DashboardLayout/>,
                        children: [
                            {
                                path: "company",
                                element: <CompanyPage/>
                            },
                            {
                                path: "student",
                                element: <StudentPage/>
                            },
                        ]
                    },
                ]
            },
            {
                path: "auth",
                element: <AuthLayout/>,
                children: [
                    {
                        path: "login",
                        element: <LoginPage/>
                    }
                ]
            }
        ]
    }
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};