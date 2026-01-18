"use client";

import { Home, Users, BarChart2, Briefcase, Info, Video, Settings, LogIn, LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/lib/store/useSidebarStore";


const menuGroups = [
    {
        label: "MAIN",
        items: [
            { icon: Home, label: "Home", href: "/" },
            { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
            { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
            { icon: Users, label: "Audience", href: "/dashboard/audience" },
        ]
    },
    {
        label: "CONTENT",
        items: [
            { icon: Video, label: "Upload Video", href: "/dashboard/upload" },
            { icon: Briefcase, label: "Content Manager", href: "/dashboard/content" },
        ]
    },
    {
        label: "SETTINGS",
        items: [
            { icon: Info, label: "Help & Support", href: "/dashboard/support" },
            { icon: Settings, label: "Settings", href: "/dashboard/settings" },
        ]
    }
];

export default function Sidebar() {
    const pathname = usePathname();
    const { isCollapsed, toggleSidebar } = useSidebarStore();

    return (
        <aside
            className={cn(
                "fixed left-0 top-[72px] h-[calc(100vh-72px)] bg-[var(--color-app-sidebar)] border-r border-gray-800 flex flex-col z-40 transition-all duration-300 ease-in-out",
                isCollapsed ? "w-[80px]" : "w-[220px]"
            )}
        >
            {/* Floating Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-3 top-6 w-6 h-6 bg-[#1f2937] border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-50 shadow-lg"
            >
                {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
            </button>

            <div className="mt-6"></div>

            <div className="flex-1 px-3 space-y-6 overflow-y-auto overflow-x-hidden">
                {menuGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className={cn(isCollapsed && "flex flex-col items-center")}>
                        {group.label && !isCollapsed && (
                            <h3 className="px-4 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider animate-fadeIn">
                                {group.label}
                            </h3>
                        )}
                        <div className="space-y-2 w-full flex flex-col items-center">
                            {group.items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        title={isCollapsed ? item.label : undefined}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-sm font-medium relative group",
                                            isActive
                                                ? "bg-blue-600/10 text-blue-500"
                                                : "text-gray-400 hover:text-white hover:bg-gray-800/50",
                                            isCollapsed ? "justify-center w-10 h-10 p-0" : "w-full"
                                        )}
                                    >
                                        <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-blue-500" : "text-gray-500")} />

                                        {!isCollapsed && (
                                            <span className="truncate animate-fadeIn">{item.label}</span>
                                        )}

                                        {isActive && !isCollapsed && (
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-l-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>



            <div className="p-3 space-y-2">
                {!isCollapsed ? (
                    <button className="w-full bg-[var(--color-brand-orange)] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap overflow-hidden">
                        <LogIn className="w-5 h-5 flex-shrink-0" />
                        Login / Signup
                    </button>
                ) : (
                    <button className="w-full bg-[var(--color-brand-orange)] text-white font-bold py-3 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                        <LogIn className="w-5 h-5" />
                    </button>
                )}
            </div>
        </aside>
    );
}
