# Personal Site

Very basic personal site. Holds links to relevant stuff.

## Development

```bash
npm install
npm run dev
```

## Deploy

This is a standard Next.js app. Import `github.com/rsproule/personal-site` into Vercel and leave framework detection on Next.js. Vercel will use:

- install: `npm install`
- build: `npm run build`
- output: `.next`

Git pushes should then create preview deployments, and pushes to `master` should deploy production.

Current DNS check, June 20, 2026:

- registrar: Squarespace Domains II LLC
- DNS host: Google Cloud DNS (`ns-cloud-d*.googledomains.com`)
- current web host: Firebase Hosting (`ryansproule.com` and `www.ryansproule.com` resolve to `199.36.158.100`)

After adding `ryansproule.com` in Vercel, update the Google Cloud DNS records to the values Vercel provides.

## Future Plans

- add some easter eggs
- self host blog posts within this
