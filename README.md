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

Copie `.env.example` para `.env.local` e ajuste se necessário:

```bash
NEXT_PUBLIC_SITE_URL=https://pereiraemedeirosadvogados.com.br
ADMIN_USERNAME=admin
ADMIN_PASSWORD=troque-esta-senha
```

Essa variável alimenta `metadataBase`, sitemap, robots, Open Graph (WhatsApp) e JSON-LD. **Sem ela, o build usa `localhost` e o preview de links fica incorreto.**

As variáveis `ADMIN_USERNAME` e `ADMIN_PASSWORD` protegem `/admin`, suas seções internas e APIs administrativas com autenticação HTTP básica. Troque a senha antes de publicar o painel em produção.

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
| `/admin` | Painel administrativo protegido |
| `/admin/[section]` | Seções internas: identidade, home, criminal, áreas, equipe, blog, menus, mídia, SEO e publicação |
| `/admin/api/content` | JSON atual do conteúdo do painel |
| `/admin/api/validate` | Validação protegida de rascunhos |
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
    og/                  # Imagem Open Graph (WhatsApp/redes)
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
    admin-seed.ts        # Dados iniciais do painel
    admin-sections.ts    # Rotas/seções administrativas
    admin-validation.ts  # Regras de validação do rascunho admin
  proxy.ts               # Proteção da rota administrativa
```

## Deploy na Hostinger

1. Conecte o repositório GitHub (`whigneiv/pm-advocacia`) ao painel da Hostinger.
2. Defina a variável de ambiente:
   ```
   NEXT_PUBLIC_SITE_URL=https://pereiraemedeirosadvogados.com.br
   ```
3. O build roda `npm run build`; a Hostinger serve o output do Next.js.
4. Após publicar, valide o preview de links no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) (WhatsApp usa o mesmo cache).

## Checklist antes do push

- [ ] `.env.local` **não** vai para o repositório (já ignorado)
- [ ] `NEXT_PUBLIC_SITE_URL` configurada no painel da Hostinger
- [ ] `ADMIN_USERNAME` e `ADMIN_PASSWORD` configurados no painel da Hostinger
- [ ] Rascunhos do painel revisados/exportados antes de aplicar no conteúdo público
- [ ] `npm run lint` e `npm run build` sem erros
