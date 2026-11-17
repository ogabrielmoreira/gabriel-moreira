/* Storybook Bradesco: explorador de componentes do case, feito à mão em
   HTML/CSS/JS (não é a ferramenta Storybook). Cada história descreve um
   componente de ../ui/bds.js, com controles, código e medidas do Figma. */
(function () {
  'use strict';
  var B = window.BDS;
  var lang = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';

  var UI = {
    en: { search: 'Find components', controls: 'Controls', code: 'Code', specs: 'Specs', replay: 'Replay', bg: 'Background', light: 'Light', brand: 'Brand', dark: 'Dark', case: 'Case study', proto: 'Prototype', foundations: 'Foundations', components: 'Components', feedback: 'Feedback & motion', none: 'This story has no controls.', copy: 'Copy', copied: 'Copied', menu: 'Stories', note: 'Independent, unofficial material. Not affiliated with Bradesco: these specs describe my own recreation of the components.', noticeTag: 'Independent recreation', notice: 'This Storybook is not affiliated with Bradesco. I built these components for the app interface back then, but I have no contact with the company anymore. What you see here, the documentation and the specs, is my own recreation: how I would deliver the components today if I were working there. Back then I delivered only the Figma handoff, so the Storybook is new. The code is not made available.', locked: 'For copyright reasons I am not making the code available here. I do have it, though, if you need it.', try: 'Try it: click, tap and type on the component.' },
    pt: { search: 'Buscar componentes', controls: 'Controles', code: 'Código', specs: 'Specs', replay: 'Repetir', bg: 'Fundo', light: 'Claro', brand: 'Marca', dark: 'Escuro', case: 'Case', proto: 'Protótipo', foundations: 'Fundamentos', components: 'Componentes', feedback: 'Feedback e movimento', none: 'Esta história não tem controles.', copy: 'Copiar', copied: 'Copiado', menu: 'Histórias', note: 'Material independente, não oficial. Sem vínculo com o Bradesco: estas specs descrevem a minha recriação dos componentes.', noticeTag: 'Recriação independente', notice: 'Este Storybook não tem vínculo com o Bradesco. Eu construí esses componentes para a interface do app na época, mas não tenho mais contato com a empresa. O que você vê aqui, a documentação e as specs, é uma recriação minha e autoral: como eu entregaria os componentes hoje, se estivesse atuando lá. Na época entreguei só o handoff no Figma, então o Storybook é novo. O código não é disponibilizado.', locked: 'Por razões de direitos autorais, não disponibilizo o código aqui. Mas eu tenho o código, se precisar.', try: 'Experimente: clique, toque e digite no componente.' }
  };
  function t(k) { return UI[lang][k]; }
  function L(en, pt) { return lang === 'pt' ? pt : en; }

  var COLORS = [['primary', '#CC092F'], ['header', '#F4205D'], ['magenta', '#B5126E'], ['blue', '#3B69FF'], ['text', '#1A1A1A'], ['sub', '#4D4D4D'], ['line', '#E3E3E3'], ['navy', '#1E2749'], ['sky', '#6EC1E4'], ['green', '#84BD2B']];

  var STORIES = [
    // ---------- Fundamentos ----------
    { id: 'colors', group: 'foundations', name: ['Colors', 'Cores'], bg: 'light', wide: true,
      desc: ['Color tokens taken from the app screens. The red-to-magenta gradient is used on headers and full-bleed states.', 'Tokens de cor extraídos das telas do app. O gradiente do vermelho ao magenta aparece em cabeçalhos e estados de tela cheia.'],
      specs: ['10 tokens', 'Gradient: #CC092F → #B5126E, 180°'],
      render: function () {
        return '<div class="sb-swatches">' + COLORS.map(function (c) {
          return '<div class="sb-swatch"><i style="background:' + c[1] + '"></i><b>' + c[0] + '</b><span>' + c[1] + '</span></div>';
        }).join('') + '<div class="sb-swatch sb-swatch--wide"><i style="background:linear-gradient(90deg,#cc092f,#b5126e)"></i><b>gradient</b><span>#CC092F → #B5126E</span></div></div>';
      } },
    { id: 'typography', group: 'foundations', name: ['Typography', 'Tipografia'], bg: 'light', wide: true,
      desc: ['Figtree stands in for the Bradesco Sans typeface. System pieces (status bar, push notification, share sheet) use Inter.', 'A Figtree entra no lugar da fonte Bradesco Sans. As peças de sistema (status bar, notificação push, share sheet) usam Inter.'],
      specs: ['Figtree: 400, 500, 600', 'Inter: 400, 600'],
      render: function () {
        var rows = [['Título · 24 SemiBold', 24, 600, 'Informes de rendimentos'], ['Sheet · 22 SemiBold', 22, 600, 'Conecte suas contas'], ['Subtítulo · 17 SemiBold', 17, 600, 'Aqui estão os informes de 2021'], ['Item · 16 Medium', 16, 500, 'Salvar arquivo'], ['Corpo · 15 Regular', 15, 400, 'Agora, é só escolher.'], ['Botão · 15 SemiBold', 15, 600, 'Gerar informes'], ['Chip · 14 SemiBold', 14, 600, '2021'], ['Legenda · 12 Regular', 12, 400, 'Opcional']];
        return '<div class="sb-type bds">' + rows.map(function (r) {
          return '<div><small>' + r[0] + '</small><p style="font-size:' + r[1] + 'px;font-weight:' + r[2] + '">' + r[3] + '</p></div>';
        }).join('') + '</div>';
      } },
    { id: 'icons', group: 'foundations', name: ['Icons', 'Ícones'], bg: 'light', wide: true,
      desc: ['Line icons exported from the Figma file as an SVG sprite. They take the text color, so one icon works on any surface.', 'Ícones de linha exportados do Figma como sprite SVG. Eles herdam a cor do texto, então o mesmo ícone serve em qualquer superfície.'],
      specs: [(window.BDS_ICONS || []).length + ' icons', 'Stroke 1.6 to 2.8', 'currentColor'],
      render: function () {
        return '<div class="sb-icons bds">' + (window.BDS_ICONS || []).filter(function (n) { return n !== 'status'; }).map(function (n) {
          return '<div>' + B.icon(n) + '<span>' + n + '</span></div>';
        }).join('') + '</div>';
      } },

    // ---------- Componentes ----------
    { id: 'button', group: 'components', name: ['Button', 'Botão'], bg: 'light',
      desc: ['Pill button for the main action of each screen. It scales down on press and shows a touch ripple from the tap point.', 'Botão em pílula para a ação principal de cada tela. Ele encolhe ao toque e mostra uma onda a partir do ponto tocado.'],
      specs: ['352 × 50', 'Radius 25', 'Figtree SemiBold 15', 'Press: scale 0.97'],
      args: { label: { type: 'text', value: 'Gerar informes' }, variant: { type: 'select', options: ['primary', 'outline', 'white'], value: 'primary' }, disabled: { type: 'boolean', value: false }, loading: { type: 'boolean', value: false } },
      autoBg: function (a) { return a.variant === 'white' ? 'brand' : null; },
      render: function (a) { return '<div class="sb-w352">' + B.button(a) + '</div>'; } },
    { id: 'chip', group: 'components', name: ['Chip', 'Chip'], bg: 'light',
      desc: ['Year filter used in the 2022 version. Single selection: choosing one chip clears the others.', 'Filtro de ano usado na versão de 2022. Seleção única: escolher um chip desmarca os outros.'],
      specs: ['Height 34', 'Radius 17', 'Border 1.5 · #3B69FF', 'Figtree SemiBold 14'],
      args: { selected: { type: 'select', options: ['2021', '2020', '2019'], value: '2021' } },
      render: function (a) { return B.chips({ items: ['2021', '2020', '2019'], selected: a.selected }); } },
    { id: 'year-selector', group: 'components', name: ['Year selector (v2)', 'Seletor de ano (v2)'], bg: 'light',
      desc: ['Improved version: the five years always fit the screen width, so the last chip is never cut off by scrolling.', 'Versão melhorada: os cinco anos sempre cabem na largura da tela, então o último chip nunca fica cortado pela rolagem.'],
      specs: ['354 × 38', '5 × 62 × 38', 'Gap 11', 'Radius 19'],
      args: { selected: { type: 'select', options: ['2021', '2020', '2019', '2018', '2017'], value: '2021' } },
      render: function (a) { return B.chips({ years: true, selected: a.selected }); } },
    { id: 'checkbox', group: 'components', name: ['Checkbox', 'Checkbox'], bg: 'light',
      desc: ['Selects which statement goes into the file. The check mark is drawn when the box is ticked.', 'Marca qual informe entra no arquivo. O sinal de visto é desenhado quando a caixa é marcada.'],
      specs: ['Box 18 × 18', 'Radius 3', 'Touch area 44', 'Label Figtree Regular 16'],
      args: { label: { type: 'text', value: 'Conta - IRPF' }, checked: { type: 'boolean', value: true } },
      render: function (a) { return B.checkbox(a); } },
    { id: 'selectable-card', group: 'components', name: ['Selectable card (v2)', 'Card selecionável (v2)'], bg: 'light',
      desc: ['Improved version of the selection: type, status and checkbox sit together in one larger, easier-to-tap element.', 'Versão melhorada da seleção: tipo, status e checkbox ficam juntos em um elemento maior e mais fácil de tocar.'],
      specs: ['354 × 89', 'Radius 16', 'Selected: #F4F7FF + border 1.5 #3B69FF'],
      args: { name: { type: 'text', value: 'Conta - IRPF' }, meta: { type: 'text', value: 'Conta corrente · Pessoa Física' }, checked: { type: 'boolean', value: true } },
      render: function (a) { return '<div class="sb-w354">' + B.selCard(a) + '</div>'; } },
    { id: 'accordion', group: 'components', name: ['Other statements card', 'Card de outros informes'], bg: 'light',
      desc: ['Help block that explains where to find statements from other products. It expands in place; the items come in one after another.', 'Bloco de ajuda que explica onde achar informes de outros produtos. Ele expande no lugar; os itens entram um depois do outro.'],
      specs: ['354 wide', 'Radius 14', 'Shadow 0 4 14 · 12%', 'Toggle 28, rotates 180°'],
      args: { open: { type: 'boolean', value: false } },
      render: function (a) { return '<div class="sb-w354">' + B.accordion(a) + '</div>'; } },
    { id: 'help-card', group: 'components', name: ['Help block (v2)', 'Bloco de ajuda (v2)'], bg: 'light',
      desc: ['Improved version of the help for other products. It stays quiet while collapsed and opens in place to show where to find each statement, with the chevron turning up. The Figma file now has this open state too.', 'Versão melhorada da ajuda para outros produtos. Ela fica discreta recolhida e abre no lugar, mostrando onde achar cada informe, com a seta virando para cima. O arquivo do Figma agora tem esse estado aberto também.'],
      specs: ['354 wide', 'Radius 14', 'Fill #F7F8FC', 'Padding 12 / 16', 'Item icon 38 · gap 8', 'Chevron rotates 180°'],
      args: { open: { type: 'boolean', value: false } },
      render: function (a) { return '<div class="sb-w354">' + B.help(a) + '</div>'; } },
    { id: 'top-app-bar', group: 'components', name: ['Top app bar', 'Top app bar'], bg: 'light',
      desc: ['Header of the income tax flow: status bar, back button and centered title.', 'Cabeçalho do fluxo de Imposto de Renda: status bar, botão de voltar e título centralizado.'],
      specs: ['402 × 100', 'Fill #F4205D', 'Title Figtree SemiBold 17'],
      args: { title: { type: 'text', value: 'Imposto de Renda' } },
      render: function (a) { return '<div class="sb-w402">' + B.topBar(a) + '</div>'; } },
    { id: 'navigation-bar', group: 'components', name: ['Navigation bar', 'Navigation bar'], bg: 'light',
      desc: ['Main navigation of the app. The active item gets the gradient tile, which grows in with a small bounce.', 'Navegação principal do app. O item ativo ganha o fundo em gradiente, que entra com um leve quique.'],
      specs: ['402 × 86', 'Item 62 × 58', 'Tile 40 × 40 · radius 11', 'Label Figtree Medium 12'],
      args: { current: { type: 'select', options: ['Início', 'Chat', 'Shop', 'Perfil', 'Serviços'], value: 'Início' } },
      render: function (a) { return '<div class="sb-w402">' + B.nav(a) + '</div>'; } },
    { id: 'list-item', group: 'components', name: ['List item', 'Item de lista'], bg: 'light',
      desc: ['Next steps after the statement is generated. The chevron slides on hover and press.', 'Próximos passos depois que o informe é gerado. A seta desliza no hover e no toque.'],
      specs: ['354 × 58', 'Icon 24 · #CC092F', 'Label Figtree Medium 16', 'Divider #E3E3E3'],
      args: { label: { type: 'text', value: 'Salvar arquivo' }, icon: { type: 'select', options: ['save', 'receipt', 'search', 'home'], value: 'save' } },
      render: function (a) { return '<div class="sb-w354 bds-list">' + B.listItem(a) + '</div>'; } },
    { id: 'quick-access', group: 'components', name: ['Quick access', 'Acesso rápido'], bg: 'light',
      desc: ['Home shortcut. This is where the income statement entry point lives.', 'Atalho da home. É aqui que fica a entrada do informe de rendimentos.'],
      specs: ['80 wide', 'Tile 58 × 58 · radius 14', 'Label Figtree Regular 11/15'],
      args: { label: { type: 'text', value: 'Informe de rendimentos' }, icon: { type: 'select', options: ['doc', 'pix', 'card', 'chart'], value: 'doc' } },
      render: function (a) { return B.quick(a); } },
    { id: 'text-area', group: 'components', name: ['Text area', 'Campo de comentário'], bg: 'light',
      desc: ['Optional comment at the end of the flow, with a live character counter.', 'Comentário opcional no fim do fluxo, com contador de caracteres ao vivo.'],
      specs: ['354 × 84', 'Fill #F7F8FC', 'Bottom border #9A9A9A', 'Max 400'],
      render: function () { return '<div class="sb-w354">' + B.textArea() + '</div>'; } },
    { id: 'status-bar', group: 'components', name: ['Status bar', 'Status bar'], bg: 'brand',
      desc: ['System status bar, in light and dark versions.', 'Status bar do sistema, nas versões clara e escura.'],
      specs: ['402 × 54', 'Time Inter SemiBold 17'],
      args: { time: { type: 'text', value: '15:16' }, dark: { type: 'boolean', value: false } },
      autoBg: function (a) { return a.dark ? 'light' : 'brand'; },
      render: function (a) { return '<div class="sb-w402">' + B.statusBar(a) + '</div>'; } },

    // ---------- Feedback e movimento ----------
    { id: 'push-notification', group: 'feedback', name: ['Push notification', 'Notificação push'], bg: 'dark', replay: true,
      desc: ['The notification that tells every customer the statement is now in the app. It drops in from the top.', 'A notificação que avisa todos os clientes de que o informe chegou ao app. Ela desce do topo da tela.'],
      specs: ['374 × 126', 'Radius 24', 'Fill #1C1C1E', 'Inter 15'],
      render: function () { return B.push({ animate: true }); } },
    { id: 'bottom-sheet', group: 'feedback', name: ['Bottom sheet', 'Bottom sheet'], bg: 'light',
      desc: ['Sheet used for the Open Finance offer and for the experience rating. It slides up while the scrim fades in.', 'Sheet usado na oferta de Open Finance e na avaliação da experiência. Ele sobe enquanto o scrim aparece.'],
      specs: ['402 wide', 'Radius 24 on top', 'Padding 22/24/34', 'Scrim #000 · 42%'],
      args: { open: { type: 'boolean', value: true } },
      render: function (a) {
        return '<div class="sb-phone"><div class="sb-phone-bg">' + B.button({ label: 'Abrir sheet', variant: 'primary', act: 'sheet-open' }) + '</div>' +
          '<div class="bds-scrim' + (a.open ? ' is-open' : '') + '" data-for="sb-sheet" data-act="sheet-close"></div>' +
          '<div class="bds-sheet' + (a.open ? ' is-open' : '') + '" id="sb-sheet"><button class="bds-sheet-close" type="button" data-act="sheet-close" aria-label="Fechar">' + B.icon('close') + '</button>' +
          '<h2 style="text-align:center">Conecte suas contas</h2><p style="text-align:center">Com o Open Finance, você aumenta suas chances de obter mais limite no cartão e nos empréstimos.</p>' +
          B.button({ label: 'Conectar contas', act: 'sheet-close' }) + B.button({ label: 'Agora não', variant: 'outline', act: 'sheet-close' }) + '</div></div>';
      } },
    { id: 'rating', group: 'feedback', name: ['Rating stars', 'Estrelas de avaliação'], bg: 'light',
      desc: ['Satisfaction rating at the end of the flow. The stars fill in sequence up to the one that was tapped.', 'Avaliação de satisfação no fim do fluxo. As estrelas se preenchem em sequência até a que foi tocada.'],
      specs: ['5 × 38 × 38', 'Gap 12', 'Stroke #6B6B6B'],
      args: { value: { type: 'select', options: ['0', '1', '2', '3', '4', '5'], value: '0' } },
      render: function (a) { return B.stars({ value: +a.value }); } },
    { id: 'loading-lion', group: 'feedback', name: ['Waiting state · lion', 'Espera · leão do IR'], bg: 'light',
      desc: ['The income tax lion shows up while the app fetches and merges the statements. Subtle motion, just to show something is happening.', 'O leão do IR aparece enquanto o app consulta e junta os informes. Movimento discreto, só para indicar que algo está acontecendo.'],
      specs: ['250 × 200', 'Float 7px · 2.8s loop'],
      args: { background: { type: 'select', options: ['white', 'red'], value: 'white' } },
      autoBg: function (a) { return a.background === 'red' ? 'brand' : 'light'; },
      render: function (a) {
        return '<div class="sb-center">' + B.lion({ red: a.background === 'red' }) + '<p class="sb-wait-title">Estamos consultando seus informes...</p><p class="sb-wait-sub">Isso pode levar até 30 segundos.<br>Já, já a gente te mostra.</p></div>';
      } },
    { id: 'success', group: 'feedback', name: ['Statement generated', 'Informe gerado'], bg: 'brand', replay: true,
      desc: ['Confirmation that the file is ready: the document lands, then the check mark is drawn.', 'Confirmação de que o arquivo está pronto: o documento pousa e, em seguida, o visto é desenhado.'],
      specs: ['250 × 210', 'Sequence: blob, document, check · 1.1s'],
      render: function () { return '<div class="sb-center">' + B.success() + '<p class="sb-wait-title" style="color:#fff">Informe gerado</p><p class="sb-wait-sub" style="color:#fff">Ele está em um único arquivo.<br>Agora, é só salvar.</p></div>'; } }
  ];

  // ---------- Montagem da página ----------
  var $ = function (s) { return document.querySelector(s); };
  var nav = $('#sb-nav'), canvas = $('#sb-canvas'), stage = $('#sb-stage'), panel = $('#sb-panel');
  var current = null, args = {}, bgOverride = null, tab = 'controls';

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.dataset.t); });
  $('#sb-search').placeholder = t('search');
  document.querySelectorAll('[data-keep-lang]').forEach(function (a) {
    if (lang === 'pt') a.href = a.getAttribute('href') + '?lang=pt';
  });
  document.querySelectorAll('.sb-lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.l === lang));
    b.addEventListener('click', function () {
      if (b.dataset.l !== lang) location.href = location.pathname + (b.dataset.l === 'pt' ? '?lang=pt' : '') + location.hash;
    });
  });

  function buildNav(filter) {
    var f = (filter || '').toLowerCase(), html = '';
    ['foundations', 'components', 'feedback'].forEach(function (g) {
      var items = STORIES.filter(function (s) { return s.group === g && (!f || (s.name[0] + ' ' + s.name[1] + ' ' + s.id).toLowerCase().indexOf(f) > -1); });
      if (!items.length) return;
      html += '<h2>' + t(g) + '</h2><ul>' + items.map(function (s) {
        return '<li><a href="#' + s.id + '"' + (current && current.id === s.id ? ' aria-current="page"' : '') + '><i></i>' + L(s.name[0], s.name[1]) + '</a></li>';
      }).join('') + '</ul>';
    });
    nav.innerHTML = html || '<p class="sb-empty">∅</p>';
  }

  function renderStage() {
    var html = current.render(args);
    stage.className = 'sb-stage' + (current.wide ? ' sb-stage--wide' : '');
    stage.innerHTML = '<div class="bds' + (activeBg() === 'brand' ? ' bds-on-brand' : '') + '">' + html + '</div>';
    canvas.dataset.bg = activeBg();
    document.querySelectorAll('.sb-bg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.bg === activeBg())); });
  }
  function activeBg() {
    return bgOverride || (current.autoBg && current.autoBg(args)) || current.bg || 'light';
  }

  function renderPanel() {
    document.querySelectorAll('.sb-tabs button').forEach(function (b) { b.setAttribute('aria-selected', String(b.dataset.tab === tab)); });
    var html = '';
    if (tab === 'controls') {
      var keys = Object.keys(current.args || {});
      html = keys.length ? '<div class="sb-controls">' + keys.map(function (k) {
        var a = current.args[k], v = args[k], id = 'c-' + k, input;
        if (a.type === 'boolean') input = '<label class="sb-switch"><input type="checkbox" id="' + id + '" data-arg="' + k + '"' + (v ? ' checked' : '') + ' /><span></span></label>';
        else if (a.type === 'select') input = '<select id="' + id + '" data-arg="' + k + '">' + a.options.map(function (o) { return '<option' + (o === v ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select>';
        else input = '<input type="text" id="' + id + '" data-arg="' + k + '" value="' + B.esc(v) + '" />';
        return '<label for="' + id + '">' + k + '</label>' + input;
      }).join('') + '</div><p class="sb-hint">' + t('try') + '</p>' : '<p class="sb-hint">' + t('none') + ' ' + t('try') + '</p>';
    } else if (tab === 'code') {
      html = '<div class="sb-locked" role="alert"><svg class="bds-icon" aria-hidden="true"><use href="#i-lock"/></svg><p>' + t('locked') + '</p></div>';
    } else {
      html = '<ul class="sb-specs">' + current.specs.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul><p class="sb-hint">' + t('note') + '</p>';
    }
    panel.innerHTML = html;
  }

  function show(id) {
    var s = STORIES.filter(function (x) { return x.id === id; })[0] || STORIES[3];
    current = s; args = {}; bgOverride = null;
    Object.keys(s.args || {}).forEach(function (k) { args[k] = s.args[k].value; });
    $('#sb-title').textContent = L(s.name[0], s.name[1]);
    $('#sb-group').textContent = t(s.group);
    $('#sb-desc').textContent = L(s.desc[0], s.desc[1]);
    $('#sb-replay').hidden = !s.replay;
    document.title = L(s.name[0], s.name[1]) + ' · Storybook Bradesco';
    buildNav($('#sb-search').value);
    renderStage(); renderPanel();
    document.body.classList.remove('sb-menu-open');
  }

  window.addEventListener('hashchange', function () { show(location.hash.slice(1)); });
  $('#sb-search').addEventListener('input', function (e) { buildNav(e.target.value); });
  $('#sb-replay').addEventListener('click', renderStage);
  $('#sb-menu').addEventListener('click', function () { document.body.classList.toggle('sb-menu-open'); });
  document.querySelectorAll('.sb-bg button').forEach(function (b) {
    b.addEventListener('click', function () { bgOverride = b.dataset.bg; renderStage(); });
  });
  document.querySelectorAll('.sb-tabs button').forEach(function (b) {
    b.addEventListener('click', function () { tab = b.dataset.tab; renderPanel(); });
  });
  panel.addEventListener('input', function (e) {
    var k = e.target.dataset.arg;
    if (!k) return;
    args[k] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    bgOverride = null;
    renderStage();
  });
  // Ações dentro do canvas (bottom sheet de exemplo)
  stage.addEventListener('click', function (e) {
    var a = e.target.closest('[data-act]');
    if (!a) return;
    if (a.dataset.act === 'sheet-open') B.sheet(document.getElementById('sb-sheet'), true);
    if (a.dataset.act === 'sheet-close') B.sheet(document.getElementById('sb-sheet'), false);
  });

  show(location.hash.slice(1) || 'button');
})();
