import { motion } from 'framer-motion';
import { Shield, Terminal, MapPin, ChevronRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* SaaS Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for SOC Analyst Roles
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Secure Systems. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Data-Driven Defense.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Combining a strong foundation in Java application architecture with years of data analytics experience to build and monitor resilient network infrastructures.
          </p>
          
          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-cyan-500 text-[#050810] font-bold hover:bg-cyan-400 transition-colors flex items-center justify-center group">
              View Architecture
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-800/50 border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors flex items-center justify-center">
              <FileText size={18} className="mr-2 text-slate-400" />
              Download Resume
            </button>
          </div>
          
          {/* Tech Stack / Location Tags */}
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400 font-mono">
            <span className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Shield size={16} className="text-cyan-400"/> Cybersecurity
            </span>
            <span className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Terminal size={16} className="text-cyan-400"/> Java / OOP
            </span>
            <span className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg backdrop-blur-sm">
              <MapPin size={16} className="text-cyan-400"/> NCR Hubs
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}