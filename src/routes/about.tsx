import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Reveal, StaggerGroup, StaggerItem, Eyebrow, ParallaxLayer } from "@/components/primitives";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Uforia | Festival Vision, Leadership & Culture" },
      { name: "description", content: "Discover the vision, sound, and production philosophy behind Uforia Festival — curated and produced by Fynora Entertainments." },
      { property: "og:title", content: "About Uforia | Festival Vision, Leadership & Culture" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/about") },
      { property: "og:image", content: siteUrl("/full_logo_bgresolved.png") },
      { name: "twitter:title", content: "About Uforia | Festival Vision, Leadership & Culture" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/full_logo_bgresolved.png") },
    ],
    links: [{ rel: "canonical", href: siteUrl("/about") }],
  }),
  component: AboutPage,
});

const directors = [
  { 
    name: "Mithun M.S Kurup", 
    title: "Festival Director", 
    bio: "Graphic Designer · Art Director · Show Director · Content Creator · Script Writer.", 
    img: "/images/directors/mithun.jpg" 
  },
  { 
    name: "Sudhina Mithun", 
    title: "Creative Director", 
    bio: "Art Director · Creative Strategist · Content Creator.", 
    img: "/images/directors/sudhina.jpg" 
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Festival Experience"
        title={<>One stage, <span className="text-gradient">infinite vibe.</span></>}
        subtitle="Uforia was created to unite international sounds, indie music legends, and immersive visual production into a single high-energy festival ecosystem."
      />

      {/* Philosophy */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow>The Story</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="text-foreground">Uforia</span> is a multi-genre music and cultural flagship curated by Fynora Entertainments. Born out of a vision to elevate live music culture in Kerala and across South India, the festival brings together independent artists, international performers, and music lovers under one roof.
              </p>
              <p>
                Every edition of Uforia is built with world-class audio architecture, high-octane light shows, and an unyielding commitment to atmospheric energy. It's more than a concert — it's where core memories are made.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section className="pt-0!">
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {[
            { label: "Mission", body: "To deliver global-scale festival experiences, empowering indie music talent and providing audiences with world-class stage design, lighting, and sound." },
            { label: "Vision", body: "To establish Uforia as South India's premier annual cultural destination for live music, visual performance, and youth culture." },
          ].map((b) => (
            <StaggerItem key={b.label}>
              <div className="group relative h-full overflow-hidden rounded-3xl border-hairline bg-surface p-10 md:p-12">
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-aurora opacity-10" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{b.label}</p>
                <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">{b.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Leadership */}
      <Section>
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 text-5xl font-bold md:text-6xl">The minds behind Uforia.</h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {directors.map((d) => (
            <StaggerItem key={d.name}>
              <article className="group">
                <div className="relative overflow-hidden rounded-3xl border-hairline bg-surface-elevated">
                  <ParallaxLayer distance={30}>
                    <img 
                      src={d.img} 
                      alt={d.name} 
                      loading="lazy" 
                      className="aspect-4/5 w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-[1.15]" 
                      onError={(e) => {
                        // Fallback image styling if image path is not yet provided
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </ParallaxLayer>
                  <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-3xl">{d.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{d.title}</p>
                </div>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">{d.bio}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>
    </>
  );
}