import {Outlet} from "react-router";

export const Root = () => {
    return (
        <div className="w-screen h-screen cursor-default">
            <Outlet />
        </div>
    )
}