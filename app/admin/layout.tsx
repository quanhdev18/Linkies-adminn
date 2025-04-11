
// File: app/admin/layout.tsx
import AdminSidebar from "@/components/AdminSidebar";
import { ReactNode } from "react";
import { Bell, UserCircle } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 bg-white shadow px-6 flex items-center justify-between border-b">
        <h1 className="text-xl font-semibold whitespace-nowrap text-black">Linkies Admin</h1>
        <div className="flex-1 flex justify-center text-black">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-md bg-gray-100 text-sm w-64"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-600" />
          <UserCircle className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r ">
          <AdminSidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-50 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}