# LEARNERS ENVY
### Domain Mastery Console

> *Envy the learner who knows what they don't know.*

A single-file web app that turns any domain into a structured mastery path. Pick a subject, track where you are, pay to unlock depth — the whole thing runs in one HTML file on Cloudflare's edge with a D1 database behind it.

**Live →** https://learners-envy.pages.dev

---

## What it does

Not a course. Not a quiz. A console.

You arrive knowing something. You leave knowing what you need to learn next — and having paid (or not) for the depth you want. The app tracks your progress against the domain map, gates premium content behind payment, and uses Cloudflare AI to generate the next question based on where you are.

```
User arrives → Google Sign-In → Domain map loads from D1
     │
     ├─ Free tier     → L1 access, progress tracked
     ├─ Paid tier     → Full depth unlocked (Razorpay or Stripe)
     └─ AI endpoint   → Next question generated from current position
```

---

## Stack

| Layer | What |
|-------|------|
| Frontend | Single HTML file — `public/index.html` (651KB, all inline) |
| Backend | Cloudflare Pages Functions (`functions/api/`) |
| Database | Cloudflare D1 (SQLite at the edge) |
| AI | Cloudflare AI binding |
| Auth | Google Sign-In → session stored in D1 |
| Payments | Razorpay + Stripe |
| Hosting | Cloudflare Pages |

---

## API surface

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth` | POST | Google token → D1 user record → session |
| `/api/ai` | POST | Generate next question from current position |
| `/api/progress` | GET/POST | Read/write learning progress to D1 |
| `/api/demo` | GET | Demo mode — no auth required |
| `/api/payment/create` | POST | Create Razorpay/Stripe payment order |
| `/api/payment/verify` | POST | Verify payment → unlock tier in D1 |

---

## Recovery status

The frontend (`public/index.html`) is fully intact — recovered from the live deployment.
The 6 API functions are **placeholder stubs** that need to be rebuilt.
See `RECOVERY.md` for the rebuild checklist and D1 schema notes.

---

## Deploy

```bash
# Deploy frontend only (static files)
npx wrangler pages deploy public --project-name learners-envy

# Set secrets
npx wrangler pages secret put SESSION_SECRET --project-name learners-envy
```

**Cloudflare bindings** (set in wrangler.toml, active in production):
- `DB` → D1 database `066ab5ba-f26d-4152-9ec7-f727a80b75c4`
- `AI` → Cloudflare AI

---

## Working on this project

```bash
cd /home/kali/dev-workspace/worktrees/learners-envy
# ask Claude: "rebuild the /api/auth function" or "add a new domain to the console"
```
