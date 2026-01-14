"use client";

import { Home, Users, BarChart2, Briefcase, Info, Video, Settings, LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuGroups = [
    {
        label: "MENU",
        items: [
            { icon: Home, label: "Overview", href: "/dashboard" },
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
            { icon: Info, label: "Help & Support", href: "/support" },
            { icon: Settings, label: "Settings", href: "/dashboard/settings" },
        ]
    }
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-[260px] min-h-screen bg-[var(--color-app-sidebar)] border-r border-gray-800 flex flex-col fixed left-0 top-0 z-40 overflow-y-auto">
            {/* Logo Area */}
            <div className="p-6 mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white tracking-wide">
                        [YOUTUBE<span className="text-[var(--color-brand-orange)]">ANALYSIS</span>]
                    </span>
                </div>
            </div>

            <div className="flex-1 px-4 space-y-6">
                {menuGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        {group.label && (
                            <h3 className="px-4 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                                {group.label}
                            </h3>
                        )}
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const isActive = pathname === item.href; // Simple active check
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
                                            isActive
                                                ? "bg-blue-600/10 text-blue-500 border-l-4 border-blue-500"
                                                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                        )}
                                    >
                                        <item.icon className={cn("w-5 h-5", isActive ? "text-blue-500" : "text-gray-500")} />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 mt-auto">
                <button className="w-full bg-[var(--color-brand-orange)] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <LogIn className="w-5 h-5" />
                    Login / Signup
                </button>
            </div>
        </div>
    );
}
