import React from 'react';
import { motion } from 'framer-motion';

export default function SlideUnits({ slide }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15
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
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            {slide.badgeText || 'Estructura Cristalina'}
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* 2 Big Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex-1 items-stretch max-h-[72vh]"
      >
        {slide.items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemAnim}
            className="group flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 overflow-hidden relative"
          >
            {/* Ambient subtle light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top Tag & Title */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                {item.name}
              </h3>
            </div>

            {/* Large Image Showcase Frame */}
            <div className="my-4 flex-1 min-h-[200px] max-h-[320px] rounded-2xl bg-[#0b101c] border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-slate-700 transition-all">
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-slate-800/70">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
