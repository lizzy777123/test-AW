import { motion } from 'motion/react';
import { Terminal, Shield, CheckCircle, GraduationCap, Building2, FileCheck, Verified, ArrowRight } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, text: 'MSc Data Science and Analytics' },
  { icon: Building2, text: 'MSc Accounting and Finance' },
  { icon: Building2, text: 'BA Accounting and Finance' },
  { icon: Verified, text: 'FCCA' },
  { icon: Terminal, text: 'Web Development Certification Lvl 3' },
];

const stats = [
  { value: '99.9%', label: 'Uptime Reliability' },
  { value: '4.2x', label: 'Avg. Conversion Lift' },
  { value: '0.4s', label: 'LCP Speed' },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 bg-surface px-4 py-2 rounded-full border border-outline"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-primary animate-pulse"></span>
            <span className="font-bold text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Hackney Roots / Global Vision</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Precision Engineering for Digital Dominance.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Born in the creative crucible of Hackney, East London, Awera is where high-performance engineering meets premium aesthetics. We architect growth engines for those who refuse to settle for average.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-square rounded-xl overflow-hidden technical-border relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b19c72f140ef?q=80&w=2670&auto=format&fit=crop" 
              alt="Studio Environment" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-primary/10 rounded-full blur-3xl -z-0"></div>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-surface-low py-24 border-y border-outline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface p-10 md:p-16 technical-border rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-emerald-primary mb-6 tracking-tight">Our Mission</h3>
                <p className="text-xl text-on-surface max-w-xl leading-relaxed">
                  To bridge the gap between technical complexity and intuitive user experiences. We empower high-ticket clients with the digital infrastructure required to scale aggressively.
                </p>
              </div>
              <div className="flex gap-12 mt-12 flex-wrap">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-highest p-10 md:p-12 technical-border rounded-xl emerald-glow">
              <Terminal className="text-emerald-primary text-4xl mb-8" size={48} />
              <h4 className="text-2xl font-bold mb-4">Technical Precision</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Every line of code we write is scrutinized for performance, accessibility, and SEO. We use modern stacks—Tailwind, React, and Edge compute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 w-full max-w-md">
            <div className="aspect-[4/5] bg-surface-highest technical-border rounded-xl overflow-hidden relative emerald-glow-strong group">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                alt="Lizzy - Founder" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Meet the Founder</h2>
            <h3 className="text-3xl font-bold text-emerald-primary">Lizzy</h3>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
              With a unique background spanning advanced data science, financial architecture, and technical web engineering, Lizzy brings a level of analytical rigor to web development that is rare in the creative industry.
            </p>
            <div className="space-y-6 pt-8 border-t border-outline">
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-on-surface">Credentials & Expertise</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {credentials.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-on-surface-variant">
                    <item.icon className="text-emerald-primary shrink-0" size={20} />
                    <span className="text-xs font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-primary text-background px-8 py-4 rounded font-bold uppercase tracking-widest text-sm flex items-center gap-2"
              >
                Work with Lizzy <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
