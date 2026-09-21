# Eletro Building — Site Institucional

Site institucional multi-página da **Eletro Building** em **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, seguindo a arquitetura **Atomic Design**. Direção visual inspirada em [seemengineering.com](https://seemengineering.com/), adaptada à identidade elétrica/industrial da Eletro Building.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para build de produção:

```bash
npm run build
npm run start
```

## Páginas do site

| Página | Rota | Descrição |
|---|---|---|
| Início | `/` | Landing page focada em conversão: hero, prova social, serviços em destaque, processo, diferenciais, artigos recentes, FAQ e CTA final |
| Serviços | `/servicos` | Listagem dos 6 serviços da empresa |
| Serviço (detalhe) | `/servicos/[slug]` | Página individual de cada serviço — o que inclui, indicado para, serviços relacionados |
| Sobre nós | `/sobre` | História, missão/visão/valores, segmentos atendidos e perfil do diretor técnico |
| Artigos | `/artigos` | Listagem em cards de todos os artigos |
| Artigo (detalhe) | `/artigos/[slug]` | Conteúdo completo do artigo + artigos relacionados |
| Contato | `/contato` | Formulário simples: Nome, E-mail, Celular e Mensagem |

Os slugs de serviços e artigos são gerados automaticamente a partir de `src/lib/content.ts` (`generateStaticParams`), então basta adicionar um novo item ao array correspondente para gerar uma nova página.

## Arquitetura (Atomic Design)

```
src/
├── app/
│   ├── layout.tsx              # Layout raiz, metadados SEO, fontes
│   ├── page.tsx                # Início
│   ├── not-found.tsx           # 404 customizado
│   ├── servicos/
│   │   ├── page.tsx            # Listagem de serviços
│   │   └── [slug]/page.tsx     # Detalhe de um serviço
│   ├── sobre/page.tsx
│   ├── artigos/
│   │   ├── page.tsx            # Listagem de artigos
│   │   └── [slug]/page.tsx     # Detalhe de um artigo
│   ├── contato/page.tsx
│   └── globals.css             # Tokens globais e utilitários Tailwind
├── lib/
│   └── content.ts               # Todo o copy do site, tipos Service/Article, helpers de slug
└── components/
    ├── atoms/       # Button, Eyebrow, SectionHeading, Numeral, Divider, Badge, BackLink, VoltTrace
    ├── molecules/   # ServiceLinkCard, ArticleCard, ChecklistItem, InfoCard, FactCard,
    │                # BenefitRow, ProcessStep, FaqItem, FormField, FooterColumn, NavLink
    ├── organisms/   # Header, Hero, AboutTeaser, AboutStory, DirectorProfile, ServicesTeaser,
    │                # ServicesListing, ServiceDetailBody, ArticlesTeaser, ArticlesListing,
    │                # ArticleDetailBody, Process, Benefits, Faq, Contact, CtaBanner, Footer, PageHero
    └── templates/   # HomeTemplate, ServicosTemplate, ServicoDetalheTemplate, SobreTemplate,
                     # ArtigosTemplate, ArtigoDetalheTemplate, ContatoTemplate
```

Para editar textos (serviços, artigos, FAQ, dados da empresa, perfil do diretor), o único arquivo que precisa ser tocado na maioria dos casos é `src/lib/content.ts`.

## O que precisa ser ajustado antes de publicar

Como o site atual (`eletrobuilding.com.br`) é uma SPA renderizada 100% em JavaScript, não foi possível extrair o conteúdo original automaticamente. O copy foi reconstruído com base em informações públicas da empresa (LinkedIn) e precisa de revisão:

- **`src/lib/content.ts` → `siteConfig`**: e-mail, telefone e endereço estão com valores de exemplo — troque pelos dados reais.
- **`src/lib/content.ts` → `director`**: nome e registro no CREA estão com placeholder. A foto real do diretor ainda não foi fornecida — o componente `DirectorProfile` reserva o espaço; quando tiver o arquivo, salve em `public/images/` e troque o placeholder de texto por um `<Image>` apontando para ele.
- **Formulário de contato** (`src/components/organisms/Contact.tsx`): hoje é apenas visual (`<form>` sem `action`). É preciso conectar a um endpoint real (API Route do Next.js, serviço de e-mail como Resend/SendGrid, ou webhook de CRM/WhatsApp).
- **Artigos**: os 6 artigos em `content.ts` foram escritos como conteúdo educativo genérico sobre os temas da empresa (NR-10, energia solar, manutenção, CFTV, ART, cabeamento). Revise com o time técnico antes de publicar, e sinta-se à vontade para adicionar novos itens ao array `articles` — a página de slug é gerada automaticamente.
- Revisar todos os textos de serviços, diferenciais e FAQ com o time da Eletro Building para garantir precisão técnica (normas citadas, escopo de cada serviço etc.).

## Animações (GSAP)

O site usa **GSAP** (com o plugin **ScrollTrigger**) para as animações de entrada, centralizadas em `src/lib/gsap.ts`:

- **Textos** — `SectionHeading` e `Eyebrow` (usados na maioria das seções do site) revelam-se com um fade + leve deslocamento vertical assim que entram na viewport, cada um controlando sua própria animação via `ScrollTrigger`. Os títulos das páginas de serviço e artigo, e o bloco de texto da hero da Início, animam na carga da página com uma timeline (`gsap.timeline`), incluindo um efeito de "máscara" linha a linha no título da hero.
- **`VoltTrace`** (o traço de circuito assinatura, abaixo da foto da hero) — o traço é desenhado progressivamente com `strokeDashoffset` animado via GSAP (em vez do CSS puro anterior), os pontos "acendem" em sequência ao final do desenho, e depois entram num pulso contínuo e sutil simulando corrente elétrica fluindo. Dispara uma vez, quando o elemento entra na viewport.
- **Acessibilidade** — todas as animações checam `prefers-reduced-motion` (função `prefersReducedMotion()` em `src/lib/gsap.ts`) e são desativadas para quem tiver essa preferência ativada no sistema, mostrando o conteúdo já no estado final.
- As animações são puramente client-side (`useLayoutEffect`/GSAP) e não afetam o HTML pré-renderizado: se o JavaScript falhar ao carregar, todo o texto permanece visível normalmente (progressive enhancement).

## Modo claro / escuro

O site tem um botão de alternância de tema no cabeçalho (ícone de lua/sol), ao lado do botão de orçamento. Implementado com `next-themes`:

- Preferência salva em `localStorage` e reaplicada em visitas futuras (padrão: modo claro).
- Um script inline evita o "flash" de tema errado no carregamento da página.
- Todas as cores do site (fundo, texto, bordas, tom de âmbar usado em textos) são variáveis CSS (`--c-950`, `--c-foam`, `--c-line` etc., definidas em `globals.css`) que trocam de valor conforme a classe `.dark` está ou não presente no `<html>`. Os componentes usam sempre as mesmas classes Tailwind (`bg-graphite-950`, `text-foam`...) — não há necessidade de duplicar classes com prefixo `dark:` em cada componente.
- Existe também um token fixo `ink` (sempre escuro, independente do tema) usado especificamente onde o texto precisa continuar escuro em qualquer modo — por exemplo, o texto do botão principal (sempre sobre fundo âmbar) e o degradê escuro aplicado sobre as fotos da hero e das páginas de serviço, para o texto branco permanecer legível.

## Direção de design

- **Paleta**: base branca/off-white quente (`#FFFFFF` / `#F3F0E8`) combinada com tinta escura para texto (`#14181D`), acento âmbar-voltagem (`#F5B700` para fundos e bordas, `#8A6800` para textos — garante contraste legível sobre branco) e cobre (`#C8672B`) como secundário.
- **Imagens reais**: logo oficial da empresa (monograma "EB" com raio) no header e no rodapé; fotos de torres de transmissão, painéis solares, transformador de subestação e equipamentos de segurança eletrônica usadas na hero, nas páginas de serviço/artigo e na página Sobre.
- **Tipografia**: `Barlow Condensed` (display, condensada, industrial) + `Inter` (corpo, legibilidade) + `IBM Plex Mono` (labels técnicos, números, eyebrows) — fontes self-hosted via `@fontsource`, sem dependência de CDN externo em build time.
- **Elemento assinatura**: `VoltTrace`, um SVG de trilha de circuito que "acende" com animação de traço logo abaixo da foto da hero, reforçando o tema elétrico sem exagerar em efeitos.
- **Numeração**: usada apenas onde representa uma sequência real (seção "Como Trabalhamos"/Processo) ou contagem (Serviços, Diferenciais) — não é decoração.

## Stack

- Next.js 14.2.35 (App Router)
- React 18
- TypeScript
- Tailwind CSS 3
- `next-themes` para o modo claro/escuro
- `gsap` (+ ScrollTrigger) para as animações de entrada e do VoltTrace
- Fontes self-hosted via `@fontsource`

