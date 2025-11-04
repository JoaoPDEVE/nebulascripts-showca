# 🎯 START HERE - NebulaScripts Complete Guide

**Welcome!** This is your starting point for the NebulaScripts project - a production-ready, bilingual showcase website for compliant Roblox scripts.

---

## 🚀 Quickest Path to Success

### For First-Time Users (Total: 10 minutes)

```bash
# 1. Install dependencies (2 min)
npm install

# 2. Start development server (1 min)
npm run dev
```

Open http://localhost:5173 and see your site! 🎉

**Then:**
1. Click the PT/EN button to see language switching
2. Scroll through all sections
3. Click Discord buttons (they'll use fallback "#" until you set the URL)

**Next steps:**
- Read **[QUICK_START.md](./QUICK_START.md)** for customization
- Set your Discord invite URL
- Replace team member info
- Deploy to Vercel (3 minutes)

---

## 📚 Documentation Guide

We have 9 documentation files. Here's what to read and when:

### 🎯 Priority 1: Essential (Read First)

**[QUICK_START.md](./QUICK_START.md)** - 5 minutes  
Get running, configure basics, deploy fast

**[README.md](./README.md)** - 10 minutes  
Complete feature overview and customization guide

### 🎯 Priority 2: When Needed

**[DEPLOYMENT.md](./DEPLOYMENT.md)** - 12 minutes  
Read when ready to deploy (Vercel, Netlify, etc.)

**[COMMANDS.md](./COMMANDS.md)** - Reference  
Look up commands when you need them

**[CONTRIBUTING.md](./CONTRIBUTING.md)** - 8 minutes  
Read when adding features or modifying code

### 🎯 Priority 3: Optional Deep Dive

**[PRD.md](./PRD.md)** - 15 minutes  
Understand design philosophy and decisions

**[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - 10 minutes  
Technical architecture and implementation details

**[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - 5 minutes  
Navigate all documentation easily

**[FILE_TREE.md](./FILE_TREE.md)** - 5 minutes  
Complete file structure and delivery checklist

---

## 🎓 Learning Paths

### Path A: Just Want It Running
1. Run `npm install && npm run dev` ← You're done!
2. Read [QUICK_START.md](./QUICK_START.md) when ready to customize

### Path B: Want to Customize
1. Run the project (see above)
2. Read [QUICK_START.md](./QUICK_START.md) fully
3. Follow "First Customizations" section
4. Read [README.md](./README.md) → Customization section

### Path C: Want to Deploy
1. Customize first (Path B)
2. Read [DEPLOYMENT.md](./DEPLOYMENT.md)
3. Choose hosting (Vercel recommended)
4. Follow deployment steps

### Path D: Want to Develop
1. Run the project
2. Read [CONTRIBUTING.md](./CONTRIBUTING.md)
3. Read [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
4. Study [PRD.md](./PRD.md) for design philosophy

---

## 🎨 What This Project Is

A **showcase/marketing website** for presenting Roblox scripts that:

✅ **Comply with Roblox Terms** - No exploits, executors, or cheats  
✅ **Look Professional** - Dark purple theme with smooth animations  
✅ **Speak Two Languages** - Full Portuguese and English support  
✅ **Work Everywhere** - Mobile, tablet, desktop responsive  
✅ **Guide to Discord** - Multiple CTAs for community building  
✅ **Load Fast** - Optimized bundle, quick initial load  
✅ **Meet Standards** - WCAG AA accessible, SEO ready  

---

## 🏗️ Project Structure at a Glance

```
Important Files:
├── QUICK_START.md          ← Start here for setup
├── README.md               ← Complete documentation
├── .env.example            ← Copy to .env, add Discord URL
│
Source Code:
└── src/
    ├── App.tsx             ← Main app with routing
    ├── index.css           ← Theme colors (edit here!)
    ├── routes/             ← Pages (Home, Terms, Privacy)
    ├── components/         ← All UI components
    └── i18n/locales/       ← Translations (edit content here!)
        ├── en.json         ← English text
        └── pt.json         ← Portuguese text
```

---

## ⚙️ Essential Configuration (3 minutes)

### 1. Discord Invite URL

Create `.env` file:
```env
VITE_DISCORD_INVITE=https://discord.gg/YOUR-INVITE-CODE
```

Or copy template:
```bash
cp .env.example .env
# Then edit .env
```

**Restart dev server after changing `.env`**

### 2. Team Members

Edit both files:
- `src/i18n/locales/en.json`
- `src/i18n/locales/pt.json`

Find `team.members` and update:
```json
{
  "team": {
    "members": [
      {
        "name": "YourName",
        "role": "Your Role",
        "discord": "YourDiscord#1234",
        "bio": "Short description"
      }
    ]
  }
}
```

### 3. Brand Name (Optional)

Find and replace "NebulaScripts" with your name in:
- `index.html`
- `src/components/Header.tsx`
- `src/i18n/locales/*.json`

---

## 🎨 Quick Customizations

### Change Colors (1 minute)

Edit `src/index.css`:

```css
:root {
  /* Main purple - change these! */
  --primary: oklch(0.61 0.238 293.7);
  --accent: oklch(0.71 0.22 293.7);
}
```

Use [oklch.com](https://oklch.com) to pick colors.

**Examples:**
- Blue: `oklch(0.55 0.25 250)`
- Green: `oklch(0.55 0.25 150)`
- Red: `oklch(0.55 0.25 20)`

### Change Text Content (2 minutes)

All text is in `src/i18n/locales/`:
- `en.json` - English
- `pt.json` - Portuguese

Edit the values, save, and see changes instantly!

### Add Images (3 minutes)

1. Put images in `public/` folder
2. Edit `src/components/Showcase.tsx`:
   ```tsx
   const placeholderImages = [
     '/your-image-1.jpg',
     '/your-image-2.jpg',
   ]
   ```

---

## 🚀 Deployment (3-5 minutes)

### Recommended: Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variable:
   - Key: `VITE_DISCORD_INVITE`
   - Value: `https://discord.gg/YOUR-CODE`
6. Click "Deploy"

**Done!** Your site is live. ✅

See [DEPLOYMENT.md](./DEPLOYMENT.md) for other options (Netlify, GitHub Pages, self-hosted).

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Test production build
npm run lint         # Check code quality

# Deployment
vercel               # Deploy to Vercel
netlify deploy       # Deploy to Netlify
```

See [COMMANDS.md](./COMMANDS.md) for complete reference.

---

## 🆘 Common Issues & Fixes

### Language not switching?
- Clear browser localStorage
- Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Check browser console for errors

### Discord button goes to "#"?
- Create `.env` file
- Add `VITE_DISCORD_INVITE=https://discord.gg/YOUR-CODE`
- Restart dev server (`Ctrl+C` then `npm run dev`)

### Styles look broken?
- Restart dev server
- Clear browser cache
- Check `index.css` imports are correct

### Port already in use?
```bash
npm run kill  # Unix/macOS
# Then try npm run dev again
```

More help: [README.md](./README.md) → Troubleshooting

---

## ✅ Pre-Launch Checklist

Before deploying to production:

- [ ] Set Discord invite URL in `.env`
- [ ] Update team member information
- [ ] Replace placeholder images
- [ ] Test both languages (EN and PT)
- [ ] Test on mobile device
- [ ] Review all text content
- [ ] Check Terms and Privacy pages
- [ ] Verify all links work
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`

---

## 📊 What's Included

- ✅ 14 custom React components
- ✅ 3 pages (Home, Terms, Privacy)
- ✅ Full PT/EN translations
- ✅ 40+ shadcn/ui components
- ✅ Dark purple theme
- ✅ Smooth animations
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ WCAG AA accessible
- ✅ 9 documentation files (~60KB)

---

## 🎯 Success Metrics

After setup, you should have:
- ✅ Site running locally at http://localhost:5173
- ✅ Language toggle working (PT ↔ EN)
- ✅ All sections displaying correctly
- ✅ Discord URL configured
- ✅ Team info updated
- ✅ Ready to deploy

**Time to complete: 15-30 minutes**

---

## 🗺️ What to Read Next

**Right now:**
→ [QUICK_START.md](./QUICK_START.md) - Get started in 5 minutes

**After basic setup:**
→ [README.md](./README.md) - Full customization guide

**When deploying:**
→ [DEPLOYMENT.md](./DEPLOYMENT.md) - Hosting instructions

**When developing:**
→ [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guide

**Need a command:**
→ [COMMANDS.md](./COMMANDS.md) - Command reference

**Want to understand design:**
→ [PRD.md](./PRD.md) - Product requirements

**Need technical details:**
→ [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Architecture

**Can't find something:**
→ [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) - Find anything

---

## 💡 Pro Tips

1. **Start Simple**: Get it running first, customize later
2. **Use Vercel**: Easiest deployment option
3. **Test Both Languages**: Switch between PT/EN frequently
4. **Mobile First**: Always check mobile view
5. **Read QUICK_START**: Best time investment
6. **Bookmark COMMANDS**: You'll reference it often
7. **Join Discord**: Build your community early

---

## 🎉 You're Ready!

**This project is production-ready and fully documented.**

### Your Next Steps:
1. Run `npm install && npm run dev` right now
2. Open [QUICK_START.md](./QUICK_START.md) in another tab
3. Follow the 5-minute setup
4. Start customizing!

---

## 📞 Need Help?

1. **Check documentation** (9 guides covering everything)
2. **Search with Ctrl+F** in relevant doc file
3. **Try troubleshooting** sections in README
4. **Open GitHub issue** if still stuck

---

## 🏆 Project Goals

This project achieves:
- ✅ Professional Roblox scripts showcase
- ✅ 100% compliance with Roblox ToS
- ✅ Beautiful dark purple theme
- ✅ Bilingual (PT/EN) support
- ✅ Production-ready code
- ✅ Comprehensive documentation
- ✅ Fast deployment (<5 min)
- ✅ Mobile responsive
- ✅ Accessible (WCAG AA)

---

**Ready to start? Run this command now:**

```bash
npm install && npm run dev
```

**Then open [QUICK_START.md](./QUICK_START.md)** 🚀

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Vite.

**No exploits. No executors. Just quality, compliant tools.** ✨
