# ROADMAP Vehicle Services

The ROADMAP website is a React single-page application built with Vite. It promotes tyre patching, wheel balancing, bearing pressing, and small welding services in Kimberley.

## Local development

```bash
npm install
npm run dev
```

Use `npm run build` to create the production site in `dist`, and `npm run lint` to check the source.

## Netlify deployment

This repository includes `netlify.toml`. Netlify builds the site with `npm run build`, publishes `dist`, and rewrites application routes such as `/services` to the React application so direct visits and browser refreshes work.

In Netlify, connect this repository to a site and use the configuration committed here. Do not override the build command or publish directory unless the deployment configuration is changed with it.

## Restoring the custom domain

The domain must have an active DNS record before any hosted build can be reached. In Netlify:

1. Add `roadmapkimberley.co.za` under **Domain management** for the site.
2. Follow Netlify's displayed DNS instructions at the domain registrar. Use the exact nameservers or A/CNAME/ALIAS records Netlify provides; these values are account-specific.
3. Wait for Netlify to verify the domain and provision TLS, then make the verified domain the primary domain.

After DNS propagation, deploy the latest `main` branch from Netlify's **Deploys** page. The public URL should load the home page, and direct visits to `/about`, `/services`, `/contact`, and `/thank-you` should render successfully.
