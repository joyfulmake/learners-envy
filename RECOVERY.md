# Learners Envy — Recovery Notes

## Status
- `public/index.html` — RECOVERED from live Cloudflare Pages deployment (2026-06-30)
- `functions/api/*.js` — PLACEHOLDER stubs; original source was not available via CF API

## What needs to be rebuilt
The following Cloudflare Pages Functions need to be restored from memory or rebuilt:
- `/api/ai` — AI chat via Cloudflare AI binding (`env.AI`)
- `/api/auth` — Google Sign-In, stores user in D1 (`env.DB`)
- `/api/demo` — Demo mode
- `/api/payment/create` — Payment initiation
- `/api/payment/verify` — Payment verification
- `/api/progress` — Learning progress tracking via D1 (`env.DB`)

## Bindings (from wrangler.toml)
- D1: `DB` → database ID `066ab5ba-f26d-4152-9ec7-f727a80b75c4`
- AI: `AI`

## Deploy
```bash
npx wrangler pages deploy public --project-name learners-envy
```
