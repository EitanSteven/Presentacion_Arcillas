import React from 'react';
import { motion } from 'framer-motion';

export default function SlideComposition({ slide }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
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
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Estructura Cristalina</p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* 4 Structures Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 flex-1 items-stretch max-h-[70vh]"
      >
        {slide.structures.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemAnim}
            className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/90 p-4 sm:p-5 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl overflow-hidden"
          >
            {/* Top Badge & Title */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                  {item.tag}
                </span>
                {item.formula && (
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    {item.formula}
                  </span>
                )}
                {item.mineral && (
                  <span className="text-[11px] font-medium text-amber-300 bg-amber-950/50 border border-amber-800/40 px-2 py-0.5 rounded">
                    {item.mineral}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                {item.name}
              </h3>
            </div>

            {/* Image Container with sleek frame */}
            <div className="my-3 sm:my-4 flex-1 min-h-[140px] max-h-[220px] rounded-xl bg-[#0d1322] border border-slate-800/70 p-2 flex items-center justify-center overflow-hidden group-hover:border-slate-700 transition-all">
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Description */}
            <div className="pt-2 border-t border-slate-800/60">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
