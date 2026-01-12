"use client";

import StatsCard from "@/components/StatsCard";
import LiveCounter from "@/components/LiveCounter";
import { Eye, PlaySquare, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardOverview() {
    return (
        <div className="space-y-8 pb-10">
            <div>
                <h1 className="text-3xl font-bold mb-2">Channel Overview</h1>
                <p className="text-gray-400 text-sm">Welcome back! Here's how your channel is performing today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <LiveCounter initialValue={124532} channelId="DEMO_ID" />
                <StatsCard
                    title="Total Views"
                    value="2.4M"
                    change="+5.4%"
                    icon={Eye}
                />
                <StatsCard
                    title="Total Videos"
                    value="184"
                    change="0%"
                    icon={PlaySquare}
                />
                <StatsCard
                    title="Live Growth"
                    value="1,204"
                    change="+12%"
                    icon={TrendingUp}
                />
            </div>

            {/* Main Stats Chart Placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 min-h-[400px] flex items-center justify-center border-dashed"
            >
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="text-red-500 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Connect Your Channel</h3>
                    <p className="text-gray-400 max-w-sm mb-6">
                        To see real-time analytics and detailed growth charts, you need to link your YouTube channel.
                    </p>
                    <button className="bg-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all">
                        Link YouTube Channel
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
