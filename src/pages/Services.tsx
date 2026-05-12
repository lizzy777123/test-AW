import { motion } from 'motion/react';
import { Rocket, Search, Cpu, Shield, Zap, Check, ArrowRight } from 'lucide-react';

const pricingLevels = [
  {
    name: 'The Launch',
    price: '$2,500',
    description: 'Ideal for high-end startups looking to establish a premium digital footprint quickly.',
    features: ['5 High-Conversion Pages', 'Technical SEO Foundation', 'Mobile Optimization', '2 Rounds of Revision'],
    button: 'Get Started',
    premium: false
  },
  {
    name: 'The Growth Engine',
    price: '$5,000',
    description: 'Our flagship engineering package designed for established brands scaling their revenue.',
    features: ['Full Strategic Blueprint', '12+ Custom Layouts', 'Advanced Lead Systems', 'Content Strategy Session', '1 Month Post-Launch Support'],
    button: 'Choose Growth',
    premium: true,
    tag: 'MOST POPULAR'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke technical ecosystems for global enterprises requiring complex integrations.',
    features: ['Custom Web Apps & Portals', 'API & CRM Integrations', 'Enterprise-Grade Security', 'Dedicated Project Architect'],
    button: 'Book Consultation',
    premium: false
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
        >
          <span className="text-emerald-primary font-bold text-xs tracking-[0.3em] uppercase mb-6 inline-block">Services & Pricing</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight">Transparent <span className="text-emerald-primary">Investment.</span></h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose the tier that aligns with your growth trajectory. Transparent pricing, technical rigor, and zero fluff.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto border-t border-outline">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Service */}
          <div className="md:col-span-8 bg-surface border border-outline p-10 md:p-16 rounded-xl flex flex-col justify-between group hover:border-emerald-primary transition-all duration-300">
            <div>
              <Rocket className="text-emerald-primary mb-8" size={48} />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Done-For-You Websites</h2>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
                Complete digital infrastructure designed to convert high-ticket leads while you focus on running your business. Zero technical headache, 100% performance.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <span className="text-emerald-primary font-bold uppercase tracking-widest text-sm">Explore Details</span>
              <ArrowRight className="text-emerald-primary" size={20} />
            </div>
          </div>

          {/* Secondary Service */}
          <div className="md:col-span-4 bg-surface border border-outline p-10 rounded-xl group hover:border-emerald-primary transition-all duration-300">
            <Search className="text-emerald-primary mb-8" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">SEO Mastery</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Dominate your local search results with aggressive, white-hat technical SEO that drives intent-rich traffic.
            </p>
            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-on-surface">
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-primary" /> Local Authority</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-primary" /> Keyword Dominance</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-emerald-primary" /> Revenue Focused</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="bg-surface-lowest px-6 py-24 border-y border-outline">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingLevels.map((level) => (
              <motion.div 
                key={level.name}
                whileHover={{ y: -10 }}
                className={`relative p-10 rounded-xl border flex flex-col ${
                  level.premium 
                  ? 'bg-surface-highest border-2 border-emerald-primary emerald-glow' 
                  : 'bg-surface border-outline hover:border-emerald-primary'
                } transition-all duration-300`}
              >
                {level.tag && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-primary text-background px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
                    {level.tag}
                  </div>
                )}
                <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-8 ${level.premium ? 'text-emerald-primary' : 'text-on-surface-variant'}`}>
                  {level.name}
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold tracking-tight">{level.price}</span>
                  {level.price !== 'Custom' && <span className="text-on-surface-variant text-sm ml-2">/project</span>}
                </div>
                <p className="text-on-surface-variant text-sm mb-10 leading-relaxed min-h-[3rem]">
                  {level.description}
                </p>
                <ul className="space-y-5 mb-12 flex-1">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex gap-4 text-xs font-medium">
                      <Check size={16} className="text-emerald-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded font-bold uppercase tracking-widest text-xs transition-all ${
                  level.premium 
                  ? 'bg-emerald-primary text-background hover:brightness-110' 
                  : 'border border-emerald-primary text-emerald-primary hover:bg-emerald-primary hover:text-background'
                }`}>
                  {level.button}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: 'Core Web Vitals', desc: 'Blazing fast load speeds guaranteed.' },
            { icon: Shield, title: 'Military Security', desc: 'Encrypted, secure, and monitored 24/7.' },
            { icon: Zap, title: 'Conversion Opt', desc: 'Psychology-led design for max ROAS.' }
          ].map((item) => (
            <div key={item.title} className="bg-surface-high border border-outline p-10 rounded-xl text-center group hover:border-emerald-primary transition-all">
              <div className="w-16 h-16 rounded-full bg-emerald-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <item.icon className="text-emerald-primary" size={28} />
              </div>
              <h3 className="font-bold text-emerald-primary text-xs uppercase tracking-[0.2em] mb-4">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
