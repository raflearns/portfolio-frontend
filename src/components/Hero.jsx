import { motion } from 'framer-motion';
import { Shield, Terminal, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyber-accent font-mono tracking-widest uppercase mb-4">
            Information Network System Administration
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Rafael Jr. Canalda
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Targeting roles in network defense and SOC Analysis. Combining a strong foundation in Java application development with two years of data analytics experience to build secure, resilient systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 font-mono">
            <span className="flex items-center gap-2 glass-panel px-4 py-2">
              <Shield size={16} className="text-cyber-accent"/> Cybersecurity
            </span>
            <span className="flex items-center gap-2 glass-panel px-4 py-2">
              <Terminal size={16} className="text-cyber-accent"/> Backend Ops
            </span>
            <span className="flex items-center gap-2 glass-panel px-4 py-2">
              <MapPin size={16} className="text-cyber-accent"/> Makati / Taguig / QC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}