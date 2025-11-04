# 📋 Commands Reference - NebulaScripts

Quick reference for all npm commands and common tasks.

## 🚀 Primary Commands

### Development
```bash
npm run dev
```
Starts the Vite development server on http://localhost:5173
- Hot module reloading enabled
- Fast refresh for React
- Shows errors in browser overlay

### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/`
- Minifies JavaScript and CSS
- Tree-shakes unused code
- Generates source maps
- Optimizes assets

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally on http://localhost:4173
- Test before deploying
- Verify build works correctly
- Check bundle sizes

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality
- Checks TypeScript types
- Finds unused variables
- Enforces code style

### Kill Port Process
```bash
npm run kill
```
Kills any process running on port 5000
- Useful if port is already in use
- Only works on Unix-like systems (Linux, macOS)

## 📦 Package Management

### Install Dependencies
```bash
npm install
# or
npm i
```

### Install New Package
```bash
npm install package-name
```

### Install Dev Dependency
```bash
npm install -D package-name
```

### Update Packages
```bash
npm update
```

### Check Outdated Packages
```bash
npm outdated
```

### Clean Install (fresh start)
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🔧 Common Tasks

### Change Discord Invite URL
1. Edit `.env` file:
   ```bash
   VITE_DISCORD_INVITE=https://discord.gg/YOUR-CODE
   ```
2. Restart dev server

### Edit Translations
```bash
# English
code src/i18n/locales/en.json

# Portuguese
code src/i18n/locales/pt.json
```

### Change Colors
```bash
code src/index.css
# Edit the :root CSS variables
```

### Add New Component
```bash
# Create file
touch src/components/YourComponent.tsx

# Or use your editor
code src/components/YourComponent.tsx
```

### View Bundle Size
```bash
npm run build
# Check dist/ folder sizes
```

### Clean Build
```bash
rm -rf dist
npm run build
```

## 🌐 Git Commands

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Regular Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your message"

# Push
git push
```

### Create Branch
```bash
git checkout -b feature/your-feature
```

### Merge Branch
```bash
git checkout main
git merge feature/your-feature
```

## 🚢 Deployment Commands

### Vercel CLI
```bash
# Install CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Netlify CLI
```bash
# Install CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

### GitHub Pages
```bash
# Install package
npm i -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🔍 Debugging Commands

### Check Node Version
```bash
node --version
# Should be 18+
```

### Check npm Version
```bash
npm --version
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Check Port Usage
```bash
# Linux/macOS
lsof -i :5173
lsof -i :4173

# Windows
netstat -ano | findstr :5173
```

### Kill Process by Port
```bash
# Linux/macOS
lsof -ti:5173 | xargs kill -9

# Windows
netstat -ano | findstr :5173
# Note the PID, then:
taskkill /PID [PID] /F
```

### View Build Output
```bash
npm run build -- --debug
```

### TypeScript Check
```bash
npx tsc --noEmit
```

## 📊 Analysis Commands

### Bundle Size Analysis
```bash
# Install analyzer
npm i -D rollup-plugin-visualizer

# Add to vite.config.ts, then:
npm run build
# Opens stats.html in browser
```

### Lighthouse Audit
```bash
# Build first
npm run build
npm run preview

# Then in Chrome DevTools:
# Open DevTools → Lighthouse → Generate Report
```

### Check Dependencies
```bash
# List all dependencies
npm list

# List top-level only
npm list --depth=0

# Check specific package
npm list package-name
```

## 🧪 Testing Setup (Future)

### Vitest
```bash
# Install
npm i -D vitest @testing-library/react @testing-library/jest-dom

# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

## 🔐 Environment Variables

### View Environment
```bash
# List all env vars
printenv

# Check specific var
echo $VITE_DISCORD_INVITE
```

### Set Environment Variable

**Unix/macOS:**
```bash
export VITE_DISCORD_INVITE="https://discord.gg/YOUR-CODE"
```

**Windows CMD:**
```cmd
set VITE_DISCORD_INVITE=https://discord.gg/YOUR-CODE
```

**Windows PowerShell:**
```powershell
$env:VITE_DISCORD_INVITE="https://discord.gg/YOUR-CODE"
```

## 📝 File Operations

### Create Component File
```bash
# Unix/macOS/Linux
cat > src/components/NewComponent.tsx << 'EOF'
export function NewComponent() {
  return <div>New Component</div>
}
EOF
```

### Find Files
```bash
# Find all TypeScript files
find src -name "*.tsx"

# Find specific component
find src -name "Hero.tsx"
```

### Search Content
```bash
# Search for text in files
grep -r "useTranslation" src/

# Case insensitive
grep -ri "discord" src/
```

## 🎨 Styling Commands

### Tailwind IntelliSense (VS Code)
Install extension: "Tailwind CSS IntelliSense"

### View Tailwind Config
```bash
code tailwind.config.js
```

### Tailwind JIT Compilation
Already enabled in Vite - no action needed!

## 🆘 Troubleshooting Commands

### Fix TypeScript Errors
```bash
# Restart TS server (VS Code)
# Cmd/Ctrl + Shift + P → "Restart TS Server"
```

### Fix Package Issues
```bash
# Remove and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Clear Vite Cache
```bash
rm -rf node_modules/.vite
npm run dev
```

### Fix Permission Errors (Unix)
```bash
sudo chown -R $USER ~/.npm
```

### Reset Git (careful!)
```bash
git reset --hard HEAD
git clean -fd
```

## 💡 Pro Tips

### Faster Install
```bash
# Use pnpm (3x faster)
npm i -g pnpm
pnpm install
pnpm dev
```

### Open in Browser Automatically
Add to `vite.config.ts`:
```ts
server: {
  open: true
}
```

### Custom Port
```bash
npm run dev -- --port 3000
```

### Build with Source Maps
```bash
npm run build -- --sourcemap
```

### Watch Mode for Build
```bash
npm run build -- --watch
```

## 📚 Documentation Commands

### View README
```bash
# Unix/macOS
less README.md

# Or in editor
code README.md
```

### Generate Docs (Future)
```bash
# TypeDoc for API docs
npm i -D typedoc
npx typedoc src/
```

## 🔄 Update Commands

### Update npm
```bash
npm install -g npm@latest
```

### Update Node (nvm)
```bash
nvm install node
nvm use node
```

### Update Dependencies
```bash
# Check outdated
npm outdated

# Update all
npm update

# Update specific package
npm update package-name

# Update to latest (including breaking)
npm install package-name@latest
```

---

## 📖 Command Shortcuts

Create aliases in your shell config (`~/.bashrc`, `~/.zshrc`):

```bash
alias nd="npm run dev"
alias nb="npm run build"
alias np="npm run preview"
alias ni="npm install"
alias nup="npm update"
```

Then use: `nd` instead of `npm run dev`, etc.

---

**Need more help?**
- 📖 See [README.md](./README.md)
- 🚀 Check [QUICK_START.md](./QUICK_START.md)
- 🌐 Read [DEPLOYMENT.md](./DEPLOYMENT.md)
