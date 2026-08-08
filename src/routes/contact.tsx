import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { PageHero, Section, Reveal, Eyebrow } from "@/components/primitives";
import { Instagram, Youtube, Mail, MapPin, Send, Check, Facebook, Phone } from "lucide-react";
import { WhatsAppIcon } from "../components/social-icons";
import { toast } from "sonner";
import { BRAND_DESCRIPTION, siteUrl } from "@/lib/seo";

const whatsappHref = `https://wa.me/919656735696?text=${encodeURIComponent("Hi Fynora , i would like to know more about your services.")}`;
const facebookHref = "https://www.facebook.com/FynoraEntertainments";
const instagramHref = "https://www.instagram.com/fynora_entertainments/";
const youtubeHref = "https://www.youtube.com/@FynoraEntertainments";
const googleFormSubmitUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSenaXGKvzhS9jYgPHXeZoaETI1e7Y1wDavrgHU3Nt0yt6_Bzw/formResponse";

const googleFormEntries = {
  name: "entry.93931486",
  email: "entry.734653827",
  mobile: "entry.1971706914",
  message: "entry.1405153937",
} as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Fynora Entertainments | Bookings, Partnerships & Press" },
      { name: "description", content: "Contact Fynora Entertainments for bookings, partnerships, press inquiries, live events, cultural curation, and cinematic collaborations." },
      { property: "og:title", content: "Contact Fynora Entertainments | Bookings, Partnerships & Press" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:url", content: siteUrl("/contact") },
      { property: "og:image", content: siteUrl("/full_logo_bgremoved.png") },
      { name: "twitter:title", content: "Contact Fynora Entertainments | Bookings, Partnerships & Press" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/full_logo_bgremoved.png") },
    ],
    links: [{ rel: "canonical", href: siteUrl("/contact") }],
  }),
  component: ContactPage,
});

function Field({ label, type = "text", name, required = false, textarea = false }: { label: string; type?: string; name: string; required?: boolean; textarea?: boolean }) {
  const placeholder =
    name === "name"
      ? "Your full name"
      : name === "email"
        ? "you@example.com"
        : name === "mobile"
          ? "+91 96567 35696"
            : "Tell us what you’re planning";

  return (
    <label className="group block">
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}{required && " *"}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          className="mt-3 w-full resize-none rounded-2xl border border-border bg-surface-elevated px-4 py-4 text-lg text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-1 focus:ring-ring"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-3 w-full rounded-2xl border border-border bg-surface-elevated px-4 py-3.5 text-lg text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-1 focus:ring-ring"
        />
      )}
    </label>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Start a <span className="text-gradient">conversation.</span></>}
        subtitle="Bookings, partnerships, enquiries, or just an idea worth staging — write to us. A producer responds within two working days."
      />

      <Section className="pt-12!">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          {/* Info */}
          <Reveal className="space-y-12">
            <div>
              <Eyebrow>Studio</Eyebrow>
              <div className="mt-5 space-y-1">
                <p className="flex items-center gap-3 text-lg"><MapPin className="h-4 w-4 text-muted-foreground" /> Charummoodu, Nandhana Garden, Ayiroopara, Thiruvananthapuram, Kerala 695584</p>
                <p className="pl-7 text-sm text-muted-foreground">India · International</p>
              </div>
            </div>

            <div>
              <Eyebrow>Direct</Eyebrow>
              <div className="mt-5 space-y-3">
                <a href="mailto:fynoraevent@gmail.com" className="flex items-center gap-3 text-lg hover:text-foreground/80"><Mail className="h-4 w-4 text-muted-foreground" /> fynoraevent@gmail.com</a>
                <a href="tel:+919656735696" className="flex items-center gap-3 text-lg hover:text-foreground/80"><Phone className="h-4 w-4 text-muted-foreground" /> +91 96567 35696</a>
              </div>
            </div>

            <div>
              <Eyebrow>Follow</Eyebrow>
              <div className="mt-5 flex gap-3">
                <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-border p-3 transition-all hover:border-foreground hover:bg-foreground/5"><Instagram className="h-4 w-4" /></a>
                <a href={youtubeHref} target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full border border-border p-3 transition-all hover:border-foreground hover:bg-foreground/5"><Youtube className="h-4 w-4" /></a>
                <a href={facebookHref} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-border p-3 transition-all hover:border-foreground hover:bg-foreground/5"><Facebook className="h-4 w-4" /></a>
                <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-foreground hover:bg-foreground/5"><WhatsAppIcon className="h-4 w-4" /></a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const body = new URLSearchParams({
                  [googleFormEntries.name]: formData.get("name")?.toString() ?? "",
                  [googleFormEntries.email]: formData.get("email")?.toString() ?? "",
                  [googleFormEntries.mobile]: formData.get("mobile")?.toString() ?? "",
                  [googleFormEntries.message]: formData.get("msg")?.toString() ?? "",
                });

                await fetch(googleFormSubmitUrl, {
                  method: "POST",
                  mode: "no-cors",
                  headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
                  body,
                });

                toast.success("Submitted and will connect soon");
                setSent(true);
                setTimeout(() => setSent(false), 4000);
                e.currentTarget.reset();
              }}
              className="space-y-10"
            >
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" type="email" name="email" required />
                <div className="md:col-span-2">
                  <Field label="Mobile Number" type="tel" name="mobile" required />
                </div>
              </div>
              <Field label="Message" name="msg" textarea required />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sent}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors"
              >
                <span className="absolute inset-0 bg-aurora opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  {sent ? (<><Check className="h-4 w-4" /> Submitted</>) : (<>Send inquiry <Send className="h-4 w-4" /></>)}
                </span>
              </motion.button>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
