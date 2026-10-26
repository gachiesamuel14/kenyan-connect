# Kenyan Connect

Location-based online dating platform for people in Kenya.

## Features (planned)

- User registration & login
- Profile setup (photos, age, bio, interests, tribe, religion, etc.)
- GPS / location-based matching (county + distance)
- Swipe / like / match system
- Real-time chat
- Photo uploads
- Notifications
- Safety / report system
- Premium features + M-Pesa payments (optional)

## Tech Stack

- **Frontend:** Next.js (App Router) + React
- **Hosting:** Netlify
- **Source:** GitHub
- **Recommended Backend:** Supabase (Auth + PostgreSQL + Realtime + Storage) or Firebase

## Live Site

Netlify project: [kenyan-connect](https://app.netlify.com/projects/kenyan-connect)

URL: https://kenyan-connect.netlify.app (after first deploy)

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/gachiesamuel14/kenyan-connect.git
   cd kenyan-connect
   npm install
   npm run dev
   ```

2. Connect GitHub to Netlify for continuous deployment:
   - Go to your Netlify project dashboard
   - Site configuration → Build & deploy → Continuous deployment
   - Link this GitHub repository
   - Build command: `next build`
   - Publish directory: `.next` (or leave auto-detect)

## Next Steps for Full App

1. **Authentication** — Integrate Supabase Auth or NextAuth.
2. **Database** — Use Supabase (PostGIS for geo queries) or MongoDB.
3. **Location** — Store approximate location (never exact coords to other users). Use reverse geocoding for county.
4. **Matching** — Query nearby users with distance filters + preferences.
5. **Chat** — Supabase Realtime or Ably / Pusher.
6. **Photos** — Supabase Storage or Cloudinary.
7. **Payments** — M-Pesa integration (Safaricom Daraja API) for premium.
8. **Safety** — Report/block, photo moderation, age verification.

## Localization ideas

- County filters (Nairobi, Mombasa, Kisumu, Kiambu, etc.)
- Sheng / Swahili language support
- Student / Professional / Church modes
- M-Pesa for subscriptions

---

Built with Next.js and ready for Netlify + GitHub continuous deployment.
