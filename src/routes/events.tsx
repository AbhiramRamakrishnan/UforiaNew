import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero, Section, Reveal, StaggerGroup, StaggerItem, Eyebrow } from "@/components/primitives";
import { MagneticLink } from "@/components/magnetic-button";
import { MapPin, Calendar, Users, ArrowUpRight, Sparkles, Music } from "lucide-react";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Spectacles | Fynora Entertainments" },
      { name: "description", content: "Explore flagship music festivals, open-air concerts, and arena spectacles produced by Fynora Entertainments." },
      { property: "og:title", content: "Events & Spectacles | Fynora Entertainments" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/events") },
      { name: "twitter:title", content: "Events & Spectacles | Fynora Entertainments" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: siteUrl("/events") }],
  }),
  component: EventsPage,
});

interface EventItem {
  id: string;
  title: string;
  tagline: string;
  date: string;
  venue: string;
  footfall: string;
  status: "Past Event" | "Upcoming" | "Announcing Soon";
  image: string;
  href?: string;
  externalTicketUrl?: string;
  description: string;
  tags: string[];
}

const eventsList: EventItem[] = [
  {
    id: "uforia-25",
    title: "Uforia '25",
    tagline: "Kerala's Flagship Open-Air Music & Cultural Festival",
    date: "20 December 2025",
    venue: "LuLu Mall Outdoors, Thiruvananthapuram",
    footfall: "25,000+",
    status: "Past Event",
    image: "/uforia/img2.jpg",
    href: "/uforia",
    externalTicketUrl: "https://in.bookmyshow.com/events/uforia/ET00468281?webview=true",
    description: "A monumental single-night open-air festival featuring heavyweights like Bloodywood, Avial, Arogya, Jhanu, Crishna, and Iham Kavyam.",
    tags: ["Flagship IP", "Live Concert", "Open-Air Arena"],
  },
  {
    id: "uforia-arena-edition",
    title: "Uforia Arena '26",
    tagline: "The Next Era of Sound and Stage Engineering",
    date: "Late 2026",
    venue: "To Be Announced",
    footfall: "30,000+ Expected",
    status: "Announcing Soon",
    image: "/uforia/img9.jpg",
    description: "The next evolution of the flagship Uforia IP with elevated stage design, international headliners, and immersive visual architecture.",
    tags: ["Upcoming IP", "Multi-Stage", "Festival"],
  },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio of Experiences"
        title={<>Curated <span className="text-gradient">Events</span> & Stage IPs</>}
        subtitle="From large-scale open-air arenas to curated cultural galas — architectural production, artist coordination, and crowd experiences engineered to scale."
      />

      {/* Flagship & Past Events Grid */}
      <Section className="py-12">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Productions</Eyebrow>
              <h2 className="mt-2 text-3xl font-bold md:text-5xl">Flagship Experiences</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A history of execution across stadium-class stages, festival grounds, and high-footfall venues.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 space-y-12">
          {eventsList.map((event) => (
            <StaggerItem key={event.id}>
              <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-surface/50 transition-colors duration-500 hover:border-border">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Image Column */}
                  <div className="relative aspect-video overflow-hidden lg:col-span-6 lg:aspect-4/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent lg:hidden" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-md">
                      <span className={`h-2 w-2 rounded-full ${event.status === "Past Event" ? "bg-emerald-500" : "bg-amber-500"}`} />
                      {event.status}
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="flex flex-col justify-center p-6 lg:col-span-6 lg:p-10 lg:pl-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {event.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-hairline bg-surface px-2.5 py-1 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-gradient">{event.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{event.description}</p>

                    {/* Metadata strip */}
                    <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-hairline bg-surface/80 p-4 text-xs">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>{event.footfall}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      {event.href && (
                        <Link
                          to={event.href}
                          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
                        >
                          Explore Showcase
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}

                      {event.externalTicketUrl && (
                        <MagneticLink
                          href={event.externalTicketUrl}
                          target="_blank"
                          rel="noreferrer"
                          variant="outline"
                          withArrow
                        >
                          Book / Tickets
                        </MagneticLink>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Production Specs Section */}
      <Section className="py-16">
        <Reveal className="rounded-3xl border border-hairline bg-surface/30 p-8 text-center md:p-14">
          <Sparkles className="mx-auto h-8 w-8 text-muted-foreground" />
          <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">Have an event concept in mind?</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            From stage architecture and light dynamics to crowd management and line-up curation — we engineer experiences from the ground up.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticLink href="https://uforiaofficial.com" target="_blank" rel="noreferrer" variant="primary" withArrow>
              Partner with Fynora
            </MagneticLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}