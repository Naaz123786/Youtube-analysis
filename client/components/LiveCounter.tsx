"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function LiveCounter({ initialValue, channelId }: { initialValue: number, channelId: string }) {
    const [count, setCount] = useState(initialValue);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        // Poll every 10 seconds for live updates
        const interval = setInterval(async () => {
            try {
                // In a real app, this would fetch from your backend which caches YouTube data
                // const res = await fetch(`/api/youtube/analytics/${channelId}`);
                // const data = await res.json();
                // if (data.stats.subscriberCount !== count) {
                //   setCount(data.stats.subscriberCount);
                //   triggerPulse();
                // }

                // Simulating a live update for demo purposes
                if (Math.random() > 0.7) {
                    setCount(prev => prev + Math.floor(Math.random() * 5));
                    triggerPulse();
                }
            } catch (error) {
                console.error("Failed to poll live counter", error);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [count, channelId]);

    const triggerPulse = () => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 2000);
    };

    return (
        <div className="glass p-6 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Live
                </span>
                <TrendingUp className="w-4 h-4 text-gray-500" />
            </div>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={count}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="text-4xl font-bold font-mono tracking-tighter"
                    >
                        {count.toLocaleString()}
                    </motion.p>
                </AnimatePresence>

                {isPulsing && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        className="absolute inset-0 bg-red-600/20 rounded-full blur-xl -z-10"
                    />
                )}
            </div>
            <p className="text-gray-500 text-xs mt-2">Active Subscribers</p>
        </div>
    );
}
