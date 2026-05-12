import { motion } from 'motion/react';
import { ArrowDown, TrendingUp, Zap, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-primary opacity-5 blur-[120px] rounded-full"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 max-w-3xl"
        >
          <span className="text-emerald-primary font-bold text-xs tracking-[0.2em] uppercase mb-6 inline-block">High-Performance Engineering</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Premium Web Solutions for <span className="text-emerald-primary">Aggressive Growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            We don't just build websites; we engineer revenue-generating assets. Transparent pricing, technical rigor, and zero fluff.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#expertise"
              className="bg-emerald-primary text-background px-8 py-4 rounded font-bold uppercase tracking-widest text-sm emerald-glow hover:brightness-110 transition-all flex items-center gap-2"
            >
              Our Expertise <ArrowDown size={18} />
            </a>
            <Link 
              to="/contact"
              className="border border-emerald-primary text-emerald-primary px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-emerald-primary/10 transition-all"
            >
              Book Strategy Call
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Expertise</h2>
          <p className="text-on-surface-variant text-lg">Data-driven strategies meets technical luxury.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* SEO Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass-card border border-outline p-8 md:p-12 rounded-xl flex flex-col md:flex-row gap-12 group hover:border-emerald-primary transition-all duration-300"
          >
            <div className="flex-1">
              <div className="w-14 h-14 bg-emerald-primary/10 flex items-center justify-center rounded-lg mb-8">
                <TrendingUp className="text-emerald-primary" size={28} />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">SEO Domination</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                High-ticket SEO focus. We prioritize buyer-intent keywords that drive actual sales, not just vanity traffic metrics.
              </p>
              <ul className="space-y-4">
                {['Semantic Keyword Research', 'Technical Speed Optimization', 'High-Authority Link Acquisition'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-on-surface">
                    <CheckCircle size={16} className="text-emerald-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 overflow-hidden rounded-lg bg-surface-highest/50">
               <img 
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                 alt="Analytics" 
                 className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
               />
            </div>
          </motion.div>

          {/* Strategy Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card border border-outline p-8 md:p-12 rounded-xl border-outline hover:border-emerald-primary transition-all duration-300 flex flex-col"
          >
            <div className="w-14 h-14 bg-emerald-primary/10 flex items-center justify-center rounded-lg mb-8">
              <Zap className="text-emerald-primary" size={28} />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">Conversion Strategy</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              We map out the entire customer journey to ensure every pixel serves a purpose: conversion.
            </p>
            <div className="mt-auto pt-8 border-t border-outline">
              <p className="text-emerald-primary font-bold text-xs uppercase tracking-widest mb-2">Success Rate</p>
              <p className="text-4xl font-bold">98.4%</p>
            </div>
          </motion.div>

          {/* Web Design Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-12 glass-card border border-outline p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center gap-8 hover:border-emerald-primary transition-all group"
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Web Design & Architecture</h3>
              <p className="text-on-surface-variant text-lg max-w-2xl">
                Custom, secure, and lightning-fast. We use modern stacks to ensure your site loads in under 1 second.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 shrink-0">
              <div className="bg-surface-high p-6 rounded border border-outline flex flex-col items-center gap-2 group-hover:border-emerald-primary transition-colors">
                <Smartphone size={24} className="text-emerald-primary" />
                <p className="text-xs font-bold uppercase tracking-widest">Mobile First</p>
              </div>
              <div className="bg-surface-high p-6 rounded border border-outline flex flex-col items-center gap-2 group-hover:border-emerald-primary transition-colors">
                <Zap size={24} className="text-emerald-primary" />
                <p className="text-xs font-bold uppercase tracking-widest">Edge Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="bg-surface-high border border-outline p-12 md:p-24 rounded-2xl relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-emerald-primary opacity-5 pointer-events-none"></div>
          <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight">Ready for a Technical Upgrade?</h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Stop losing revenue to slow, outdated digital assets. Let's build something that dominates your market.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="bg-background border border-outline rounded px-6 py-4 focus:outline-none focus:border-emerald-primary transition-colors w-full md:w-80"
            />
            <button className="bg-emerald-primary text-background px-8 py-4 rounded font-bold uppercase tracking-widest text-sm w-full md:w-auto emerald-glow hover:scale-105 transition-all">
              Secure Your Spot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
