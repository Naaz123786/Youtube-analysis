"use client";

import Link from "next/link";
import {
  Youtube, BarChart3, Upload, TrendingUp, Play, ArrowRight, Check,
  Users, Eye, Video, Zap, Shield, Clock, Star, ChevronRight,
  Twitter, Linkedin, Github, Mail
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsStrip />
      <FeaturesSection />
      <DashboardPreview />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// Sticky Header
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AnalyticsHub</span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900">Features</Link>
            <Link href="#dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-900">Dashboard Preview</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</Link>
            <Link href="#resources" className="text-sm font-medium text-gray-700 hover:text-gray-900">Resources</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign In</Link>
            <Link href="/register" className="bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section - Split Layout
function HeroSection() {
  return (
    <section id="home" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-600">Trusted by 120K+ Creators</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Understand, Grow & Manage Your YouTube Channel <span className="text-red-600">Smarter</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Track subscribers, views, engagement, and publish content directly to YouTube — all from one powerful dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                <Play className="w-5 h-5" />
                Connect Your YouTube Channel
              </Link>
              <Link href="#dashboard" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                View Dashboard Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Channel Analytics</h3>
                <span className="text-sm text-green-600 font-medium">● Live</span>
              </div>

              {/* Subscriber Count */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 mb-4">
                <div className="text-sm text-gray-600 mb-2">Total Subscribers</div>
                <div className="text-4xl font-bold text-gray-900">124,532</div>
                <div className="text-sm text-green-600 font-medium mt-2">+2,341 this week</div>
              </div>

              {/* Views Graph */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-3">Views (Last 7 Days)</div>
                <div className="h-32 flex items-end gap-2">
                  {[45, 60, 55, 75, 65, 85, 95].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-red-600 to-red-400 rounded-t" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600">Avg Views</div>
                  <div className="text-lg font-bold text-gray-900">12.4K</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600">Engagement</div>
                  <div className="text-lg font-bold text-gray-900">8.2%</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600">Videos</div>
                  <div className="text-lg font-bold text-gray-900">184</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick Stats Strip
function StatsStrip() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "120K+ Creators" },
    { icon: <BarChart3 className="w-6 h-6" />, label: "Real-Time Analytics" },
    { icon: <Upload className="w-6 h-6" />, label: "Auto Publishing" },
    { icon: <Shield className="w-6 h-6" />, label: "Secure OAuth Login" },
  ];

  return (
    <section className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>
              <div className="font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section - Grid
function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-Time Subscriber Tracking",
      desc: "Monitor your subscriber count as it changes, with live updates every second."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Views Per Second Analytics",
      desc: "Track video views in real-time and understand peak viewing times."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Insights",
      desc: "Deep dive into demographics, watch time, and engagement patterns."
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Publish Videos from Dashboard",
      desc: "Upload videos directly to YouTube with custom thumbnails and metadata."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Reports",
      desc: "Generate detailed reports on channel growth and video performance."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Growth Suggestions",
      desc: "Get AI-powered recommendations to optimize your content strategy."
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Grow on YouTube</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful features designed for serious creators who want to scale their channels</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-red-200 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Dashboard Preview Section
function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">A Dashboard Built for Creators</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to manage and grow your YouTube channel in one place</p>
        </div>

        <div className="relative">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">Live Views</div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold">2,341</div>
                <div className="text-sm text-green-500 mt-2">+12% from yesterday</div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="text-sm text-gray-400 mb-4">Subscriber Growth</div>
                <div className="text-3xl font-bold">+1,204</div>
                <div className="text-sm text-gray-400 mt-2">Last 30 days</div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="text-sm text-gray-400 mb-4">Top Video</div>
                <div className="text-lg font-semibold">How to Grow on YouTube</div>
                <div className="text-sm text-gray-400 mt-2">45.2K views</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="text-sm text-gray-400 mb-4">Channel Performance</div>
              <div className="h-48 flex items-end gap-2">
                {[30, 45, 40, 60, 55, 75, 70, 85, 80, 95, 90, 100].map((height, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-red-600 to-red-400 rounded-t" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect your YouTube Channel",
      desc: "Securely link your channel using Google OAuth in just one click"
    },
    {
      number: "02",
      title: "Analyze Real-Time Performance",
      desc: "View live stats, engagement metrics, and audience insights"
    },
    {
      number: "03",
      title: "Publish & Optimize Content",
      desc: "Upload videos and get AI-powered suggestions to grow faster"
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-red-300 transition-colors">
                <div className="text-5xl font-bold text-red-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech YouTuber",
      image: "https://i.pravatar.cc/150?img=1",
      text: "AnalyticsHub helped me grow from 10K to 100K subscribers in just 6 months. The real-time insights are game-changing!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Gaming Creator",
      image: "https://i.pravatar.cc/150?img=2",
      text: "Best analytics tool I've used. The publishing feature saves me hours every week. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Lifestyle Vlogger",
      image: "https://i.pravatar.cc/150?img=3",
      text: "The audience insights helped me understand my viewers better and create content they actually want to see.",
      rating: 5
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Growing Creators</h2>
          <p className="text-xl text-gray-600">See what our users have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["1 YouTube Channel", "Basic Analytics", "5 Scheduled Posts/month", "Email Support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: ["5 YouTube Channels", "Advanced Analytics", "Unlimited Scheduled Posts", "Priority Support", "Custom Reports", "API Access"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      features: ["Unlimited Channels", "White-label Solution", "Dedicated Account Manager", "Custom Integrations", "SLA Guarantee", "Advanced Security"],
      cta: "Contact Sales",
      popular: false
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`bg-white rounded-2xl p-8 ${plan.popular ? 'border-2 border-red-600 shadow-2xl scale-105' : 'border border-gray-200'} relative`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-600 mb-2">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register" className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${plan.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-red-600 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Start Growing Your YouTube Channel Today</h2>
        <p className="text-xl text-red-100 mb-8">Join 120,000+ creators who are already scaling their channels with AnalyticsHub</p>
        <Link href="/register" className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-2xl">
          <Play className="w-6 h-6" />
          Get Started Free
        </Link>
        <p className="text-sm text-red-100 mt-6">No credit card required • Free forever plan available</p>
      </div>
    </section>
  );
}

// Full Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AnalyticsHub</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The ultimate platform for YouTube creators to manage, analyze, and grow their channels with powerful real-time insights.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2026 AnalyticsHub. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Made with ❤️ for YouTube Creators</p>
        </div>
      </div>
    </footer>
  );
}
