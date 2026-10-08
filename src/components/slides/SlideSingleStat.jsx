import React from 'react';
import { motion } from 'framer-motion';

export default function SlideSingleStat({ slide }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 sm:mb-4"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            {slide.badgeText || 'Sector Minero Regional'}
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-base sm:text-xl text-slate-300 mt-1 font-medium">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* Hero Full-Size Chart Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 flex items-center justify-center rounded-3xl bg-white/95 border border-slate-700/80 p-4 sm:p-8 shadow-2xl overflow-hidden max-h-[72vh] relative"
      >
        <img
          src={slide.image}
          alt={slide.subtitle}
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
