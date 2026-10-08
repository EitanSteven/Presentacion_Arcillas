import React from 'react';
import { motion } from 'framer-motion';

export default function SlideReferences({ slide }) {
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
        className="mb-3 sm:mb-4"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
            {slide.badgeText || 'Referencias'}
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* Sources List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col justify-between space-y-2.5 max-h-[72vh] overflow-y-auto pr-1"
      >
        {slide.sources.map((src, idx) => (
          <motion.div
            key={idx}
            variants={itemAnim}
            className="flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-teal-500/40 hover:bg-slate-900/80 transition-all duration-200"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 font-mono font-bold text-xs text-teal-400">
              {idx + 1}
            </div>

            <div className="flex-1 text-xs sm:text-sm leading-relaxed text-slate-300 font-light">
              <span className="font-semibold text-white">{src.author}</span>{' '}
              <span>({src.year}).</span>{' '}
              <span className="italic text-slate-200">{src.title}</span>
              {src.format && <span className="text-slate-400"> [{src.format}]</span>}.{' '}
              <span className="text-slate-300">{src.publisher}.</span>
              <div className="mt-1">
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="interactive-control text-[11px] sm:text-xs text-teal-400 hover:text-teal-300 underline underline-offset-2 break-all inline-flex items-center gap-1"
                >
                  {src.url}
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
