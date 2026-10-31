"use client";
import { useState } from "react";
import { CalendarDays, ChevronDown, Menu, X } from "lucide-react";
import { treatments } from "@/lib/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments", drop: true },
  { href: "#doctor", label: "Doctor" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reels", label: "Videos" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <div className="wrap header-in">
        <a href="#home" className="logo" aria-label="New Look Aesthetic Clinic home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="New Look Aesthetic Clinic" width={265} height={90} />
        </a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l, i) => (
            <div key={l.href} className={l.drop ? "has-drop" : ""}>
              <a href={l.href} className={i === 0 ? "active" : ""} onClick={close}>
                {l.label} {l.drop && <ChevronDown size={14} aria-hidden />}
              </a>
              {l.drop && (
                <div className="drop">
                  {treatments.map((t) => (
                    <a key={t.key} href="#treatments" onClick={close}>{t.name}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" className="btn btn-sm nav-cta" onClick={close}>
            <CalendarDays size={16} aria-hidden /> Book Appointment
          </a>
        </nav>
        <a href="#contact" className="btn btn-sm head-cta">
          <CalendarDays size={16} aria-hidden /> Book Appointment
        </a>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
