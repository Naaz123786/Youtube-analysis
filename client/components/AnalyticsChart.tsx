"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { motion } from "framer-motion";

const data = [
    { name: "Mon", subscribers: 4000, views: 2400 },
    { name: "Tue", subscribers: 3000, views: 1398 },
    { name: "Wed", subscribers: 2000, views: 9800 },
    { name: "Thu", subscribers: 2780, views: 3908 },
    { name: "Fri", subscribers: 1890, views: 4800 },
    { name: "Sat", subscribers: 2390, views: 3800 },
    { name: "Sun", subscribers: 3490, views: 4300 },
];

export default function AnalyticsChart() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 w-full h-[400px]"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-bold">Growth Overview</h3>
                    <p className="text-gray-400 text-sm">Subscriber growth over the last 7 days</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full" />
                        <span className="text-sm text-gray-400">Subscribers</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white/20 rounded-full" />
                        <span className="text-sm text-gray-400">Views</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorSub" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        hide
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(5, 5, 5, 0.8)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            backdropFilter: 'blur(10px)'
                        }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="subscribers"
                        stroke="#dc2626"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorSub)"
                    />
                    <Area
                        type="monotone"
                        dataKey="views"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth={2}
                        fill="transparent"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
