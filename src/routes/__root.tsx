import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { SiteLoader } from "@/components/site-loader";
import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_TAGLINE, siteUrl } from "@/lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  url: siteUrl("/"),
  logo: siteUrl("/full_logo_bgremoved.png"),
  description: BRAND_DESCRIPTION,
  sameAs: [
    "https://www.instagram.com/fynora_entertainments/",
    "https://www.youtube.com/@FynoraEntertainments",
    "https://www.facebook.com/FynoraEntertainments",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND_NAME,
  url: siteUrl("/"),
  description: BRAND_TAGLINE,
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the Rhythm</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The stage you are looking for has been moved or doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Technical Interruption</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong while loading this page. Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">Try Again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium">Return Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Uforia | Music & Cultural Festival by Fynora Entertainments" },
      { name: "description", content: BRAND_DESCRIPTION },
      { name: "keywords", content: "Uforia, Uforia Festival, Uforia 2025, Fynora Entertainments, live music festival, concert, cultural festival, Kerala events, campus music festival" },
      { name: "author", content: "Fynora Entertainments" },
      { name: "application-name", content: BRAND_NAME },
      { name: "theme-color", content: "#12081a" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "Uforia | Music & Cultural Festival by Fynora Entertainments" },
      { property: "og:description", content: BRAND_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BRAND_NAME },
      { property: "og:url", content: siteUrl("/") },
      { property: "og:image", content: siteUrl("/full_logo_bgremoved.png") },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Uforia | Music & Cultural Festival by Fynora Entertainments" },
      { name: "twitter:description", content: BRAND_DESCRIPTION },
      { name: "twitter:image", content: siteUrl("/full_logo_bgremoved.png") },
    ],
    links: [
      { rel: "canonical", href: siteUrl("/") },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
      { rel: "icon", type: "image/x-icon", href: "/favicon_io/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon_io/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon_io/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon_io/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon_io/site.webmanifest" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLoader />
      <div className="relative min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main><Outlet /></main>
        <SiteFooter />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}