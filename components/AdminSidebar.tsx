'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; 
import { FaChartBar, FaUsers, FaFlag, FaCog, FaHome } from "react-icons/fa";

const sidebarItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <FaHome /> },
  { href: "/admin/users", label: "Users", icon: <FaUsers /> },
  { href: "/admin/reports", label: "Reports", icon: <FaFlag /> },
  { href: "/admin/analytics", label: "Analytics", icon: <FaChartBar /> },
  { href: "/admin/settings", label: "Settings", icon: <FaCog /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm p-4">
      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition",
              pathname.startsWith(item.href) && "bg-gray-200 font-semibold"
            )}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}