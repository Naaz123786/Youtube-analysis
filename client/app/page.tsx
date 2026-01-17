"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useSidebarStore } from "@/lib/store/useSidebarStore";
import { cn } from "@/lib/utils";
import { BarChart3, TrendingUp, Sparkles, Trophy, ChevronRight, PlayCircle, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white overflow-x-hidden selection:bg-teal-500/30">
      <Header />
      <Sidebar />

      <main
        className={cn(
          "pt-[72px] relative z-10 w-full transition-all duration-300 ease-in-out pr-8",
          isCollapsed ? "pl-[100px]" : "pl-[250px]"
        )}
      >

        {/* Ambient Background Glows */}
        <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-0 left-20 w-[600px] h-[600px] bg-teal-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="p-8 max-w-7xl mx-auto space-y-24 relative z-10">
          <HeroSection />
          <StatsStrip />
          <FeaturesSection />
          <CTASection />
        </div>

        <Footer />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative mt-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-sm font-medium text-teal-300 tracking-wide uppercase">AI-Powered Growth</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Master Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 animate-gradient-x">
              YouTube Success
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Unleash the potential of your channel with professional-grade analytics, AI-driven content ideas, and real-time competitor tracking.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all overflow-hidden flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                Start for Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold text-lg text-white backdrop-blur-sm transition-all flex items-center gap-3">
              <PlayCircle className="w-5 h-5 text-teal-400" />
              Watch Demo
            </button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs text-white">
                  {/* Placeholder avatars */}
                  <div className="w-full h-full bg-gradient-to-br from-teal-500 to-blue-600 rounded-full opacity-80" />
                </div>
              ))}
            </div>
            <p>Used by 10,000+ Creators</p>
          </div>
        </div>

        {/* Right Content - 3D/Glass Card Element */}
        <div className="relative perspective-1000">
          {/* Background glowing blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-500/20 to-purple-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative bg-[#0f1520]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out">
            {/* Mockup Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-gray-500">dashboard_preview.exe</div>
            </div>

            {/* Mockup Content */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Subscribers</p>
                  <h3 className="text-4xl font-bold text-white">124,592</h3>
                </div>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">+12.5%</div>
              </div>

              {/* Fake Chart */}
              <div className="h-40 flex items-end gap-2 px-2 pb-2 border-b border-l border-gray-700/50">
                {[40, 65, 45, 80, 55, 90, 75, 100, 85, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-teal-500/50 to-blue-500/50 rounded-t-sm hover:from-teal-400 hover:to-blue-400 transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-400 mb-1">Views (48h)</p>
                  <p className="text-xl font-bold text-white">482K</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-400 mb-1">Est. Revenue</p>
                  <p className="text-xl font-bold text-white">$4,295</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 bg-[#1a1f2e] p-4 rounded-2xl shadow-xl border border-white/10 animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Trending Now</p>
                <p className="text-sm font-bold text-white">#AIRevolution</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-[#1a1f2e] p-4 rounded-2xl shadow-xl border border-white/10 animate-float-slower">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Viral Score</p>
                <p className="text-sm font-bold text-white">98/100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { label: "Active Creators", value: "10K+", icon: Trophy },
    { label: "Data Points Processed", value: "5B+", icon: BarChart3 },
    { label: "Channels Scaled", value: "2500+", icon: TrendingUp },
    { label: "Creator Revenue", value: "$45M+", icon: Zap },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-1">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white/[0.03] border border-white/[0.05] p-6 rounded-2xl hover:bg-white/[0.05] transition-colors flex items-center gap-4 group">
          <div className="p-3 bg-teal-500/10 rounded-xl group-hover:bg-teal-500/20 transition-colors">
            <stat.icon className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesSection() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Everything you need to <span className="text-teal-400">Dominate</span></h2>
        <p className="text-gray-400">Powerful tools designed for serious content creators who want to scale fast.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard
          title="Deep Analytics"
          desc="Go beyond basic metrics. Understand *why* your videos perform and how to replicate success."
          icon={<BarChart3 />}
          color="blue"
        />
        <FeatureCard
          title="Competitor Spy"
          desc="Track your rivals in real-time. See their tags, growth strategy, and viral hits before anyone else."
          icon={<ShieldCheck />}
          color="teal"
        />
        <FeatureCard
          title="Thumbnail AI"
          desc="A/B test thumbnails before you post. Use AI to predict CTR and optimize for maximum clicks."
          icon={<Sparkles />}
          color="purple"
        />
      </div>
    </section>
  )
}

function FeatureCard({ title, desc, icon, color }: { title: string, desc: string, icon: React.ReactElement, color: 'blue' | 'teal' | 'purple' }) {
  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20",
    teal: "bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20",
    purple: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20",
  };

  return (
    <div className="group bg-[#0f1520] border border-gray-800 p-8 rounded-3xl hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorClasses[color]}`}>
        {/* Clone element to add class */}
        {React.cloneElement(icon as React.ReactElement, { className: "w-7 h-7" })}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>

      <div className="mt-8 flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
        Learn more <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  )
}

function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900/40 to-blue-900/40 border border-white/10 p-12 text-center space-y-8">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to explode your channel growth?</h2>
        <p className="text-lg text-gray-300 mb-8">Join thousands of creators who are already using our advanced analytics suite to dominate their niche.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-xl transition-colors shadow-lg shadow-teal-500/25">
            Get Started Now
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-sm transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-900 mt-20 bg-[#020408]">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">© 2024 YouTube Analytics Hub. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact Support</a>
        </div>
      </div>
    </footer>
  )
}

import React from "react";
