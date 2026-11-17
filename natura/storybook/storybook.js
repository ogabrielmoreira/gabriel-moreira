/* Storybook GaYa: explorador de componentes feito à mão em HTML/CSS/JS
   (não é a ferramenta Storybook). Cada história descreve um componente de ../ui/gaya.js. */
(function () {
  'use strict';
  var G = window.GY, C = G.c;
  var lang = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';

  var UI = {
    en: { search: 'Find components', controls: 'Controls', usage: 'Usage', specs: 'Tokens', light: 'Light', dark: 'Dark', case: 'Case study', proto: 'Prototype', foundations: 'Foundations', components: 'Components', feedback: 'Feedback', none: 'This story has no controls.', noticeTag: 'Independent recreation', notice: 'Independent, authorial adaptation for portfolio use. I no longer work there, so this is not the official Storybook or the delivered result: it uses generic themes, no real brand data, and some details (radii, specs) were changed on purpose. It shows how I think and work.' },
    pt: { search: 'Buscar componentes', controls: 'Controles', usage: 'Uso', specs: 'Tokens', light: 'Claro', dark: 'Escuro', case: 'Case', proto: 'Protótipo', foundations: 'Fundamentos', components: 'Componentes', feedback: 'Feedback', none: 'Esta história não tem controles.', noticeTag: 'Recriação independente', notice: 'Adaptação independente e autoral para uso em portfólio. Não trabalho mais lá, então este não é o Storybook oficial nem o resultado entregue: usa temas genéricos, sem dado real de marca, e alguns detalhes (raios, specs) foram alterados de propósito. Mostra como eu penso e trabalho.' }
  };
  function t(k) { return UI[lang][k]; }
  function L(en, pt) { return lang === 'pt' ? pt : en; }

  var SEL = function (a) { return { type: 'select', options: a }; };
  var TXT = { type: 'text' }, BOOL = { type: 'bool' };

  var STORIES = [
    { id: 'tokens', group: 'foundations', name: ['Token architecture', 'Arquitetura de tokens'], wide: true,
      desc: ['Three tiers: primitives hold raw values, semantic tokens give them a role and change with theme and mode, component tokens are local decisions. Switch theme and mode above to see tier 2 remap.', 'Três camadas: primitivos guardam valores brutos, tokens semânticos dão um papel e mudam com tema e modo, tokens de componente são decisões locais. Troque tema e modo acima para ver a camada 2 se remapear.'],
      specs: ['tier 1 · --p-*', 'tier 2 · --gy-*', 'tier 3 · --btn-*'],
      render: function () {
        return '<div class="sb-tiers"><div class="sb-tier"><h5>1 · ' + L('Primitive', 'Primitivo') + '</h5><code>--p-green-700<br>--p-orange-700<br>--p-pink-700<br>--p-gray-900</code><p>' + L('Raw values. No meaning, never used in components.', 'Valores brutos. Sem significado, nunca usados direto nos componentes.') + '</p></div><div class="sb-tier"><h5>2 · ' + L('Semantic', 'Semântico') + '</h5><code>--gy-primary<br>--gy-surface<br>--gy-text<br>--gy-danger</code><p>' + L('A role in the interface. This is the tier that swaps per theme and mode.', 'Um papel na interface. É a camada que troca por tema e modo.') + '</p></div><div class="sb-tier"><h5>3 · ' + L('Component', 'Componente') + '</h5><code>--btn-bg<br>--btn-fg<br>--btn-h</code><p>' + L('Local decisions that read from tier 2.', 'Decisões locais que leem da camada 2.') + '</p></div></div>';
      } },
    { id: 'colors', group: 'foundations', name: ['Semantic colors', 'Cores semânticas'], wide: true,
      desc: ['The semantic palette resolves differently per theme and mode. Pairs were checked against WCAG 2.2 contrast targets (AA for text, AAA for primary text where possible).', 'A paleta semântica resolve de forma diferente por tema e modo. Os pares foram checados contra os alvos de contraste da WCAG 2.2 (AA para texto, AAA no texto principal quando possível).'],
      specs: ['10 semantic tokens per theme/mode', 'Contrast: AA ≥ 4.5:1'],
      render: function () {
        var T = [['primary', '--gy-primary'], ['primary-strong', '--gy-primary-strong'], ['accent-soft', '--gy-accent-soft'], ['surface', '--gy-surface'], ['surface-2', '--gy-surface-2'], ['text', '--gy-text'], ['line', '--gy-line-strong'], ['danger', '--gy-danger'], ['info', '--gy-info'], ['success', '--gy-success']];
        return '<div class="sb-swatches">' + T.map(function (c) { return '<div class="sb-sw"><i style="background:var(' + c[1] + ')"></i><div><b>' + c[0] + '</b><span>' + c[1] + '</span></div></div>'; }).join('') + '</div>';
      } },
    { id: 'typography', group: 'foundations', name: ['Typography', 'Tipografia'], wide: true,
      desc: ['One family, a short scale. Sizes in px for the web, mapped 1:1 to the native scales.', 'Uma família, uma escala curta. Tamanhos em px para a web, mapeados 1:1 para as escalas nativas.'],
      specs: ['Inter 400, 500, 600, 700'],
      render: function () {
        var r = [['Title · 24 / 700', 24, 700, 'Order bag'], ['Heading · 17 / 600', 17, 600, 'Select the desired cycle'], ['Body · 15 / 400', 15, 400, 'Everything you need in one place.'], ['Button · 13 / 600 caps', 13, 600, 'CONFIRM'], ['Caption · 12 / 400', 12, 400, 'Available until Friday']];
        return '<div class="sb-type">' + r.map(function (x) { return '<small>' + x[0] + '</small><p style="font-size:' + x[1] + 'px;font-weight:' + x[2] + '">' + x[3] + '</p>'; }).join('') + '</div>';
      } },

    { id: 'button', group: 'components', name: ['Button', 'Button'],
      desc: ['Primary action. Three variants, three sizes, loading-free by design: feedback lives in the screen.', 'Ação principal. Três variantes, três tamanhos. O feedback de progresso fica na tela, não no botão.'],
      props: { label: [TXT, 'Confirm'], variant: [SEL(['filled', 'outline', 'text']), 'filled'], size: [SEL(['sm', 'md', 'lg']), 'md'], disabled: [BOOL, false], icon: [SEL(['', 'bag', 'search', 'plus']), ''] },
      tokens: ['--btn-bg', '--btn-fg', '--btn-bd', '--btn-h', '--gy-primary', '--gy-on-primary'],
      render: function (p) { return C.button(p); }, tag: 'Button' },
    { id: 'iconButton', group: 'components', name: ['IconButton', 'IconButton'],
      desc: ['Icon-only action, 40 px touch target, optional counter badge.', 'Ação só com ícone, alvo de toque de 40 px, com contador opcional.'],
      props: { icon: [SEL(['bell', 'bag', 'search', 'heart', 'menu']), 'bell'], filled: [BOOL, false], count: [TXT, '3'] },
      tokens: ['--gy-text', '--gy-surface-2', '--gy-accent-soft', '--gy-danger'], render: function (p) { return C.iconButton(p); }, tag: 'IconButton' },
    { id: 'chip', group: 'components', name: ['Chip', 'Chip'],
      desc: ['Filter or choice. Click to toggle the pressed state.', 'Filtro ou escolha. Clique para alternar o estado selecionado.'],
      props: { label: [TXT, 'Chip label'], selected: [BOOL, true], disabled: [BOOL, false] },
      tokens: ['--gy-primary', '--gy-on-primary', '--gy-line'], interactive: 'chip', render: function (p) { return C.chip(p) + C.chip({ label: 'Chip label', selected: false }); }, tag: 'Chip' },
    { id: 'badge', group: 'components', name: ['Badge', 'Badge'],
      desc: ['Short status label.', 'Rótulo curto de status.'],
      props: { label: [TXT, 'Available'], soft: [BOOL, false] }, tokens: ['--gy-primary', '--gy-accent-soft'], render: function (p) { return C.badge(p); }, tag: 'Badge' },
    { id: 'checkbox', group: 'components', name: ['Checkbox', 'Checkbox'],
      desc: ['Native input underneath, so keyboard and screen readers work for free.', 'Input nativo por baixo, então teclado e leitores de tela funcionam sem esforço.'],
      props: { label: [TXT, 'Remember password'], checked: [BOOL, true], disabled: [BOOL, false] }, tokens: ['--gy-primary', '--gy-line-strong', '--gy-focus'], render: function (p) { return C.checkbox(p); }, tag: 'Checkbox' },
    { id: 'switch', group: 'components', name: ['Switch', 'Switch'],
      desc: ['Immediate on/off setting.', 'Configuração liga/desliga imediata.'],
      props: { label: [TXT, 'Notifications'], on: [BOOL, true] }, tokens: ['--gy-primary', '--gy-line-strong'], render: function (p) { return C.switch(p); }, tag: 'Switch' },
    { id: 'textField', group: 'components', name: ['TextField', 'TextField'],
      desc: ['Label above, helper or error below. Focus ring uses the theme color.', 'Rótulo acima, ajuda ou erro abaixo. O anel de foco usa a cor do tema.'],
      props: { label: [TXT, 'Username'], placeholder: [TXT, 'Type your username'], helper: [TXT, ''], error: [BOOL, false], password: [BOOL, false], icon: [SEL(['user', 'lock', 'search', '']), 'user'] },
      tokens: ['--gy-line-strong', '--gy-primary', '--gy-danger'], render: function (p) { return '<div class="w-320">' + C.textField(p) + '</div>'; }, tag: 'TextField' },
    { id: 'select', group: 'components', name: ['Select', 'Select'],
      desc: ['Closed state of a dropdown field.', 'Estado fechado de um campo de seleção.'],
      props: { label: [TXT, 'Filter'], placeholder: [TXT, 'Choose an option'] }, tokens: ['--gy-line-strong', '--gy-muted'], render: function (p) { return '<div class="w-320">' + C.select(p) + '</div>'; }, tag: 'Select' },
    { id: 'card', group: 'components', name: ['Card', 'Card'],
      desc: ['Content block with media, title and text.', 'Bloco de conteúdo com mídia, título e texto.'],
      props: { title: [TXT, 'News'], text: [TXT, 'The ideal space to share everything relevant about your product or story.'] }, tokens: ['--gy-surface', '--gy-line', '--gy-shadow', '--gy-primary-strong'], render: function (p) { return '<div class="w-320">' + C.card(p) + '</div>'; }, tag: 'Card' },
    { id: 'tabs', group: 'components', name: ['Tabs', 'Tabs'],
      desc: ['Switch between sibling views.', 'Alterna entre visões irmãs.'],
      props: { labels: [TXT, 'Label|Label|Label'], active: [{ type: 'range', min: 0, max: 2 }, 1] }, tokens: ['--gy-primary', '--gy-line', '--gy-muted'], render: function (p) { return '<div class="w-360">' + C.tabs(p) + '</div>'; }, tag: 'Tabs' },
    { id: 'listItem', group: 'components', name: ['ListItem', 'ListItem'],
      desc: ['Row with leading icon, two lines and a chevron.', 'Linha com ícone, duas linhas de texto e seta.'],
      props: { title: [TXT, 'Order #1042'], sub: [TXT, 'Delivered yesterday'], icon: [SEL(['bag', 'bell', 'user', 'heart']), 'bag'] }, tokens: ['--gy-surface', '--gy-line', '--gy-muted'], render: function (p) { return '<div class="w-360 gy-list">' + C.listItem(p) + '</div>'; }, tag: 'ListItem' },
    { id: 'counter', group: 'components', name: ['Counter', 'Counter'],
      desc: ['Quantity stepper. Click + and − to try it.', 'Seletor de quantidade. Clique em + e − para testar.'],
      props: { value: [{ type: 'range', min: 1, max: 99 }, 2] }, tokens: ['--gy-line-strong', '--gy-disabled-fg'], interactive: 'counter', render: function (p) { return C.counter(p); }, tag: 'Counter' },
    { id: 'appBar', group: 'components', name: ['AppBarTop', 'AppBarTop'],
      desc: ['Top navigation with title and actions.', 'Navegação superior com título e ações.'],
      props: { title: [TXT, 'Title page'], count: [TXT, '9'] }, tokens: ['--gy-surface', '--gy-line', '--gy-danger'], render: function (p) { return '<div class="w-360">' + C.appBar(p) + '</div>'; }, tag: 'AppBarTop' },
    { id: 'bottomNav', group: 'components', name: ['BottomNavigation', 'BottomNavigation'],
      desc: ['Four destinations, the active one uses the primary color.', 'Quatro destinos, o ativo usa a cor primária.'],
      props: { active: [{ type: 'range', min: 0, max: 3 }, 0] }, tokens: ['--gy-primary', '--gy-muted', '--gy-line'], render: function (p) { return '<div class="w-360">' + C.bottomNav(p) + '</div>'; }, tag: 'BottomNavigation' },
    { id: 'alert', group: 'feedback', name: ['Alert', 'Alert'],
      desc: ['Inline message. Color is never the only signal: there is always an icon and a title.', 'Mensagem inline. A cor nunca é o único sinal: sempre há ícone e título.'],
      props: { kind: [SEL(['info', 'success', 'warning', 'error']), 'info'], title: [TXT, 'Heads up'], text: [TXT, 'Your order will be delivered in up to 3 business days.'] }, tokens: ['--gy-info', '--gy-success', '--gy-warn', '--gy-danger'], render: function (p) { return '<div class="w-360">' + C.alert(p) + '</div>'; }, tag: 'Alert' },
    { id: 'dialog', group: 'feedback', name: ['Dialog', 'Dialog'],
      desc: ['Modal confirmation with two actions.', 'Confirmação modal com duas ações.'],
      props: { title: [TXT, 'Notification'], text: [TXT, 'This is an example of a notification in modal format, ideal as a reference.'] }, tokens: ['--gy-surface', '--gy-line', '--gy-sub'], render: function (p) { return '<div class="w-320">' + C.dialog(p) + '</div>'; }, tag: 'Dialog' },
    { id: 'progress', group: 'feedback', name: ['ProgressBar', 'ProgressBar'],
      desc: ['Determinate progress.', 'Progresso determinado.'],
      props: { value: [{ type: 'range', min: 0, max: 100 }, 60] }, tokens: ['--gy-primary', '--gy-line'], render: function (p) { return '<div class="w-320">' + C.progress(p) + '</div>'; }, tag: 'ProgressBar' }
  ];

  var cur = STORIES[0], values = {}, tab = 'controls';
  var $ = function (s) { return document.querySelector(s); };
  var stage = $('#sb-stage');

  function defaults(s) { var v = {}; Object.keys(s.props || {}).forEach(function (k) { v[k] = s.props[k][1]; }); return v; }

  function buildNav(q) {
    var out = '';
    ['foundations', 'components', 'feedback'].forEach(function (g) {
      var items = STORIES.filter(function (s) { return s.group === g && (!q || L(s.name[0], s.name[1]).toLowerCase().indexOf(q) > -1); });
      if (!items.length) return;
      out += '<div><h6>' + t(g) + '</h6>' + items.map(function (s) { return '<button type="button" data-id="' + s.id + '"' + (s.id === cur.id ? ' aria-current="true"' : '') + '>' + L(s.name[0], s.name[1]) + '</button>'; }).join('') + '</div>';
    });
    $('#sb-nav').innerHTML = out;
  }

  function renderStage() {
    stage.className = 'sb-stage gy' + (cur.wide ? ' is-wide' : '');
    stage.innerHTML = cur.render(values);
    if (cur.interactive === 'chip') stage.querySelectorAll('.gy-chip').forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); }); });
    if (cur.interactive === 'counter') {
      var el = stage.querySelector('.gy-counter'), n = +values.value;
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b || b.disabled) return;
        n = Math.max(1, n + (b.getAttribute('aria-label') === '+' ? 1 : -1));
        var ctrl = el.querySelector('output'); ctrl.textContent = n;
        el.querySelector('button').disabled = n <= 1;
      });
    }
  }

  function toKebab(s) { return s; }
  function renderPanel() {
    var p = $('#sb-panel');
    document.querySelectorAll('.sb-tabs button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === tab ? 'true' : 'false'); });
    if (tab === 'controls') {
      var keys = Object.keys(cur.props || {});
      if (!keys.length) { p.innerHTML = '<p class="sb-none">' + t('none') + '</p>'; return; }
      p.innerHTML = '<div class="sb-ctl">' + keys.map(function (k) {
        var d = cur.props[k][0], v = values[k], inp;
        if (d.type === 'select') inp = '<select data-k="' + k + '">' + d.options.map(function (o) { return '<option' + (o === v ? ' selected' : '') + ' value="' + o + '">' + (o || '—') + '</option>'; }).join('') + '</select>';
        else if (d.type === 'bool') inp = '<input type="checkbox" data-k="' + k + '"' + (v ? ' checked' : '') + '>';
        else if (d.type === 'range') inp = '<input type="range" data-k="' + k + '" min="' + d.min + '" max="' + d.max + '" value="' + v + '">';
        else inp = '<input type="text" data-k="' + k + '" value="' + G.esc(v) + '">';
        return '<label>' + k + '</label>' + inp;
      }).join('') + '</div>';
      p.querySelectorAll('[data-k]').forEach(function (el) {
        var ev = el.type === 'text' || el.type === 'range' ? 'input' : 'change';
        el.addEventListener(ev, function () {
          var d = cur.props[el.dataset.k][0];
          values[el.dataset.k] = d.type === 'bool' ? el.checked : d.type === 'range' ? +el.value : el.value;
          renderStage();
        });
      });
    } else if (tab === 'usage') {
      if (!cur.tag) { p.innerHTML = '<p class="sb-none">' + L('Foundations are consumed through CSS variables.', 'Os fundamentos são consumidos por variáveis CSS.') + '</p>'; return; }
      var attrs = Object.keys(values).map(function (k) { var v = values[k], d = cur.props[k][1]; if (v === '' || v === false || v === d) return ''; return '  ' + k + '=' + (typeof v === 'string' ? '"' + v + '"' : '{' + v + '}'); }).filter(Boolean);
      p.innerHTML = '<pre class="sb-code">import { ThemeProvider, buildTheme, ' + cur.tag + ' } from "@gaya/react";\n\nconst theme = buildTheme("theme1", "light");\n\n&lt;ThemeProvider theme={theme}&gt;\n  &lt;' + cur.tag + (attrs.length ? '\n' + attrs.join('\n') + '\n  ' : ' ') + '/&gt;\n&lt;/ThemeProvider&gt;</pre>';
    } else {
      var tk = cur.tokens || cur.specs || [];
      p.innerHTML = '<div class="sb-toks">' + tk.map(function (x) { return '<div class="sb-tok"><b>' + x + '</b><span>' + (x.indexOf('--gy') === 0 ? L('semantic', 'semântico') : x.indexOf('--p') === 0 ? L('primitive', 'primitivo') : x.indexOf('--') === 0 ? L('component', 'componente') : '') + '</span></div>'; }).join('') + '</div>';
    }
  }

  function select(id) {
    cur = STORIES.filter(function (s) { return s.id === id; })[0];
    values = defaults(cur);
    $('#sb-group').textContent = t(cur.group);
    $('#sb-title').textContent = L(cur.name[0], cur.name[1]);
    $('#sb-desc').textContent = L(cur.desc[0], cur.desc[1]);
    document.body.classList.remove('sb-open');
    buildNav($('#sb-search').value.trim().toLowerCase());
    renderStage(); renderPanel();
    try { history.replaceState(null, '', '#' + id + (lang === 'pt' ? '' : '')); } catch (e) {}
  }

  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.dataset.t); });
    $('#sb-search').placeholder = t('search');
    document.querySelectorAll('.sb-lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });
    document.querySelectorAll('#sb-themes button').forEach(function (b, i) { b.textContent = L('Theme ', 'Tema ') + (i + 1); });
    document.querySelectorAll('a[data-keep-lang]').forEach(function (a) { var h = a.getAttribute('href').split('?')[0]; a.setAttribute('href', h + (lang === 'pt' ? '?lang=pt' : '')); });
    select(cur.id);
  }

  $('#sb-nav').addEventListener('click', function (e) { var b = e.target.closest('button[data-id]'); if (b) select(b.dataset.id); });
  $('#sb-search').addEventListener('input', function () { buildNav(this.value.trim().toLowerCase()); });
  $('#sb-menu').addEventListener('click', function () { document.body.classList.toggle('sb-open'); });
  document.querySelectorAll('.sb-tabs button').forEach(function (b) { b.addEventListener('click', function () { tab = b.dataset.tab; renderPanel(); }); });
  document.querySelectorAll('#sb-themes button').forEach(function (b) { b.addEventListener('click', function () { stage.dataset.theme = b.dataset.theme; document.querySelectorAll('#sb-themes button').forEach(function (o) { o.setAttribute('aria-pressed', o === b); }); }); });
  document.querySelectorAll('#sb-modes button').forEach(function (b) { b.addEventListener('click', function () { stage.dataset.mode = b.dataset.mode; document.querySelectorAll('#sb-modes button').forEach(function (o) { o.setAttribute('aria-pressed', o === b); }); }); });
  document.querySelectorAll('.sb-lang button').forEach(function (b) { b.addEventListener('click', function () { lang = b.dataset.l; applyLang(); }); });

  var start = STORIES.filter(function (s) { return s.id === location.hash.slice(1); })[0];
  if (start) cur = start;
  // renderStage reseta classes; mantém tema/modo escolhidos
  var _rs = renderStage;
  renderStage = function () { var th = stage.dataset.theme, mo = stage.dataset.mode; _rs(); stage.dataset.theme = th; stage.dataset.mode = mo; };
  applyLang();
})();
