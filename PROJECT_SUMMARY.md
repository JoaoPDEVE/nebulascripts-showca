# 📊 Project Summary - NebulaScripts

## Overview

A production-ready, bilingual (PT/EN) marketing website for showcasing **compliant** Roblox scripts and utilities. Built with React, TypeScript, Tailwind CSS, and featuring a stunning dark purple/neon theme with glassmorphic design elements.

## Key Features

✅ **100% Compliance Focused**: Clear messaging about respecting Roblox ToS  
✅ **Bilingual**: Instant PT ↔ EN switching with i18next  
✅ **Beautiful Design**: Dark theme with purple gradients and glass effects  
✅ **Fully Responsive**: Mobile-first design that works on all devices  
✅ **Smooth Animations**: Framer Motion with respect for reduced motion  
✅ **SEO Optimized**: Proper meta tags and semantic HTML  
✅ **Accessible**: WCAG AA compliant with keyboard navigation  
✅ **Discord Integration**: Multiple CTAs for community building  

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4 + custom theme
- **Components**: shadcn/ui (Radix UI)
- **Animation**: Framer Motion
- **i18n**: i18next + react-i18next
- **Icons**: Phosphor Icons
- **Fonts**: Inter + JetBrains Mono (Google Fonts)

## File Structure

```
/
├── PRD.md                    # Product requirements document
├── README.md                 # Full documentation
├── QUICK_START.md           # 5-minute setup guide
├── DEPLOYMENT.md            # Hosting & deployment guide
├── CONTRIBUTING.md          # Contribution guidelines
├── .env.example             # Environment variables template
│
├── index.html               # Entry HTML (includes Google Fonts)
├── public/
│   └── favicon.svg          # Purple gradient logo
│
└── src/
    ├── App.tsx              # Main app with routing
    ├── main.tsx             # App entry point
    ├── index.css            # Custom Tailwind theme + utilities
    │
    ├── i18n/                # Internationalization
    │   ├── index.ts         # i18next config
    │   └── locales/
    │       ├── en.json      # English translations (4KB)
    │       └── pt.json      # Portuguese translations (4KB)
    │
    ├── routes/              # Page components
    │   ├── Home.tsx         # Landing page (main)
    │   ├── Terms.tsx        # Terms of Use
    │   └── Privacy.tsx      # Privacy Policy
    │
    ├── components/          # UI Components
    │   ├── Header.tsx       # Fixed nav + language toggle
    │   ├── Footer.tsx       # Footer with legal links
    │   ├── Hero.tsx         # Hero with CTAs
    │   ├── HowItWorks.tsx   # 3-step process
    │   ├── Features.tsx     # Feature grid
    │   ├── FeatureCard.tsx  # Feature card component
    │   ├── Showcase.tsx     # Image gallery + video
    │   ├── DiscordCTA.tsx   # Discord call-to-action
    │   ├── Team.tsx         # Team member grid
    │   ├── TeamCard.tsx     # Team member card
    │   ├── FAQ.tsx          # Accordion FAQ
    │   ├── Badge.tsx        # Badge component
    │   ├── Section.tsx      # Section wrapper
    │   ├── LanguageToggle.tsx
    │   └── ui/              # 40+ shadcn components
    │
    └── lib/
        └── utils.ts         # cn() helper
```

## Pages & Sections

### Home Page (/)
1. **Hero**: Badge, title, CTAs, highlights
2. **How It Works**: 3-step process + compliance note
3. **Features**: 6 feature cards in grid
4. **Showcase**: Image gallery + video placeholder
5. **Discord CTA**: Large call-to-action section
6. **Team**: 2 team member cards
7. **FAQ**: 6 questions in accordion

### Legal Pages
- **/terms**: Terms of Use
- **/privacy**: Privacy Policy

## Color Palette (OKLCH)

```css
Background:     oklch(0.078 0.024 265.75)  /* #0b0f17 - Very dark blue */
Card:           oklch(0.098 0.024 265.75)  /* #0f1522 - Dark blue */
Primary:        oklch(0.61 0.238 293.7)    /* #7c3aed - Purple */
Accent:         oklch(0.71 0.22 293.7)     /* #a855f7 - Light purple */
Foreground:     oklch(0.925 0.008 265.75)  /* #e6e9ef - Light gray */
Muted:          oklch(0.738 0.018 265.75)  /* #b7beca - Gray */
```

## Typography

- **Primary**: Inter (400, 600, 700)
- **Mono**: JetBrains Mono (400, 500)

### Hierarchy
- H1: 48px/32px mobile, bold, tight tracking
- H2: 36px/28px mobile, semibold
- H3: 20px, semibold
- Body: 16px, regular
- Small: 14px

## Key Components

### Custom Utilities (Tailwind)
- `.glass-card` - Glassmorphic card
- `.glass-header` - Blur header
- `.glow-purple` - Purple shadow
- `.glow-purple-hover` - Hover glow
- `.text-gradient` - Purple gradient text
- `.mono` - Monospace font

### Custom Components
- `Badge` - With glow variant
- `Section` - Consistent section wrapper
- `FeatureCard` - Animated feature card
- `TeamCard` - Team member display
- `LanguageToggle` - PT/EN switcher

## Animations

All using Framer Motion:
- Fade-up on scroll (0.6s)
- Stagger animations (0.1s delay)
- Hover scale effects
- Smooth section transitions
- **Respects `prefers-reduced-motion`**

## Internationalization

### Supported Languages
- 🇺🇸 English (default)
- 🇧🇷 Portuguese

### How It Works
1. User clicks PT/EN button
2. i18next changes language instantly
3. localStorage saves preference
4. Persists across sessions
5. No page reload needed

### Translation Files
- `src/i18n/locales/en.json` - 100% complete
- `src/i18n/locales/pt.json` - 100% complete

All content is translatable via these JSON files.

## Environment Variables

| Variable | Purpose | Required | Default |
|----------|---------|----------|---------|
| `VITE_DISCORD_INVITE` | Discord server URL | No | `#` |

## Build & Deploy

### Development
```bash
npm run dev        # Start dev server (port 5173)
```

### Production
```bash
npm run build      # Build to dist/
npm run preview    # Test production build
```

### Recommended Hosts
1. **Vercel** - Zero-config, auto-deploy (recommended)
2. **Netlify** - Easy setup, great free tier
3. **GitHub Pages** - Free for public repos
4. **Self-hosted** - VPS with Nginx

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guides.

## Performance

### Lighthouse Targets
- ⚡ Performance: 90+
- ♿ Accessibility: 100
- ✅ Best Practices: 100
- 🔍 SEO: 100

### Optimizations
- Vite code splitting
- Lazy loaded images
- Minimal bundle size
- Efficient Tailwind purging
- No external tracking scripts

## Accessibility Features

- ✅ Semantic HTML5
- ✅ ARIA labels on icons
- ✅ Keyboard navigation (Tab, Enter)
- ✅ Focus visible (purple rings)
- ✅ Color contrast: WCAG AA (4.5:1+)
- ✅ Respects reduced motion
- ✅ Alt text on all images
- ✅ Screen reader friendly

## Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Security & Compliance

### Roblox Compliance
- ❌ No exploits mentioned
- ❌ No executors referenced
- ❌ No bypass tools shown
- ❌ No cheat instructions
- ✅ Clear compliance messaging
- ✅ Respects Roblox ToS

### Web Security
- HTTPS enforced (on deployment)
- No sensitive data in code
- Environment variables for secrets
- No third-party tracking
- Secure headers (via hosting platform)

## Customization Guide

### Easy Changes (No coding)
1. **Discord URL**: Edit `.env`
2. **Content**: Edit JSON in `src/i18n/locales/`
3. **Images**: Replace in `src/components/Showcase.tsx`

### Medium Changes (Basic coding)
1. **Colors**: Edit `src/index.css`
2. **Fonts**: Edit `index.html` and `src/index.css`
3. **Add sections**: Create component, import in `Home.tsx`

### Advanced Changes
1. **New pages**: Add route in `App.tsx`
2. **Custom animations**: Use Framer Motion
3. **Backend**: Add API routes (requires additional setup)

## Bundle Size

Estimated production build:
- **JavaScript**: ~200KB gzipped
- **CSS**: ~15KB gzipped
- **Total initial load**: ~215KB

Fast load times even on 3G networks!

## Testing Checklist

Before deploying:
- [ ] Both languages work (EN, PT)
- [ ] Mobile responsive (< 768px)
- [ ] Tablet responsive (768-1024px)
- [ ] Desktop responsive (> 1024px)
- [ ] All links work
- [ ] Discord CTAs open correct URL
- [ ] Smooth scrolling works
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Builds without errors
- [ ] Lighthouse score 90+

## Support & Resources

- 📖 [Full Documentation](./README.md)
- 🚀 [Quick Start Guide](./QUICK_START.md)
- 🌐 [Deployment Guide](./DEPLOYMENT.md)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 📋 [PRD](./PRD.md)

## License

MIT License - Free to use for personal and commercial projects.

## Credits

- **UI Components**: shadcn/ui
- **Icons**: Phosphor Icons
- **Animations**: Framer Motion
- **Built with**: React + Vite + Tailwind CSS

---

**Ready to launch? 🚀**

Follow [QUICK_START.md](./QUICK_START.md) to get running in 5 minutes!
