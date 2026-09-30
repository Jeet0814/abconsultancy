import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ab-logo.jpg.asset.json";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

function Brand() {
  return <Link to="/" aria-label="A B Taxway Consultancy home" className="flex min-w-0 items-center gap-3">
    <img src={logo.url} alt="A B Consultancy logo" width={44} height={44} className="size-11 shrink-0 rounded-lg object-cover shadow-md" />
    <span className="min-w-0 leading-tight"><span className="block font-display text-base font-bold text-foreground">A B Taxway</span><span className="block text-[10px] font-semibold uppercase text-muted-foreground">Consultancy</span></span>
  </Link>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  return <div className="min-h-screen overflow-x-hidden">
    <header className="relative z-30 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav aria-label="Primary navigation" className="glass-strong mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-xl border border-card/80 px-4 py-3 shadow-sm sm:px-6">
        <Brand />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link key={link.to} to={link.to} className={`text-sm font-medium transition-colors ${path === link.to ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>{link.label}</Link>)}
        </div>
        <div className="hidden md:block"><Button asChild variant="consult" size="consult"><Link to="/contact">Book a consultation <ArrowUpRight /></Link></Button></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </nav>
      {menuOpen && <div className="glass-strong absolute left-4 right-4 top-full mt-2 rounded-xl border border-card p-3 shadow-lg sm:left-6 sm:right-6 md:hidden">
        {links.map((link) => <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="block rounded-md px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary">{link.label}</Link>)}
      </div>}
    </header>
    <main id="main">{children}</main>
    <footer className="border-t border-border/70 bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Brand />
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">{links.map(link => <Link key={link.to} to={link.to} className="hover:text-primary">{link.label}</Link>)}</nav>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} A B Taxway Consultancy</p>
      </div>
    </footer>
  </div>;
}
