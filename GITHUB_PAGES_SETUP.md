# Como Ativar o GitHub Pages

Este guia irá ajudá-lo a ativar o GitHub Pages para que seu site fique acessível publicamente na web.

## Passos para Ativar

1. **Vá para as Configurações do Repositório**
   - Abra o repositório no GitHub: https://github.com/JoaoPDEVE/nebulascripts-showca
   - Clique na aba **Settings** (Configurações)

2. **Acesse as Configurações do GitHub Pages**
   - No menu lateral esquerdo, role até encontrar **Pages** em "Code and automation"
   - Clique em **Pages**

3. **Configure a Source (Origem)**
   - Em "Build and deployment" (Construção e implantação)
   - Em "Source" (Origem), selecione: **GitHub Actions**
   - Isso permitirá que o workflow automatizado faça o deploy do site

4. **Faça o Push do Código para a Branch Main**
   - O workflow foi configurado para executar automaticamente quando houver push para a branch `main`
   - Merge este pull request para a branch `main` para ativar o deployment

5. **Aguarde o Deployment**
   - Após o merge, vá para a aba **Actions** no repositório
   - Você verá o workflow "Deploy to GitHub Pages" executando
   - Aguarde até que o workflow seja concluído (geralmente leva 2-3 minutos)

6. **Acesse seu Site**
   - Após o deployment ser concluído, seu site estará disponível em:
   - **https://joaopdeve.github.io/nebulascripts-showca/**

## Verificação

Para verificar se o site está funcionando:
- Acesse a URL: https://joaopdeve.github.io/nebulascripts-showca/
- O site deve carregar normalmente com todos os estilos e funcionalidades

## Atualizações Futuras

Sempre que você fizer push de mudanças para a branch `main`, o site será automaticamente reconstruído e atualizado. Não é necessário fazer nada manualmente!

## Solução de Problemas

Se o site não aparecer:
1. Verifique se o GitHub Pages está ativado em Settings > Pages
2. Verifique se o workflow foi executado com sucesso em Actions
3. Aguarde alguns minutos para a propagação do DNS
4. Limpe o cache do navegador e tente novamente

## Domínio Personalizado (Opcional)

Se você quiser usar um domínio personalizado (como `www.seunome.com`):
1. Adicione o domínio em Settings > Pages > Custom domain
2. Configure os registros DNS do seu domínio conforme as instruções do GitHub
3. Aguarde a propagação do DNS (pode levar até 24 horas)
