import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, MessagesSquare, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import officeImage from "@/assets/advisory-office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | A B Taxway Consultancy" },
    { name: "description", content: "Learn about A B Taxway Consultancy's approach to insurance, investment, ITR and GST guidance." },
    { property: "og:title", content: "About Us | A B Taxway Consultancy" },
    { property: "og:description", content: "Clear conversations and practical guidance for your financial and tax decisions." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});

function AboutPage() {
  return <>
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-20 sm:px-8 md:grid-cols-2 md:gap-16 md:pt-24">
      <div><p className="text-xs font-bold uppercase text-primary">About A B Taxway</p><h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-6xl">Good guidance starts with <span className="brand-text">a clear conversation.</span></h1><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Financial decisions and tax obligations are easier to navigate when the details are explained clearly. A B Taxway Consultancy brings insurance, investment, income tax and GST conversations together in one place.</p><Button asChild variant="consult" size="action" className="mt-8"><Link to="/contact" search={{}}>Let's talk <ArrowRight /></Link></Button></div>
      <img src={officeImage} alt="Organised advisory workspace with documents and natural light" width={1600} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover object-right shadow-xl" />
    </section>
    <section className="border-y border-border bg-card/40"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><p className="text-xs font-bold uppercase text-primary">Our approach</p><h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Simple steps. Considered decisions.</h2><div className="mt-9 grid gap-4 md:grid-cols-3">{[
      { icon: MessagesSquare, title: "Understand", text: "Start with your situation, questions and goals—not a one-size-fits-all answer." },
      { icon: ScanSearch, title: "Explore", text: "Look at the options, obligations and details that matter to your decision." },
      { icon: FileCheck2, title: "Move forward", text: "Take the next step with a clearer understanding of what is involved." },
    ].map(({icon: Icon, title, text}) => <div key={title} className="glass-panel rounded-lg border border-card/80 p-6"><Icon size={25} className="text-primary" /><h3 className="mt-6 font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div></div></section>
    <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-18 sm:px-8 md:flex-row md:items-center"><div><h2 className="font-display text-3xl font-bold">Have a question?</h2><p className="mt-2 text-muted-foreground">Tell us which area you would like to discuss.</p></div><Button asChild variant="consult" size="action"><Link to="/contact" search={{}}>Get in touch <ArrowRight /></Link></Button></section>
  </>;
}
