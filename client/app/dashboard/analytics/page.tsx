"use client";

import { useState } from "react";

import { Info, Download, Calendar, Filter, Eye } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell, PieChart, Pie } from 'recharts';
import { useChannelStore } from "@/lib/store/useChannelStore";

// Mock Data
const viewsData = [
    { date: 'Jan', views: 4000, revenue: 2400 },
    { date: 'Feb', views: 3000, revenue: 1398 },
    { date: 'Mar', views: 2000, revenue: 9800 },
    { date: 'Apr', views: 2780, revenue: 3908 },
    { date: 'May', views: 1890, revenue: 4800 },
    { date: 'Jun', views: 2390, revenue: 3800 },
    { date: 'Jul', views: 3490, revenue: 4300 },
    { date: 'Aug', views: 4200, revenue: 5400 },
    { date: 'Sep', views: 5100, revenue: 6200 },
    { date: 'Oct', views: 6800, revenue: 7800 },
    { date: 'Nov', views: 7200, revenue: 8100 },
    { date: 'Dec', views: 8500, revenue: 9400 },
];

const trafficSourceData = [
    { name: 'Search', value: 45, color: '#3b82f6' },
    { name: 'Suggested', value: 25, color: '#8b5cf6' },
    { name: 'Browse', value: 15, color: '#f59e0b' },
    { name: 'External', value: 10, color: '#10b981' },
    { name: 'Other', value: 5, color: '#6b7280' },
];

const demographicsData = [
    { age: '18-24', male: 2500, female: 1800 },
    { age: '25-34', male: 4200, female: 3800 },
    { age: '35-44', male: 3100, female: 2800 },
    { age: '45-54', male: 1500, female: 1200 },
    { age: '55+', male: 500, female: 400 },
];

export default function AnalyticsPage() {
    const { isConnected } = useChannelStore();
    const [activeChart, setActiveChart] = useState<'views' | 'revenue'>('views');
    const [showExportMenu, setShowExportMenu] = useState(false);
    const [showDateMenu, setShowDateMenu] = useState(false);
    const [selectedRange, setSelectedRange] = useState('Last 28 Days');

    const getCsvContent = () => {
        const headers = ["Date", "Views", "Revenue"];
        const rows = viewsData.map(item => [item.date, item.views, item.revenue]);
        return "data:text/csv;charset=utf-8,"
            + headers.join(",") + "\n"
            + rows.map(e => e.join(",")).join("\n");
    };

    const handleDownload = () => {
        const csvContent = getCsvContent();
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "channel_analytics_report.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowExportMenu(false);
    };

    return (
        <div className="space-y-8 pb-12 animate-fade-in-up" onClick={() => { setShowExportMenu(false); setShowDateMenu(false); }}>

            {/* Header with Tools */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Channel Analytics</h1>
                    <p className="text-gray-400">Deep dive into your performance metrics.</p>
                </div>
                <div className="flex items-center gap-3 relative">
                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowDateMenu(!showDateMenu);
                                setShowExportMenu(false); // Close other menu
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 hover:text-white transition-colors text-sm"
                        >
                            <Calendar className="w-4 h-4" />
                            {selectedRange}
                        </button>

                        {/* Date Range Dropdown */}
                        {showDateMenu && (
                            <div className="absolute left-0 top-full mt-2 w-48 bg-[#1f2937] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                                {['Last 7 Days', 'Last 28 Days', 'Last 90 Days', 'Last Year', 'Lifetime'].map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => {
                                            setSelectedRange(range);
                                            setShowDateMenu(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-white/10 ${selectedRange === range ? 'text-blue-400 bg-white/5' : 'text-gray-200 hover:text-white'}`}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowExportMenu(!showExportMenu);
                                setShowDateMenu(false); // Close other menu
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold transition-colors text-sm shadow-lg shadow-blue-600/20 active:scale-95 transform duration-150"
                        >
                            <Download className="w-4 h-4" />
                            Export Report
                        </button>

                        {/* Export Dropdown Menu */}
                        {showExportMenu && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-[#1f2937] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleDownload(); }}
                                    className="w-full text-left px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4 text-green-400" />
                                    Download CSV
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Top Level Metrics (Detailed) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Realtime Views', value: isConnected ? '4,281' : '0', sub: 'Last 48 hours', trend: '+5%', color: 'text-blue-400' },
                    { label: 'Est. Revenue', value: isConnected ? '$2,482.59' : '$0.00', sub: 'RPM: $3.45', trend: '+12%', color: 'text-green-400' },
                    { label: 'Avg. Duration', value: isConnected ? '8:42' : '0:00', sub: 'Top 10%', trend: '-2%', color: 'text-purple-400' },
                    { label: 'Impressions', value: isConnected ? '252K' : '0', sub: 'CTR: 5.8%', trend: '+8%', color: 'text-orange-400' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#0f1218] border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-gray-700 transition-colors">
                        <h3 className="text-gray-400 text-sm font-medium mb-2 flex items-center gap-2">
                            {stat.label}
                            <Info className="w-3 h-3 text-gray-600" />
                        </h3>
                        <div className={`text-2xl font-bold text-white mb-1`}>{stat.value}</div>
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">{stat.sub}</span>
                            <span className={stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}>{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Primary Chart: Views & Revenue */}
            <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white">
                        {activeChart === 'views' ? 'Views Overview' : 'Revenue Overview'}
                    </h3>
                    <div className="flex gap-2 p-1 bg-gray-900 rounded-lg">
                        <button
                            onClick={() => setActiveChart('views')}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${activeChart === 'views'
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Views
                        </button>
                        <button
                            onClick={() => setActiveChart('revenue')}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${activeChart === 'revenue'
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Revenue
                        </button>
                    </div>
                </div>

                <div className="h-[350px] w-full">
                    {isConnected ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={viewsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                                <CartesianGrid vertical={false} stroke="#1f2937" strokeDasharray="3 3" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                {activeChart === 'views' ? (
                                    <Area
                                        type="monotone"
                                        dataKey="views"
                                        stroke="#3b82f6"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorViews)"
                                        animationDuration={1000}
                                    />
                                ) : (
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorRev)"
                                        animationDuration={1000}
                                    />
                                )}
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-dashed border-gray-800">
                            <Eye className="w-12 h-12 text-gray-700 mb-4" />
                            <p className="text-gray-500 font-medium">No data to visualize</p>
                            <p className="text-xs text-gray-600 mt-1">Please connect your YouTube channel</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Secondary Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Traffic Sources */}
                <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white">Traffic Sources</h3>
                        <Filter className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-[300px]">
                        {isConnected ? (
                            <>
                                <div className="w-full h-full relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={trafficSourceData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {trafficSourceData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }}
                                                itemStyle={{ color: '#fff' }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white">45%</div>
                                            <div className="text-xs text-gray-500">Search</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full max-w-[200px] space-y-3">
                                    {trafficSourceData.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                                <span className="text-gray-300">{item.name}</span>
                                            </div>
                                            <span className="font-bold text-white">{item.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center opacity-30 italic text-gray-500">
                                <p>No sources found</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Audience Demographics */}
                <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white">Audience Age & Gender</h3>
                        <div className="flex gap-2">
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <div className="w-2 h-2 rounded-full bg-blue-500" /> Male
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <div className="w-2 h-2 rounded-full bg-pink-500" /> Female
                            </div>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        {isConnected ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={demographicsData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    barSize={20}
                                >
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="age" type="category" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} width={40} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }}
                                        cursor={{ fill: 'transparent' }}
                                    />
                                    <Bar dataKey="male" stackId="a" fill="#3b82f6" radius={[4, 0, 0, 4]} />
                                    <Bar dataKey="female" stackId="a" fill="#3b82f6" fillOpacity={0.3} radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center opacity-30 italic text-gray-500">
                                <p>No demographic data</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
