import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Cpu, BarChart3, Code2, Globe, Laptop, Terminal } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Emilio Reyes Vaquero",
      title: "Full Stack Developer / Data Specialist",
      summary: "Especialista en arquitecturas backend y ecosistemas de datos. Con trayectoria en Kyndryl, domina la orquestación de procesos ETL con Pentaho y la analítica estratégica con Power BI. Desarrollador nativo Android en Kotlin bajo arquitectura MVVM.",
      skills: ["Java Spring", "Pentaho ETL", "Power BI", "Android Kotlin"],
      focus: "Lógica de Negocio y Datos",
      initials: "ER"
    },
    {
      name: "Ramón Romero",
      title: "Full Stack Developer / Cybersecurity",
      summary: "Perfil híbrido con formación humanista y técnica. Experto en optimización de entornos web (PHP, Laravel, WordPress) y blindaje de infraestructuras críticas mediante sistemas SIEM como Wazuh y Microsoft Sentinel.",
      skills: ["PHP & Laravel", "React", "Cybersecurity SIEM", "SEO Técnico"],
      focus: "UX y Seguridad Defensiva",
      initials: "RR"
    },
    {
      name: "Álvaro Pavón Martínez",
      title: "Software Engineer / Automation",
      summary: "Ingeniero especializado en la automatización radical de procesos mediante Python. Con experiencia en gestión de ERPs (Odoo) y administración avanzada de sistemas Linux. Actualmente especializándose en Ciberseguridad.",
      skills: ["Python Specialist", "Bash Scripting", "Linux Admin", "Odoo / ERP"],
      focus: "Automatización y Escalabilidad",
      initials: "AP"
    }
  ];

  const valueProps = [
    { icon: <Database className="w-6 h-6" />, title: "Integridad de Datos", desc: "Arquitecturas backend sólidas y procesos ETL que garantizan la veracidad de la información." },
    { icon: <Shield className="w-6 h-6" />, title: "Seguridad Real", desc: "Protección proactiva y monitorización continua para blindar activos digitales." },
    { icon: <Cpu className="w-6 h-6" />, title: "Eficiencia Operativa", desc: "Automatización de procesos complejos para reducir costes y eliminar errores manuales." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 selection:bg-primary-900 selection:text-white">
      
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl md:text-6xl font-black text-slate-950 mb-8 tracking-tighter">
              Tres trayectorias, <br />
              <span className="text-primary-600">una visión técnica.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              ArisTec nace de la unión de tres perfiles especializados en Datos, Seguridad y Automatización. Nuestra misión es simple: aplicar ingeniería real para solucionar problemas reales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-start"
              >
                {/* Visual Accent */}
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-3xl bg-slate-900 flex items-center justify-center text-white text-3xl md:text-4xl font-black shrink-0 shadow-xl">
                  {member.initials}
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-black text-slate-950 mb-1">{member.name}</h3>
                      <p className="text-primary-600 font-bold uppercase tracking-widest text-sm">{member.title}</p>
                    </div>
                    <div className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-black text-slate-500 border border-slate-100 italic">
                      FOCUS: {member.focus}
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-4xl">
                    {member.summary}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-700 border border-slate-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Sinergia Tecnológica</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto italic">
            "La intersección de nuestras especialidades permite abordar proyectos desde un enfoque holístico: datos íntegros, entorno seguro y procesos optimizados."
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary-500 flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform">
                  {prop.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{prop.title}</h4>
                <p className="text-slate-400 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-8">¿Listo para trabajar con nosotros?</h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-primary-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:shadow-primary-500/40 transition-all"
          >
            Configurar Reunión Técnica
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default About;
