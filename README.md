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

## Estrutura

- `src/app/` — páginas (App Router)
- `src/components/` — componentes reutilizáveis
- `src/lib/site-data.ts` — conteúdo e dados de contato centralizados
- `public/images/` — imagens estáticas

## Deploy

Após configurar `NEXT_PUBLIC_SITE_URL`, execute `npm run build` e publique o output gerado pelo Next.js na plataforma de hospedagem de sua preferência (Vercel, etc.).
