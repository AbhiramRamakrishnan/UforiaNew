import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Full open → hold → close sequence, then unmount
    const timer = window.setTimeout(() => setVisible(false), 1850);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  // Iris timeline: closed -> open -> hold -> closed
  const irisKeyframes = [
    "circle(0px at 50% 50%)",
    "circle(46vmax at 50% 50%)",
    "circle(46vmax at 50% 50%)",
    "circle(0px at 50% 50%)",
  ];
  const irisTimes = [0, 0.38, 0.78, 1];
  const irisEase = [0.16, 1, 0.3, 1] as const;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: irisEase }}
          className="fixed inset-0 z-120 flex items-center justify-center overflow-hidden bg-background"
          aria-label="Loading Fynora Entertainments"
          role="status"
        >
          {/* Base texture — always present, dim */}
          <div className="absolute inset-0 noise opacity-25" />

          {/* Iris-masked content: spotlight glow + lens rings + logo, all revealed together */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ clipPath: irisKeyframes[0] }}
            animate={{ clipPath: irisKeyframes }}
            transition={{ duration: 1.5, times: irisTimes, ease: irisEase }}
          >
            {/* Spotlight glow revealed by the iris */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,178,255,0.14),transparent_38%),radial-gradient(circle_at_50%_50%,rgba(196,67,255,0.08),transparent_55%)]" />

            {/* Lens rings — reinforce the aperture motif, faint */}
            <div className="absolute h-[34vmin] w-[34vmin] rounded-full border border-white/[0.06]" />
            <div className="absolute h-[24vmin] w-[24vmin] rounded-full border border-white/[0.08]" />
            <div className="absolute h-[15vmin] w-[15vmin] rounded-full border border-cyan/20" />

            {/* Logo — scales in slightly behind the iris edge for a "drawn out by light" feel */}
            <motion.img
              src="/Logo_cropped.png"
              alt="Fynora Entertainments"
              initial={{ opacity: 0, scale: 0.72 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.28, ease: irisEase }}
              className="relative h-auto w-9 md:w-10"
            />
          </motion.div>

          {/* Thin static vignette so edges stay grounded once iris is fully open */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.35)_100%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}