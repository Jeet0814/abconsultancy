import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { contact, whatsappLink } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const serviceOptions = ["Insurance", "Investments", "Income Tax & ITR", "GST Consultancy", "Something else"];
const serviceFromSlug: Record<string, string> = { insurance: "Insurance", investments: "Investments", "income-tax": "Income Tax & ITR", gst: "GST Consultancy" };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => ({ meta: [
    { title: "Contact | A B Taxway Consultancy" },
    { name: "description", content: "Get in touch with A B Taxway Consultancy about insurance, investment, income tax return or GST services." },
    { property: "og:title", content: "Contact | A B Taxway Consultancy" },
    { property: "og:description", content: "Start a conversation about insurance, investments, income tax or GST." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  const [selected, setSelected] = useState(service ? serviceFromSlug[service] || "Something else" : "Insurance");
  const [message, setMessage] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [details, setDetails] = useState({ name: "", contact: "" });
  const enquiry = `A B Taxway Consultancy enquiry\nName: ${details.name}\nContact: ${details.contact}\nService: ${selected}\nMessage: ${message}`;
  function prepare(event: FormEvent<HTMLFormElement>) { event.preventDefault(); window.open(whatsappLink(enquiry), "_blank", "noopener,noreferrer"); setPrepared(true); }
  return <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-20 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:pt-24">
    <div>
      <p className="text-xs font-bold uppercase text-primary">Contact</p>
      <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-6xl">Let's get the <span className="brand-text">conversation started.</span></h1>
      <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Tell us a little about what you need help with. Your enquiry goes straight to {contact.name} on WhatsApp, or you can call directly.</p>
      <div className="mt-6 rounded-2xl border border-card/80 bg-card/60 p-4 shadow-sm backdrop-blur-sm sm:max-w-md">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">Direct Contact</p>
        <p className="mt-1 text-base font-bold text-foreground">{contact.name}</p>
        <p className="text-xs text-muted-foreground">{contact.title} • Since 2004</p>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <a href={`tel:${contact.tel}`} className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary"><Phone size={20} className="text-primary" />{contact.phoneDisplay}</a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary"><MessageCircle size={20} className="text-whatsapp" />Chat on WhatsApp</a>
      </div>
      <div className="mt-10 border-t border-border pt-7">
        <p className="text-sm font-semibold text-foreground">Looking for a particular service?</p>
        <Link to="/services" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline">Explore what we offer <ArrowRight size={16} /></Link>
      </div>
    </div>
    <div className="glass-panel rounded-xl border border-card/80 p-5 sm:p-8">
      {prepared ? <div role="status"><span className="grid size-12 place-items-center rounded-lg bg-success/10 text-success"><Check /></span><h2 className="mt-5 font-display text-2xl font-bold">Almost there — tap Send in WhatsApp</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">WhatsApp has opened with your message ready. Your enquiry reaches us once you press Send there.</p><pre className="mt-6 whitespace-pre-wrap break-words rounded-lg bg-secondary p-5 font-sans text-sm leading-relaxed text-foreground">{enquiry}</pre><div className="mt-6 flex flex-wrap gap-3"><Button asChild variant="consult" size="action"><a href={whatsappLink(enquiry)} target="_blank" rel="noopener noreferrer"><MessageCircle />Open WhatsApp again</a></Button><Button type="button" variant="outline" size="action" onClick={() => setPrepared(false)}>Edit details</Button></div></div> : <form onSubmit={prepare} className="space-y-5"><div><h2 className="font-display text-2xl font-bold">Tell us what you need</h2><p className="mt-1 text-sm text-muted-foreground">A few details are enough to get started.</p></div><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="name">Your name</Label><Input id="name" required autoComplete="name" placeholder="Full name" value={details.name} onChange={event => setDetails({...details, name: event.target.value})} className="h-12 bg-card/70 px-4" /></div><div className="space-y-2"><Label htmlFor="contact-detail">Phone or email</Label><Input id="contact-detail" required placeholder="How to reach you" value={details.contact} onChange={event => setDetails({...details, contact: event.target.value})} className="h-12 bg-card/70 px-4" /></div></div><div className="space-y-2"><Label htmlFor="service">Service</Label><select id="service" value={selected} onChange={event => setSelected(event.target.value)} className="h-12 w-full rounded-md border border-input bg-card/70 px-4 text-sm text-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring">{serviceOptions.map(option => <option key={option}>{option}</option>)}</select></div><div className="space-y-2"><Label htmlFor="message">Your message</Label><Textarea id="message" required rows={5} placeholder="What would you like help with?" value={message} onChange={event => setMessage(event.target.value)} className="resize-none bg-card/70 p-4" /></div><p className="text-xs leading-relaxed text-muted-foreground">This opens WhatsApp with your enquiry ready. Tap Send there to deliver it.</p><Button type="submit" variant="consult" size="action">Send via WhatsApp <ArrowRight /></Button></form>}
    </div>
  </section>;
}
