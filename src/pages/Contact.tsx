import { motion } from 'motion/react';
import { MapPin, Clock, Send, Calendar, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-emerald-primary/10 text-emerald-primary font-bold text-xs rounded-full mb-8 border border-emerald-primary/20 tracking-widest uppercase">READY TO SCALE?</span>
            <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight">LET'S TALK about your next big move.</h2>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
              Whether you're looking for a bespoke web application or a high-performance e-commerce platform, our Hackney studio is ready to build your digital future.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-primary/5 rounded-xl blur-2xl group-hover:bg-emerald-primary/10 transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop" 
              alt="Workspace" 
              className="relative w-full aspect-square object-cover rounded-xl border border-outline" 
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Form */}
          <div className="md:col-span-8 bg-surface rounded-xl border border-outline p-10 md:p-16 hover:border-emerald-primary transition-all duration-300">
            <h3 className="text-2xl md:text-4xl font-bold mb-10 tracking-tight">Start a Project</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-surface-high border border-outline rounded p-4 focus:outline-none focus:border-emerald-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-surface-high border border-outline rounded p-4 focus:outline-none focus:border-emerald-primary transition-colors"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Project Brief</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your goals..." 
                  className="bg-surface-high border border-outline rounded p-4 focus:outline-none focus:border-emerald-primary transition-colors resize-none"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-emerald-primary text-background px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 emerald-glow"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="bg-surface rounded-xl border border-outline p-10">
              <div className="w-12 h-12 bg-emerald-primary/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-emerald-primary" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Hackney Studio</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                123 Mare Street<br />
                Hackney, London<br />
                E8 4RR, United Kingdom
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-outline p-10">
              <div className="w-12 h-12 bg-emerald-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-emerald-primary" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Studio Hours</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Mon — Fri: 09:00 - 18:00<br />
                Sat — Sun: By Appointment
              </p>
            </div>
          </div>

          {/* Calendly */}
          <div className="md:col-span-12 bg-surface-high rounded-xl border border-outline overflow-hidden">
            <div className="p-10 border-b border-outline flex justify-between items-center bg-surface">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Book a Discovery Call</h3>
                <p className="text-on-surface-variant text-sm">Pick a slot that works for you via Calendly.</p>
              </div>
              <Calendar className="text-emerald-primary" size={32} />
            </div>
            <div className="h-[400px] bg-surface-lowest flex items-center justify-center relative group">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-primary via-transparent to-transparent"></div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">Calendly Widget Embedded Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
