import { HeartPulse, ShieldCheck, CarFront, Home, BriefcaseBusiness, TrendingUp, FileText, ReceiptText } from "lucide-react";

export const services = [
  {
    slug: "insurance",
    number: "01",
    title: "Insurance",
    short: "The right cover for the people and things that matter.",
    description: "Explore protection for your family, health, vehicle, home and business. We help you understand options, compare cover and review what suits your needs.",
    icon: ShieldCheck,
    items: [
      { icon: HeartPulse, title: "Life & health", text: "Term, life, health and family protection options." },
      { icon: CarFront, title: "Motor & travel", text: "Vehicle and travel cover for everyday peace of mind." },
      { icon: Home, title: "Home & property", text: "Protection for your home and valuable assets." },
      { icon: BriefcaseBusiness, title: "Business cover", text: "Relevant general insurance for business risks." },
    ],
  },
  {
    slug: "investments",
    number: "02",
    title: "Investments",
    short: "Thoughtful planning for the goals ahead.",
    description: "Bring your goals, time horizon and comfort with risk into focus. We help you understand investment choices and make more informed decisions.",
    icon: TrendingUp,
    items: [
      { icon: TrendingUp, title: "Goal planning", text: "Map savings and investments to your priorities." },
      { icon: FileText, title: "Portfolio review", text: "Understand how your existing choices fit together." },
    ],
  },
  {
    slug: "income-tax",
    number: "03",
    title: "Income Tax & ITR",
    short: "Filing support, without the last-minute confusion.",
    description: "Get help organising documents, understanding applicable deductions and filing income tax returns for individuals and businesses.",
    icon: FileText,
    items: [
      { icon: FileText, title: "ITR filing", text: "Return preparation and filing assistance." },
      { icon: ReceiptText, title: "Tax guidance", text: "Support with records, deductions and tax questions." },
    ],
  },
  {
    slug: "gst",
    number: "04",
    title: "GST Consultancy",
    short: "Stay on top of the essentials of compliance.",
    description: "Practical assistance with GST registration, return filing and ongoing compliance for your business.",
    icon: ReceiptText,
    items: [
      { icon: BriefcaseBusiness, title: "Registration", text: "Help with GST registration and getting started." },
      { icon: ReceiptText, title: "Returns & compliance", text: "Guidance on filing, records and routine requirements." },
    ],
  },
] as const;

export const contact = {
  name: "Anilkumarsingh Bhadauria",
  title: "Founder & Financial Advisor",
  phoneDisplay: "+91 94268 44926",
  tel: "+919426844926",
  whatsapp: "919426844926",
} as const;

export function whatsappLink(text?: string) {
  return `https://wa.me/${contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/** Upcoming compliance dates. Edit this list each year; past dates are hidden automatically. */
export const keyDates = [
  { date: "2026-10-11", title: "GSTR-1 (monthly)", tag: "GST" },
  { date: "2026-10-20", title: "GSTR-3B (monthly)", tag: "GST" },
  { date: "2026-10-31", title: "ITR for audit cases", tag: "ITR" },
  { date: "2026-12-15", title: "Advance tax – 3rd instalment", tag: "Tax" },
  { date: "2026-12-31", title: "Belated / revised ITR (FY 2025-26)", tag: "ITR" },
  { date: "2026-12-31", title: "GSTR-9 annual return", tag: "GST" },
  { date: "2027-03-15", title: "Advance tax – final instalment", tag: "Tax" },
  { date: "2027-07-31", title: "ITR for individuals (non-audit)", tag: "ITR" },
] as const;

export const checklists = [
  { title: "Income Tax Return (ITR)", items: ["PAN and Aadhaar (linked)", "Form 16 / salary slips", "Form 26AS and AIS/TIS", "Bank statements and interest certificates", "Investment proofs (80C, 80D, etc.)", "Home loan interest certificate", "Capital gains statements", "Rent receipts (for HRA)"] },
  { title: "GST registration", items: ["PAN of business / proprietor", "Aadhaar and photograph", "Proof of business address", "Bank account details / cancelled cheque", "Partnership deed or incorporation certificate", "Authorisation letter (if applicable)"] },
  { title: "GST return filing", items: ["Sales invoices for the period", "Purchase invoices", "Credit / debit notes", "E-way bills (if applicable)", "Previous return copies", "GSTR-2B reconciliation"] },
] as const;

export const faqs = [
  { q: "How much life insurance cover do I need?", a: "A common starting point is 10–15 times your annual income, adjusted for loans, dependants and existing savings. Try the cover estimator above, then let us review your situation." },
  { q: "Is health insurance from my employer enough?", a: "Employer cover usually ends when you change jobs and may be limited. A personal family floater policy gives continuity. We can help you compare options." },
  { q: "Should I choose the old or new tax regime?", a: "It depends on your deductions. If you claim large deductions (80C, HRA, home loan), the old regime may suit you; otherwise the new regime often works out lower. Use the estimator for a rough idea." },
  { q: "What happens if I miss the ITR deadline?", a: "You can still file a belated return, usually with a late fee and interest on tax due, and some losses cannot be carried forward." },
  { q: "Who needs GST registration?", a: "Generally businesses above the turnover threshold, inter-state suppliers, and e-commerce sellers, among others. We can check whether it applies to you." },
  { q: "How often are GST returns filed?", a: "Most regular taxpayers file GSTR-1 and GSTR-3B monthly or quarterly (under QRMP), plus an annual return." },
] as const;
