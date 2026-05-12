import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'FAQs', path: '/faqs' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-outline">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 bg-emerald-primary rounded flex items-center justify-center font-bold text-background text-xl">
            A
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Awera <span className="text-emerald-primary">Web Agency</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-emerald-primary' : 'text-on-surface-variant hover:text-emerald-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-emerald-primary text-background px-6 py-2 rounded font-bold hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wider"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-surface-lowest border-b border-outline p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-bold uppercase tracking-wider ${
                    isActive ? 'text-emerald-primary' : 'text-on-surface'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-emerald-primary text-background px-6 py-3 rounded font-bold text-center uppercase tracking-wider"
            >
              Let's Talk
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-surface-lowest border-t border-outline pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-emerald-primary rounded flex items-center justify-center font-bold text-background">
                A
              </div>
              <span className="font-bold text-lg tracking-tight">Awera</span>
            </Link>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Engineering high-performance digital assets for aggressive growth. Born in Hackney, serving the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-on-surface-variant hover:text-emerald-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-on-surface-variant hover:text-emerald-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-on-surface-variant hover:text-emerald-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-emerald-primary text-xs mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-on-surface-variant hover:text-emerald-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-on-surface-variant hover:text-emerald-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-emerald-primary text-xs mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/faqs" className="text-on-surface-variant hover:text-emerald-primary transition-colors">FAQs</Link></li>
              <li><a href="#" className="text-on-surface-variant hover:text-emerald-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-emerald-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-emerald-primary text-xs mb-6">Location</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              123 Mare Street<br />
              Hackney, London<br />
              E8 4RR, United Kingdom
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant uppercase tracking-widest">
          <p>© 2024 Awera Web Agency. All rights reserved.</p>
          <p>Built with Precision for Growth.</p>
        </div>
      </div>
      
      {/* WhatsApp Widget */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-emerald-primary text-background p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 bg-surface-high border border-outline px-4 py-2 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
          Chat with us
        </span>
      </a>
    </footer>
  );
}
