"use client";

import { Monitor, Eye, Users, Youtube, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const stats = [
        {
            id: "doubts",
            count: "90,690",
            label: "Doubts by AI",
            icon: <Monitor className="w-5 h-5 text-[var(--color-brand-teal)]" />,
            accent: "text-purple-400",
            bg: "bg-purple-500/10"
        },
        {
            id: "views",
            count: "19,52,13,962",
            label: "YouTube Views",
            icon: <Eye className="w-5 h-5 text-green-500" />,
            accent: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            id: "live",
            count: "368",
            label: "Live Learners",
            icon: <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />,
            accent: "text-green-500",
            bg: "bg-green-900/20"
        },
        {
            id: "total",
            count: "414,713",
            label: "Total Learners",
            icon: <Users className="w-5 h-5 text-blue-500" />,
            accent: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            id: "subs",
            count: "13,74,300",
            label: "Subscribers",
            icon: <Youtube className="w-5 h-5 text-red-500" />,
            accent: "text-red-500",
            bg: "bg-red-500/10"
        },
    ];

    return (
        <header className="h-[72px] bg-[var(--color-app-dark)] border-b border-gray-800 flex items-center justify-between px-6 sticky top-0 z-30">

            {/* Left: Select Target Dropdown */}
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-[var(--color-brand-orange)] border border-[var(--color-brand-orange)]/30 bg-[var(--color-brand-orange)]/10 px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-brand-orange)]/20 transition-colors">
                    <span role="img" aria-label="student">🎓</span>
                    Select Target
                </button>

                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                </button>
            </div>

            {/* Right: Stats & Sign In */}
            <div className="flex items-center gap-6">
                <div className="hidden xl:flex items-center gap-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex items-center gap-3 bg-[var(--color-app-card)] border border-gray-800 rounded-lg px-4 py-2 min-w-[140px]">
                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <div className={`text-sm font-bold ${stat.accent}`}>{stat.count}</div>
                                <div className="text-[10px] text-gray-500 uppercase font-semibold">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="bg-[var(--color-brand-orange)] text-white px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                    Sign in
                </button>
            </div>
        </header>
    );
}
