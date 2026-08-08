import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { WhatsAppIcon } from "./social-icons";

const whatsappHref = `https://wa.me/919656735696?text=${encodeURIComponent("Hi Uforia Team, I would like to know more about the festival and upcoming events.")}`;
const facebookHref = "#";
const instagramHref = "https://www.instagram.com/fynora_entertainments/";
const youtubeHref = "https://www.youtube.com/@FynoraEntertainments";
const specularisHref = "https://www.instagram.com/specularis.studio/";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="/full_logo_bgremoved.png" alt="Fynora" className="h-10 w-auto" />
            <span className="sr-only">Fynora</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A ground-breaking cultural experience showcasing global talent and India's independent music giants. Festival designed by Fynora Entertainments.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"><Instagram className="h-4 w-4" /></a>
            <a href={youtubeHref} target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"><Youtube className="h-4 w-4" /></a>
            <a href={facebookHref} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"><Facebook className="h-4 w-4" /></a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground"><WhatsAppIcon className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-foreground/80">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground/80">About</Link></li>
            <li><Link to="/events" className="hover:text-foreground/80">Events</Link></li>
            <li><Link to="/contact" className="hover:text-foreground/80">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Festival HQ</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Charummoodu, Nandhana Garden, Ayiroopara, Thiruvananthapuram, Kerala 695584</li>
            <li>Kerala · India</li>
            <li><a href="mailto:fynoraevent@gmail.com" className="hover:text-foreground">fynoraevent@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="order-2 flex flex-col gap-1.5 md:order-1">
            <p>© {new Date().getFullYear()} Uforia Festival & Fynora Entertainments. All rights reserved.</p>
            <p className="tracking-wide">
              Digital Architecture by{" "}
              <a 
                href={specularisHref} 
                target="_blank" 
                rel="noreferrer"
                className="font-medium text-foreground transition-colors hover:underline"
              >
                Specularis (@specularis.studio)
              </a>
            </p>
          </div>
          <p className="order-1 font-display tracking-wider md:order-2">ONE STAGE, INFINITE VIBE</p>
        </div>
      </div>
    </footer>
  );
}