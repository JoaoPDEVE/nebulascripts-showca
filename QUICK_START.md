# 🚀 Quick Start Guide - NebulaScripts

Get your compliant Roblox scripts showcase website running in 5 minutes!

## ⚡ Fastest Way to Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open **http://localhost:5173** and you're live! 🎉

## 🔧 Essential Configuration (2 minutes)

### 1. Set Your Discord Invite

Create a `.env` file:
```bash
VITE_DISCORD_INVITE=https://discord.gg/YOUR-INVITE-CODE
```

Or copy the example:
```bash
cp .env.example .env
# Then edit .env with your actual Discord URL
```

### 2. Test Language Switching

Click the **PT/EN** button in the header - it should instantly switch between Portuguese and English.

### 3. Verify Everything Works

- ✅ Page loads with dark purple theme
- ✅ Language toggle works (PT ↔ EN)
- ✅ Smooth scroll to sections works
- ✅ Discord buttons open your invite link
- ✅ Mobile responsive (try resizing browser)

## 📝 First Customizations

### Change Brand Name (Optional)

**Find and replace** `NebulaScripts` with your name in:
- `index.html` (title tag)
- `src/components/Header.tsx` (logo)
- `src/i18n/locales/en.json` and `pt.json` (footer)

### Update Team Members

Edit `src/i18n/locales/en.json` and `pt.json`:

```json
{
  "team": {
    "members": [
      {
        "name": "YourName",
        "role": "Developer",
        "discord": "YourDiscord#1234",
        "bio": "Your role description"
      }
    ]
  }
}
```

### Add Your Images

Replace placeholders in `src/components/Showcase.tsx`:

```tsx
const placeholderImages = [
  '/showcase-1.jpg',  // Put images in /public folder
  '/showcase-2.jpg',
  '/showcase-3.jpg',
  '/showcase-4.jpg',
]
```

## 🎨 Quick Theme Changes

Edit `src/index.css` for different colors:

**Blue theme**:
```css
--primary: oklch(0.55 0.25 250);   /* Blue */
--accent: oklch(0.65 0.25 250);    /* Light blue */
```

**Green theme**:
```css
--primary: oklch(0.55 0.25 150);   /* Green */
--accent: oklch(0.65 0.25 150);    /* Light green */
```

**Red theme**:
```css
--primary: oklch(0.55 0.25 20);    /* Red */
--accent: oklch(0.65 0.25 20);     /* Light red */
```

Changes appear instantly in dev mode! 🎨

## 📦 Build for Production

```bash
# Build the site
npm run build

# Test production build locally
npm run preview
```

Output is in `dist/` folder - ready to deploy!

## 🌐 Deploy in 3 Minutes

### Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Add environment variable: `VITE_DISCORD_INVITE`
6. Click Deploy ✅

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Add environment variable: `VITE_DISCORD_INVITE`
8. Click Deploy ✅

See [DEPLOYMENT.md](./DEPLOYMENT.md) for more options!

## 🆘 Common Issues

**Port already in use?**
```bash
npm run kill  # Kill process on port 5000
npm run dev   # Try again
```

**Language not switching?**
- Open browser DevTools → Console
- Clear localStorage
- Refresh page

**Styles look broken?**
- Restart dev server
- Clear browser cache
- Check CSS import in `index.html`

**Discord link not working?**
- Check `.env` file exists
- Verify URL starts with `https://discord.gg/`
- Restart dev server after changing `.env`

## 📚 Next Steps

- 📖 Read [README.md](./README.md) for full documentation
- 🚀 See [DEPLOYMENT.md](./DEPLOYMENT.md) for hosting options
- 🤝 Check [CONTRIBUTING.md](./CONTRIBUTING.md) to add features
- 🎨 Customize content in `src/i18n/locales/`

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Set real Discord invite URL
- [ ] Add your team member info
- [ ] Replace placeholder images
- [ ] Test both languages (EN and PT)
- [ ] Test on mobile device
- [ ] Review all text content
- [ ] Check Terms and Privacy pages
- [ ] Verify all links work
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`

## 🎯 Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run kill` | Kill process on port 5000 |

## 💡 Pro Tips

1. **Hot reload**: Changes auto-refresh in dev mode
2. **Fast language switch**: Use localStorage to persist choice
3. **Mobile first**: Design looks great on all devices
4. **SEO ready**: Meta tags included for search engines
5. **Accessible**: Keyboard navigation and screen readers supported

---

**Need help?** 
- 📖 Check the detailed [README.md](./README.md)
- 🔧 Common issues in [DEPLOYMENT.md](./DEPLOYMENT.md)
- 💬 Questions? Open an issue on GitHub

---

**You're all set! 🚀**

Start customizing and make this site your own!
