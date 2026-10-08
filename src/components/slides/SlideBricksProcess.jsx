import React from 'react';
import { motion } from 'framer-motion';

export default function SlideBricksProcess({ slide }) {
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
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
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
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <p className="text-xs font-semibold tracking-widest text-rose-400 uppercase">Ciclo Productivo</p>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {slide.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 flex-1 items-stretch max-h-[72vh] overflow-hidden">
        {/* Left Column: Fases 1, 2, 3 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 flex flex-col justify-between space-y-3"
        >
          <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1">
            Fases de Moldeo y Deshidratación
          </div>
          {slide.phases.map((phase, idx) => (
            <motion.div
              key={idx}
              variants={itemAnim}
              className="flex-1 flex flex-col justify-center p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl hover:border-rose-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-7 h-7 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center font-mono font-bold text-sm text-rose-400">
                  {phase.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {phase.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed pl-10">
                {phase.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column: Fase 4 - Cocción y sus 4 Etapas */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-slate-900/70 border border-slate-800/90 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-xl bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-sm">
                4
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Cocción Térmica
                </h3>
                <span className="text-xs text-rose-400">4 Etapas de Control Térmico en Horno</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
              Curva de Quema
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
            {slide.firingStages.map((stg, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold text-rose-300">
                      {idx + 1}. {stg.stage}
                    </span>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/30">
                      {stg.temp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mt-1">
                    {stg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Enfriamiento posterior progresivo</span>
            <span className="text-rose-400 font-medium">Prevención de tensiones y fisuras</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
