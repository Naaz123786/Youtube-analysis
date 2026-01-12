"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string | number;
    change: string;
    icon: LucideIcon;
    isPositive?: boolean;
}

export default function StatsCard({ title, value, change, icon: Icon, isPositive = true }: StatsCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-6 glass-hover"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-500" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${isPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {change}
                </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </motion.div>
    );
}
