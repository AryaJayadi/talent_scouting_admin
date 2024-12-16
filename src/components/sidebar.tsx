import { Home, Users, ShoppingBag, BarChart2, Settings } from 'lucide-react'
import {Link} from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="mt-8">
        <NavItem href="/dashboard" icon={<Home size={20} />} text="Dashboard" />
        <NavItem href="/dashboard/users" icon={<Users size={20} />} text="Users" />
        <NavItem href="/dashboard/products" icon={<ShoppingBag size={20} />} text="Products" />
        <NavItem href="/dashboard/analytics" icon={<BarChart2 size={20} />} text="Analytics" />
        <NavItem href="/dashboard/settings" icon={<Settings size={20} />} text="Settings" />
      </nav>
    </aside>
  )
}

function NavItem({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link to={href} className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700">
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  )
}

