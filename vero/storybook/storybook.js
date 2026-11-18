/* Storybook Vero ID: explorador do design system feito à mão em HTML/CSS/JS
   (não é a ferramenta Storybook). Fonte: especificação Vero ID Design System v0.1.
   Cada história descreve uma peça do sistema; o celular do fluxo vem de ../ui/vero.js. */
(function () {
  'use strict';
  var lang = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';

  var UI = {
    en: { search: 'Find stories', controls: 'Controls', usage: 'Usage', specs: 'Tokens', light: 'Light', dark: 'Dark', case: 'Case study', proto: 'Prototype',
      intro: 'Introduction', brand: 'Brand', foundations: 'Foundations', components: 'Components', patterns: 'Patterns', flows: 'Flows',
      none: 'This story has no controls.', nousage: 'No snippet for this story. Read the rules below.', rules: 'Rules', snippet: 'Reference markup', copy: 'Copy', copied: 'Copied', noresults: 'No stories found.',
      hintDark: 'Dark mode exists only in the admin dashboard.', hintLight: 'Subject flow: light only (face capture needs a bright screen).', hintDoc: 'Click a swatch or a code block to copy.',
      noticeTag: 'Independent prototype', notice: 'Independent portfolio prototype by Gabriel Moreira. All data shown is fictional and nothing here is a certified liveness product. The original specification lives at ogabrielmoreira.github.io/veroid_designsystem; this Storybook rebuilds it in HTML and CSS.' },
    pt: { search: 'Buscar histórias', controls: 'Controles', usage: 'Uso', specs: 'Tokens', light: 'Claro', dark: 'Escuro', case: 'Case', proto: 'Protótipo',
      intro: 'Introdução', brand: 'Marca', foundations: 'Fundamentos', components: 'Componentes', patterns: 'Padrões', flows: 'Fluxos',
      none: 'Esta história não tem controles.', nousage: 'Sem snippet para esta história. Leia as regras abaixo.', rules: 'Regras', snippet: 'Marcação de referência', copy: 'Copiar', copied: 'Copiado', noresults: 'Nenhuma história encontrada.',
      hintDark: 'O dark mode existe só no painel admin.', hintLight: 'Fluxo do titular: só claro (a captura facial precisa de tela luminosa).', hintDoc: 'Clique num swatch ou num bloco de código para copiar.',
      noticeTag: 'Protótipo independente', notice: 'Protótipo independente de portfólio, por Gabriel Moreira. Todos os dados exibidos são fictícios e nada aqui é um produto de prova de vida certificada. A especificação original está em ogabrielmoreira.github.io/veroid_designsystem; este Storybook a reconstrói em HTML e CSS.' }
  };
  function t(k) { return UI[lang][k]; }
  function L(en, pt) { return lang === 'pt' ? pt : en; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  var SEL = function (a) { return { type: 'select', options: a }; };
  var TXT = { type: 'text' }, BOOL = { type: 'bool' }, COLOR = { type: 'color' };
  var RNG = function (min, max) { return { type: 'range', min: min, max: max }; };

  /* ---------- Ícones: traço 1.5, grade 20, currentColor ---------- */
  var CIR = '<circle cx="10" cy="10" r="7.5"/>';
  var IC = {
    approved: CIR + '<path d="M6.8 10.2l2.2 2.2 4.2-4.6"/>',
    review: '<path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5z"/><circle cx="10" cy="10" r="2.2"/>',
    rejected: CIR + '<path d="M7.2 7.2l5.6 5.6M12.8 7.2l-5.6 5.6"/>',
    unknown: CIR + '<path d="M8.2 8a1.9 1.9 0 1 1 2.7 1.7c-.6.3-.9.7-.9 1.3M10 13.6v.01"/>',
    pending: CIR + '<path d="M10 6v4.2l2.8 1.6"/>',
    capture: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h1.6l1-1.6h5.8l1 1.6h1.6A1.5 1.5 0 0 1 17 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z"/><circle cx="10" cy="10.2" r="2.8"/>',
    liveness: '<path d="M3 7V5a2 2 0 0 1 2-2h2M13 3h2a2 2 0 0 1 2 2v2M17 13v2a2 2 0 0 1-2 2h-2M7 17H5a2 2 0 0 1-2-2v-2"/><path d="M7.5 12s1 1.3 2.5 1.3S12.5 12 12.5 12M8 8.5v.01M12 8.5v.01"/>',
    subject: '<circle cx="10" cy="7" r="3"/><path d="M4 16.5c.8-3 3.2-4.5 6-4.5s5.2 1.5 6 4.5"/>',
    search: '<circle cx="9" cy="9" r="5.5"/><path d="M13.2 13.2L17 17"/>',
    filter: '<path d="M3 5h14l-5.3 6.2V16l-3.4-1.6v-3.2z"/>',
    evidence: '<path d="M5 2.8h7l3 3V17.2H5z"/><path d="M12 2.8v3h3M7.5 9.5h5M7.5 12.5h5"/>',
    export: '<path d="M10 12.5v-9M6.5 7L10 3.5 13.5 7M4 12v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V12"/>',
    info: CIR + '<path d="M10 9v4.5M10 6.5v.01"/>',
    warn: '<path d="M10 3.2l7.2 12.6H2.8z"/><path d="M10 8.4v3.4M10 13.6v.01"/>',
    chev: '<path d="M5.5 8l4.5 4.5L14.5 8"/>',
    up: '<path d="M5.5 12l4.5-4.5 4.5 4.5"/>',
    link: '<path d="M8.5 11.5a3 3 0 0 0 4.2 0l2.3-2.3a3 3 0 0 0-4.2-4.2l-.8.8M11.5 8.5a3 3 0 0 0-4.2 0L5 10.8a3 3 0 0 0 4.2 4.2l.8-.8"/>',
    plus: '<path d="M10 4v12M4 10h12"/>',
    x: '<path d="M5 5l10 10M15 5L5 15"/>',
    menu: '<path d="M3.5 6h13M3.5 10h13M3.5 14h13"/>',
    check: '<path d="M4.5 10.5l3.5 3.5 7.5-8"/>'
  };
  function ic(n, s) { return '<svg class="ic" viewBox="0 0 20 20" aria-hidden="true"' + (s ? ' width="' + s + '" height="' + s + '" style="width:' + s + 'px;height:' + s + 'px"' : '') + '>' + (IC[n] || '') + '</svg>'; }

  /* ---------- Cor ---------- */
  function hx(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
  function toHex(a) { return '#' + a.map(function (v) { v = Math.max(0, Math.min(255, Math.round(v))); return (v < 16 ? '0' : '') + v.toString(16); }).join('').toUpperCase(); }
  function mix(a, b, w) { var x = hx(a), y = hx(b); return toHex([x[0] + (y[0] - x[0]) * w, x[1] + (y[1] - x[1]) * w, x[2] + (y[2] - x[2]) * w]); }
  function lum(h) { var c = hx(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  function ratio(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  var STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  var VERO = { 50: '#F0F2FB', 100: '#DDE1F6', 200: '#BCC3EE', 300: '#939EE2', 400: '#6C79D4', 500: '#4756C9', 600: '#3742A8', 700: '#2B3486', 800: '#232C6B', 900: '#171D46' };
  var WHITE_MIX = { 50: 0.95, 100: 0.89, 200: 0.78, 300: 0.64, 400: 0.5, 500: 0.34, 600: 0.2, 700: 0.1 };
  function scaleFrom(h) {
    h = h.toUpperCase();
    if (h === VERO[800]) return VERO;
    var s = {}; STEPS.forEach(function (k) { s[k] = k === 800 ? h : k === 900 ? mix(h, '#000000', 0.34) : mix(h, '#FFFFFF', WHITE_MIX[k]); }); return s;
  }
  var NEUTRAL = [[50, '#F5F6FA', ['Page background, table row hover, sidebar', 'Fundo da página, linha de tabela em hover, sidebar']], [100, '#EBEDF4', ['Skeleton, inner divider, disabled background', 'Skeleton, divisor interno, fundo de disabled']], [200, '#D7DAE8', ['Default border of cards and tables', 'Borda padrão de card e tabela']], [300, '#B6BBD0', ['Input and secondary button border, dashed border', 'Borda de input e de botão secundário, borda tracejada']], [400, '#9198B5', ['Chart fill only. Never text (about 3:1)', 'Somente preenchimento gráfico. Não usar como texto (≈3:1)']], [500, '#6A7192', ['Supporting text at 12px or more, overline', 'Texto de apoio ≥12px, overline']], [600, '#4E5573', ['Secondary text, caption, small label (safe minimum)', 'Texto secundário, legenda, rótulo pequeno (mínimo seguro)']], [700, '#3C4262', ['Body text', 'Corpo de texto']], [800, '#262C45', ['Border in dark mode', 'Borda no dark mode']], [900, '#10142B', ['Ink: titles, tooltip, code block', 'Ink: título, tooltip, bloco de código']]];
  var BRAND_USE = { 50: ['Highlight surface, dropdown item on hover', 'Superfície de destaque, item de dropdown em hover'], 100: ['Surface, empty-state illustration', 'Superfície, ilustração de estado vazio'], 200: ['Border of informative card', 'Borda de card informativo'], 300: ['Primary in dark mode, active item bar', 'Primary no dark mode, barra do item ativo'], 400: ['4th funnel bar, decorative icon', '4ª barra de funil, ícone decorativo'], 500: ['Accent, focus ring, 3rd funnel bar', 'Accent, anel de foco, 3ª barra de funil'], 600: ['Primary hover, 2nd funnel bar', 'Hover do primário, 2ª barra de funil'], 700: ['Link, action text on light surface', 'Link, texto de ação em superfície clara'], 800: ['Primary: button, active item, 1st bar', 'Primary: botão, item ativo, 1ª barra'], 900: ['Reserve', 'Reserva'] };

  var RISK = [
    { k: 'low', range: '0–30', base: '#0F7A4A', bg: '#E6F2EB', ink: '#0B5C37', ic: 'approved', name: ['Low risk', 'Risco baixo'], dec: ['Automatic approval if the organization allows it', 'Aprovação automática se a organização permitir'] },
    { k: 'review', range: '31–70', base: '#B06A00', bg: '#FBF0DF', ink: '#7A4900', ic: 'review', name: ['Review', 'Revisar'], dec: ['Manual review', 'Revisão manual'] },
    { k: 'high', range: '71–100', base: '#B3261E', bg: '#FBE9E7', ink: '#8C1D18', ic: 'rejected', name: ['High risk', 'Risco alto'], dec: ['Suggested rejection, always reviewable', 'Reprovação sugerida, sempre revisável'] },
    { k: 'unknown', range: '—', base: '#5A6570', bg: '#EEF0F2', ink: '#3D464F', ic: 'unknown', name: ['Unknown', 'Indeterminado'], dec: ['Timeout, AI ceiling, liveness unavailable', 'Timeout, teto de IA, prova de vida indisponível'] }
  ];
  function band(s) { return s <= 30 ? 'low' : s <= 70 ? 'review' : 'high'; }
  function rk(k) { return RISK.filter(function (r) { return r.k === k; })[0]; }
  function chip(k, label) { var r = k === 'info' ? { ic: 'link', name: ['Link opened', 'Link aberto'] } : rk(k); return '<span class="vs-chip ' + k + '">' + ic(r.ic) + esc(label || L(r.name[0], r.name[1])) + '</span>'; }

  /* ---------- Helpers de documentação ---------- */
  function table(head, rows) { return '<div class="vs-scroll"><table class="vs-doc"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>'; }
  function K(s) { return '<code>' + esc(s) + '</code>'; }
  function card(title, lead, body) { return '<section class="vs-card"><h3>' + title + '</h3>' + (lead ? '<p class="lead">' + lead + '</p>' : '') + body + '</section>'; }
  function codeBlock(s) { return '<div class="sb-codewrap"><pre class="sb-code">' + esc(s) + '</pre><button type="button" class="sb-copy">' + t('copy') + '</button></div>'; }
  function story(id) { return 'data-story="' + id + '"'; }

  var SPEC_URL = 'https://ogabrielmoreira.github.io/veroid_designsystem/';
  var DEMO_URL = 'https://ogabrielmoreira.github.io/veroid';

  /* =======================================================
     HISTÓRIAS
     ======================================================= */
  var STORIES = [];
  function add(s) { STORIES.push(s); }

  /* ---------------- Introdução ---------------- */
  add({ id: 'intro', group: 'intro', name: ['What is Vero ID', 'O que é o Vero ID'], wide: true, docs: true,
    desc: ['A white-label B2B2C identity verification (KYC) product, and the design system that holds its two surfaces together.', 'Um produto white-label B2B2C de verificação de identidade (KYC) e o design system que sustenta suas duas superfícies.'],
    tokens: [['--brand-*', L('tenant-controlled', 'controlado pelo tenant')], ['--n-*', L('system', 'sistema')], ['--risk-*', L('system, never overridden', 'sistema, nunca sobrescrito')], ['--focus-* / --dur-* / --bp-*', L('system', 'sistema')]],
    rules: [['Everything is a CSS variable: the organization (tenant) overrides only the brand layer, the system keeps risk, focus, motion and layout.', 'Tudo é variável CSS: a organização (tenant) sobrescreve só a camada de marca; o sistema mantém risco, foco, motion e layout.'], ['Names of components and props follow the database columns: organization, subject, verification_link, verification_session, risk_signal, risk_score, qualification_score.', 'Nomes de componente e de prop acompanham as colunas do banco: organization, subject, verification_link, verification_session, risk_signal, risk_score, qualification_score.'], ['Never write "hot lead" in the interface.', 'Nunca usar "lead quente" na interface.']],
    render: function () {
      return '<div class="vs-split">' +
        card(L('Two surfaces', 'Duas superfícies'), L('One product, two very different people.', 'Um produto, duas pessoas muito diferentes.'),
          '<div style="display:grid;gap:14px"><div><h4>' + L('Admin dashboard (B2B)', 'Painel admin (B2B)') + '</h4><p class="vs-prose">' + L('For the owner, analyst and reader of the organization. Dense, tabular, light and dark. Shows risk score, signals and evidence.', 'Para o proprietário, o analista e o leitor da organização. Denso, tabular, claro e escuro. Mostra score de risco, sinais e evidências.') + '</p></div><div><h4>' + L('Subject flow (B2C)', 'Fluxo do titular (B2C)') + '</h4><p class="vs-prose">' + L('Mobile-first, one decision per screen, wearing the organization\'s brand. Light only. The subject never sees a score or a fraud signal.', 'Mobile-first, uma decisão por tela, com a marca da organização. Só claro. O titular nunca vê score nem sinal de fraude.') + '</p></div></div>') +
        card(L('Target stack', 'Stack alvo'), L('What the specification assumes.', 'O que a especificação assume.'),
          '<div class="vs-chips">' + ['React 19 + Vite + TypeScript', 'Tailwind + shadcn/ui', 'CSS variables per tenant', 'react-i18next (PT-BR / EN)', 'Recharts', 'MediaPipe Face Landmarker', 'Cloudflare Worker', 'Supabase + RLS'].map(function (x) { return '<span class="vs-k">' + esc(x) + '</span>'; }).join('') + '</div>') +
        '</div>' +
        card(L('What is in this Storybook', 'O que há neste Storybook'), L('Jump straight to a story.', 'Vá direto a uma história.'),
          '<div class="vs-chips">' + [['logo', L('Logo', 'Logo')], ['color', L('Color', 'Cor')], ['typography', L('Typography', 'Tipografia')], ['button', 'Button'], ['input', 'Input'], ['chip', 'Chip'], ['table', L('Data table', 'Tabela de dados')], ['risk', L('Risk score', 'Score de risco')], ['whitelabel', 'White-label'], ['flow', L('Camera consent', 'Consentimento de câmera')]].map(function (x) { return '<button type="button" class="vs-btn secondary" ' + story(x[0]) + '>' + x[1] + '</button>'; }).join('') + '</div>') +
        card(L('Sources', 'Fontes'), null,
          '<p class="vs-prose">' + L('This is an independent portfolio prototype by Gabriel Moreira, with fictional demo data. The original specification (v0.1) is published at ', 'Este é um protótipo independente de portfólio, de Gabriel Moreira, com dados fictícios de demonstração. A especificação original (v0.1) está publicada em ') + '<a href="' + SPEC_URL + '" target="_blank" rel="noopener">ogabrielmoreira.github.io/veroid_designsystem</a>. ' + L('The working demo is at ', 'A demonstração funcional está em ') + '<a href="' + DEMO_URL + '" target="_blank" rel="noopener">ogabrielmoreira.github.io/veroid</a>.</p>');
    } });

  /* ---------------- Marca: logo ---------------- */
  add({ id: 'logo', group: 'brand', name: ['Logo', 'Logo'], wide: true, docs: true,
    desc: ['A bold geometric V made of two interlocking angular strokes, followed by the wordmark in a heavy geometric sans. Three versions, one clear-space rule, two minimum sizes.', 'Um V geométrico e pesado, feito de dois traços angulares que se encaixam, seguido do logotipo em sans geométrica pesada. Três versões, uma regra de respiro, dois tamanhos mínimos.'],
    props: { version: [SEL(['primary', 'reversed', 'symbol']), 'primary'], background: [SEL(['auto', 'white', 'brand-50', 'brand-800', 'ink', 'brand-400']), 'auto'], width: [RNG(16, 420), 240] },
    tokens: [['brand navy', '#232C6B · --brand-800'], ['ink', '#10142B · --n-900'], ['dark surface', '#0C1024'], ['wordmark min width', '96 px (≈ 24 px high)'], ['symbol min width', '20 px'], ['clear space', L('½ of the lockup height', '½ da altura do logo')], ['dark-surface contrast floor', '3:1 (spec 6)']],
    rules: [['Use the primary wordmark on light surfaces and the reversed (white) version on navy or on #0C1024. Never put the navy version on a dark surface.', 'Use o logotipo primário em superfícies claras e a versão invertida (branca) sobre navy ou #0C1024. Nunca coloque a versão navy sobre superfície escura.'], ['Keep half the lockup height free on every side. Below 96 px wide use the symbol alone.', 'Mantenha metade da altura do logo livre em todos os lados. Abaixo de 96 px de largura use só o símbolo.'], ['In the subject flow the tenant\'s logo leads; "Verification by Vero ID" stays as a small, discreet footer.', 'No fluxo do titular a marca do tenant lidera; "Verificação por Vero ID" fica como rodapé pequeno e discreto.'], ['White-label asset rule: logo-light and logo-dark are separate files; an inverted light logo is refused below 3:1 on #0C1024.', 'Regra de asset white-label: logo-light e logo-dark são arquivos separados; logo claro invertido é recusado abaixo de 3:1 sobre #0C1024.']],
    render: function (p) {
      var BG = { auto: null, white: '#FFFFFF', 'brand-50': '#F0F2FB', 'brand-800': '#232C6B', ink: '#0C1024', 'brand-400': '#6C79D4' };
      var bg = BG[p.background] || (p.version === 'reversed' ? '#232C6B' : '#FFFFFF');
      var src = p.version === 'primary' ? '../assets/veroid-logo.png' : p.version === 'reversed' ? '../assets/veroid-logo-white.png' : '../assets/veroid-mark.png';
      if (p.version === 'symbol' && lum(bg) < 0.18) src = '../assets/veroid-mark-white.png';
      var fg = p.version === 'reversed' || src.indexOf('white') > -1 ? '#FFFFFF' : '#232C6B';
      var min = p.version === 'symbol' ? 20 : 96, w = +p.width, cr = ratio(fg, bg);
      var warn = '';
      if (w < min) warn += '<span class="vs-warnpill">' + L('Below minimum width (' + min + ' px)', 'Abaixo da largura mínima (' + min + ' px)') + '</span> ';
      if (cr < 3) warn += '<span class="vs-warnpill">' + L('Contrast ' + cr.toFixed(1) + ':1, under 3:1. Use the other version.', 'Contraste ' + cr.toFixed(1) + ':1, abaixo de 3:1. Use a outra versão.') + '</span>';
      var nat = p.version === 'symbol' ? 463 / 379 : 1461 / 383;
      var hero = '<div class="vs-logo-hero" style="background:' + bg + ';border-color:' + (lum(bg) < 0.18 ? bg : '#d7dae8') + '"><img src="' + src + '" alt="Vero ID" style="width:' + w + 'px" width="' + w + '" height="' + Math.round(w / nat) + '"></div>';
      var lh = 64;
      var clear = '<div class="vs-clear" style="--lh:' + lh + 'px"><span class="a">x</span><span class="b">x</span><img src="../assets/veroid-logo.png" alt="" width="' + Math.round(lh * 1461 / 383) + '" height="' + lh + '"></div>';
      var MIN = '<div class="vs-min"><figure><img src="../assets/veroid-logo.png" alt="" width="96" height="25">96 px · ' + L('wordmark min', 'logotipo mín.') + '</figure><figure><img src="../assets/veroid-logo.png" alt="" width="180" height="47">180 px · ' + L('default', 'padrão') + '</figure><figure><img src="../assets/veroid-mark.png" alt="" width="20" height="16">20 px · ' + L('symbol min', 'símbolo mín.') + '</figure><figure><img src="../assets/veroid-mark.png" alt="" width="44" height="36">44 px · ' + L('favicon, avatar', 'favicon, avatar') + '</figure></div>';
      function fig(bgc, inner, ok, cap) { return '<figure><div class="bx" style="background:' + bgc + '">' + inner + '</div><figcaption class="' + (ok ? 'y' : 'n') + '">' + ic(ok ? 'approved' : 'rejected') + cap + '</figcaption></figure>'; }
      var im = function (s, st) { return '<img src="../assets/' + s + '" alt="" style="' + (st || '') + '">'; };
      var DO = '<div class="vs-dd-grid">' +
        fig('#fff', im('veroid-logo.png'), true, L('Primary on a light surface', 'Primário em superfície clara')) +
        fig('#232C6B', im('veroid-logo-white.png'), true, L('Reversed on navy', 'Invertido sobre navy')) +
        fig('#0C1024', im('veroid-logo-white.png'), true, L('Reversed on #0C1024 (admin dark)', 'Invertido sobre #0C1024 (admin escuro)')) +
        fig('#F0F2FB', im('veroid-mark.png', 'height:34px'), true, L('Symbol alone: favicon, avatar', 'Só o símbolo: favicon, avatar')) + '</div>';
      var DONT = '<div class="vs-dd-grid">' +
        fig('#fff', im('veroid-logo.png', 'filter:hue-rotate(150deg) saturate(3)'), false, L('Do not recolor', 'Não recolorir')) +
        fig('#fff', im('veroid-logo.png', 'transform:scaleX(1.55)'), false, L('Do not stretch or squash', 'Não esticar nem achatar')) +
        fig('#fff', im('veroid-logo.png', 'transform:rotate(-14deg)'), false, L('Do not rotate', 'Não rotacionar')) +
        fig('#fff', im('veroid-logo.png', 'filter:drop-shadow(3px 4px 3px rgba(16,20,43,.55))'), false, L('Do not add shadows or effects', 'Não adicionar sombra ou efeito')) +
        fig('#6C79D4', im('veroid-logo.png'), false, L('Do not place on low-contrast backgrounds', 'Não usar em fundo de baixo contraste')) +
        fig('#fff', '<span style="display:flex;align-items:center;gap:6px"><img src="../assets/veroid-mark.png" alt="" style="height:24px"><b style="font:700 20px Georgia,serif;color:#232C6B">Vero ID</b></span>', false, L('Do not rebuild the wordmark in another font', 'Não refazer o logotipo em outra fonte')) + '</div>';
      var place = '<div class="vs-grid">' +
        '<div class="vs-tile"><span class="vs-ovl"><b>' + L('Admin dashboard', 'Painel admin') + '</b></span><div style="display:grid;grid-template-columns:96px 1fr;border:1px solid var(--bd);border-radius:8px;overflow:hidden;min-height:110px"><div style="background:var(--pg);border-right:1px solid var(--bd);padding:12px 10px"><img src="../assets/veroid-logo.png" alt="" style="height:20px;display:block"></div><div style="padding:12px;display:grid;gap:6px;align-content:start"><i style="height:8px;width:60%;background:var(--soft);border-radius:4px"></i><i style="height:8px;width:90%;background:var(--soft);border-radius:4px"></i><i style="height:8px;width:40%;background:var(--soft);border-radius:4px"></i></div></div><p class="vs-prose" style="font-size:12.5px">' + L('Wordmark at the top of the 232 px sidebar, 24 px high.', 'Logotipo no topo da sidebar de 232 px, 24 px de altura.') + '</p></div>' +
        '<div class="vs-tile"><span class="vs-ovl"><b>' + L('Subject flow', 'Fluxo do titular') + '</b></span><div class="vs-tenant" style="border:1px solid var(--bd);border-radius:8px;padding:14px;min-height:110px;background:#fff;align-content:space-between"><span class="tl">' + L('tenant logo', 'logo do tenant') + '</span><i style="height:8px;width:70%;background:var(--soft);border-radius:4px"></i><span class="ft">' + L('Verification by', 'Verificação por') + ' <img src="../assets/veroid-logo.png" alt="Vero ID"></span></div><p class="vs-prose" style="font-size:12.5px">' + L('The tenant leads. Vero ID is a small footer, never the hero.', 'O tenant lidera. O Vero ID é um rodapé pequeno, nunca o destaque.') + '</p></div></div>';
      var dl = '<div class="vs-dl"><a href="../assets/veroid-logo.png" download>' + ic('export') + 'veroid-logo.png <small>1461×383</small></a><a href="../assets/veroid-logo-white.png" download>' + ic('export') + 'veroid-logo-white.png</a><a href="../assets/veroid-mark.png" download>' + ic('export') + 'veroid-mark.png <small>463×379</small></a><a href="../assets/veroid-mark-white.png" download>' + ic('export') + 'veroid-mark-white.png</a></div>';
      return card(L('Preview', 'Prévia'), L('Pick a version, background and width in Controls. Warnings appear when a rule is broken.', 'Escolha versão, fundo e largura em Controles. Avisos aparecem quando uma regra é quebrada.'), hero + (warn ? '<div style="margin-top:10px">' + warn + '</div>' : '')) +
        card(L('Clear space', 'Respiro'), L('Half the lockup height (x) on every side, the same value the white-label asset rule asks for.', 'Metade da altura do logo (x) em todos os lados, o mesmo valor da regra de asset white-label.'), '<div style="overflow-x:auto;padding:4px 0">' + clear + '</div>') +
        card(L('Minimum size', 'Tamanho mínimo'), L('Wordmark: 96 px wide (about 24 px high). Symbol: 20 px wide. Smaller than that, do not use.', 'Logotipo: 96 px de largura (cerca de 24 px de altura). Símbolo: 20 px de largura. Menor que isso, não usar.'), MIN) +
        card(L('Placement', 'Posicionamento'), null, place) +
        card(L('Do', 'Faça'), null, DO) + card(L('Do not', 'Não faça'), null, DONT) +
        card(L('Files', 'Arquivos'), L('PNG with transparent background, 2x. Use the white versions on dark surfaces.', 'PNG com fundo transparente, 2x. Use as versões brancas em superfícies escuras.'), dl);
    } });

  /* ---------------- Fundamentos ---------------- */
  add({ id: 'color', group: 'foundations', name: ['Color', 'Cor'], wide: true, docs: true,
    desc: ['Brand indigo is the only layer a tenant can replace. Neutrals and the risk colors belong to the system.', 'O índigo de marca é a única camada que um tenant pode trocar. Neutros e cores de risco pertencem ao sistema.'],
    tokens: [['--brand-50 … --brand-900', 'indigo · tenant'], ['--brand-primary', 'var(--brand-800)'], ['--brand-accent', 'var(--brand-500)'], ['--n-50 … --n-900', 'slate · system'], ['--risk-{low|review|high|unknown}', L('base, -bg, -ink', 'base, -bg, -ink')], ['--surface / --surface-raised / --border', L('dark mode only', 'só dark mode')]],
    rules: [['Contrast: 4.5:1 for normal text, 3:1 for large text and meaningful icons. Check light and dark.', 'Contraste: 4.5:1 em texto normal, 3:1 em texto grande e em ícone significativo. Verificar em light e dark.'], ['#9198B5 (slate 400) is a chart fill only, about 3:1. Never use it as text.', '#9198B5 (slate 400) é só preenchimento gráfico, ≈3:1. Nunca como cor de texto.'], ['Color is never the only indicator: always add an icon or a word.', 'Cor nunca é o único indicador: sempre ícone ou palavra junto.'], ['Risk colors are fixed and never white-label.', 'As cores de risco são fixas e nunca white-label.']],
    render: function () {
      function sw(name, hex, use, kind) { return '<button type="button" class="vs-sw" data-copy="' + hex + '" title="' + t('copy') + '"><i style="background:' + hex + '"></i><span><b>' + name + '</b><em>' + hex + '</em>' + (use ? '<br>' + esc(use) : '') + '</span></button>'; }
      var brand = STEPS.map(function (s) { return sw(String(s), VERO[s], L(BRAND_USE[s][0], BRAND_USE[s][1])); }).join('');
      var neu = NEUTRAL.map(function (n) { return sw(String(n[0]), n[1], L(n[2][0], n[2][1])); }).join('');
      var rows = RISK.map(function (r) { return ['<span class="vs-chip ' + r.k + '">' + ic(r.ic) + L(r.name[0], r.name[1]) + '</span>', r.range, K(r.base), K(r.bg), K(r.ink), L(r.dec[0], r.dec[1])]; });
      var dark = [['--surface', '#0C1024'], ['--surface-raised', '#151A33'], ['--border', '#262C45'], ['--ink', '#EDEFF7'], ['--ink-muted', '#B6BBD0'], ['--brand-primary', '#939EE2 (brand-300)'], ['--focus-ring', '#939EE2'], ['risk-low', 'bg rgba(15,122,74,.18) · border rgba(74,196,141,.40) · ink #7FDCAE'], ['risk-review', 'bg rgba(176,106,0,.18) · border rgba(232,168,64,.42) · ink #F0C077'], ['risk-high', 'bg rgba(179,38,30,.16) · border rgba(240,120,110,.45) · ink #FFB4AC']];
      return card('brand.indigo', L('Brand color. The 800 step is the primary, 500 the accent, 300 the primary in dark mode.', 'Cor de marca. O passo 800 é o primary, o 500 o accent, o 300 o primary no dark mode.'), '<div class="vs-sws">' + brand + '</div>') +
        card('neutral.slate', L('System neutrals. Not overridden by tenants.', 'Neutros do sistema. Não sobrescritos por tenants.'), '<div class="vs-sws">' + neu + '</div>') +
        card(L('Risk semantic', 'Semântico de risco'), L('Fixed, never white-label. Card and chip borders use the base color at .24–.28 alpha.', 'Fixo, nunca white-label. Bordas de card e chip usam a cor base com alpha .24–.28.'), table([L('Band', 'Faixa'), L('Score', 'Score'), 'Base', 'bg', 'ink', L('Decision', 'Decisão')], rows)) +
        card(L('Dark mode (admin only)', 'Dark mode (só painel admin)'), L('The primary button inverts: background #939EE2, ink #10142B. Input: background #0C1024, border #4E5573. The subject flow has no dark mode.', 'O botão primário inverte: fundo #939EE2, tinta #10142B. Input: fundo #0C1024, borda #4E5573. O fluxo do titular não tem dark mode.'), table(['Token', L('Value', 'Valor')], dark.map(function (d) { return [K(d[0]), esc(d[1])]; })));
    } });

  var TYPE = [
    ['display', 'Libre Franklin 700', 44, 44, '-0.032em', 700, 'd', ['Landing, report cover', 'Landing, capa de relatório']],
    ['h1', 'Libre Franklin 700', 32, 35, '-0.028em', 700, 'd', ['Page title', 'Título de página']],
    ['h2', 'Libre Franklin 700', 28, 32, '-0.025em', 700, 'd', ['Document section', 'Seção de documento']],
    ['h3', 'Libre Franklin 600', 24, 28, '-0.022em', 600, 'd', ['Large card title', 'Título de card grande']],
    ['h4', 'Geist 600', 19, 25, '0', 600, 't', ['Card subtitle, modal header', 'Subtítulo de card, cabeçalho de modal']],
    ['body-lg', 'Geist 400', 16, 26, '0', 400, 't', ['Subject flow, consent', 'Fluxo do titular, consentimento']],
    ['body', 'Geist 400', 14, 22, '0', 400, 't', ['Panel body, table row', 'Corpo do painel, linha de tabela']],
    ['label', 'Geist 500', 13, 18, '0', 500, 't', ['Field label, button, chip, menu item', 'Rótulo de campo, botão, chip, item de menu']],
    ['caption', 'Geist 400', 12, 18, '0', 400, 't', ['Help, legend, metadata', 'Ajuda, legenda, metadado']],
    ['overline', 'Geist 600', 11, 13, '0.1em, uppercase', 600, 't', ['Big-number label, axis', 'Rótulo de big number, eixo']],
    ['micro', 'Geist 400', 10, 14, '0', 400, 't', ['Color-scale label, chart axis', 'Rótulo de escala de cor, eixo de gráfico']],
    ['number', 'Geist 600', 28, 34, '-0.02em', 600, 't', ['Score, big number, R$ value (24–30)', 'Score, big number, valor em R$ (24–30)']]
  ];
  add({ id: 'typography', group: 'foundations', name: ['Typography', 'Tipografia'], wide: true, docs: true,
    desc: ['No serifs anywhere in the system. Libre Franklin for display, Geist for text. Tabular numerals wherever numbers are compared.', 'Nenhuma serifada no sistema. Libre Franklin para display, Geist para texto. Algarismos tabulares onde números são comparados.'],
    props: { sample: [TXT, 'Identity verified'] },
    tokens: [['--font-display', "'Libre Franklin', system-ui, sans-serif"], ['--font-text', "'Geist', system-ui, sans-serif"], ['tabular-nums', L('required: score, data column, R$, timer', 'obrigatório: score, coluna de dado, R$, timer')], ['line length', L('35–60 mobile · 60–75 desktop', '35–60 mobile · 60–75 desktop')], ['mobile input', L('min 16px (avoids iOS zoom)', 'mín. 16px (evita auto-zoom do iOS)')]],
    rules: [['font-variant-numeric: tabular-nums is mandatory on score, data columns, R$ values and timers.', 'font-variant-numeric: tabular-nums é obrigatório em score, coluna de dado, valor em R$ e timer.'], ['Line length: 35–60 characters on mobile, 60–75 on desktop.', 'Medida de linha: 35–60 caracteres no mobile, 60–75 no desktop.'], ['Mobile inputs use at least 16px so iOS does not auto-zoom.', 'Input no mobile tem no mínimo 16px para o iOS não dar zoom.']],
    render: function (p) {
      var rows = TYPE.map(function (r) {
        var txt = r[0] === 'number' ? 'R$ 1.284,90 · 84 / 100' : r[0] === 'overline' ? p.sample : p.sample;
        var st = 'font-family:' + (r[6] === 'd' ? 'var(--vx-display)' : 'var(--vx-text)') + ';font-size:' + r[2] + 'px;line-height:' + r[3] + 'px;font-weight:' + r[5] + ';letter-spacing:' + r[4].split(',')[0] + (r[0] === 'overline' ? ';text-transform:uppercase' : '') + (r[0] === 'number' ? ';font-variant-numeric:tabular-nums' : '');
        return '<div class="r"><div class="m"><b>' + r[0] + '</b>' + r[1] + '<br>' + r[2] + ' / ' + r[3] + '<br>' + r[4] + '</div><div><div class="s" style="' + st + '">' + esc(txt) + '</div><div class="vs-helper" style="margin-top:4px">' + L(r[7][0], r[7][1]) + '</div></div></div>';
      }).join('');
      var fam = ['Libre Franklin', 'Geist', 'Plus Jakarta Sans', 'IBM Plex Sans', 'Work Sans', 'Figtree', 'Manrope', 'Atkinson Hyperlegible'];
      return card(L('Type scale', 'Escala tipográfica'), L('Live specimens. Change the sample text in Controls.', 'Espécimes ao vivo. Troque o texto de exemplo em Controles.'), '<div class="vs-ty">' + rows + '</div>') +
        card(L('Eight Brand Kit families', 'Oito famílias do Brand Kit'), L('The owner picks one display and one text family. All are sans, with weights 400/500/600 and tabular numerals.', 'O proprietário escolhe uma família de display e uma de texto. Todas são sans, com pesos 400/500/600 e algarismos tabulares.'), '<div class="vs-chips">' + fam.map(function (f, i) { return '<span class="vs-chip info">' + f + (i < 2 ? ' · ' + L('default', 'padrão') : '') + '</span>'; }).join('') + '</div>');
    } });

  add({ id: 'spacing', group: 'foundations', name: ['Spacing', 'Espaço'], wide: true, docs: true,
    desc: ['A base-4 scale. Eight steps cover everything from an icon gap to the breathing room between page blocks.', 'Uma escala de base 4. Oito passos cobrem de tudo, do gap de ícone ao respiro entre blocos de página.'],
    tokens: [['scale', '4 · 8 · 12 · 16 · 24 · 32 · 48 · 64'], ['page padding', 'clamp(20px, 5vw, 64px)'], ['--content-max', '1240px'], ['--flow-max', '520px (' + L('subject flow, centered', 'fluxo do titular, centrado') + ')']],
    rules: [['No value outside the scale, except the component paddings listed in the spec (for example 5/11 on a chip, 11/18 on a button).', 'Nenhum valor fora da escala, exceto os paddings de componente da especificação (por exemplo 5/11 no chip, 11/18 no botão).']],
    render: function () {
      var sc = [4, 8, 12, 16, 24, 32, 48, 64];
      var ctx = [[L('Chip / icon-text inner gap', 'Gap interno de chip / ícone-texto'), '6–8'], [L('Chip padding', 'Padding de chip'), L('5 vertical / 11 horizontal', '5 vertical / 11 horizontal')], [L('Input and button padding', 'Padding de input e botão'), L('11 vertical / 12–18 horizontal', '11 vertical / 12–18 horizontal')], [L('Card padding', 'Padding de card'), '22–24'], [L('Gap between card items', 'Gap entre itens de card'), '12–16'], [L('Section gap', 'Gap de seção'), '28'], [L('Breathing room between page blocks', 'Respiro entre blocos de página'), '48–64'], [L('Page padding', 'Padding de página'), 'clamp(20px, 5vw, 64px)'], [L('Max content width', 'Largura máxima de conteúdo'), '1240'], [L('Max subject-flow width', 'Largura máxima do fluxo do titular'), L('520, centered', '520, centrado')]];
      return card(L('Scale', 'Escala'), null, '<div class="vs-spc">' + sc.map(function (v) { return '<div class="r"><span>' + v + ' px</span><i style="width:' + v * 4 + 'px;max-width:100%"></i></div>'; }).join('') + '</div>') +
        card(L('By context', 'Por contexto'), null, table([L('Context', 'Contexto'), L('Value', 'Valor')], ctx));
    } });

  var RADSET = { reto: [0, 2, 6], suave: [4, 6, 12], arredondado: [8, 12, 20] };
  add({ id: 'radius', group: 'foundations', name: ['Radius', 'Raio'], wide: true, docs: true,
    desc: ['Four tokens, three alternative sets the Brand Kit can apply. The chip is always a pill, in every set.', 'Quatro tokens, três conjuntos alternativos que o Brand Kit pode aplicar. O chip é sempre pill, em qualquer conjunto.'],
    props: { set: [SEL(['reto', 'suave', 'arredondado']), 'suave'] },
    tokens: [['--radius-sm', '4px · input, select, textarea, funnel bar, skeleton'], ['--radius-md', '6px · button, menu item, alert, toast'], ['--radius-lg', '12px · card, panel, modal, code block'], ['--radius-pill', '999px · chip, tag, avatar, score bar, language button'], ['reto', '0 / 2 / 6'], ['suave', '4 / 6 / 12 (default)'], ['arredondado', '8 / 12 / 20']],
    rules: [['Invent no radius. Components read the four tokens, so switching the set restyles everything consistently.', 'Não invente raio. Os componentes leem os quatro tokens, então trocar o conjunto reestiliza tudo de forma consistente.']],
    render: function (p) {
      var r = RADSET[p.set] || RADSET.suave, st = '--radius-sm:' + r[0] + 'px;--radius-md:' + r[1] + 'px;--radius-lg:' + r[2] + 'px;';
      var tk = [['--radius-sm', r[0], L('input, select, funnel bar', 'input, select, barra de funil'), 'sm'], ['--radius-md', r[1], L('button, menu item, alert', 'botão, item de menu, aviso'), 'md'], ['--radius-lg', r[2], L('card, panel, modal', 'card, painel, modal'), 'lg'], ['--radius-pill', 999, L('chip, tag, avatar', 'chip, tag, avatar'), 'pill']];
      return '<div style="' + st + '">' + card(L('Tokens in set: ', 'Tokens no conjunto: ') + p.set, null, '<div class="vs-rad">' + tk.map(function (x) { return '<div><div class="demo" style="border-radius:' + (x[1] === 999 ? 28 : x[1]) + 'px"></div><b>' + x[0] + '</b><small>' + x[1] + 'px · ' + x[2] + '</small></div>'; }).join('') + '</div>') +
        '<div style="height:16px"></div>' + card(L('Applied', 'Aplicado'), L('Real components reading the tokens above.', 'Componentes reais lendo os tokens acima.'), '<div class="vs-row" style="align-items:flex-end"><div style="width:240px;max-width:100%"><div class="vs-field"><label>' + L('Field', 'Campo') + '</label><input class="vs-in" style="border-radius:var(--radius-sm)" placeholder="000.000.000-00"></div></div><button class="vs-btn primary" type="button" style="border-radius:var(--radius-md)">' + L('Send link', 'Enviar link') + '</button>' + chip('low') + '<div class="vs-card" style="padding:14px 18px;border-radius:var(--radius-lg)">Card</div></div>') + '</div>';
    } });

  add({ id: 'elevation', group: 'foundations', name: ['Elevation', 'Elevação'], wide: true, docs: true,
    desc: ['Flat by default: a 1px border. Three shadow levels, nothing above them.', 'Plano por padrão: uma borda de 1px. Três níveis de sombra, nada acima disso.'],
    tokens: [['flat', 'border: 1px solid #D7DAE8'], ['--shadow-raised', '0 1px 2px rgba(16,20,43,.08)'], ['--shadow-overlay', '0 4px 14px rgba(16,20,43,.1)'], ['--shadow-modal', '0 14px 36px rgba(16,20,43,.16)'], ['--scrim', 'rgba(16,20,43,.48)']],
    rules: [['In dark mode use a lighter surface (--surface-raised) instead of a shadow.', 'No dark mode, use uma superfície mais clara (--surface-raised) em vez de sombra.']],
    render: function () {
      var lv = [['flat', 'border 1px', L('card, table, panel (default)', 'card, tabela, painel (padrão)'), 'border:1px solid var(--bd)'], ['raised', '--shadow-raised', L('card that leaves the flow', 'card que sai do fluxo'), 'box-shadow:var(--shadow-raised);border:1px solid var(--bd)'], ['overlay', '--shadow-overlay', L('dropdown, tooltip, toast', 'dropdown, tooltip, toast'), 'box-shadow:var(--shadow-overlay)'], ['modal', '--shadow-modal', L('modal, sheet', 'modal, sheet'), 'box-shadow:var(--shadow-modal)'], ['scrim', '--scrim', L('veil behind the modal', 'véu atrás do modal'), 'background:var(--scrim);color:#fff']];
      return card(L('Levels', 'Níveis'), null, '<div class="vs-elev">' + lv.map(function (x) { return '<div style="' + x[3] + '"><b' + (x[0] === 'scrim' ? ' style="color:#fff"' : '') + '>' + x[0] + '</b><span' + (x[0] === 'scrim' ? ' style="color:#fff"' : '') + '>' + x[1] + '<br>' + x[2] + '</span></div>'; }).join('') + '</div>');
    } });

  add({ id: 'motion', group: 'foundations', name: ['Motion & focus', 'Motion e foco'], wide: true, docs: true,
    desc: ['Four durations, two easings, only opacity and transform. Focus is never removed.', 'Quatro durações, dois easings, só opacity e transform. O foco nunca é removido.'],
    props: { reduced: [BOOL, false], easing: [SEL(['ease-in', 'ease-out']), 'ease-in'] },
    tokens: [['--dur-instant', '80ms · hover, focus, chip'], ['--dur-fast', '160ms · dropdown, tooltip, toast'], ['--dur-base', '240ms · modal, drawer, step change'], ['--dur-slow', '400ms · score bar, funnel on enter'], ['--ease-in', 'cubic-bezier(.2,.8,.3,1)'], ['--ease-out', 'cubic-bezier(.4,0,1,1)'], ['--focus-ring', 'var(--brand-500) · #939EE2 dark / destructive'], ['--focus-width / --focus-offset', '2px / 2px']],
    rules: [['Only opacity and transform. Never animate width, height, top or left.', 'Só opacity e transform. Nunca animar width, height, top ou left.'], ['Exit is about 60–70% of the enter duration. Stagger 30–50ms, at most 8 children.', 'A saída dura ≈60–70% da entrada. Stagger de 30–50ms, no máximo 8 filhos.'], ['Under prefers-reduced-motion every duration goes to 0ms, skeleton pulse becomes static and the final state renders at once. The face-capture frame never blinks.', 'Sob prefers-reduced-motion todas as durações vão a 0ms, a pulsação do skeleton vira estático e o estado final é renderizado na hora. A moldura de captura facial não pisca.'], ['Never outline:none without a replacement. On a destructive button the ring is #10142B so it is not confused with the danger color.', 'Nunca outline:none sem substituto. Em botão destrutivo o anel é #10142B para não confundir com a cor de perigo.']],
    render: function (p) {
      var D = [['--dur-instant', 80], ['--dur-fast', 160], ['--dur-base', 240], ['--dur-slow', 400]];
      var ease = p.easing === 'ease-in' ? 'cubic-bezier(.2,.8,.3,1)' : 'cubic-bezier(.4,0,1,1)';
      return card(L('Durations', 'Durações'), L('Press play to run all four tracks.', 'Aperte play para rodar as quatro trilhas.'), '<div class="vs-mo" id="vs-mo">' + D.map(function (d) { return '<div><div class="lb"><span>' + d[0] + '</span><span>' + (p.reduced ? 0 : d[1]) + 'ms</span></div><div class="tr"><div class="dot" style="transition-duration:' + (p.reduced ? 0 : d[1]) + 'ms;transition-timing-function:' + ease + '"></div></div></div>'; }).join('') + '</div><div style="margin-top:14px" class="vs-row"><button class="vs-btn primary" type="button" id="vs-play">' + L('Play / reset', 'Play / reset') + '</button>' + (p.reduced ? '<span class="vs-chip unknown">' + ic('info') + 'prefers-reduced-motion: reduce</span>' : '') + '</div>') +
        '<div style="height:16px"></div>' + card(L('Focus ring', 'Anel de foco'), L('2px solid, 2px offset, on :focus-visible. Tab through the controls below.', '2px sólido, offset de 2px, em :focus-visible. Use Tab nos controles abaixo.'), '<div class="vs-focus-demo"><button class="vs-btn primary on" type="button">' + L('Primary', 'Primário') + '</button><button class="vs-btn secondary" type="button">' + L('Secondary', 'Secundário') + '</button><input class="vs-in" style="width:180px" placeholder="Tab" aria-label="Focus demo"><button class="vs-btn destructive" type="button" style="outline:2px solid #10142B;outline-offset:2px">' + L('Destructive (ring #10142B)', 'Destrutivo (anel #10142B)') + '</button></div>');
    },
    setup: function (stage) {
      var b = stage.querySelector('#vs-play'), m = stage.querySelector('#vs-mo');
      var tx = function () { return Math.max(40, m.querySelector('.tr').clientWidth - 34); };
      b.addEventListener('click', function () { m.style.setProperty('--tx', tx() + 'px'); m.classList.toggle('go'); });
    } });

  add({ id: 'icons', group: 'foundations', name: ['Icons', 'Ícones'], wide: true, docs: true,
    desc: ['One family: 1.5 stroke on a 20 grid, currentColor, round caps and joins. Twelve base icons.', 'Uma família só: traço de 1.5 em grade de 20, currentColor, pontas e junções redondas. Doze ícones base.'],
    props: { size: [SEL(['16', '18', '20', '24']), '24'], color: [SEL(['ink', 'brand', 'low', 'review', 'high']), 'ink'] },
    tokens: [['--icon-stroke', '1.5'], ['--icon-sm', '16px · chip'], ['--icon-md', '18px · button, table row'], ['--icon-lg', '24px · empty state'], ['viewBox', '0 0 20 20']],
    usage: function () { return '<svg viewBox="0 0 20 20" width="18" height="18" fill="none"\n     stroke="currentColor" stroke-width="1.5"\n     stroke-linecap="round" stroke-linejoin="round"\n     aria-hidden="true">\n  <circle cx="10" cy="10" r="7.5"/>\n  <path d="M6.8 10.2l2.2 2.2 4.2-4.6"/>\n</svg>'; },
    rules: [['Sizes: 16 in a chip, 18 in a button and table row, 20 in sets, 24 in an empty state.', 'Tamanhos: 16 em chip, 18 em botão e linha de tabela, 20 em conjunto, 24 em estado vazio.'], ['Decorative icons get aria-hidden="true". An icon that carries meaning alone needs a text alternative. An icon-only button needs aria-label and a 40×40 target (44 on mobile).', 'Ícone decorativo leva aria-hidden="true". Ícone que carrega significado sozinho precisa de alternativa textual. Botão só de ícone precisa de aria-label e alvo de 40×40 (44 no mobile).']],
    render: function (p) {
      var names = ['approved', 'review', 'rejected', 'unknown', 'pending', 'capture', 'liveness', 'subject', 'search', 'filter', 'evidence', 'export'];
      var col = { ink: 'var(--ink)', brand: 'var(--brand-500)', low: 'var(--risk-low)', review: 'var(--risk-review)', high: 'var(--risk-high)' }[p.color];
      return card(L('Base set', 'Conjunto base'), null, '<div class="vs-ico" style="--is:' + p.size + 'px;--ic:' + col + '">' + names.map(function (n) { return '<div>' + ic(n) + '<span style="color:var(--mut)">' + n + '</span></div>'; }).join('') + '</div>');
    } });

  add({ id: 'breakpoints', group: 'foundations', name: ['Breakpoints', 'Breakpoints'], wide: true, docs: true,
    desc: ['Four named widths. Zero horizontal scroll at 320 and 375.', 'Quatro larguras nomeadas. Zero scroll horizontal em 320 e 375.'],
    tokens: [['--bp-md', '600px'], ['--bp-lg', '900px'], ['--bp-xl', '1280px'], ['--content-max', '1240px'], ['--target-desktop', '40px'], ['--target-mobile', '44px'], ['z-index', '0 / 10 / 20 / 40 / 100 / 1000']],
    rules: [['200% zoom must not hide the primary action: it stays in the flow, not in a fixed bar.', 'O zoom de 200% não pode esconder a ação primária: ela fica no fluxo, não em barra fixa.'], ['Below 900px the sidebar collapses into a drawer and the data table becomes a list of cards. After a route change, move focus to the main content; going back restores scroll, filter and input.', 'Abaixo de 900px a sidebar colapsa em gaveta e a tabela vira lista de cards. Após transição de rota, mover o foco para o conteúdo principal; voltar restaura scroll, filtro e input.']],
    render: function () {
      var bp = [['sm', '< 600', L('4 col · gutter 16 · margin 20', '4 col · gutter 16 · margem 20'), '44'], ['md', '≥ 600', L('8 col · gutter 20 · margin 32 · sidebar as drawer', '8 col · gutter 20 · margem 32 · sidebar em gaveta'), '44'], ['lg', '≥ 900', L('12 col · gutter 24 · fixed sidebar', '12 col · gutter 24 · sidebar fixa'), '40'], ['xl', '≥ 1280', L('12 col · content locked at 1240', '12 col · conteúdo travado em 1240'), '40']];
      return card(L('Your viewport right now', 'Seu viewport agora'), null, '<div class="vs-bp" id="vs-bp"><div data-b="sm">sm</div><div data-b="md">md</div><div data-b="lg">lg</div><div data-b="xl">xl</div></div><p class="vs-helper" id="vs-bpw"></p>') +
        card(L('Grid and touch target', 'Grade e alvo de toque'), null, table([L('Name', 'Nome'), L('Width', 'Largura'), L('Grid', 'Grade'), L('Touch target', 'Alvo de toque')], bp.map(function (b) { return [b[0], b[1], b[2], b[3]]; })));
    },
    setup: function (stage) {
      function upd() { var w = window.innerWidth, n = w >= 1280 ? 'xl' : w >= 900 ? 'lg' : w >= 600 ? 'md' : 'sm'; stage.querySelectorAll('#vs-bp div').forEach(function (d) { d.classList.toggle('on', d.dataset.b === n); }); var o = stage.querySelector('#vs-bpw'); if (o) o.textContent = w + ' px'; }
      upd(); window.addEventListener('resize', upd); cleanup = function () { window.removeEventListener('resize', upd); };
    } });

  /* ---------------- Componentes ---------------- */
  function btnHtml(p, extra) {
    var spin = p.loading ? '<span class="vs-spin" aria-hidden="true"></span>' : '';
    var icn = !p.loading && p.icon ? ic(p.icon) : '';
    return '<button type="button" class="vs-btn ' + p.variant + (p.size === 'mobile' ? ' m' : '') + '"' + (p.disabled || p.loading ? ' disabled' : '') + (p.loading ? ' aria-busy="true"' : '') + '>' + spin + icn + esc(p.loading ? L('Sending…', 'Enviando…') : p.label) + '</button>';
  }
  add({ id: 'button', group: 'components', name: ['Button', 'Button'],
    desc: ['Four variants. One primary action per screen. Disabled is a real attribute and always says what is missing.', 'Quatro variantes. Uma ação primária por tela. Disabled é atributo real e sempre diz o que falta.'],
    props: { label: [TXT, 'Send link to subject'], variant: [SEL(['primary', 'secondary', 'ghost', 'destructive']), 'primary'], size: [SEL(['desktop', 'mobile']), 'desktop'], icon: [SEL(['', 'export', 'search', 'link']), ''], loading: [BOOL, false], disabled: [BOOL, false] },
    tokens: [['height', '40 desktop · 44 mobile and subject flow'], ['padding', '11px 18px (ghost 11px 12px)'], ['--radius-md', '6px'], ['type', 'label · Geist 500 / 13'], ['icon', '18, gap 8'], ['primary', '#232C6B → hover #3742A8'], ['secondary', '#FFF · border #B6BBD0 → #232C6B'], ['ghost', 'text #2B3486 → bg #F0F2FB'], ['destructive', '#B3261E → hover #8C1D18'], ['disabled', '#EBEDF4 · #6A7192 · #D7DAE8']],
    rules: [['One primary action per screen. Keep the destructive action spatially apart from the primary.', 'Uma ação primária por tela. Ação destrutiva separada espacialmente da primária.'], ['disabled is a real attribute, not just opacity, and always comes with text beside it saying what is missing to enable it.', 'disabled é atributo real, não só opacidade, e vem sempre com texto ao lado dizendo o que falta para habilitar.'], ['An async button disables itself and shows progress (aria-busy).', 'Botão em operação assíncrona desabilita e mostra progresso (aria-busy).'], ['The button names the result: "Send link to subject", never "Submit".', 'O botão nomeia o resultado: "Enviar link ao titular", nunca "Submeter".']],
    usage: function (p) { return '<button type="button" class="btn btn--' + p.variant + (p.size === 'mobile' ? ' btn--lg' : '') + '"' + (p.loading ? ' aria-busy="true"' : '') + (p.disabled || p.loading ? ' disabled' : '') + '>\n' + (p.icon ? '  <svg class="ic" aria-hidden="true">…</svg>\n' : '') + '  ' + p.label + '\n</button>' + (p.disabled ? '\n<p class="helper">Select a reason to enable this action.</p>' : ''); },
    render: function (p) {
      return '<div><div class="vs-row">' + btnHtml(p) + '</div>' + (p.disabled ? '<p class="vs-helper">' + L('Fill the required field to enable this action.', 'Preencha o campo obrigatório para habilitar esta ação.') + '</p>' : '') + '</div>' +
        '<div style="width:100%;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:8px">' + ['primary', 'secondary', 'ghost', 'destructive'].map(function (v) { return btnHtml({ label: v, variant: v, size: p.size, icon: '', loading: false, disabled: false }); }).join('') + btnHtml({ label: 'disabled', variant: 'primary', size: p.size, disabled: true }) + '</div>';
    } });

  add({ id: 'iconButton', group: 'components', name: ['Icon button', 'Icon button'],
    desc: ['Icon-only action. The accessible name is mandatory.', 'Ação só com ícone. O nome acessível é obrigatório.'],
    props: { icon: [SEL(['search', 'filter', 'export', 'evidence', 'plus', 'x']), 'filter'], label: [TXT, 'Filter results'], size: [SEL(['desktop', 'mobile']), 'desktop'] },
    tokens: [['size', '40×40 · 44 mobile'], ['--radius-md', '6px'], ['icon', '18'], ['border', '1px #B6BBD0'], ['aria-label', L('required', 'obrigatório')]],
    rules: [['aria-label is mandatory. The target is 40×40, 44 on mobile, with at least 8px between targets.', 'aria-label é obrigatório. O alvo é 40×40, 44 no mobile, com gap mínimo de 8.']],
    usage: function (p) { return '<button type="button" class="icon-btn"\n        aria-label="' + p.label + '">\n  <svg class="ic" aria-hidden="true">…</svg>\n</button>'; },
    render: function (p) { return '<button type="button" class="vs-ibtn' + (p.size === 'mobile' ? ' m' : '') + '" aria-label="' + esc(p.label) + '" title="' + esc(p.label) + '">' + ic(p.icon) + '</button>'; } });

  add({ id: 'input', group: 'components', name: ['Input / Select / Textarea', 'Input / Select / Textarea'],
    desc: ['Visible label above, persistent helper below. Validate on blur, and say cause and fix.', 'Rótulo visível acima, ajuda persistente abaixo. Valida no blur e diz causa e correção.'],
    props: { kind: [SEL(['input', 'select', 'textarea']), 'input'], state: [SEL(['default', 'focus', 'error', 'disabled']), 'default'], label: [TXT, 'CPF'], helper: [TXT, '11 digits, numbers only.'], error: [TXT, 'Check digit does not match. Type the 11 numbers again.'] },
    tokens: [['height', '40 · 44 mobile'], ['padding', '11px 12px'], ['--radius-sm', '4px'], ['border', '1px #B6BBD0'], ['text', '14 · #10142B'], ['helper', '12 · #4E5573'], ['focus', 'border #4756C9 + 0 0 0 3px rgba(71,86,201,.18)'], ['error', 'border #B3261E · text #8C1D18 · icon 14'], ['label', 'Geist 500 / 13 · gap 6']],
    rules: [['A visible label always sits above the field. A placeholder never replaces the label.', 'Label visível sempre acima. Placeholder nunca substitui label.'], ['Validate on blur, not on every keystroke. The message states cause and fix.', 'Validação no blur, não a cada tecla. A mensagem diz causa e correção.'], ['Error: aria-invalid="true" and aria-describedby pointing to the message, plus a 14px icon.', 'Erro: aria-invalid="true" e aria-describedby apontando para a mensagem, mais ícone de 14.'], ['Use a semantic type (tel, email, number) and autocomplete. Mask CPF, CNPJ, CEP and mobile in the Brazilian format. Mobile input is 16px minimum.', 'Use type semântico (tel, email, number) e autocomplete. Máscara de CPF, CNPJ, CEP e celular no formato BR. Input no mobile tem 16px no mínimo.']],
    usage: function (p) { var e = p.state === 'error'; return '<div class="field' + (e ? ' field--error' : '') + '">\n  <label for="cpf">' + p.label + '</label>\n  <' + (p.kind === 'input' ? 'input' : p.kind) + ' id="cpf" ' + (p.kind === 'input' ? 'type="text" inputmode="numeric" autocomplete="off" ' : '') + (e ? 'aria-invalid="true" aria-describedby="cpf-msg" ' : 'aria-describedby="cpf-msg" ') + (p.state === 'disabled' ? 'disabled ' : '') + (p.kind === 'select' ? '>…</select' : p.kind === 'textarea' ? '></textarea' : '/') + '>\n  <p id="cpf-msg" class="field__msg">' + (e ? p.error : p.helper) + '</p>\n</div>'; },
    render: function (p) {
      var e = p.state === 'error', id = 'vsf';
      var attrs = ' id="' + id + '" class="vs-in' + (p.state === 'focus' ? ' is-focus' : '') + '"' + (p.state === 'disabled' ? ' disabled' : '') + (e ? ' aria-invalid="true"' : '') + ' aria-describedby="' + id + '-m"';
      var ctl = p.kind === 'textarea' ? '<textarea' + attrs + ' placeholder="' + L('Describe the case', 'Descreva o caso') + '"></textarea>' : p.kind === 'select' ? '<select' + attrs + '><option>' + L('Choose a document', 'Escolha um documento') + '</option><option>CNH</option><option>RG</option></select>' : '<input' + attrs + ' type="text" inputmode="numeric" value="' + (e ? '123.456.789-0' : '') + '" placeholder="000.000.000-00">';
      return '<div class="w-320"><div class="vs-field' + (e ? ' err' : '') + '"><label for="' + id + '">' + esc(p.label) + '</label>' + ctl + '<p class="vs-msg" id="' + id + '-m">' + (e ? ic('warn') + '<span>' + esc(p.error) + '</span>' : esc(p.helper)) + '</p></div></div>';
    } });

  add({ id: 'consent', group: 'components', name: ['Consent checkbox', 'Checkbox de consentimento'], lightOnly: true,
    desc: ['Biometrics is mandatory and labelled so. Marketing is a separate, optional, unchecked checkbox, never bundled.', 'Biometria é obrigatória e marcada como tal. Marketing é um checkbox separado, opcional e desmarcado, nunca agrupado.'],
    props: { biometrics: [BOOL, false], marketing: [BOOL, false], consent_version: [TXT, '2025-03.v2'] },
    tokens: [['checkbox', '18×18 · accent-color #232C6B · margin-top 2'], ['gap', '10 · text 13 / 1.5'], ['block', 'padding 14 · bg #F0F2FB · border 1px #BCC3EE · --radius-md'], ['consent_version', L('recorded with every acceptance', 'registrado a cada aceite')]],
    rules: [['Biometrics is mandatory, marked "Required". Marketing is separate, optional and unchecked by default, never grouped with biometrics.', 'Biometria é obrigatória e marcada "Obrigatório". Marketing é um checkbox separado, opcional, desmarcado por padrão, nunca agrupado com a biometria.'], ['Always record the accepted text version (consent_version).', 'Registrar sempre a versão do texto aceito (consent_version).'], ['Tab order in the subject flow: step title, consent, required checkbox, optional checkbox, primary action, secondary action.', 'Ordem no fluxo do titular: título da etapa, consentimento, checkbox obrigatório, checkbox opcional, ação primária, ação secundária.']],
    usage: function (p) { return '<fieldset class="consent" data-consent-version="' + p.consent_version + '">\n  <label class="cb">\n    <input type="checkbox" required' + (p.biometrics ? ' checked' : '') + '>\n    <span>I agree to the processing of my facial biometrics. <b>Required</b></span>\n  </label>\n  <label class="cb">\n    <input type="checkbox"' + (p.marketing ? ' checked' : '') + '>\n    <span>I accept to receive offers. (optional)</span>\n  </label>\n</fieldset>'; },
    render: function (p) {
      return '<div class="w-360"><div class="vs-consent"><div class="t">' + L('To confirm your identity we compare your selfie with your document. Your image is used only for this verification.', 'Para confirmar sua identidade, comparamos sua selfie com o documento. Sua imagem é usada só nesta verificação.') + '</div>' +
        '<label class="vs-cb"><input type="checkbox" id="vs-bio"' + (p.biometrics ? ' checked' : '') + '><span>' + L('I agree to the processing of my facial biometrics.', 'Concordo com o tratamento da minha biometria facial.') + '<span class="req">' + L('Required', 'Obrigatório') + '</span></span></label>' +
        '<label class="vs-cb"><input type="checkbox" id="vs-mk"' + (p.marketing ? ' checked' : '') + '><span class="opt">' + L('I want to receive offers and news. (optional)', 'Quero receber ofertas e novidades. (opcional)') + '</span></label>' +
        '<span class="vs-ver">consent_version: ' + esc(p.consent_version) + '</span></div>' +
        '<div style="margin-top:14px"><button type="button" class="vs-btn primary m" id="vs-go" style="width:100%"' + (p.biometrics ? '' : ' disabled') + '>' + L('Continue', 'Continuar') + '</button><p class="vs-helper" id="vs-gh"' + (p.biometrics ? ' hidden' : '') + '>' + L('Accept the required consent to continue.', 'Aceite o consentimento obrigatório para continuar.') + '</p></div></div>';
    },
    setup: function (stage) {
      var b = stage.querySelector('#vs-bio'), g = stage.querySelector('#vs-go'), h = stage.querySelector('#vs-gh');
      b.addEventListener('change', function () { g.disabled = !b.checked; h.hidden = b.checked; });
    } });

  add({ id: 'chip', group: 'components', name: ['Chip (state and risk)', 'Chip (estado e risco)'],
    desc: ['Every chip carries an icon and a word. Color is never the only indicator.', 'Todo chip leva ícone e palavra. A cor nunca é o único indicador.'],
    props: { kind: [SEL(['low', 'review', 'high', 'unknown', 'info']), 'review'], label: [TXT, ''] },
    tokens: [['padding', '5px 11px'], ['--radius-pill', '999px'], ['border', '1px · base color at .28 alpha'], ['text', '12 · Geist 500 · band ink color'], ['icon', '16, gap 6'], ['--risk-*-bg / --risk-*-ink', L('per band', 'por faixa')], ['info', '#F0F2FB · #BCC3EE · #2B3486']],
    rules: [['Icon + word on every variant. When a collection overflows the width, wrap onto more lines; do not shrink the text.', 'Ícone + palavra em toda variação. Quando a coleção estoura a largura, quebre em várias linhas; não encolha o texto.'], ['A "+3" overflow must be an operable control (a button), not plain text.', 'O overflow do tipo "+3" precisa ser um controle operável (botão), não texto solto.'], ['The informative variant is for link states such as "Link opened".', 'A variante informativa é para estados de link como "Link aberto".']],
    usage: function (p) { return '<span class="chip chip--' + p.kind + '">\n  <svg class="ic" aria-hidden="true">…</svg>\n  ' + (p.label || L((p.kind === 'info' ? 'Link opened' : rk(p.kind).name[0]), (p.kind === 'info' ? 'Link aberto' : rk(p.kind).name[1]))) + '\n</span>'; },
    render: function (p) {
      return '<div style="width:100%;text-align:center">' + chip(p.kind, p.label) + '</div><div class="vs-chips" style="justify-content:center">' + ['low', 'review', 'high', 'unknown', 'info'].map(function (k) { return chip(k); }).join('') + '<button type="button" class="vs-chip info" style="cursor:pointer" aria-label="' + L('Show 3 more', 'Mostrar mais 3') + '">+3</button></div>';
    } });

  add({ id: 'scorebar', group: 'components', name: ['Score bar', 'Barra de score'],
    desc: ['A three-band gradient with a marker. The number and the band color repeat the value.', 'Um gradiente de três faixas com marcador. O número e a cor da faixa repetem o valor.'],
    props: { score: [RNG(0, 100), 84], label: [TXT, 'Risk score'] },
    tokens: [['height', '8 · --radius-pill'], ['gradient', 'linear-gradient(90deg, #0F7A4A 0 30%, #B06A00 30% 70%, #B3261E 70% 100%)'], ['marker', '3×16 · radius 2 · #10142B'], ['value', 'Geist 600 · tabular · band ink'], ['scale', '0 auto · 30 · 70 · 100 · micro #4E5573']],
    rules: [['Overline on the left, "84 / 100" on the right in the band color with tabular numerals. Below, the scale 0 auto · 30 · 70 · 100 in micro.', 'Overline à esquerda e "84 / 100" à direita na cor da faixa, tabular. Abaixo, a escala 0 auto · 30 · 70 · 100 em micro.'], ['Admin only. The subject never sees a score.', 'Só no painel admin. O titular nunca vê score.']],
    usage: function (p) { return '<div class="score" role="meter" aria-valuemin="0" aria-valuemax="100"\n     aria-valuenow="' + p.score + '" aria-label="' + p.label + '">\n  <div class="score__bar"><i style="left:' + p.score + '%"></i></div>\n</div>'; },
    render: function (p) {
      var b = band(+p.score);
      return '<div class="w-360 vs-score"><div class="top"><span class="vs-ovl">' + esc(p.label) + '</span><span class="val" style="color:var(--risk-' + b + '-ink)">' + p.score + ' / 100</span></div><div class="vs-bar" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p.score + '" aria-label="' + esc(p.label) + '"><i style="left:' + p.score + '%"></i></div><div class="vs-scale"><span>0</span><span>' + L('auto', 'auto') + '</span><span>30</span><span>70</span><span>100</span></div></div>';
    } });

  add({ id: 'bignumber', group: 'components', name: ['Big number', 'Big number'],
    desc: ['A KPI tile. A missing value is an em dash, never zero. A stale value is dimmed with a notice above.', 'Um tile de KPI. Valor ausente é travessão, nunca zero. Valor desatualizado fica esmaecido com aviso acima.'],
    props: { label: [TXT, 'Verifications today'], value: [TXT, '1.284'], delta: [TXT, '+12,4% vs. last week'], tone: [SEL(['positive', 'negative', 'neutral']), 'positive'], stale: [BOOL, false], missing: [BOOL, false] },
    tokens: [['padding', '16 · radius 10'], ['bg / border', '#F5F6FA · 1px #EBEDF4'], ['overline', '#4E5573'], ['number', 'Geist 600 · 24–28 · tabular'], ['delta', '12 · #0B5C37 / #8C1D18 / #4E5573'], ['stale', 'opacity .68 + notice above']],
    rules: [['Missing value is "—", never 0. Stale value uses opacity .68 with a notice above it.', 'Valor ausente é "—", nunca 0. Valor desatualizado usa opacity .68 com aviso acima.']],
    usage: function (p) { return '<div class="big' + (p.stale ? ' big--stale' : '') + '">\n' + (p.stale ? '  <p class="big__stale">Updated 3 h ago</p>\n' : '') + '  <span class="overline">' + p.label + '</span>\n  <p class="num">' + (p.missing ? '—' : p.value) + '</p>\n  <p class="delta delta--' + p.tone + '">' + p.delta + '</p>\n</div>'; },
    render: function (p) {
      var cls = p.tone === 'positive' ? 'pos' : p.tone === 'negative' ? 'neg' : '';
      return '<div class="vs-big' + (p.stale ? ' stale' : '') + '">' + (p.stale ? '<div class="stl" style="opacity:1">' + L('Updated 3 h ago', 'Atualizado há 3 h') + '</div>' : '') + '<div class="vs-ovl">' + esc(p.label) + '</div><div class="n vs-num">' + (p.missing ? '—' : esc(p.value)) + '</div><div class="d ' + cls + '">' + esc(p.delta) + '</div></div>';
    } });

  add({ id: 'funnel', group: 'components', name: ['Funnel', 'Funil'],
    desc: ['Where does the subject give up? The camera-permission step always gets a dashed amber outline.', 'Onde o titular desiste? A etapa de permissão de câmera sempre recebe um contorno tracejado âmbar.'],
    props: { camera: [RNG(100, 820), 610] },
    tokens: [['bar', '22 high · --radius-sm · gap 6'], ['label', '12 · right · fixed 124'], ['colors', '#232C6B · #3742A8 · #4756C9 · #6C79D4'], ['camera step', 'outline: 2px dashed #B06A00; outline-offset: 2px']],
    rules: [['Descending gradient of brand colors. The camera-permission step carries outline: 2px dashed #B06A00 in every funnel chart.', 'Degradê descendente de cores de marca. A etapa de permissão de câmera recebe outline: 2px dashed #B06A00 em todo gráfico de funil.'], ['Always provide a table or trend summary as an accessible alternative.', 'Sempre oferecer tabela ou sumário de tendência como alternativa acessível.']],
    usage: function () { return '.funnel__bar { height: 22px; border-radius: var(--radius-sm); }\n.funnel__bar--camera {\n  outline: 2px dashed var(--risk-review);\n  outline-offset: 2px;\n}'; },
    render: function (p) {
      var c = +p.camera, steps = [[L('Link sent', 'Link enviado'), 1000, '#232C6B'], [L('Link opened', 'Link aberto'), 820, '#3742A8'], [L('Camera allowed', 'Câmera permitida'), c, '#4756C9', 1], [L('Completed', 'Concluído'), Math.round(c * 0.86), '#6C79D4']];
      var fmt = function (n) { return n.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US'); };
      return '<div class="w-480 vs-fn" style="padding:6px 4px 6px 6px">' + steps.map(function (s) { return '<div class="r"><div class="tr"><div class="b' + (s[3] ? ' cam' : '') + '" style="width:' + (s[1] / 10) + '%;background:' + s[2] + '"></div></div><span class="l">' + s[0] + ' · ' + fmt(s[1]) + '</span></div>'; }).join('') + '</div>';
    } });

  add({ id: 'alert', group: 'components', name: ['Alert (inline)', 'Alert (inline)'],
    desc: ['Three variants. The technical-honesty notice is fixed, mandatory text.', 'Três variantes. O aviso de honestidade técnica é um texto fixo e obrigatório.'],
    props: { variant: [SEL(['info', 'warn', 'neutral']), 'info'], title: [TXT, 'Heads up'], text: [TXT, 'Links expire after 24 hours. You can resend it at any time.'], honesty: [BOOL, false] },
    tokens: [['padding', '14 · --radius-md'], ['icon', '18, gap 11, top-aligned'], ['text', '13 / 1.55'], ['info', '#F0F2FB · #BCC3EE'], ['warn', '#FBF0DF · rgba(176,106,0,.28)'], ['neutral', '#EEF0F2 · rgba(16,20,43,.16)']],
    rules: [['Mandatory fixed text in the UI and in the README: "Demo prototype. Detection uses computer vision and generative AI and does not replace certified liveness (ISO/IEC 30107-3)."', 'Texto fixo obrigatório na UI e no README: "Protótipo de demonstração. A detecção usa visão computacional e IA generativa e não substitui prova de vida certificada (ISO/IEC 30107-3)."']],
    usage: function (p) { return '<div class="alert alert--' + (p.honesty ? 'neutral' : p.variant) + '" role="note">\n  <svg class="ic" aria-hidden="true">…</svg>\n  <p>' + (p.honesty ? 'Demo prototype. …' : '<b>' + p.title + '</b> ' + p.text) + '</p>\n</div>'; },
    render: function (p) {
      var v = p.honesty ? 'neutral' : p.variant, body = p.honesty ? L('Demo prototype. Detection uses computer vision and generative AI and does not replace certified liveness (ISO/IEC 30107-3).', 'Protótipo de demonstração. A detecção usa visão computacional e IA generativa e não substitui prova de vida certificada (ISO/IEC 30107-3).') : '<b>' + esc(p.title) + '</b> ' + esc(p.text);
      return '<div class="w-480"><div class="vs-alert ' + (v === 'info' ? '' : v) + '" role="note">' + ic(v === 'warn' ? 'warn' : 'info') + '<p>' + body + '</p></div></div>';
    } });

  add({ id: 'toast', group: 'components', name: ['Toast', 'Toast'],
    desc: ['A polite, non-blocking confirmation. Never the only path of a destructive action.', 'Uma confirmação educada e não bloqueante. Nunca a única via de uma ação destrutiva.'],
    props: { kind: [SEL(['default', 'error']), 'default'], title: [TXT, 'Link sent'], body: [TXT, 'The subject received the SMS.'], action: [TXT, 'Undo'] },
    tokens: [['width', '320–400'], ['padding', '14 · --radius-md'], ['bg / border', '#FFFFFF · 1px #D7DAE8 (semantic color on error)'], ['--shadow-overlay', '0 4px 14px rgba(16,20,43,.1)'], ['type', 'title 13/500 · body 12 #4E5573 · action 12 #2B3486'], ['duration', '6s']],
    rules: [['Bottom right, 6s, role="status" with aria-live="polite", and it never steals focus.', 'Canto inferior direito, 6s, role="status" com aria-live="polite", sem roubar foco.']],
    usage: function (p) { return '<div class="toast' + (p.kind === 'error' ? ' toast--error' : '') + '" role="status" aria-live="polite">\n  <svg class="ic" aria-hidden="true">…</svg>\n  <div>\n    <p class="toast__t">' + p.title + '</p>\n    <p class="toast__b">' + p.body + '</p>\n    <button type="button" class="link">' + p.action + '</button>\n  </div>\n</div>'; },
    render: function (p) { return '<div class="w-360"><div class="vs-toast ' + (p.kind === 'error' ? 'error' : '') + '" role="status" aria-live="polite">' + ic(p.kind === 'error' ? 'warn' : 'approved') + '<div><div class="t">' + esc(p.title) + '</div><div class="b">' + esc(p.body) + '</div>' + (p.action ? '<button type="button" class="a" style="background:none;border:0;padding:0">' + esc(p.action) + '</button>' : '') + '</div></div></div>'; } });

  add({ id: 'dropdown', group: 'components', name: ['Dropdown', 'Dropdown'],
    desc: ['A menu of actions. A destructive item always comes after the divider.', 'Um menu de ações. O item destrutivo vem sempre depois do divisor.'],
    props: { width: [RNG(200, 320), 240], destructive: [BOOL, true] },
    tokens: [['min-width', '200 (default 240)'], ['padding', '6 · radius md+2 (8)'], ['--shadow-overlay', '0 4px 14px rgba(16,20,43,.1)'], ['item', '9px 10px · --radius-md · 13 · icon 16, gap 9'], ['hover', '#F0F2FB'], ['divider', '1px #EBEDF4 · margin 5px 4px'], ['destructive', '#8C1D18']],
    rules: [['Destructive item in #8C1D18, always after the divider. Closes with Esc; arrow keys move between items.', 'Item destrutivo em #8C1D18, sempre depois do divisor. Fecha com Esc; as setas movem entre os itens.']],
    usage: function () { return '<div class="menu" role="menu">\n  <button role="menuitem">Open session</button>\n  <button role="menuitem">Export report</button>\n  <hr>\n  <button role="menuitem" class="is-danger">Reject verification</button>\n</div>'; },
    render: function (p) {
      var it = [['evidence', L('Open session', 'Abrir sessão')], ['export', L('Export report', 'Exportar relatório')], ['link', L('Copy link', 'Copiar link')], ['filter', L('Filter by band', 'Filtrar por faixa')]];
      return '<div class="vs-dd" role="menu" style="width:' + p.width + 'px;max-width:100%">' + it.map(function (x) { return '<button type="button" role="menuitem">' + ic(x[0]) + x[1] + '</button>'; }).join('') + (p.destructive ? '<hr><button type="button" role="menuitem" class="dng">' + ic('rejected') + L('Reject verification', 'Reprovar verificação') + '</button>' : '') + '</div>';
    } });

  add({ id: 'tooltip', group: 'components', name: ['Tooltip', 'Tooltip'],
    desc: ['Reinforcement only. Never the sole path to a piece of information, never hover-only.', 'Só reforço. Nunca a única via de uma informação, nunca dependente de hover.'],
    props: { text: [TXT, 'The score combines liveness, document and device signals.'], open: [BOOL, true] },
    tokens: [['padding', '9px 11px · --radius-md'], ['bg', '#10142B'], ['text', '#DDE1F6 · 12 / 1.5'], ['max-width', '280'], ['--shadow-overlay', '0 4px 14px rgba(16,20,43,.1)']],
    rules: [['Opens on hover and on keyboard focus, closes with Esc, linked with aria-describedby. The same content must exist elsewhere on the page.', 'Abre no hover e no foco do teclado, fecha com Esc, ligado por aria-describedby. O mesmo conteúdo precisa existir em outro lugar da página.']],
    usage: function (p) { return '<button aria-describedby="tip-1" class="icon-btn" aria-label="What is the score?">…</button>\n<div id="tip-1" role="tooltip" class="tip">' + p.text + '</div>'; },
    render: function (p) { return '<div class="vs-tipwrap' + (p.open ? ' open' : '') + '" style="padding:6px 0"><div class="vs-tip" id="vs-tip" role="tooltip">' + esc(p.text) + '</div><button type="button" class="vs-ibtn" aria-describedby="vs-tip" aria-label="' + L('What is the score?', 'O que é o score?') + '">' + ic('info') + '</button></div>'; } });

  add({ id: 'modal', group: 'components', name: ['Modal', 'Modal'],
    desc: ['Traps focus, returns it to the trigger, Esc always closes. A destructive action needs a reason.', 'Prende o foco, devolve ao gatilho, Esc sempre fecha. Ação destrutiva exige motivo.'],
    props: { title: [TXT, 'Reject this verification?'], body: [TXT, 'The subject will be notified and this decision is recorded in the audit log.'], destructive: [BOOL, true] },
    tokens: [['max-width', '480 (560 for session detail)'], ['padding', '22 · --radius-lg (12)'], ['--shadow-modal', '0 14px 36px rgba(16,20,43,.16)'], ['--scrim', 'rgba(16,20,43,.48)'], ['structure', 'icon 20 + h4 + body 13 → fields → actions right, gap 10 → note 12'], ['--dur-base', '240ms']],
    rules: [['Traps focus, returns it to the trigger on close, Esc always closes, animates from the trigger in --dur-base. A modal is not a primary navigation flow.', 'Prende o foco, devolve ao gatilho ao fechar, Esc sempre fecha, anima a partir do gatilho em --dur-base. Modal não é fluxo de navegação primário.'], ['A destructive action requires a reason: the button stays disabled until one is selected.', 'Ação destrutiva exige motivo: o botão fica disabled até haver seleção.']],
    usage: function () { return '<div class="scrim">\n  <div role="dialog" aria-modal="true" aria-labelledby="m-t" class="modal">\n    <h4 id="m-t">Reject this verification?</h4>\n    …\n  </div>\n</div>'; },
    render: function (p) {
      var d = p.destructive;
      return '<div class="vs-scrim"><div class="vs-modal' + (d ? ' dng' : '') + '" role="dialog" aria-modal="true" aria-labelledby="vs-mt"><div class="hd">' + ic(d ? 'warn' : 'info') + '<div style="flex:1;min-width:0"><h4 id="vs-mt">' + esc(p.title) + '</h4><p class="bd">' + esc(p.body) + '</p>' +
        (d ? '<div class="vs-field"><label for="vs-reason">' + L('Reason', 'Motivo') + '</label><select class="vs-in" id="vs-reason"><option value="">' + L('Select a reason', 'Selecione um motivo') + '</option><option>' + L('Document looks altered', 'Documento parece adulterado') + '</option><option>' + L('Face does not match', 'Rosto não confere') + '</option><option>' + L('Other', 'Outro') + '</option></select></div>' : '') + '</div></div><div class="ac"><button type="button" class="vs-btn secondary">' + L('Cancel', 'Cancelar') + '</button><button type="button" class="vs-btn ' + (d ? 'destructive' : 'primary') + '" id="vs-mgo"' + (d ? ' disabled' : '') + '>' + (d ? L('Reject verification', 'Reprovar verificação') : L('Confirm', 'Confirmar')) + '</button></div><p class="nt" id="vs-mnt">' + (d ? L('Select a reason to enable the button.', 'Selecione um motivo para habilitar o botão.') : L('You can undo this from the session history.', 'Você pode desfazer pelo histórico da sessão.')) + '</p></div></div>';
    },
    setup: function (stage) {
      var s = stage.querySelector('#vs-reason'), g = stage.querySelector('#vs-mgo'), n = stage.querySelector('#vs-mnt');
      if (s) s.addEventListener('change', function () { g.disabled = !s.value; n.textContent = s.value ? L('This decision will be logged for audit.', 'Esta decisão será registrada para auditoria.') : L('Select a reason to enable the button.', 'Selecione um motivo para habilitar o botão.'); });
    } });

  var PEOPLE = [['Marina Duarte', ['2 min ago', 'há 2 min'], 12, 'low'], ['Rafael Teixeira', ['14 min ago', 'há 14 min'], 48, 'review'], ['Beatriz Nogueira Albuquerque de Vasconcelos Prado', ['38 min ago', 'há 38 min'], 84, 'high'], ['Caio Menezes', ['1 h ago', 'há 1 h'], null, 'unknown'], ['Helena Prado', ['2 h ago', 'há 2 h'], 27, 'low']];
  var STLAB = { low: ['Approved', 'Aprovado'], review: ['In review', 'Em revisão'], high: ['Rejected', 'Reprovado'], unknown: ['Unknown', 'Indeterminado'] };
  add({ id: 'table', group: 'components', name: ['Data table', 'Tabela de dados'],
    desc: ['52px rows, no zebra, score right-aligned in the band color, state as a chip with an icon. Below 900px it becomes a list of cards.', 'Linhas de 52px, sem zebra, score alinhado à direita na cor da faixa, estado como chip com ícone. Abaixo de 900px vira lista de cards.'],
    props: { rows: [RNG(1, 5), 5], sort: [SEL(['none', 'score-desc', 'score-asc']), 'none'] },
    tokens: [['header', '10px 20px · bg #F5F6FA · border-bottom #D7DAE8 · overline'], ['row', '52 high · 14px 20px · border-bottom #EBEDF4 · hover #F5F6FA'], ['columns', 'minmax(0,2fr) minmax(0,1fr) 84px 130px'], ['score', '15 · Geist 600 · tabular · right · band ink'], ['pagination', '12px 20px · 32 high buttons · current #232C6B']],
    rules: [['A long name truncates with an ellipsis and appears in full in the session panel, never in a mouse-only tooltip. Lists of 50+ items are virtualized.', 'Nome longo trunca com reticências e aparece completo no painel da sessão, nunca em tooltip só de mouse. Listas de 50+ itens são virtualizadas.'], ['Below 900px the table becomes a list of cards with subject, score and state.', 'Abaixo de 900px a tabela vira lista de cards com titular, score e estado.']],
    usage: function () { return '.table__row {\n  display: grid;\n  grid-template-columns: minmax(0,2fr) minmax(0,1fr) 84px 130px;\n  padding: 14px 20px; min-height: 52px;\n  border-bottom: 1px solid var(--n-100);\n}\n.table__score { text-align: right; font: 600 15px var(--font-text);\n  font-variant-numeric: tabular-nums; }'; },
    render: function (p) {
      var rows = PEOPLE.slice(0, +p.rows);
      if (p.sort !== 'none') rows = rows.slice().sort(function (a, b) { var x = a[2] == null ? -1 : a[2], y = b[2] == null ? -1 : b[2]; return p.sort === 'score-desc' ? y - x : x - y; });
      var arrow = function (k) { return p.sort.indexOf(k) === 0 ? ic(p.sort === 'score-asc' ? 'up' : 'chev') : ''; };
      return '<div class="vs-tw"><div class="vs-table" role="table" aria-label="' + L('Verifications', 'Verificações') + '"><div class="vs-tr h" role="row"><span class="vs-ovl" role="columnheader">' + L('Subject', 'Titular') + '</span><span class="vs-ovl" role="columnheader">' + L('Received', 'Recebido') + '</span><span class="vs-ovl" role="columnheader" style="justify-content:flex-end">' + arrow('score') + 'Score</span><span class="vs-ovl" role="columnheader">' + L('State', 'Estado') + '</span></div>' +
        rows.map(function (r) { return '<div class="vs-tr" role="row"><span class="nm" role="cell" title="' + esc(r[0]) + '">' + esc(r[0]) + '</span><span class="rc" role="cell">' + L(r[1][0], r[1][1]) + '</span><span class="sc ' + r[3] + '" role="cell">' + (r[2] == null ? '—' : r[2]) + '</span><span class="st" role="cell">' + chip(r[3], L(STLAB[r[3]][0], STLAB[r[3]][1])) + '</span></div>'; }).join('') +
        '<div class="vs-pg"><span>' + L('1–' + rows.length + ' of 148', '1–' + rows.length + ' de 148') + '</span><div class="pb"><button type="button" aria-label="' + L('Previous page', 'Página anterior') + '">‹</button><button type="button" aria-current="page">1</button><button type="button">2</button><button type="button">3</button><button type="button" aria-label="' + L('Next page', 'Próxima página') + '">›</button></div></div></div></div>';
    } });

  add({ id: 'empty', group: 'components', name: ['Empty state', 'Estado vazio'],
    desc: ['Say what is empty, why, and what to do next. One primary action.', 'Diga o que está vazio, por quê e qual é o próximo passo. Uma ação primária.'],
    props: { icon: [SEL(['search', 'evidence', 'subject', 'capture']), 'search'], title: [TXT, 'No verifications yet'], body: [TXT, 'Verifications appear here as soon as a subject opens a link. Send the first one to get started.'], action: [TXT, 'Send first link'] },
    tokens: [['padding', '26px 18px · radius 10'], ['border', '1px dashed #B6BBD0'], ['bg', '#F5F6FA · centered'], ['icon', '24–30 · #6C79D4'], ['title', '14 / 500'], ['body', '12 · #4E5573 · max 36ch']],
    rules: [['It states what is empty, why, and the next step. Body is capped at 36ch.', 'Diz o que está vazio, por quê e qual é o próximo passo. O corpo tem no máximo 36ch.']],
    usage: function (p) { return '<div class="empty">\n  <svg class="ic" aria-hidden="true">…</svg>\n  <h4>' + p.title + '</h4>\n  <p>' + p.body + '</p>\n  <button class="btn btn--primary">' + p.action + '</button>\n</div>'; },
    render: function (p) { return '<div class="w-360"><div class="vs-empty">' + ic(p.icon) + '<div class="t">' + esc(p.title) + '</div><div class="b">' + esc(p.body) + '</div>' + (p.action ? '<button type="button" class="vs-btn primary">' + esc(p.action) + '</button>' : '') + '</div></div>'; } });

  add({ id: 'skeleton', group: 'components', name: ['Skeleton', 'Skeleton'],
    desc: ['Placeholder bars with the geometry of the final content. Only after 1s of waiting.', 'Barras de espaço reservado com a geometria do conteúdo final. Só após 1s de espera.'],
    props: { lines: [RNG(1, 8), 4], pulse: [BOOL, true] },
    tokens: [['bar', '12 high · --radius-sm · #EBEDF4'], ['widths', '70% · 92% · 48%'], ['gap', '8'], ['threshold', '> 1s (none under 300ms)'], ['CLS', '< 0.1']],
    rules: [['Show only after 1s of waiting; under 300ms show nothing. Reserve the same height as the final content (CLS < 0.1). Under reduced motion the pulse becomes a static fill.', 'Só acima de 1s de espera; abaixo de 300ms, nenhum indicador. Reservar a mesma altura do conteúdo final (CLS < 0.1). Em reduced motion a pulsação vira fundo estático.']],
    usage: function () { return '<div class="skeleton" aria-busy="true" aria-live="polite">\n  <i style="width:70%"></i>\n  <i style="width:92%"></i>\n  <i style="width:48%"></i>\n</div>'; },
    render: function (p) { var w = [70, 92, 48], o = ''; for (var i = 0; i < +p.lines; i++) o += '<i style="width:' + w[i % 3] + '%"></i>'; return '<div class="w-360"><div class="vs-sk' + (p.pulse ? ' anim' : '') + '" aria-busy="true">' + o + '</div></div>'; } });

  add({ id: 'shell', group: 'components', name: ['Dashboard shell', 'Shell do painel'], wide: true,
    desc: ['Sidebar 232, topbar with breadcrumb and title, tabs. Under 900px the sidebar collapses into a drawer.', 'Sidebar de 232, topbar com breadcrumb e título, tabs. Abaixo de 900px a sidebar colapsa em gaveta.'],
    props: { active: [SEL(['Verifications', 'Review queue', 'Subjects', 'Evidence']), 'Verifications'] },
    tokens: [['sidebar', '232 · 16px 12px · bg #F5F6FA · border-right 1px #D7DAE8'], ['item', '9px 10px · --radius-md · 13 · icon 18, gap 10'], ['active', 'bg #232C6B · white · inset 3px 0 0 #939EE2 · aria-current="page"'], ['hover', '#EBEDF4'], ['topbar', '16px 20px · breadcrumb 11 + title 20 Libre Franklin 600 · 40 search'], ['tabs', '11px 0 · gap 20 · active inset 0 -2px 0 #232C6B']],
    rules: [['After a route change move focus to the main content; going back restores scroll, filter and input.', 'Após transição de rota, mover o foco para o conteúdo principal; voltar restaura scroll, filtro e input.'], ['The breadcrumb appears from 3 levels deep.', 'O breadcrumb aparece a partir de 3 níveis.']],
    render: function (p) {
      var nav = [['Verifications', 'approved', L('Verifications', 'Verificações')], ['Review queue', 'review', L('Review queue', 'Fila de revisão')], ['Subjects', 'subject', L('Subjects', 'Titulares')], ['Evidence', 'evidence', L('Evidence', 'Evidências')]];
      var cur = nav.filter(function (n) { return n[0] === p.active; })[0];
      return '<div class="vs-shw"><div class="vs-shell"><nav class="vs-side" aria-label="Main"><div class="lg"><img src="../assets/veroid-logo.png" alt="Vero ID"></div>' + nav.map(function (n) { return '<a href="#" onclick="return false"' + (n[0] === p.active ? ' aria-current="page"' : '') + '>' + ic(n[1]) + n[2] + '</a>'; }).join('') + '</nav>' +
        '<div class="vs-main"><div class="vs-top"><div style="display:flex;gap:10px;align-items:center"><button type="button" class="vs-ibtn vs-menubtn" aria-label="' + L('Open menu', 'Abrir menu') + '">' + ic('menu') + '</button><div><div class="bc">' + L('Organization · ', 'Organização · ') + cur[2] + '</div><h4>' + cur[2] + '</h4></div></div><input class="vs-in" type="search" placeholder="' + L('Search subject', 'Buscar titular') + '" aria-label="' + L('Search subject', 'Buscar titular') + '"></div>' +
        '<div class="vs-tabs"><a href="#" onclick="return false" aria-current="page">' + L('Overview', 'Visão geral') + '</a><a href="#" onclick="return false">' + L('Funnel', 'Funil') + '</a><a href="#" onclick="return false">' + L('Signals', 'Sinais') + '</a></div>' +
        '<div class="vs-body"><div class="vs-kpis"><div class="vs-big"><div class="vs-ovl">' + L('Verifications today', 'Verificações hoje') + '</div><div class="n vs-num">1.284</div><div class="d pos">+12,4%</div></div><div class="vs-big"><div class="vs-ovl">' + L('Approval rate', 'Taxa de aprovação') + '</div><div class="n vs-num">82%</div><div class="d">' + L('stable', 'estável') + '</div></div><div class="vs-big"><div class="vs-ovl">' + L('In review', 'Em revisão') + '</div><div class="n vs-num">37</div><div class="d neg">+9</div></div></div>' +
        '<div class="vs-score"><div class="top"><span class="vs-ovl">' + L('Average risk score', 'Score de risco médio') + '</span><span class="val" style="color:var(--risk-review-ink)">41 / 100</span></div><div class="vs-bar"><i style="left:41%"></i></div></div></div></div></div></div>';
    } });

  /* ---------------- Padrões ---------------- */
  add({ id: 'risk', group: 'patterns', name: ['Risk score and bands', 'Score de risco e faixas'], wide: true,
    desc: ['0–30 low, 31–70 review, 71–100 high, plus unknown. The score suggests; a person decides.', '0–30 baixo, 31–70 revisão, 71–100 alto, mais indeterminado. O score sugere; uma pessoa decide.'],
    props: { score: [RNG(0, 100), 58], unknown: [BOOL, false] },
    tokens: RISK.map(function (r) { return ['--risk-' + r.k, r.base + ' · ' + r.bg + ' · ' + r.ink]; }),
    rules: [['A high score is a suggested rejection, always reviewable. Unknown covers timeout, AI ceiling and liveness unavailable.', 'Score alto é reprovação sugerida, sempre revisável. Indeterminado cobre timeout, teto de IA e prova de vida indisponível.'], ['Admin only. The subject never sees a score or a fraud signal.', 'Só no painel admin. O titular nunca vê score nem sinal de fraude.'], ['Risk colors are fixed (never white-label) and always paired with an icon and a word.', 'Cores de risco fixas (nunca white-label) sempre com ícone e palavra.']],
    render: function (p) {
      var s = +p.score, k = p.unknown ? 'unknown' : band(s), r = rk(k);
      var live = '<div class="vs-card"><h3>' + L('Live example', 'Exemplo ao vivo') + '</h3><p class="lead">' + L('Move the score in Controls.', 'Mexa no score em Controles.') + '</p><div style="display:grid;gap:16px">' + (p.unknown ? '<div class="vs-score"><div class="top"><span class="vs-ovl">Risk score</span><span class="val" style="color:var(--risk-unknown-ink)">—</span></div><div class="vs-bar" style="opacity:.35"></div></div>' : '<div class="vs-score"><div class="top"><span class="vs-ovl">Risk score</span><span class="val" style="color:var(--risk-' + k + '-ink)">' + s + ' / 100</span></div><div class="vs-bar"><i style="left:' + s + '%"></i></div><div class="vs-scale"><span>0</span><span>' + L('auto', 'auto') + '</span><span>30</span><span>70</span><span>100</span></div></div>') + '<div class="vs-row">' + chip(k) + '</div><p class="vs-prose" style="font-size:13px"><b style="color:var(--ink)">' + L('Decision: ', 'Decisão: ') + '</b>' + L(r.dec[0], r.dec[1]) + '</p></div></div>';
      var bands = '<div class="vs-card"><h3>' + L('Bands', 'Faixas') + '</h3><p class="lead">&nbsp;</p><div class="vs-bands">' + RISK.map(function (x) { return '<div class="' + (x.k === k ? 'act' : '') + '" style="--b:var(--risk-' + x.k + '-bg);--bc:var(--cbd-' + x.k + ')"><span>' + chip(x.k) + '</span><span><b style="color:var(--risk-' + x.k + '-ink)">' + x.range + '</b> · ' + L(x.dec[0], x.dec[1]) + '</span></div>'; }).join('') + '</div></div>';
      return '<div class="vs-risk">' + live + bands + '</div>';
    } });

  add({ id: 'states', group: 'patterns', name: ['Required screen states', 'Estados de tela obrigatórios'], wide: true,
    desc: ['Every region that loads data implements five states, plus the camera-denied screen in the subject flow.', 'Toda região que carrega dado implementa cinco estados, mais a tela de câmera negada no fluxo do titular.'],
    tokens: [['loading', 'skeleton · final geometry'], ['empty', '3.16 empty state'], ['error', 'bg #FBE9E7 · border rgba(179,38,30,.28) · icon 24 · title 14/600 #8C1D18'], ['partial / stale', 'neutral notice #EEF0F2 above · old values opacity .68 · missing "—"'], ['camera denied', 'bg #FBF0DF · icon 24 · title 16/600 · body 14/1.6 · button 44']],
    rules: [['An error block states the cause, what to do and offers a recovery action.', 'O bloco de erro diz a causa, o que fazer e oferece uma ação de recuperação.'], ['Camera-denied: give browser-specific instructions (iOS Safari, Android Chrome), offer an alternative link ("finish with an agent") and log the event in the funnel.', 'Câmera negada: instruções específicas por navegador (iOS Safari, Android Chrome), uma alternativa em link ("conclua com um atendente") e registrar o evento no funil.']],
    render: function () {
      function tile(n, name, body) { return '<div class="vs-tile"><span class="vs-ovl"><b>' + n + '. ' + name + '</b></span>' + body + '</div>'; }
      return '<div class="vs-grid">' +
        tile(1, L('Loading', 'Carregando'), '<div class="vs-sk anim" aria-busy="true"><i style="width:70%"></i><i style="width:92%"></i><i style="width:48%"></i></div>') +
        tile(2, L('Empty', 'Vazio'), '<div class="vs-empty">' + ic('search') + '<div class="t">' + L('No verifications yet', 'Nenhuma verificação ainda') + '</div><div class="b">' + L('Send the first link to see results here.', 'Envie o primeiro link para ver resultados aqui.') + '</div><button class="vs-btn primary" type="button">' + L('Send first link', 'Enviar primeiro link') + '</button></div>') +
        tile(3, L('Error', 'Erro'), '<div class="vs-errb" role="alert">' + ic('warn') + '<div class="t">' + L('We could not load the list', 'Não foi possível carregar a lista') + '</div><div class="b">' + L('The connection dropped. Your filters are kept. Try again.', 'A conexão caiu. Seus filtros foram mantidos. Tente de novo.') + '</div><button class="vs-btn secondary" type="button">' + L('Try again', 'Tentar de novo') + '</button></div>') +
        tile(4, L('Partial / stale', 'Parcial / desatualizado'), '<div class="vs-stale-note">' + L('Data from 3 h ago. Some values are missing.', 'Dados de 3 h atrás. Alguns valores estão ausentes.') + '</div><div class="vs-big stale"><div class="vs-ovl">' + L('Approval rate', 'Taxa de aprovação') + '</div><div class="n vs-num">82%</div><div class="d">—</div></div>') +
        tile(5, L('Ready', 'Pronto'), '<div class="vs-big"><div class="vs-ovl">' + L('Approval rate', 'Taxa de aprovação') + '</div><div class="n vs-num">82%</div><div class="d pos">+2,1%</div></div>') +
        tile('+', L('Camera denied (subject)', 'Câmera negada (titular)'), '<div class="vs-den">' + ic('capture') + '<div class="t">' + L('Camera not enabled', 'Câmera não habilitada') + '</div><div class="b">' + L('We need the camera to confirm it is you. Open Settings, allow camera access and come back.', 'Precisamos da câmera para confirmar que é você. Abra os Ajustes, permita o acesso à câmera e volte.') + '</div><button class="vs-btn primary m btn" type="button">' + L('Try again', 'Tentar de novo') + '</button><a class="vs-link" href="#" onclick="return false" style="font-size:13px">' + L('Finish with an agent', 'Conclua com um atendente') + '</a></div>') + '</div>';
    } });

  add({ id: 'microcopy', group: 'patterns', name: ['Microcopy', 'Microcopy'], wide: true,
    desc: ['Portuguese is written first and English is reviewed against it, never machine-translated.', 'O português é escrito primeiro e o inglês revisado contra ele, nunca traduzido por máquina.'],
    tokens: [['i18n', 'react-i18next · PT-BR / EN'], ['SMS', '"{Organization}: {Name}, confirm your identity for {purpose}. Link valid for 24h: {url}"']],
    rules: [['For the subject: second person, short sentences, no risk jargon. They never see a score or fraud signal. For the analyst: the exact technical term. The button names the result.', 'Para o titular: segunda pessoa, frase curta, sem jargão de risco. Ele nunca vê score nem sinal de fraude. Para o analista: termo técnico exato. O botão nomeia o resultado.'], ['Never put sensitive data in the SMS message.', 'Nunca dado sensível na mensagem de SMS.']],
    render: function () {
      var pairs = [['Enviar link ao titular', 'Submeter', 'Send link to subject', 'Submit'], ['Aponte a câmera para o seu rosto e mantenha o celular parado.', 'Iniciando captura de prova de vida passiva.', 'Point the camera at your face and hold the phone still.', 'Starting passive liveness capture.'], ['Não conseguimos confirmar sua identidade agora. Um atendente vai te chamar em até 2 minutos.', 'Verificação reprovada. Score 84.', 'We could not confirm your identity right now. An agent will contact you within 2 minutes.', 'Verification failed. Score 84.'], ['Dígito verificador não confere. Digite os 11 números novamente.', 'Entrada inválida.', 'Check digit does not match. Type the 11 numbers again.', 'Invalid input.']];
      var yes = pairs.map(function (r) { return '<li>' + esc(lang === 'pt' ? r[0] : r[2]) + '</li>'; }).join(''), no = pairs.map(function (r) { return '<li>' + esc(lang === 'pt' ? r[1] : r[3]) + '</li>'; }).join('');
      return '<div class="vs-split"><div class="vs-ok"><h4>' + L('Write', 'Escreva') + '</h4><ul>' + yes + '</ul></div><div class="vs-no"><h4>' + L('Do not write', 'Não escreva') + '</h4><ul>' + no + '</ul></div></div>' +
        card(L('SMS template', 'Modelo de SMS'), L('Never sensitive data in the message.', 'Nunca dado sensível na mensagem.'), codeBlock(L('{Organization}: {Name}, confirm your identity for {purpose}. Link valid for 24h: {url}', '{Organização}: {Nome}, confirme sua identidade para {finalidade}. Link válido por 24h: {url}')));
    } });

  add({ id: 'whitelabel', group: 'patterns', name: ['White-label Brand Kit', 'Brand Kit white-label'], wide: true, lightOnly: true,
    desc: ['Pick a primary color: the system generates the 50–900 scale, measures contrast against white and refuses anything under 4.5:1.', 'Escolha uma cor primária: o sistema gera a escala 50–900, mede o contraste contra branco e recusa o que ficar abaixo de 4.5:1.'],
    props: { primary: [COLOR, '#232C6B'], radius: [SEL(['reto', 'suave', 'arredondado']), 'suave'] },
    tokens: [['--brand-primary', 'var(--brand-800)'], ['--brand-accent', 'var(--brand-500)'], ['dark --brand-primary', 'var(--brand-300)'], ['AA check', L('primary vs. white and vs. surface ≥ 4.5:1', 'primária vs. branco e vs. surface ≥ 4.5:1')], ['--radius-*', 'reto 0/2/6 · suave 4/6/12 · arredondado 8/12/20']],
    rules: [['The organization controls: light and dark logo, favicon, cover, primary/secondary/accent color, one of the eight approved families, the radius set and the tone of voice.', 'A organização controla: logo claro e escuro, favicon, capa, cor primária/secundária/destaque, uma das oito famílias aprovadas, o conjunto de raio e o tom de voz.'], ['The system controls: risk, success, warning and error colors; type scale; spacing; touch target; focus ring; the icon-with-color rule.', 'O sistema controla: cores de risco, sucesso, alerta e erro; escala tipográfica; espaçamento; alvo de toque; anel de foco; a regra de ícone junto de cor.'], ['On save the primary is tested against white and the surface. If it fails AA, the system proposes the nearest generated step that passes and shows the measured ratio.', 'Ao salvar, a primária é testada contra branco e contra o surface. Se falhar AA, o sistema propõe o passo mais próximo da escala gerada que passa e mostra a razão medida.'], ['Everything the subject sees uses the organization brand, with a discreet "Verification by Vero ID" in the footer.', 'Tudo o que o titular vê usa a marca da organização, com um discreto "Verificação por Vero ID" no rodapé.']],
    render: function (p) {
      var hex = /^#[0-9a-fA-F]{6}$/.test(p.primary) ? p.primary.toUpperCase() : '#232C6B';
      var sc = scaleFrom(hex), r800 = ratio(sc[800], '#FFFFFF'), pass = r800 >= 4.5, use = 800;
      if (!pass) { var order = [900, 700, 600, 500]; use = 0; order.forEach(function (s) { if (!use && ratio(sc[s], '#FFFFFF') >= 4.5) use = s; }); }
      var chosen = use ? sc[use] : sc[800];
      var rr = RADSET[p.radius] || RADSET.suave;
      var style = STEPS.map(function (s) { return '--brand-' + s + ':' + sc[s]; }).join(';') + ';--pri:' + chosen + ';--pri-h:' + (use ? sc[use === 900 ? 800 : 700] : sc[700]) + ';--ring:' + sc[500] + ';--link:' + (use ? chosen : sc[700]) + ';--hov:' + sc[50] + ';--radius-sm:' + rr[0] + 'px;--radius-md:' + rr[1] + 'px;--radius-lg:' + rr[2] + 'px';
      var presets = [['#232C6B', 'Vero'], ['#0F766E', 'Teal'], ['#7C3AED', 'Violet'], ['#F97316', 'Orange'], ['#EAB308', 'Yellow'], ['#DB2777', 'Pink']];
      var ramp = '<div class="vs-ramp">' + STEPS.map(function (s) { var r = ratio(sc[s], '#FFFFFF'); return '<div class="' + (r >= 4.5 ? 'ok' : 'bad') + '"><i style="background:' + sc[s] + '"></i><b>' + s + '</b><span>' + r.toFixed(1) + ':1</span></div>'; }).join('') + '</div>';
      var verdict = pass ? '<div class="vs-verdict ok" role="status">' + ic('approved') + '<span><b>' + L('Passes AA', 'Passa AA') + '</b> · ' + r800.toFixed(2) + ':1 ' + L('against white (min 4.5:1). Applied as the primary.', 'contra branco (mín. 4.5:1). Aplicada como primária.') + '</span></div>' :
        '<div class="vs-verdict bad" role="alert">' + ic('rejected') + '<span><b>' + L('Refused: fails AA', 'Recusada: não passa AA') + '</b> · ' + r800.toFixed(2) + ':1 ' + L('against white, under 4.5:1.', 'contra branco, abaixo de 4.5:1.') + ' ' + (use ? L('Nearest passing step: ', 'Passo mais próximo que passa: ') + '<b>' + use + '</b> (' + sc[use] + ', ' + ratio(sc[use], '#FFFFFF').toFixed(2) + ':1), ' + L('applied instead.', 'aplicado no lugar.') : L('No generated step passes. Choose a darker color.', 'Nenhum passo gerado passa. Escolha uma cor mais escura.')) + '</span></div>';
      var left = '<div style="display:grid;gap:16px"><div class="vs-card"><h3>' + L('Generated scale', 'Escala gerada') + '</h3><p class="lead">' + L('Each step with its contrast ratio against white. Green passes 4.5:1.', 'Cada passo com a razão de contraste contra branco. Verde passa 4.5:1.') + '</p><div class="vs-chips" style="margin-bottom:12px">' + presets.map(function (x) { return '<button type="button" class="vs-chip info" data-preset="' + x[0] + '" style="cursor:pointer"><span style="width:12px;height:12px;border-radius:50%;background:' + x[0] + ';display:inline-block"></span>' + x[1] + '</button>'; }).join('') + '</div>' + ramp + '<div style="margin-top:14px">' + verdict + '</div></div>' +
        '<div class="vs-card" style="' + style + '"><h3>' + L('Components with this brand', 'Componentes com esta marca') + '</h3><p class="lead">' + L('Same components, tenant tokens.', 'Mesmos componentes, tokens do tenant.') + '</p><div class="vs-row"><button class="vs-btn primary" type="button">' + L('Send link', 'Enviar link') + '</button><button class="vs-btn secondary" type="button">' + L('Secondary', 'Secundário') + '</button><button class="vs-btn ghost" type="button">' + L('Ghost', 'Ghost') + '</button>' + chip('info') + '</div><div style="margin-top:14px;max-width:300px"><div class="vs-field"><label for="vs-wl-i">CPF</label><input id="vs-wl-i" class="vs-in is-focus" placeholder="000.000.000-00"></div></div></div></div>';
      var right = '<div class="vs-card" style="' + style + '"><h3>' + L('Subject flow', 'Fluxo do titular') + '</h3><p class="lead">' + L('The tenant leads, Vero ID is a footer.', 'O tenant lidera, o Vero ID é rodapé.') + '</p><div class="vs-tenant"><span class="tl">' + L('tenant logo', 'logo do tenant') + '</span><div class="vs-phonewrap"><div id="vs-wl-phone"></div></div><span class="ft">' + L('Verification by', 'Verificação por') + ' <img src="../assets/veroid-logo.png" alt="Vero ID"></span></div></div>';
      return '<div class="vs-wl">' + left + right + '</div>';
    },
    setup: function (stage, p, api) {
      stage.querySelectorAll('[data-preset]').forEach(function (b) { b.addEventListener('click', function () { api.set('primary', b.dataset.preset); }); });
      var host = stage.querySelector('#vs-wl-phone'), card = host.closest('.vs-card'), accent = getComputedStyle(card).getPropertyValue('--pri').trim() || '#232C6B';
      var m = VX.mount(host, { screen: 'home', lang: lang, interactive: true });
      var dev = host.querySelector('.vx-dev'); dev.style.setProperty('--accent', accent);
    } });

  var A11Y = [
    ['Contrast: 4.5:1 for normal text, 3:1 for large text and meaningful icons. Checked in light and dark. #9198B5 is not a text color.', 'Contraste: 4.5:1 em texto normal, 3:1 em texto grande e em ícone ou limite significativo. Verificado em light e dark. #9198B5 não é cor de texto.'],
    ['Visible focus on everything, never covered by a sticky element or overlay.', 'Foco visível em tudo, nunca coberto por sticky ou overlay.'],
    ['Tab order equals visual order. No positive tabindex.', 'Ordem de tab = ordem visual. Sem tabindex positivo.'],
    ['Subject-flow order: step title, consent, required checkbox, optional checkbox, primary action, secondary action.', 'Ordem no fluxo do titular: título da etapa, consentimento, checkbox obrigatório, checkbox opcional, ação primária, ação secundária.'],
    ['Color is never the only indicator: always an icon or a word beside it.', 'Cor nunca é o único indicador: sempre ícone ou palavra junto.'],
    ['Targets of at least 44px on mobile and 40px on desktop, with a minimum gap of 8.', 'Alvos ≥44px no mobile, ≥40px no desktop, gap mínimo de 8.'],
    ['Text scales to 200% without truncating essential content.', 'Texto escala até 200% sem truncar conteúdo essencial.'],
    ['prefers-reduced-motion is respected and the final state is rendered.', 'prefers-reduced-motion respeitado com estado final renderizado.'],
    ['A submit error with several fields shows a focusable summary on top linking to each field, keeping the inline errors.', 'Erro de submit com vários campos: sumário focável no topo linkando cada campo, mantendo os erros inline.'],
    ['Every drag action has a click and a keyboard equivalent.', 'Toda ação de arrasto tem equivalente por clique e por teclado.'],
    ['Authentication allows a password manager and pasting.', 'Autenticação permite gerenciador de senha e colar.']
  ];
  var SHIP = [
    ['One style, consistent with the rest of the panel; no invented shadow or radius', 'Um estilo só, coerente com o resto do painel; nenhuma sombra ou raio inventado'], ['Semantic tokens in use; no raw hex in the component', 'Tokens semânticos em uso; nenhum hex cru no componente'], ['Light and dark truly tested (the subject flow only exists in light)', 'Light e dark testados de verdade (o fluxo do titular só existe em light)'], ['Contrast 4.5:1 on text, 3:1 on meaningful icons', 'Contraste 4.5:1 em texto, 3:1 em ícone significativo'], ['Focus visible and unobstructed; tab order equals visual order', 'Foco visível e não obstruído; ordem de tab igual à ordem visual'], ['Targets ≥40 desktop / ≥44 mobile, gap ≥8', 'Alvos ≥40 desktop / ≥44 mobile, gap ≥8'], ['Semantic disabled, with text saying what enables it', 'disabled semântico, com texto dizendo o que habilita'], ['Five states designed: loading, empty, error, partial, ready', 'Cinco estados desenhados: carregando, vazio, erro, parcial, pronto'], ['Error states cause and next step, with a recovery path', 'Erro diz causa e próximo passo, com caminho de recuperação'], ['Destructive action with mandatory reason, confirmation and audit log', 'Ação destrutiva com motivo obrigatório, confirmação e log de auditoria'], ['No horizontal scroll at 320 and 375', 'Sem scroll horizontal em 320 e 375'], ['No animation of width, height, top or left', 'Nenhuma animação de width, height, top ou left'], ['Images with declared dimensions; CLS < 0.1', 'Imagens com dimensão declarada; CLS < 0.1'], ['Copy reviewed in PT-BR and EN', 'Textos revisados em PT-BR e EN']
  ];
  add({ id: 'a11y', group: 'patterns', name: ['Accessibility and release checklist', 'Acessibilidade e checklist'], wide: true,
    desc: ['Accessibility is a build constraint, not a review step. Tick items as you check them.', 'Acessibilidade é constraint de build, não etapa de review. Marque os itens conforme verifica.'],
    tokens: [['contrast', '4.5:1 text · 3:1 large text and icons'], ['target', '≥44 mobile · ≥40 desktop · gap ≥8'], ['focus', '2px · offset 2px · never removed'], ['z-index', '0 / 10 / 20 / 40 / 100 / 1000']],
    rules: [['Check items on both light and dark, except the subject flow, which is light only.', 'Verifique os itens em light e dark, exceto o fluxo do titular, que é só light.']],
    render: function () {
      function list(arr, name) { return '<div class="vs-chk" data-list="' + name + '">' + arr.map(function (x, i) { return '<label><input type="checkbox"><span>' + esc(L(x[0], x[1])) + '</span></label>'; }).join('') + '</div><div style="margin-top:12px;display:flex;gap:12px;align-items:center"><div class="vs-prog" style="flex:1" aria-hidden="true"><i style="width:0%"></i></div><span class="vs-helper" style="margin:0" data-count="' + name + '"></span></div>'; }
      return card(L('Accessibility rules', 'Regras de acessibilidade'), null, list(A11Y, 'a')) + card(L('Before closing any screen', 'Antes de fechar qualquer tela'), null, list(SHIP, 's'));
    },
    setup: function (stage) {
      ['a', 's'].forEach(function (n) {
        var box = stage.querySelector('[data-list="' + n + '"]'), cnt = stage.querySelector('[data-count="' + n + '"]'), bar = box.parentNode.querySelector('.vs-prog i');
        function upd() { var all = box.querySelectorAll('input'), on = box.querySelectorAll('input:checked').length; cnt.textContent = on + ' / ' + all.length; bar.style.width = (on / all.length * 100) + '%'; }
        box.addEventListener('change', upd); upd();
      });
    } });

  add({ id: 'charts', group: 'patterns', name: ['Charts', 'Gráficos'], wide: true,
    desc: ['Recharts. Chart type follows the question, not aesthetics.', 'Recharts. O tipo de gráfico segue a pergunta, não a estética.'],
    tokens: [['funnel', '#232C6B · #3742A8 · #4756C9 · #6C79D4'], ['histogram bands', '#0F7A4A · #B06A00 · #B3261E'], ['data vs. background', '≥ 3:1'], ['label', '≥ 4.5:1']],
    rules: [['Never tell series apart by hue alone: add line style, pattern or a direct label.', 'Nunca distinguir série só por matiz: some estilo de linha, padrão ou rótulo direto.'], ['Always an accessible alternative (a table or a trend summary). Tooltip operable by keyboard. Axes with units.', 'Alternativa acessível sempre (tabela ou sumário de tendência). Tooltip operável por teclado. Eixos com unidade.'], ['Data against background ≥3:1 and labels ≥4.5:1; discreet gridline; loading, empty and error states planned; entry animation respects reduced motion and the data is readable at once.', 'Dado vs fundo ≥3:1 e rótulo ≥4.5:1; gridline discreta; estados de loading, vazio e erro previstos; animação de entrada respeita reduced-motion e o dado é legível de imediato.']],
    render: function () {
      var q = [['Onde o titular desiste?', 'Where does the subject give up?', 'funil (câmera destacada)', 'funnel (camera highlighted)'], ['Como variou no tempo?', 'How did it change over time?', 'linha', 'line'], ['Qual tipo de fraude é maior?', 'Which type of fraud is bigger?', 'barra', 'bar'], ['Como o score se distribui?', 'How is the score distributed?', 'histograma 0–30 / 31–70 / 71–100', 'histogram 0–30 / 31–70 / 71–100'], ['Onde geograficamente?', 'Where geographically?', 'mapa do Brasil por UF (react-simple-maps + TopoJSON local)', 'map of Brazil by state (react-simple-maps + local TopoJSON)'], ['Quando acontece?', 'When does it happen?', 'heatmap dia × hora', 'heatmap day × hour']];
      var bins = [2, 5, 9, 14, 18, 16, 12, 9, 7, 6, 5, 4, 4, 3, 3, 4, 3, 2, 2, 1], hist = bins.map(function (v, i) { var b = band(i * 5 + 2); return '<i style="height:' + (v / 18 * 100) + '%;background:var(--risk-' + b + ')"></i>'; }).join('');
      var fn = [[1000, '#232C6B'], [820, '#3742A8'], [610, '#4756C9', 1], [520, '#6C79D4']].map(function (s) { return '<div class="r"><div class="tr"><div class="b' + (s[2] ? ' cam' : '') + '" style="width:' + s[0] / 10 + '%;background:' + s[1] + '"></div></div><span class="l">' + s[0] + '</span></div>'; }).join('');
      return card(L('Question to chart', 'Pergunta para gráfico'), null, table([L('Question', 'Pergunta'), L('Chart', 'Gráfico')], q.map(function (r) { return [esc(L(r[1], r[0])), esc(L(r[3], r[2]))]; }))) +
        '<div class="vs-split">' + card(L('Funnel', 'Funil'), L('Camera step outlined.', 'Etapa de câmera contornada.'), '<div class="vs-fn">' + fn + '</div>') + card(L('Score histogram', 'Histograma de score'), L('Bars use the risk bands.', 'Barras usam as faixas de risco.'), '<div class="vs-histo" role="img" aria-label="' + L('Score distribution, most subjects under 40', 'Distribuição de score, maioria abaixo de 40') + '">' + hist + '</div><div class="vs-hbl"><span>0</span><span>30</span><span>70</span><span>100</span></div>') + '</div>';
    } });

  var CSSV = [
    ['brand', '/* brand — ' + 'overridden per tenant */\n--brand-50:#F0F2FB; --brand-100:#DDE1F6; --brand-200:#BCC3EE;\n--brand-300:#939EE2; --brand-400:#6C79D4; --brand-500:#4756C9;\n--brand-600:#3742A8; --brand-700:#2B3486; --brand-800:#232C6B;\n--brand-900:#171D46;\n--brand-primary:var(--brand-800); --brand-accent:var(--brand-500);'],
    ['neutral', '/* neutral */\n--n-50:#F5F6FA; --n-100:#EBEDF4; --n-200:#D7DAE8; --n-300:#B6BBD0;\n--n-400:#9198B5; --n-500:#6A7192; --n-600:#4E5573; --n-700:#3C4262;\n--n-800:#262C45; --n-900:#10142B;'],
    ['semantic', '/* semantic — never overridden */\n--risk-low:#0F7A4A;     --risk-low-bg:#E6F2EB;     --risk-low-ink:#0B5C37;\n--risk-review:#B06A00;  --risk-review-bg:#FBF0DF;  --risk-review-ink:#7A4900;\n--risk-high:#B3261E;    --risk-high-bg:#FBE9E7;    --risk-high-ink:#8C1D18;\n--risk-unknown:#5A6570; --risk-unknown-bg:#EEF0F2; --risk-unknown-ink:#3D464F;'],
    ['type', "/* type — no serifs in the system */\n--font-display:'Libre Franklin', system-ui, sans-serif;\n--font-text:'Geist', system-ui, sans-serif;"],
    ['shape', '/* shape — set chosen in the Brand Kit */\n--radius-sm:4px; --radius-md:6px; --radius-lg:12px; --radius-pill:999px;'],
    ['elevation', '/* elevation */\n--shadow-raised:0 1px 2px rgba(16,20,43,.08);\n--shadow-overlay:0 4px 14px rgba(16,20,43,.1);\n--shadow-modal:0 14px 36px rgba(16,20,43,.16);\n--scrim:rgba(16,20,43,.48);'],
    ['focus', '/* focus — never removed */\n--focus-ring:var(--brand-500); --focus-width:2px; --focus-offset:2px;'],
    ['motion', '/* motion */\n--dur-instant:80ms; --dur-fast:160ms; --dur-base:240ms; --dur-slow:400ms;\n--ease-in:cubic-bezier(.2,.8,.3,1); --ease-out:cubic-bezier(.4,0,1,1);'],
    ['layout', '/* layout */\n--bp-md:600px; --bp-lg:900px; --bp-xl:1280px;\n--content-max:1240px; --flow-max:520px;\n--target-desktop:40px; --target-mobile:44px;'],
    ['icon', '/* icon */\n--icon-stroke:1.5; --icon-sm:16px; --icon-md:18px; --icon-lg:24px;'],
    ['dark', '@media (prefers-reduced-motion: reduce) {\n  :root { --dur-instant:0ms; --dur-fast:0ms; --dur-base:0ms; --dur-slow:0ms; }\n}\n\n[data-theme="dark"] {\n  --brand-primary:var(--brand-300);\n  --surface:#0C1024; --surface-raised:#151A33; --border:#262C45;\n  --ink:#EDEFF7; --ink-muted:#B6BBD0;\n  --focus-ring:var(--brand-300);\n  --risk-low-bg:rgba(15,122,74,.18);    --risk-low-ink:#7FDCAE;\n  --risk-review-bg:rgba(176,106,0,.18); --risk-review-ink:#F0C077;\n  --risk-high-bg:rgba(179,38,30,.16);   --risk-high-ink:#FFB4AC;\n}']
  ];
  add({ id: 'cssvars', group: 'patterns', name: ['CSS variables', 'Variáveis CSS'], wide: true,
    desc: ['The whole token layer, ready to copy into the global theme. Names follow a prefix rule that says who controls each layer.', 'Toda a camada de tokens, pronta para copiar no tema global. Os nomes seguem uma regra de prefixo que diz quem controla cada camada.'],
    props: { block: [SEL(['all'].concat(CSSV.map(function (b) { return b[0]; }))), 'all'] },
    tokens: [['--brand-*, --radius-*', L('tenant (Brand Kit)', 'tenant (Brand Kit)')], ['--n-*', L('system', 'sistema')], ['--risk-*', L('system, never overridden', 'sistema, nunca sobrescrito')], ['--focus-*', L('system', 'sistema')], ['--dur-*, --ease-*', L('system', 'sistema')], ['--bp-*, --content-max, --target-*', L('system', 'sistema')]],
    rules: [['Use semantic tokens; no raw hex inside a component.', 'Tokens semânticos em uso; nenhum hex cru no componente.']],
    render: function (p) {
      var names = [['Marca / Brand', '--brand-*, --radius-*', 'Brand Kit do tenant', '--brand-500'], ['Neutro / Neutral', '--n-*', 'Sistema', '--n-600'], ['Semântico / Semantic', '--risk-*', 'Sistema, nunca sobrescrito', '--risk-high-ink'], ['Foco / Focus', '--focus-*', 'Sistema', '--focus-ring'], ['Motion', '--dur-*, --ease-*', 'Sistema', '--dur-fast'], ['Layout', '--bp-*, --content-max, --target-*', 'Sistema', '--target-mobile']];
      var blocks = p.block === 'all' ? CSSV : CSSV.filter(function (b) { return b[0] === p.block; });
      var txt = p.block === 'all' ? ':root {\n' + CSSV.slice(0, 10).map(function (b) { return b[1].replace(/^/gm, '  '); }).join('\n\n') + '\n}\n\n' + CSSV[10][1] : blocks[0][1];
      return card(L('Naming rule', 'Regra de nomenclatura'), null, table([L('Layer', 'Camada'), L('Prefix', 'Prefixo'), L('Controlled by', 'Quem controla'), L('Example', 'Exemplo')], names.map(function (n) { return [n[0], K(n[1]), L(n[2] === 'Sistema' ? 'System' : n[2] === 'Brand Kit do tenant' ? 'Tenant Brand Kit' : 'System, never overridden', n[2]), K(n[3])]; }))) +
        card(L('Copy into the global theme', 'Copiar para o tema global'), L('Use the block selector in Controls to copy a single layer.', 'Use o seletor de bloco em Controles para copiar uma camada só.'), codeBlock(txt));
    } });

  /* ---------------- Fluxos ---------------- */
  add({ id: 'flow', group: 'flows', name: ['Camera consent', 'Consentimento de câmera'], wide: true, lightOnly: true,
    desc: ['The subject flow, one decision per screen: home, why we need the camera, the permission prompt, denied, live capture, processing and done.', 'O fluxo do titular, uma decisão por tela: início, por que precisamos da câmera, o pedido de permissão, negada, captura ao vivo, processamento e conclusão.'],
    props: { screen: [SEL(['home', 'intro', 'allow', 'denied', 'live', 'proc', 'ok']), 'intro'], interactive: [BOOL, false], alert: [BOOL, false] },
    tokens: [['--flow-max', '520px, centered'], ['button', '44 high · subject flow'], ['dark mode', L('none (face capture needs a bright screen)', 'nenhum (captura facial precisa de tela luminosa)')], ['--n-900', '#10142B · ink'], ['screens', 'home · intro · allow · denied · live · proc · ok']],
    rules: [['One decision per screen, mobile-first, wearing the organization brand. No dark mode in this flow.', 'Uma decisão por tela, mobile-first, com a marca da organização. Sem dark mode neste fluxo.'], ['Camera denied: browser-specific instructions, an alternative link ("finish with an agent") and the event is logged in the funnel.', 'Câmera negada: instruções específicas por navegador, uma alternativa em link ("conclua com um atendente") e o evento é registrado no funil.'], ['Turn on "interactive" to walk the whole flow with the buttons, including the allow and deny prompt.', 'Ligue "interactive" para percorrer o fluxo inteiro pelos botões, incluindo o pedido de permitir e negar.']],
    usage: function (p) { return '<div id="phone"></div>\n<script src="ui/vero.js"></script>\n<script>\n  VX.mount(document.getElementById("phone"), {\n    screen: "' + p.screen + '", lang: "en",\n    interactive: ' + p.interactive + ', alert: ' + p.alert + '\n  });\n</script>'; },
    render: function () { return '<div class="vs-phonewrap" style="max-width:320px"><div id="vs-phone"></div></div>'; },
    setup: function (stage, p, api) {
      var host = stage.querySelector('#vs-phone');
      VX.mount(host, { screen: p.screen, lang: lang, interactive: !!p.interactive, alert: !!p.alert && p.screen === 'allow', onChange: function (s) { if (s !== p.screen) { p.screen = s; var sel = document.querySelector('#sb-panel select[data-k="screen"]'); if (sel) sel.value = s; } } });
    } });

  /* =======================================================
     MOTOR
     ======================================================= */
  var GROUPS = ['intro', 'brand', 'foundations', 'components', 'patterns', 'flows'];
  var cur = STORIES[0], values = {}, tab = 'controls', userTheme = 'light', cleanup = null;
  var $ = function (s) { return document.querySelector(s); };
  var stage = $('#sb-stage');

  function defaults(s) { var v = {}; Object.keys(s.props || {}).forEach(function (k) { v[k] = s.props[k][1]; }); return v; }
  function nm(s) { return L(s.name[0], s.name[1]); }

  function buildNav(q) {
    var out = '';
    GROUPS.forEach(function (g) {
      var items = STORIES.filter(function (s) { return s.group === g && (!q || nm(s).toLowerCase().indexOf(q) > -1); });
      if (!items.length) return;
      out += '<div><h6>' + t(g) + '</h6>' + items.map(function (s) { return '<button type="button" data-id="' + s.id + '"' + (s.id === cur.id ? ' aria-current="true"' : '') + '>' + esc(nm(s)) + '</button>'; }).join('') + '</div>';
    });
    $('#sb-nav').innerHTML = out || '<p class="sb-empty">' + t('noresults') + '</p>';
  }

  function copy(text, btn, label) {
    function done() { if (!btn) return; var o = btn.getAttribute('data-o') || btn.textContent; btn.setAttribute('data-o', o); btn.textContent = label || t('copied'); setTimeout(function () { btn.textContent = o; }, 1200); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done); else { var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove(); done(); }
  }

  var api = { set: function (k, v) { values[k] = v; renderStage(); renderPanel(); } };

  function renderStage() {
    if (cleanup) { cleanup(); cleanup = null; }
    var th = cur.lightOnly ? 'light' : userTheme;
    stage.removeAttribute('style');
    stage.className = 'sb-stage' + (cur.wide ? ' is-wide' : '');
    stage.dataset.theme = th;
    stage.innerHTML = cur.render(values);
    if (cur.setup) cur.setup(stage, values, api);
    var hint = cur.lightOnly ? t('hintLight') : (cur.id === 'color' || cur.id === 'cssvars') ? t('hintDoc') : th === 'dark' ? t('hintDark') : '';
    $('#sb-hint').textContent = hint;
    document.querySelectorAll('#sb-themes button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.theme === th ? 'true' : 'false'); b.disabled = !!cur.lightOnly && b.dataset.theme === 'dark'; });
  }

  function renderPanel() {
    var p = $('#sb-panel');
    document.querySelectorAll('.sb-tabs button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === tab ? 'true' : 'false'); });
    if (tab === 'controls') {
      var keys = Object.keys(cur.props || {});
      if (!keys.length) { p.innerHTML = '<p class="sb-none">' + t('none') + '</p>'; return; }
      p.innerHTML = '<div class="sb-ctl">' + keys.map(function (k) {
        var d = cur.props[k][0], v = values[k], inp, id = 'ctl-' + k;
        if (d.type === 'select') inp = '<select id="' + id + '" data-k="' + k + '">' + d.options.map(function (o) { return '<option' + (String(o) === String(v) ? ' selected' : '') + ' value="' + esc(o) + '">' + esc(o || '—') + '</option>'; }).join('') + '</select>';
        else if (d.type === 'bool') inp = '<input id="' + id + '" type="checkbox" data-k="' + k + '"' + (v ? ' checked' : '') + '>';
        else if (d.type === 'range') inp = '<span><input id="' + id + '" type="range" data-k="' + k + '" min="' + d.min + '" max="' + d.max + '" value="' + v + '"><output>' + v + '</output></span>';
        else if (d.type === 'color') inp = '<span><input id="' + id + '" type="color" data-k="' + k + '" value="' + esc(String(v).toLowerCase()) + '"><output>' + esc(v) + '</output></span>';
        else inp = '<input id="' + id + '" type="text" data-k="' + k + '" value="' + esc(v) + '">';
        return '<label for="' + id + '">' + k + '</label>' + inp;
      }).join('') + '</div>';
      p.querySelectorAll('[data-k]').forEach(function (el) {
        var ev = el.type === 'text' || el.type === 'range' || el.type === 'color' ? 'input' : 'change';
        el.addEventListener(ev, function () {
          var d = cur.props[el.dataset.k][0];
          values[el.dataset.k] = d.type === 'bool' ? el.checked : d.type === 'range' ? +el.value : el.value;
          var o = el.parentNode.querySelector && el.parentNode.querySelector('output'); if (o) o.textContent = el.value.toUpperCase && d.type === 'color' ? el.value.toUpperCase() : el.value;
          renderStage();
        });
      });
    } else if (tab === 'usage') {
      var html = '';
      if (cur.usage) html += '<h6 class="sb-sub" style="margin-top:0">' + t('snippet') + '</h6>' + codeBlock(cur.usage(values));
      if (cur.rules && cur.rules.length) html += '<h6 class="sb-sub"' + (cur.usage ? '' : ' style="margin-top:0"') + '>' + t('rules') + '</h6><ul class="sb-rules">' + cur.rules.map(function (r) { return '<li>' + esc(L(r[0], r[1])) + '</li>'; }).join('') + '</ul>';
      p.innerHTML = html || '<p class="sb-none">' + t('nousage') + '</p>';
    } else {
      var tk = cur.tokens || [];
      p.innerHTML = tk.length ? '<div class="sb-toks">' + tk.map(function (x) { return '<div class="sb-tok"><b>' + esc(x[0]) + '</b><span>' + esc(x[1]) + '</span></div>'; }).join('') + '</div>' : '<p class="sb-none">—</p>';
    }
  }

  function select(id, keepScroll) {
    cur = STORIES.filter(function (s) { return s.id === id; })[0] || STORIES[0];
    values = defaults(cur);
    $('#sb-group').textContent = t(cur.group);
    $('#sb-title').textContent = nm(cur);
    $('#sb-desc').textContent = L(cur.desc[0], cur.desc[1]);
    document.title = nm(cur) + ' · Storybook Vero ID';
    document.body.classList.remove('sb-open'); $('#sb-menu').setAttribute('aria-expanded', 'false');
    buildNav($('#sb-search').value.trim().toLowerCase());
    renderStage(); renderPanel();
    if (!keepScroll) $('#sb-main').scrollTop = 0;
    try { history.replaceState(null, '', location.pathname + (lang === 'pt' ? '?lang=pt' : '') + '#' + cur.id); } catch (e) {}
  }

  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.dataset.t); });
    $('#sb-search').placeholder = t('search'); $('#sb-search').setAttribute('aria-label', t('search'));
    document.querySelectorAll('.sb-lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });
    document.querySelectorAll('a[data-keep-lang]').forEach(function (a) { var h = a.getAttribute('href').split('?')[0]; a.setAttribute('href', h + (lang === 'pt' ? '?lang=pt' : '')); });
    select(cur.id, true);
  }

  $('#sb-nav').addEventListener('click', function (e) { var b = e.target.closest('button[data-id]'); if (b) select(b.dataset.id); });
  $('#sb-search').addEventListener('input', function () { buildNav(this.value.trim().toLowerCase()); });
  $('#sb-menu').addEventListener('click', function () { var o = document.body.classList.toggle('sb-open'); this.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('sb-open')) { document.body.classList.remove('sb-open'); $('#sb-menu').setAttribute('aria-expanded', 'false'); $('#sb-menu').focus(); } });
  document.querySelectorAll('.sb-tabs button').forEach(function (b) { b.addEventListener('click', function () { tab = b.dataset.tab; renderPanel(); }); });
  document.querySelectorAll('#sb-themes button').forEach(function (b) { b.addEventListener('click', function () { if (b.disabled) return; userTheme = b.dataset.theme; renderStage(); }); });
  document.querySelectorAll('.sb-lang button').forEach(function (b) { b.addEventListener('click', function () { lang = b.dataset.l; applyLang(); }); });
  document.addEventListener('click', function (e) {
    var s = e.target.closest('[data-story]'); if (s && stage.contains(s)) { select(s.dataset.story); return; }
    var c = e.target.closest('[data-copy]'); if (c) { copy(c.dataset.copy, null); c.classList.add('is-copied'); c.querySelector('i').setAttribute('data-msg', t('copied')); setTimeout(function () { c.classList.remove('is-copied'); }, 1100); return; }
    var cb = e.target.closest('.sb-copy'); if (cb) { copy(cb.parentNode.querySelector('pre').textContent, cb); }
  });
  window.addEventListener('hashchange', function () { var id = location.hash.slice(1); if (id && id !== cur.id && STORIES.some(function (s) { return s.id === id; })) select(id); });

  var start = STORIES.filter(function (s) { return s.id === location.hash.slice(1); })[0];
  if (start) cur = start;
  applyLang();
})();
