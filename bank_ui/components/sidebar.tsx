"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Settings, PieChart, LayoutDashboard, LogOut } from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Portfolio",
    icon: PieChart,
    href: "/portfolio",
  },
  {
    title: "Analysis",
    icon: BarChart3,
    href: "/analysis",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 font-semibold">
        <span className="text-xl">BankDash</span>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                pathname === item.href ? "bg-accent" : "transparent",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-2">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

