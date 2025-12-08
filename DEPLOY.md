# Deploying to Netlify

This project is configured for deployment on [Netlify](https://www.netlify.com/).

## Prerequisites
- A Netlify account.
- This repository pushed to your GitHub.

## Steps to Deploy

1. **Log in to Netlify**: Go to [Netlify](https://app.netlify.com/) and log in.
2. **Add New Site**: Click on "Add new site" > "Import an existing project".
3. **Connect to Git**: Select "GitHub" and authorize if asked.
4. **Select Repository**: Pick `MY-PORTFOLIO` from your list of repositories.
5. **Configure Build**:
   - **Build command**: `npm run build` (should be auto-detected)
   - **Publish directory**: `dist` (should be auto-detected)
6. **Deploy**: Click "Deploy site".

## Custom Domain Setup
To get your custom subdomain `swaroopbm.netlify.ai` (note: typical Netlify subdomains are `name.netlify.app`, verify if you have a custom domain configured separately or meant `netlify.app`):
1. Go to **Site Settings** > **Domain Management**.
2. Click **Options** on the default subdomain.
3. Edit the site name to `swaroopbm`.
4. Your site will be live at `https://swaroopbm.netlify.app`.

> Note: If you own `netlify.ai`, you would configure that as a custom domain, but the default free subdomain is `.app`.
