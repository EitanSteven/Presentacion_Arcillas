import React from 'react';
import { motion } from 'framer-motion';

export default function SlideBricksGallery({ slide }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
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
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-red-400 uppercase">Proceso de Ladrillos</p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* 3 Columns Gallery */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 flex-1 items-stretch max-h-[72vh]"
      >
        {slide.images.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardAnim}
            className="group flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800/90 p-4 sm:p-5 backdrop-blur-xl shadow-2xl hover:border-red-500/40 hover:bg-slate-900/80 transition-all duration-300 overflow-hidden"
          >
            {/* Top Index & Title */}
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-red-950/70 text-red-400 border border-red-800/50">
                  {item.index}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-200 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Main Image */}
            <div className="my-3 flex-1 min-h-[160px] max-h-[250px] rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden relative shadow-inner">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Epigraph */}
            <div className="pt-3 border-t border-slate-800/70">
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {item.epigraph}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
