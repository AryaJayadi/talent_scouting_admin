import {Outlet} from "react-router";

export const AuthLayout = () => {
    return (
        <div className="w-full h-full items-center justify-center bg-red-50">
            <Outlet />
        </div>
    )
}