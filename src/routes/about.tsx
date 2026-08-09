import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Reveal, StaggerGroup, StaggerItem, Eyebrow } from "@/components/primitives";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Uforia | Festival Vision & Culture" },
      { name: "description", content: "Discover the vision, sound, and production philosophy behind Uforia Festival — curated and produced by Fynora Entertainments." },
      { property: "og:title", content: "About Uforia | Festival Vision & Culture" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/about") },
      { property: "og:image", content: siteUrl("/full_logo_bgresolved.png") },
      { name: "twitter:title", content: "About Uforia | Festival Vision & Culture" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/full_logo_bgresolved.png") },
    ],
    links: [{ rel: "canonical", href: siteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Festival Experience"
        title={<>One stage, <span className="text-gradient">infinite vibe.</span></>}
        subtitle="Uforia was created to unite international sounds, indie music legends, and immersive visual production into a single high-energy festival ecosystem."
      />

      {/* Story / Philosophy */}
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

      {/* Production & Curation Banner */}
      <Section className="pt-0!">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-hairline bg-surface-elevated p-10 md:p-16">
            <div className="max-w-2xl">
              <Eyebrow>Curated & Produced</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl text-foreground">
                Engineered by Fynora Entertainments
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Spearheaded by show directors, visual artists, and creative strategists dedicated to delivering world-class audio-visual stage setups, festival safety, and unmatched audience energy.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}