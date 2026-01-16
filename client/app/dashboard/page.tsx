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

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Chart Area */}
                <div className="lg:col-span-2 bg-[#0f1218] border border-gray-800 rounded-3xl p-6 relative overflow-hidden group">
                    {/* Glow effect */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all duration-500" />

                    <div className="flex items-center justify-between mb-6 relative z-10">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Audience Growth</h3>
                            <p className="text-sm text-gray-400">Subscribers gained over time</p>
                        </div>
                        <select className="bg-[#1a1f2e] border border-gray-700 text-sm text-white rounded-lg px-3 py-2 outline-none focus:border-blue-500">
                            <option>Last 30 Days</option>
                            <option>Last 90 Days</option>
                            <option>This Year</option>
                        </select>
                    </div>

                    {/* Recharts Area Chart */}
                    <div className="h-[280px] w-full relative z-10">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke="#4b5563"
                                    tick={{ fontSize: 12 }}
                                    tickLine={false}
                                    axisLine={false}
                                    dy={10}
                                />
                                <YAxis
                                    stroke="#4b5563"
                                    tick={{ fontSize: 12 }}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value / 1000}k`}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#60a5fa' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorValue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* AI Insights Card */}
                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none" />

                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-indigo-500/20 rounded-lg">
                                <BrainCircuit className="w-5 h-5 text-indigo-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white">AI Insights</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-[#0f1218]/80 rounded-xl p-4 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors cursor-pointer">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-200 leading-relaxed">
                                            Your latest video about <span className="text-indigo-300 font-medium">AI Tools</span> has 40% higher retention than average.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#0f1218]/80 rounded-xl p-4 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors cursor-pointer">
                                <div className="flex items-start gap-3">
                                    <Zap className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-200 leading-relaxed">
                                            Posting shorts on <span className="text-cyan-300 font-medium">Tuesdays at 6PM</span> could increase reach by ~15%.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/20">
                            Generate New Report
                        </button>
                    </div>

                    {/* Top Performing Video Card */}
                    <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-700 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Top Video</h3>
                            <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded uppercase tracking-wide">Viral</span>
                        </div>

                        {/* Thumbnail Mockup */}
                        <div className="relative aspect-video rounded-xl bg-gray-800 mb-4 overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')" }}></div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 duration-300" />
                            </div>
                        </div>

                        <h4 className="font-bold text-white mb-1 line-clamp-2 hover:text-blue-400 cursor-pointer transition-colors">
                            How to Scale Your YouTube Channel
                        </h4>
                        <p className="text-gray-500 text-xs mb-3">Published 2 days ago</p>

                        <div className="flex justify-between items-center text-sm bg-gray-900/50 p-2 rounded-lg">
                            <span className="text-gray-400">Revenue</span>
                            <span className="font-bold text-green-400">$842.00</span>
                        </div>
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
