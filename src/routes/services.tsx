import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services | A B Taxway Consultancy" },
    { name: "description", content: "Explore insurance advisory, investment planning, ITR filing and GST consultancy at A B Taxway Consultancy." },
    { property: "og:title", content: "Services | A B Taxway Consultancy" },
    { property: "og:description", content: "Insurance, investments, income tax and GST guidance in one place." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

function ServicesPage() {
  return <>
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-24"><p className="text-xs font-bold uppercase text-primary">What we do</p><h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-foreground sm:text-6xl">The support you need, <span className="brand-text">all in one place.</span></h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Explore our work across insurance, investments and tax. Every decision deserves a clear explanation and an approach that fits you.</p></section>
    <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      {services.map(({slug, number, title, description, icon: Icon, items}) => <section key={slug} id={slug} className="grid scroll-mt-10 gap-9 border-t border-border py-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:py-16">
        <div><span className="text-xs font-semibold text-primary">{number} / 04</span><div className="mt-5 grid size-14 place-items-center rounded-lg bg-secondary text-primary"><Icon size={26} /></div><h2 className="mt-5 font-display text-3xl font-bold text-foreground sm:text-4xl">{title}</h2><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{description}</p><Button asChild variant="consult" size="consult" className="mt-7"><Link to="/contact" search={{ service: slug }}>Enquire about {title} <ArrowUpRight /></Link></Button></div>
        <div className="grid gap-3 sm:grid-cols-2">{items.map(({icon: ItemIcon, title: itemTitle, text}) => <div key={itemTitle} className="glass-panel flex min-h-43 flex-col rounded-lg border border-card/80 p-5"><ItemIcon size={21} className="text-brand-deep" /><h3 className="mt-5 font-display text-lg font-semibold text-foreground">{itemTitle}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p><Check size={17} className="mt-auto pt-1 text-success" /></div>)}</div>
      </section>)}
      <div className="brand-gradient flex flex-col items-start justify-between gap-5 rounded-xl p-8 text-primary-foreground sm:flex-row sm:items-center sm:p-10"><div><h2 className="font-display text-2xl font-bold">Not sure where to begin?</h2><p className="mt-2 text-sm text-primary-foreground/80">Tell us what you need, and we can start with the right conversation.</p></div><Button asChild variant="light" size="action"><Link to="/contact" search={{}}>Contact us <ArrowRight /></Link></Button></div>
    </div>
  </>;
}
