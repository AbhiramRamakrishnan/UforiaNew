import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Reveal, StaggerGroup, StaggerItem, Eyebrow, ParallaxLayer } from "@/components/primitives";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fynora Entertainments | Team, Vision & Event Philosophy" },
      { name: "description", content: "Meet the team, vision, and production philosophy behind Fynora Entertainments — live events, cultural curation, and cinematic storytelling." },
      { property: "og:title", content: "About Fynora Entertainments | Team, Vision & Event Philosophy" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/about") },
      { property: "og:image", content: siteUrl("/full_logo_bgremoved.png") },
      { name: "twitter:title", content: "About Fynora Entertainments | Team, Vision & Event Philosophy" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/full_logo_bgremoved.png") },
    ],
    links: [{ rel: "canonical", href: siteUrl("/about") }],
  }),
  component: AboutPage,
});

const directors = [
  { name: "Mithun M.S Kurup", title: "Director", bio: "Graphic Designer · Art Director · Show Director · Content Creator · Script Writer.", img: "" },
  { name: "Sudhina Mithun", title: "Director", bio: "Art Director · Content Creator.", img: "" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={<>From <span className="text-gradient">void,</span> a renaissance.</>}
        subtitle="Fynora was built to hold two things at once — the silence before the lights drop, and the eruption that follows. We produce the moments that make both legible."
      />

      {/* Philosophy */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow>Brand story</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="text-foreground">The voice of void and renaissance</span> isn't a tagline — it's the operating principle. Void is the negative space; the unhurried pause where craft is made. Renaissance is the eruption that follows; the spectacle that lives in memory.
              </p>
              <p>
                Every Fynora production is engineered to move between the two with intent. Whether it's an open-air festival, a cultural curation, or a short film — the work is measured by what remains after the lights go down.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section className="pt-0!">
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {[
            { label: "Mission", body: "To stage moments at international standard — for audiences in India and beyond — without flattening the cultures we draw from." },
            { label: "Vision", body: "A studio that produces live entertainment, cultural craft, and cinematic IP as one continuous practice — each surface feeding the next." },
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

      {/* Directors */}
      <Section>
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 text-5xl font-bold md:text-6xl">The directors.</h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {directors.map((d) => (
            <StaggerItem key={d.name}>
              <article className="group">
                <div className="relative overflow-hidden rounded-3xl border-hairline">
                  <ParallaxLayer distance={30}>
                    <img src={d.img} alt={d.name} loading="lazy" className="aspect-4/5 w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-[1.15]" />
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
