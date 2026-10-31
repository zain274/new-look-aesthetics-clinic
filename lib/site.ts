// ✏️ Edit everything about the clinic here.
export const site = {
  name: "New Look Aesthetic Clinic",
  tagline: "Advanced Aesthetic & Skin Care Solutions for a Healthier, More Beautiful You.",
  address: "Plot # 17-C, Phase-II Ext, Ittehat Lane 12, DHA Defence, Karachi 75500",
  phones: [
    { label: "0343-0295163", tel: "+923430295163" },
  ],
  // WhatsApp number: country code + number, digits only (no + or 0). Form messages go here.
  whatsapp: "923430295163",
  social: {
    facebook: "https://www.facebook.com/p/New-Look-Aesthetics-Clinic-100069728003109/",
    instagram: "https://www.instagram.com/newlookaestheticsclinc/",
    youtube: "#", // add your YouTube link
  },
};

// Optional: paste the exact "Embed a map" src from Google Maps (Share, Embed a map) for a precise pin.
const mapEmbedOverride = "";
export const mapEmbed =
  mapEmbedOverride || "https://www.google.com/maps?output=embed&q=" + encodeURIComponent(site.address);

export const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.address);

export const treatments = [
  { key: "skin", name: "Skin Treatments", text: "Acne, pigmentation, dull or uneven skin. A plan built around your skin type." },
  { key: "prp", name: "PRP Therapy", text: "Platelet-rich plasma care for skin renewal and hair support." },
  { key: "laser", name: "Laser Hair Removal", text: "Modern laser sessions for smooth skin. Suitability checked at consultation." },
  { key: "hydra", name: "Hydra Facial", text: "Deep cleanse, exfoliation and hydration for fresh, glowing skin." },
  { key: "botox", name: "Botox & Fillers", text: "Subtle, natural-looking results by experienced doctors." },
  { key: "hair", name: "Hair Treatments", text: "Care for hair fall, thinning and scalp health." },
  { key: "multi", name: "Multiple Treatments", text: "Not sure what you need? Combine treatments in one tailored plan." },
];

// ⚠️ SAMPLE reviews. Replace with real patient feedback (with permission) before going live.
export const testimonials = [
  { name: "Patient review 1", text: "Replace this with a real review from a patient." },
  { name: "Patient review 2", text: "Replace this with a real review from a patient." },
  { name: "Patient review 3", text: "Replace this with a real review from a patient." },
];

// Photos live in /public/gallery. Add or swap files here.
export const gallery = [
  { title: "Our clinic", src: "/gallery/clinic.jpg", w: 1000, h: 1000 },
  { title: "Treatment in progress", src: "/gallery/treatment.jpg", w: 720, h: 1280 },
  { title: "In the clinic", src: "/gallery/portrait.jpg", w: 720, h: 900 },
  { title: "Treatment close-up", src: "/gallery/closeup-1.jpg", w: 810, h: 1014 },
  { title: "Treatment close-up", src: "/gallery/closeup-2.jpg", w: 809, h: 1014 },
];

// Before/after photos. Only show with each patient's written consent. Results vary.
export const results = [
  { title: "Lip filler", src: "/gallery/r4.jpg" },
  { title: "Hair PRP", src: "/gallery/r2.jpg" },
  { title: "Nasolabial fold filler", src: "/gallery/r3.jpg" },
  { title: "Lip treatment", src: "/gallery/r1.jpg" },
];

// Doctor. Fill education/experience with VERIFIED facts only. Empty lists stay hidden on the site.
export const doctor = {
  name: "Aster Sohail",
  title: "Aesthetic Physician & Trainer",
  photo: "/doctor.jpg",
  bio: "Aster Sohail leads treatments at New Look Aesthetic Clinic, with a focus on safe, natural-looking aesthetic care.",
  education: [] as string[],   // e.g. "MBBS, Dow University of Health Sciences"
  experience: [] as string[],  // e.g. "10 years in aesthetic medicine"
  registration: "",            // e.g. "PMDC No. 12345-P"
};

// Instagram posts/reels. type: "p" (post) or "reel"; id = the code in the link.
export const reels = [
  ["p","DesToPQEfSq"],["p","DesTkXVlagA"],["reel","Dcx_hynis3B"],["reel","DbIKIPzj2Xg"],["p","DbAt8L3iD7a"],
  ["p","DZUaE90lqMJ"],["p","DZZa-tiFn9J"],["p","DZhThwNFlo4"],["p","DaPgbz7iGXC"],["reel","DahhUZqE5iJ"],
  ["reel","DawqZdnEnmq"],["p","Da0M2-MCF3y"],["p","Da74z5KiFjP"],["p","DbSlCXSCIf7"],["p","DbkZJZQCGPO"],
  ["reel","Dcd5DvaDLYh"],["p","DbsYm8_liq3"],
].map(([type, id]) => ({ type, id }));

export const faqs = [
  { q: "How do I book an appointment?", a: "Fill the form below, message us on WhatsApp, or call us. We will confirm your time." },
  { q: "Is the first consultation free?", a: "Free consultation is available this Sunday only. Message us on WhatsApp to reserve a slot." },
  { q: "Are the treatments safe?", a: "Treatments are done by qualified professionals with modern equipment. Your doctor checks suitability and explains risks in the consultation." },
  { q: "Does the 50% off apply to every treatment?", a: "The summer offer is flat 50% off on all treatments. Ask us on WhatsApp for current terms." },
  { q: "Where is the clinic?", a: site.address + "." },
];
