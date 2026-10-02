import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
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
    { name: "description", content: "Get in touch with Anilkumarsingh Bhadauria at A B Taxway Consultancy for insurance, investment, income tax return or GST services." },
    { property: "og:title", content: "Contact | A B Taxway Consultancy" },
    { property: "og:description", content: "Start a conversation about insurance, investments, income tax or GST." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  const [selected, setSelected] = useState(service ? serviceFromSlug[service] || "Something else" : "Insurance");
  const [message, setMessage] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [details, setDetails] = useState({ name: "", phone: "", email: "" });

  const enquiry = `A B Taxway Consultancy enquiry\nName: ${details.name}\nPhone: ${details.phone}\nEmail: ${details.email || "Not provided"}\nService: ${selected}\nMessage: ${message}`;

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappLink(enquiry), "_blank", "noopener,noreferrer");
    setPrepared(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 md:pt-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Get In Touch</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-6xl">
            Let's get the <span className="brand-text">conversation started.</span>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Tell us what you need help with. Your enquiry goes straight to {contact.name} on WhatsApp, or you can reach out directly via call or email.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-card/80 bg-card/60 p-5 shadow-sm backdrop-blur-sm sm:max-w-md">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Direct Contact</p>
              <p className="mt-1 text-lg font-bold text-foreground">{contact.name}</p>
              <p className="text-xs text-muted-foreground">{contact.title} • Advising since 2004</p>
            </div>

            <div className="flex flex-col gap-3.5 sm:max-w-md">
              <a
                href={`tel:${contact.tel}`}
                className="glass-strong flex items-center gap-3.5 rounded-2xl border border-card/80 p-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-sm"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs font-normal text-muted-foreground">Call directly</span>
                  <span className="font-semibold">{contact.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong flex items-center gap-3.5 rounded-2xl border border-card/80 p-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-sm"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-whatsapp/10 text-whatsapp">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="block text-xs font-normal text-muted-foreground">WhatsApp chat</span>
                  <span className="font-semibold">Quick response on WhatsApp</span>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="glass-strong flex items-center gap-3.5 rounded-2xl border border-card/80 p-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-sm"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs font-normal text-muted-foreground">Email us</span>
                  <span className="font-semibold">{contact.email}</span>
                </div>
              </a>

              <div className="glass-strong flex items-center gap-3.5 rounded-2xl border border-card/80 p-3.5 text-sm text-foreground">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="block text-xs font-normal text-muted-foreground">Office hours</span>
                  <span className="font-semibold">{contact.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-3xl border border-card/80 p-6 sm:p-8">
          {prepared ? (
            <div role="status">
              <span className="grid size-12 place-items-center rounded-2xl bg-success/10 text-success">
                <Check size={24} />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Almost there — tap Send in WhatsApp</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                WhatsApp has opened with your message ready. Your enquiry reaches {contact.name} once you press Send there.
              </p>
              <pre className="mt-6 whitespace-pre-wrap break-words rounded-2xl bg-secondary p-5 font-sans text-sm leading-relaxed text-foreground border border-border/50">
                {enquiry}
              </pre>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="consult" size="action">
                  <a href={whatsappLink(enquiry)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} /> Open WhatsApp again
                  </a>
                </Button>
                <Button type="button" variant="outline" size="action" onClick={() => setPrepared(false)}>
                  Edit details
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={prepare} className="space-y-5">
              <div>
                <h2 className="font-display text-2xl font-bold">Tell us what you need</h2>
                <p className="mt-1 text-sm text-muted-foreground">A few details are enough to get started.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your full name *</Label>
                  <Input
                    id="name"
                    required
                    autoComplete="name"
                    placeholder="e.g. Rajesh Sharma"
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    className="h-12 bg-card/70 px-4"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number *</Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={details.phone}
                    onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                    className="h-12 bg-card/70 px-4"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. yourname@example.com"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  className="h-12 bg-card/70 px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service required</Label>
                <select
                  id="service"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="h-12 w-full rounded-md border border-input bg-card/70 px-4 text-sm text-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your message *</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your tax, insurance, GST or investment requirement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none bg-card/70 p-4"
                />
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                This prepares a pre-filled WhatsApp enquiry with {contact.name}. Tap Send there to connect immediately.
              </p>
              <Button type="submit" variant="gradient" size="action" className="w-full sm:w-auto">
                Send via WhatsApp <ArrowRight size={16} />
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Address and Google Maps Section */}
      <div className="mt-16 border-t border-border/70 pt-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <MapPin size={14} /> Our Office Location
            </div>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Visit our office in Ahmedabad
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We welcome clients for in-person consultations regarding ITR filing, GST registration & compliance, portfolio reviews, and insurance claims.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-card/80 bg-card/60 p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <strong className="block font-semibold text-foreground">{contact.address.title}</strong>
                  <span className="text-muted-foreground">{contact.address.line1}</span>
                  <span className="block text-muted-foreground">{contact.address.city}, {contact.address.pincode}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm pt-2 border-t border-border/50 text-muted-foreground">
                <Clock size={16} className="text-primary shrink-0" />
                <span>{contact.hours}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="consult" size="action">
                <a href={contact.address.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation size={16} /> Open in Google Maps
                </a>
              </Button>
              <Button asChild variant="outline" size="action">
                <Link to="/services">Explore all services</Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-card/80 shadow-lg bg-card/60">
            <iframe
              title="A B Taxway Consultancy Location Map"
              src="https://maps.google.com/maps?q=Ahmedabad%20Gujarat%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale contrast-[1.05] dark:invert-[0.9] dark:hue-rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
