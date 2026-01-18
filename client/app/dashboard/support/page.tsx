"use client";

import { useState } from "react";
import {
    Search,
    ChevronDown,
    BookOpen,
    MessageCircle,
    Mail,
    Video,
    ShieldCheck,
    Settings as SettingsIcon,
    HelpCircle,
    ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How do I connect my YouTube channel?",
        answer: "You can connect your YouTube channel by navigating to the Settings page and clicking on the 'Connect YouTube' button. Follow the OAuth prompt to authorize our application to access your channel data.",
        category: "Getting Started"
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we use industry-standard encryption and follow YouTube's API best practices. We only request the minimum permissions necessary to provide our services and never store your Google password.",
        category: "Security"
    },
    {
        question: "Can I manage multiple channels?",
        answer: "Currently, our base plan supports one channel. Pro and Business users can manage up to 5 and 20 channels respectively. You can upgrade your plan in the Billing section.",
        category: "Account"
    },
    {
        question: "How often does my analytics data update?",
        answer: "Real-time analytics are synced every 15 minutes. Daily and monthly aggregations are processed at midnight UTC.",
        category: "Analytics"
    },
    {
        question: "How do I upload a video with specific tags?",
        answer: "In the 'Upload Content' page, you can enter tags in the metadata section separated by commas. Our system will automatically format them for YouTube's requirements.",
        category: "Content"
    }
];

const categories = [
    { icon: BookOpen, title: "Getting Started", desc: "Learn the basics of our platform." },
    { icon: Video, title: "Content Manager", desc: "How to upload and track your videos." },
    { icon: ShieldCheck, title: "Security & Privacy", desc: "Everything about your data safety." },
    { icon: SettingsIcon, title: "Account & Billing", desc: "Manage your subscription and profile." },
];

export default function SupportPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showComingSoon, setShowComingSoon] = useState(false);

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto pb-20">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-white mb-4">How can we help?</h1>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Search our knowledge base or browse categories below to find answers to your questions.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Describe your issue..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#141b25] border border-gray-800 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all shadow-xl shadow-black/20"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-[#141b25] border border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer group"
                    >
                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <cat.icon className="w-5 h-5 text-blue-500" />
                        </div>
                        <h3 className="text-sm font-bold text-white mb-2">{cat.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4">{cat.desc}</p>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            View Articles <ArrowRight className="w-3 h-3" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* FAQs */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-500" />
                    Frequently Asked Questions
                </h2>
                <div className="bg-[#141b25] border border-gray-800 rounded-3xl overflow-hidden divide-y divide-gray-800">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, idx) => (
                            <div key={idx} className="group">
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{faq.category}</span>
                                        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{faq.question}</span>
                                    </div>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-gray-600 transition-transform duration-300",
                                        openIndex === idx && "rotate-180 text-blue-500"
                                    )} />
                                </button>
                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center text-gray-500">
                            No matching questions found. Try a different search term.
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Section */}
            <div className="mt-20 flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-2">Still need help?</h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                        Can't find what you're looking for? Our support team is available 24/7 to assist you.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:support@youtubeanalytics.com"
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                        >
                            <Mail className="w-4 h-4" /> Email Support
                        </a>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-bold rounded-xl border border-white/10 transition-all">
                            <MessageCircle className="w-4 h-4" /> Live Chat
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-80 bg-[#141b25] border border-gray-800 p-8 rounded-3xl flex flex-col justify-center">
                    <p className="text-xs text-gray-500 text-center mb-4 uppercase tracking-widest font-bold">Community</p>
                    <p className="text-sm text-center text-gray-400 leading-relaxed mb-6">Join 5,000+ creators in our Discord community.</p>
                    <button
                        onClick={() => setShowComingSoon(true)}
                        className="w-full py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white text-center text-sm font-bold rounded-xl transition-all"
                    >
                        Join Discord
                    </button>
                </div>
            </div>

            {/* Coming Soon Pop-up */}
            <AnimatePresence>
                {showComingSoon && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            className="bg-[#141b25] border border-gray-800 max-w-sm w-full p-8 rounded-3xl text-center shadow-2xl"
                        >
                            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MessageCircle className="text-blue-500 w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Coming Soon!</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our community Discord server is currently being set up. We'll notify you once it's ready for creators to join!
                            </p>
                            <button
                                onClick={() => setShowComingSoon(false)}
                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Got it
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
