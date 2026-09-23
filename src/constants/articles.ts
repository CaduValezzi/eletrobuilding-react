export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string
  content: string[];
  image: string;
  imageAlt: string;
};

export const articles: Article[] = [
  {
    slug: "nr-10-seguranca-instalacoes-eletricas",
    image: "/images/transformer.webp",
    imageAlt: "Transformador de alta tensão em subestação de energia",
    title: "Como funciona a NR-10 e por que ela importa para sua empresa",
    excerpt:
      "Entenda o que a norma regulamentadora exige de instalações elétricas industriais e comerciais — e o que acontece quando ela é ignorada.",
    category: "Segurança do Trabalho",
    date: "2026-02-10",
    content: [
      "A NR-10 é a norma regulamentadora que trata de segurança em instalações e serviços com eletricidade. Ela se aplica a qualquer empresa que tenha instalações elétricas em operação, independentemente do porte ou do setor.",
      "Na prática, a norma exige que a empresa mantenha um prontuário de instalações elétricas atualizado, com documentação técnica, procedimentos de trabalho seguro e comprovação de treinamento das equipes que atuam próximo a painéis e circuitos energizados.",
      "Ignorar a NR-10 não é apenas um risco de multa em fiscalização — é sobretudo um risco à integridade física de quem trabalha na operação. Painéis sem sinalização adequada, quadros sem identificação e procedimentos informais de manutenção estão entre as não conformidades mais comuns encontradas em vistorias.",
      "Regularizar a instalação começa por um diagnóstico técnico: um laudo que aponte exatamente onde estão as não conformidades e o que precisa ser feito para corrigi-las. A partir daí, a adequação pode ser planejada por etapas, sem paralisar a operação.",
    ],
  },
  {
    slug: "energia-solar-on-grid-vale-a-pena",
    image: "/images/solar-panels.webp",
    imageAlt: "Painéis solares instalados em cobertura, com skyline urbano ao fundo",
    title: "Energia solar on-grid: vale a pena para o seu comércio?",
    excerpt:
      "Um panorama direto sobre como funciona um sistema fotovoltaico conectado à rede e em quanto tempo ele costuma se pagar.",
    category: "Energia Solar",
    date: "2026-02-24",
    content: [
      "Um sistema de energia solar on-grid é conectado diretamente à rede da concessionária: a energia gerada pelos painéis é usada no consumo do imóvel, e o excedente é injetado na rede, gerando créditos de energia que podem ser abatidos na conta seguinte.",
      "Para comércios com consumo relevante durante o dia — quando os painéis geram mais energia —, o retorno tende a ser mais rápido, já que boa parte da energia gerada é consumida no próprio horário de operação.",
      "O dimensionamento correto do sistema é o que faz a diferença entre um investimento que realmente reduz a conta de energia e um sistema superdimensionado, que gera mais crédito do que a empresa consegue usar. Por isso, o projeto deve partir do histórico real de consumo, não de uma estimativa genérica.",
      "Depois do projeto, o processo inclui a instalação física dos painéis e inversores e a homologação junto à concessionária — etapa que formaliza a conexão do sistema à rede e sem a qual a geração não pode ser faturada como crédito de energia.",
    ],
  },
  {
    slug: "manutencao-preventiva-x-corretiva",
    image: "/images/transformer.webp",
    imageAlt: "Transformador de alta tensão em subestação de energia",
    title: "Manutenção preventiva x corretiva: qual o impacto no seu orçamento",
    excerpt:
      "Por que esperar o problema acontecer costuma custar mais caro do que planejar a manutenção da instalação elétrica.",
    category: "Manutenção",
    date: "2026-03-05",
    content: [
      "A manutenção corretiva resolve um problema depois que ele já aconteceu — um disjuntor que desarma, um painel que superaquece, um circuito que falha durante a operação. Ela é necessária, mas normalmente vem acompanhada de um custo indireto maior: a parada não planejada.",
      "Já a manutenção preventiva atua antes da falha, por meio de inspeções periódicas, termografia em painéis e verificação de pontos de aquecimento, conexões e proteções. O objetivo é identificar um problema em formação antes que ele vire uma parada de fato.",
      "Em operações industriais e comerciais com baixa tolerância a interrupções, o custo de uma parada não planejada — em produção, atendimento ou faturamento — costuma superar em muito o investimento em um plano de manutenção preventiva bem estruturado.",
      "Um plano eficiente combina as duas abordagens: rotina preventiva programada, com relatórios técnicos de cada visita, e uma equipe pronta para atendimento corretivo ágil quando algo imprevisto acontece.",
    ],
  },
  {
    slug: "por-onde-comecar-projeto-cftv",
    image: "/images/eletronic-security.webp",
    imageAlt: "Câmeras de CFTV e equipamentos de segurança eletrônica sobre planta baixa",
    title: "Segurança eletrônica: por onde começar um projeto de CFTV",
    excerpt:
      "As primeiras perguntas que todo projeto de câmeras precisa responder antes da escolha de qualquer equipamento.",
    category: "Segurança Eletrônica",
    date: "2026-03-18",
    content: [
      "Antes de escolher marca ou modelo de câmera, um projeto de CFTV bem-feito começa com perguntas simples: quais são os pontos de maior risco no local? O que precisa ser monitorado em tempo real e o que só precisa ficar gravado para consulta posterior?",
      "Esse levantamento define aspectos técnicos importantes, como a necessidade de câmeras com visão noturna, cobertura de longo alcance ou reconhecimento facial, além do tempo de retenção de gravação exigido pela operação.",
      "A infraestrutura de rede também entra na conta: câmeras IP dependem de cabeamento estruturado ou rede Wi-Fi bem dimensionada, e o gravador (NVR/DVR) precisa de capacidade de armazenamento compatível com o número de câmeras e a qualidade de imagem escolhida.",
      "Por fim, vale considerar a integração com outros sistemas — alarme, controle de acesso e automação — para que o monitoramento não fique fragmentado em plataformas diferentes.",
    ],
  },
  {
    slug: "o-que-e-art-projeto-eletrico",
    image: "/images/electricity.webp",
    imageAlt: "Torres de transmissão de energia elétrica contra o céu",
    title: "O que é ART e por que todo projeto elétrico deveria ter uma",
    excerpt:
      "Entenda o que essa anotação garante ao cliente e por que a ausência dela é um sinal de alerta na contratação.",
    category: "Engenharia Elétrica",
    date: "2026-04-02",
    content: [
      "A Anotação de Responsabilidade Técnica (ART) é o documento emitido junto ao CREA que formaliza a responsabilidade de um engenheiro sobre um projeto ou uma execução técnica. Ela existe para que exista alguém, de fato, respondendo tecnicamente pelo que foi entregue.",
      "Em uma instalação elétrica, isso significa que o dimensionamento, os materiais especificados e a execução foram acompanhados por um profissional habilitado — e não apenas montados por conta própria, sem respaldo técnico.",
      "Para o cliente, a ART é também um documento de proteção: em caso de sinistro, perícia ou necessidade de comprovação junto à seguradora, é ela que mostra que a instalação seguiu um projeto formal, com responsável técnico identificado.",
      "Por isso, contratar um serviço elétrico sem ART é um risco que vai além do técnico: é abrir mão da garantia de que existe alguém respondendo pela instalação depois que a obra termina.",
    ],
  },
  {
    slug: "cabeamento-estruturado-infraestrutura-rede",
    image: "/images/eletronic-security.webp",
    imageAlt: "Cabeamento de rede e equipamentos sobre planta baixa de projeto",
    title: "Cabeamento estruturado: organizando a infraestrutura de rede da sua empresa",
    excerpt:
      "Por que uma rede bem cabeada evita boa parte dos problemas de lentidão e instabilidade no dia a dia da operação.",
    category: "Redes",
    date: "2026-04-15",
    content: [
      "Cabeamento estruturado é a organização física da rede de dados de um imóvel: cabos identificados, rotas planejadas, racks organizados e pontos certificados. É a base sobre a qual internet, telefonia, CFTV e automação vão funcionar.",
      "Quando essa infraestrutura não existe — ou foi montada de forma improvisada ao longo do tempo —, é comum ver quedas de conexão, lentidão intermitente e dificuldade para localizar a origem de um problema de rede.",
      "Um projeto de cabeamento estruturado planeja a categoria de cabo adequada a cada trecho (cat5e, cat6 ou fibra óptica), a distribuição dos pontos de rede e a organização do rack de telecomunicações, com identificação clara de cada cabo e patch panel.",
      "Além de resolver problemas de instabilidade, uma infraestrutura de rede bem estruturada facilita a expansão futura — seja para adicionar câmeras de CFTV, pontos de Wi-Fi corporativo ou novos postos de trabalho.",
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

