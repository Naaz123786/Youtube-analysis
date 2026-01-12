"use client";

import AnalyticsChart from "@/components/AnalyticsChart";
import StatsCard from "@/components/StatsCard";
import { Users, Eye, TrendingUp, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Detailed Analytics</h1>
                    <p className="text-gray-400 text-sm">Deep dive into your channel's performance metrics.</p>
                </div>
                <button className="glass px-4 py-2 flex items-center gap-2 text-sm font-medium hover:bg-white/5 transition-colors">
                    <Calendar className="w-4 h-4" />
                    Last 30 Days
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <AnalyticsChart />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StatsCard
                            title="Retention Rate"
                            value="64.2%"
                            change="+2.4%"
                            icon={TrendingUp}
                        />
                        <StatsCard
                            title="CPM (Avg)"
                            value="$4.20"
                            change="-0.5%"
                            isPositive={false}
                            icon={Users}
                        />
                    </div>
                </div>

                <div className="glass p-8 space-y-8">
                    <h3 className="text-xl font-bold">Geographic Reach</h3>
                    <div className="space-y-6">
                        <ReachItem country="United States" percentage={42} />
                        <ReachItem country="India" percentage={28} />
                        <ReachItem country="Germany" percentage={12} />
                        <ReachItem country="Brazil" percentage={8} />
                        <ReachItem country="Others" percentage={10} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ReachItem({ country, percentage }: { country: string, percentage: number }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{country}</span>
                <span className="font-bold">{percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-red-600 rounded-full"
                />
            </div>
        </div>
    );
}
