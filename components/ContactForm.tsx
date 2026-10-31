"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { site, treatments } from "@/lib/site";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const treatment = String(f.get("treatment") || "");
    const message = String(f.get("message") || "").trim();

    const err: Record<string, string> = {};
    if (name.length < 2) err.name = "Enter your name.";
    if (phone.replace(/\D/g, "").length < 10) err.phone = "Enter a valid phone number.";
    setErrors(err);
    if (Object.keys(err).length) return;

    const lines = [`Hello ${site.name}, I would like to book an appointment.`, "", `Name: ${name}`, `Phone: ${phone}`];
    if (treatment) lines.push(`Treatment: ${treatment}`);
    if (message) lines.push(`Message: ${message}`);
    const text = lines.join("\n");

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
    const w = window.open(url, "_blank", "noopener");
    if (!w) window.location.href = url; // popup blocked (some phones)
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="e-name" />
        <small id="e-name" className="err">{errors.name}</small>
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="03xx-xxxxxxx" aria-invalid={!!errors.phone} aria-describedby="e-phone" />
        <small id="e-phone" className="err">{errors.phone}</small>
      </div>
      <div className="field">
        <label htmlFor="treatment">Treatment (optional)</label>
        <select id="treatment" name="treatment" defaultValue="">
          <option value="">Not sure yet</option>
          {treatments.map((t) => <option key={t.key}>{t.name}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us what you need or your preferred day and time." />
      </div>
      <button type="submit" className="btn btn-wa">
        <Send size={18} aria-hidden /> Send on WhatsApp
      </button>
      <p className="note" role="status">
        {sent
          ? "WhatsApp is open with your message ready. Tap Send there to finish."
          : "Your message opens in WhatsApp so you can send it directly to our team."}
      </p>
    </form>
  );
}
