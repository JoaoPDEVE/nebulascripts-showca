# Contributing to NebulaScripts

Thank you for your interest in contributing! This guide will help you make changes to the website.

## Getting Started

1. **Fork and clone** the repository
2. **Install dependencies**: `npm install`
3. **Start dev server**: `npm run dev`
4. **Make your changes**
5. **Test thoroughly** (both languages, all screen sizes)
6. **Submit a pull request**

## Project Structure Overview

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn components (don't modify these)
│   ├── Hero.tsx       # Landing hero section
│   ├── Features.tsx   # Features grid
│   └── ...            # Other section components
├── routes/            # Page components
├── i18n/              # Internationalization
│   └── locales/       # Translation files (en.json, pt.json)
└── index.css          # Theme and Tailwind config
```

## Common Tasks

### Adding a New Section

1. **Create component** in `src/components/YourSection.tsx`:
   ```tsx
   import { useTranslation } from 'react-i18next'
   import { Section } from './Section'

   export function YourSection() {
     const { t } = useTranslation()
     
     return (
       <Section id="your-section">
         <h2>{t('yourSection.title')}</h2>
         {/* Your content */}
       </Section>
     )
   }
   ```

2. **Add translations** to `src/i18n/locales/en.json` and `pt.json`:
   ```json
   {
     "yourSection": {
       "title": "Your Section Title"
     }
   }
   ```

3. **Import in Home.tsx**:
   ```tsx
   import { YourSection } from '@/components/YourSection'
   
   export function Home() {
     return (
       <>
         {/* ... other sections */}
         <YourSection />
       </>
     )
   }
   ```

### Modifying Translations

Edit `src/i18n/locales/en.json` and `src/i18n/locales/pt.json`:

```json
{
  "section": {
    "key": "Your translated text"
  }
}
```

**Rules**:
- Keep keys consistent across both files
- Use descriptive key names
- Test in both languages after changes

### Changing Colors

Edit `src/index.css`:

```css
:root {
  --primary: oklch(0.61 0.238 293.7);  /* Change this */
  --accent: oklch(0.71 0.22 293.7);    /* And this */
}
```

Use [oklch.com](https://oklch.com) to convert colors to OKLCH format.

### Adding Icons

We use Phosphor Icons:

```tsx
import { YourIcon } from '@phosphor-icons/react'

<YourIcon size={24} weight="bold" />
```

Browse available icons: https://phosphoricons.com

### Styling Guidelines

**Use Tailwind utilities**:
```tsx
<div className="flex items-center gap-4 p-6 rounded-xl">
```

**Glass effect**:
```tsx
<div className="glass-card">
```

**Gradient text**:
```tsx
<h1 className="text-gradient">
```

**Glow effect**:
```tsx
<div className="glow-purple-hover">
```

**Monospace font**:
```tsx
<span className="mono">
```

### Adding Animations

We use Framer Motion:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Always respect reduced motion**:
```tsx
// CSS already handles this globally
// Just use Framer Motion normally
```

## Code Style

### TypeScript

- Use TypeScript for all new files
- Define interfaces for props
- Avoid `any` type

```tsx
interface ComponentProps {
  title: string
  count?: number  // Optional props with ?
}

export function Component({ title, count = 0 }: ComponentProps) {
  // ...
}
```

### React

- Use functional components
- Use hooks (useState, useEffect, etc.)
- Extract reusable logic to custom hooks

### Naming

- Components: PascalCase (`Hero.tsx`, `FeatureCard.tsx`)
- Files: PascalCase for components, kebab-case for others
- CSS classes: kebab-case
- Functions: camelCase

### Imports

Use path aliases:
```tsx
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/Hero'
import { cn } from '@/lib/utils'
```

## Testing Checklist

Before submitting:

- [ ] Runs without errors: `npm run dev`
- [ ] Builds successfully: `npm run build`
- [ ] Lints clean: `npm run lint`
- [ ] Works in English
- [ ] Works in Portuguese
- [ ] Responsive on mobile (< 768px)
- [ ] Responsive on tablet (768px - 1024px)
- [ ] Responsive on desktop (> 1024px)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Links work correctly
- [ ] Discord CTAs point to correct URL
- [ ] No console errors
- [ ] Animations smooth (or disabled with reduced motion)

## Accessibility Guidelines

- Add `alt` text to all images
- Use semantic HTML (`nav`, `section`, `article`, etc.)
- Ensure color contrast ratio is at least 4.5:1
- Make all interactive elements keyboard accessible
- Add ARIA labels where needed
- Test with keyboard only (Tab, Enter, Escape)

## Git Commit Messages

Use clear, descriptive messages:

```
✅ Good:
- feat: add testimonials section
- fix: correct Portuguese translation in FAQ
- style: update primary color to blue
- docs: add deployment instructions

❌ Bad:
- update
- fix bug
- changes
```

## Pull Request Process

1. **Create a branch**: `git checkout -b feature/your-feature`
2. **Make changes** following guidelines above
3. **Test thoroughly**
4. **Commit**: `git commit -m "feat: your feature"`
5. **Push**: `git push origin feature/your-feature`
6. **Open PR** with description of changes

### PR Template

```markdown
## Description
Brief description of what this changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Style/UI update
- [ ] Documentation
- [ ] Other

## Testing
- [ ] Tested in both languages
- [ ] Tested on mobile/tablet/desktop
- [ ] No console errors
- [ ] Builds successfully

## Screenshots (if applicable)
Add screenshots for visual changes
```

## Questions?

- Check existing issues on GitHub
- Read the README.md and DEPLOYMENT.md
- Ask in the project's Discord server

## Code of Conduct

- Be respectful and constructive
- Follow the style guide
- Test your changes
- Document new features
- Help others when you can

---

Thank you for contributing to NebulaScripts! 🚀
