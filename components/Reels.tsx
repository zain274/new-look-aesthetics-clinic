"use client";
import { useState } from "react";
import { Instagram, Play } from "lucide-react";
import { reels } from "@/lib/site";

export default function Reels() {
  const [shown, setShown] = useState(6);
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <ul className="reels">
        {reels.slice(0, shown).map((r) => {
          const url = `https://www.instagram.com/${r.type}/${r.id}/`;
          return (
            <li key={r.id}>
              {active === r.id ? (
                <iframe src={`${url}embed`} title="Instagram video" loading="lazy" allowFullScreen />
              ) : (
                <button className="reel-face" onClick={() => setActive(r.id)} aria-label={`Play ${r.type === "reel" ? "reel" : "post"} from Instagram`}>
                  <Instagram size={34} aria-hidden />
                  <span className="play"><Play size={26} fill="currentColor" aria-hidden /></span>
                  <b>{r.type === "reel" ? "Watch reel" : "Watch post"}</b>
                  <small>Loads from Instagram</small>
                </button>
              )}
              <a className="reel-open" href={url} target="_blank" rel="noopener noreferrer">Open on Instagram</a>
            </li>
          );
        })}
      </ul>
      {shown < reels.length && (
        <div className="more"><button className="btn btn-ghost" onClick={() => setShown(reels.length)}>Show all {reels.length} videos</button></div>
      )}
    </>
  );
}
