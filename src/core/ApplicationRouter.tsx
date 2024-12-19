import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import {Root} from "@/presentation/template/Root.tsx";
import {LoginPage} from "@/presentation/auth/LoginPage.tsx";
import {AuthLayout} from "@/presentation/template/AuthLayout.tsx";
import StudentPage from "@/app/dashboard/student/page.tsx";
import {DashboardLayout} from "@/app/dashboard/layout.tsx";
import {CompanyPage} from "@/presentation/company/CompanyPage.tsx";
import {Outlet} from "react-router";
import {FC} from "react";

function isAuthencticated() : boolean {
    return true;
}

interface ProtectedRouteProps {
    isAuthenticated: () => boolean;
    redirectPath: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = (p) => {
    if(!p.isAuthenticated()) {
        return <Navigate to={p.redirectPath} replace/>
    }

    return <Outlet />
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <ProtectedRoute isAuthenticated={isAuthencticated} redirectPath={"/auth/login"} />,
                children: [
                    {
                        path: "",
                        element: <DashboardLayout />,
                        children:[
                            {
                                path: "company",
                                element: <CompanyPage />
                            },
                            {
                                path: "student",
                                element: <StudentPage />
                            },
                        ]
                    },
                ]
            },
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />
                    }
                ]
            }
        ]
    }
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};