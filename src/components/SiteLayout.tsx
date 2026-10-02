import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, ArrowUpRight, ChevronDown, Menu, MessageCircle, Moon, Phone, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { contact, services, whatsappLink } from "@/lib/site-content";
import logo from "@/assets/ab-logo.jpg.asset.json";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/insurance-advisor" as const, label: "Insurance Advisor" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

function Brand() {
  return <Link to="/" aria-label="A B Taxway Consultancy home" className="flex min-w-0 items-center gap-3">
    <img src={logo.url} alt="A B Consultancy logo" width={44} height={44} className="size-11 shrink-0 rounded-xl object-cover shadow-md" />
    <span className="min-w-0 leading-tight"><span className="block font-display text-base font-bold text-foreground">A B Taxway</span><span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Consultancy</span></span>
  </Link>;
}

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.classList.contains("dark")); }, []);
  const toggle = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next); localStorage.setItem("theme", next ? "dark" : "light"); };
  return { dark, toggle };
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const { dark, toggle } = useTheme();

  useEffect(() => { const on = () => setScrolled(window.scrollY > 12); on(); window.addEventListener("scroll", on, { passive: true }); return () => window.removeEventListener("scroll", on); }, []);
  useEffect(() => { setMenuOpen(false); setMega(false); }, [path]);

  return <div className="min-h-screen overflow-x-hidden">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2">Skip to content</a>
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav aria-label="Primary navigation" className={`glass-strong relative mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border transition-all duration-300 ${scrolled ? "border-primary/30 px-4 py-2 shadow-lift sm:px-5" : "border-card/80 px-4 py-3 shadow-sm sm:px-6"}`}>
        <Brand />
        <div className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHovered(null)}>
          {links.map((link) => {
            const active = path === link.to;
            const isServices = link.to === "/services";
            return <div key={link.to} className="relative" onMouseEnter={() => { setHovered(link.to); setMega(isServices); }} onMouseLeave={() => isServices && setMega(false)}>
              {hovered === link.to && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-secondary" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <Link to={link.to} aria-current={active ? "page" : undefined} onFocus={() => setMega(isServices)} className={`relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {link.label}{isServices && <ChevronDown size={14} className={`transition-transform ${mega ? "rotate-180" : ""}`} />}
                {active && <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary" />}
              </Link>
              {isServices && <AnimatePresence>{mega && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="glass-strong grid grid-cols-2 gap-2 rounded-2xl border border-card p-3 shadow-lift">
                  {services.map(({ slug, title, short, icon: Icon }) => <Link key={slug} to="/services" hash={slug} className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-secondary focus-visible:bg-secondary">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition-transform group-hover:scale-110 group-hover:bg-card"><Icon size={19} /></span>
                    <span><span className="block text-sm font-semibold text-foreground">{title}</span><span className="block text-xs leading-snug text-muted-foreground">{short}</span></span>
                  </Link>)}
                </div>
              </motion.div>}</AnimatePresence>}
            </div>;
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${contact.tel}`} className="hidden items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary xl:inline-flex"><Phone size={15} className="text-primary" />{contact.phoneDisplay}</a>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun /> : <Moon />}</Button>
          <Button asChild variant="gradient" size="consult" className="group shine"><Link to="/contact">Book a consultation <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Button>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun /> : <Moon />}</Button>
          <Button variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <motion.span key={menuOpen ? "x" : "m"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>{menuOpen ? <X /> : <Menu />}</motion.span>
          </Button>
        </div>
        <motion.div aria-hidden style={{ scaleX: progress }} className="brand-gradient absolute inset-x-4 -bottom-px h-0.5 origin-left rounded-full" />
      </nav>
    </header>

    <AnimatePresence>{menuOpen && <>
      <motion.div className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} />
      <motion.aside aria-label="Mobile menu" className="glass-strong fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col border-l border-card p-6 shadow-lift lg:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 32 }}>
        <div className="flex items-center justify-between"><Brand /><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></Button></div>
        <nav className="mt-8 flex flex-col gap-1">
          {links.map((link, i) => <motion.div key={link.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.05 }}>
            <Link to={link.to} className={`block rounded-xl px-4 py-3 text-base font-medium ${path === link.to ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary"}`}>{link.label}</Link>
          </motion.div>)}
        </nav>
        <div className="mt-auto grid gap-3">
          <Button asChild variant="gradient" size="action"><a href={`tel:${contact.tel}`}><Phone /> Call {contact.phoneDisplay}</a></Button>
          <Button asChild variant="whatsapp" size="action"><a href={whatsappLink("Hello, I'd like to enquire about your services.")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
        </div>
      </motion.aside>
    </>}</AnimatePresence>

    <main id="main">
      <motion.div key={path} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>{children}</motion.div>
    </main>

    <footer className="relative mt-8 bg-card/50">
      <div aria-hidden className="brand-gradient h-0.5" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div><Brand /><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">Insurance, investments, income tax and GST guidance from Anilkumarsingh Bhadauria — since 2004.</p></div>
        <div><h2 className="text-sm font-bold text-foreground">Quick links</h2><ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">{links.map(l => <li key={l.to}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>)}</ul></div>
        <div><h2 className="text-sm font-bold text-foreground">Services</h2><ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">{services.map(s => <li key={s.slug}><Link to="/services" hash={s.slug} className="hover:text-primary">{s.title}</Link></li>)}</ul></div>
        <div><h2 className="text-sm font-bold text-foreground">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={`tel:${contact.tel}`} className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary"><Phone size={16} className="text-primary" />{contact.phoneDisplay}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary"><MessageCircle size={16} className="text-whatsapp" />Chat on WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} A B Taxway Consultancy. Insurance is the subject matter of solicitation. Cover and returns are subject to market risks and insurer terms &amp; conditions.</p>
          <button onClick={() => window.scrollTo({ top: 0 })} className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-foreground hover:text-primary"><ArrowUp size={14} /> Back to top</button>
        </div>
      </div>
    </footer>

    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a href={`tel:${contact.tel}`} aria-label="Call us" className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-110"><Phone size={20} /></a>
      <a href={whatsappLink("Hello, I'd like to enquire about your services.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition-transform hover:scale-110"><MessageCircle size={24} /></a>
    </div>
    <Toaster position="top-center" />
  </div>;
}
