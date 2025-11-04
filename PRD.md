# NebulaScripts - Product Requirements Document

A compliant showcase website for Roblox scripts and utilities that respect Roblox guidelines.

## Mission Statement

Present high-quality, legal Roblox scripts and utilities in a visually striking dark purple/neon themed website that emphasizes compliance, transparency, and community engagement through Discord.

**Experience Qualities**:
1. **Trustworthy** - Clear messaging that we respect Roblox Terms of Service with no exploits or cheats
2. **Professional** - Polished dark aesthetic with purple/neon accents that feels premium without being aggressive
3. **Accessible** - Bilingual (PT/EN), clear navigation, excellent contrast ratios, and respect for reduced motion preferences

**Complexity Level**: Content Showcase (information-focused)
- This is a marketing/landing page focused on presenting information about compliant Roblox utilities. The primary goal is education and Discord community building, not complex application features. State is minimal (language preference only).

## Essential Features

### Language Toggle
- **Functionality**: Switch between Portuguese and English instantly
- **Purpose**: Serve both Brazilian and international audiences equally well
- **Trigger**: Button in header marked "PT/EN"
- **Progression**: Click button → UI updates immediately → preference saved to localStorage → persists across sessions
- **Success criteria**: All content translates correctly, no page reload required, preference persists

### Discord Call-to-Action
- **Functionality**: Prominent buttons linking to Discord server
- **Purpose**: Drive users to community where purchases and support happen
- **Trigger**: Multiple CTAs throughout page (hero, dedicated section, footer)
- **Progression**: Click CTA → Open Discord invite in new tab
- **Success criteria**: Environment variable for Discord link works, fallback gracefully if not set

### Compliance Messaging
- **Functionality**: Clear, repeated messaging about legal compliance
- **Purpose**: Differentiate from exploit/cheat sites, build trust
- **Trigger**: Badge in hero, FAQ section, terms page
- **Progression**: User reads site → understands this is legal/safe → feels confident to join Discord
- **Success criteria**: No ambiguous language, explicit statements about respecting Roblox ToS

### Product Showcase
- **Functionality**: Visual gallery with images and video embed
- **Purpose**: Show product interface and usage patterns
- **Trigger**: Scroll to showcase section
- **Progression**: View images → Watch demo video → Understand product visually
- **Success criteria**: Responsive grid, accessible alt text, video embed works

### Team Presentation
- **Functionality**: Display team members with Discord handles
- **Purpose**: Humanize the project, provide direct contact points
- **Trigger**: Scroll to team section
- **Progression**: See team cards → Note Discord handles → Can contact directly
- **Success criteria**: Discord usernames display correctly from i18n data

### FAQ Accordion
- **Functionality**: Collapsible Q&A about compliance, purchase, support
- **Purpose**: Answer common concerns before users join Discord
- **Trigger**: Click question in FAQ section
- **Progression**: Click question → Answer expands → Read details → Click to collapse
- **Success criteria**: Smooth animation, keyboard accessible, mobile-friendly

## Edge Case Handling

- **Missing Discord URL**: Show disabled button or fallback "#" link with console warning
- **Unsupported Language**: Default to English, add fallback for missing translation keys
- **Reduced Motion Preference**: Disable all animations, use instant transitions instead
- **Small Screens**: Collapse navigation, stack cards vertically, adjust text sizes
- **No JavaScript**: Show basic static content with inline styles (graceful degradation)
- **Slow Connection**: Images lazy load, show placeholders, content readable before images load

## Design Direction

The design should feel **futuristic, professional, and trustworthy** - similar to premium developer tools or modern gaming platforms. Think Vercel's dark theme meets gaming aesthetics. Minimal interface serves the core purpose: presenting information clearly while building confidence through polish and attention to detail.

## Color Selection

**Custom Palette** with purple/neon accents on deep dark backgrounds

- **Primary Color**: Deep Purple (#7c3aed) - Communicates creativity, tech sophistication, and stands out in gaming context
- **Secondary Colors**: Darker purple variants (#6d28d9, #5b21b6) for depth and gradients; Very dark blues (#0b0f17, #0f1522) for backgrounds creating rich darkness
- **Accent Color**: Bright purple/magenta (#a855f7) - For CTAs, highlights, hover states, and focus rings
- **Foreground/Background Pairings**:
  - Background (#0b0f17): Light text (#e6e9ef) - Ratio 12.8:1 ✓
  - Card Glass (rgba(255,255,255,0.04)): Light text (#e6e9ef) - Ratio 12.5:1 ✓
  - Primary Purple (#7c3aed): White text (#ffffff) - Ratio 6.2:1 ✓
  - Secondary Muted (#b7beca on #0f1522): Ratio 7.8:1 ✓
  - Accent (#a855f7): White text (#ffffff) - Ratio 5.8:1 ✓

## Font Selection

Typography should feel **modern, technical, and highly readable** - conveying professionalism and precision appropriate for developer tools.

- **Primary**: Inter - Clean geometric sans-serif, excellent readability, tech industry standard
- **Monospace**: JetBrains Mono - For Discord handles, technical details, code-adjacent elements

**Typographic Hierarchy**:
- H1 (Hero Title): Inter Bold / 48px (mobile: 32px) / tight tracking (-0.02em) / line-height 1.1
- H2 (Section Titles): Inter SemiBold / 36px (mobile: 28px) / tight tracking / line-height 1.2
- H3 (Card Titles): Inter SemiBold / 20px / normal tracking / line-height 1.4
- Body: Inter Regular / 16px / normal tracking / line-height 1.6
- Small/Captions: Inter Regular / 14px / normal tracking / line-height 1.5
- Mono (Discord, Tech): JetBrains Mono / 14px / slightly wider tracking

## Animations

**Contextual appropriateness**: Subtle, purposeful motion that enhances rather than distracts. The balance leans toward functionality with occasional delightful micro-interactions on hover states. All animations disabled with `prefers-reduced-motion`.

- **Purposeful Meaning**: Purple glow effects on hover communicate interactivity; fade-up reveals guide attention down the page; smooth scrolling to sections feels polished and intentional
- **Hierarchy of Movement**: Hero elements fade/scale on load (primary focus) → Section cards stagger fade-up on scroll (secondary) → Button hover glows are instant feedback (tertiary)

Animation timings:
- Fade-up on scroll: 0.6s ease-out with 100ms stagger between elements
- Button hover glow: 0.2s ease-in-out
- Accordion expand: 0.3s ease-out
- Page transitions: 0.4s ease-in-out

## Component Selection

**Components**: Using shadcn/ui with Tailwind customizations

- **Accordion**: FAQ section with smooth expand/collapse (@radix-ui/react-accordion)
- **Button**: CTAs with variants (primary purple gradient, secondary outline) - custom Tailwind classes
- **Card**: Glass-morphic containers with backdrop-blur and subtle borders - custom component
- **Navigation**: Fixed header with blur background - custom Header component
- **Badge**: "100% Compliant" pill in hero - custom component with glow effect
- **Separator**: Dividing sections - @radix-ui/react-separator with custom styling

**Customizations**:
- Glass cards: `bg-white/[0.04] border border-white/[0.16] backdrop-blur-sm`
- Gradient buttons: `bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600`
- Glow effects: `shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]`

**States**:
- Buttons: default → hover (glow intensifies) → active (slightly scale down) → focus (purple ring) → disabled (reduced opacity)
- Cards: default → hover (border glow, subtle lift)
- Accordion: collapsed → expanding (smooth height transition) → expanded

**Icon Selection**: @phosphor-icons/react
- Discord logo (DiscordLogo) for CTAs
- Check (Check) for feature checkmarks
- Play (Play) for video demo
- CaretDown (CaretDown) for accordion indicators
- Globe (Globe) for language toggle

**Spacing**: Tailwind scale
- Sections: py-20 (mobile: py-12)
- Container: max-w-6xl mx-auto px-6
- Card padding: p-6
- Gap between elements: gap-6 (cards), gap-3 (inline elements)

**Mobile**: Mobile-first progressive enhancement
- Navigation: Hamburger menu below 768px with slide-in drawer
- Hero: Stack CTA buttons vertically, reduce title size
- Feature cards: 1 column mobile → 2 col tablet → 3 col desktop
- Showcase: 1 column mobile → 2 col tablet → 3 col desktop
- Team: 1 column mobile → 2 col desktop
- Typography scales down 30-40% on mobile while maintaining hierarchy
