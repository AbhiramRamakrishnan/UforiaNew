import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
];

const rightLinks = [
  { to: "/events" as const, label: "Events" },
];

const mobileLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/events" as const, label: "Events" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`grid w-full max-w-2xl grid-cols-2 items-center rounded-full px-5 py-2 transition-all duration-500 md:grid-cols-[1fr_auto_1fr] ${
          scrolled ? "glass shadow-luxe" : "bg-transparent"
        }`}
      >
        {/* Left Links */}
        <ul className="hidden items-center justify-end gap-1 md:flex">
          {leftLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-foreground/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Spacer */}
        <div className="md:hidden" />

        {/* Center Logo */}
        <Link
          to="/"
          className="inline-flex items-center transition-opacity hover:opacity-80 justify-self-center px-4"
        >
          <img src="/Logo_cropped.png" alt="Uforia" className="h-10 w-auto md:h-14" />
          <span className="sr-only">Uforia</span>
        </Link>

        {/* Right Links & CTA */}
        <div className="flex items-center gap-2 justify-self-end md:justify-self-start">
          <ul className="hidden items-center gap-1 md:flex">
            {rightLinks.map((l) => {
              const active = location.pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-foreground/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-wider text-background transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Book us
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/15 bg-surface-elevated/70 p-2.5 text-foreground transition-colors hover:bg-surface-elevated md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <button
              aria-label="Close mobile navigation"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            />

            <motion.aside
              id="mobile-nav-panel"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-20 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(160deg,oklch(0.16_0.03_280/.9),oklch(0.1_0.015_280/.94)_55%,oklch(0.09_0.012_280/.98))] p-4 shadow-[0_30px_80px_-24px_oklch(0.62_0.27_330/.35)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan/12 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-magenta/12 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground">Navigation</p>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="rounded-full border border-white/12 bg-white/6 p-2 text-foreground transition-colors hover:bg-white/12"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {mobileLinks.map((l, index) => {
                    const active = location.pathname === l.to;
                    return (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-colors ${
                            active
                              ? "bg-white/12 text-foreground"
                              : "text-muted-foreground hover:bg-white/6 hover:text-foreground"
                          }`}
                        >
                          <span className="font-display text-lg font-semibold tracking-tight">{l.label}</span>
                          <span className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground/80">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-foreground px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-background"
                  >
                    Contact
                  </Link>
                  <a
                    href="mailto:fynoraevent@gmail.com"
                    className="rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-foreground/90"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}