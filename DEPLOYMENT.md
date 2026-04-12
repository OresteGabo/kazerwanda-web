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

The `dist/` folder can be deployed to a static hosting provider such as Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or a server configured for static files.

## Domain

Production domain:

[kazerwanda.com](https://kazerwanda.com)

## Before Production

- Confirm the final hosting provider.
- Configure DNS records for `kazerwanda.com`.
- Add HTTPS through the hosting provider.
- Add SEO metadata and social sharing tags.
- Replace the default favicon with Kaze brand assets.
- Review privacy/legal pages before adding analytics or forms.
