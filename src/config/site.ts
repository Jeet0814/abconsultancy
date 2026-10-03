/**
 * Authoritative Site Configuration for A B Taxway Consultancy.
 * 
 * Update your real contact details, founder credentials, milestones,
 * and office media here. Any credential or photo left empty ("")
 * will be automatically hidden from public display.
 */

export const siteConfig = {
  brand: {
    name: "A B Taxway Consultancy",
    fullName: "A B Taxway Consultancy",
    tagline: "Helping Build The Wealthy Life",
    since: 2004,
  },

  contact: {
    name: "Anilkumarsingh Bhadauria",
    title: "Founder & Financial Advisor",
    phoneDisplay: "+91 94268 44926",
    tel: "+919426844926",
    whatsapp: "919426844926",
    email: "abconsultancynvs@gmail.com",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM",
    address: {
      title: "A B Taxway Consultancy",
      line1: "B-3, Surbhi Society, Opp. Sentosha Residency",
      city: "Ramnagar-2, Vijalpore, Navsari, Gujarat",
      pincode: "396450",
      full: "B-3, Surbhi Society, Opp. Sentosha Residency, Ramnagar-2, Vijalpore, Navsari, Gujarat 396450, India",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=B-3+Surbhi+Society+Opp+Sentosha+Residency+Ramnagar-2+Vijalpore+Navsari+Gujarat+396450",
      googleMapsEmbedUrl: "https://maps.google.com/maps?q=B-3%20Surbhi%20Society,%20Opp.%20Sentosha%20Residency,%20Ramnagar-2,%20Vijalpore,%20Navsari,%20Gujarat%20396450&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
  },

  founder: {
    name: "Anilkumarsingh Bhadauria",
    role: "Founder & Principal Advisor",
    experienceYears: 22,
    qualifications: "Financial Advisor, Tax Practitioner & General Insurance Specialist",
    bio: "Guiding individuals, families, and business owners across Navsari, Gujarat, and India since 2004. Dedicated to transparent, ethical, and customized financial solutions with our guiding motto: Helping Build The Wealthy Life.",
    /**
     * Founder Photo Slot:
     * Place your real photo in `public/founder.jpg` or `src/assets/founder.jpg` and set the path below.
     * If left empty (""), the founder section will display an elegant initials badge instead.
     */
    photo: "", 
  },

  /**
   * Official Regulatory / License Credentials
   * Supply real registration numbers here when available.
   * If value is left empty (""), the item is automatically omitted from the website.
   */
  officialCredentials: [
    {
      id: "irdai",
      label: "IRDAI / POSP Registration",
      value: "", // PLACEHOLDER: e.g. "POSP-GJ-XXXXX"
      note: "Authorized Insurance Advisory (Life, Health & General)",
    },
    {
      id: "amfi",
      label: "AMFI ARN License",
      value: "", // PLACEHOLDER: e.g. "ARN-XXXXX"
      note: "Registered Mutual Fund & SIP Distribution",
    },
    {
      id: "tax",
      label: "Tax Practitioner Registration",
      value: "", // PLACEHOLDER: e.g. "TRP / GSTP No."
      note: "Income Tax & GST Compliance Desk",
    },
  ],

  /**
   * Firm Journey Milestones (Since 2004)
   */
  milestones: [
    {
      year: "2004",
      title: "Inception of Advisory Practice",
      description: "Founded by Anilkumarsingh Bhadauria with a mission to deliver transparent, client-first life and general insurance advisory in Navsari and Gujarat.",
    },
    {
      year: "2010",
      title: "Tax Planning & ITR Filing Expansion",
      description: "Expanded core practice into end-to-end Income Tax Return (ITR) preparation, deduction planning, and individual tax compliance.",
    },
    {
      year: "2017",
      title: "Dedicated GST & MSME Desk",
      description: "Guided local business owners, traders, and service providers through the nationwide GST rollout, e-way bills, and monthly GSTR compliance.",
    },
    {
      year: "Present",
      title: "Comprehensive Wealth & Protection Hub",
      description: "Over 22 years of trusted service, supporting hundreds of client families and businesses under the ethos 'Helping Build The Wealthy Life'.",
    },
  ],

  /**
   * Core Values & Advisory Principles
   */
  values: [
    {
      title: "Unbiased & Need-Based",
      description: "Every insurance policy, mutual fund SIP, and tax deduction is customized to your exact financial profile and life stage—never driven by sales targets.",
    },
    {
      title: "End-to-End Claim Support",
      description: "We stand firmly beside you and your family when it matters most, guiding documentation and settlement processes with insurers.",
    },
    {
      title: "Meticulous Compliance",
      description: "Error-free tax computation and proactive deadline reminders ensure you stay compliant without last-minute panic or penalties.",
    },
    {
      title: "Lifelong Partnership",
      description: "Financial planning is not a one-time transaction. We conduct ongoing reviews to keep your portfolio aligned with your changing life goals.",
    },
  ],

  /**
   * Real Office Photo:
   * Provide path (e.g. '/office.jpg') if you have a real photo.
   * If left empty (""), the system uses the default advisory workspace illustration.
   */
  officePhoto: "",
};
