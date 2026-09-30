import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappLink } from "@/lib/site-content";

export const Route = createFileRoute("/insurance-advisor")({
  head: () => ({ meta: [
    { title: "Insurance Advisor | A B Taxway Consultancy" },
    { name: "description", content: "Describe your insurance needs and get suggested cover options and a checklist of documents to prepare." },
    { property: "og:title", content: "Insurance Advisor | A B Taxway Consultancy" },
    { property: "og:description", content: "Find which insurance options may suit you and what to prepare for your consultation." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AdvisorPage,
});

const examples = [
  "I'm 34, married with a 2-year-old daughter, and the only earning member. I have no life cover yet.",
  "My parents are in their 60s and have no health insurance. My father has diabetes.",
  "I run a small shop and want to protect my stock and myself against accidents.",
];

function AdvisorPage() {
  const [needs, setNeeds] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setAnswer(""); setError(""); setLoading(true);
    try {
      const res = await fetch("/api/insurance-advice", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ needs }), signal: controller.signal });
      if (!res.ok || !res.body) { const data = await res.json().catch(() => ({})); setError(data.error ?? "Something went wrong. Please try again."); return; }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = ""; let got = false;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n"); buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const evt = JSON.parse(payload);
            if (evt.type === "response.output_text.delta") { got = true; setAnswer(a => a + evt.delta); }
            else if (evt.type === "error" || evt.type === "response.failed") setError("The advisor couldn't finish. Please try again.");
          } catch { /* partial line */ }
        }
      }
      if (!got) setError(e => e || "The advisor didn't return any suggestions. Please add a little more detail.");
    } catch (e) {
      if ((e as Error).name !== "AbortError") setError("Couldn't reach the advisor. Please check your connection.");
    } finally { setLoading(false); }
  }

  return <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-20 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:pt-24">
    <div>
      <p className="text-xs font-bold uppercase text-primary">Insurance Advisor</p>
      <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">Find the cover that <span className="brand-text">fits your life.</span></h1>
      <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Tell us about yourself, your family and what worries you. You'll get suggested insurance options and a list of what to prepare before speaking with Anilkumarsingh Bhadauria.</p>
      <p className="mt-6 flex max-w-md items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" />These suggestions are general guidance, not a final recommendation. Please don't share policy numbers, Aadhaar or bank details here.</p>
    </div>
    <div className="glass-panel rounded-xl border border-card/80 p-5 sm:p-8">
      <form onSubmit={submit} className="space-y-4">
        <Label htmlFor="needs">Describe your insurance needs</Label>
        <Textarea id="needs" required minLength={10} maxLength={2000} rows={5} value={needs} onChange={e => setNeeds(e.target.value)} placeholder="Age, family, work, existing policies, what you want to protect…" className="resize-none bg-card/70 p-4" />
        <div className="flex flex-wrap gap-2">{examples.map(ex => <button key={ex} type="button" onClick={() => setNeeds(ex)} className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-left text-xs text-muted-foreground hover:text-foreground">{ex.slice(0, 48)}…</button>)}</div>
        <Button type="submit" variant="consult" size="action" disabled={loading}>{loading ? <Loader2 className="animate-spin" /> : null}{loading ? "Thinking…" : "Get suggestions"} {!loading && <ArrowRight />}</Button>
      </form>
      {error && <p role="alert" className="mt-6 text-sm text-destructive">{error}</p>}
      {answer && <div className="mt-8 border-t border-border pt-6">
        <h2 className="font-display text-xl font-bold">Suggestions for you</h2>
        <div className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-foreground">{answer}</div>
        {!loading && <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="consult" size="action"><a href={whatsappLink(`Hello, I'd like to discuss insurance.\n\nMy needs: ${needs}`)} target="_blank" rel="noopener noreferrer">Discuss on WhatsApp <ArrowRight /></a></Button>
          <Button asChild variant="outline" size="action"><Link to="/contact" search={{ service: "insurance" }}>Send an enquiry</Link></Button>
        </div>}
      </div>}
    </div>
  </section>;
}
