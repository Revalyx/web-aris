import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Globe, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
              <img 
                src="/logoHorizontal.png" 
                alt="ArisTec Logo" 
                className="h-10 w-auto object-contain scale-150 origin-left filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed font-medium">
              Transformamos la visión de negocio en soluciones técnicas de alto rendimiento. Ingeniería pura, sin intermediarios, enfocada en la excelencia y la seguridad.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white hover:bg-primary-600 hover:border-primary-500 transition-all cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white hover:bg-primary-600 hover:border-primary-500 transition-all cursor-pointer">
                <Shield className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navegación</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group font-bold">
                  <ArrowRight className="w-4 h-4 mr-3 text-slate-700 group-hover:text-primary-500 transform group-hover:translate-x-1 transition-all" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group font-bold">
                  <ArrowRight className="w-4 h-4 mr-3 text-slate-700 group-hover:text-primary-500 transform group-hover:translate-x-1 transition-all" />
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group font-bold">
                  <ArrowRight className="w-4 h-4 mr-3 text-slate-700 group-hover:text-primary-500 transform group-hover:translate-x-1 transition-all" />
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Canales Directos</h3>
            <div className="space-y-6">
              <div className="flex items-center group cursor-default">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-4 border border-white/10 group-hover:bg-primary-900/30 group-hover:border-primary-700/50 transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Teléfono</span>
                  <p className="text-white font-bold">+34 900 123 456</p>
                </div>
              </div>

              <div className="flex items-center group cursor-default">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-4 border border-white/10 group-hover:bg-primary-900/30 group-hover:border-primary-700/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email</span>
                  <p className="text-white font-bold">negocio@aristec.es</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold tracking-tight">ArisTec Consultoría</span>. Ingeniería digital avanzada.
          </div>
          <div className="flex space-x-8">
            <Link to="#" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Privacidad</Link>
            <Link to="#" className="text-xs font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
