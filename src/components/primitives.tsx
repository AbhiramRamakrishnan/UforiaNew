import { motion, useScroll, useTransform, type Variants } from "motion/react";
import type { PropsWithChildren, ReactNode } from "react";
import { useRef } from "react";

export function Section({ children, className = "", id }: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
      <span className="inline-block h-px w-8 bg-foreground/30" />
      {children}
    </span>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, delay = 0, className = "" }: PropsWithChildren<{ delay?: number; className?: string }>) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({ children, distance = 80, className = "" }: PropsWithChildren<{ distance?: number; className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <header className="relative overflow-hidden border-b border-border pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-aurora blur-[140px] opacity-30" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
