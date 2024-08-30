import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Root} from "@/presentation/template/Root.tsx";
import {LoginPage} from "@/presentation/auth/LoginPage.tsx";
import {AuthLayout} from "@/presentation/template/AuthLayout.tsx";
import {HomePage} from "@/presentation/home/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <HomePage />,
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