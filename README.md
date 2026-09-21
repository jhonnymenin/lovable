# Escola Continuada de Doenças Imunomediadas – LP

Landing page voltada para classe médica com o intuito de captação de 100 inscrições rigorosamente projetada via especificações editoriais.

## 🚀 Tecnologias utilizadas
- React + TypeScript + Vite
- Tailwind CSS (configurado com tokens da marca)
- Fontes self-hosted (@fontsource-variable/sora e inter)
- Arquitetura de conteúdo baseada no `src/content/escola.ts`.

## 🛠 Como rodar localmente
1. Instale as dependências: `npm install`
2. Para uso das flags locais, duplique o `.env.example` para `.env`.
3. Inicialize o servidor de desenvolvimento: `npm run dev`

## 📦 Como fazer deploy
Este site foi construído para ser 100% estático, super veloz e independente de provedor de nuvem para compilação (sem SSR).

**Vercel, Netlify ou Cloudflare Pages:**
1. Conecte sua conta do GitHub.
2. Escolha o repositório.
3. Defina o comando de build como `npm run build` e a pasta de saída como `dist/`.
4. Cadastre as Variáveis de Ambiente presentes no `.env.example`.
5. Publique.

## 🔁 Duplicando para outra temporada/escola
Basta atualizar o conteúdo do dicionário central em `src/content/escola.ts`, trocar as imagens em `public/uploads/` e ajustar a paleta em `tailwind.config.js` caso a marca exija.
