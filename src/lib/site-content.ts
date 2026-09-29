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
