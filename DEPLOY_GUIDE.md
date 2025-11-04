# 🚀 Guia Rápido de Deploy - Kaelix Hub

Este guia vai te ajudar a colocar o site no ar em menos de 10 minutos!

## 📋 Antes de Começar

### 1. Verifique se tudo funciona localmente

```bash
# Instale as dependências (se ainda não fez)
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra http://localhost:5173 e teste:
- ✅ Site carrega sem erros
- ✅ Navegação funciona
- ✅ Link do Discord funciona
- ✅ Troca de idioma funciona
- ✅ Mobile funciona (use DevTools F12 e simule mobile)

### 2. Faça o build de produção

```bash
npm run build
```

Se o build completar sem erros, você está pronto! ✅

### 3. Teste o build localmente

```bash
npm run preview
```

Isso abre o site exatamente como vai ficar em produção.

---

## 🌐 Opção 1: Vercel (Mais Fácil - RECOMENDADO)

**Tempo estimado: 5 minutos**

### Passo a Passo:

1. **Crie uma conta no Vercel**
   - Vá em [vercel.com/signup](https://vercel.com/signup)
   - Use sua conta do GitHub (recomendado)

2. **Instale o Vercel CLI** (opcional, mas recomendado)
   ```bash
   npm install -g vercel
   ```

3. **Deploy com um comando**
   ```bash
   vercel
   ```
   
   O CLI vai perguntar:
   - `Set up and deploy?` → **Y** (Yes)
   - `Which scope?` → Escolha sua conta
   - `Link to existing project?` → **N** (No, é novo)
   - `What's your project's name?` → `kaelix-hub` (ou outro nome)
   - `In which directory is your code located?` → `./` (tecle Enter)
   - `Want to override settings?` → **N** (No)
   
4. **Pronto!** 🎉
   - Vercel vai fazer o build e deploy automaticamente
   - Vai te dar uma URL tipo: `https://kaelix-hub.vercel.app`
   - Teste a URL e compartilhe com a equipe!

### Alternativa: Deploy pelo Site

Se não quiser usar CLI:

1. Vá em [vercel.com/new](https://vercel.com/new)
2. Clique em "Import Git Repository"
3. Autorize acesso ao seu GitHub
4. Selecione o repositório do projeto
5. Clique em "Deploy"
6. Aguarde ~2 minutos
7. Pronto! Site no ar! 🚀

### Configurar Domínio Próprio (Opcional)

1. No dashboard do Vercel, vá em Settings → Domains
2. Digite seu domínio (ex: `kaelixhub.com`)
3. Siga as instruções para configurar DNS
4. Aguarde propagação (pode levar até 48h, mas geralmente é rápido)

---

## 🌐 Opção 2: Netlify (Também Fácil)

**Tempo estimado: 5 minutos**

### Método 1: Arrastar e Soltar

1. **Faça o build**
   ```bash
   npm run build
   ```

2. **Vá para [app.netlify.com/drop](https://app.netlify.com/drop)**

3. **Arraste a pasta `dist`** para a área indicada

4. **Pronto!** URL disponível instantaneamente! 🎉

### Método 2: Deploy Automático via Git

1. **Crie conta no Netlify**
   - [app.netlify.com/signup](https://app.netlify.com/signup)

2. **Clique em "Add new site" → "Import an existing project"**

3. **Conecte seu GitHub** e selecione o repositório

4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Clique em "Deploy site"

5. **Aguarde 2-3 minutos** e site estará online! 🚀

### Configurar Domínio Próprio (Opcional)

1. Vá em Site Settings → Domain Management
2. Clique em "Add custom domain"
3. Digite seu domínio
4. Configure os DNS records conforme instruções
5. SSL/HTTPS é automático! ✅

---

## 🌐 Opção 3: GitHub Pages (Grátis e Simples)

**Tempo estimado: 10 minutos**

### Setup Inicial:

1. **Instale gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Configure vite.config.ts**
   
   Adicione a base URL:
   ```typescript
   export default defineConfig({
     base: '/nome-do-repositorio/',
     // ... resto da config
   })
   ```

3. **Adicione script no package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy!**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Vá no repositório do GitHub
   - Settings → Pages
   - Source: selecione branch `gh-pages`
   - Salve

6. **URL será:** `https://seu-usuario.github.io/nome-repositorio/`

---

## 🔧 Problemas Comuns

### "npm run build" falha

**Solução:**
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Site carrega mas está "quebrado"

**Causa:** Problemas com URLs de assets

**Solução:**
- Vercel/Netlify: Certifique-se que `base` no vite.config.ts está como `'/'`
- GitHub Pages: `base` precisa ser `'/nome-repo/'`

### Link do Discord não funciona

**Verifique:**
1. `src/components/Header.tsx` linha 23
2. `src/components/Hero.tsx` linha 7
3. `src/components/DiscordCTA.tsx` linha 10

Certifique-se que o link está correto: `https://discord.gg/SEU-CODIGO`

### Mobile não funciona direito

**Teste localmente:**
```bash
npm run build
npm run preview
```

Abra DevTools (F12) → Toggle device toolbar → Teste em iPhone/Android

Se funciona localmente mas não em produção, pode ser cache do navegador. Teste em aba anônima.

### Lighthouse score baixo

**Performance:**
- Imagens muito grandes → Comprima com [TinyPNG](https://tinypng.com)
- Fontes carregando devagar → Já está otimizado com preconnect
- JavaScript muito grande → Normal para React, mas aceitável

**SEO:**
- Já está otimizado com meta tags
- Certifique-se que o título está descritivo

---

## 📱 Testando em Produção

Depois do deploy, teste:

### Desktop
- [ ] Chrome: Abra URL, navegue por todas as seções
- [ ] Firefox: Mesma coisa
- [ ] Safari (se tiver Mac): Teste também

### Mobile
- [ ] Abra no celular (use QR code ou envie link)
- [ ] Teste scroll vertical
- [ ] Teste menu mobile
- [ ] Teste botões de Discord
- [ ] Verifique se textos são legíveis

### Ferramentas Úteis
- [Lighthouse](https://pagespeed.web.dev/) - Performance e SEO
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Google
- [SSL Test](https://www.ssllabs.com/ssltest/) - Verificar HTTPS

---

## 🎉 Pronto!

Seu site está no ar! 🚀

### Próximos Passos:

1. **Compartilhe a URL** no Discord
2. **Configure Google Analytics** (opcional)
3. **Adicione ao Google Search Console** (opcional)
4. **Monitore erros** com Sentry (opcional)

### Para Atualizações Futuras:

**Vercel/Netlify com Git:**
- Faça commit: `git commit -m "Update"`
- Faça push: `git push`
- Deploy automático! ✨

**Vercel CLI:**
```bash
vercel --prod
```

**Netlify CLI:**
```bash
netlify deploy --prod
```

**GitHub Pages:**
```bash
npm run deploy
```

---

## 🆘 Precisa de Ajuda?

1. Verifique o [CHECKLIST_PRODUCAO.md](./CHECKLIST_PRODUCAO.md)
2. Leia a [documentação completa no README](./README.md)
3. Entre em contato no Discord
4. Verifique logs de erro no console do navegador (F12)

---

**Boa sorte com o deploy! 🚀✨**
