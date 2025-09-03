# Silver Fern Consultancy Website

A modern marketing website for a Sri Lankan education consultancy helping students study in New Zealand.

## Tech
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS for styling
- API route to capture leads to `/data/leads.json`

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000

### Build
```bash
npm run build && npm start
```

## Pages
- `/` Home (Hero, Services, Top NZ institutions, CTA, Testimonials)
- `/services` Services overview
- `/courses` Filterable Courses & Careers
- `/about` Company profile
- `/contact` Lead capture form (stored locally)

> In production, wire `/api/lead` to an email/CRM (Resend/SES + HubSpot/Sheets).
