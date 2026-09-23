export const siteConfig = {
  name: "Eletro Building",
  legalName: "Eletro Building Comércio e Serviços Ltda",
  tagline: "Engenharia Elétrica & Segurança",
  email: "contato@eletrobuilding.com.br",
  phone: "+55 (11) 1149914110",
  phoneHref: "https://wa.me/551149914110",
  whatsapp: "https://wa.me/551149914110",
  address: "Santo André — SP, Brasil",
};

export const nav = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Artigos", href: "/artigos" },
  { label: "Contato", href: "/contato" },
];

// ---------------------------------------------------------------------------
// HOME (landing page focada em conversão)
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "Engenharia Elétrica — Industrial, Comercial & Residencial",
  titleLines: ["Energia que", "não pode falhar."],
  description:
    "A Eletro Building projeta, instala e mantém instalações elétricas, sistemas de segurança e energia solar para quem não pode conviver com risco ou parada não planejada.",
  primaryCta: { label: "Solicitar orçamento", href: "/contato" },
  secondaryCta: { label: "Ver serviços", href: "/servicos" },
  stripText:
    "A Eletro Building é a parceira técnica de indústrias, comércios e residências quando a instalação elétrica precisa estar certa.",
};

export const aboutTeaser = {
  eyebrow: "Quem somos",
  title: "Uma empresa estruturada para disponibilidade e conservação",
  body: "A Eletro Building atua nos segmentos industrial, comercial e residencial, levando soluções para a disponibilidade e a conservação das instalações elétricas dos nossos clientes, sempre em conformidade com as normas técnicas e regulamentadoras vigentes.",
  cta: { label: "Conheça a Eletro Building", href: "/sobre" },
  facts: [
    {
      label: "3 Segmentos",
      title: "Industrial, comercial e residencial",
      body: "Estrutura técnica dimensionada para atender desde uma planta industrial até uma instalação residencial.",
    },
    {
      label: "Normas",
      title: "Conformidade regulamentar",
      body: "Projetos e laudos alinhados às NRs, normas ABNT e exigências das concessionárias de energia.",
    },
    {
      label: "Intelbras",
      title: "Revenda autorizada",
      body: "Fornecimento e instalação de linhas completas de segurança eletrônica e redes com garantia de fábrica.",
    },
  ],
  metric: {
    value: "360°",
    label: "ATENDIMENTO ELÉTRICO COMPLETO",
    description: "Do projeto à manutenção, sob um único time responsável.",
  },
};

export const ctaBanner = {
  eyebrow: "Pronto para começar?",
  title: "Fale com um engenheiro antes de contratar qualquer serviço elétrico",
  description:
    "Envie o escopo do seu projeto e receba uma resposta técnica qualificada — sem compromisso.",
  cta: { label: "Solicitar orçamento", href: "/contato" },
};

// ---------------------------------------------------------------------------
// SERVIÇOS
// ---------------------------------------------------------------------------

export type Service = {
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  includes: string[];
  idealFor: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "engenharia-eletrica",
    image: "/images/electricity.webp",
    imageAlt: "Torres de transmissão de energia elétrica contra o céu",
    title: "Engenharia Elétrica",
    shortDescription:
      "Projetos, laudos técnicos e execução de instalações de baixa e média tensão para indústria, comércio e residências.",
    intro:
      "Cuidamos de todo o ciclo de uma instalação elétrica: do dimensionamento de cargas ao projeto executivo, passando pela instalação em campo e pelos testes finais. Cada projeto é desenvolvido por engenheiro responsável e documentado com ART.",
    includes: [
      "Projeto elétrico de baixa e média tensão",
      "Dimensionamento de cargas e quadros de distribuição",
      "Memorial descritivo e orçamento detalhado",
      "Execução da instalação por equipe própria",
      "Testes, comissionamento e laudo final com ART",
    ],
    idealFor: [
      "Indústrias que precisam ampliar ou regularizar a instalação elétrica",
      "Comércios em fase de reforma ou abertura de nova unidade",
      "Residências que precisam de projeto elétrico completo",
    ],
  },
  {
    number: "02",
    slug: "seguranca-do-trabalho",
    image: "/images/transformer.webp",
    imageAlt: "Transformador de alta tensão em subestação de energia",
    title: "Segurança do Trabalho",
    shortDescription:
      "Laudos NR-10, adequação de instalações e procedimentos para eliminar riscos elétricos nas rotinas de operação.",
    intro:
      "Riscos elétricos não avisam antes de acontecer. Avaliamos suas instalações e procedimentos à luz da NR-10 e da NR-35, apontando não conformidades e implementando as correções necessárias para proteger as pessoas e a operação.",
    includes: [
      "Laudo de conformidade NR-10",
      "Prontuário de instalações elétricas (PIE)",
      "Sinalização e adequação de painéis e quadros",
      "Procedimentos de trabalho seguro e bloqueio/etiquetagem (LOTO)",
      "Treinamento de equipes para trabalho com eletricidade",
    ],
    idealFor: [
      "Indústrias e comércios em processo de auditoria ou fiscalização",
      "Empresas que precisam regularizar o prontuário elétrico",
      "Times de manutenção que operam próximo a painéis energizados",
    ],
  },
  {
    number: "03",
    slug: "energia-solar",
    image: "/images/solar-panels.webp",
    imageAlt: "Painéis solares instalados em cobertura, com skyline urbano ao fundo",
    title: "Energia Solar",
    shortDescription:
      "Dimensionamento, instalação e homologação de sistemas fotovoltaicos on-grid para redução da conta de energia.",
    intro:
      "Projetamos sistemas fotovoltaicos on-grid dimensionados para o seu consumo real, cuidando de todo o processo — do projeto à homologação junto à concessionária — para que a economia comece a aparecer o quanto antes.",
    includes: [
      "Estudo de viabilidade e dimensionamento do sistema",
      "Projeto elétrico para homologação junto à concessionária",
      "Instalação de painéis, inversores e estrutura de fixação",
      "Comissionamento e testes de geração",
      "Acompanhamento da homologação e conexão à rede",
    ],
    idealFor: [
      "Indústrias e comércios com alto consumo de energia",
      "Condomínios que buscam redução de custo nas áreas comuns",
      "Residências que querem reduzir a conta de luz a médio prazo",
    ],
  },
  {
    number: "04",
    slug: "seguranca-eletronica",
    image: "/images/eletronic-security.webp",
    imageAlt: "Câmeras de CFTV e equipamentos de segurança eletrônica sobre planta baixa",
    title: "Segurança Eletrônica",
    shortDescription:
      "CFTV, alarmes, controle de acesso e automação predial, com revenda autorizada Intelbras.",
    intro:
      "Como revenda autorizada Intelbras, fornecemos e instalamos sistemas completos de segurança eletrônica — câmeras, alarmes, controle de acesso e automação — com equipamento original e garantia de fábrica.",
    includes: [
      "Projeto e instalação de CFTV (câmeras IP e analógicas)",
      "Alarmes com monitoramento e sensores perimetrais",
      "Controle de acesso (biometria, cartão e facial)",
      "Automação de portões, iluminação e ambientes",
      "Equipamentos Intelbras originais, com garantia de fábrica",
    ],
    idealFor: [
      "Indústrias e comércios que precisam de monitoramento contínuo",
      "Condomínios residenciais e comerciais",
      "Residências que buscam controle de acesso e alarme integrados",
    ],
  },
  {
    number: "05",
    slug: "manutencao-e-disponibilidade",
    image: "/images/transformer.webp",
    imageAlt: "Transformador de alta tensão em subestação de energia",
    title: "Manutenção e Disponibilidade",
    shortDescription:
      "Planos de manutenção preventiva e corretiva para manter a instalação operando sem interrupções não planejadas.",
    intro:
      "Uma instalação elétrica bem projetada ainda precisa de manutenção para continuar segura. Estruturamos planos preventivos sob medida e atendemos chamados corretivos com agilidade, reduzindo o risco de parada não planejada.",
    includes: [
      "Plano de manutenção preventiva periódica",
      "Termografia e inspeção de pontos quentes em painéis",
      "Atendimento corretivo emergencial",
      "Relatórios técnicos de cada intervenção",
      "Histórico de manutenção da instalação",
    ],
    idealFor: [
      "Indústrias com operação contínua e baixa tolerância a paradas",
      "Comércios que dependem de disponibilidade elétrica constante",
      "Condomínios e residências com instalações mais antigas",
    ],
  },
  {
    number: "06",
    slug: "redes-e-cabeamento-estruturado",
    image: "/images/eletronic-security.webp",
    imageAlt: "Cabeamento de rede e equipamentos sobre planta baixa de projeto",
    title: "Redes e Cabeamento Estruturado",
    shortDescription:
      "Estruturação de redes de dados, cabeamento estruturado e integração de sistemas prediais.",
    intro:
      "Projetamos e instalamos a infraestrutura de rede que sustenta a operação digital da sua empresa — do cabeamento estruturado ao rack de telecomunicações — com organização e certificação dos pontos instalados.",
    includes: [
      "Projeto de cabeamento estruturado (cat5e, cat6, fibra óptica)",
      "Organização e identificação de racks e patch panels",
      "Certificação dos pontos de rede instalados",
      "Integração com sistemas de segurança eletrônica e automação",
      "Wi-Fi corporativo e distribuição de rede interna",
    ],
    idealFor: [
      "Empresas em fase de mudança ou expansão de escritório",
      "Indústrias que precisam integrar rede, CFTV e automação",
      "Condomínios que buscam infraestrutura de internet organizada",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

// ---------------------------------------------------------------------------
// PROCESSO
// ---------------------------------------------------------------------------

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Vistoria técnica no local, levantamento de cargas e identificação de riscos e não conformidades existentes.",
  },
  {
    step: "02",
    title: "Projeto & Orçamento",
    description:
      "Elaboração do projeto elétrico, memorial descritivo e orçamento detalhado, aprovados antes de qualquer execução.",
  },
  {
    step: "03",
    title: "Execução",
    description:
      "Instalação em campo por equipe própria, com controle de qualidade e registro fotográfico em cada etapa do serviço.",
  },
  {
    step: "04",
    title: "Entrega & Manutenção",
    description:
      "Testes finais, emissão de laudos e ART, e definição de um plano de manutenção para manter a instalação segura.",
  },
];

// ---------------------------------------------------------------------------
// DIFERENCIAIS
// ---------------------------------------------------------------------------

export const benefits = [
  {
    number: "01",
    title: "Ponto único de responsabilidade",
    description:
      "Projeto, execução e manutenção sob o mesmo time técnico — sem repasse de responsabilidade entre terceiros.",
  },
  {
    number: "02",
    title: "Conformidade com as normas",
    description:
      "Trabalho orientado por NR-10, NR-35 e normas ABNT, com toda a documentação exigida para auditorias e fiscalizações.",
  },
  {
    number: "03",
    title: "Três segmentos, um só padrão técnico",
    description:
      "Indústria, comércio ou residência recebem o mesmo rigor de projeto, execução e documentação.",
  },
  {
    number: "04",
    title: "Revenda autorizada Intelbras",
    description:
      "Equipamentos originais, com garantia de fábrica, para segurança eletrônica, redes e automação.",
  },
  {
    number: "05",
    title: "Equipe própria",
    description:
      "Sem terceirização das etapas críticas: quem projeta acompanha a execução e responde pela entrega.",
  },
  {
    number: "06",
    title: "Documentação completa na entrega",
    description:
      "Laudos técnicos, ART e registros de manutenção entregues junto com a obra — sem cobranças posteriores.",
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const faq = [
  {
    question: "Quais tipos de projeto a Eletro Building atende?",
    answer:
      "Atendemos instalações elétricas industriais, comerciais e residenciais — de uma planta fabril a uma reforma residencial —, incluindo energia solar e segurança eletrônica.",
  },
  {
    question: "A empresa emite laudos técnicos e ART?",
    answer:
      "Sim. Todo projeto é entregue com laudo técnico, Anotação de Responsabilidade Técnica (ART) e a documentação exigida pelas normas regulamentadoras aplicáveis.",
  },
  {
    question: "Vocês oferecem manutenção contínua depois da instalação?",
    answer:
      "Sim. Estruturamos planos de manutenção preventiva e corretiva para manter a disponibilidade da instalação ao longo do tempo, com relatórios periódicos.",
  },
  {
    question: "Como funciona a revenda autorizada Intelbras?",
    answer:
      "Como revenda autorizada, fornecemos e instalamos equipamentos originais Intelbras de segurança eletrônica e redes, com garantia de fábrica e suporte técnico.",
  },
  {
    question: "Como solicito um orçamento?",
    answer:
      "Envie os detalhes do seu projeto pelo formulário de contato ou WhatsApp. Nossa equipe retorna com uma análise técnica inicial e os próximos passos.",
  },
];

// ---------------------------------------------------------------------------
// SOBRE NÓS
// ---------------------------------------------------------------------------

export const aboutPage = {
  eyebrow: "Sobre a Eletro Building",
  title: "Engenharia elétrica com responsabilidade do início ao fim",
  intro:
    "A Eletro Building é uma empresa de engenharia elétrica que atua nos segmentos industrial, comercial e residencial, levando soluções para a disponibilidade e a conservação das instalações elétricas dos nossos clientes. Também identificamos oportunidades de melhoria em processos produtivos e administrativos, sempre em conformidade com as normas técnicas e regulamentadoras vigentes.",
  mission: {
    title: "Missão",
    body: "Garantir que instalações elétricas, sistemas de segurança e energia solar operem com disponibilidade, segurança e conformidade normativa, em qualquer segmento atendido.",
  },
  vision: {
    title: "Visão",
    body: "Ser reconhecida como referência técnica em engenharia elétrica nos segmentos industrial, comercial e residencial, pela qualidade da execução e pela responsabilidade em cada entrega.",
  },
  values: {
    title: "Valores",
    items: [
      "Responsabilidade técnica em cada projeto",
      "Conformidade com normas e regulamentações",
      "Transparência com o cliente do orçamento à entrega",
      "Equipe própria e capacitada",
    ],
  },
  segments: [
    {
      title: "Industrial",
      body: "Instalações elétricas, manutenção e segurança do trabalho para plantas industriais que não podem conviver com parada não planejada.",
    },
    {
      title: "Comercial",
      body: "Projetos elétricos, segurança eletrônica e energia solar para lojas, escritórios e empreendimentos comerciais.",
    },
    {
      title: "Residencial",
      body: "Projeto elétrico, automação e segurança eletrônica para quem busca uma instalação residencial segura e bem documentada.",
    },
  ],
};

export const director = {
  eyebrow: "Direção Técnica",
  name: "[Nome do Diretor Técnico]",
  role: "Diretor Técnico — Engenheiro Eletricista",
  bio: [
    "À frente da direção técnica da Eletro Building está um engenheiro eletricista responsável por todos os projetos executados pela empresa, com registro ativo junto ao CREA.",
    "Sua atuação acompanha o projeto do início ao fim: da vistoria inicial e do dimensionamento de cargas até a emissão do laudo final e da ART de cada obra entregue.",
    "É essa presença técnica constante — e não apenas comercial — que sustenta o padrão de conformidade normativa (NR-10, NR-35 e ABNT) aplicado a todos os segmentos atendidos pela empresa: industrial, comercial e residencial.",
  ],
  note: "Campo de nome reservado para preenchimento pelo cliente — inclua o nome completo, registro no CREA e uma foto profissional do diretor responsável.",
};

// ---------------------------------------------------------------------------
// ARTIGOS
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// CONTATO
// ---------------------------------------------------------------------------

export const contactPage = {
  eyebrow: "Fale com a Eletro Building",
  title: "Tem um projeto elétrico? Vamos falar sobre a instalação",
  description:
    "Preencha o formulário com os dados do seu projeto. Nossa equipe analisa os requisitos e retorna com uma resposta técnica qualificada, sem compromisso.",
};

export const footerNav = {
  services: services.map((s) => ({ title: s.title, slug: s.slug })),
};
