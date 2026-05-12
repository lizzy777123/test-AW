import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Cpu, Wallet, Share2 } from 'lucide-react';

const projects = [
  {
    title: 'The Monolith Collective',
    location: 'London, UK',
    description: 'A high-performance e-commerce engine for luxury architectural components. Achieving a 40% increase in checkout velocity.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
    tags: ['Next.js', 'Web3 Auth', 'GSAP'],
    color: 'emerald',
    size: 'large'
  },
  {
    title: 'Lumina Systems',
    location: 'San Francisco, CA',
    description: 'SaaS dashboard for distributed cloud management. Focused on technical precision and data density.',
    icon: Cpu,
    tags: ['Dashboard', 'Cloud'],
    size: 'small'
  },
  {
    title: 'Vertex Protocol',
    location: 'Singapore',
    description: 'Real-time trading terminal with millisecond latency requirements and custom canvas rendering.',
    icon: Share2,
    tags: ['Trading', 'Fintech'],
    size: 'medium'
  },
  {
    title: 'Oasis Wealth',
    location: 'Dubai, UAE',
    description: 'Exclusive wealth management portal featuring dark-mode minimalism and high-security client interfaces.',
    icon: Wallet,
    tags: ['Wealth', 'Security'],
    size: 'horizontal'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 py-20 flex flex-col items-center text-center max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block px-4 py-1 bg-surface-high border border-outline rounded-full mb-8"
        >
          <span className="text-emerald-primary font-bold text-[10px] uppercase tracking-[0.3em]">Selected Works</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight max-w-3xl leading-tight"
        >
          Engineering <span className="text-emerald-primary">Digital Growth</span> at Scale.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          We combine technical rigor with aggressive aesthetic direction to build web platforms that dominate their respective markets.
        </motion.p>
      </section>

      {/* Grid */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Featured */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 group bg-surface border border-outline rounded-xl overflow-hidden hover:border-emerald-primary transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={projects[0].image} 
                alt="Case Study" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 bg-surface-lowest/80 backdrop-blur px-3 py-1 rounded-full border border-outline mb-4">
                  <MapPin size={12} className="text-emerald-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{projects[0].location}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">{projects[0].title}</h3>
              </div>
              <div className="absolute top-8 right-8">
                <div className="w-12 h-12 rounded-full bg-emerald-primary text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">{projects[0].description}</p>
              <div className="flex gap-2">
                {projects[0].tags.map(tag => (
                  <span key={tag} className="bg-surface-highest text-on-surface px-4 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Secondary Column */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 group bg-surface border border-outline rounded-xl overflow-hidden hover:border-emerald-primary transition-all duration-300 flex flex-col"
          >
            <div className="aspect-square relative bg-surface-highest/50 flex items-center justify-center overflow-hidden">
               <div className="w-48 h-48 rounded-full border border-dashed border-emerald-primary opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  {projects[1].icon && (
                    (() => {
                      const Icon = projects[1].icon;
                      return <Icon className="text-emerald-primary opacity-40 scale-[3]" />;
                    })()
                  )}
               </div>
               <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur px-3 py-1 rounded-full border border-outline mb-3">
                  <MapPin size={10} className="text-emerald-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{projects[1].location}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{projects[1].title}</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{projects[1].description}</p>
              <div className="flex gap-2">
                {projects[1].tags.map(tag => (
                  <span key={tag} className="border border-outline text-on-surface-variant px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">#{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Grid Items */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-5 group bg-surface border border-outline rounded-xl p-10 hover:border-emerald-primary transition-all duration-300"
          >
            <div className="flex items-center gap-2 bg-surface-high px-3 py-1 rounded-full border border-outline mb-6 w-fit">
              <MapPin size={10} className="text-emerald-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{projects[2].location}</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">{projects[2].title}</h3>
            <p className="text-on-surface-variant text-base mb-8 leading-relaxed">{projects[2].description}</p>
            <div className="w-full h-40 bg-surface-high rounded-xl border border-outline flex items-center justify-center group-hover:border-emerald-primary transition-colors">
               {projects[2].icon && (
                  (() => {
                    const Icon = projects[2].icon;
                    return <Icon className="text-emerald-primary opacity-20" size={64} />;
                  })()
               )}
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-7 group bg-surface border border-outline rounded-xl flex overflow-hidden hover:border-emerald-primary transition-all duration-300"
          >
            <div className="w-2/5 bg-surface-highest/30 border-r border-outline flex items-center justify-center">
              {projects[3].icon && (
                (() => {
                  const Icon = projects[3].icon;
                  return <Icon className="text-emerald-primary opacity-20" size={80} />;
                })()
              )}
            </div>
            <div className="w-3/5 p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 bg-surface-high px-3 py-1 rounded-full border border-outline mb-6 w-fit">
                <MapPin size={10} className="text-emerald-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{projects[3].location}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{projects[3].title}</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">{projects[3].description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 text-center border-t border-outline">
        <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight">Ready to scale your digital presence?</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">
          Our portfolio is a testament to our engineering rigor. Let's discuss how we can apply these principles to your brand.
        </p>
        <Link to="/contact">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-primary text-background px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest emerald-glow"
          >
            Start a Project
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
