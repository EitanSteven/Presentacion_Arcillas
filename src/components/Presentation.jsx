import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slidesData } from '../data/slides';
import SlideRenderer from './SlideRenderer';

export default function Presentation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showHelper, setShowHelper] = useState(false);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const indicatorTimeoutRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const totalSlides = slidesData.length;

  const showTempIndicator = () => {
    setIndicatorVisible(true);
    if (indicatorTimeoutRef.current) clearTimeout(indicatorTimeoutRef.current);
    indicatorTimeoutRef.current = setTimeout(() => {
      setIndicatorVisible(false);
    }, 1800);
  };

  const goToNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
      showTempIndicator();
    }
  }, [currentIndex, totalSlides]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
      showTempIndicator();
    }
  }, [currentIndex]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn(`Error trying to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown' || e.key === 'Enter') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'h' || e.key === 'H' || e.key === '?') {
        e.preventDefault();
        setShowHelper((prev) => !prev);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setDirection(-1);
        setCurrentIndex(0);
        showTempIndicator();
      } else if (e.key === 'End') {
        e.preventDefault();
        setDirection(1);
        setCurrentIndex(totalSlides - 1);
        showTempIndicator();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, toggleFullscreen, totalSlides]);

  // Mouse Left Click (Next) & Right Click (Prev)
  const handleMouseDown = (e) => {
    // If clicking on help dialog or button, ignore
    if (e.target.closest('.interactive-control')) return;

    if (e.button === 0) {
      // Left click -> next
      goToNext();
    } else if (e.button === 2) {
      // Right click -> prev
      e.preventDefault();
      goToPrev();
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Touch handlers for mobile / touch screens
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Ensure horizontal gesture
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  // Variants for slide transitions
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 }
      }
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    })
  };

  const activeSlide = slidesData[currentIndex];

  return (
    <div
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen h-screen bg-[#070a12] text-slate-100 overflow-hidden cursor-default select-none"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(249,115,22,0.06),rgba(255,255,255,0))] pointer-events-none" />

      {/* Main Slide Presentation Stage with AnimatePresence */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <SlideRenderer slide={activeSlide} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Minimal Bottom Progress Bar (Discreet & Aesthetic) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-800/40 pointer-events-none z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
          initial={false}
          animate={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
          transition={{ ease: 'easeOut', duration: 0.4 }}
        />
      </div>

      {/* Transient Slide Counter (Fades out automatically, no persistent UI) */}
      <AnimatePresence>
        {indicatorVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-4 right-5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-xs font-mono font-medium text-slate-300 pointer-events-none z-40 shadow-xl"
          >
            {currentIndex + 1} / {totalSlides}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Help Modal (Only triggered by pressing 'H' or '?') */}
      <AnimatePresence>
        {showHelper && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="interactive-control absolute inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md"
            onClick={(e) => {
              e.stopPropagation();
              setShowHelper(false);
            }}
          >
            <div
              className="max-w-md w-full rounded-3xl bg-slate-900 border border-slate-700/80 p-6 shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <h3 className="text-lg font-bold text-white">Controles de Presentación</h3>
                <button
                  onClick={() => setShowHelper(false)}
                  className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">Avanzar Diapositiva:</span>
                  <span className="font-mono text-xs bg-slate-800 px-2 py-1 rounded text-amber-300">
                    Click Izq / Flecha Derecha / Espacio
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">Retroceder Diapositiva:</span>
                  <span className="font-mono text-xs bg-slate-800 px-2 py-1 rounded text-amber-300">
                    Click Der / Flecha Izquierda / Backspace
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">Pantalla Completa:</span>
                  <span className="font-mono text-xs bg-slate-800 px-2 py-1 rounded text-cyan-300">Tecla F</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Cerrar Ayuda:</span>
                  <span className="font-mono text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">Tecla H / Esc / Click</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowHelper(false)}
                  className="px-5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-semibold tracking-wide"
                >
                  Entendido
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
