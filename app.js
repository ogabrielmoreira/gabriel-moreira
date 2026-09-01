/* Gabriel Moreira, Portfolio interactivity
   - language toggle (PT/EN)
   - scroll reveals
   - testimonial carousel
   - header scroll state
   - card hover light
*/

(function () {
  'use strict';

  // ===== i18n =======================================================
  const COPY = {
    pt: {
      'meta.title': 'Gabriel Moreira. Product Designer Sênior · IA e Produtos Financeiros',
      'meta.desc': 'Product Designer Sênior que integra IA ao fluxo de design com resultado medido, e desenha produtos de IA de ponta a ponta. Jornadas bancárias, onboarding e KYC. Design systems em escala e prototipação em código. Seis anos desenhando produto, nove em tecnologia.',
      'nav.work': 'Projetos',
      'nav.expertise': 'Expertise',
      'nav.about': 'Sobre',
      'nav.contact': 'Contato',
      'cta.talk': 'Falar comigo',

      'hero.hi': 'Olá, prazer.',
      'hero.name': 'Sou Gabriel Moreira',
      'hero.sub': '<strong>Product Designer Sênior</strong> especializado em IA aplicada ao produto e ao processo. Incorporo LLMs ao fluxo de design com resultado medido, 25% menos tempo de handoff em design system multimarca, e desenho produtos de IA: fluxos de agente, estados de confiança e recuperação de erro. Do outro lado, produto financeiro regulado: jornadas bancárias, onboarding e KYC. Prototipo em código e entrego POCs funcionais em horas.',
      'hero.note': 'Seis anos desenhando produto, nove em tecnologia.',
      'hero.cta.work': 'Ver projetos',
      'hero.cta.cv': 'Baixar currículo',
      'hero.cta.wa': 'WhatsApp',
      'hero.scroll': 'role para explorar',

      'companies.eyebrow': 'Trabalho de quem confia',
      'companies.title': 'Marcas e produtos onde atuei como Design Engineer, consultor e parceiro estratégico.',

      'about.eyebrow': 'Sobre',
      'about.title': 'Uso IA como ferramenta e desenho IA como produto.',
      'about.right': 'Desenhar produto de IA não é usar IA para desenhar. É decidir como o modelo mostra confiança, o que ele se recusa a fazer, e onde a pessoa continua no controle.',
      'about.tag': 'São Paulo, BR',
      'about.p1': '<strong>IA no fluxo, com resultado.</strong> Na Natura &Co incorporei LLMs ao processo de design do GaYa, documentação de componentes, scaffolding de código e geração de ícones, e o tempo de handoff caiu 25%. Não é IA como enfeite de portfólio: é IA dentro de um design system multimarca em produção, com o número medido.',
      'about.p2': '<strong>IA como matéria-prima do produto:</strong> fluxos de agente e copiloto, estados de incerteza e streaming, verificabilidade da resposta, recuperação de erro e os limites do que o sistema deve se recusar a fazer. Entregues como protótipos React funcionais, não como telas estáticas.',
      'about.p3': '<strong>Produto financeiro regulado.</strong> No Bradesco e no Banco BRB, jornadas centrais de banco e seguros: abertura e ativação de conta, informe de rendimentos, verificação de identidade e prevenção a fraude, onde a exigência de compliance molda o fluxo, e não apenas o texto.',
      'about.p4': '<strong>Design system em escala.</strong> Liderei o GaYa, sistema unificado de Natura, Avon e The Body Shop em Web, iOS e Android: mais de 200 componentes, arquitetura de tokens em três camadas, governança distribuída entre squads e cerca de US$ 2M em eficiência operacional.',
      'about.p5': 'Comecei em programação antes de aprender design visual, e trago essa disciplina para o produto, versionamento, testes, performance, sistemas que escalam. Prototipo em React e entrego POCs funcionais em horas, em vez de esperar uma sprint de engenharia para validar uma hipótese.',
      'about.fact1.l': 'Formação',
      'about.fact1.v': 'Análise e Desenvolvimento de Sistemas, Universidade Metodista de São Paulo',
      'about.fact2.l': 'Técnico',
      'about.fact2.v': 'Formação técnica em Tecnologia, Senac',
      'about.fact3.l': 'Certificações',
      'about.fact3.v': 'IBM · Universidade de Michigan',
      'about.fact4.l': 'Especialidade',
      'about.fact4.v': 'IA Generativa, LLMs, Design Systems & UX Engineering',

      'expertise.eyebrow': 'Expertise',
      'expertise.title': 'Dez frentes. Um sistema de pensamento.',
      'expertise.right': 'Cada disciplina abaixo é parte da mesma engrenagem: ideia → sistema → produto → resultado.',
      'x.1.t': 'Product Design com IA',
      'x.1.d': 'Pesquisa, fluxos, prototipação e validação end-to-end, incluindo fluxos de agente e copiloto, estados de confiança e recuperação de erro.',
      'x.3.t': 'Integração de LLMs no Produto e no Processo',
      'x.3.d': 'LLMs no fluxo de design e dentro do produto, com resultado medido.',
      'x.4.t': 'Design Systems',
      'x.4.d': 'Token, componente, documentação e governança em escala corporativa.',
      'x.5.t': 'Design Tokens e Theming Multimarca',
      'x.5.d': 'Arquitetura de tokens em camadas e theming para múltiplas marcas.',
      'x.6.t': 'Jornadas Bancárias, Onboarding e KYC',
      'x.6.d': 'Abertura de conta, ativação e verificação de identidade, onde o compliance molda o desenho, não só o texto.',
      'x.8.t': 'Prevenção a Fraude',
      'x.8.d': 'Fricção intencional e sinais de risco desenhados na jornada.',
      'x.9.t': 'Pesquisa com Usuários',
      'x.9.d': 'Pesquisa qualitativa, jornada e métricas que prevêem comportamento real.',
      'x.10.t': 'Acessibilidade (WCAG 2.2)',
      'x.10.d': 'Padrões AA/AAA aplicados em componentes e fluxos em produção.',
      'x.11.t': 'Front-end e Prototipação em Código',
      'x.11.d': 'React, TypeScript e Storybook, POCs funcionais em horas.',
      'x.12.t': 'Estratégia de Produto',
      'x.12.d': 'Roadmap, OKRs e priorização orientados por impacto, não por opinião.',

      'results.eyebrow': 'Impacto',
      'results.title': 'Design que aparece no P&L.',
      'results.right': 'Resultados consolidados em projetos corporativos. Detalhes específicos sob NDA.',
      'r.roi.k': '01 / IA no fluxo',
      'r.roi.v': '−25%',
      'r.roi.l': 'tempo de handoff com LLMs no fluxo de design',
      'r.save.k': '02 / Conversão',
      'r.save.v': '+18%',
      'r.save.l': 'conversão em jornada bancária redesenhada',
      'r.years.k': '03 / ROI',
      'r.years.v': '+144%',
      'r.years.l': 'ROI do design system multimarca',
      'results.note': 'Resultados medidos em produtos de Bradesco, Banco BRB e Natura &Co.',

      'cases.eyebrow': 'Projetos selecionados',
      'cases.title': 'Casos onde design, engenharia e IA andaram juntos.',
      'cases.right': 'Documentação técnica e estudos completos sob solicitação.',

      'case.otto.cat': 'Produto de IA · Segurança · HMI',
      'case.otto.year': '2024, em curso',
      'case.otto.title': 'OTTO Vigilant. Copiloto inteligente de prevenção de fadiga e estresse para motoristas.',
      'case.otto.body': 'Sistema de IA embarcado que monitora sinais de fadiga, stress e desatenção em tempo real, intervindo com microinterações de áudio e visuais para reduzir risco operacional em frotas. Conceito independente, sem vínculo com a Volkswagen.',
      'case.otto.cta1': 'Medium',
      'case.otto.tag1': 'Fusão multimodal de sensores',
      'case.otto.tag2': 'Intervenção em tempo real',
      'case.otto.tag3': 'Paleta de alertas segura (WCAG 2.1)',
      'case.otto.tag4': 'POC funcional em React',

      'case.gaya.cat': 'Design System · IA no Processo · Escala',
      'case.gaya.year': '2022 a 2024',
      'case.gaya.title': 'GaYa. Design System do Grupo Natura &Co.',
      'case.gaya.body': 'Co-construção de um design system multimarca para Natura, Avon e Casa &Co. Tokens, componentes, documentação, governança e acessibilidade aplicados em produtos de e-commerce e operação de consultoria. Incorporei LLMs ao processo de design, documentação de componentes, scaffolding de código e geração de ícones, e o tempo de handoff caiu 25%.',
      'case.gaya.cta1': 'Storybook',
      'case.gaya.cta2': 'Documentação',
      'case.gaya.tag1': 'LLMs no fluxo de design, 25% menos handoff',
      'case.gaya.tag2': 'Tokens em três camadas',
      'case.gaya.tag3': 'Theming multimarca',
      'case.gaya.tag4': 'Governança distribuída',
      'case.gaya.tag5': 'WCAG 2.2 AA/AAA',
      'case.gaya.tag6': '144% de ROI',

      'case.lumen.cat': 'Design System · Arquitetura · Open',
      'case.lumen.year': '2025',
      'case.lumen.title': 'Lumen Design System. Arquitetura Storybook inspirada em DS global.',
      'case.lumen.body': 'Design system autoral com arquitetura modular em Storybook, token-first, padrões de acessibilidade WCAG 2.2 e referência direta aos sistemas de design da Apple, IBM e Atlassian.',
      'case.lumen.cta1': 'Storybook',
      'case.lumen.cta2': 'Medium',
      'case.lumen.tag1': 'Token-first',
      'case.lumen.tag2': 'Arquitetura modular em Storybook',
      'case.lumen.tag3': 'Acessibilidade WCAG 2.2',
      'case.lumen.tag4': 'Referência a Apple, IBM e Atlassian',

      'case.grao.cat': 'Fintech · Onboarding · KYC',
      'case.grao.title': 'Grão Capital. <span style="font-size: clamp(28px, 3.6vw, 44px); letter-spacing: -0.025em;">Loyalty,</span> <span style="font-size: clamp(28px, 3.6vw, 44px); letter-spacing: -0.025em;">Onboarding e KYC para fintech do agronegócio.</span><br>',
      'case.grao.body': 'App de fidelidade para uma fintech de crédito rural: o produtor cadastra suas notas fiscais de venda (café, soja) e acumula pontos que troca por taxa de crédito menor, defensivos e benefícios dentro da cooperativa. Onboarding sem fricção com enriquecimento cadastral via CPF, validação KYC simulada, carteira de pontos separada do status e ranking regional por cooperativa, protótipo navegável construído em React, testado com Playwright.',
      'case.grao.tag6': 'Loyalty',
      'case.grao.cta1': 'Ver POC · MVP',
      'case.grao.tag1': 'Onboarding sem fricção',
      'case.grao.tag2': 'Validação KYC',
      'case.grao.tag3': 'Enriquecimento cadastral via CPF',
      'case.grao.tag4': 'Carteira de pontos',
      'case.grao.tag5': 'Protótipo React navegável',

      'case.kyc.cat': 'Produto Regulado · Onboarding · KYC',
      'case.kyc.title': 'Consentimento de câmera em KYC: explicar antes de pedir',
      'case.kyc.body': 'Redesenho conceitual de uma etapa de compliance de alta fricção: o momento em que o usuário concede acesso à câmera para a prova de vida. Dois toques que, mal preparados, podem encerrar a jornada e que, bem preparados, reduziram a recusa em ~58% em um projeto real.',
      'case.kyc.tag1': 'Permissão de câmera',
      'case.kyc.tag2': 'Consentimento',
      'case.kyc.tag3': 'Captura de documento',
      'case.kyc.tag4': 'Protótipo React',

      'cases.cta': 'Ver todos os projetos',

      't.eyebrow': 'Depoimentos',
      't.title': 'Pessoas que construíram coisas comigo.',
      't.right': 'Depoimentos reais serão adicionados conforme autorização das pessoas e empresas envolvidas.',
      't.placeholder.q': 'Depoimento será adicionado em breve, aguardando autorização final.',
      't.placeholder.r': 'Cargo · Empresa',

      'cv.eyebrow': 'Currículo',
      'cv.title': 'Versão completa, em PDF.',
      'cv.body': 'Histórico profissional detalhado, stack técnica, projetos e certificações em um único documento pronto para download.',
      'cv.cta': 'Baixar currículo completo',
      'cv.note': 'PDF · ~ atualizado mensalmente',

      'contact.cta': 'Vamos construir <span class="y">algo</span> juntos.',
      'contact.intro': 'Aberto para consultoria, projetos pontuais e oportunidades full-time onde design, engenharia e IA precisem caminhar lado a lado.',
      'contact.wa.label': 'WHATSAPP · DIRETO',
      'contact.wa.h': 'Conversar no WhatsApp',
      'contact.em.label': 'E-MAIL',
      'contact.social.label': 'SOCIAL',

      'foot.tag': 'Product Designer Sênior · IA Aplicada · Fintech · Design Systems · São Paulo, BR',
      'foot.rights': '© 2026 Gabriel Moreira. Todos os direitos reservados.',
    },
    en: {
      'meta.title': 'Gabriel Moreira. Senior Product Designer · AI & Financial Products',
      'meta.desc': 'Senior Product Designer who embeds AI into the design workflow with measured results, and designs AI products end to end. Banking journeys, onboarding and KYC. Design systems at scale and prototyping in code. Six years designing products, nine in tech.',
      'nav.work': 'Work',
      'nav.expertise': 'Expertise',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'cta.talk': 'Get in touch',

      'hero.hi': 'Hi, nice to meet you.',
      'hero.name': "I'm Gabriel Moreira",
      'hero.sub': '<strong>Senior Product Designer</strong> specialized in AI applied to both the product and the process. I embed LLMs into the design workflow with measured results, 25% less handoff time on a multi-brand design system, and design AI products: agent flows, confidence states and error recovery. On the other side, regulated financial products: banking journeys, onboarding and KYC. I prototype in code and ship functional POCs in hours.',
      'hero.note': 'Six years designing products, nine in tech.',
      'hero.cta.work': 'See projects',
      'hero.cta.cv': 'Download CV',
      'hero.cta.wa': 'WhatsApp',
      'hero.scroll': 'scroll to explore',

      'companies.eyebrow': 'Trusted by',
      'companies.title': 'Brands and products where I worked as Design Engineer, consultant and strategic partner.',

      'about.eyebrow': 'About',
      'about.title': 'I use AI as a tool and design AI as a product.',
      'about.right': "Designing an AI product isn't using AI to design. It's deciding how the model shows confidence, what it refuses to do, and where the person stays in control.",
      'about.tag': 'São Paulo, BR',
      'about.p1': "<strong>AI in the workflow, with results.</strong> At Natura &Co I embedded LLMs into the GaYa design process, component documentation, code scaffolding and icon generation, and handoff time dropped 25%. This isn't AI as portfolio decoration: it's AI inside a multi-brand design system in production, with the number measured.",
      'about.p2': '<strong>AI as product material:</strong> agent and copilot flows, uncertainty and streaming states, answer verifiability, error recovery, and the boundaries of what the system should refuse to do. Shipped as working React prototypes, not static mockups.',
      'about.p3': '<strong>Regulated financial products.</strong> At Bradesco and Banco BRB, core banking and insurance journeys: account opening and activation, income statements, identity verification and fraud prevention, where the compliance requirement shapes the flow, not just the copy.',
      'about.p4': '<strong>Design systems at scale.</strong> I led GaYa, the unified system behind Natura, Avon and The Body Shop across Web, iOS and Android: 200+ components, a three-tier token architecture, distributed governance across squads and around US$2M in operational efficiency.',
      'about.p5': 'I started in programming before I learned visual design, and I bring that discipline to product work, versioning, testing, performance, systems that scale. I prototype in React and ship functional POCs in hours instead of waiting on an engineering sprint to validate an idea.',
      'about.fact1.l': 'Education',
      'about.fact1.v': 'Systems Analysis & Development, Universidade Metodista de São Paulo',
      'about.fact2.l': 'Technical',
      'about.fact2.v': 'Technical degree in Technology, Senac',
      'about.fact3.l': 'Certifications',
      'about.fact3.v': 'IBM · University of Michigan',
      'about.fact4.l': 'Focus',
      'about.fact4.v': 'Generative AI, LLMs, Design Systems & UX Engineering',

      'expertise.eyebrow': 'Expertise',
      'expertise.title': 'Ten disciplines. One way of thinking.',
      'expertise.right': 'Every block below is part of the same machine: idea → system → product → outcome.',
      'x.1.t': 'Product Design with AI',
      'x.1.d': 'Research, flows, prototyping and end-to-end validation, including agent and copilot flows, confidence states and error recovery.',
      'x.3.t': 'LLM Integration in Product and Process',
      'x.3.d': 'LLMs in the design workflow and inside the product, with measured results.',
      'x.4.t': 'Design Systems',
      'x.4.d': 'Tokens, components, docs and governance at enterprise scale.',
      'x.5.t': 'Design Tokens & Multi-brand Theming',
      'x.5.d': 'Layered token architecture and theming across multiple brands.',
      'x.6.t': 'Banking Journeys, Onboarding & KYC',
      'x.6.d': 'Account opening, activation and identity verification, where compliance shapes the design, not just the copy.',
      'x.8.t': 'Fraud Prevention',
      'x.8.d': 'Intentional friction and risk signals designed into the journey.',
      'x.9.t': 'User Research',
      'x.9.d': 'Qualitative research, journey mapping and behavior-predicting metrics.',
      'x.10.t': 'Accessibility (WCAG 2.2)',
      'x.10.d': 'AA/AAA patterns applied to components and flows in production.',
      'x.11.t': 'Frontend & Prototyping in Code',
      'x.11.d': 'React, TypeScript and Storybook, functional POCs in hours.',
      'x.12.t': 'Product Strategy',
      'x.12.d': 'Roadmap, OKRs and prioritization driven by impact, not opinion.',

      'results.eyebrow': 'Impact',
      'results.title': 'Design that shows up on the P&L.',
      'results.right': 'Consolidated outcomes from corporate projects. Specific details under NDA.',
      'r.roi.k': '01 / AI in workflow',
      'r.roi.v': '−25%',
      'r.roi.l': 'handoff time with LLMs in the design workflow',
      'r.save.k': '02 / Conversion',
      'r.save.v': '+18%',
      'r.save.l': 'conversion in a redesigned banking journey',
      'r.years.k': '03 / ROI',
      'r.years.v': '+144%',
      'r.years.l': 'ROI on the multi-brand design system',
      'results.note': 'Results measured on products at Bradesco, Banco BRB and Natura &Co.',

      'cases.eyebrow': 'Selected work',
      'cases.title': 'Cases where design, engineering and AI walked together.',
      'cases.right': 'Full technical docs and case studies on request.',

      'case.otto.cat': 'AI Product · Safety · HMI',
      'case.otto.year': '2024, ongoing',
      'case.otto.title': 'OTTO Vigilant. Intelligent copilot for driver fatigue and stress prevention.',
      'case.otto.body': 'On-vehicle AI system that monitors fatigue, stress and distraction signals in real time, intervening with audio and visual micro-interactions to reduce operational risk in fleets. Independent concept, not affiliated with Volkswagen.',
      'case.otto.cta1': 'Medium',
      'case.otto.tag1': 'Multimodal sensor fusion',
      'case.otto.tag2': 'Real-time intervention',
      'case.otto.tag3': 'Safety-first alert palette (WCAG 2.1)',
      'case.otto.tag4': 'Functional React POC',

      'case.gaya.cat': 'Design System · AI in Process · Scale',
      'case.gaya.year': '2022 a 2024',
      'case.gaya.title': 'GaYa. Natura &Co. Design System.',
      'case.gaya.body': 'Co-creation of a multi-brand design system for Natura, Avon and Casa &Co. Tokens, components, documentation, governance and accessibility applied across e-commerce and consultancy operations. I embedded LLMs into the design process, component documentation, code scaffolding and icon generation, and handoff time dropped 25%.',
      'case.gaya.cta1': 'Storybook',
      'case.gaya.cta2': 'Docs',
      'case.gaya.tag1': 'LLMs in the design workflow, 25% less handoff',
      'case.gaya.tag2': 'Three-tier tokens',
      'case.gaya.tag3': 'Multi-brand theming',
      'case.gaya.tag4': 'Distributed governance',
      'case.gaya.tag5': 'WCAG 2.2 AA/AAA',
      'case.gaya.tag6': '144% ROI',

      'case.lumen.cat': 'Design System · Architecture · Open',
      'case.lumen.year': '2025',
      'case.lumen.title': 'Lumen Design System. Storybook architecture inspired by global DS.',
      'case.lumen.body': 'My own design system with modular Storybook architecture, token-first, WCAG 2.2 accessibility patterns and direct references to Apple, IBM and Atlassian design systems.',
      'case.lumen.cta1': 'Storybook',
      'case.lumen.cta2': 'Medium',
      'case.lumen.tag1': 'Token-first',
      'case.lumen.tag2': 'Modular Storybook architecture',
      'case.lumen.tag3': 'WCAG 2.2 accessibility',
      'case.lumen.tag4': 'Referencing Apple, IBM and Atlassian',

      'case.grao.cat': 'Fintech · Onboarding · KYC',
      'case.grao.title': 'Grão Capital. <span style="font-size: clamp(28px, 3.6vw, 44px); letter-spacing: -0.025em;">Loyalty,</span> <span style="font-size: clamp(28px, 3.6vw, 44px); letter-spacing: -0.025em;">Onboarding & KYC for an agribusiness fintech.</span><br>',
      'case.grao.body': 'Loyalty app for a rural credit fintech: producers register their sales invoices (coffee, soy) and earn points they redeem for lower credit rates, crop inputs and benefits within the cooperative. Frictionless onboarding with CPF-based data enrichment, simulated KYC validation, a points wallet separate from status and a regional ranking per cooperative, navigable prototype built in React, tested with Playwright.',
      'case.grao.tag6': 'Loyalty',
      'case.grao.cta1': 'View POC · MVP',
      'case.grao.tag1': 'Frictionless onboarding',
      'case.grao.tag2': 'KYC validation',
      'case.grao.tag3': 'CPF-based data enrichment',
      'case.grao.tag4': 'Points wallet',
      'case.grao.tag5': 'Navigable React prototype',

      'case.kyc.cat': 'Regulated Product · Onboarding · KYC',
      'case.kyc.title': 'KYC camera consent: explain before you ask',
      'case.kyc.body': 'Conceptual redesign of a high-friction compliance step: the moment the user grants camera access for liveness verification. Two taps that, poorly prepared, can end the journey and that, well prepared, cut denials by ~58% in a real project.',
      'case.kyc.tag1': 'Camera permission',
      'case.kyc.tag2': 'Consent',
      'case.kyc.tag3': 'Document capture',
      'case.kyc.tag4': 'React prototype',

      'cases.cta': 'See all projects',

      't.eyebrow': 'Testimonials',
      't.title': 'People who built things with me.',
      't.right': 'Real testimonials will be added as the people and companies involved approve them.',
      't.placeholder.q': 'Testimonial will be added soon, awaiting final approval.',
      't.placeholder.r': 'Role · Company',

      'cv.eyebrow': 'Resume',
      'cv.title': 'The full version, as a PDF.',
      'cv.body': 'Detailed professional history, technical stack, projects and certifications in a single document, ready to download.',
      'cv.cta': 'Download full CV',
      'cv.note': 'PDF · refreshed monthly',

      'contact.cta': 'Let\'s build <span class="y">something</span> together.',
      'contact.intro': 'Open to consulting, focused projects and full-time roles where design, engineering and AI need to walk side by side.',
      'contact.wa.label': 'WHATSAPP · DIRECT',
      'contact.wa.h': 'Chat on WhatsApp',
      'contact.em.label': 'EMAIL',
      'contact.social.label': 'SOCIAL',

      'foot.tag': 'Senior Product Designer · Applied AI · Fintech · Design Systems · São Paulo, BR',
      'foot.rights': '© 2026 Gabriel Moreira. All rights reserved.',
    },
  };

  function applyLang(lang) {
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-BR';
    const dict = COPY[lang];
    if (dict['meta.title']) document.title = dict['meta.title'];
    const md = document.querySelector('meta[name="description"]');
    if (md && dict['meta.desc']) md.setAttribute('content', dict['meta.desc']);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    const t = document.querySelector('.lang-toggle');
    if (t) {
      t.dataset.lang = lang;
      t.querySelectorAll('button').forEach((b) => {
        b.classList.toggle('active', b.dataset.l === lang);
      });
    }
    try { localStorage.setItem('gm-lang', lang); } catch (e) {}
  }

  function initLang() {
    let saved = 'pt';
    try { saved = localStorage.getItem('gm-lang') || 'pt'; } catch (e) {}
    applyLang(saved);
    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      b.addEventListener('click', () => applyLang(b.dataset.l));
    });
  }

  // ===== Header scroll state ========================================
  function initHeader() {
    const h = document.querySelector('.site-header');
    const onScroll = () => {
      h.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===== Reveal on scroll ===========================================
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));
  }

  // ===== Big-number count-up ========================================
  function initCountUp() {
    const els = document.querySelectorAll('.results .stat .big');
    if (!els.length) return;
    const parse = (txt) => {
      const m = txt.match(/^([^0-9]*)(\d+)(.*)$/);
      return m ? { prefix: m[1], target: parseInt(m[2], 10), suffix: m[3] } : null;
    };
    const animate = (el) => {
      const p = parse(el.textContent.trim());
      if (!p) return;
      const dur = 1400, t0 = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min((now - t0) / dur, 1);
        el.textContent = p.prefix + Math.round(ease(t) * p.target) + p.suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
  }

  // ===== Card mouse light ===========================================
  function initCardLight() {
    document.querySelectorAll('.xcard').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  // ===== Testimonials carousel ======================================
  function initTestimonials() {
    const track = document.querySelector('.t-track');
    if (!track) return;
    const prev = document.querySelector('.t-prev');
    const next = document.querySelector('.t-next');
    const scrollBy = () => Math.round(track.clientWidth * 0.6);
    prev?.addEventListener('click', () => track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: scrollBy(), behavior: 'smooth' }));
  }

  // ===== Init =======================================================
  document.addEventListener('DOMContentLoaded', () => {
    initLang();
    initHeader();
    initReveal();
    initCountUp();
    initCardLight();
    initTestimonials();
  });
})();
