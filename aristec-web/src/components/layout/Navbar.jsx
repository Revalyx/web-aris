import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'glass-dark py-3'
        : 'bg-transparent py-6'
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logoHorizontal.png" 
              alt="ArisTec Logo" 
              className={`h-8 md:h-10 w-auto object-contain origin-left transition-all duration-700 ease-in-out ${
                isScrolled 
                  ? 'scale-[1.3] md:scale-[1.8] filter brightness-0 invert opacity-90' 
                  : 'scale-[1.8] md:scale-[3.5] filter brightness-100'
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                  isScrolled ? 'text-white/80 hover:text-white' : 'text-slate-900 hover:text-primary-700'
                } ${location.pathname === link.path ? (isScrolled ? 'text-primary-400' : 'text-primary-700') : ''}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
            
            <Link
              to="/contacto"
              className={`relative overflow-hidden px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 flex items-center shadow-lg ${
                isScrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-primary-900/20' 
                  : 'bg-slate-900 text-white hover:bg-primary-700 shadow-slate-900/20'
              }`}
            >
              <span className="relative z-10">Agendar Consultoría</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-white' : 'text-slate-900'}`}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-dark absolute top-full left-0 w-full shadow-2xl border-t border-white/5 overflow-hidden"
        >
          <div className="px-6 py-10 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-4 rounded-2xl text-xl font-black uppercase tracking-tighter ${
                  location.pathname === link.path
                    ? 'text-primary-400 bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-5 text-center bg-primary-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary-600/20"
              >
                Empezar Proyecto
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
