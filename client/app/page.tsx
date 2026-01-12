"use client";

import { motion } from "framer-motion";
import { Youtube, BarChart3, Upload, Shield, Zap, TrendingUp, Play } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/50">
              <Youtube className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">AnalyticsHub</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-red-500 transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-red-600/50 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Real-time Analytics Platform</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="gradient-text">Master Your</span>
              <br />
              <span className="text-white">YouTube Growth</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              The ultimate dashboard for creators. Track live stats, analyze performance in real-time,
              and publish content directly—all from one powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/register"
                className="group w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Connect Your Channel
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto glass glass-hover px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
              >
                Explore Features
              </Link>
            </div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-black gradient-text mb-2">10K+</div>
                <div className="text-sm text-gray-500">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text mb-2">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text mb-2">24/7</div>
                <div className="text-sm text-gray-500">Live Tracking</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">
              Everything You Need to <span className="gradient-text">Dominate</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful features designed specifically for serious YouTube creators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Live Analytics"
              description="Track subscriber count, views, and engagement in real-time with zero lag. Get instant insights as they happen."
              delay={0.1}
            />
            <FeatureCard
              icon={<Upload className="w-8 h-8" />}
              title="Direct Publishing"
              description="Upload videos with custom thumbnails, tags, and descriptions directly from our sleek dashboard."
              delay={0.2}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure OAuth"
              description="Your tokens are encrypted and stored safely. You maintain full control over your channel at all times."
              delay={0.3}
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Growth Insights"
              description="Understand what's working with detailed analytics and performance metrics that matter."
              delay={0.4}
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Lightning Fast"
              description="Built with modern tech for blazing-fast performance. No more waiting for data to load."
              delay={0.5}
            />
            <FeatureCard
              icon={<Youtube className="w-8 h-8" />}
              title="Multi-Channel"
              description="Manage multiple YouTube channels from a single dashboard. Perfect for agencies and teams."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-6">
              Ready to <span className="gradient-text">Level Up?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already using AnalyticsHub to grow their channels faster.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 px-10 py-5 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-red-600/50 transition-all"
            >
              <Play className="w-5 h-5" />
              Start Free Today
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glass glass-hover p-8 rounded-2xl group cursor-pointer"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-red-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
