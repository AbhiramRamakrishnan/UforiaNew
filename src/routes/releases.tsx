import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Reveal, StaggerGroup, StaggerItem, Eyebrow } from "@/components/primitives";
import { MagneticAnchor } from "@/components/magnetic-button";
import { shortFilms } from "@/data/short-films";
import { musicVideos } from "@/data/music-videos";
import { Play, Youtube, Film } from "lucide-react";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

export const Route = createFileRoute("/releases")({
  head: () => ({
    meta: [
      { title: "Releases | Fynora Entertainments Short Films & Music Videos" },
      { name: "description", content: "Browse the Fynora Entertainments releases slate of cinematic short films and music videos currently in production." },
      { property: "og:title", content: "Releases | Fynora Entertainments Short Films & Music Videos" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/releases") },
      { property: "og:image", content: siteUrl("/releases/music/img1.jpg") },
      { name: "twitter:title", content: "Releases | Fynora Entertainments Short Films & Music Videos" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/releases/music/img1.jpg") },
    ],
    links: [{ rel: "canonical", href: siteUrl("/releases") }],
  }),
  component: ReleasesPage,
});

function ReleasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Releases · 2025–26 slate"
        title={<>Cinema as <span className="text-gradient">sound,</span> sound as cinema.</>}
        subtitle="A growing slate of short films and music videos — all currently under filming or in post. Trailers and full releases drop on our channels soon."
      />

      <Section className="pt-12!">
        <Reveal className="flex flex-wrap items-center gap-4">
          <MagneticAnchor href="https://www.youtube.com/@FynoraEntertainments" target="_blank" rel="noreferrer" variant="primary" withArrow>
            Visit YouTube
          </MagneticAnchor>
          <span className="text-sm text-muted-foreground">Official channel · trailers, releases & updates</span>
        </Reveal>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <Eyebrow><Film className="h-3.5 w-3.5" /> Cinematic short films</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">In the frame.</h2>
          </Reveal>
        </div>
        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {[0, 1].map((i) => (
            <StaggerItem key={`shortfilms-coming-soon-${i}`}>
              <article className="group relative overflow-hidden rounded-3xl border-hairline bg-surface p-6 text-center">
                <div className="mx-auto mb-6 h-28 w-28 rounded-lg bg-muted-foreground/6" />
                <h3 className="font-display text-2xl">Short films — coming soon</h3>
                <p className="mt-3 text-sm text-muted-foreground">We’re building the slate — trailers and releases will appear here when ready.</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow><Youtube className="h-3.5 w-3.5" /> Music videos</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">The visual slate.</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {(() => {
            const display: Array<any> = [];
            if (musicVideos.length > 0) display.push(musicVideos[0]);
            // fill up to 3 columns with placeholders
            const needed = Math.max(0, 3 - display.length);
            for (let i = 0; i < needed; i++) display.push({ placeholder: true, id: `ph-${i}` });

            return display.map((v) => (
              <StaggerItem key={v.title ?? v.id}>
                {v.placeholder ? (
                  <article className="group relative overflow-hidden rounded-2xl border-hairline bg-surface p-6 text-center">
                    <div className="mx-auto mb-4 h-28 w-28 rounded-lg bg-muted-foreground/6" />
                    <h3 className="font-display text-lg font-semibold">Coming soon</h3>
                    <p className="mt-2 text-xs text-muted-foreground">New music videos will appear here.</p>
                  </article>
                ) : (
                  <article className="group relative overflow-hidden rounded-2xl border-hairline">
                    <img src={v.img} alt={v.title} loading="lazy" className="aspect-4/5 w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">{v.status}</span>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl">{v.title}</h3>
                      <button className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
                        <Youtube className="h-4 w-4" /> View on YouTube
                      </button>
                    </div>
                  </article>
                )}
              </StaggerItem>
            ));
          })()}
        </StaggerGroup>
      </Section>
    </>
  );
}
