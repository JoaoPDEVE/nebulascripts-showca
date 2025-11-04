# ✅ Checklist de Produção - Kaelix Hub

Use este checklist para garantir que o site está 100% pronto para ir ao ar.

## 📱 Responsividade e Compatibilidade

### Mobile (< 768px)
- [ ] Menu mobile abre e fecha corretamente
- [ ] Todas as seções são scrolláveis verticalmente
- [ ] Botões e links têm tamanho adequado para toque (mínimo 44x44px)
- [ ] Textos são legíveis sem zoom
- [ ] Imagens e cards se ajustam corretamente
- [ ] Footer aparece no final do scroll
- [ ] Botão "Voltar ao topo" funciona
- [ ] Menu do Discord no header funciona

### Tablet (768px - 1024px)
- [ ] Layout de 2 colunas funciona nas features
- [ ] Navegação desktop está visível
- [ ] Cards de time ficam em 2 colunas
- [ ] Showcase em grid 2x2

### Desktop (> 1024px)
- [ ] Scroll horizontal funciona com mouse wheel
- [ ] Navegação por setas funciona
- [ ] Dots de navegação lateral aparecem
- [ ] Layout de 3 colunas nas features
- [ ] Todas as animações funcionam suavemente

### Navegadores
- [ ] Chrome/Edge (últimas versões)
- [ ] Firefox (última versão)
- [ ] Safari (iOS e macOS)
- [ ] Navegadores mobile (Chrome Android, Safari iOS)

## 🎨 Conteúdo e Estilo

### Textos e Traduções
- [ ] Todos os textos em português estão corretos
- [ ] Todos os textos em inglês estão corretos
- [ ] Toggle de idioma funciona corretamente
- [ ] Preferência de idioma é salva no localStorage
- [ ] Sem erros de digitação ou gramática
- [ ] Mensagens de toast aparecem corretamente

### Links e Navegação
- [ ] Link do Discord está correto em todos os lugares
  - Header (botão Comunidade)
  - Hero (se aplicável)
  - Seção Discord CTA
  - Menu mobile
- [ ] Botão "Copiar Link" do Discord funciona
- [ ] Botão "Abrir Discord" abre em nova aba
- [ ] Links para Termos e Privacidade funcionam
- [ ] Navegação entre seções funciona suavemente
- [ ] Logo leva de volta ao Hero

### Imagens e Mídia
- [ ] Favicon aparece na aba do navegador
- [ ] Placeholder images do Showcase (substituir se tiver imagens reais)
- [ ] Todas as imagens têm atributo `alt` descritivo
- [ ] Imagens carregam rapidamente

### Animações
- [ ] Animações funcionam suavemente (60fps)
- [ ] Background animado não causa lag
- [ ] Prefers-reduced-motion é respeitado
- [ ] Hover effects funcionam
- [ ] Scroll progress bar atualiza corretamente

## 🔧 Funcionalidades

### Features Essenciais
- [ ] Troca de idioma funciona instantaneamente
- [ ] Scroll horizontal (desktop) funciona com wheel
- [ ] Scroll vertical (mobile) funciona normalmente
- [ ] Seções têm IDs corretos para navegação
- [ ] Accordion do FAQ abre e fecha
- [ ] Status de rede detecta online/offline
- [ ] Progress bar mostra progresso do scroll

### Acessibilidade
- [ ] Navegação por teclado funciona (Tab)
- [ ] Focus states são visíveis
- [ ] ARIA labels estão presentes
- [ ] Semantic HTML está correto
- [ ] Contraste de cores adequado (mínimo 4.5:1)
- [ ] Screen readers conseguem ler o conteúdo

### Performance
- [ ] Build de produção gerado (`npm run build`)
- [ ] Bundle size razoável (< 1MB ideal)
- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)

## 🌐 SEO e Meta Tags

### Meta Tags Básicas
- [ ] `<title>` está correto e descritivo
- [ ] Meta description está presente e atraente
- [ ] Meta keywords incluídas
- [ ] Canonical URL configurada
- [ ] Lang attribute correto (`pt-BR`)

### Open Graph (Facebook/LinkedIn)
- [ ] og:title
- [ ] og:description
- [ ] og:type (website)
- [ ] og:site_name
- [ ] og:image (se tiver)

### Twitter Card
- [ ] twitter:card (summary_large_image)
- [ ] twitter:title
- [ ] twitter:description
- [ ] twitter:image (se tiver)

### Outros
- [ ] Theme color definido (#7c3aed)
- [ ] Apple touch icon (se quiser PWA)
- [ ] Robots.txt configurado (se necessário)

## 🚀 Deploy

### Pré-Deploy
- [ ] Todas as dependências instaladas (`npm install`)
- [ ] Sem erros no console do navegador
- [ ] Sem warnings críticos no build
- [ ] Build local testado (`npm run preview`)
- [ ] Git commit com mensagem descritiva

### Plataforma de Deploy
- [ ] Escolhida: ⬜ Vercel ⬜ Netlify ⬜ GitHub Pages ⬜ Outro
- [ ] Conta criada e configurada
- [ ] Repositório conectado (se automático)
- [ ] Build settings configurados
  - Build Command: `npm run build`
  - Output Directory: `dist`
- [ ] Deploy realizado com sucesso
- [ ] URL de produção acessível

### Pós-Deploy
- [ ] Site carrega corretamente na URL de produção
- [ ] Todas as páginas acessíveis (Home, Terms, Privacy)
- [ ] Sem erros 404
- [ ] HTTPS habilitado (SSL)
- [ ] Domínio customizado configurado (se aplicável)
- [ ] DNS propagado corretamente

## 🔒 Segurança e Legal

### Conteúdo Legal
- [ ] Termos de Uso estão completos
- [ ] Política de Privacidade está completa
- [ ] Mensagem de compliance com Roblox está clara
- [ ] Disclaimer sobre scripts legais está presente
- [ ] Copyright footer atualizado com ano correto

### Segurança
- [ ] Sem credenciais no código fonte
- [ ] Sem API keys expostas
- [ ] Sem dados sensíveis no localStorage
- [ ] HTTPS configurado
- [ ] Headers de segurança (CSP, HSTS) se aplicável

## 📊 Monitoramento (Opcional mas Recomendado)

- [ ] Google Analytics configurado
- [ ] Google Search Console verificado
- [ ] Monitoring de uptime (UptimeRobot, etc.)
- [ ] Error tracking (Sentry, etc.)
- [ ] Analytics dashboard configurado

## 📝 Documentação

- [ ] README.md atualizado
- [ ] Instruções de deploy documentadas
- [ ] Código comentado onde necessário
- [ ] PRD.md reflete o estado atual

## 🎯 Final

- [ ] Compartilhado com equipe para revisão
- [ ] Testado por pelo menos 2 pessoas diferentes
- [ ] Testado em pelo menos 3 dispositivos diferentes
- [ ] Feedback incorporado
- [ ] URL compartilhada no Discord
- [ ] Celebrar! 🎉

---

## 🚨 Issues Conhecidos (anotar aqui se houver)

_Nenhum por enquanto..._

---

## 📞 Suporte

Se encontrar algum problema:

1. Verifique o console do navegador (F12)
2. Teste em modo anônimo/privado
3. Limpe cache e cookies
4. Teste em outro navegador
5. Veja os logs do servidor de deploy
6. Entre em contato com a equipe técnica no Discord

---

**Data do último deploy:** _____/_____/_____

**Deployed by:** _________________

**URL de Produção:** _________________________________
