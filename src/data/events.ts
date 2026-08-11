export interface EventItem {
  id: string;
  title: string;
  tagline: string;
  date: string;
  venue: string;
  footfall: string;
  status: "Past Event" | "Tickets Live" | "Announcing Soon";
  category: "past" | "active" | "upcoming";
  image: string;
  href?: string;
  externalTicketUrl?: string;
  description: string;
  tags: string[];
}

export type FilterType = "all" | "active" | "upcoming" | "past";

export const statusPriority: Record<EventItem["status"], number> = {
  "Tickets Live": 1,
  "Announcing Soon": 2,
  "Past Event": 3,
};

export const filterTabs: { id: FilterType; label: string }[] = [
  { id: "all", label: "All Events" },
  { id: "active", label: "Active (Tickets Live)" },
  { id: "upcoming", label: "Announcing Soon" },
  { id: "past", label: "Past Events" },
];

export const eventsList: EventItem[] = [
  {
    id: "uforia-1",
    title: "Uforia",
    tagline: "Kerala's Flagship Open-Air Music & Cultural Festival",
    date: "20 December 2025",
    venue: "LuLu Mall Outdoors, Thiruvananthapuram",
    footfall: "5,000+",
    status: "Past Event",
    category: "past",
    image: "src/assets/images/uforia/cover.png",
    href: "/uforia",
    externalTicketUrl: "https://in.bookmyshow.com/events/uforia/ET00468281?webview=true",
    description: "A monumental single-night open-air festival featuring heavyweights like Bloodywood, Avial, Arogya, Jhanu, Crishna, and Iham Kavyam.",
    tags: ["Flagship Festival", "Live Concert", "Open-Air Arena"],
  },
  // {
  //   id: "uforia-2",
  //   title: "Uforia 2",
  //   tagline: "The Next Era of Sound and Stage Engineering",
  //   date: "Late 2026",
  //   venue: "To Be Announced",
  //   footfall: "30,000+ Expected",
  //   status: "Announcing Soon",
  //   category: "upcoming",
  //   image: "/uforia/img9.jpg",
  //   description: "The next evolution of the flagship festival with elevated stage design, international headliners, and immersive visual architecture.",
  //   tags: ["Upcoming Festival", "Multi-Stage", "Main Stage"],
  // },
];