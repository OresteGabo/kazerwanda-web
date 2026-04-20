# Deployment Notes

The website is currently a static Vue/Vite app.

## Build

```sh
npm install
npm run build
```

The production output is generated in:

```text
dist/
```

## Hosting

The website is configured for Vercel hosting.

GitHub Actions is now used only as a CI build check. The workflow is located at:

```text
.github/workflows/ci.yml
```

It runs `npm ci` and `npm run build` on pull requests and pushes to `main`.

Vercel should handle production deployments through its GitHub integration. Import the repository in Vercel, keep the detected Vite settings, and connect the production domain there.

Recommended Vercel settings:

```text
Framework preset: Vite
Build command: npm run build
Output directory: dist
Install command: npm ci
```

The same build settings are also tracked in:

```text
vercel.json
```

## Domain

Production domain:

[kazerwanda.com](https://kazerwanda.com)

The domain should be connected inside the Vercel project settings. Because the domain was purchased on Vercel, Vercel can manage the DNS records for the project.

## App Download Links

The homepage download button is platform-aware. Android visitors see Google Play, iPhone/iPad/Mac visitors see the App Store, and other desktop visitors default to Google Play.

Set the real store links in Vercel environment variables when the apps are published:

```text
VITE_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=dev.orestegabo.kaze
VITE_APP_STORE_URL=https://apps.apple.com/app/...
```

## Before Production

- Import the GitHub repository into Vercel.
- In Vercel, set `kazerwanda.com` as the production domain for the project.
- Confirm Vercel shows the domain as valid and HTTPS is active.
- Add the real Google Play and App Store URLs in Vercel environment variables.
- Add SEO metadata and social sharing tags.
- Replace the default favicon with Kaze brand assets.
- Review privacy/legal pages before adding analytics or forms.
