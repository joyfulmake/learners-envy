# Learners Envy — Domain Mastery Console

Single-file SPA deployed on Cloudflare Pages. All frontend lives in one 651KB `public/index.html` (no build step, no framework). Backend is 6 Cloudflare Pages Functions.

## Stack

| Layer | Choice |
|---|---|
| Frontend | Pure HTML/CSS/JS — single file `public/index.html` |
| Auth | Google Sign-In → `/api/auth` → D1 (`env.DB`) |
| AI | `/api/ai` → Cloudflare AI binding (`env.AI`) |
| Payments | Razorpay + Stripe → `/api/payment/create`, `/api/payment/verify` |
| Progress | `/api/progress` → D1 (`env.DB`) |
| Demo | `/api/demo` |
| Hosting | Cloudflare Pages |
| Repo | github.com/joyfulmake/learners-envy |

## Cloudflare bindings (wrangler.toml)

- `DB` → D1 database `066ab5ba-f26d-4152-9ec7-f727a80b75c4`
- `AI` → Cloudflare AI
- Env secrets: `SESSION_SECRET`, `fOMH3QumV60FzA0zmVAQRjC5`

## Deploy

```bash
# Deploy static frontend only (public/ dir)
npx wrangler pages deploy public --project-name learners-envy

# Full deploy with functions (from project root)
npx wrangler pages deploy public --project-name learners-envy
# Functions in functions/api/ are auto-deployed by wrangler
```

## Recovery status (as of 2026-06-30)

- `public/index.html` — INTACT (recovered from live deployment)
- `functions/api/ai.js` — PLACEHOLDER stub, needs rebuild
- `functions/api/auth.js` — PLACEHOLDER stub, needs rebuild
- `functions/api/demo.js` — PLACEHOLDER stub, needs rebuild
- `functions/api/progress.js` — PLACEHOLDER stub, needs rebuild
- `functions/api/payment/create.js` — PLACEHOLDER stub, needs rebuild
- `functions/api/payment/verify.js` — PLACEHOLDER stub, needs rebuild

See `RECOVERY.md` for rebuild notes.

## File structure

```
public/
  index.html        ← entire frontend (edit this for UI changes)
functions/
  api/
    ai.js           ← POST /api/ai
    auth.js         ← POST /api/auth
    demo.js         ← GET /api/demo
    progress.js     ← GET/POST /api/progress
    payment/
      create.js     ← POST /api/payment/create
      verify.js     ← POST /api/payment/verify
wrangler.toml
```
