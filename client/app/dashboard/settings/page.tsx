"use client";

import { useState } from "react";
import {
    User,
    Youtube,
    Bell,
    CreditCard,
    Camera,
    Mail,
    Lock,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    RefreshCw,
    Shield,
    Infinity,
    Zap,
    Download,
    CreditCard as CardIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TabType = 'profile' | 'connections' | 'notifications' | 'billing';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<TabType>('profile');
    const [isSaving, setIsSaving] = useState(false);

    // Initial States for comparison
    const initialProfile = {
        name: "Naaz Siddiqui",
        email: "naaz@example.com",
        title: "Content Creator"
    };

    const initialNotifications = [
        { id: 'weekly', title: "Weekly Performance Report", desc: "Receive a summary of your channel's growth every Monday.", enabled: true },
        { id: 'realtime', title: "Real-time Stats Alerts", desc: "Get notified when a video crosses a milestone or goes viral.", enabled: false },
        { id: 'safety', title: "Compliance & Safety", desc: "Immediate alerts for copyright claims or community guideline shifts.", enabled: true },
        { id: 'updates', title: "Marketing & Product Updates", desc: "Stay informed about new features and platform improvements.", enabled: false }
    ];

    // Current States
    const [profileData, setProfileData] = useState(initialProfile);
    const [notifications, setNotifications] = useState(initialNotifications);
    const [isConnected, setIsConnected] = useState(true);

    // Derived State: Check if there are changes
    const hasChanges = JSON.stringify(profileData) !== JSON.stringify(initialProfile) ||
        JSON.stringify(notifications) !== JSON.stringify(initialNotifications);

    const tabs = [
        { id: 'profile', label: 'My Profile', icon: User },
        { id: 'connections', label: 'YouTube Connections', icon: Youtube },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
    ];

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            // In a real app, we would update the 'initial' reference state here
            // For now, we simulation success and reload
            alert("Settings saved successfully!");
            window.location.reload();
        }, 1500);
    };

    const handleReset = () => {
        setProfileData(initialProfile);
        setNotifications(initialNotifications);
    };

    const toggleNotification = (id: string) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, enabled: !n.enabled } : n
        ));
    };


    return (
        <div className="max-w-6xl mx-auto pb-20">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
                <p className="text-gray-400">Manage your profile, connected channels, and application preferences.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-64 flex-shrink-0">
                    <div className="bg-[#141b25] border border-gray-800 rounded-2xl p-2 space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as TabType)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                                    activeTab === tab.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === 'profile' && (
                                <div className="space-y-8">
                                    {/* Profile section */}
                                    <div className="bg-[#141b25] border border-gray-800 rounded-2xl p-8">
                                        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-800">
                                            <div className="relative group">
                                                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                                                    NS
                                                </div>
                                                <button className="absolute -bottom-2 -right-2 p-2 bg-[#0f1218] border border-gray-800 rounded-xl text-blue-500 hover:text-blue-400 transition-colors shadow-lg">
                                                    <Camera className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div>
                                                <h2 className="text-lg font-bold text-white">Profile Photo</h2>
                                                <p className="text-xs text-gray-500 mt-1">PNG, JPG or GIF. Max size of 800K.</p>
                                                <div className="flex gap-2 mt-4">
                                                    <button className="px-4 py-2 bg-blue-600/10 text-blue-500 text-xs font-bold rounded-lg hover:bg-blue-600/20 transition-all border border-blue-500/20">
                                                        Upload New
                                                    </button>
                                                    <button className="px-4 py-2 bg-transparent text-gray-500 text-xs font-bold rounded-lg hover:text-red-500 transition-all">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={profileData.name}
                                                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                                    className="w-full bg-[#0f1218] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                                    <input
                                                        type="email"
                                                        value={profileData.email}
                                                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                                        className="w-full bg-[#0f1218] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Professional Title</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Content Creator, Video Producer"
                                                    value={profileData.title}
                                                    onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                                                    className="w-full bg-[#0f1218] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-10 pt-8 border-t border-gray-800">
                                            <h3 className="text-sm font-bold text-white mb-6">Security</h3>
                                            <div className="flex items-center justify-between p-4 bg-[#0f1218] border border-gray-800 rounded-2xl group cursor-pointer hover:border-gray-700 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                                                        <Lock className="w-5 h-5 text-gray-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-300">Change Password</p>
                                                        <p className="text-[10px] text-gray-500">Update your account password regularly for safety.</p>
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'connections' && (
                                <div className="bg-[#141b25] border border-gray-800 rounded-2xl p-8 space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-lg font-bold text-white">YouTube Integration</h2>
                                            <p className="text-sm text-gray-500 mt-1">Manage your connected channels and API permissions.</p>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold">
                                            <Shield className="w-3 h-3" /> Secure Connection
                                        </div>
                                    </div>

                                    <div className="bg-[#0f1218] border border-gray-800 rounded-2xl p-6">
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                            <div className="flex items-center gap-4">
                                                <div className={cn(
                                                    "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 transition-all",
                                                    isConnected ? "bg-red-600 shadow-red-600/20" : "bg-gray-800 grayscale shadow-none"
                                                )}>
                                                    <Youtube className="w-10 h-10 text-white fill-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-white uppercase tracking-tight">
                                                        {isConnected ? "Main Channel Connected" : "No Channel Connected"}
                                                    </p>
                                                    <p className="text-2xl font-black text-white mt-1">
                                                        {isConnected ? "TechBytes Pro" : "N/A"}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                                        {isConnected ? (
                                                            <><CheckCircle2 className="w-3 h-3 text-green-500" /> Authorized since Sep 2025</>
                                                        ) : (
                                                            "Please connect a YouTube channel to view analytics."
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {isConnected ? (
                                                    <>
                                                        <button
                                                            onClick={() => alert("Refreshing token...")}
                                                            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl border border-white/10 transition-all"
                                                        >
                                                            <RefreshCw className="w-3.5 h-3.5" /> Refresh Token
                                                        </button>
                                                        <button
                                                            onClick={() => setIsConnected(false)}
                                                            className="px-4 py-2.5 bg-red-600/10 text-red-500 text-xs font-bold rounded-xl border border-red-500/20 hover:bg-red-600/20 transition-all"
                                                        >
                                                            Disconnect
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        onClick={() => setIsConnected(true)}
                                                        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-red-600/20 transition-all"
                                                    >
                                                        Connect Channel
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 border border-amber-500/20 bg-amber-500/5 rounded-2xl flex items-start gap-4">
                                        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold text-amber-500 uppercase tracking-widest">API Usage Warning</p>
                                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                                You are currently using 85% of your daily API quota for analytics fetching. If you reach 100%, data updates will pause until midnight UTC.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'notifications' && (
                                <div className="bg-[#141b25] border border-gray-800 rounded-2xl p-8">
                                    <h2 className="text-lg font-bold text-white mb-8">Notification Preferences</h2>
                                    <div className="space-y-6">
                                        {notifications.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between pb-6 border-b border-gray-800/50 last:border-0 last:pb-0">
                                                <div className="max-w-md">
                                                    <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                                <div
                                                    onClick={() => toggleNotification(item.id)}
                                                    className={cn(
                                                        "w-12 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors duration-300",
                                                        item.enabled ? "bg-blue-600" : "bg-gray-800"
                                                    )}
                                                >
                                                    <motion.div
                                                        animate={{ x: item.enabled ? 24 : 4 }}
                                                        initial={false}
                                                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'billing' && (() => {
                                const plans = [
                                    { name: "Starter", price: "Free", desc: "For hobbyists starting out.", features: ["3 Channels", "7-day history", "Basic AI"], current: false },
                                    { name: "Pro Creator", price: "$29", desc: "Everything for professionals.", features: ["12 Channels", "Unlimited history", "Advanced AI"], current: false },
                                    { name: "Enterprise", price: "$99", desc: "Custom solutions for teams.", features: ["Unlimited Channels", "Priority Support", "Custom API"], current: false },
                                ];

                                return (
                                    <div className="space-y-8 pb-10">
                                        {/* Usage Stats */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { label: "API Quota", usage: "85k", total: "100k", percent: 85, icon: Youtube, color: "bg-red-500" },
                                                { label: "Storage", usage: "4.2GB", total: "10GB", percent: 42, icon: Shield, color: "bg-blue-500" },
                                                { label: "AI Analysis", usage: "128", total: "500", percent: 25, icon: Zap, color: "bg-amber-500" },
                                            ].map((stat, i) => (
                                                <div key={i} className="bg-[#141b25] border border-gray-800 rounded-2xl p-6 relative overflow-hidden group">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="p-2 bg-white/5 rounded-lg">
                                                            <stat.icon className="w-4 h-4 text-gray-400" />
                                                        </div>
                                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</span>
                                                    </div>
                                                    <div className="flex items-end justify-between mb-2">
                                                        <h4 className="text-xl font-bold text-white">{stat.usage}</h4>
                                                        <span className="text-xs text-gray-500">of {stat.total}</span>
                                                    </div>
                                                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${stat.percent}%` }}
                                                            transition={{ duration: 1, delay: i * 0.1 }}
                                                            className={cn("h-full rounded-full transition-all", stat.color)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Plans Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {plans.map((plan, i) => (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "bg-[#141b25] border rounded-3xl p-8 flex flex-col transition-all duration-300 relative",
                                                        plan.current ? "border-blue-600 shadow-2xl shadow-blue-600/10 ring-1 ring-blue-600/50" : "border-gray-800 hover:border-gray-700"
                                                    )}
                                                >
                                                    {plan.current && (
                                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/40">
                                                            Current Plan
                                                        </div>
                                                    )}
                                                    <div className="mb-6">
                                                        <h3 className="text-xl font-black text-white">{plan.name}</h3>
                                                        <p className="text-xs text-gray-500 mt-2">{plan.desc}</p>
                                                    </div>
                                                    <div className="flex items-baseline gap-1 mb-8">
                                                        <span className="text-4xl font-black text-white">{plan.price}</span>
                                                        {plan.price !== "Free" && <span className="text-sm text-gray-500">/mo</span>}
                                                    </div>
                                                    <ul className="space-y-4 mb-10 flex-1">
                                                        {plan.features.map((f, j) => (
                                                            <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> {f}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <button className={cn(
                                                        "w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                                                        plan.current ? "bg-white/5 text-blue-500 cursor-default" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                                                    )}>
                                                        {plan.current ? "Active" : "Upgrade"}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Payment & History - Only show if a plan is active */}
                                        {plans.some(p => p.current) ? (
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <div className="bg-[#141b25] border border-gray-800 rounded-3xl p-8">
                                                    <div className="flex items-center justify-between mb-8">
                                                        <h3 className="text-sm font-black text-white uppercase tracking-widest">Payment Method</h3>
                                                        <button className="text-[10px] font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest">Add New</button>
                                                    </div>
                                                    <div className="p-6 bg-[#0f1218] border border-gray-800 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-gray-700 transition-all">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-8 bg-black rounded border border-gray-800 flex items-center justify-center font-bold text-[10px] text-white italic">
                                                                VISA
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-bold text-white">•••• •••• •••• 4242</p>
                                                                <p className="text-xs text-gray-500">Expires 12/28</p>
                                                            </div>
                                                        </div>
                                                        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                                    </div>
                                                    <div className="mt-6 flex items-center gap-3 p-4 bg-white/5 rounded-2xl text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">
                                                        <Shield className="w-8 h-8 text-blue-500/50 flex-shrink-0" />
                                                        Your payment information is encrypted and processed by Stripe. We never store your card details.
                                                    </div>
                                                </div>

                                                <div className="bg-[#141b25] border border-gray-800 rounded-3xl p-8">
                                                    <h3 className="text-sm font-black text-white uppercase tracking-widest mb-8">Billing History</h3>
                                                    <div className="space-y-4">
                                                        {[
                                                            { date: "Oct 12, 2025", amount: "$29.00", status: "Paid" },
                                                            { date: "Sep 12, 2025", amount: "$29.00", status: "Paid" },
                                                            { date: "Aug 12, 2025", amount: "$12.50", status: "Paid" },
                                                        ].map((inv, i) => (
                                                            <div key={i} className="flex items-center justify-between p-4 bg-[#0f1218]/50 hover:bg-[#0f1218] rounded-xl border border-transparent hover:border-gray-800 transition-all cursor-default group">
                                                                <div>
                                                                    <p className="text-xs font-bold text-white">{inv.date}</p>
                                                                    <p className="text-[10px] text-gray-500 mt-0.5">Invoice #HUB-{2025000 + i}</p>
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                    <span className="text-xs font-black text-white">{inv.amount}</span>
                                                                    <button className="p-2 bg-white/5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                                                                        <Download className="w-3.5 h-3.5" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <button className="w-full mt-6 py-2.5 bg-[#0f1218] border border-gray-800 text-[10px] font-black text-gray-500 hover:text-white hover:border-gray-600 rounded-xl uppercase tracking-widest transition-all">
                                                        View All Invoices
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-[#141b25] border border-gray-800 border-dashed rounded-3xl p-12 text-center">
                                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <CardIcon className="w-8 h-8 text-gray-600" />
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-2">No Active Subscription</h3>
                                                <p className="text-sm text-gray-500 max-w-sm mx-auto mb-8">
                                                    Select a plan from above to unlock premium features and manage your billing details.
                                                </p>
                                                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest font-black">
                                                    <Shield className="w-4 h-4" /> Secure Payment via Stripe
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Sticky Save Bar */}
            <AnimatePresence>
                {hasChanges && (
                    <motion.div
                        initial={{ y: 100, x: "-50%", opacity: 0 }}
                        animate={{ y: 0, x: "-50%", opacity: 1 }}
                        exit={{ y: 100, x: "-50%", opacity: 0 }}
                        className="fixed bottom-8 left-1/2 w-[calc(100%-48px)] max-w-4xl z-50 px-6 py-4 bg-[#141b25]/80 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-between shadow-2xl"
                    >
                        <p className="text-xs text-gray-400 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            You have unsaved changes in the "{tabs.find(t => t.id === activeTab)?.label}" section.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={handleReset}
                                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-all"
                            >
                                Reset
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 min-w-[120px] justify-center"
                            >
                                {isSaving ? (
                                    <>
                                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                        Saving...
                                    </>
                                ) : "Save Changes"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
