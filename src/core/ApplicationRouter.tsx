import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Root} from "@/presentation/template/Root.tsx";
import {LoginPage} from "@/presentation/auth/LoginPage.tsx";
import {AuthLayout} from "@/presentation/template/AuthLayout.tsx";
import {HomePage} from "@/presentation/home/HomePage.tsx";
import {InsertCompanyPage} from "@/presentation/company/InsertCompanyPage.tsx";
import {BaseLayout} from "@/presentation/template/BaseLayout.tsx";
import {InsertCompanyBulkPage} from "@/presentation/company/InsertCompanyBulkPage.tsx";
import StudentPage from "@/app/dashboard/student/page.tsx";
import {DashboardLayout} from "@/app/dashboard/layout.tsx";
import {CompanyPage} from "@/presentation/company/CompanyPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
            // {
            //     path: "",
            //     element: <BaseLayout />,
            //     children:[
            //         {
            //             path: "",
            //             element: <HomePage />
            //         },
            //         {
            //             path: "company",
            //             children: [
            //                 {
            //                     path: "insert",
            //                     element: <InsertCompanyPage />,
            //                 },
            //                 {
            //                     path: "insert/bulk",
            //                     element: <InsertCompanyBulkPage />,
            //                 }
            //             ]
            //         },
            //     ]
            // },
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