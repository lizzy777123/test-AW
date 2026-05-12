import { motion } from 'motion/react';
import { Search, Plus, TrendingUp, Clock, Palette, CreditCard, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'How does Awera ensure my site ranks on Google?',
    answer: 'We don’t just "do SEO"—we engineer it into the foundation. Our technical SEO stack includes semantic HTML architecture, Core Web Vitals optimization, and automated Schema markup.',
    category: 'SEO'
  },
  {
    id: 2,
    question: 'Standard enterprise build timelines?',
    answer: 'Standard enterprise builds typically take 6-10 weeks. Lean landing pages or MVP prototypes can be launched in as little as 14 business days.',
    category: 'Timeline'
  },
  {
    id: 3,
    question: 'Custom Design vs. Templates?',
    answer: 'We build 100% custom from the ground up. Templates restrict growth; our engineered components scale with your business needs without carrying unnecessary bloat.',
    category: 'Technical'
  },
  {
    id: 4,
    question: 'What is the typical investment for a premium build?',
    answer: 'Our projects start at $2,500 for lean setups and scale upwards based on complexity. Most clients invest in end-to-end digital transformations.',
    category: 'Pricing'
  }
];

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24">
      <section className="px-6 py-20 flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-high border border-outline rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-primary animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-primary uppercase tracking-widest">Support & Insights</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight">Expert Answers for <span className="text-emerald-primary">Scale.</span></h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl">
            Transparent information about our engineering workflow and SEO strategies.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="p-8 rounded-xl bg-surface border border-outline flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            <input 
              type="text" 
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background border border-outline rounded p-4 pl-12 focus:outline-none focus:border-emerald-primary transition-colors text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Technical', 'SEO', 'Timeline', 'Pricing'].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-emerald-primary text-background' 
                  : 'bg-surface-highest text-on-surface-variant hover:text-emerald-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredFaqs.map((faq, idx) => (
            <motion.div 
              key={faq.id}
              layout
              className={`${idx % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'} p-10 rounded-xl glass-card border border-outline flex flex-col justify-between hover:border-emerald-primary transition-all group`}
            >
              <div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">{faq.question}</h3>
                 <p className="text-on-surface-variant text-base leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
