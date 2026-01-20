"use client";

import { useState } from "react";
import { Users, Globe, Clock, UserCheck, Calendar, Info, Filter, ArrowUp, ArrowDown, Eye } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, Legend, LineChart, Line } from 'recharts';
import { useChannelStore } from "@/lib/store/useChannelStore";

// --- Mock Data ---

const returningViewersData = [
    { date: 'Jan 1', returning: 400, new: 2400 },
    { date: 'Jan 5', returning: 500, new: 2200 },
    { date: 'Jan 10', returning: 600, new: 1800 },
    { date: 'Jan 15', returning: 800, new: 2600 },
    { date: 'Jan 20', returning: 750, new: 2100 },
    { date: 'Jan 25', returning: 900, new: 2800 },
    { date: 'Jan 30', returning: 1100, new: 3100 },
];

const ageGenderData = [
    { age: '13-17', male: 5, female: 8 },
    { age: '18-24', male: 25, female: 22 },
    { age: '25-34', male: 40, female: 35 },
    { age: '35-44', male: 20, female: 25 },
    { age: '45-54', male: 8, female: 7 },
    { age: '55-64', male: 2, female: 3 },
    { age: '65+', male: 0, female: 0 },
];

const geographyData = [
    { country: 'United States', views: 45, color: '#3b82f6' },
    { country: 'India', views: 25, color: '#8b5cf6' },
    { country: 'United Kingdom', views: 10, color: '#10b981' },
    { country: 'Canada', views: 8, color: '#f59e0b' },
    { country: 'Germany', views: 5, color: '#ef4444' },
    { country: 'Other', views: 7, color: '#6b7280' },
];

const activeTimeData = [
    // Simplified for bar chart representation of "Best Time"
    { time: '12 AM', views: 10 }, { time: '4 AM', views: 5 },
    { time: '8 AM', views: 20 }, { time: '12 PM', views: 80 },
    { time: '4 PM', views: 95 }, { time: '8 PM', views: 60 },
];

export default function AudiencePage() {
    const { isConnected } = useChannelStore();
    const [selectedRange, setSelectedRange] = useState('Last 28 Days');
    const [showDateMenu, setShowDateMenu] = useState(false);

    return (
        <div className="space-y-8 pb-12 animate-fade-in-up" onClick={() => setShowDateMenu(false)}>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Audience</h1>
                    <p className="text-gray-400">Understand who is watching your videos.</p>
                </div>

                {/* Date Range Selector (Reused Logic) */}
                <div className="relative">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowDateMenu(!showDateMenu);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-gray-300 hover:text-white transition-colors text-sm"
                    >
                        <Calendar className="w-4 h-4" />
                        {selectedRange}
                    </button>
                    {showDateMenu && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-[#1f2937] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                            {['Last 7 Days', 'Last 28 Days', 'Last 90 Days', 'Lifetime'].map((range) => (
                                <button
                                    key={range}
                                    onClick={() => { setSelectedRange(range); setShowDateMenu(false); }}
                                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-white/10 ${selectedRange === range ? 'text-blue-400 bg-white/5' : 'text-gray-200 hover:text-white'}`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Returning Viewers', value: isConnected ? '12.5K' : '0', icon: UserCheck, trend: '+15%', color: 'text-blue-400' },
                    { label: 'Unique Viewers', value: isConnected ? '45.2K' : '0', icon: Users, trend: '+8%', color: 'text-purple-400' },
                    { label: 'Subscribers', value: isConnected ? '+1.2K' : '0', icon: ArrowUp, trend: '+22%', color: 'text-green-400' },
                    { label: 'Avg. Views/Viewer', value: isConnected ? '3.4' : '0.0', icon: Eye, trend: '-2%', color: 'text-orange-400' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#0f1218] border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-gray-700 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
                            <stat.icon className={`w-4 h-4 ${stat.color} opacity-80`} />
                        </div>
                        <div className="flex items-end gap-3">
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <span className={`text-xs mb-1 font-medium ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Returning vs New Viewers Chart */}
            <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Returning vs New Viewers</h3>
                        <p className="text-sm text-gray-400">How your audience is growing and staying engaged.</p>
                    </div>
                </div>
                <div className="h-[350px] w-full">
                    {isConnected ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={returningViewersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <CartesianGrid vertical={false} stroke="#1f2937" strokeDasharray="3 3" />
                                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Line type="monotone" name="Returning Viewers" dataKey="returning" stroke="#8b5cf6" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                                <Line type="monotone" name="New Viewers" dataKey="new" stroke="#3b82f6" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-dashed border-gray-800">
                            <LineChart className="w-12 h-12 text-gray-700 mb-4" />
                            <p className="text-gray-500 font-medium">No audience data</p>
                            <p className="text-xs text-gray-600 mt-1">Connect your channel to see viewer trends</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Grid: Demographics & Geography */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Age & Gender */}
                <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Age & Gender</h3>
                    <div className="h-[300px] w-full">
                        {isConnected ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={ageGenderData} layout="vertical" barGap={2} barSize={12}>
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="age" type="category" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} width={40} />
                                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }} />
                                    <Bar dataKey="male" name="Male" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                                    <Bar dataKey="female" name="Female" fill="#ec4899" radius={[0, 4, 4, 0]} />
                                    <Legend wrapperStyle={{ fontSize: '12px', marginTop: '10px' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-dashed border-gray-800">
                                <p className="text-gray-500 text-sm italic">Connect channel for demographics</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Top Geographies */}
                <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Top Geographies</h3>
                    <div className="flex flex-col gap-4">
                        {isConnected ? geographyData.map((country, i) => (
                            <div key={i} className="relative">
                                <div className="flex items-center justify-between text-sm mb-1 z-10 relative">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        <Globe className="w-3 h-3 text-gray-500" />
                                        {country.country}
                                    </span>
                                    <span className="text-gray-300">{country.views}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000"
                                        style={{ width: `${country.views}%`, backgroundColor: country.color }}
                                    />
                                </div>
                            </div>
                        )) : (
                            <div className="py-10 text-center opacity-30 grayscale italic text-sm text-gray-500">
                                Global data unavailable
                            </div>
                        )}
                    </div>
                </div>

                {/* When Viewers are on YouTube */}
                <div className="bg-[#0f1218] border border-gray-800 rounded-3xl p-6 lg:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        When your viewers are on YouTube
                    </h3>
                    <div className="h-[250px] w-full">
                        {isConnected ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={activeTimeData}>
                                    <CartesianGrid vertical={false} stroke="#1f2937" strokeDasharray="3 3" />
                                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                                    <Tooltip cursor={{ fill: '#1f2937', opacity: 0.5 }} contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }} />
                                    <Bar dataKey="views" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-2xl border border-dashed border-gray-800">
                                <p className="text-gray-500 text-sm italic">Connect channel for active time insights</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
