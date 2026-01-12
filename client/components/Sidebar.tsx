"use client";

import { LayoutDashboard, Video, Settings, LogOut, BarChart2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Video, label: "Upload", href: "/dashboard/upload" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 min-h-screen glass border-r-0 m-4 rounded-2xl flex flex-col p-6 fixed left-0">
            <div className="flex items-center gap-2 mb-10 px-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold">A</div>
                <span className="text-xl font-bold">AnalyticsHub</span>
            </div>

            <div className="flex-1 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                            pathname === item.href
                                ? "bg-red-600/10 text-red-500 font-semibold"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <item.icon className={cn("w-5 h-5", pathname === item.href ? "text-red-500" : "group-hover:text-white")} />
                        {item.label}
                    </Link>
                ))}
            </div>

            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-500/5 transition-all mt-auto mb-4">
                <LogOut className="w-5 h-5" />
                Logout
            </button>
        </div>
    );
}
