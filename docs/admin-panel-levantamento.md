# Levantamento do painel administrativo

Este levantamento parte da estrutura atual do site Pereira e Medeiros Advogados Associados: home, institucional, equipe, blog, contato, landing criminal, paginas legais, SEO e ativos em `public/`.

## Primeira versao implementada

- Rota `/admin` criada com painel navegavel.
- Rotas internas criadas em `/admin/[section]`.
- APIs protegidas criadas em `/admin/api/content` e `/admin/api/validate`.
- Protecao por autenticacao HTTP basica via `ADMIN_USERNAME` e `ADMIN_PASSWORD`.
- Leitura dos dados atuais do site como ponto de partida do painel.
- Edicao em rascunho local no navegador.
- Exportacao do conteudo editado em JSON para futura integracao com banco/CMS.
- Importacao de JSON, autosave local, validacao, reset do rascunho, busca, ordenacao, duplicacao e remocao em areas-chave.
- Areas cobertas na interface: visao geral, identidade, home, criminal, areas, equipe, blog, menus, midia, SEO e publicacao.
- Segunda evolucao implementada: menus editaveis, mensagens de WhatsApp, categorias do blog, previa de card de artigo e biblioteca de capas/fotos.

## Objetivo do painel

Dar autonomia aos donos do escritorio para alterar conteudo, imagens, chamadas, equipe, artigos e configuracoes comerciais sem depender de alteracao manual no codigo.

O painel deve ser privado, com autenticacao, perfis de acesso e historico de alteracoes. Nao recomendo publicar uma rota `/admin` funcional antes dessa camada de seguranca existir.

## Areas principais do painel

### 1. Visao geral

- Status do site: paginas publicadas, artigos ativos, rascunhos e ultimas alteracoes.
- Atalhos para editar home, landing criminal, equipe, blog e contatos.
- Checklist de SEO: dominio publico, imagem social, sitemap, paginas sem descricao e artigos sem capa.
- Alertas de conteudo: advogado sem foto, link de WhatsApp ausente, artigo sem categoria, imagem muito pesada.

### 2. Identidade do escritorio

- Nome do escritorio, descricao institucional curta e texto de apresentacao.
- Logos por variante: branca, dourada e verde.
- Imagem Open Graph padrao para WhatsApp e redes sociais.
- Paleta principal, se no futuro quiser liberar troca controlada de cores.
- Dados juridicos para rodape, aviso legal e politicas.

### 3. Home

- Hero: titulo, trecho destacado, lista de diferenciais e botoes.
- Destaques numericos: especialidades, advogados e contato direto.
- Secao "Quem somos": textos, imagem e legenda.
- Secao "Quando procurar": titulo, introducao e itens numerados.
- Areas de atuacao: nome, resumo, ordem, destaque e link de contato.
- Destaque criminal: titulo, paragrafos, CTA e link da landing criminal.
- Equipe em destaque: ordem dos advogados exibidos.
- Blog na home: quantidade de posts e criterio de exibicao.
- FAQ geral: perguntas, respostas, ordem e status publicado/rascunho.

### 4. Landing criminal

- Titulo, subtitulo e imagem de fundo.
- CTA de emergencia e numero de plantao.
- Faixa de urgencia 24h.
- Servicos criminais: prisao em flagrante, audiencia de custodia, habeas corpus, inqueritos, busca e apreensao, tribunal do juri.
- Advogados destacados na defesa criminal.
- Banner dos socios, imagem e texto.
- Diferenciais da defesa criminal, com icones controlados por lista.
- Passo a passo do atendimento, com imagem por etapa.
- FAQ criminal.
- SEO especifico da landing: title, description, canonical e imagem social.

### 5. Equipe e associados

- Cadastro de advogado: nome, OAB, area, bio, foto, ordem e status.
- Marcadores: socio fundador, socia especialista, associado, correspondente, consultor.
- Areas vinculadas a cada profissional.
- Botao "Falar sobre esta area" com mensagem de WhatsApp personalizada.
- Possibilidade de ocultar temporariamente um profissional sem apagar o cadastro.
- Validacoes: OAB obrigatoria, foto com proporcao recomendada e bio minima.

### 6. Blog/artigos

- Criar, editar, duplicar, agendar e arquivar artigos.
- Campos: titulo, slug, resumo, categoria, data, tempo de leitura, capa e corpo.
- Editor rico simples: paragrafos, subtitulos, listas, links e imagens internas.
- Categorias editaveis.
- Previa do card e da pagina do artigo antes de publicar.
- SEO por artigo: title, description, imagem social, canonical e index/noindex.
- Historico de revisoes e botao para restaurar versao anterior.

### 7. Contatos e atendimento

- WhatsApps principais e secundarios.
- Mensagem padrao de WhatsApp por area.
- Telefone para ligacao.
- Instagram e futuros canais.
- Enderecos: cidade, linha completa e URL do Google Maps.
- Textos da pagina de contato.
- Horarios de atendimento e regra de plantao criminal.

### 8. Navegacao e rodape

- Itens do menu principal: label, rota, ordem e destaque como CTA.
- Itens do menu mobile.
- Links do rodape.
- Links legais e politicas.
- Redirects legados, como `/artigos` para `/blog`.

### 9. Midia e biblioteca de imagens

- Upload de imagens para hero, equipe, blog, criminal e OG.
- Corte por proporcao: 16:9, 21:9, 4:5, 1200x630.
- Texto alternativo obrigatorio.
- Compressao e conversao para WebP quando fizer sentido.
- Organizacao por pasta/categoria.
- Indicador de onde cada imagem esta sendo usada antes de excluir.

### 10. SEO e compartilhamento

- Dominio publico (`NEXT_PUBLIC_SITE_URL`).
- Titles e descriptions por pagina.
- Sitemap e robots.
- Dados estruturados: escritorio, FAQ e artigos.
- Previa de compartilhamento para WhatsApp/redes.
- Controle de pagina indexavel ou nao.
- Auditoria de slug duplicado, imagem ausente e descricao curta.

### 11. Paginas legais

- Aviso legal.
- Politica de privacidade.
- Data da ultima atualizacao.
- Blocos reutilizaveis para termos, cookies e consentimentos futuros.

### 12. Usuarios, papeis e seguranca

- Dono: acesso total.
- Editor: conteudo, imagens e blog.
- Marketing: blog, SEO, banners e CTAs.
- Atendimento: contatos, mensagens e horarios.
- Leitor: somente visualizacao.
- Login protegido, recuperacao de senha e 2FA.
- Auditoria de alteracoes: quem mudou, quando mudou e o que mudou.

### 13. Publicacao

- Estados de conteudo: rascunho, em revisao, publicado e arquivado.
- Previa privada antes de publicar.
- Agendamento de publicacao.
- Botao de desfazer publicacao.
- Revalidacao do site apos alteracoes.

### 14. Configuracoes tecnicas

- URLs canonicas.
- Ambiente local, homologacao e producao.
- Integracao futura com email, CRM, analytics ou ferramenta de leads.
- Backups e exportacao de conteudo.
- Logs de erro do painel.

## Modelo de dados recomendado

- `site_settings`: identidade, SEO global, contatos e redes.
- `pages`: paginas editaveis e metadados.
- `page_sections`: blocos de cada pagina com ordem e status.
- `practice_areas`: areas de atuacao.
- `lawyers`: equipe e associados.
- `articles`: blog.
- `article_categories`: categorias do blog.
- `media_assets`: imagens e arquivos.
- `faqs`: perguntas por contexto.
- `redirects`: rotas antigas e destino.
- `users`: administradores.
- `audit_logs`: historico de alteracoes.

## Prioridade de implementacao

1. Base segura: autenticacao, papeis, banco de dados, upload de midia e auditoria.
2. Conteudo essencial: configuracoes gerais, contatos, home, areas e equipe.
3. Blog completo: editor, categorias, capas, SEO e publicacao.
4. Landing criminal: CTAs, servicos, diferenciais, FAQ e imagens.
5. SEO/publicacao: preview, sitemap, metadados, revisoes e agendamento.
6. Refinos: analytics, leads, backups, importacao/exportacao e permissoes avancadas.

## Regras importantes

- Toda alteracao deve ter previa antes de publicar.
- Slugs devem ser unicos e validados.
- Imagens devem ter texto alternativo.
- O painel nao deve permitir apagar conteudo publicado sem confirmacao.
- Dados sensiveis e credenciais nunca devem ficar no repositorio.
- A rota administrativa deve ser privada desde o primeiro deploy.
