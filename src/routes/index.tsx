import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MagneticLink } from "@/components/magnetic-button";
import { Reveal, Section, Eyebrow, StaggerGroup, StaggerItem } from "@/components/primitives";
import { ArrowRight, Sparkles, Film, Mic2, Globe2 } from "lucide-react";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fynora Entertainments | Live Events, Festivals & Cinematic Productions" },
      { name: "description", content: BRAND_DESCRIPTION },
      { name: "keywords", content: "live entertainment, event management, cultural festivals, campus events, music festivals, cinematic releases, Kerala, India" },
      { property: "og:title", content: "Fynora Entertainments | Live Events, Festivals & Cinematic Productions" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/") },
      { property: "og:image", content: siteUrl("/full_logo_bgremoved.png") },
      { name: "twitter:title", content: "Fynora Entertainments | Live Events, Festivals & Cinematic Productions" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/full_logo_bgremoved.png") },
    ],
    links: [{ rel: "canonical", href: siteUrl("/") }],
  }),
  component: Home,
});

const marquee = ["Uforia '25", "Concert Productions", "Live Performances", "Cinematic Releases", "Festival Experiences", "Music Videos", "Campus Spectacles"];
const heroVideoSrc = "/hero_bg_video.mp4";

function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 md:hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 hidden md:grid md:grid-cols-3">
        <div className="relative h-full overflow-hidden">
          <video
            className="absolute left-1/2 top-1/2 z-10 h-[82%] w-auto -translate-x-1/2 -translate-y-1/2 scale-x-[-1] object-contain opacity-90 blur-lg saturate-125"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-20 bg-background/6" />
          <div className="absolute inset-0 z-20 bg-linear-to-r from-background/20 via-background/6 to-transparent" />
        </div>

        <div className="relative h-full overflow-hidden">
          <video
            className="absolute left-1/2 top-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2 object-contain opacity-100 brightness-130 contrast-115 saturate-125"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="relative h-full overflow-hidden">
          <video
            className="absolute left-1/2 top-1/2 z-10 h-[82%] w-auto -translate-x-1/2 -translate-y-1/2 scale-x-[-1] object-contain opacity-90 blur-lg saturate-125"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-20 bg-background/6" />
          <div className="absolute inset-0 z-20 bg-linear-to-l from-background/20 via-background/6 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0 bg-background/8 md:bg-background/12" />
      <div className="absolute inset-0 bg-linear-to-b from-background/8 via-background/14 to-background/20 md:from-background/18 md:via-background/35 md:to-background" />
      <div className="absolute -top-40 left-1/2 h-200 w-200 -translate-x-1/2 rounded-full bg-aurora opacity-25 blur-[160px]" />
    </div>
  );
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-svh min-h-160 w-full overflow-hidden">
        {/* Cinematic backdrop */}
        <motion.div style={{ y }} className="absolute inset-0">
          <HeroBackground />
        </motion.div>


        <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-14 md:justify-end md:py-0 md:pb-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <Eyebrow>Est. 2025 · India · International</Eyebrow>
          </motion.div>

          <h1 className="mt-10 inline-flex items-center gap-3 text-[9.5vw] font-bold leading-none tracking-tight md:mt-6 md:gap-4 md:text-[5.8rem] lg:gap-5 lg:text-[7rem]">
            <motion.img
              src="/logo_icon_bgremoved.png"
              alt="Fynora"
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2em] w-auto shrink-0 object-contain md:h-[2.1em] lg:h-[2.15em]"
            />
              <span className="flex flex-col items-start gap-2 md:gap-2.5">
              <span className="leading-[0.9]">
                {"Fynora".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[0.74em] leading-none text-gradient md:text-[0.75em]"
              >
                Entertainments
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-10 max-w-2xl text-base text-muted-foreground md:mt-8 md:text-lg"
          >
            <span className="font-medium">"Crafting Unforgettable Experiences That Resonate With Every Moment."</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-3 md:mt-10"
          >
            <MagneticLink to="/uforia" variant="primary" withArrow>
              Explore the experience
            </MagneticLink>
            <MagneticLink to="/services" variant="outline">
              What we do
            </MagneticLink>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>Scroll</span>
          <span className="relative flex h-9 w-5 justify-center rounded-full border border-border">
            <span className="mt-1.5 h-1.5 w-1 rounded-full bg-foreground" style={{ animation: "scroll-indicator 2s cubic-bezier(0.4,0,0.2,1) infinite" }} />
          </span>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-surface/40 py-6">
        <motion.div
          aria-label="Brand marquee"
          animate={{ x: "-50%" }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
          className="flex w-max whitespace-nowrap font-display text-3xl md:text-5xl will-change-transform"
        >
          {[0, 1].map((group) => (
            <div key={group} aria-hidden={group === 1} className="flex shrink-0 items-center gap-12 pr-12">
              {marquee.map((m, i) => (
                <span
                  key={`${group}-${m}-${i}`}
                  className={`shrink-0 ${i % 2 === 0 ? "text-foreground" : "text-muted-foreground/40"}`}
                >
                  {m}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>


      {/* Pillars */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <Eyebrow>Brand pillars</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Built for the <span className="text-gradient">spectacle</span> and the silence after.
            </h2>
          </Reveal>
          <StaggerGroup className="grid gap-px overflow-hidden rounded-2xl border-hairline bg-border/40 md:grid-cols-3">
            {[
              { icon: Mic2, title: "Live spectacle", body: "Stadium-grade musical productions and international band tours engineered end-to-end." },
              { icon: Globe2, title: "Cultural craft", body: "Curated cultural festivals and arts experiences that move with intention." },
              { icon: Film, title: "Cinematic IP", body: "Short films and music videos produced with a director's eye and a label's reach." },
            ].map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title} className="group relative bg-background p-8 transition-colors hover:bg-surface md:p-10">
                <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Featured: Uforia */}
      <Section>
        <Reveal>
          <Eyebrow>Flagship</Eyebrow>
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal delay={0.05}>
            <h2 className="text-5xl font-bold leading-[0.95] md:text-7xl">
              Uforia <span className="text-gradient">'25</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              A massive open-air spectacle hosted at LuLu Mall, Thiruvananthapuram - bringing together headliners, immersive staging, and tens of thousands of voices.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex lg:justify-end">
            <MagneticLink to="/uforia" variant="outline" withArrow>
              Enter Uforia
            </MagneticLink>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="group relative overflow-hidden rounded-3xl border-hairline">
            <img
              src="/uforia/img1.jpg"
              alt="Uforia '25 flagship event crowd"
              className="h-[55vh] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-6 p-8 md:p-12">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">December · LuLu Mall, TVM</p>
                <p className="mt-3 max-w-md font-display text-2xl md:text-3xl">A renaissance staged at the heart of Kerala.</p>
              </div>
              <Link to="/uforia" className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground/80">
                Recap & lineup <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CTA strip */}
      <Section className="py-32!">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-hairline bg-surface p-10 md:p-16">
            <div className="absolute -top-40 -right-40 h-112 w-md rounded-full bg-aurora opacity-20 blur-[120px]" />
            <h3 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
              Have an idea worth staging? <span className="text-gradient">Let's build it.</span>
            </h3>
            <p className="mt-5 max-w-xl text-muted-foreground">
              From boutique campus fests to international tours and on-location film sets — Fynora produces the moments that get remembered.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticLink to="/contact" variant="primary" withArrow>Start a conversation</MagneticLink>
              <MagneticLink to="/about" variant="ghost">About the studio</MagneticLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
