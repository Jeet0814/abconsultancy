import { useEffect, useState, type FormEvent } from "react";
import { Check, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Testimonial = { id: string; name: string; service: string | null; message: string };

export function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [form, setForm] = useState({ name: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    supabase.from("testimonials").select("id,name,service,message").eq("approved", true).order("created_at", { ascending: false }).limit(9)
      .then(({ data }) => setItems(data ?? []));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const { error } = await supabase.from("testimonials").insert({ name: form.name.trim(), service: form.service.trim() || null, message: form.message.trim() });
    if (error) { setStatus("error"); return; }
    setStatus("sent");
    setForm({ name: "", service: "", message: "" });
  }

  return <section id="testimonials" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
    <p className="text-xs font-bold uppercase text-primary">Client voices</p>
    <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">What clients say about working with <span className="brand-text">Anilkumarsingh Bhadauria</span></h2>
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.length === 0 && <p className="glass-panel rounded-xl border border-card/80 p-6 text-sm text-muted-foreground sm:col-span-2">Client feedback will appear here once shared. Have you worked with us? Be the first to leave a few words.</p>}
        {items.map(t => <figure key={t.id} className="glass-panel rounded-xl border border-card/80 p-6">
          <Quote className="text-primary" size={22} />
          <blockquote className="mt-3 text-sm leading-relaxed text-foreground">{t.message}</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-foreground">{t.name}{t.service && <span className="block text-xs font-normal text-muted-foreground">{t.service}</span>}</figcaption>
        </figure>)}
      </div>
      <div className="glass-panel rounded-xl border border-card/80 p-6">
        {status === "sent" ? <div role="status"><span className="grid size-11 place-items-center rounded-lg bg-success/10 text-success"><Check /></span><h3 className="mt-4 font-display text-xl font-bold">Thank you!</h3><p className="mt-2 text-sm text-muted-foreground">Your feedback has been received and will appear once it has been reviewed.</p><Button variant="outline" className="mt-5" onClick={() => setStatus("idle")}>Share another</Button></div> :
        <form onSubmit={submit} className="space-y-4">
          <h3 className="font-display text-xl font-bold">Share your experience</h3>
          <div className="space-y-2"><Label htmlFor="t-name">Your name</Label><Input id="t-name" required maxLength={80} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
          <div className="space-y-2"><Label htmlFor="t-service">Service used (optional)</Label><Input id="t-service" maxLength={60} placeholder="e.g. ITR filing" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} /></div>
          <div className="space-y-2"><Label htmlFor="t-message">Your feedback</Label><Textarea id="t-message" required minLength={10} maxLength={1000} rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="resize-none" /></div>
          {status === "error" && <p className="text-sm text-destructive">Sorry, your feedback couldn't be saved. Please try again.</p>}
          <p className="text-xs text-muted-foreground">Feedback is shown after review.</p>
          <Button type="submit" variant="consult" size="action" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : "Submit feedback"}</Button>
        </form>}
      </div>
    </div>
  </section>;
}
