"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Zap, TrendingUp } from "lucide-react";

const slides = [
    {
        icon: Sparkles,
        title: "Pro Tip",
        desc: "Use high-contrast thumbnails to boost CTR by up to 15%.",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10"
    },
    {
        icon: Zap,
        title: "Trending",
        desc: "Shorts usage is up 40% in your niche this week.",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        icon: TrendingUp,
        title: "Growth Hack",
        desc: "Reply to comments within 1 hour to increase engagement.",
        color: "text-green-400",
        bg: "bg-green-400/10"
    }
];

export default function SidebarSlider({ isCollapsed }: { isCollapsed: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    if (isCollapsed) return null; // Don't show in collapsed mode

    const currentSlide = slides[currentIndex];

    return (
        <div className="mx-3 mt-auto mb-4 relative group">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${currentSlide.bg} blur-2xl rounded-full transition-colors duration-500`} />

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                        <div className={`p-1.5 rounded-lg ${currentSlide.bg}`}>
                            <currentSlide.icon className={`w-4 h-4 ${currentSlide.color}`} />
                        </div>
                        <div className="flex gap-1">
                            {slides.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1 transition-all duration-300">{currentSlide.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed min-h-[40px] transition-all duration-300">
                        {currentSlide.desc}
                    </p>
                </div>

                {/* Navigation Buttons (Visible on Hover) */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-1 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
