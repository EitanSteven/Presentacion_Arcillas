import React from 'react';
import { motion } from 'framer-motion';

export default function SlideGroups({ slide }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15
      }
    }
  };

  const cardAnim = {
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
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">Clasificación Mineralógica</p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* 2 Column Comparison */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex-1 items-stretch max-h-[72vh]"
      >
        {slide.groups.map((grp, idx) => (
          <motion.div
            key={idx}
            variants={cardAnim}
            className={`flex flex-col justify-between rounded-3xl bg-gradient-to-b ${grp.accentColor} bg-slate-900/70 border border-slate-800 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl hover:border-slate-700 transition-all duration-300 overflow-hidden relative`}
          >
            {/* Ambient subtle light inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header inside card */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${grp.badgeColor}`}>
                  {grp.structure}
                </span>
                <span className="text-xs font-medium text-slate-400 italic">
                  {grp.example}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                {grp.name}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-3.5">
                {grp.features.map((feat, fIdx) => (
                  <motion.li
                    key={fIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + fIdx * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 text-slate-200 text-sm sm:text-base font-light leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0 group-hover:bg-white" />
                    <span>{feat}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom tag */}
            <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="tracking-wide">Grupo Tecnológico {idx + 1}</span>
              <span className="font-mono text-slate-500">2:1 TOT Layer</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
