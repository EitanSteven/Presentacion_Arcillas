import React from 'react';
import { motion } from 'framer-motion';

export default function SlideIndustrialProcesses({ slide }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.15
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 sm:mb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Acondicionamiento</p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* 2 Process Sections */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex-1 items-stretch max-h-[72vh]"
      >
        {slide.sections.map((sec, idx) => (
          <motion.div
            key={idx}
            variants={itemAnim}
            className="flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Index & Title */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl sm:text-5xl font-mono font-black text-emerald-400/80 bg-emerald-950/40 border border-emerald-800/40 rounded-2xl px-4 py-2">
                  {sec.step}
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Fase Industrial</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {sec.title}
                  </h3>
                </div>
              </div>

              {/* Sub points */}
              <div className="space-y-4 sm:space-y-5">
                {sec.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700/80 transition-all"
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-emerald-300 mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {pt.label}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                      {pt.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Flow Arrow Indicator */}
            <div className="pt-6 mt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-slate-500">Etapa {idx + 1} de 2 en preparación</span>
              <span className="text-emerald-400 font-medium">➔ Preparación de mezcla</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
