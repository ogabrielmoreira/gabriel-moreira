/* Gabriel Moreira — Portfolio interactivity
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
      'nav.work': 'Projetos',
      'nav.expertise': 'Expertise',
      'nav.about': 'Sobre',
      'nav.contact': 'Contato',
      'cta.talk': 'Falar comigo',

      'hero.hi': 'Olá, prazer.',
      'hero.name': 'Sou Gabriel Moreira',
      'hero.sub': '<strong>Design Engineer</strong> especializado em Inteligência Artificial, Product Design e construção de experiências digitais de alta performance.',
      'hero.note': 'Há mais de 9 anos desenvolvendo soluções digitais que unem design, engenharia, automação e estratégia de negócio.',
      'hero.cta.work': 'Ver projetos',
      'hero.cta.cv': 'Baixar currículo',
      'hero.cta.wa': 'WhatsApp',
      'hero.scroll': 'role para explorar',

      'companies.eyebrow': 'Trabalho de quem confia',
      'companies.title': 'Marcas e produtos onde atuei como Design Engineer, consultor e parceiro estratégico.',

      'about.eyebrow': 'Sobre',
      'about.title': 'Designer que pensa como engenheiro. Engenheiro que pensa como produto.',
      'about.right': 'Atuo no ponto exato onde design, código e IA convergem — onde uma decisão visual é também uma decisão de arquitetura.',
      'about.tag': 'São Paulo, BR · 9+ anos',
      'about.p1': 'Comecei em código. Aprendi a construir antes de aprender a pintar pixel. Quando descobri UX/UI, levei comigo a disciplina de quem escreve software de verdade — versionamento, testes, revisões, performance, sistemas escaláveis.',
      'about.p2': 'Hoje opero como <strong>Design Engineer</strong>: lidero design systems, prototipagem inteligente com LLMs, arquitetura front-end e estratégia de produto em projetos que precisam entregar resultado de negócio mensurável — não só telas bonitas.',
      'about.p3': 'Trabalhei em produtos de bancos, varejo cosmético global, indústria automotiva e tecnologia. E mantenho consultoria própria para times que querem unir IA, design e engenharia com responsabilidade.',
      'about.fact1.l': 'Formação',
      'about.fact1.v': 'Análise e Desenvolvimento de Sistemas — Universidade Metodista de São Paulo',
      'about.fact2.l': 'Técnico',
      'about.fact2.v': 'Formação técnica em Tecnologia — Senac',
      'about.fact3.l': 'Certificações',
      'about.fact3.v': 'IBM · Universidade de Michigan',
      'about.fact4.l': 'Especialidade',
      'about.fact4.v': 'IA Generativa, LLMs, Design Systems & UX Engineering',

      'expertise.eyebrow': 'Expertise',
      'expertise.title': 'Doze frentes. Um sistema de pensamento.',
      'expertise.right': 'Cada disciplina abaixo é parte da mesma engrenagem: ideia → sistema → produto → resultado.',
      'x.1.t': 'IA Generativa',
      'x.1.d': 'Aplicação prática de modelos generativos em produto, design e operação.',
      'x.2.t': 'LLM Engineering',
      'x.2.d': 'Arquitetura de prompts, RAG, agentes, avaliação e custo de tokens em produção.',
      'x.3.t': 'UX Engineering',
      'x.3.d': 'Implementação fiel de design system com performance e acessibilidade reais.',
      'x.4.t': 'Product Design',
      'x.4.d': 'Pesquisa, fluxos, prototipação e validação de produto end-to-end.',
      'x.5.t': 'Design Systems',
      'x.5.d': 'Token, componente, documentação e governança em escala corporativa.',
      'x.6.t': 'Front-end Architecture',
      'x.6.d': 'React, Next, TypeScript, Storybook e arquitetura modular escalável.',
      'x.7.t': 'Automação',
      'x.7.d': 'Pipelines, scripts e fluxos que eliminam trabalho manual repetitivo.',
      'x.8.t': 'Prototipação Inteligente',
      'x.8.d': 'Protótipos funcionais com IA para validar hipóteses em horas, não semanas.',
      'x.9.t': 'Sistemas Escaláveis',
      'x.9.d': 'Arquitetura preparada para crescer sem reescrita: do MVP ao enterprise.',
      'x.10.t': 'Experiência do Usuário',
      'x.10.d': 'Pesquisa qualitativa, jornada e métricas que prevêem comportamento real.',
      'x.11.t': 'Estratégia de Produto',
      'x.11.d': 'Roadmap, OKRs e priorização orientados por impacto, não por opinião.',
      'x.12.t': 'Performance Digital',
      'x.12.d': 'Core Web Vitals, bundle size, render path e otimização contínua.',

      'results.eyebrow': 'Impacto',
      'results.title': 'Design que aparece no P&L.',
      'results.right': 'Resultados consolidados em projetos corporativos. Detalhes específicos sob NDA.',
      'r.roi.k': '01 / ROI',
      'r.roi.v': '+144%',
      'r.roi.l': 'ROI gerado em case corporativo com integração entre design system, IA e operação.',
      'r.save.k': '02 / Economia',
      'r.save.v': '~US$ 2M',
      'r.save.l': 'Economia operacional acumulada em projeto global de design + automação.',
      'r.years.k': '03 / Experiência',
      'r.years.v': '9+',
      'r.years.l': 'Anos entregando produtos digitais que unem engenharia, design e estratégia.',
      'results.note': 'Métricas reais de projetos sob NDA. Cases detalhados disponíveis em conversa.',

      'cases.eyebrow': 'Projetos selecionados',
      'cases.title': 'Casos onde design, engenharia e IA andaram juntos.',
      'cases.right': 'Recorte de 3 projetos. Documentação técnica e estudos completos sob solicitação.',

      'case.otto.cat': 'IA · Mobility · Safety',
      'case.otto.year': '2024 — em curso',
      'case.otto.title': 'OTTO Vigilant — Copiloto inteligente de prevenção de fadiga e estresse para motoristas.',
      'case.otto.body': 'Sistema de IA embarcado que monitora sinais de fadiga, stress e desatenção em tempo real, intervindo com microinterações de áudio e visuais para reduzir risco operacional em frotas.',
      'case.otto.cta1': 'Medium',

      'case.gaya.cat': 'Design System · Cosmetics · Global',
      'case.gaya.year': '2022 — 2024',
      'case.gaya.title': 'GaYa — Design System do Grupo Natura &Co.',
      'case.gaya.body': 'Co-construção de um design system multimarca para Natura, Avon e Casa &Co. Tokens, componentes, documentação, governança e acessibilidade aplicados em produtos de e-commerce e operação de consultoria.',
      'case.gaya.cta1': 'Storybook',
      'case.gaya.cta2': 'Documentação',

      'case.lumen.cat': 'Design System · Architecture · Open',
      'case.lumen.year': '2025',
      'case.lumen.title': 'Lumen Design System — Arquitetura Storybook inspirada em DS global.',
      'case.lumen.body': 'Design system autoral com arquitetura modular em Storybook, token-first, padrões de acessibilidade WCAG 2.2 e referência direta aos sistemas de design da Apple, IBM e Atlassian.',
      'case.lumen.cta1': 'Storybook',
      'case.lumen.cta2': 'Medium',

      'cases.cta': 'Ver todos os projetos',

      't.eyebrow': 'Depoimentos',
      't.title': 'Pessoas que construíram coisas comigo.',
      't.right': 'Depoimentos reais serão adicionados conforme autorização das pessoas e empresas envolvidas.',
      't.placeholder.q': 'Depoimento será adicionado em breve — aguardando autorização final.',
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

      'foot.tag': 'Design Engineer · IA · Product · São Paulo, BR',
      'foot.rights': '© 2026 Gabriel Moreira. Todos os direitos reservados.',
    },
    en: {
      'nav.work': 'Work',
      'nav.expertise': 'Expertise',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'cta.talk': 'Get in touch',

      'hero.hi': 'Hi, nice to meet you.',
      'hero.name': "I'm Gabriel Moreira",
      'hero.sub': '<strong>Design Engineer</strong> focused on Artificial Intelligence, Product Design and high-performance digital experiences.',
      'hero.note': '9+ years building digital products at the intersection of design, engineering, automation and business strategy.',
      'hero.cta.work': 'See projects',
      'hero.cta.cv': 'Download CV',
      'hero.cta.wa': 'WhatsApp',
      'hero.scroll': 'scroll to explore',

      'companies.eyebrow': 'Trusted by',
      'companies.title': 'Brands and products where I worked as Design Engineer, consultant and strategic partner.',

      'about.eyebrow': 'About',
      'about.title': 'A designer who thinks like an engineer. An engineer who thinks like product.',
      'about.right': 'I work at the exact point where design, code and AI converge — where a visual decision is also an architecture decision.',
      'about.tag': 'São Paulo, BR · 9+ years',
      'about.p1': 'I started in code. I learned to build before I learned to paint pixels. When I moved into UX/UI I brought with me the discipline of someone who ships real software — versioning, testing, reviews, performance, scalable systems.',
      'about.p2': 'Today I operate as a <strong>Design Engineer</strong>: I lead design systems, intelligent prototyping with LLMs, front-end architecture and product strategy in projects that need to ship measurable business outcomes — not just pretty screens.',
      'about.p3': 'I have shipped product for banks, global cosmetics, automotive and tech. And I run my own consultancy for teams that want to bring AI, design and engineering together — responsibly.',
      'about.fact1.l': 'Education',
      'about.fact1.v': 'Systems Analysis & Development — Universidade Metodista de São Paulo',
      'about.fact2.l': 'Technical',
      'about.fact2.v': 'Technical degree in Technology — Senac',
      'about.fact3.l': 'Certifications',
      'about.fact3.v': 'IBM · University of Michigan',
      'about.fact4.l': 'Focus',
      'about.fact4.v': 'Generative AI, LLMs, Design Systems & UX Engineering',

      'expertise.eyebrow': 'Expertise',
      'expertise.title': 'Twelve disciplines. One way of thinking.',
      'expertise.right': 'Every block below is part of the same machine: idea → system → product → outcome.',
      'x.1.t': 'Generative AI',
      'x.1.d': 'Applying generative models in product, design and operations — pragmatically.',
      'x.2.t': 'LLM Engineering',
      'x.2.d': 'Prompt architecture, RAG, agents, evaluation and token cost in production.',
      'x.3.t': 'UX Engineering',
      'x.3.d': 'Faithful implementation of design systems with real performance and a11y.',
      'x.4.t': 'Product Design',
      'x.4.d': 'Research, flows, prototyping and end-to-end product validation.',
      'x.5.t': 'Design Systems',
      'x.5.d': 'Tokens, components, docs and governance at enterprise scale.',
      'x.6.t': 'Front-end Architecture',
      'x.6.d': 'React, Next, TypeScript, Storybook and modular, scalable architecture.',
      'x.7.t': 'Automation',
      'x.7.d': 'Pipelines, scripts and flows that kill repetitive manual work.',
      'x.8.t': 'Intelligent Prototyping',
      'x.8.d': 'AI-assisted functional prototypes that validate hypotheses in hours.',
      'x.9.t': 'Scalable Systems',
      'x.9.d': 'Architecture built to grow without rewrites: MVP to enterprise.',
      'x.10.t': 'User Experience',
      'x.10.d': 'Qualitative research, journey mapping and behavior-predicting metrics.',
      'x.11.t': 'Product Strategy',
      'x.11.d': 'Roadmap, OKRs and prioritization driven by impact, not opinion.',
      'x.12.t': 'Digital Performance',
      'x.12.d': 'Core Web Vitals, bundle size, render path and continuous optimization.',

      'results.eyebrow': 'Impact',
      'results.title': 'Design that shows up on the P&L.',
      'results.right': 'Consolidated outcomes from corporate projects. Specific details under NDA.',
      'r.roi.k': '01 / ROI',
      'r.roi.v': '+144%',
      'r.roi.l': 'ROI generated in a corporate case combining design system, AI and operations.',
      'r.save.k': '02 / Savings',
      'r.save.v': '~US$ 2M',
      'r.save.l': 'Operational savings across a global design + automation project.',
      'r.years.k': '03 / Experience',
      'r.years.v': '9+',
      'r.years.l': 'Years shipping digital products that bring engineering, design and strategy together.',
      'results.note': 'Real metrics from projects under NDA. Detailed cases available on request.',

      'cases.eyebrow': 'Selected work',
      'cases.title': 'Cases where design, engineering and AI walked together.',
      'cases.right': 'Three projects, cut short. Full technical docs and case studies on request.',

      'case.otto.cat': 'AI · Mobility · Safety',
      'case.otto.year': '2024 — ongoing',
      'case.otto.title': 'OTTO Vigilant — Intelligent copilot for driver fatigue and stress prevention.',
      'case.otto.body': 'On-vehicle AI system that monitors fatigue, stress and distraction signals in real time, intervening with audio and visual micro-interactions to reduce operational risk in fleets.',
      'case.otto.cta1': 'Medium',

      'case.gaya.cat': 'Design System · Cosmetics · Global',
      'case.gaya.year': '2022 — 2024',
      'case.gaya.title': 'GaYa — Natura &Co. Design System.',
      'case.gaya.body': 'Co-creation of a multi-brand design system for Natura, Avon and Casa &Co. Tokens, components, documentation, governance and accessibility applied across e-commerce and consultancy operations.',
      'case.gaya.cta1': 'Storybook',
      'case.gaya.cta2': 'Docs',

      'case.lumen.cat': 'Design System · Architecture · Open',
      'case.lumen.year': '2025',
      'case.lumen.title': 'Lumen Design System — Storybook architecture inspired by global DS.',
      'case.lumen.body': 'My own design system with modular Storybook architecture, token-first, WCAG 2.2 accessibility patterns and direct references to Apple, IBM and Atlassian design systems.',
      'case.lumen.cta1': 'Storybook',
      'case.lumen.cta2': 'Medium',

      'cases.cta': 'See all projects',

      't.eyebrow': 'Testimonials',
      't.title': 'People who built things with me.',
      't.right': 'Real testimonials will be added as the people and companies involved approve them.',
      't.placeholder.q': 'Testimonial will be added soon — awaiting final approval.',
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

      'foot.tag': 'Design Engineer · AI · Product · São Paulo, BR',
      'foot.rights': '© 2026 Gabriel Moreira. All rights reserved.',
    },
  };

  function applyLang(lang) {
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-BR';
    const dict = COPY[lang];
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
    initCardLight();
    initTestimonials();
  });
})();
