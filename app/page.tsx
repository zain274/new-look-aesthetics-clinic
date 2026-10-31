import {
  CalendarDays, Check, ArrowRight, Phone, MapPin, MessageCircle, Headset, Gem, ShieldCheck, Heart,
  UserCheck, Syringe, ScanFace, Sparkles, Droplets, Scissors, LayoutGrid, Zap, Star, Facebook,
  Instagram, Youtube, ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Reels from "@/components/Reels";
import ChatWidget from "@/components/ChatWidget";
import { site, treatments, testimonials, gallery, results, doctor, faqs, mapUrl, mapEmbed } from "@/lib/site";

const icons: Record<string, React.ElementType> = {
  skin: ScanFace, prp: Syringe, laser: Zap, hydra: Droplets, botox: Sparkles, hair: Scissors, multi: LayoutGrid,
};
const waLink = (t: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span className="tb-addr"><MapPin size={16} aria-hidden /> {site.address}</span>
          <span className="tb-phone">
            <Phone size={16} aria-hidden />
            {site.phones.map((p, i) => (
              <span key={p.tel}>{i > 0 && " | "}<a href={`tel:${p.tel}`}>{p.label}</a></span>
            ))}
          </span>
          <span className="tb-soc">
            <a href={site.social.facebook} aria-label="Facebook"><Facebook size={16} /></a>
            <a href={site.social.instagram} aria-label="Instagram"><Instagram size={16} /></a>
            <a href={site.social.youtube} aria-label="YouTube"><Youtube size={16} /></a>
          </span>
        </div>
      </div>

      <Header />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <span className="pill">Reveal Your Natural Beauty</span>
              <h1>New Look <span>Aesthetic Clinic</span></h1>
              <p className="lead">Advanced Aesthetic &amp; Skin Care Solutions for a Healthier, More Beautiful You.</p>
              <ul className="ticks">
                {["Expert Doctors", "Modern Technology", "Personalized Care"].map((t) => (
                  <li key={t}><Check size={14} aria-hidden /> {t}</li>
                ))}
              </ul>
              <div className="actions">
                <a href="#contact" className="btn"><CalendarDays size={18} aria-hidden /> Book Your Appointment <ArrowRight size={18} aria-hidden /></a>
                <a href={`tel:${site.phones[0].tel}`} className="btn btn-ghost"><Phone size={18} aria-hidden /> Call Now</a>
              </div>
            </div>
            <div className="hero-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero.png" alt="Smiling woman with glowing skin" width={503} height={426} fetchPriority="high" />
              <p className="script">Look Good<br />Feel Confident <Heart size={30} aria-hidden /></p>
            </div>
          </div>
        </section>

        {/* TREATMENT STRIP */}
        <section className="wrap strip" aria-labelledby="t-strip">
          <div className="strip-head">
            <h2 className="kicker" id="t-strip">Our Treatments</h2>
            <p className="h3">Comprehensive Aesthetic Solutions</p>
            <a href="#treatments" className="btn btn-sm">Explore All Services <ArrowRight size={16} aria-hidden /></a>
          </div>
          <ul className="strip-list">
            {treatments.map((t) => {
              const I = icons[t.key];
              return (
                <li key={t.key}><a href="#treatments"><span className="ic"><I size={30} aria-hidden /></span>{t.name}</a></li>
              );
            })}
          </ul>
        </section>

        {/* WHY + OFFER */}
        <section id="about" className="wrap why">
          <div className="why-copy">
            <h2 className="kicker">Why Choose Us</h2>
            <p className="h2">Your Trusted Aesthetic Partner</p>
            <p>At {site.name}, we combine advanced technology with expert care to help you look and feel your best.</p>
            <a href="#contact" className="btn btn-sm">Learn More <ArrowRight size={16} aria-hidden /></a>
          </div>
          <ul className="why-grid">
            {[
              [UserCheck, "Experienced Professionals"], [Gem, "Advanced Technology"],
              [ShieldCheck, "Safe & Effective Treatments"], [Heart, "Personalized Care"],
            ].map(([I, t]) => {
              const Icon = I as React.ElementType;
              return <li key={t as string}><span className="ic sm"><Icon size={24} aria-hidden /></span>{t as string}</li>;
            })}
          </ul>
          <div className="offer">
            <div className="offer-copy">
              <p className="script sm">Summer Special Offers</p>
              <p className="big">Flat <b>50% OFF</b></p>
              <p>on All Treatments</p>
              <a href={waLink("Hello, I want to grab the Summer 50% OFF offer.")} className="btn btn-sm">Grab the Offer <ArrowRight size={16} aria-hidden /></a>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/offer.png" alt="Client enjoying a facial treatment" width={246} height={213} loading="lazy" />
          </div>
        </section>

        {/* QUICK BAR */}
        <section className="quick" aria-label="Quick info">
          <ul className="wrap quick-in">
            <li><a href="#contact"><CalendarDays size={30} aria-hidden /><span><b>Book Appointment</b>Easily Online</span></a></li>
            <li><a href={waLink("Hello, I want a free consultation.")}><Headset size={30} aria-hidden /><span><b>Free Consultation</b>This Sunday Only</span></a></li>
            <li><a href={mapUrl} target="_blank" rel="noopener noreferrer"><MapPin size={30} aria-hidden /><span><b>Visit Our Clinic</b>Karachi</span></a></li>
            <li><a href={waLink("Hello, I have a question.")}><MessageCircle size={30} aria-hidden /><span><b>Chat With Us</b>on WhatsApp</span></a></li>
          </ul>
        </section>

        {/* TREATMENTS */}
        <section id="treatments" className="section">
          <div className="wrap">
            <h2 className="kicker">Treatments</h2>
            <p className="h2">Care for your skin, hair and confidence</p>
            <ul className="cards">
              {treatments.map((t) => {
                const I = icons[t.key];
                return (
                  <li key={t.key} className="card">
                    <span className="ic"><I size={30} aria-hidden /></span>
                    <h3>{t.name}</h3>
                    <p>{t.text}</p>
                    <a href={waLink(`Hello, I want to know about ${t.name}.`)}>Ask on WhatsApp <ArrowRight size={16} aria-hidden /></a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* DOCTOR */}
        <section id="doctor" className="section">
          <div className="wrap doc">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={doctor.photo} alt={`${doctor.name} at work in the clinic`} width={900} height={1000} loading="lazy" />
            <div>
              <h2 className="kicker">Your Doctor</h2>
              <p className="h2">{doctor.name}</p>
              <p className="role">{doctor.title}</p>
              <p className="sub">{doctor.bio}</p>
              {doctor.education.length > 0 && (<><h3 className="mini">Education</h3><ul className="dl">{doctor.education.map((e) => <li key={e}><Check size={16} aria-hidden /> {e}</li>)}</ul></>)}
              {doctor.experience.length > 0 && (<><h3 className="mini">Experience</h3><ul className="dl">{doctor.experience.map((e) => <li key={e}><Check size={16} aria-hidden /> {e}</li>)}</ul></>)}
              {doctor.registration && <p className="reg">{doctor.registration}</p>}
              <a href="#contact" className="btn">Book a consultation <ArrowRight size={18} aria-hidden /></a>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section alt">
          <div className="wrap">
            <h2 className="kicker">Gallery</h2>
            <p className="h2">Inside New Look</p>
            <ul className="gal">
              {gallery.map((g) => (
                <li key={g.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={g.title} width={g.w} height={g.h} loading="lazy" />
                  <span>{g.title}</span>
                </li>
              ))}
            </ul>
            <h3 className="mini results-h">Results</h3>
            <ul className="res">
              <li className="big-res">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gallery/thread-lift.jpg" alt="Thread lift before and after" width={1024} height={1280} loading="lazy" />
              </li>
              {results.map((g) => (
                <li key={g.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={`${g.title} before and after`} width={206} height={206} loading="lazy" />
                  <span>{g.title}</span>
                </li>
              ))}
            </ul>
            <p className="fine">Results vary from person to person. Photos are shared with patient consent.</p>
          </div>
        </section>

        {/* VIDEOS */}
        <section id="reels" className="section">
          <div className="wrap">
            <h2 className="kicker">Videos</h2>
            <p className="h2">Watch us on Instagram</p>
            <Reels />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="section">
          <div className="wrap">
            <h2 className="kicker">Testimonials</h2>
            <p className="h2">What our patients say</p>
            <ul className="cards three">
              {testimonials.map((t) => (
                <li key={t.name} className="card">
                  <div className="stars" aria-label="5 stars">{[0,1,2,3,4].map((i) => <Star key={i} size={18} fill="currentColor" aria-hidden />)}</div>
                  <p>“{t.text}”</p>
                  <b>{t.name}</b>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="section alt">
          <div className="wrap narrow">
            <h2 className="kicker">FAQs</h2>
            <p className="h2">Common questions</p>
            {faqs.map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}<ChevronDown size={20} aria-hidden /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="wrap contact">
            <div>
              <h2 className="kicker">Contact</h2>
              <p className="h2">Book your appointment</p>
              <p className="sub">Send us your details. Your message goes straight to our WhatsApp.</p>
              <ul className="info">
                <li><MapPin aria-hidden /><span><b>Visit us</b>{site.address}<br /><a href={mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></span></li>
                <li><Phone aria-hidden /><span><b>Call</b>{site.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>)}</span></li>
                <li><MessageCircle aria-hidden /><span><b>WhatsApp</b><a href={waLink("Hello!")}>Chat with us</a></span></li>
              </ul>
            </div>
            <ContactForm />
          </div>
          <div className="wrap map">
            <iframe src={mapEmbed} title={`Map showing ${site.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm"><MapPin size={16} aria-hidden /> Get directions</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot-in">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.address}</p>
        </div>
      </footer>

      <ChatWidget />
      <a className="wa-float" href={waLink("Hello, I want to book an appointment.")} aria-label="Chat on WhatsApp">
        <MessageCircle size={28} aria-hidden />
      </a>
    </>
  );
}
