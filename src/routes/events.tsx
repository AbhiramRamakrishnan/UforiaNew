import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { PageHero, Section, Reveal, Eyebrow } from "@/components/primitives";
import { MagneticLink } from "@/components/magnetic-button";
import { MapPin, Calendar, Users, ArrowUpRight, Sparkles } from "lucide-react";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";
import {
  eventsList,
  filterTabs,
  statusPriority,
  type FilterType,
} from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Festivals | Fynora Entertainments" },
      { name: "description", content: "Explore flagship music festivals, open-air concerts, and stage experiences produced by Fynora Entertainments." },
      { property: "og:title", content: "Events & Festivals | Fynora Entertainments" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/events") },
      { name: "twitter:title", content: "Events & Festivals | Fynora Entertainments" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: siteUrl("/events") }],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredEvents = useMemo(() => {
    return eventsList
      .filter((event) => {
        if (filter === "all") return true;
        return event.category === filter;
      })
      .sort((a, b) => statusPriority[a.status] - statusPriority[b.status]);
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow="Portfolio of Experiences"
        title={<>Curated <span className="text-gradient">Events</span> & Stages</>}
        subtitle="From large-scale open-air arenas to curated cultural galas — architectural production, artist coordination, and crowd experiences engineered to scale."
      />

      <Section className="py-12">
        <Reveal>
          <div>
            <Eyebrow>Productions</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-5xl">Flagship Experiences</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              A history of execution across stadium-class stages, festival grounds, and high-footfall venues.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 rounded-2xl border border-hairline bg-surface/60 p-2 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`relative flex-1 sm:flex-none min-w-[110px] rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-foreground"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Dynamic Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-10 space-y-12"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div 
                  key={event.id}
                  className="group relative overflow-hidden rounded-3xl border border-hairline bg-surface/50 transition-colors duration-500 hover:border-border"
                >
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
                        <span className={`h-2 w-2 rounded-full ${
                          event.status === "Tickets Live" 
                            ? "bg-emerald-400 animate-pulse" 
                            : event.status === "Past Event" 
                            ? "bg-muted-foreground" 
                            : "bg-amber-400"
                        }`} />
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
                          <a
                            href={event.externalTicketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface/80"
                          >
                            Book / Tickets
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-hairline p-12 text-center text-muted-foreground">
                No events currently under this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
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
            <MagneticLink to="/contact" variant="primary" withArrow>
              Partner with Fynora
            </MagneticLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}