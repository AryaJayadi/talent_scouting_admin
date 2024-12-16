import { Building, GraduationCap } from 'lucide-react'
import {Link} from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav>
        <NavItem href="/company" icon={<Building size={20} />} text="Company" />
        <NavItem href="/student" icon={<GraduationCap size={20} />} text="Student" />
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

