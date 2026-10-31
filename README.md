# New Look Aesthetic Clinic: Next.js site

    npm install
    cp .env.example .env.local   # then put your Groq key in .env.local
    npm run dev                  # http://localhost:3000

## Edit content
Everything is in `lib/site.ts`: phones, WhatsApp number, address, treatments, doctor,
gallery, results, Instagram reels, FAQs, reviews.

## Chatbot (Groq, model openai/gpt-oss-120b)
- Key goes in `GROQ_API_KEY` (server only, never in the browser). Get one at console.groq.com/keys.
- Model is `GROQ_MODEL` (default `openai/gpt-oss-120b`).
- Route: `app/api/chat/route.ts`. Edit the clinic rules in the `SYSTEM` prompt there.
- On Vercel: Project, Settings, Environment Variables, add `GROQ_API_KEY`, then redeploy.

## Contact form
Opens WhatsApp with the message ready. Number: `site.whatsapp`.

## Before launch
- Confirm address and phone numbers (see notes in chat).
- Fill doctor `education` / `experience` / `registration` with verified facts.
- Replace sample reviews. Keep patient consent for before/after photos.
