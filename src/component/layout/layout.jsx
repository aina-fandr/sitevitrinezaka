import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}