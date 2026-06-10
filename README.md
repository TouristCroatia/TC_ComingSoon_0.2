# Tourist Croatia - Premium Coming Soon Worker

A modern, premium English coming soon page for Tourist Croatia, built as a Cloudflare Worker in JavaScript.

The page includes a refined luxury travel look, responsive layout, external Croatia coastline imagery, email-app based preview-list CTA, security headers, robots.txt and a GitHub Actions workflow for deployment.

## Files

- `src/index.js` - the complete Worker with HTML, CSS and small JavaScript interaction.
- `wrangler.toml` - Cloudflare Workers configuration.
- `package.json` - local development and deployment scripts.
- `.github/workflows/deploy.yml` - optional automatic deploy to Cloudflare Workers via GitHub Actions.
- `.gitignore` - ignores dependencies, local Worker files and environment files.

## Local test

```bash
npm install
npm run dev
```

Open the local URL shown by Wrangler, usually:

```text
http://localhost:8787
```

## Manual deploy with Wrangler

```bash
npm install
npx wrangler login
npm run deploy
```

## Deploy via GitHub Actions

Create these repository secrets in GitHub:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

Then push to the `main` branch. The workflow will deploy automatically.

## Custom domain

When your domain is active in Cloudflare, update `wrangler.toml` from:

```toml
workers_dev = true
```

to something like:

```toml
workers_dev = false
route = { pattern = "touristcroatia.com/*", zone_name = "touristcroatia.com" }
```

Then commit and push again.

## Change the contact email

At the top of `src/index.js`, update:

```js
contactEmail: "info@touristcroatia.com"
```

The current form opens the visitor's email app. This temporary page does not store email addresses yet. Later you can connect the form to Cloudflare KV, D1, a mailing-list provider or an external form service.

## Replace the images

The image URLs are defined near the top of `src/index.js` in the `IMAGES` object. Replace them with your own URLs if you want to use custom photography.

## Search engines

This coming soon page intentionally uses `noindex, nofollow` and blocks crawlers in `robots.txt`. Remove or change that when the final website goes live.
