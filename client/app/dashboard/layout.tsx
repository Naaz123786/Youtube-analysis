"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useSidebarStore } from "@/lib/store/useSidebarStore";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { isCollapsed } = useSidebarStore();

    return (
        <div className="min-h-screen bg-[#050505]">
            <Header />
            <Sidebar />
            <main
                className={cn(
                    "pr-8 pt-[104px] transition-all duration-300 ease-in-out",
                    isCollapsed ? "pl-[100px]" : "pl-[250px]" // 80+20 and 220+30 to maintain some gap
                )}
            >
                {children}
            </main>
        </div>
    );
}
