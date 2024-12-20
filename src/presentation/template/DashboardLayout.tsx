import { Sidebar } from '@/components/sidebar'
import {Outlet} from "react-router";

export const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-6">
                <Outlet />
            </main>
        </div>
    )
}