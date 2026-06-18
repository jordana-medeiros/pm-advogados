# Pereira e Medeiros Advogados Associados

Site institucional do escritório **Pereira e Medeiros Advogados Associados**, construído com Next.js 16, React 19 e Tailwind CSS 4.

## Desenvolvimento

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e defina a URL pública do site:

```bash
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
```

Essa variável alimenta `metadataBase`, sitemap, robots e dados estruturados (JSON-LD). Sem ela, o build usa `localhost` e exibe um aviso.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |

## Rotas

| Rota | Descrição |
|---|---|
| `/` | Home |
| `/sobre` | Institucional |
| `/equipe` | Advogados |
| `/#areas-de-atuacao` | Áreas na home (redirect de `/areas-de-atuacao`) |
| `/blog` | Listagem com filtros e paginação |
| `/blog/[slug]` | Artigo |
| `/contato` | Canais de atendimento |
| `/aviso-legal` | Aviso legal |
| `/politica-de-privacidade` | Privacidade |

Redirects legados em `next.config.ts`: `/artigos` → `/blog`.

## Estrutura do projeto

```
public/
  brand/                 # Logos (branca, dourada, verde)
  images/
    blog/                # Capas dos artigos
    hero/                # Lady Justice (hero da home)
    lawyers/             # Fotos individuais
    team/                # Fotos institucionais da equipe

src/
  app/                   # Rotas (App Router), globals.css, SEO (robots, sitemap)
  components/
    layout/              # Header, footer, shell, logo
    sections/            # Blocos de página (hero, cards, banners)
    ui/                  # WhatsApp flutuante, scroll-to-top, imagens
    seo/                 # JSON-LD
  lib/
    articles.ts          # Posts do blog
    site-data.ts         # Conteúdo, contatos e imagens
    site-url.ts          # URL base do site
```

## Deploy

1. Defina `NEXT_PUBLIC_SITE_URL` no ambiente de produção.
2. Execute `npm run build`.
3. Publique na plataforma de hospedagem (Vercel, etc.).

## Checklist antes do push

- [ ] `.env.local` **não** vai para o repositório (já ignorado)
- [ ] `NEXT_PUBLIC_SITE_URL` configurada no painel de deploy
- [ ] `npm run lint` e `npm run build` sem erros
