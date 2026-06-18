# Pereira e Medeiros Advogados Associados

Site institucional do escritório **Pereira e Medeiros Advogados Associados**, construído com Next.js 16, React 19 e Tailwind CSS 4.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e defina a URL pública do site:

```bash
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
```

Essa variável alimenta `metadataBase`, sitemap, robots e dados estruturados (JSON-LD).

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |

## Estrutura do projeto

```
public/
  brand/              # Logos (branca, dourada, verde)
  images/
    hero/             # Imagens de destaque
    team/             # Fotos institucionais
    lawyers/          # Fotos dos advogados

src/
  app/                # Rotas (App Router)
  components/
    layout/           # Header, footer, shell, logo
    sections/         # Blocos de página reutilizáveis
    ui/               # Elementos de interface
    seo/              # JSON-LD e metadados estruturados
  lib/
    site-data.ts      # Conteúdo e contatos
    site-url.ts       # URL base do site
```

## Deploy

Após configurar `NEXT_PUBLIC_SITE_URL`, execute `npm run build` e publique o output gerado pelo Next.js na plataforma de hospedagem de sua preferência (Vercel, etc.).
