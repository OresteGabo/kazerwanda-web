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

The website is configured for GitHub Pages deployment through GitHub Actions.

The workflow is located at:

```text
.github/workflows/deploy.yml
```

It runs `npm ci` and `npm run build` on pull requests to `main`. On pushes to `main`, it uploads `dist/` and deploys it to GitHub Pages.

## Domain

Production domain:

[kazerwanda.com](https://kazerwanda.com)

The custom domain is tracked in:

```text
public/CNAME
```

GitHub Pages should be configured in the repository settings to use GitHub Actions as the Pages source.

## Before Production

- In GitHub, open repository settings and set Pages source to GitHub Actions.
- Configure DNS records for `kazerwanda.com` to point to GitHub Pages.
- Enable HTTPS in the GitHub Pages settings after DNS is detected.
- Add SEO metadata and social sharing tags.
- Replace the default favicon with Kaze brand assets.
- Review privacy/legal pages before adding analytics or forms.
