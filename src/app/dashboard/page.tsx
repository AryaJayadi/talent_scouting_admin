import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { DashboardContent } from '@/components/dashboard-content'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <DashboardContent />
      </div>
    </div>
  )
}

