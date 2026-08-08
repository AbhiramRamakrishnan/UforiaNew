import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost" | "outline";

const styles: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  ghost: "text-foreground hover:bg-foreground/5",
  outline: "border border-border text-foreground hover:bg-foreground/5",
};

interface BaseProps {
  variant?: Variant;
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const base = "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";

export function MagneticLink({ to, variant = "primary", withArrow, children, className = "", ...rest }: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      <span className="relative z-10">{children}</span>
      {withArrow && <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-aurora opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </Link>
  );
}

export function MagneticAnchor({ href, variant = "outline", withArrow, children, className = "", ...rest }: BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      <span className="relative z-10">{children}</span>
      {withArrow && <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </a>
  );
}
