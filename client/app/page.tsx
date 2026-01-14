"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { BarChart3, TrendingUp, Sparkles, Trophy, ChevronRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-app-dark)] font-sans text-white">
      <Sidebar />

      <main className="ml-[260px]">
        <Header />

        <div className="p-8">
          {/* Breadcrumb / Tag */}
          <div className="mb-6">
            <span className="bg-[var(--color-brand-teal)] text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,196,140,0.5)]">
              Channel Growth Strategy
            </span>
          </div>

          <HeroSection />
        </div>
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#0f1520] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-extrabold text-[var(--color-brand-teal)] mb-2 tracking-tight">
            YOUTUBE MASTERY
          </h1>
          <h2 className="text-4xl font-bold text-white mb-6">
            Professional Analytics Suite
          </h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
            Advanced AI-powered analytics to track subscribers, views, and revenue with
            customized growth plans and smart content suggestions.
          </p>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6 text-[var(--color-brand-teal)]" />}
              title="Real-time Tracking"
              desc="Live view counts"
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-[var(--color-brand-teal)]" />}
              title="AI Content Ideas"
              desc="Viral topic suggestions"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-blue-400" />}
              title="Competitor Analysis"
              desc="Track rival growth"
            />
            <FeatureCard
              icon={<Trophy className="w-6 h-6 text-green-400" />}
              title="Revenue Projection"
              desc="Forecast earnings"
            />
          </div>

          {/* Pricing & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-xl text-gray-500 line-through">$59</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold uppercase">
                  50% OFF
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-[var(--color-brand-teal)] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00b380] transition-all shadow-[0_0_20px_rgba(0,196,140,0.3)] flex items-center gap-2">
                Get Started
                <ChevronRight className="w-5 h-5" />
              </button>

              <button className="text-gray-300 font-medium hover:text-white flex items-center gap-2 px-4">
                View Demo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex items-end justify-center lg:justify-end">
          {/* Badge */}
          <div className="absolute top-10 right-0 z-20">
            <span className="bg-[var(--color-brand-teal)] text-black font-bold px-4 py-1.5 rounded-lg text-sm shadow-lg">
              Top Rated
            </span>
          </div>

          {/* Person Image Placeholder */}
          {/* Since we don't have the exact image asset, I'll use a high-quality placeholder or a div if image fails */}
          <div className="relative z-10 w-[80%] max-w-[400px]">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE03328euyH2w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691993418855?e=1742428800&v=beta&t=Z1I-FjYlOqCsq1k8T_ZtWfG6r7z15rM5h6_x6x6x6x6"
              alt="Sanchit Jain"
              className="w-full h-auto drop-shadow-2xl mask-image-gradient"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />

            {/* Name Card Overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0f1520]/90 backdrop-blur border border-gray-700 rounded-xl px-6 py-3 text-center min-w-[200px] shadow-2xl">
              <h3 className="text-white font-bold text-lg">Alex Chen</h3>
              <p className="text-gray-400 text-sm">Growth Expert</p>
            </div>
          </div>

          {/* Glow Effect behind person */}
          <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Bottom Dots/Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-8 h-2 bg-red-500 rounded-full" />
        <div className="w-2 h-2 bg-gray-600 rounded-full" />
        <div className="w-2 h-2 bg-gray-600 rounded-full" />
        <div className="w-2 h-2 bg-gray-600 rounded-full" />
        <div className="w-2 h-2 bg-gray-600 rounded-full" />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-gray-800/50 border border-gray-700/50 p-4 rounded-xl flex flex-col gap-2 hover:bg-gray-800/80 transition-colors">
      <div className="bg-gray-900/50 w-fit p-2 rounded-lg mb-1">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white text-sm">{title}</h4>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
