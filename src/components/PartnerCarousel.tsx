import { motion } from "framer-motion";
import { Building2, Shield, TrendingUp, Laptop, Landmark, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export type Partner = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badgeColor: string;
  logo: {
    text: string;
    sub: string;
    bg: string;
    fg: string;
    icon: typeof Building2;
  };
};

export const partners: Partner[] = [
  {
    id: "lic",
    name: "LIC of India",
    category: "Life & Pension",
    tagline: "India's Most Trusted Life Insurer",
    badgeColor: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400",
    logo: {
      text: "LIC",
      sub: "Life Insurance",
      bg: "bg-[#003366] dark:bg-[#002244]",
      fg: "text-[#FFCC00]",
      icon: Landmark,
    },
  },
  {
    id: "nj",
    name: "NJ India Invest",
    category: "Mutual Funds & Wealth",
    tagline: "Premier Wealth & Distribution Network",
    badgeColor: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
    logo: {
      text: "NJ",
      sub: "India Invest",
      bg: "bg-[#1E3A8A] dark:bg-[#172554]",
      fg: "text-white",
      icon: TrendingUp,
    },
  },
  {
    id: "turtlemint",
    name: "Turtlemint",
    category: "InsurTech Advisory",
    tagline: "Multi-Insurer Technology Partner",
    badgeColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
    logo: {
      text: "TURTLE",
      sub: "mint",
      bg: "bg-[#047857] dark:bg-[#064E3B]",
      fg: "text-[#34D399]",
      icon: Laptop,
    },
  },
  {
    id: "hdfc-life",
    name: "HDFC Life",
    category: "Life & Health Cover",
    tagline: "Sar Utha Ke Jiyo • Protection",
    badgeColor: "from-red-500/20 to-rose-500/10 border-red-500/30 text-red-600 dark:text-red-400",
    logo: {
      text: "HDFC",
      sub: "Life",
      bg: "bg-[#991B1B] dark:bg-[#7F1D1D]",
      fg: "text-white",
      icon: Shield,
    },
  },
  {
    id: "online-taxway",
    name: "Online Taxway",
    category: "ITR & GST Network",
    tagline: "Tax, Compliance & Corporate Advisory",
    badgeColor: "from-sky-500/20 to-cyan-500/10 border-sky-500/30 text-sky-600 dark:text-sky-400",
    logo: {
      text: "TAXWAY",
      sub: "Online",
      bg: "bg-[#0369A1] dark:bg-[#0C4A6E]",
      fg: "text-[#38BDF8]",
      icon: Building2,
    },
  },
];

function PartnerCard({ partner }: { partner: Partner }) {
  const { logo: L, icon: Icon } = { logo: partner.logo, icon: partner.logo.icon };

  return (
    <div
      className="group relative flex shrink-0 items-center gap-4 rounded-2xl border border-card/80 bg-card/65 px-5 py-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/90 hover:shadow-lift select-none"
    >
      {/* Brand Emblem */}
      <div
        className={`grid size-12 shrink-0 place-items-center rounded-xl ${L.bg} p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <span className={`font-display text-[13px] font-black tracking-tight leading-none ${L.fg}`}>
            {L.text}
          </span>
          <span className="text-[8px] font-mono uppercase tracking-wider text-white/80 leading-none mt-0.5">
            {L.sub}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="min-w-0 pr-1">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
            {partner.name}
          </h3>
          <span
            className={`hidden sm:inline-block rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${partner.badgeColor}`}
          >
            {partner.category}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
          {partner.tagline}
        </p>
      </div>
    </div>
  );
}

export function PartnerCarousel() {
  // Multiply array for seamless infinite marquee loop
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="relative mx-auto mt-8 max-w-7xl px-3 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-card/80 bg-card/40 p-5 sm:p-7 backdrop-blur-xl shadow-sm">
          {/* Header Row */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                <Sparkles size={16} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                  Authorized Advisory &amp; Distribution Platforms
                </p>
                <h2 className="font-display text-base sm:text-lg font-bold text-foreground">
                  Partnered with India's leading financial institutions
                </h2>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              Direct tie-ups &amp; tech integrations
            </div>
          </div>

          {/* Marquee Track with Fade Gradient Edges */}
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-4 w-max py-2"
              animate={{
                x: ["0%", "-33.333%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 22,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {marqueeItems.map((p, idx) => (
                <PartnerCard key={`${p.id}-${idx}`} partner={p} />
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
