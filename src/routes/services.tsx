import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Reveal, StaggerGroup, StaggerItem } from "@/components/primitives";
import { MagneticLink } from "@/components/magnetic-button";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services by Fynora Entertainments | Live Events, Festivals & Campus Shows" },
      { name: "description", content: "Explore Fynora Entertainments services: entertainment events, cultural festivals, and campus spectacles delivered at international standard." },
      { property: "og:title", content: "Services by Fynora Entertainments | Live Events, Festivals & Campus Shows" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/services") },
      { property: "og:image", content: siteUrl("/full_logo_bgremoved.png") },
      { name: "twitter:title", content: "Services by Fynora Entertainments | Live Events, Festivals & Campus Shows" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/full_logo_bgremoved.png") },
    ],
    links: [{ rel: "canonical", href: siteUrl("/services") }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Entertainment Events",
    tag: "Musical spectacles · International bands",
    body: "Stadium-grade productions for headliner tours, festival arenas, and brand-led concerts. We engineer staging, sound, lighting, hospitality and crowd flow end-to-end — pulling international acts into venues that can hold the energy.",
    bullets: ["Headliner tours & festivals", "International band routing", "Production design & rigging", "Hospitality & artist liaison"],
  },
  {
    n: "02",
    title: "Cultural Events",
    tag: "Festivals · Curated arts",
    body: "Curated cultural moments that center craft and continuity — multi-day festivals, art residencies, and cross-disciplinary nights that bring local culture into a contemporary frame.",
    bullets: ["Multi-day cultural festivals", "Curated art & performance", "Heritage activations", "Brand–culture collaborations"],
  },
  {
    n: "03",
    title: "Campus Events",
    tag: "College festivals · Tech fests",
    body: "High-energy productions for India's top universities — fests, tech weeks, and intercollegiate finales engineered with the same rigor we bring to the main stage.",
    bullets: ["College fest production", "Pro nights & flagship concerts", "Tech & cultural fest builds", "Sponsorship & content strategy"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Three verticals. <span className="text-gradient">One standard.</span></>}
        subtitle="Fynora operates across live entertainment, cultural curation, and campus production — each with a dedicated production stack and a shared bar for craft."
      />

      <Section className="!pt-12">
        <StaggerGroup className="space-y-4">
          {services.map((s) => (
            <StaggerItem key={s.n}>
              <article className="group relative overflow-hidden rounded-3xl border-hairline bg-surface p-8 transition-colors hover:bg-surface-elevated md:p-12">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-aurora opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-15" />
                <div className="grid gap-8 md:grid-cols-[140px_1fr_1fr] md:items-start">
                  <div className="font-display text-6xl text-muted-foreground/40 md:text-7xl">{s.n}</div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.tag}</p>
                    <h2 className="mt-2 font-display text-3xl md:text-5xl">{s.title}</h2>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{s.body}</p>
                    <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-aurora" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section className="!py-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border-hairline bg-surface p-10 md:flex-row md:items-center md:p-16">
            <div>
              <h3 className="text-3xl font-bold md:text-5xl">Ready to stage something?</h3>
              <p className="mt-3 max-w-md text-muted-foreground">Tell us what you're building — we'll respond with a producer and a plan.</p>
            </div>
            <MagneticLink to="/contact" variant="primary" withArrow>Book the studio</MagneticLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
