# Personal Site

Very basic personal site. Holds links to relevant stuff.

## Development

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm format
pnpm lint
pnpm typecheck
pnpm check
```

## Deploy

This is a standard Next.js app. Import `github.com/rsproule/personal-site` into Vercel and leave framework detection on Next.js. Vercel will use:

- install: `pnpm install`
- build: `pnpm build`
- output: `.next`

Git pushes should then create preview deployments, and pushes to `master` should deploy production.

Current DNS check, June 20, 2026:

- registrar: Squarespace Domains II LLC
- DNS host: Google Cloud DNS (`ns-cloud-d*.googledomains.com`)
- current web host: Firebase Hosting (`ryansproule.com` and `www.ryansproule.com` resolve to `199.36.158.100`)

After adding `ryansproule.com` in Vercel, update the Google Cloud DNS records to the values Vercel provides.

## Agent API

The site exposes two paid, agent-discoverable API routes:

- `POST /api/email` sends one email to Ryan via Resend.
- `POST /api/text` sends one direct message to Ryan via Telegram.

For email, agents can set `replyTo` so Ryan can reply directly. They can also set `ccReplyTo: true` to CC that same address on the initial email.

Discovery endpoints:

- `GET /openapi.json`
- `GET /.well-known/x402`
- `GET /llms.txt`

Required Vercel environment variables are listed in `.env.example`. `EVM_PAYEE_ADDRESS`, `MPP_OPERATOR_KEY`, and `MPP_SECRET_KEY` have been generated in the ignored local `.env.local`; copy those values into Vercel. `CDP_API_KEY_ID` and `CDP_API_KEY_SECRET` must come from Coinbase Developer Platform before x402 payments can verify.

For Resend, verify a sending domain such as `mail.ryansproule.com`, then set `RESEND_FROM_EMAIL` to a sender on that verified domain, for example `RFS PAID Agent Mail <agent@mail.ryansproule.com>`.

For Telegram, create a bot with `@BotFather`, send `/start` to the bot from Ryan's Telegram account, then use `getUpdates` to find `RYAN_TELEGRAM_CHAT_ID`.

Validate after deployment:

```bash
npx -y @agentcash/discovery@latest discover https://ryansproule.com
npx -y @agentcash/discovery@latest check https://ryansproule.com/api/email
npx -y @agentcash/discovery@latest check https://ryansproule.com/api/text
```

After the Vercel deployment and DNS cutover are live, register or refresh the origin:

- https://www.x402scan.com/resources/register
- https://www.mppscan.com/register

## Future Plans

- add some easter eggs
- self host blog posts within this
