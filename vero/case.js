/* Case Vero ID: idioma (EN/PT), celulares ao vivo, white-label e entrada das seções.
   O texto em inglês já vem no HTML e é guardado ao carregar; o dicionário abaixo cobre o português. */
(function () {
  'use strict';
  var PT = {
    'meta.title': 'Vero ID · Verificação de identidade white-label | Gabriel Moreira',
    'meta.desc': 'Case: Vero ID, uma plataforma white-label para enviar links de verificação de identidade com prova de vida (KYC), feita com React, Supabase e Cloudflare.',
    'x_sb': 'Storybook', 'x_port': 'Portfólio',
    'h1': 'Produto · KYC · 2026',
    'h2': 'Envie um link.<br>Confirme quem<br>é a pessoa.',
    'h3': 'Uma plataforma white-label de verificação de identidade com prova de vida. Cada empresa envia links com a própria marca, e o cliente se verifica no celular.',
    'cta1': 'Testar a demo ao vivo', 'cta2': 'Abrir o Storybook',
    'm1': 'Papel', 'm1v': 'Produto, UX/UI, design system e front-end',
    'm2': 'Escopo', 'm2v': 'Painel da empresa e fluxo mobile para o cliente',
    'm3': 'Contexto', 'm3v': 'Inspirado em um projeto que entreguei como serviço pela Gabriel Tech Design',
    'm4': 'Feito com', 'm4v': 'React, Supabase, Cloudflare e Claude Code',
    'note.tag': 'Sobre este case',
    'note.p': '<strong>Um projeto novo, inspirado em trabalho real.</strong> O Vero ID é um produto novo, inspirado em um projeto que entreguei como prestador de serviço, pela Gabriel Tech Design, para a Serasa Experian: uma atuação curta, num projeto específico (cerca de dois meses), redesenhando os fluxos de prova de vida e validação facial de um produto de KYC. Esse trabalho foi real, com cliente real e resultado real. O Vero ID em si não tem nenhuma ligação com a empresa: a marca é fictícia, os dados são simulados e todas as telas foram refeitas do zero. O que veio do original é só o ganho relativo do teste A/B (cerca de 58% menos recusas de câmera).',
    'j.e': 'Como funciona', 'j.h': 'Um link, três momentos',
    'j.l': 'A empresa envia um link, o cliente prova quem é no celular e o analista revisa o resultado.',
    'j1h': 'A empresa envia um link', 'j1p': 'Por WhatsApp, SMS, e-mail ou QR Code, um a um ou em lote por CSV. Os links expiram e podem ser reenviados ou cancelados.',
    'j1a': 'Link aberto', 'j1b': 'Enviado', 'j1c': 'Enviado para análise',
    'j2h': 'O cliente verifica no celular', 'j2p': 'Uma decisão por tela, com a marca da empresa: consentimento, câmera, selfie com prova de vida, documento e um formulário curto.',
    'j2a': 'Consentimento', 'j2b': 'Câmera', 'j2c': 'Selfie', 'j2d': 'Documento', 'j2e': 'Formulário',
    'j3h': 'O analista revisa', 'j3p': 'Uma fila ordenada por risco. Todo score vem com os motivos, e uma pessoa sempre pode contestá-lo.',
    'w.e': 'White-label', 'w.h': 'Cada empresa, com a sua marca',
    'w.l': 'O cliente vê a empresa, não o Vero ID. O Brand Kit transforma uma cor em uma escala completa e recusa combinações que falham no WCAG AA. Escolha uma empresa e veja o fluxo mudar.',
    'bl.h': 'Um sistema, qualquer cliente', 'bl.p': 'A empresa controla a camada de marca. Neutros e cores de risco são do sistema, então um score se lê igual em qualquer lugar.', 'bl.c': 'Contraste com branco',
    'k.e': 'Uma decisão de design', 'k.h': 'Explicar antes de pedir',
    'k.l': 'A permissão de câmera são dois toques que podem encerrar uma verificação. Por isso o fluxo gasta uma tela mostrando o que vai acontecer e qual botão tocar, logo antes do prompt do sistema. No projeto original, essa tela reduziu as recusas de câmera em cerca de 58%.',
    'b.e': 'Explore', 'b.h': 'Teste o trabalho',
    'x.dm.t': 'Demo ao vivo', 'x.dm.h': 'O produto inteiro', 'x.dm.p': 'Um app de verdade, com banco de dados. Explore o painel sem cadastro ou toque em “Simular onboarding” para passar pelo fluxo como o cliente.', 'x.dm.c': 'Testar a demo ao vivo',
    'x.sb.h': 'Design system', 'x.sb.p': 'A logo, os tokens, os componentes e as regras de white-label, com controles ao vivo.', 'x.sb.c': 'Abrir o Storybook',
    'end.h': 'Quer conversar sobre este projeto?', 'end.p': 'Posso te mostrar as decisões, o design system e como construí com IA.',
    'end.c1': 'Fale comigo', 'end.c2': 'Ver outros projetos',
    'end.l1': 'Vero ID · conceito · protótipo de demonstração, sem prova de vida certificada', 'end.l2': '© 2026 Gabriel Moreira'
  };
  var EN = {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) { EN[el.getAttribute('data-i18n')] = el.innerHTML; });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { EN[el.getAttribute('data-i18n-alt')] = el.alt; });
  EN['meta.title'] = document.title;
  EN['meta.desc'] = document.querySelector('meta[name="description"]').getAttribute('content');

  var current = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';
  var brandVx = null;

  function mountPhones() {
    document.querySelectorAll('[data-vx]').forEach(function (el) {
      var o = el.getAttribute('data-org'); var m = VX.mount(el, { screen: el.getAttribute('data-vx'), alert: el.hasAttribute('data-alert'), lang: current, org: o ? o.split('|') : null });
      if (el.id === 'bl-phone') brandVx = m;
    });
  }
  function lum(h) { var c = [1, 3, 5].map(function (i) { var v = parseInt(h.substr(i, 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  function ratio(h) { return (1.05) / (lum(h) + 0.05); }
  function applyBrand(btn) {
    var c = btn.dataset.c, dev = document.querySelector('#bl-phone .vx-dev');
    var on = document.querySelector('#bl-phone .vx-org'); if (on) { on.querySelector('span').textContent = btn.dataset.i; on.querySelector('b').textContent = btn.dataset.n; }
    if (dev) { dev.style.setProperty('--accent', c); dev.style.setProperty('--soft', c + '1f'); }
    document.getElementById('bl-ratio').textContent = ratio(c).toFixed(1) + ':1 · AA ✓';
    document.querySelectorAll('#bl-sw button').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
  }
  function applyLang(lang) {
    var dict = lang === 'pt' ? PT : EN;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.desc']);
    document.querySelectorAll('[data-i18n]').forEach(function (el) { var v = dict[el.getAttribute('data-i18n')]; if (v !== undefined) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { var v = dict[el.getAttribute('data-i18n-alt')]; if (v !== undefined) el.alt = v; });
    document.querySelectorAll('.lang-switch button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });
    document.querySelectorAll('a[data-lang-href]').forEach(function (a) { a.setAttribute('href', a.getAttribute('data-lang-href') + (lang === 'pt' ? '?lang=pt' : '')); });
    document.querySelectorAll('a[data-home]').forEach(function (a) {
      var hash = a.getAttribute('href').indexOf('#projects') > -1 ? '#projects' : '';
      a.setAttribute('href', '../' + (lang === 'pt' ? '?lang=pt' : '') + hash);
    });
    current = lang; mountPhones();
    var on = document.querySelector('#bl-sw button[aria-pressed="true"]'); if (on) applyBrand(on);
  }

  mountPhones();
  document.querySelectorAll('#bl-sw button').forEach(function (b) { b.addEventListener('click', function () { applyBrand(b); }); });
  applyBrand(document.querySelector('#bl-sw button[aria-pressed="true"]'));
  if (current !== 'en') applyLang(current);

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = b.dataset.l;
      if (next === current) return;
      try { history.replaceState(null, '', next === 'pt' ? '?lang=pt' : location.pathname); } catch (e) {}
      if (reduce) { applyLang(next); return; }
      document.body.classList.add('lang-swapping');
      setTimeout(function () { applyLang(next); document.body.classList.remove('lang-swapping'); }, 160);
    });
  });

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
