import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, FileText, ReceiptText, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-content";
import officeImage from "@/assets/advisory-office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "A B Taxway Consultancy | Insurance, Investment, ITR & GST" },
    { name: "description", content: "Insurance, investment, income tax return and GST consultancy from A B Taxway Consultancy. Explore services and get in touch." },
    { property: "og:title", content: "A B Taxway Consultancy | Insurance, Investment, ITR & GST" },
    { property: "og:description", content: "Practical guidance for insurance, investments, income tax returns and GST." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <>
    <section className="relative mx-auto mt-5 max-w-[1600px] overflow-hidden px-4 sm:px-6">
      <div className="relative min-h-[610px] overflow-hidden rounded-xl sm:min-h-[590px]">
        <img src={officeImage} alt="Bright, organised financial consultancy workspace" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="hero-wash absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:min-h-[590px] lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-7">
            <span className="glass-strong inline-flex items-center gap-2 rounded-full border border-card px-4 py-2 text-xs font-semibold text-brand-deep shadow-sm"><span className="size-1.5 rounded-full bg-primary" /> INSURANCE · INVESTMENT · TAX</span>
            <h1 className="mt-7 max-w-[11ch] font-display text-[clamp(2.7rem,5vw,4.75rem)] font-bold leading-[1.06] text-foreground">Clarity for every <span className="brand-text">rupee you protect.</span></h1>
            <p className="mt-6 max-w-[49ch] text-base leading-relaxed text-foreground/75">Insurance, investments, income tax returns and GST—thoughtful guidance for your finances, all in one place.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="ink" size="action"><Link to="/contact">Start a conversation <ArrowUpRight /></Link></Button>
              <Button asChild variant="glass" size="action"><Link to="/services">Explore services <ArrowRight /></Link></Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-2.5 sm:gap-3">
              {[["4 areas", "One place for your needs"], ["Clear", "Straightforward guidance"], ["Personal", "Your goals come first"]].map(([value, label]) => <div key={value} className="glass-strong min-h-24 rounded-lg border border-card/80 p-3 sm:p-4"><strong className="block font-display text-lg text-brand-deep sm:text-xl">{value}</strong><span className="mt-1 block text-[11px] leading-snug text-muted-foreground sm:text-xs">{label}</span></div>)}
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="glass-panel ml-auto max-w-sm rounded-xl border border-card/80 p-5">
              <p className="text-xs font-semibold uppercase text-muted-foreground">The whole picture</p>
              <div className="mt-5 space-y-2.5">
                {[
                  { icon: FileText, title: "Income Tax Filing", subtitle: "Returns & tax guidance", tone: "text-primary bg-secondary" },
                  { icon: ReceiptText, title: "GST Consultancy", subtitle: "Registration & compliance", tone: "text-accent-foreground bg-accent/20" },
                  { icon: TrendingUp, title: "Investment Planning", subtitle: "Goals & choices", tone: "text-success bg-success/10" },
                  { icon: ShieldCheck, title: "Insurance Advisory", subtitle: "Cover that fits your needs", tone: "text-brand-deep bg-secondary" },
                ].map(({icon: Icon, title, subtitle, tone}) => <div key={title} className="glass-strong flex items-center gap-3 rounded-lg border border-card/70 p-3.5"><div className={`grid size-10 shrink-0 place-items-center rounded-md ${tone}`}><Icon size={19} /></div><div><p className="text-sm font-semibold text-foreground">{title}</p><p className="text-xs text-muted-foreground">{subtitle}</p></div><Check size={16} className="ml-auto shrink-0 text-primary" /></div>)}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">A more connected view of your financial needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 sm:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-xs font-bold uppercase text-primary">What we handle</p><h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">Advisory, end to end.</h2></div>
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline">View all services <ArrowRight size={16} /></Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ slug, number, title, short, icon: Icon }) => <Link key={slug} to="/services" hash={slug} className="glass-panel group flex min-h-64 flex-col rounded-xl border border-card/80 p-6 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-lg bg-secondary text-primary"><Icon size={23} /></span><span className="text-xs font-semibold text-muted-foreground">{number} / 04</span></div>
          <h3 className="mt-7 font-display text-xl font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{short}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-deep">Explore <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
        </Link>)}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div className="brand-gradient relative overflow-hidden rounded-xl px-7 py-12 text-primary-foreground sm:px-14 sm:py-14">
        <div className="relative max-w-xl"><p className="text-xs font-bold uppercase text-primary-foreground/75">Let's talk</p><h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Make your next decision with more confidence.</h2><p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">Whether it is a policy, an investment question or a filing deadline, tell us what is on your mind.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="light" size="action"><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button><Button asChild variant="glass" size="action" className="border-primary-foreground/30 text-primary-foreground hover:text-foreground"><Link to="/services">See our services</Link></Button></div></div>
      </div>
    </section>
  </>;
}
