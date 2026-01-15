"use client";

import { Monitor, Eye, Users, Youtube, ChevronLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const stats = [
        {
            id: "subs",
            count: "13,74,300",
            label: "Subscribers",
            icon: <Youtube className="w-5 h-5 text-red-500" />,
            accent: "text-red-500",
            bg: "bg-red-500/10"
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
            label: "Live Watchers",
            icon: <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />,
            accent: "text-green-500",
            bg: "bg-green-900/20"
        },
        {
            id: "watch_hours",
            count: "4,15,759",
            label: "Total Watch Hours",
            icon: <Clock className="w-5 h-5 text-blue-500" />,
            accent: "text-blue-500",
            bg: "bg-blue-500/10"
        },
    ];

    return (
        <header className="h-[72px] bg-[var(--color-app-dark)] border-b border-gray-800 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">

            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white tracking-wide">
                    [YOUTUBE<span className="text-[var(--color-brand-orange)]">ANALYSIS</span>]
                </span>
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
