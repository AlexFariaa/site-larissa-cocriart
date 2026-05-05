export interface ServiceDeliverable {
  id: string;
  title: string;
  description: string;
}

export interface ServiceStep {
  number: number;
  title: string;
  description: string;
}

export interface ServiceIdealProfile {
  id: string;
  title: string;
  description: string;
  icon: "target" | "spark" | "compass";
}

export interface ServiceExpectedResult {
  id: string;
  title: string;
  description: string;
  icon: "growth" | "clarity" | "consistency";
}

export interface ServiceFaq {
  id: string;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  descriptionLong?: string;
  idealFor: ServiceIdealProfile[];
  whatYouGet: ServiceDeliverable[];
  ctaMidline: string;
  process: ServiceStep[];
  expectedResults: ServiceExpectedResult[];
  faqs: ServiceFaq[];
  ctaFinalLine: string;
  whatsappMessage: string;
  /** Unique key used to render the matching inline SVG icon */
  iconKey: "social-media" | "content" | "identity" | "consulting";
}

export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "gestao-de-redes",
    title: "Gestão de Redes Sociais",
    subtitle: "Estratégia e execução com consciência",
    description:
      "Calendário editorial, stories, postagem e acompanhamento estratégico do seu Instagram.",
    descriptionLong:
      "Terceirize sua presença no Instagram com um calendário editorial alinhado à sua marca. Nós cuidamos da estratégia de conteúdo, roteiros, captions e engajamento — tudo com intenção e consciência.",
    idealFor: [
      {
        id: "gr-1",
        title: "Empreendedora Sem Tempo",
        description:
          "Você quer presença forte no Instagram, mas não consegue manter consistência sozinha.",
        icon: "target",
      },
      {
        id: "gr-2",
        title: "Negócio em Expansão",
        description:
          "Sua marca cresceu e precisa de estratégia profissional para sustentar autoridade.",
        icon: "spark",
      },
      {
        id: "gr-3",
        title: "Marca com Propósito",
        description:
          "Você quer comunicar valor real, sem virar refém de tendências vazias.",
        icon: "compass",
      },
    ],
    whatYouGet: [
      {
        id: "1",
        title: "Calendário Editorial",
        description: "Planejamento mensal de posts e stories com eixos temáticos",
      },
      {
        id: "2",
        title: "Criação de Conteúdo",
        description: "Roteiro, copy e legenda para cada publicação",
      },
      {
        id: "3",
        title: "Postagem e Monitoramento",
        description: "Publicação no horário ideal e acompanhamento de métricas",
      },
      {
        id: "4",
        title: "Gestão de Comunidade",
        description: "Resposta a comentários e engajamento estratégico",
      },
    ],
    ctaMidline:
      "Sua marca merece presença diária com intenção, estética e estratégia.",
    process: [
      {
        number: 1,
        title: "Diagnóstico",
        description:
          "Analisamos seu perfil atual, públicos e concorrência para entender sua posição",
      },
      {
        number: 2,
        title: "Estratégia",
        description:
          "Definimos eixos temáticos, tom de voz e calendário editorial alinhado aos seus objetivos",
      },
      {
        number: 3,
        title: "Execução",
        description:
          "Criamos conteúdo com qualidade, publicamos nos horários estratégicos e acompanhamos resultados",
      },
      {
        number: 4,
        title: "Otimização",
        description:
          "Iteramos com base em dados para melhorar engajamento e conversão mês a mês",
      },
    ],
    expectedResults: [
      {
        id: "gr-r1",
        title: "Presença Consistente",
        description:
          "Sua marca aparece com frequência e coerência, criando reconhecimento contínuo.",
        icon: "consistency",
      },
      {
        id: "gr-r2",
        title: "Conteúdo com Intenção",
        description:
          "Cada publicação passa a ter objetivo claro: atrair, nutrir ou converter.",
        icon: "clarity",
      },
      {
        id: "gr-r3",
        title: "Crescimento Orgânico",
        description:
          "Aumento gradual de alcance e engajamento com público realmente qualificado.",
        icon: "growth",
      },
    ],
    faqs: [
      {
        id: "gr-f1",
        question: "Vocês também criam o planejamento de stories?",
        answer:
          "Sim. O planejamento de stories entra com narrativa estratégica, frequência e objetivos por etapa da jornada do cliente.",
      },
      {
        id: "gr-f2",
        question: "Posso aprovar os conteúdos antes de publicar?",
        answer:
          "Pode e deve. Trabalhamos em cocriação: você aprova calendário, legendas e ajustes antes das publicações.",
      },
      {
        id: "gr-f3",
        question: "A gestão inclui resposta de comentários e directs?",
        answer:
          "Inclui gestão de comunidade conforme escopo contratado, com foco em proximidade e posicionamento de marca.",
      },
      {
        id: "gr-f4",
        question: "Quanto tempo leva para perceber resultados?",
        answer:
          "Em geral, os primeiros sinais aparecem entre 30 e 60 dias, com consolidação mais forte em 90 dias.",
      },
    ],
    ctaFinalLine:
      "Vamos estruturar sua presença digital com consciência e transformar seguidores em clientes.",
    whatsappMessage: "Olá! Vim pelo site e tenho interesse em Gestão de Redes Sociais.",
    iconKey: "social-media",
  },
  {
    id: "2",
    slug: "producao-de-conteudo",
    title: "Produção de Conteúdo",
    subtitle: "Visual e estratégia em perfeita harmonia",
    description:
      "Captação de foto e vídeo, edição e criação de conteúdo com intenção e estética.",
    descriptionLong:
      "Criamos conteúdo audiovisual com qualidade cinéfila — desde captação de fotos e vídeos até edição impecável. Cada frame é pensado para reforçar sua marca com intenção e consciência.",
    idealFor: [
      {
        id: "pc-1",
        title: "Marca com Estratégia Pronta",
        description:
          "Você já sabe o que comunicar, mas precisa elevar o nível visual com produção profissional.",
        icon: "target",
      },
      {
        id: "pc-2",
        title: "Equipe Interna Enxuta",
        description:
          "Seu time é pequeno e precisa de apoio para manter ritmo e qualidade criativa.",
        icon: "spark",
      },
      {
        id: "pc-3",
        title: "Negócio em Lançamento",
        description:
          "Você vai lançar oferta ou campanha e quer conteúdo com impacto e direção estética.",
        icon: "compass",
      },
    ],
    whatYouGet: [
      {
        id: "1",
        title: "Captação de Conteúdo",
        description: "Sessão de foto/vídeo com direção criativa profissional",
      },
      {
        id: "2",
        title: "Edição Audiovisual",
        description: "Tratamento de cor, som, animações e efeitos de qualidade",
      },
      {
        id: "3",
        title: "Design Gráfico",
        description: "Criação de artes, thumbnails e materiais complementares",
      },
      {
        id: "4",
        title: "Briefing Criativo",
        description: "Desenvolvimento de conceito e roteiro antes da produção",
      },
    ],
    ctaMidline:
      "Conteúdo bonito chama atenção. Conteúdo com intenção gera decisão.",
    process: [
      {
        number: 1,
        title: "Briefing",
        description:
          "Entendemos sua visão, objetivo da campanha e público-alvo para direcionar a criação",
      },
      {
        number: 2,
        title: "Pré-produção",
        description:
          "Roteiro, storyboard, definição de locações, elenco e visuais de referência",
      },
      {
        number: 3,
        title: "Produção",
        description:
          "Captação de fotos e vídeos com equipamento profissional e equipe criativa",
      },
      {
        number: 4,
        title: "Pós-produção",
        description: "Edição, cor, som, motion design e entrega em múltiplos formatos",
      },
    ],
    expectedResults: [
      {
        id: "pc-r1",
        title: "Estética Profissional",
        description:
          "Seu conteúdo passa a transmitir autoridade visual e percepção premium.",
        icon: "consistency",
      },
      {
        id: "pc-r2",
        title: "Narrativa de Marca",
        description:
          "Vídeos e peças deixam de ser soltos e passam a contar uma história coerente.",
        icon: "clarity",
      },
      {
        id: "pc-r3",
        title: "Melhor Performance",
        description:
          "Maior retenção e engajamento em conteúdos com roteiro, direção e edição estratégicos.",
        icon: "growth",
      },
    ],
    faqs: [
      {
        id: "pc-f1",
        question: "Vocês fazem apenas edição ou também captação?",
        answer:
          "Fazemos ambos. Podemos atuar na jornada completa: briefing, captação, edição e entrega final.",
      },
      {
        id: "pc-f2",
        question: "A produção inclui roteiro e copy?",
        answer:
          "Inclui sim. Trabalhamos roteiro e direcionamento criativo para o conteúdo já nascer estratégico.",
      },
      {
        id: "pc-f3",
        question: "Vocês entregam formatos para Reels, Stories e Feed?",
        answer:
          "Sim. Entregamos versões adaptadas para diferentes formatos e pontos de contato da campanha.",
      },
      {
        id: "pc-f4",
        question: "Qual a frequência ideal de produção?",
        answer:
          "Depende da meta e do funil, mas geralmente trabalhamos ciclos mensais para manter consistência.",
      },
    ],
    ctaFinalLine:
      "Se sua marca já tem visão, nós transformamos essa visão em conteúdo que move pessoas.",
    whatsappMessage:
      "Olá! Vim pelo site e tenho interesse em Produção de Conteúdo.",
    iconKey: "content",
  },
  {
    id: "3",
    slug: "identidade-visual",
    title: "Identidade Visual",
    subtitle: "Sua marca nasce com propósito e beleza",
    description:
      "Da mini identidade ao branding completo — presença visual que comunica quem você é.",
    descriptionLong:
      "Desenvolvemos identidades visuais completas — do logo à paleta de cores, tipografia e sistema de aplicações. Cada elemento conta a história única da sua marca com propósito e estética mística.",
    idealFor: [
      {
        id: "iv-1",
        title: "Negócio em Fase Inicial",
        description:
          "Você está começando e precisa de uma base visual sólida para nascer profissional.",
        icon: "target",
      },
      {
        id: "iv-2",
        title: "Marca em Reposicionamento",
        description:
          "Seu negócio evoluiu e a identidade atual já não representa sua nova fase.",
        icon: "spark",
      },
      {
        id: "iv-3",
        title: "Empreendedora Autoral",
        description:
          "Você quer uma marca com presença única, sensível e memorável.",
        icon: "compass",
      },
    ],
    whatYouGet: [
      {
        id: "1",
        title: "Logo e Marca",
        description: "Design do símbolo da marca com múltiplas versões de aplicação",
      },
      {
        id: "2",
        title: "Paleta de Cores",
        description: "Sistema cromático com significados e aplicações estratégicas",
      },
      {
        id: "3",
        title: "Tipografia",
        description: "Seleção e pairing de fontes que comunicam a personalidade da marca",
      },
      {
        id: "4",
        title: "Manual de Marca",
        description: "Guia completo de uso para manter consistência em todos os pontos de contato",
      },
    ],
    ctaMidline:
      "Quando a identidade está alinhada ao propósito, a marca se torna inesquecível.",
    process: [
      {
        number: 1,
        title: "Estratégia de Marca",
        description:
          "Pesquisa, entrevistas e definição de arquetipos, valores e posicionamento",
      },
      {
        number: 2,
        title: "Conceituação",
        description:
          "Sketches, moodboard e exploração visual antes do design final",
      },
      {
        number: 3,
        title: "Design",
        description:
          "Desenvolvimento do logo, paleta, tipografia e elementos da identidade",
      },
      {
        number: 4,
        title: "Aplicação",
        description:
          "Criação do manual da marca e mockups de aplicação (redes, site, material impresso)",
      },
    ],
    expectedResults: [
      {
        id: "iv-r1",
        title: "Posicionamento Claro",
        description:
          "Sua marca comunica essência e diferencial com mais precisão em cada ponto de contato.",
        icon: "clarity",
      },
      {
        id: "iv-r2",
        title: "Consistência Visual",
        description:
          "Aplicações em redes, site e materiais seguem um sistema único e reconhecível.",
        icon: "consistency",
      },
      {
        id: "iv-r3",
        title: "Percepção de Valor",
        description:
          "Uma identidade forte aumenta credibilidade e facilita conversão de clientes ideais.",
        icon: "growth",
      },
    ],
    faqs: [
      {
        id: "iv-f1",
        question: "Qual a diferença entre mini identidade e identidade completa?",
        answer:
          "A mini identidade cobre o essencial. A completa inclui sistema mais robusto de aplicações e diretrizes.",
      },
      {
        id: "iv-f2",
        question: "Recebo manual de marca ao final?",
        answer:
          "Sim. Entregamos guia de uso para manter consistência em cores, tipografia, proporções e aplicações.",
      },
      {
        id: "iv-f3",
        question: "A identidade já vem pronta para redes sociais?",
        answer:
          "Sim. Entregamos adaptações e direcionamento para uso em feed, stories, destaques e materiais digitais.",
      },
      {
        id: "iv-f4",
        question: "Posso pedir ajustes durante o processo?",
        answer:
          "Sim. O processo é colaborativo e inclui ciclos de refinamento para chegar em uma solução alinhada.",
      },
    ],
    ctaFinalLine:
      "Vamos materializar a alma da sua marca em uma identidade visual com força e verdade.",
    whatsappMessage: "Olá! Vim pelo site e tenho interesse em Identidade Visual.",
    iconKey: "identity",
  },
  {
    id: "4",
    slug: "consultoria",
    title: "Consultoria de Marketing",
    subtitle: "Estratégia alinhada ao propósito do seu negócio",
    description:
      "Estratégia com consciência. Diagnóstico, planejamento e orientação para marcas que querem despertar.",
    descriptionLong:
      "Diagnóstico e planejamento estratégico de marketing. Ajudamos você a entender sua marca, definir público e criar um plano executável — com ou sem nossa execução posterior.",
    idealFor: [
      {
        id: "co-1",
        title: "Empresária em Decisão",
        description:
          "Você sente que precisa organizar o marketing antes de investir em execução.",
        icon: "target",
      },
      {
        id: "co-2",
        title: "Equipe Interna Iniciante",
        description:
          "Seu time executa ações pontuais, mas falta direção estratégica clara.",
        icon: "spark",
      },
      {
        id: "co-3",
        title: "Marca em Transição",
        description:
          "Você mudou oferta, público ou posicionamento e precisa reposicionar o plano de marketing.",
        icon: "compass",
      },
    ],
    whatYouGet: [
      {
        id: "1",
        title: "Diagnóstico Completo",
        description: "Análise de marca, mercado, concorrência e público-alvo",
      },
      {
        id: "2",
        title: "Plano Estratégico",
        description: "Roadmap de 6–12 meses com objetivos, táticas e métricas",
      },
      {
        id: "3",
        title: "Orientação de Execução",
        description: "Suporte para implementar internamente ou preparar para contratação",
      },
      {
        id: "4",
        title: "Sessões de Mentoria",
        description: "Encontros de acompanhamento e ajustes conforme evolução",
      },
    ],
    ctaMidline:
      "Diagnóstico claro, estratégia viva e decisões com mais segurança.",
    process: [
      {
        number: 1,
        title: "Descoberta",
        description:
          "Entrevistas aprofundadas para entender visão, valores e desafios do seu negócio",
      },
      {
        number: 2,
        title: "Análise",
        description:
          "Pesquisa de mercado, mapeamento de concorrentes e identificação de oportunidades",
      },
      {
        number: 3,
        title: "Planejamento",
        description:
          "Criação do plano estratégico com eixos, táticas, timeline e indicadores",
      },
      {
        number: 4,
        title: "Implementação",
        description:
          "Você executa com nosso suporte ou contrata nossa equipe para a próxima fase",
      },
    ],
    expectedResults: [
      {
        id: "co-r1",
        title: "Direção Estratégica",
        description:
          "Você ganha clareza sobre prioridades, canais e ações de maior impacto para o negócio.",
        icon: "clarity",
      },
      {
        id: "co-r2",
        title: "Plano Executável",
        description:
          "Saímos do campo das ideias para um roadmap com etapas, metas e indicadores.",
        icon: "consistency",
      },
      {
        id: "co-r3",
        title: "Melhor Tomada de Decisão",
        description:
          "Você reduz desperdício de energia e investimento com escolhas mais conscientes.",
        icon: "growth",
      },
    ],
    faqs: [
      {
        id: "co-f1",
        question: "A consultoria serve para quem ainda não tem equipe?",
        answer:
          "Sim. A consultoria organiza fundamentos e define próximos passos mesmo para negócios solo.",
      },
      {
        id: "co-f2",
        question: "Vocês também executam depois da consultoria?",
        answer:
          "Sim, se fizer sentido para o seu momento. Também podemos apoiar sua equipe interna na execução.",
      },
      {
        id: "co-f3",
        question: "Quanto tempo dura o processo consultivo?",
        answer:
          "Depende da complexidade, mas geralmente trabalhamos ciclos de diagnóstico e planejamento em etapas semanais.",
      },
      {
        id: "co-f4",
        question: "Recebo material prático ao final?",
        answer:
          "Sim. Você recebe direcionamentos documentados com prioridades, plano de ação e próximos movimentos.",
      },
    ],
    ctaFinalLine:
      "Vamos desenhar uma estratégia de marketing que respeita sua essência e gera evolução real.",
    whatsappMessage: "Olá! Vim pelo site e tenho interesse em Consultoria de Marketing.",
    iconKey: "consulting",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServices(): Service[] {
  return SERVICES;
}
