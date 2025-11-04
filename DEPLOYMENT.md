# Deployment Guide - NebulaScripts

This guide covers deploying your NebulaScripts website to various platforms.

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Add your actual Discord invite URL to `.env`
- [ ] Replace placeholder images in the Showcase section
- [ ] Add your real team member information
- [ ] Review and customize all text content in `src/i18n/locales/`
- [ ] Test both English and Portuguese languages
- [ ] Test on mobile, tablet, and desktop screens
- [ ] Run `npm run build` to verify it builds without errors
- [ ] Check all links work correctly

## Deployment Options

### Option 1: Vercel (Recommended)

**Why**: Zero-config, automatic deployments from Git, free SSL, excellent performance.

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

3. **Deploy via Git** (easiest):
   - Push your code to GitHub/GitLab/Bitbucket
   - Import project in Vercel dashboard
   - Vercel auto-detects Vite configuration
   - Add environment variable: `VITE_DISCORD_INVITE`
   - Click Deploy

4. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow prompts and add environment variables when asked.

**Environment Variables in Vercel:**
- Go to Project Settings → Environment Variables
- Add: `VITE_DISCORD_INVITE` = `https://discord.gg/YOUR-CODE`

### Option 2: Netlify

**Why**: Great free tier, easy setup, form handling, serverless functions.

1. **Sign up** at [netlify.com](https://netlify.com)

2. **Deploy via Git**:
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variable: `VITE_DISCORD_INVITE`

3. **Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod --dir=dist
   ```

**netlify.toml** (optional, for configuration):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

**Why**: Free hosting for public repos, simple setup.

1. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: Deploy from branch `gh-pages`

**Note**: Add `.env` variables in GitHub Secrets and update build workflow if needed.

### Option 4: Self-Hosted (VPS/Cloud)

**Why**: Full control, custom domains, can add backend later.

#### Requirements:
- Ubuntu/Debian server
- Node.js 18+
- Nginx or Apache
- (Optional) PM2 for process management

#### Steps:

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload dist folder** to server:
   ```bash
   scp -r dist/* user@your-server:/var/www/nebulascripts/
   ```

3. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/nebulascripts;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/css application/javascript image/svg+xml;
   }
   ```

4. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

5. **Setup SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed (usually a CNAME to `cname.vercel-dns.com`)

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   - A record: `75.2.60.5`
   - CNAME www: `your-site.netlify.app`

### GitHub Pages
1. Add file `public/CNAME` with your domain
2. Update DNS:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME www: `yourusername.github.io`

## Environment Variables in Production

Always set `VITE_DISCORD_INVITE` in your hosting platform:

| Platform | Where to Set |
|----------|--------------|
| Vercel | Project Settings → Environment Variables |
| Netlify | Site Settings → Build & Deploy → Environment |
| GitHub Pages | Repo Settings → Secrets → Actions |
| Self-Hosted | Create `.env` file on server before building |

**Important**: Vite environment variables must start with `VITE_` to be exposed to the browser.

## Performance Optimization

After deploying, verify:

1. **Lighthouse Score**: Run in Chrome DevTools
   - Target: 90+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO

2. **Enable Compression**: Gzip/Brotli (most platforms auto-enable)

3. **Image Optimization**: Use WebP format for showcase images
   ```bash
   # Convert images to WebP
   cwebp input.jpg -q 80 -o output.webp
   ```

4. **CDN**: Vercel/Netlify include CDN by default

5. **Caching Headers**: Set in platform config or Nginx

## Monitoring

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `App.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      {/* ... your app */}
      <Analytics />
    </>
  )
}
```

### Google Analytics (Optional)
Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Troubleshooting

**Build fails**:
- Run `npm run build` locally to debug
- Check all imports are correct
- Verify all dependencies are in `package.json`

**Routes don't work (404 on refresh)**:
- Ensure SPA fallback is configured (redirects to `index.html`)
- Vercel/Netlify handle this automatically
- For Nginx, use `try_files` directive shown above

**Environment variables not working**:
- Verify they start with `VITE_`
- Rebuild after adding new variables
- Check platform documentation for correct syntax

**Styles broken**:
- Verify Tailwind CSS is building correctly
- Check `index.css` imports are in correct order
- Clear browser cache

## Security

- **Don't commit `.env`**: Add to `.gitignore`
- **HTTPS Only**: Always use SSL in production
- **CORS**: Configure if adding backend API later
- **Content Security Policy**: Add headers if needed

## Continuous Deployment

For automatic deployments on Git push:

1. **Vercel/Netlify**: Automatic when connected to Git
2. **GitHub Pages**: Use GitHub Actions workflow
3. **Self-Hosted**: Setup Git hooks or use CI/CD tools (Jenkins, GitLab CI, etc.)

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com
