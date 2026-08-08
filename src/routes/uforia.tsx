import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { PageHero, Section, Reveal, StaggerGroup, StaggerItem, Eyebrow } from "@/components/primitives";
import { MagneticAnchor, MagneticLink } from "@/components/magnetic-button";
import { MapPin, Calendar, Users } from "lucide-react";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

const galleryAssets = import.meta.glob("../assets/images/uforia/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.entries(galleryAssets)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([path, src]) => ({ path, src }));

export const Route = createFileRoute("/uforia")({
  head: () => ({
    meta: [
        { title: "Uforia '25 | Fynora Entertainments Flagship Event" },
        { name: "description", content: "Uforia '25 is the flagship open-air spectacle by Fynora Entertainments at LuLu Mall, Thiruvananthapuram." },
        { property: "og:title", content: "Uforia '25 | Fynora Entertainments Flagship Event" },
        { property: "og:description", content: BRAND_DESCRIPTION },
        { property: "og:url", content: siteUrl("/uforia") },
        { property: "og:image", content: siteUrl("/uforia/img2.jpg") },
        { name: "twitter:title", content: "Uforia '25 | Fynora Entertainments Flagship Event" },
        { name: "twitter:description", content: BRAND_DESCRIPTION },
        { name: "twitter:image", content: siteUrl("/uforia/img2.jpg") },
    ],
      links: [{ rel: "canonical", href: siteUrl("/uforia") }],
  }),
  component: UforiaPage,
});

const artists = [
  { name: "Bloodywood", role: "Headliner · Metal", img: "/uforia/img9.jpg" },
  { name: "Avial", role: "Malayalam · Rock", img: "/uforia/img10.jpg" },
  { name: "Arogya", role: "Synth-rock", img: "/uforia/img11.jpg" },
  { name: "Jhanu", role: "Tamil · Rock", img: "/uforia/img12.jpg" },
  { name: "Crishna", role: "Indie", img: "/uforia/img13.jpg" },
  { name: "Iham Kavyam", role: "Carnatic Fusion · Alt-Pop", img: "/uforia/img14.jpg" },
];

function UforiaPage() {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const featuredSpans = [
    "md:col-span-2 md:row-span-2 aspect-[4/5]",
    "aspect-square",
    "aspect-square",
    "md:col-span-2 aspect-[16/9]",
    "aspect-[4/5]",
    "aspect-[4/5]",
    "md:col-span-2 aspect-[16/9]",
  ];
  const featuredGallery = galleryImages.slice(0, 7).map((image, index) => ({
    ...image,
    span: featuredSpans[index] ?? "aspect-square",
  }));
  const remainingGallery = galleryImages.slice(7);

  return (
    <>
      <PageHero
        eyebrow="Flagship · December '25"
        title={<>Uforia <span className="text-gradient">'25</span></>}
        subtitle={<>An open-air renaissance staged at <strong className="text-foreground">LuLu Mall, Thiruvananthapuram</strong> — tens of thousands gathered for a single night of sound, scale, and spectacle.</>}
      />

      {/* Meta strip */}
      <Section className="py-16!">
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {[
            { icon: MapPin, label: "Venue", value: "LuLu Mall, TVM" },
            { icon: Calendar, label: "Date", value: "20 December 2025" },
            { icon: Users, label: "Footfall", value: "25,000+" },
          ].map(({ icon: Icon, label, value }) => (
            <StaggerItem key={label} className="flex items-center gap-4 rounded-2xl border-hairline bg-surface p-6">
              <Icon className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="mt-1 font-display text-xl">{value}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12 flex flex-wrap items-center gap-4">
          <MagneticAnchor href="https://uforiaofficial.com" target="_blank" rel="noreferrer" variant="primary" withArrow>
            uforiaofficial.com
          </MagneticAnchor>
          <MagneticAnchor href="https://in.bookmyshow.com/events/uforia/ET00468281?webview=true" target="_blank" rel="noreferrer" variant="outline" withArrow>
            Book now
          </MagneticAnchor>
          <span className="text-sm text-muted-foreground">Official event website · lineup, gallery & tickets</span>
        </Reveal>
      </Section>

      {/* Lineup */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>The lineup</Eyebrow>
            <h2 className="mt-4 text-5xl font-bold md:text-6xl">Voices that shaped the night.</h2>
          </Reveal>
        </div>
        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {artists.map((a, i) => (
            <StaggerItem key={a.name} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <div className="group relative overflow-hidden rounded-2xl border-hairline">
                <img src={a.img} alt={a.name} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "aspect-square md:aspect-4/5" : "aspect-4/5"}`} />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{a.role}</p>
                  <h3 className="mt-1 font-display text-xl md:text-2xl">{a.name}</h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Gallery */}
      <Section>
        <Reveal>
          <Eyebrow>Recap</Eyebrow>
          <h2 className="mt-4 text-5xl font-bold md:text-6xl">A city, in <span className="text-gradient">frames.</span></h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {featuredGallery.map((g, i) => (
            <StaggerItem key={i} className={g.span}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative h-full w-full overflow-hidden rounded-xl border-hairline">
                <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-110" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllGallery((current) => !current)}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-[0_12px_40px_-16px_rgba(255,255,255,0.55)] transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {showAllGallery ? "Show less" : "View more"}
            <span className="ml-1 inline-block text-base leading-none transition-transform duration-300 group-hover:-translate-y-px">+</span>
          </button>
        </div>

        {showAllGallery && remainingGallery.length > 0 && (
          <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {remainingGallery.map((g) => (
              <StaggerItem key={g.path} className="aspect-square">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative h-full w-full overflow-hidden rounded-xl border-hairline">
                  <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-110" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </Section>
    </>
  );
}
