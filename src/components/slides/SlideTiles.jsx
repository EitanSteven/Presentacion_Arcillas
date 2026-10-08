import React from 'react';
import { motion } from 'framer-motion';

export default function SlideTiles({ slide }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 sm:mb-5"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-orange-400 uppercase">Manufactura Cerámica</p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* Main Grid: Steps list + Visual Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 flex-1 items-stretch max-h-[72vh] overflow-hidden">
        {/* Left Column: 5 Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-between space-y-2.5 overflow-y-auto pr-1"
        >
          {slide.steps.map((st, idx) => (
            <motion.div
              key={idx}
              variants={itemAnim}
              className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-orange-500/30 hover:bg-slate-900/80 transition-all"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 text-orange-400 font-bold font-mono text-sm">
                {st.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {st.title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-orange-950/60 text-orange-300 border border-orange-800/40">
                    {st.highlight}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column: 3 Industrial Photos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col justify-between gap-3 h-full"
        >
          {slide.gallery.map((imgItem, idx) => (
            <div
              key={idx}
              className="group flex-1 flex flex-col justify-end relative rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden shadow-xl"
            >
              <img
                src={imgItem.image}
                alt={imgItem.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="relative p-3 sm:p-3.5 z-10">
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {imgItem.title}
                </p>
                <p className="text-[11px] text-slate-300 font-light">
                  {imgItem.caption}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
