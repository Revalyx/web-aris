import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, ShieldCheck, Database, TerminalSquare, Smartphone, LayoutDashboard, Sparkles, Fingerprint, Zap, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const expertise = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Engineering",
      desc: "Desarrollo de arquitecturas robustas bajo estándares de alta disponibilidad.",
      tags: ["Java Spring", "Laravel", "React"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Automation",
      desc: "Optimización de procesos operativos y analítica avanzada para la toma de decisiones.",
      tags: ["Pentaho ETL", "Python", "Power BI"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cyber & Security",
      desc: "Blindaje de activos digitales mediante monitorización SIEM y auditorías críticas.",
      tags: ["Wazuh", "Sentinel", "Pentesting"]
    }
  ];

  const projects = [
    {
      title: "API REST Gestionada",
      category: "Seguridad y Backend",
      image: "/images/project_api.png",
      icon: <TerminalSquare className="w-6 h-6" />
    },
    {
      title: "Aplicación Nativa Móvil",
      category: "Android & Kotlin",
      image: "/images/project_mobile.png",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Automatización & ERP",
      category: "Python & Bases de datos",
      image: "/images/project_automation.png",
      icon: <LayoutDashboard className="w-6 h-6" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-primary-900 selection:text-white">
      
      {/* Mesh Gradients Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-100 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary-100 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-32 lg:pt-60 lg:pb-48 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-5xl"
            >
              <motion.div variants={itemVariants} className="mb-10 flex items-center space-x-3">
                <div className="h-px w-8 bg-primary-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-900/60 flex items-center">
                   <Sparkles className="w-3 h-3 mr-2 text-primary-600" />
                   Ingeniería de Alto Impacto
                </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="font-display text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12">
                <span className="font-extralight block text-slate-400">Arquitectos de</span>
                <span className="block text-slate-950">tu potencial.</span>
              </motion.h1>
              
              <motion.div variants={itemVariants} className="max-w-2xl mb-16">
                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                  No solo escribimos código. Construimos activos digitales escalables, seguros y optimizados para el crecimiento masivo.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Link to="/contacto" className="group px-12 py-6 bg-slate-950 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary-900 transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center">
                  Iniciar Proyecto
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/servicios" className="group px-12 py-6 border border-slate-200 text-slate-900 rounded-full font-black text-xs uppercase tracking-widest hover:border-primary-900 transition-all hover:bg-slate-50 active:scale-95">
                  Ver Capacidades
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section className="py-40 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tight">Expertís en Acción</h2>
                <p className="text-lg text-slate-500 font-light italic">Dominios técnicos integrados para una ejecución impecable.</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Systems</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 text-primary-600 group-hover:bg-primary-900 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - COMMAND CENTER STYLE */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl font-black text-slate-950 mb-8 tracking-tighter italic whitespace-nowrap overflow-hidden text-ellipsis">Casos de Despliegue</h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                Cada proyecto es una demostración de robustez estructural y escalabilidad real.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {projects.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-x-6 bottom-6 p-8 bg-slate-950/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 group-hover:bg-slate-950/80 transition-all duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-400">
                        {project.icon}
                      </div>
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">ID: 00{i+1}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-primary-400 transition-colors">{project.title}</h3>
                    <p className="text-xs font-black text-primary-500/80 uppercase tracking-widest mb-6 italic">{project.category}</p>
                    <Link to="/contacto" className="inline-flex items-center text-[10px] font-black text-white uppercase tracking-widest group/btn">
                      Ver Detalles <ArrowRight className="w-3 h-3 ml-2 text-primary-500 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION - MODERN DESIGN */}
        <section className="py-40 text-center relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-600 rounded-full blur-[150px] animate-pulse" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <Zap className="w-12 h-12 text-primary-400 mx-auto mb-12" />
            <h2 className="font-display text-5xl md:text-7xl font-black mb-12 tracking-tighter">¿Hablamos de ingeniería?</h2>
            <p className="text-xl md:text-2xl text-slate-400 font-light mb-16 max-w-2xl mx-auto italic">
              Un equipo directo y resolutivo entregando excelencia técnica sin rodeos.
            </p>
            <Link to="/contacto" className="inline-flex group relative items-center px-16 py-8 bg-white text-slate-950 font-black rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-[0.3em] overflow-hidden">
              <span className="relative z-10">Agendar Consultoría</span>
              <div className="absolute inset-0 bg-primary-50 pr-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
          
          {/* Visual Accents */}
          <div className="absolute bottom-10 right-10">
            <Globe2 className="w-32 h-32 text-white/5" />
          </div>
          <div className="absolute top-10 left-10">
            <Fingerprint className="w-20 h-20 text-white/5" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
