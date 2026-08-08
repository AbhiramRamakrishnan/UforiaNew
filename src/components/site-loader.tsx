import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Reduced from 3000ms to 1500ms
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Reduced duration slightly to match the faster loader dismiss speed
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-120 flex items-center justify-center overflow-hidden bg-background"
          aria-label="Loading Fynora Entertainments"
          role="status"
        >
          <div className="absolute inset-0 noise opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,178,255,0.08),transparent_30%),radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.04),transparent_20%),radial-gradient(circle_at_80%_75%,rgba(196,67,255,0.06),transparent_24%)]" />
          <motion.div
            initial={{ scale: 0.985, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-4 flex w-full max-w-sm flex-col items-center text-center"
          >
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl" />

            <div className="relative flex items-center justify-center">
              <div className="absolute h-20 w-20 rounded-full border border-white/10" />
              <div className="absolute h-12 w-12 rounded-full bg-cyan/10 blur-2xl" />
              <div className="absolute h-px w-24 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              <img
                src="/logo_icon_bgremoved.png"
                alt="Fynora logo"
                className="relative h-auto w-8 md:w-9"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="mt-5"
            >
              <span className="block font-display text-2xl font-semibold tracking-tight text-foreground md:text-[2rem]">
                Fynora
              </span>
              <span className="mt-0.5 block text-[0.65rem] uppercase tracking-[0.38em] text-muted-foreground md:text-xs">
                Entertainments
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="mt-4"
            >
              <p className="text-sm text-muted-foreground">
                Curating the experience
              </p>
            </motion.div>

            <div className="mt-6 flex w-full items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <motion.span
                animate={{ x: [0, 20, 0], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_18px_rgba(29,178,255,0.8)]"
              />
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}