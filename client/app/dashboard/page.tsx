"use client";

import { Eye, TrendingUp, Users, Clock, ArrowUpRight, PlayCircle, MoreHorizontal, Sparkles, Zap, BrainCircuit } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
    { name: 'Mon', value: 4000 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 5000 },
    { name: 'Thu', value: 2780 },
    { name: 'Fri', value: 1890 },
    { name: 'Sat', value: 6390 },
    { name: 'Sun', value: 3490 },
    { name: 'Mon', value: 4200 },
    { name: 'Tue', value: 5100 },
    { name: 'Wed', value: 6800 },
    { name: 'Thu', value: 7200 },
    { name: 'Fri', value: 8500 },
];

export default function DashboardOverview() {
    return (
        <div className="space-y-8 pb-12 animate-fade-in-up">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                    <p className="text-gray-400">Welcome back, <span className="text-white font-medium">Alex Chen</span>. Your channel is growing fast!</p>
                </div>
                <div className="bg-[#1a1f2e] border border-gray-800 rounded-xl px-4 py-2 flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-gray-400 font-medium">Last updated: Just now</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    label="Total Subscribers"
                    value="124,592"
                    change="+12.5%"
                    trend="up"
                    icon={<Users className="w-6 h-6 text-white" />}
                    gradient="from-blue-600 to-blue-400"
                />
                <StatsCard
                    label="Total Views"
                    value="2.4M"
                    change="+5.4%"
                    trend="up"
                    icon={<Eye className="w-6 h-6 text-white" />}
                    gradient="from-purple-600 to-purple-400"
                />
                <StatsCard
                    label="Watch Hours"
                    value="415.7K"
                    change="+2.1%"
                    trend="up"
                    icon={<Clock className="w-6 h-6 text-white" />}
                    gradient="from-teal-600 to-teal-400"
                />
                <StatsCard
                    label="Click-Thru Rate"
                    value="8.2%"
                    change="-1.2%"
                    trend="down"
                    icon={<TrendingUp className="w-6 h-6 text-white" />}
                    gradient="from-orange-600 to-orange-400"
                />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Channel Milestones Card */}
                <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <TrendingUp className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Next Milestone</h3>
                        </div>
                        <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                            On Track
                        </span>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-end gap-2 mb-2">
                            <h4 className="text-4xl font-bold text-white">150,000</h4>
                            <span className="text-gray-400 mb-2 font-medium">Subscribers</span>
                        </div>

                        <div className="w-full bg-gray-800/50 h-3 rounded-full overflow-hidden mb-3">
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full w-[83%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                        </div>

                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Current: <span className="text-white font-medium">124,592</span></span>
                            <span className="text-blue-400 font-medium">25,408 to go</span>
                        </div>
                    </div>
                </div>

                {/* Recent Engagement Feed */}
                <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6 relative overflow-hidden h-full">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white">Engagement Activity</h3>
                        <button className="text-xs text-gray-500 hover:text-white transition-colors">View All</button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { user: "Sarah J.", action: "Commented on", target: "AI Automation Guide", time: "2m ago", color: "bg-purple-500" },
                            { user: "Mike T.", action: "Subscribed", target: "to your channel", time: "15m ago", color: "bg-green-500" },
                            { user: "TechDaily", action: "Liked", target: "How to Scale...", time: "1h ago", color: "bg-orange-500" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                                <div className={`w-8 h-8 rounded-full ${item.color}/20 flex items-center justify-center text-[10px] font-bold text-white border border-white/10`}>
                                    {item.user.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-300 truncate">
                                        <span className="font-bold text-white">{item.user}</span> {item.action} <span className="text-gray-400">{item.target}</span>
                                    </p>
                                </div>
                                <span className="text-xs text-gray-600 whitespace-nowrap">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Uploads Table */}
            <div className="bg-[#0f1218] border border-gray-800 rounded-3xl overflow-hidden">
                <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Recent Uploads</h3>
                    <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#1a1f2e]/50 text-gray-400 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium">Video</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Views</th>
                                <th className="px-6 py-4 font-medium">Comments</th>
                                <th className="px-6 py-4 font-medium">Likes</th>
                                <th className="px-6 py-4 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {[1, 2, 3].map((item) => (
                                <tr key={item} className="group hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-9 bg-gray-800 rounded overflow-hidden flex-shrink-0 relative">
                                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format&fit=crop')` }}></div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-white line-clamp-1 max-w-[200px]">Complete Guide to AI Automation</div>
                                                <div className="text-xs text-gray-500">HD • Public</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400">Oct 24, 2024</td>
                                    <td className="px-6 py-4 text-sm text-white">12.5K</td>
                                    <td className="px-6 py-4 text-sm text-white">342</td>
                                    <td className="px-6 py-4 text-sm text-white">1.2K</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ label, value, change, trend, icon, gradient }: { label: string, value: string, change: string, trend: 'up' | 'down', icon: React.ReactNode, gradient: string }) {
    return (
        <div className="bg-[#0f1218] border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-gray-700 transition-colors">
            {/* Background Gradient Blob */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`} />

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}>
                    {icon}
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-500'}`}>
                    {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-180" />}
                    {change}
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
                <p className="text-sm text-gray-500 font-medium">{label}</p>
            </div>
        </div>
    )
}
