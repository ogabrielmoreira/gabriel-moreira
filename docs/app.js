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
      'meta.desc': 'Product Designer Sênior. Uso LLMs no fluxo de design e desenho produtos de IA de ponta a ponta. Jornadas bancárias, onboarding e KYC, design systems em escala e prototipação em código. Seis anos desenhando produto, nove em tecnologia.',
      'nav.work': 'Projetos',
      'nav.expertise': 'Expertise',
      'nav.about': 'Sobre',
      'nav.contact': 'Contato',
      'cta.talk': 'Falar comigo',

      'hero.hi': 'Olá, prazer! Sou,',
      'hero.name': 'Gabriel Moreira',
      'hero.sub': '<strong>Product Designer Sênior</strong>. Uso LLMs no meu próprio fluxo de design e desenho produto de IA: fluxos de agente, estados de confiança e recuperação de erro. A outra metade do meu trabalho é produto financeiro regulado, jornadas bancárias, onboarding e KYC. Prototipo em código, então entrego POC funcionando em vez de tela estática.',
      'hero.note': '<span class="c" data-to="6">0</span> anos desenhando produto, <span class="c" data-to="9">0</span> em tecnologia.',
      'hero.cta.work': 'Ver projetos',
      'hero.cta.cv': 'Baixar currículo',
      'hero.cta.wa': 'WhatsApp',
      'hero.scroll': 'role para explorar',

      'companies.eyebrow': 'Trabalho de quem confia',
      'companies.title': 'Marcas e produtos onde atuei como Design Engineer, consultor e parceiro estratégico.',

      'about.eyebrow': 'Sobre',
      'about.title': 'Uso IA como ferramenta e desenho IA como produto.',
      'about.right': 'O que decide um produto de IA é como o modelo mostra confiança, o que ele recusa a fazer e quanto controle sobra para a pessoa do outro lado.',
      'about.tag': 'São Paulo, BR',
      'about.blk1.h': 'IA, Código & Produto',
      'about.blk1.p': 'Venho de Análise e Desenvolvimento de Sistemas, e isso mudou a forma como eu desenho: penso em estrutura e semântica antes de pensar em tela. Uso Claude Code, Codex e outras LLMs para montar POCs e MVPs em React em algumas horas. Assim eu testo o fluxo real e derrubo hipótese errada antes de ocupar o tempo da engenharia.',
      'about.blk2.h': 'Design Systems em Escala',
      'about.blk2.p': 'Liderei o GaYa, o design system unificado da Natura &Co (Natura, Avon e The Body Shop) para Web, iOS e Android. Entreguei mais de 150 componentes e montei fluxos com IA generativa para documentação e handoff, o que gerou um ROI aproximado de 144% para o negócio. Junto com o time de Branding, recalibrei o sistema de cores para o sistema passar em WCAG AA/AAA.',
      'about.blk3.h': 'Fintech, Neurociência & KYC',
      'about.blk3.p': 'Em produto regulado, uso princípios de neurociência e dados para tirar peso da jornada. Também levei essa lógica para clientes em projetos independentes, em cenários críticos de segurança. Em um projeto de KYC, reestruturei os fluxos de liveness e validação facial, e o atrito e o abandono no cadastro caíram bastante.',
      'about.fact1.l': 'Formação',
      'about.fact1.v': 'Análise e Desenvolvimento de Sistemas, Universidade Metodista de São Paulo',
      'about.fact2.l': 'Técnico',
      'about.fact2.v': 'Formação técnica em Tecnologia, Senac',
      'about.fact3.l': 'Certificações',
      'about.fact3.v': 'IBM · Universidade de Michigan',
      'about.fact4.l': 'Especialidade',
      'about.fact4.v': 'IA Generativa, LLMs, Design Systems & UX Engineering',

      'expertise.eyebrow': 'Expertise',
      'expertise.title': 'Como eu trabalho.',
      'expertise.right': 'No meu dia essas disciplinas se misturam: da ideia ao sistema, e do sistema ao produto em produção.',
      'x.1.t': 'Product Design com IA',
      'x.1.d': 'Pesquisa, fluxo, protótipo e validação de ponta a ponta, incluindo fluxo de agente e copiloto, estado de confiança e recuperação de erro.',
      'x.3.t': 'Integração de LLMs no Produto e no Processo',
      'x.3.d': 'LLMs no meu fluxo de design e dentro do produto, com resultado medido.',
      'x.4.t': 'Design Systems',
      'x.4.d': 'Token, componente, documentação e governança em escala corporativa.',
      'x.5.t': 'Design Tokens e Theming Multimarca',
      'x.5.d': 'Arquitetura de tokens em camadas e theming para múltiplas marcas.',
      'x.6.t': 'Jornadas Bancárias, Onboarding e KYC',
      'x.6.d': 'Abertura de conta, ativação e verificação de identidade, em fluxos onde o compliance define o que pode aparecer em cada tela.',
      'x.8.t': 'Prevenção a Fraude',
      'x.8.d': 'Fricção intencional e sinais de risco desenhados na jornada.',
      'x.9.t': 'Pesquisa com Usuários',
      'x.9.d': 'Pesquisa qualitativa, mapeamento de jornada e métricas que se sustentam no comportamento real.',
      'x.10.t': 'Acessibilidade (WCAG 2.2)',
      'x.10.d': 'Padrões AA/AAA aplicados em componentes e fluxos em produção.',
      'x.11.t': 'Prototipação em Código com Claude Code',
      'x.11.d': 'React, TypeScript, Storybook e Claude Code. POC e MVP funcionando em horas, tanto em empresa contratante quanto em freelance.',
      'x.12.t': 'Estratégia de Produto',
      'x.12.d': 'Roadmap, OKRs e priorização com base em impacto medido.',

      'results.eyebrow': 'Impacto',
      'results.title': 'Design que aparece no P&L.',
      'results.right': 'Resultados consolidados em projetos corporativos. Detalhes específicos sob NDA.',
      'r.roi.k': '01 / Acessibilidade',
      'r.roi.v': '−40%',
      'r.roi.l': 'bugs de acessibilidade no design system em produção',
      'r.save.k': '02 / Conversão',
      'r.save.v': '+18%',
      'r.save.l': 'conversão em jornada bancária redesenhada',
      'r.years.k': '03 / ROI',
      'r.years.v': '+144%',
      'r.years.l': 'ROI aproximado do design system multimarca',
      'r.eff.k': '04 / Eficiência',
      'r.eff.v': '+30%',
      'r.eff.l': 'eficiência entre design e desenvolvimento com IA generativa (Cursor, Claude Code)',
      'results.note': 'Resultados medidos em produtos de Bradesco, Banco BRB e Natura &Co.',

      'cases.eyebrow': 'Projetos selecionados',
      'cases.title': 'Casos onde design, engenharia e IA andaram juntos.',
      'cases.right': 'Documentação técnica e estudos completos sob solicitação.',

      'case.otto.cat': 'Produto de IA · Segurança · HMI',
      'case.otto.year': '2024, em curso',
      'case.otto.title': 'OTTO Vigilant. Copiloto de IA que previne fadiga e estresse ao volante.',
      'case.otto.body': 'Conceito independente de um sistema embarcado que monitora sinais de fadiga, estresse e desatenção em tempo real e responde com microinterações de áudio e visuais, para reduzir o risco operacional em frotas. Inclui paleta de alertas segura (WCAG 2.1) e um protótipo funcional em React, construído com Claude Code. Sem vínculo com a Volkswagen.',
      'case.otto.cta1': 'Medium',
      'case.otto.tag1': 'Fusão multimodal de sensores',
      'case.otto.tag2': 'Intervenção em tempo real',
      'case.otto.tag3': 'Paleta de alertas segura (WCAG 2.1)',
      'case.otto.tag4': 'POC funcional em React',
      'case.otto.tag5': 'Construído com Claude Code',

      'case.gaya.cat': 'Design System · Multimarca · IA no processo',
      'case.gaya.year': '2022 a 2024',
      'case.gaya.title': 'GaYa. O design system que unificou as marcas do Grupo Natura &Co.',
      'case.gaya.body': 'Liderei a construção do design system multimarca do Grupo Natura &Co, aplicado em e-commerce e na operação de consultoras. Tokens em três camadas, theming por marca, governança distribuída e WCAG 2.2 AA/AAA. Com Cursor e LLMs no fluxo (documentação, scaffolding de código e ícones), chegamos a 200+ tokens e 150 componentes, com 40% menos bugs de acessibilidade e ~144% de ROI.',
      'case.gaya.cta1': 'Storybook',
      'case.gaya.cta2': 'Documentação',
      'case.gaya.tag1': '~144% de ROI',
      'case.gaya.tag2': '-40% bugs de acessibilidade',
      'case.gaya.tag3': '200+ tokens',
      'case.gaya.tag4': '150 componentes',
      'case.gaya.tag5': 'LLMs no fluxo de design',
      'case.gaya.tag6': 'Tokens em três camadas',
      'case.gaya.tag7': 'Theming multimarca',
      'case.gaya.tag8': 'Governança distribuída',
      'case.gaya.tag9': 'WCAG 2.2 AA/AAA',
      'case.lumen.cat': 'Design System · Storybook · Projeto autoral',
      'case.lumen.year': '2025',
      'case.lumen.title': 'Lumen. Design system autoral, token-first, documentado em Storybook.',
      'case.lumen.body': 'Projeto próprio para mostrar como estruturo um design system do zero: tokens como base, componentes modulares documentados em Storybook e acessibilidade WCAG 2.2 desde o início. Usei Apple, IBM e Atlassian como referência de arquitetura. Dá para navegar pelo Storybook e inspecionar cada componente.',
      'case.lumen.cta1': 'Storybook',
      'case.lumen.cta2': 'Medium',
      'case.lumen.tag1': 'Token-first',
      'case.lumen.tag2': 'Arquitetura modular em Storybook',
      'case.lumen.tag3': 'Acessibilidade WCAG 2.2',
      'case.lumen.tag4': 'Referência a Apple, IBM e Atlassian',

      'case.vero.cat': 'KYC · Onboarding · Produto funcional',
      'case.vero.title': 'Vero ID. <span style="font-size: clamp(28px, 3.6vw, 44px); letter-spacing: -0.025em;">Verificação de identidade (KYC) que cada empresa usa com a própria marca.</span><br>',
      'case.vero.body': 'Um sistema white-label que mostra a jornada completa de KYC: a empresa envia um link, o cliente faz uma selfie com prova de vida e o analista recebe tudo para revisar. Funciona de verdade, com banco de dados e acesso por token enviado ao seu e-mail, então você pode testar os dois lados. Feito com React, Supabase e Cloudflare, com Claude Code.',
      'case.vero.tag1': 'KYC',
      'case.vero.tag2': 'Liveness',
      'case.vero.tag3': 'React',
      'case.vero.tag4': 'Cloudflare',
      'case.vero.tag5': 'Supabase',
      'case.vero.tag6': 'Claude Code',
      'case.vero.cta1': 'Testar a demo ao vivo',
      'case.vero.cta2': 'Ver design system',
      'case.kyc.cta1': 'Ver POC · MVP',
      'case.kyc.cat': 'Produto Regulado · Onboarding · KYC',
      'case.kyc.title': 'Consentimento de câmera em KYC. Explicar antes de pedir.',
      'case.kyc.body': 'Na prova de vida, dois toques decidem a jornada: o pedido de permissão da câmera. Mal preparados, eles encerram o fluxo ali mesmo. Redesenhei esse momento como conceito: a tela explica o motivo do acesso antes de o sistema pedir a permissão. Protótipo em React, feito com Claude Code.',
      'case.kyc.tag1': 'Permissão de câmera',
      'case.kyc.tag2': 'Consentimento',
      'case.kyc.tag3': 'Captura de documento',
      'case.kyc.tag4': 'Protótipo React',
      'case.kyc.tag5': 'Construído com Claude Code',

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
      'meta.desc': 'Senior Product Designer. I use LLMs inside the design workflow and design AI products end to end. Banking journeys, onboarding and KYC, design systems at scale and prototyping in code. Six years designing products, nine in tech.',
      'nav.work': 'Work',
      'nav.expertise': 'Expertise',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'cta.talk': 'Get in touch',

      'hero.hi': "Hi, nice to meet you. I'm",
      'hero.name': 'Gabriel Moreira',
      'hero.sub': '<strong>Senior Product Designer</strong>. I use LLMs inside my own design workflow and I design AI products: agent flows, confidence states and error recovery. The other half of my work is regulated financial product, banking journeys, onboarding and KYC. I prototype in code, so I hand over a working POC instead of a static screen.',
      'hero.note': '<span class="c" data-to="6">0</span> years designing products, <span class="c" data-to="9">0</span> in tech.',
      'hero.cta.work': 'See projects',
      'hero.cta.cv': 'Download CV',
      'hero.cta.wa': 'WhatsApp',
      'hero.scroll': 'scroll to explore',

      'companies.eyebrow': 'Trusted by',
      'companies.title': 'Brands and products where I worked as Design Engineer, consultant and strategic partner.',

      'about.eyebrow': 'About',
      'about.title': 'I use AI as a tool and design AI as a product.',
      'about.right': 'What decides an AI product is how the model shows confidence, what it refuses to do, and how much control the person on the other side keeps.',
      'about.tag': 'São Paulo, BR',
      'about.blk1.h': 'AI, Code & Product',
      'about.blk1.p': 'My background is in Systems Analysis and Development, and it changed how I design: I think about structure and semantics before I think about screens. I use Claude Code, Codex and other LLMs to build React POCs and MVPs in a few hours. That way I test the real flow and drop the wrong hypothesis before it takes up engineering time.',
      'about.blk2.h': 'Design Systems at Scale',
      'about.blk2.p': 'I led GaYa, the unified design system behind Natura &Co (Natura, Avon and The Body Shop), for Web, iOS and Android. I shipped more than 150 components and built generative-AI workflows for documentation and handoff, which generated an approximate 144% ROI for the business. With the Branding team, I recalibrated the color system so it would pass WCAG AA/AAA.',
      'about.blk3.h': 'Fintech, Neuroscience & KYC',
      'about.blk3.p': 'In regulated products, I use neuroscience principles and data to take weight off the journey. I brought that same logic to clients on independent projects, in critical security scenarios. On a KYC project, I restructured the liveness and facial validation flows, and both friction and signup drop-off fell considerably.',
      'about.fact1.l': 'Education',
      'about.fact1.v': 'Systems Analysis & Development, Universidade Metodista de São Paulo',
      'about.fact2.l': 'Technical',
      'about.fact2.v': 'Technical degree in Technology, Senac',
      'about.fact3.l': 'Certifications',
      'about.fact3.v': 'IBM · University of Michigan',
      'about.fact4.l': 'Focus',
      'about.fact4.v': 'Generative AI, LLMs, Design Systems & UX Engineering',

      'expertise.eyebrow': 'Expertise',
      'expertise.title': 'How I work.',
      'expertise.right': 'These disciplines are not separate in my week: from idea to system, and from system to product in production.',
      'x.1.t': 'Product Design with AI',
      'x.1.d': 'Research, flows, prototyping and end-to-end validation, including agent and copilot flows, confidence states and error recovery.',
      'x.3.t': 'LLM Integration in Product and Process',
      'x.3.d': 'LLMs in my design workflow and inside the product, with measured results.',
      'x.4.t': 'Design Systems',
      'x.4.d': 'Tokens, components, docs and governance at enterprise scale.',
      'x.5.t': 'Design Tokens & Multi-brand Theming',
      'x.5.d': 'Layered token architecture and theming across multiple brands.',
      'x.6.t': 'Banking Journeys, Onboarding & KYC',
      'x.6.d': 'Account opening, activation and identity verification, in flows where compliance defines what can appear on each screen.',
      'x.8.t': 'Fraud Prevention',
      'x.8.d': 'Intentional friction and risk signals designed into the journey.',
      'x.9.t': 'User Research',
      'x.9.d': 'Qualitative research, journey mapping and metrics that hold up against real behavior.',
      'x.10.t': 'Accessibility (WCAG 2.2)',
      'x.10.d': 'AA/AAA patterns applied to components and flows in production.',
      'x.11.t': 'Code Prototyping with Claude Code',
      'x.11.d': 'React, TypeScript, Storybook and Claude Code. Working POCs and MVPs in hours, on contract work and on freelance projects.',
      'x.12.t': 'Product Strategy',
      'x.12.d': 'Roadmap, OKRs and prioritization based on measured impact.',

      'results.eyebrow': 'Impact',
      'results.title': 'Design that shows up on the P&L.',
      'results.right': 'Consolidated outcomes from corporate projects. Specific details under NDA.',
      'r.roi.k': '01 / Accessibility',
      'r.roi.v': '−40%',
      'r.roi.l': 'accessibility bugs in the design system in production',
      'r.save.k': '02 / Conversion',
      'r.save.v': '+18%',
      'r.save.l': 'conversion in a redesigned banking journey',
      'r.years.k': '03 / ROI',
      'r.years.v': '+144%',
      'r.years.l': 'approximate ROI on the multi-brand design system',
      'r.eff.k': '04 / Efficiency',
      'r.eff.v': '+30%',
      'r.eff.l': 'efficiency between design and development with generative AI (Cursor, Claude Code)',
      'results.note': 'Results measured on products at Bradesco, Banco BRB and Natura &Co.',

      'cases.eyebrow': 'Selected work',
      'cases.title': 'Cases where design, engineering and AI walked together.',
      'cases.right': 'Full technical docs and case studies on request.',

      'case.otto.cat': 'AI Product · Safety · HMI',
      'case.otto.year': '2024, ongoing',
      'case.otto.title': 'OTTO Vigilant. An AI copilot that prevents fatigue and stress behind the wheel.',
      'case.otto.body': 'An independent concept for an on-vehicle system that monitors fatigue, stress and distraction signals in real time and responds with audio and visual micro-interactions, to reduce operational risk in fleets. It includes a safety-first alert palette (WCAG 2.1) and a functional React prototype, built with Claude Code. Not affiliated with Volkswagen.',
      'case.otto.cta1': 'Medium',
      'case.otto.tag1': 'Multimodal sensor fusion',
      'case.otto.tag2': 'Real-time intervention',
      'case.otto.tag3': 'Safety-first alert palette (WCAG 2.1)',
      'case.otto.tag4': 'Functional React POC',
      'case.otto.tag5': 'Built with Claude Code',

      'case.gaya.cat': 'Design System · Multi-brand · AI in the Process',
      'case.gaya.year': '2022 a 2024',
      'case.gaya.title': 'GaYa. The design system that unified the Natura &Co Group brands.',
      'case.gaya.body': 'I led the build of the Natura &Co Group multi-brand design system, applied across e-commerce and the consultant operation. Three-tier tokens, per-brand theming, distributed governance and WCAG 2.2 AA/AAA. With Cursor and LLMs in the workflow (documentation, code scaffolding and icons), we reached 200+ tokens and 150 components, with 40% fewer accessibility bugs and ~144% ROI.',
      'case.gaya.cta1': 'Storybook',
      'case.gaya.cta2': 'Docs',
      'case.gaya.tag1': '~144% ROI',
      'case.gaya.tag2': '-40% accessibility bugs',
      'case.gaya.tag3': '200+ tokens',
      'case.gaya.tag4': '150 components',
      'case.gaya.tag5': 'LLMs in the design workflow',
      'case.gaya.tag6': 'Three-tier tokens',
      'case.gaya.tag7': 'Multi-brand theming',
      'case.gaya.tag8': 'Distributed governance',
      'case.gaya.tag9': 'WCAG 2.2 AA/AAA',
      'case.lumen.cat': 'Design System · Storybook · Personal project',
      'case.lumen.year': '2025',
      'case.lumen.title': 'Lumen. A personal design system, token-first, documented in Storybook.',
      'case.lumen.body': 'My own project to show how I structure a design system from scratch: tokens as the foundation, modular components documented in Storybook and WCAG 2.2 accessibility from the start. I used Apple, IBM and Atlassian as architecture references. You can browse the Storybook and inspect each component.',
      'case.lumen.cta1': 'Storybook',
      'case.lumen.cta2': 'Medium',
      'case.lumen.tag1': 'Token-first',
      'case.lumen.tag2': 'Modular Storybook architecture',
      'case.lumen.tag3': 'WCAG 2.2 accessibility',
      'case.lumen.tag4': 'Referencing Apple, IBM and Atlassian',

      'case.vero.cat': 'KYC · Onboarding · Working product',
      'case.vero.title': 'Vero ID. <span style="font-size: clamp(28px, 3.6vw, 44px); letter-spacing: -0.025em;">Identity verification (KYC) each company runs under its own brand.</span><br>',
      'case.vero.body': 'A white-label system that shows the full KYC journey: the company sends a link, the customer takes a selfie with liveness detection, and the analyst gets everything to review. It really works, with a database and token access sent to your email, so you can test both sides. Built with React, Supabase and Cloudflare, with Claude Code.',
      'case.vero.tag1': 'KYC',
      'case.vero.tag2': 'Liveness',
      'case.vero.tag3': 'React',
      'case.vero.tag4': 'Cloudflare',
      'case.vero.tag5': 'Supabase',
      'case.vero.tag6': 'Claude Code',
      'case.vero.cta1': 'Try the live demo',
      'case.vero.cta2': 'View design system',
      'case.kyc.cta1': 'View POC · MVP',
      'case.kyc.cat': 'Regulated Product · Onboarding · KYC',
      'case.kyc.title': 'KYC camera consent. Explain before you ask.',
      'case.kyc.body': 'In liveness verification, two taps decide the journey: the camera permission request. Poorly prepared, they end the flow right there. I redesigned that moment as a concept: the screen explains why the access is needed before the system asks for permission. React prototype, built with Claude Code.',
      'case.kyc.tag1': 'Camera permission',
      'case.kyc.tag2': 'Consent',
      'case.kyc.tag3': 'Document capture',
      'case.kyc.tag4': 'React prototype',
      'case.kyc.tag5': 'Built with Claude Code',

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
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.alt = dict[key];
    });
    const t = document.querySelector('.lang-toggle');
    if (t) {
      t.dataset.lang = lang;
      t.querySelectorAll('button').forEach((b) => {
        b.classList.toggle('active', b.dataset.l === lang);
      });
    }
    try { localStorage.setItem('gm-lang', lang); } catch (e) {}
    countHeroNote();
  }

  function countHeroNote() {
    const nums = document.querySelectorAll('.hero-note .c');
    if (!nums.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nums.forEach((n) => { n.textContent = n.dataset.to; });
      return;
    }
    nums.forEach((n, i) => {
      const to = parseInt(n.dataset.to, 10), dur = 1100, delay = 320 + i * 160;
      const t0 = performance.now() + delay;
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min(Math.max((now - t0) / dur, 0), 1);
        n.textContent = Math.round(ease(t) * to);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function initLang() {
    let saved = 'pt';
    try { saved = localStorage.getItem('gm-lang') || 'pt'; } catch (e) {}
    applyLang(saved);
    // A troca de idioma e uma mudanca de estado: o texto sai e volta junto
    // com a pilula, em vez de trocar seco no meio da frase.
    const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let swapping = false;
    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      b.addEventListener('click', () => {
        const next = b.dataset.l;
        const t = document.querySelector('.lang-toggle');
        if (swapping || (t && t.dataset.lang === next)) return;
        if (reduce()) { applyLang(next); return; }
        swapping = true;
        document.body.classList.add('lang-swapping');
        setTimeout(() => {
          applyLang(next);
          document.body.classList.remove('lang-swapping');
          swapping = false;
        }, 170);
      });
    });
  }

  // ===== Hero: campo de gradiente ===================================
  // O campo desfoca conforme a pagina rola. O blur e quantizado em passos
  // de 0.5px para nao forcar um repaint a cada pixel de scroll.
  function initHeroField() {
    const bg = document.querySelector('.hero-bg');
    const hero = document.querySelector('.hero');
    if (!bg || !hero) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MAX_BLUR = 26;
    let last = -1, ticking = false, idle = 0;

    const apply = () => {
      const h = hero.offsetHeight || 1;
      const p = Math.min(Math.max(window.scrollY / h, 0), 1);
      const blur = reduce ? 0 : Math.round(p * MAX_BLUR * 2) / 2;
      const fade = +(1 - p * 0.5).toFixed(3);
      if (blur === last) { bg.style.setProperty('--hero-fade', fade); return; }
      last = blur;
      bg.style.setProperty('--hero-blur', blur + 'px');
      bg.style.setProperty('--hero-fade', fade);
    };

    const onScroll = () => {
      // promove a camada so enquanto o valor esta mudando
      bg.style.willChange = 'filter, opacity';
      clearTimeout(idle);
      idle = setTimeout(() => { bg.style.willChange = 'auto'; }, 220);
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { apply(); ticking = false; });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    apply();

    // Loop nao essencial: pausa quando o hero sai da tela.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((es) => {
        es.forEach((e) => bg.classList.toggle('is-idle', !e.isIntersecting));
      }, { threshold: 0 }).observe(hero);
    }

    // Blob que segue o cursor, com suavizacao. Só em ponteiro fino
    // (num toque nao existe hover) e fora de reduced motion.
    const dot = bg.querySelector('.hb-pointer');
    if (!dot || reduce || !window.matchMedia('(pointer: fine)').matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, alive = false;
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      dot.style.setProperty('--px', cx.toFixed(1) + 'px');
      dot.style.setProperty('--py', cy.toFixed(1) + 'px');
      if (Math.abs(tx - cx) > 0.6 || Math.abs(ty - cy) > 0.6) { raf = requestAnimationFrame(loop); }
      else { raf = 0; }
    };
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!alive) { alive = true; cx = tx; cy = ty; }
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
  }

  // ===== Hero: retrato com revelacao ================================
  // Mesmo principio do landonorris.com: o cursor deixa um rastro numa
  // textura pequena que se dissolve a cada quadro; onde o rastro ainda
  // esta vivo, a foto 2 aparece no lugar da foto 1, com borda organica e
  // um contorno amarelo. Mouse parado por 2s: um cursor virtual varre o
  // rosto em zigue-zague (desce, pausa, sobe, pausa). A cabeca acompanha
  // o mouse com uma leve inclinacao. WebGL puro, sem biblioteca; sem
  // WebGL ou com reduced-motion fica so a foto 1, estatica.
  function initHeroPortrait() {
    const box = document.querySelector('.hero-portrait');
    const canvas = box && box.querySelector('.hero-portrait-gl');
    const cleanImg = box && box.querySelector('.hero-portrait-clean');
    if (!canvas || !cleanImg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const CFG = {
      head: [0.50, 0.24],   // centro da cabeca no retrato (fracao de largura/altura)
      brush: 0.10,          // espessura do rastro (fracao da altura do retrato)
      decay: 0.975,         // quanto do rastro sobra a cada quadro (60fps)
      threshold: 0.28,      // onde a foto 2 corta
      outline: 1.6,         // espessura do contorno amarelo (px)
      tilt: 0.012,          // inclinacao da cabeca seguindo o mouse
      idleAfter: 2000,      // ms sem mexer o mouse ate o cursor virtual assumir
      accent: [251 / 255, 188 / 255, 4 / 255], // --yellow
    };
    const TRAIL_W = 192;

    const opts = { alpha: true, premultipliedAlpha: true, antialias: false, preserveDrawingBuffer: false };
    const gl = canvas.getContext('webgl2', opts) || canvas.getContext('webgl', opts);
    if (!gl) return;
    const isGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;

    // ---------- shaders ----------
    const VERT = 'attribute vec2 p;varying vec2 v;void main(){v=vec2(p.x*.5+.5,.5-p.y*.5);gl_Position=vec4(p,0.,1.);}';
    const NOISE = `
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float vnoise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);}`;
    // Rastro: le o quadro anterior com uma deriva organica e um leve blur,
    // aplica o decaimento e pinta uma capsula do ponto anterior ao atual.
    const SIM = `precision mediump float;
      uniform sampler2D uPrev;uniform vec2 uTexel,uA,uB;uniform float uAspect,uR,uStrength,uDecay,uFloor,uTime;
      ${NOISE}
      void main(){
        vec2 tc=gl_FragCoord.xy*uTexel;
        vec2 drift=(vec2(vnoise(tc*4.+uTime*.25),vnoise(tc*4.+17.-uTime*.25))-.5)*uTexel*2.4;
        vec2 uv=tc-drift;
        float c=texture2D(uPrev,uv).r*.5
          +(texture2D(uPrev,uv+vec2(uTexel.x,0.)).r+texture2D(uPrev,uv-vec2(uTexel.x,0.)).r
           +texture2D(uPrev,uv+vec2(0.,uTexel.y)).r+texture2D(uPrev,uv-vec2(0.,uTexel.y)).r)*.125;
        c=max(c*uDecay-uFloor,0.);
        vec2 q=vec2(tc.x*uAspect,tc.y),a=vec2(uA.x*uAspect,uA.y),b=vec2(uB.x*uAspect,uB.y),ab=b-a;
        float h=clamp(dot(q-a,ab)/max(dot(ab,ab),1e-6),0.,1.);
        float d=length(q-a-ab*h);
        c=max(c,uStrength*smoothstep(uR,uR*.2,d));
        gl_FragColor=vec4(c,0.,0.,1.);
      }`;
    // Composicao: foto 1 e foto 2 alinhadas; a 2 entra onde o rastro passa
    // do limiar (borda quebrada por ruido), com contorno amarelo e linhas
    // finas de varredura. A cabeca "vira" de leve para o cursor.
    const COMP = `precision mediump float;
      varying vec2 v;
      uniform sampler2D uClean,uReveal,uTrail;
      uniform vec2 uTilt,uHead,uRes;uniform vec3 uAccent;
      uniform float uAspect,uTime,uThreshold,uOutline,uTiltAmt,uDpr;
      ${NOISE}
      float field(vec2 p){
        float t=texture2D(uTrail,vec2(p.x,1.-p.y)).r;
        float n=vnoise(p*vec2(uAspect,1.)*9.+vec2(uTime*.12,-uTime*.08));
        return t*(.72+.56*n);
      }
      void main(){
        vec2 q=(v-uHead)*vec2(uAspect,1.);
        float fall=1.-smoothstep(0.,.6,length(q));
        vec2 uv=v-uTilt*uTiltAmt*fall;
        vec4 c1=texture2D(uClean,uv),c2=texture2D(uReveal,uv);
        // distancia ate a borda em pixels: o contorno fica com espessura
        // constante, mesmo quando o rastro esta se dissolvendo
        vec2 px=1.5/uRes;
        float e=field(v);
        float gx=field(v+vec2(px.x,0.))-field(v-vec2(px.x,0.));
        float gy=field(v+vec2(0.,px.y))-field(v-vec2(0.,px.y));
        float d=(e-uThreshold)/(length(vec2(gx,gy))/3.+1e-5);
        float m=clamp(d+.5,0.,1.);
        float w=uOutline*uDpr;
        float ring=clamp(d+w+.5,0.,1.)*(1.-m);
        c2.rgb*=1.-.07*step(.5,fract(gl_FragCoord.y/(3.*uDpr)));
        vec4 p1=vec4(c1.rgb*c1.a,c1.a),p2=vec4(c2.rgb*c2.a,c2.a);
        vec4 col=mix(p1,p2,m);
        float body=max(c1.a,c2.a);
        col=mix(col,vec4(uAccent*body,body),ring*body);
        gl_FragColor=col;
      }`;

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src); gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
      return sh;
    };
    const program = (frag) => {
      const pr = gl.createProgram();
      gl.attachShader(pr, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(pr, compile(gl.FRAGMENT_SHADER, frag));
      gl.bindAttribLocation(pr, 0, 'p');
      gl.linkProgram(pr);
      if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(pr));
      const u = {};
      const n = gl.getProgramParameter(pr, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; i++) { const name = gl.getActiveUniform(pr, i).name; u[name] = gl.getUniformLocation(pr, name); }
      return { pr, u };
    };
    let sim, comp;
    try { sim = program(SIM); comp = program(COMP); } catch (err) { return; }

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    // ---------- texturas ----------
    const tex = (w, h) => {
      const t = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      if (w) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      return t;
    };
    const imageTex = (img) => {
      const t = tex();
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      // WebGL2 gera mipmaps em textura nao-potencia-de-2: sem serrilhado ao reduzir
      if (isGL2) { gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); }
      return t;
    };

    const aspect = (cleanImg.width || 1436) / (cleanImg.height || 1600);
    const TRAIL_H = Math.round(TRAIL_W / aspect);
    const fbo = [0, 1].map(() => {
      const t = tex(TRAIL_W, TRAIL_H);
      const f = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, f);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
      gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
      return { t, f };
    });
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    let ping = 0;

    let cleanTex = null, revealTex = null;

    // ---------- estado ----------
    let dpr = 1, raf = 0, visible = true, lastT = 0, started = false;
    let lastMove = -1e9;                 // ultimo movimento real (mouse ou toque)
    const t0 = performance.now() + 2500 - CFG.idleAfter; // como no Lando: o idle comeca ~2.5s apos carregar
    let ptr = null, prevPtr = null;      // ponto atual/anterior do pincel (fracao, y para baixo)
    let tilt = [0, 0], tiltTarget = [0, 0];
    let idleStart = 0, wasIdle = false;

    const resize = () => {
      const r = box.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(r.width * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
    };

    const toUv = (x, y) => {
      const r = box.getBoundingClientRect();
      return [(x - r.left) / r.width, (y - r.top) / r.height];
    };
    const pointAt = (uv, now) => {
      lastMove = now;
      tiltTarget = [
        Math.max(-1, Math.min(1, (uv[0] - CFG.head[0]) * 2)),
        Math.max(-1, Math.min(1, (uv[1] - CFG.head[1]) * 2)),
      ];
      const inside = uv[0] > -0.1 && uv[0] < 1.1 && uv[1] > -0.1 && uv[1] < 1.1;
      ptr = inside ? uv : null;
    };

    // Cursor virtual do idle, mesma curva do landonorris.com:
    // desce em 2.5s fazendo dois zigue-zagues, pausa 1.5s, sobe em 2.5s, pausa 3s.
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const idlePoint = (ms) => {
      const T = ms / 1000 % 9.5;
      let px, py;
      if (T < 2.5) { py = T / 2.5; px = easeInOut(T / 2.5); }
      else if (T < 4) { py = 1; px = 1; }
      else if (T < 6.5) { py = 1 - (T - 4) / 2.5; px = 1 - easeInOut((T - 4) / 2.5); }
      else { py = 0; px = 0; }
      const nx = -Math.cos(px * Math.PI * 4) * 0.75;
      const ny = Math.cos(py * Math.PI) * 0.5;
      return [CFG.head[0] + nx * 0.28, CFG.head[1] + 0.06 - ny * 0.40];
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - (lastT || now)) / 1000, 0.05) || 1 / 60;
      lastT = now;

      // quem guia o pincel: o usuario, ou o cursor virtual depois de 2s parado
      const idle = now - Math.max(lastMove, t0) > CFG.idleAfter;
      if (idle) {
        if (!wasIdle) { idleStart = now; prevPtr = null; }
        ptr = idlePoint(now - idleStart);
        tiltTarget = [(ptr[0] - CFG.head[0]) * 0.6, (ptr[1] - CFG.head[1]) * 0.6];
      } else if (wasIdle) {
        prevPtr = null; // o mouse voltou: nao liga o rastro do cursor virtual ao mouse
      }
      wasIdle = idle;

      // forca do pincel vem da velocidade: parado nao revela nada
      let a = prevPtr || ptr, b = ptr, strength = 0, radius = CFG.brush;
      if (a && b) {
        const dx = (b[0] - a[0]) * aspect, dy = b[1] - a[1];
        const speed = Math.hypot(dx, dy) / dt;          // alturas do retrato por segundo
        if (speed > 0.02) {
          strength = Math.min(1, 0.45 + speed * 0.6);
          radius = CFG.brush * (0.85 + Math.min(speed, 1.5) * 0.25);
        }
      }
      prevPtr = ptr;

      tilt[0] += (tiltTarget[0] - tilt[0]) * 0.06;
      tilt[1] += (tiltTarget[1] - tilt[1]) * 0.06;

      // passo 1: rastro (ping-pong)
      const src = fbo[ping], dst = fbo[1 - ping];
      gl.bindFramebuffer(gl.FRAMEBUFFER, dst.f);
      gl.viewport(0, 0, TRAIL_W, TRAIL_H);
      gl.useProgram(sim.pr);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, src.t);
      gl.uniform1i(sim.u.uPrev, 0);
      gl.uniform2f(sim.u.uTexel, 1 / TRAIL_W, 1 / TRAIL_H);
      const A = a || [-9, -9], B = b || [-9, -9];
      gl.uniform2f(sim.u.uA, A[0], 1 - A[1]);
      gl.uniform2f(sim.u.uB, B[0], 1 - B[1]);
      gl.uniform1f(sim.u.uAspect, aspect);
      gl.uniform1f(sim.u.uR, radius);
      gl.uniform1f(sim.u.uStrength, strength);
      gl.uniform1f(sim.u.uDecay, Math.pow(CFG.decay, dt * 60));
      gl.uniform1f(sim.u.uFloor, 0.003 * dt * 60);
      gl.uniform1f(sim.u.uTime, now / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      ping = 1 - ping;

      // passo 2: composicao na tela
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(comp.pr);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, cleanTex);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, revealTex);
      gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, dst.t);
      gl.uniform1i(comp.u.uClean, 0);
      gl.uniform1i(comp.u.uReveal, 1);
      gl.uniform1i(comp.u.uTrail, 2);
      gl.uniform2f(comp.u.uTilt, tilt[0], tilt[1]);
      gl.uniform2f(comp.u.uHead, CFG.head[0], CFG.head[1]);
      gl.uniform2f(comp.u.uRes, canvas.width, canvas.height);
      gl.uniform3f(comp.u.uAccent, CFG.accent[0], CFG.accent[1], CFG.accent[2]);
      gl.uniform1f(comp.u.uAspect, aspect);
      gl.uniform1f(comp.u.uTime, now / 1000);
      gl.uniform1f(comp.u.uThreshold, CFG.threshold);
      gl.uniform1f(comp.u.uOutline, CFG.outline);
      gl.uniform1f(comp.u.uTiltAmt, CFG.tilt);
      gl.uniform1f(comp.u.uDpr, dpr);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      if (!started) { started = true; box.classList.add('is-gl'); }
    };

    const play = () => { if (!raf && visible && cleanTex && revealTex && !document.hidden) { lastT = 0; raf = requestAnimationFrame(frame); } };
    const pause = () => { cancelAnimationFrame(raf); raf = 0; };

    // ---------- entrada ----------
    // Mouse em qualquer ponto do hero: a cabeca acompanha; dentro do
    // retrato, o rastro pinta.
    const hero = box.closest('.hero') || box;
    hero.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      pointAt(toUv(e.clientX, e.clientY), performance.now());
    }, { passive: true });
    hero.addEventListener('pointerleave', () => { ptr = null; tiltTarget = [0, 0]; });
    // Toque: arrastar o dedo sobre o retrato pinta, sem travar a rolagem
    const onTouch = (e) => {
      const t = e.touches[0];
      if (t) pointAt(toUv(t.clientX, t.clientY), performance.now());
    };
    box.addEventListener('touchstart', (e) => { onTouch(e); prevPtr = null; }, { passive: true });
    box.addEventListener('touchmove', onTouch, { passive: true });
    box.addEventListener('touchend', () => { ptr = null; }, { passive: true });

    canvas.addEventListener('webglcontextlost', () => { pause(); box.classList.remove('is-gl'); });

    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(box);
    else window.addEventListener('resize', resize);
    resize();

    if ('IntersectionObserver' in window) {
      new IntersectionObserver((es) => {
        visible = es[0].isIntersecting;
        if (visible) play(); else pause();
      }).observe(box);
    }
    document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); else play(); });

    // ---------- carga ----------
    // A foto 2 so carrega em idle, para nao disputar banda com a foto 1.
    const loadImage = (src, fallback) => new Promise((res, rej) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => res(img);
      img.onerror = () => (fallback ? loadImage(fallback).then(res, rej) : rej());
      img.src = src;
    });
    const cleanReady = (cleanImg.complete && cleanImg.naturalWidth)
      ? Promise.resolve(cleanImg)
      : new Promise((res) => cleanImg.addEventListener('load', () => res(cleanImg), { once: true }));
    const start = () => {
      Promise.all([cleanReady, loadImage(canvas.dataset.reveal, canvas.dataset.revealFallback)])
        .then(([c, r]) => Promise.all([c.decode ? c.decode().catch(() => {}) : 0, r.decode ? r.decode().catch(() => {}) : 0]).then(() => [c, r]))
        .then(([c, r]) => {
          cleanTex = imageTex(c);
          revealTex = imageTex(r);
          play();
        })
        .catch(() => {}); // sem a foto 2, fica a foto 1 estatica
    };
    if ('requestIdleCallback' in window) requestIdleCallback(start, { timeout: 2000 });
    else setTimeout(start, 600);
  }

  // ===== Nav: secao atual ===========================================
  // O menu nao tinha estado ativo. A lozenge de vidro se move para a secao
  // em que o visitante esta, reaproveitando o mesmo material do hover.
  function initNavState() {
    const links = [...document.querySelectorAll('.nav a[href^="#"]')];
    if (!links.length) return;
    const map = new Map();
    links.forEach((a) => {
      const s = document.querySelector(a.getAttribute('href'));
      if (s) map.set(s, a);
    });
    if (!map.size) return;

    const setCurrent = (a) => {
      links.forEach((l) => l.classList.toggle('is-current', l === a));
    };

    if (!('IntersectionObserver' in window)) {
      // Sem IO: uma varredura direta no scroll, sem depender de rAF.
      const sync = () => {
        const line = window.innerHeight * 0.34;
        let found = null;
        map.forEach((a, s) => {
          const r = s.getBoundingClientRect();
          if (r.top <= line && r.bottom > line) found = a;
        });
        setCurrent(found);
      };
      window.addEventListener('scroll', sync, { passive: true });
      window.addEventListener('resize', sync);
      sync();
      return;
    }

    // rootMargin transforma o viewport numa linha fina a 34% da altura:
    // a secao que cruza essa linha e a secao atual.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setCurrent(map.get(e.target));
        else if (map.get(e.target).classList.contains('is-current')) setCurrent(null);
      });
    }, { rootMargin: '-34% 0px -66% 0px', threshold: 0 });
    map.forEach((a, s) => io.observe(s));
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
      const dial = el.closest('.dial');
      if (dial) {
        dial.style.setProperty('--v', dial.dataset.v || 0);
        if (dial.dataset.over) dial.style.setProperty('--o', dial.dataset.over);
      }
      const p = parse(el.textContent.trim());
      if (!p) return;
      const dur = 1500, t0 = performance.now();
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
    const stage = document.querySelector('.t-stage');
    if (!stage) return;
    const panels = [...stage.querySelectorAll('.tpanel')];
    const buttons = [...document.querySelectorAll('.tperson')];
    const cur = document.querySelector('.t-cur');
    let i = 0;
    const show = (n) => {
      const next = (n + panels.length) % panels.length;
      // De onde o painel entra: a direcao do movimento explica o controle usado.
      let dir = next > i ? 1 : -1;
      if (i === panels.length - 1 && next === 0) dir = 1;
      if (i === 0 && next === panels.length - 1) dir = -1;
      stage.style.setProperty('--dir', String(dir));
      i = next;
      panels.forEach((p, k) => {
        p.classList.toggle('is-active', k === i);
        p.setAttribute('aria-hidden', k === i ? 'false' : 'true');
      });
      buttons.forEach((b, k) => {
        b.classList.toggle('is-active', k === i);
        b.setAttribute('aria-pressed', k === i ? 'true' : 'false');
      });
      if (cur) cur.textContent = String(i + 1).padStart(2, '0');
    };
    buttons.forEach((b) => b.addEventListener('click', () => show(+b.dataset.t)));
    document.querySelector('.t-prev')?.addEventListener('click', () => show(i - 1));
    document.querySelector('.t-next')?.addEventListener('click', () => show(i + 1));
    show(0);
  }

  // ===== Section motion =============================================
  function initMotion() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.about-photo').forEach((el) => el.setAttribute('data-anim', 'zoom'));
    const targets = [
      ...document.querySelectorAll('[data-anim], .section-head, .site-footer, .case, .t-layout, .contact-cta, .eyebrow, .reveal, .reveal-stagger'),
    ];
    if (reduce) { targets.forEach((el) => el.classList.add('in')); return; }
    let pending = targets.filter((el) => !el.classList.contains('in'));
    const sweep = () => {
      if (!pending.length) return;
      const h = window.innerHeight;
      pending = pending.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > 0) { el.classList.add('in'); return false; }
        return true;
      });
    };

    // progress bar
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    // parallax on case artwork
    const layers = [...document.querySelectorAll('.case-cover')];
    let ticking = false;
    const frame = () => {
      sweep();
      const h = window.innerHeight;
      const max = document.documentElement.scrollHeight - h;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
      layers.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -120 || r.top > h + 120) return;
        const p = (r.top + r.height / 2 - h / 2) / h;
        el.style.transform = 'translate3d(0,' + (p * -22).toFixed(2) + 'px,0) scale(1.06)';
      });
      ticking = false;
    };
    const onScroll = () => { sweep(); if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    setTimeout(onScroll, 120);
    frame();
  }

  // ===== Init =======================================================
  document.addEventListener('DOMContentLoaded', () => {
    initLang();
    initHeader();
    initNavState();
    initHeroField();
    initHeroPortrait();
    initReveal();
    initMotion();
    initCountUp();
    initCardLight();
    initTestimonials();
  });
})();

/* Content protection
   Blocks right click, image drag, long-press save and copy/cut.
   Text can still be highlighted, but not copied. */
(function () {
  var stop = function (e) { e.preventDefault(); };

  ['contextmenu', 'dragstart', 'copy', 'cut'].forEach(function (type) {
    document.addEventListener(type, stop);
  });

  // Overwrite whatever lands on the clipboard, in case a copy slips through
  document.addEventListener('copy', function (e) {
    if (e.clipboardData) e.clipboardData.setData('text/plain', '');
  });

  // Long-press on images (mobile "Save to Photos" menu)
  document.addEventListener('touchstart', function (e) {
    var t = e.target;
    if (t && t.closest && t.closest('img, picture, video')) {
      t.addEventListener('touchend', stop, { once: true });
    }
  }, { passive: true });

  // Common shortcuts: copy, cut, save, view-source, print, select-all, devtools
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    var mod = e.ctrlKey || e.metaKey;
    if (
      (mod && ['c', 'x', 's', 'u', 'p', 'a'].indexOf(k) !== -1) ||
      e.key === 'F12' ||
      (mod && e.shiftKey && ['i', 'j', 'c'].indexOf(k) !== -1) ||
      (e.metaKey && e.altKey && ['i', 'j', 'u'].indexOf(k) !== -1)
    ) {
      e.preventDefault();
    }
  });
})();
