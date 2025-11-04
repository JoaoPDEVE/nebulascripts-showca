# NebulaScripts - Compliant Roblox Scripts Showcase

> 🚀 **New here?** Start with **[START_HERE.md](./START_HERE.md)** for the quickest path to success!

A beautiful, dark-themed marketing website for presenting Roblox scripts and utilities that fully comply with Roblox Terms of Service. Features bilingual support (Portuguese/English), smooth animations, and a Discord-focused community approach.

## 🚀 Features

- **Bilingual (PT/EN)**: Instant language switching with i18next
- **Dark Purple Theme**: Modern glassmorphic design with purple/neon accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered micro-interactions (respects prefers-reduced-motion)
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG AA compliant with focus states and keyboard navigation
- **Compliance Focused**: Clear messaging about respecting Roblox rules

## 📦 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS v4 + custom theme
- **Components**: shadcn/ui (Radix UI primitives)
- **Animation**: Framer Motion
- **i18n**: i18next + react-i18next
- **Icons**: Phosphor Icons

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)

### Setup

1. **Clone or download** this project

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🚀 Deploy para Produção

### ✅ Checklist Pré-Deploy

Antes de colocar o site no ar, verifique:

- [ ] Todas as traduções estão corretas em PT e EN
- [ ] Link do Discord está configurado (veja `src/components/Header.tsx` e `Hero.tsx`)
- [ ] Imagens de showcase foram substituídas (se aplicável)
- [ ] Favicon está presente em `public/favicon.svg`
- [ ] Meta tags no `index.html` estão atualizadas
- [ ] Testado em mobile, tablet e desktop
- [ ] Testado nos navegadores principais (Chrome, Firefox, Safari)

### 🌐 Opções de Hospedagem

#### Opção 1: GitHub Pages (Configurado e Pronto - Grátis) ⭐

Este repositório já está configurado para deploy automático no GitHub Pages!

**O que fazer:**
1. Vá para Settings → Pages no repositório GitHub
2. Em "Source", selecione **GitHub Actions**
3. Faça push para a branch `main` ou merge este Pull Request
4. Aguarde o workflow completar (2-3 minutos)
5. Acesse: **https://joaopdeve.github.io/nebulascripts-showca/**

📖 **Guia detalhado:** Veja [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) para instruções completas em português.

**Vantagens:**
- ✅ Já configurado neste projeto
- ✅ Deploy automático ao fazer push
- ✅ Grátis para repositórios públicos
- ✅ SSL/HTTPS incluído
- ✅ Suporte a domínios personalizados

#### Opção 2: Vercel (Recomendado - Grátis)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Execute no diretório do projeto:
   ```bash
   vercel
   ```
4. Siga as instruções na tela
5. Seu site estará online em minutos!

**Configuração automática:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Opção 3: Netlify (Grátis)

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` (após `npm run build`) para o Netlify Drop
3. Ou conecte seu repositório Git para deploy automático

**Configurações:**
- Build command: `npm run build`
- Publish directory: `dist`

#### Opção 4: Servidor Próprio (VPS/Cloud)

1. Build do projeto:
   ```bash
   npm run build
   ```

2. Copie a pasta `dist` para seu servidor

3. Configure um servidor web (Nginx exemplo):
   ```nginx
   server {
       listen 80;
       server_name seu-dominio.com;
       root /var/www/kaelix-hub/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Compressão
       gzip on;
       gzip_types text/css application/javascript image/svg+xml;
   }
   ```

### 🔧 Configurações Avançadas

#### SSL/HTTPS

**Vercel/Netlify:** SSL automático incluído ✅

**Servidor próprio:** Use [Let's Encrypt](https://letsencrypt.org/):
```bash
sudo certbot --nginx -d seu-dominio.com
```

#### Domínio Customizado

**Vercel:**
1. Vá em Settings → Domains
2. Adicione seu domínio
3. Configure os DNS records

**Netlify:**
1. Vá em Domain Settings
2. Add custom domain
3. Configure DNS

#### Performance

O site já está otimizado com:
- ✅ Code splitting automático (Vite)
- ✅ Lazy loading de rotas
- ✅ CSS minificado
- ✅ Assets otimizados
- ✅ Preconnect para Google Fonts

### 📊 Monitoramento

Após o deploy, considere adicionar:

- **Google Analytics:** Para estatísticas de visitantes
- **Sentry:** Para monitoramento de erros
- **Vercel Analytics:** Analytics automático no Vercel

### 🔄 Updates Contínuos

**Processo recomendado:**

1. Faça alterações localmente
2. Teste com `npm run dev`
3. Build e preview: `npm run build && npm run preview`
4. Commit e push para Git
5. Deploy automático (Vercel/Netlify) ou manual

## 📁 Project Structure

```
/
├── index.html              # Entry HTML with Google Fonts
├── src/
│   ├── App.tsx            # Main app with routing
│   ├── main.tsx           # App entry point
│   ├── index.css          # Custom Tailwind theme & utilities
│   ├── i18n/
│   │   ├── index.ts       # i18next configuration
│   │   └── locales/
│   │       ├── en.json    # English translations
│   │       └── pt.json    # Portuguese translations
│   ├── routes/
│   │   ├── Home.tsx       # Landing page with all sections
│   │   ├── Terms.tsx      # Terms of Use page
│   │   └── Privacy.tsx    # Privacy Policy page
│   ├── components/
│   │   ├── Header.tsx     # Fixed navigation with language toggle
│   │   ├── Footer.tsx     # Footer with legal links
│   │   ├── Hero.tsx       # Hero section with CTAs
│   │   ├── HowItWorks.tsx # 3-step process section
│   │   ├── Features.tsx   # Feature grid
│   │   ├── FeatureCard.tsx
│   │   ├── Showcase.tsx   # Image gallery + video
│   │   ├── DiscordCTA.tsx # Discord call-to-action
│   │   ├── Team.tsx       # Team member cards
│   │   ├── TeamCard.tsx
│   │   ├── FAQ.tsx        # Accordion FAQ
│   │   ├── Badge.tsx      # Reusable badge component
│   │   ├── Section.tsx    # Section wrapper
│   │   ├── LanguageToggle.tsx
│   │   └── ui/            # shadcn components (Accordion, Button, etc.)
│   └── lib/
│       └── utils.ts       # cn() helper for className merging
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Change Colors/Theme

Edit `src/index.css` in the `:root` section:

```css
:root {
  /* Background colors (dark blues/blacks) */
  --background: oklch(0.078 0.024 265.75);  /* Main background */
  --card: oklch(0.098 0.024 265.75);        /* Card background */
  
  /* Purple/accent colors */
  --primary: oklch(0.61 0.238 293.7);       /* Main purple (#7c3aed) */
  --accent: oklch(0.71 0.22 293.7);         /* Lighter purple (#a855f7) */
  
  /* Text colors */
  --foreground: oklch(0.925 0.008 265.75);  /* Light text (#e6e9ef) */
  --muted-foreground: oklch(0.738 0.018 265.75); /* Muted text */
  
  /* Border radius */
  --radius: 0.75rem;
}
```

**To change to a different color scheme:**
1. Pick your colors (use [oklch.com](https://oklch.com) for conversion)
2. Replace `--primary` and `--accent` with your chosen colors
3. Adjust `--background` and `--card` for your preferred darkness
4. Update text colors if needed for proper contrast (aim for 4.5:1 minimum)

### Edit Content/Translations

All text content is in:
- `src/i18n/locales/en.json` (English)
- `src/i18n/locales/pt.json` (Portuguese)

Simply edit the JSON values. Changes will reflect immediately in dev mode.

**Example** - Change hero title:
```json
{
  "hero": {
    "title": "Your new title here",
    ...
  }
}
```

### Add Team Members

In both `en.json` and `pt.json`, edit the `team.members` array:

```json
{
  "team": {
    "members": [
      {
        "name": "YourName",
        "role": "Your Role",
        "discord": "YourDiscordHandle",
        "bio": "Short bio"
      }
    ]
  }
}
```

### Add Showcase Images

Replace placeholder images in `src/components/Showcase.tsx`:

```tsx
const placeholderImages = [
  '/assets/showcase/demo-1.jpg',
  '/assets/showcase/demo-2.jpg',
  // ... add more
]
```

Place your images in `public/assets/showcase/` folder.

**For YouTube video embed:**
Replace the placeholder div with:
```tsx
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Demo video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Change Fonts

Edit `index.html` to change Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update `src/index.css`:
```css
body {
  font-family: 'YourFont', system-ui, sans-serif;
}
```

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_DISCORD_INVITE` | Discord server invite URL | `#` |

## 📜 Scripts

- `npm run dev` - Start development server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ♿ Accessibility

- All interactive elements have proper focus states
- Keyboard navigation fully supported
- ARIA labels on icons and buttons
- Respects `prefers-reduced-motion` (disables animations)
- Color contrast ratios meet WCAG AA standards
- Semantic HTML throughout

## 📱 Responsive Breakpoints

- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns, full navigation)

## 🔒 Compliance & Legal

This site is designed to showcase **compliant** Roblox scripts only:
- ❌ No exploits
- ❌ No executors
- ❌ No bypass tools
- ❌ No cheat instructions
- ✅ Legal utilities only
- ✅ Clear compliance messaging
- ✅ Respects Roblox Terms of Service

## 🤝 Contributing

To add features or fix issues:

1. Edit relevant component files in `src/components/` or `src/routes/`
2. Update translations in `src/i18n/locales/` if adding new text
3. Test in both languages (EN and PT)
4. Verify responsive design on mobile/tablet/desktop
5. Ensure animations respect `prefers-reduced-motion`

## 🐛 Troubleshooting

**Language not switching?**
- Check browser console for errors
- Clear localStorage and refresh
- Verify JSON files are valid

**Styles not updating?**
- Restart dev server
- Clear browser cache
- Check Tailwind classes are correct

**Discord link not working?**
- Verify `.env` file exists and has correct URL
- Restart dev server after changing `.env`
- Check browser console for the actual URL being used

## 📄 License

MIT License - feel free to use this template for your own projects.

## 👥 Credits

- Design system: shadcn/ui
- Icons: Phosphor Icons
- Animations: Framer Motion
- Built with React + Vite

---

**Note**: Remember to replace placeholder images, add your actual Discord invite link, and customize content before deploying to production!
