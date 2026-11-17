/* Storybook OTTO Vigilant: explorador de componentes feito à mão em HTML/CSS/JS
   (não é a ferramenta Storybook). Cada história descreve um componente de ../ui/otto.js. */
(function () {
  'use strict';
  var OT = window.OT, C = OT.c;
  var lang = OT.lang;

  var UI = {
    en: { search: 'Find components', controls: 'Controls', usage: 'Usage', specs: 'Tokens', night: 'Night', contrast: 'High contrast', case: 'Case study', proto: 'Prototype', foundations: 'Foundations', components: 'Components', patterns: 'Patterns', none: 'This story has no controls.', noticeTag: 'Independent concept', notice: 'Independent, non-profit concept for study and portfolio. It has no link with Volkswagen do Brasil or the official OTTO product. Brand fonts are replaced by Outfit, and every component here was rebuilt by me.' },
    pt: { search: 'Buscar componentes', controls: 'Controles', usage: 'Uso', specs: 'Tokens', night: 'Noite', contrast: 'Alto contraste', case: 'Case', proto: 'Protótipo', foundations: 'Fundamentos', components: 'Componentes', patterns: 'Padrões', none: 'Esta história não tem controles.', noticeTag: 'Conceito independente', notice: 'Conceito independente e sem fins lucrativos, para estudo e portfólio. Não tem vínculo com a Volkswagen do Brasil nem com o produto OTTO oficial. As fontes da marca foram trocadas pela Outfit e todos os componentes aqui foram recriados por mim.' }
  };
  function t(k) { return UI[lang][k]; }
  function L(en, pt) { return lang === 'pt' ? pt : en; }
  var SEL = function (a) { return { type: 'select', options: a }; };
  var TXT = { type: 'text' }, BOOL = { type: 'bool' };
  var LEVEL = [{ type: 'range', min: 0, max: 3 }, 1];
  function lv(p) { return +p.level; }

  var STORIES = [
    { id: 'tokens', group: 'foundations', name: ['Token architecture', 'Arquitetura de tokens'], wide: true,
      desc: ['Two tiers plus one runtime value. Primitives hold raw colors, semantic tokens give them a role, and each component reads the risk level through --lv, set by data-level.', 'Duas camadas e um valor em tempo de execução. Primitivos guardam as cores brutas, tokens semânticos dão um papel e cada componente lê o nível de risco por --lv, definido por data-level.'],
      specs: ['tier 1 · --p-*', 'tier 2 · --ot-*', 'runtime · --lv'],
      render: function () {
        return '<div class="sb-tiers"><div class="sb-tier"><h5>1 · ' + L('Primitive', 'Primitivo') + '</h5><code>--p-green: #00B374<br>--p-orange: #FF9500<br>--p-red: #E63946<br>--p-card: #111317</code><p>' + L('Raw values. Never used directly in a component.', 'Valores brutos. Nunca usados direto em um componente.') + '</p></div><div class="sb-tier"><h5>2 · ' + L('Semantic', 'Semântico') + '</h5><code>--ot-l1 · --ot-l2 · --ot-l3<br>--ot-card · --ot-row<br>--ot-sub · --ot-edge</code><p>' + L('A role in the cockpit. The high-contrast mode only remaps this tier.', 'Um papel no cockpit. O modo de alto contraste só remapeia esta camada.') + '</p></div><div class="sb-tier"><h5>3 · ' + L('Runtime', 'Execução') + '</h5><code>[data-level="2"]<br>--lv: var(--ot-l2)</code><p>' + L('One attribute recolors the button, wave, badge, icon and border of a component.', 'Um atributo recolore botão, onda, selo, ícone e borda de um componente.') + '</p></div></div>';
      } },
    { id: 'colors', group: 'foundations', name: ['Alert colors', 'Cores de alerta'], wide: true,
      desc: ['Three alert states, from the Figma variables colorAlertLevel1 to 3. Never color alone: every state also changes the voice tone, the icon and the intervention.', 'Três estados de alerta, das variáveis do Figma colorAlertLevel1 a 3. Nunca só cor: cada estado também muda o tom de voz, o ícone e a intervenção.'],
      specs: ['colorAlertLevel1 #00B374', 'colorAlertLevel2 #FF9500', 'colorAlertLevel3 #E63946'],
      render: function () {
        function lum(h) { var c = [1, 3, 5].map(function (i) { var v = parseInt(h.substr(i, 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
        function ratio(a, b) { var x = lum(a), y = lum(b), hi = Math.max(x, y), lo = Math.min(x, y); return (hi + 0.05) / (lo + 0.05); }
        var T = [['colorAlertLevel1', '#00B374', '--ot-l1'], ['colorAlertLevel2', '#FF9500', '--ot-l2'], ['colorAlertLevel3', '#E63946', '--ot-l3'], ['card', '#111317', '--ot-card'], ['row', '#34363B', '--ot-row'], ['text-sub', '#969696', '--ot-sub']];
        return '<div class="sb-swatches">' + T.map(function (c) { return '<div class="sb-sw"><i style="background:var(' + c[2] + ')"></i><div><b>' + c[0] + '</b><span>' + c[2] + '</span><span style="display:block">' + c[1] + ' · ' + ratio(c[1], '#111317').toFixed(1) + ':1 ' + L('on card', 'no card') + '</span></div></div>'; }).join('') + '</div>';
      } },
    { id: 'type', group: 'foundations', name: ['Typography', 'Tipografia'], wide: true,
      desc: ['Outfit stands in for the proprietary VW Head and VW Text. Sizes are large on purpose: they are read at a glance, at speed.', 'A Outfit substitui as fontes proprietárias VW Head e VW Text. Os tamanhos são grandes de propósito: a leitura é rápida, em movimento.'],
      specs: ['Outfit 300, 400', 'title 80 / 1.26', 'app-name 32', 'category 28', 'description 24'],
      render: function () {
        var r = [['title · 80 / 400', 56, 400, 'Otto Vigilant'], ['app-name · 32 / 400', 32, 400, L('Otto is speaking...', 'Otto está falando...')], ['category · 28 / 300', 28, 300, L('Event log', 'Registro de eventos')], ['description · 24 / 300', 22, 300, L('Pause for coffee accepted', 'Pausa para café aceita')]];
        return '<div class="sb-type" style="font-family:Outfit,sans-serif">' + r.map(function (x) { return '<small>' + x[0] + '</small><p style="font-size:' + x[1] + 'px;font-weight:' + x[2] + '">' + x[3] + '</p>'; }).join('') + '</div>';
      } },
    { id: 'levels', group: 'foundations', name: ['Risk levels', 'Níveis de risco'], wide: true,
      desc: ['The risk engine fuses camera, voice and telemetry into a 0 to 100% score and maps it to four states.', 'O motor de risco funde câmera, voz e telemetria em um score de 0 a 100% e o mapeia em quatro estados.'],
      specs: ['L1 30–50%', 'L2 50–75%', 'L3 > 75% or micro-sleep'],
      render: function () {
        return '<div class="sb-lvrow">' + [0, 1, 2, 3].map(function (l) { return '<div style="text-align:center;display:grid;gap:10px;justify-items:center;min-width:150px">' + C.badge({ level: l }) + '<span style="font-size:14px;color:#969696">' + OT.LV[l].r + '</span></div>'; }).join('') + '</div>';
      } },

    { id: 'button', group: 'components', name: ['Button', 'Botão'],
      desc: ['Pill button, filled for the main action and outlined for the secondary. The level sets its color.', 'Botão pílula, preenchido para a ação principal e vazado para a secundária. O nível define a cor.'],
      props: { label: [TXT, 'Sure, let’s go'], variant: [SEL(['filled', 'outline']), 'filled'], level: LEVEL }, tokens: ['--lv', '--ot-edge'], tag: 'button',
      render: function (p) { return C.button({ label: p.label, variant: p.variant, level: lv(p) }); } },
    { id: 'badge', group: 'components', name: ['Level badge', 'Selo de nível'],
      desc: ['A compact label for the current risk level, used in the event log and the monitor.', 'Um rótulo compacto do nível de risco atual, usado no registro de eventos e no monitor.'],
      props: { level: LEVEL }, tokens: ['--lv'], tag: 'badge',
      render: function (p) { return C.badge({ level: lv(p) }); } },
    { id: 'wave', group: 'components', name: ['Voice wave', 'Onda de voz'],
      desc: ['The sign that OTTO is speaking. It pulses at 60fps and respects prefers-reduced-motion.', 'O sinal de que o OTTO está falando. Pulsa a 60fps e respeita prefers-reduced-motion.'],
      props: { level: LEVEL, live: [BOOL, true] }, tokens: ['--lv'], tag: 'wave',
      render: function (p) { return '<div class="w-260">' + C.wave({ level: lv(p), live: p.live }) + '</div>'; } },
    { id: 'event', group: 'components', name: ['Event row', 'Linha de evento'],
      desc: ['One entry of the event log. It is a button when it can replay the alert.', 'Uma entrada do registro de eventos. Vira botão quando pode reproduzir o alerta.'],
      props: { level: LEVEL, title: [TXT, L('Mild tiredness · Nov 20, 2:30pm', 'Cansaço Leve · 20 de Novembro, 14h30')], desc: [TXT, L('Coffee break accepted', 'Pausa para café aceita')] }, tokens: ['--ot-row', '--ot-row-h', '--lv'], tag: 'event',
      render: function (p) { return '<div class="w-460">' + C.event({ level: lv(p), title: p.title, desc: p.desc, act: 'x' }) + '</div>'; } },
    { id: 'gauge', group: 'components', name: ['Risk gauge', 'Medidor de risco'],
      desc: ['The fused score from camera, voice and telemetry. The needle and the color follow the level thresholds.', 'O score fundido de câmera, voz e telemetria. O ponteiro e a cor seguem os limiares dos níveis.'],
      props: { score: [{ type: 'range', min: 0, max: 100 }, 62] }, tokens: ['--ot-l1', '--ot-l2', '--ot-l3', '--ot-line'], tag: 'gauge',
      render: function (p) { return C.gauge({ score: p.score }); } },
    { id: 'signal', group: 'components', name: ['Signal bar', 'Barra de sinal'],
      desc: ['One input of the risk engine: eyelid closure, voice, steering corrections, time at the wheel.', 'Uma entrada do motor de risco: fechamento das pálpebras, voz, correções de volante, tempo ao volante.'],
      props: { label: [TXT, 'PERCLOS'], icon: [SEL(['eye', 'mic', 'wheel', 'clock']), 'eye'], pct: [{ type: 'range', min: 0, max: 100 }, 58], level: LEVEL }, tokens: ['--lv', '--ot-line'], tag: 'signal',
      render: function (p) { return '<div class="w-360">' + C.signal({ label: p.label, icon: p.icon, pct: p.pct, level: lv(p) }) + '</div>'; } },
    { id: 'tile', group: 'components', name: ['App tile', 'Tile de app'],
      desc: ['The entry point of the module inside the VW Play hub.', 'A porta de entrada do módulo dentro do hub do VW Play.'],
      props: { name: [TXT, 'Otto Vigilant'], desc: [TXT, L('Monitoring and safety', 'Monitoramento e Segurança')] }, tokens: ['--ot-card'], tag: 'tile',
      render: function (p) { return '<div class="w-360">' + C.tile({ name: p.name, desc: p.desc, mark: OT.mark(48), bg: 'transparent', act: 'x' }) + '</div>'; } },
    { id: 'toggle', group: 'components', name: ['Privacy switch', 'Interruptor de privacidade'],
      desc: ['Camera and voice are opt-in, and the driver keeps the final say. Processing stays on the vehicle.', 'Câmera e voz são opt-in, e o motorista mantém a decisão final. O processamento fica no veículo.'],
      props: { label: [TXT, L('Cabin camera (VW-IMS)', 'Câmera interna (VW-IMS)')], hint: [TXT, L('Processed on the vehicle, nothing leaves it', 'Processada no veículo, nada sai dele')], on: [BOOL, true] }, tokens: ['--ot-row', '--ot-l1'], tag: 'toggle',
      render: function (p) { return '<div class="w-360">' + C.toggle(p) + '</div>'; } },
    { id: 'toast', group: 'components', name: ['Toast', 'Aviso rápido'],
      desc: ['A short confirmation, after the stop or when the emergency contact is notified.', 'Uma confirmação curta, depois da parada ou quando o contato de emergência é avisado.'],
      props: { level: LEVEL, title: [TXT, L('Emergency contact notified', 'Contato de emergência avisado')], text: [TXT, L('Sent with your location', 'Enviado com a sua localização')] }, tokens: ['--ot-row', '--lv'], tag: 'toast',
      render: function (p) { return '<div class="w-360">' + C.toast({ level: lv(p), title: p.title, text: p.text }) + '</div>'; } },

    { id: 'alert', group: 'patterns', name: ['OTTO alert', 'Alerta do OTTO'], wide: true,
      desc: ['The core pattern. Level 1 suggests, level 2 recommends, level 3 commands, and the voice, buttons and color change with it. Try the high-contrast mode for the critical scenarios.', 'O padrão central. O nível 1 sugere, o 2 recomenda, o 3 comanda, e voz, botões e cor mudam junto. Teste o modo de alto contraste para os cenários críticos.'],
      props: { level: [{ type: 'range', min: 1, max: 3 }, 1], live: [BOOL, true] }, tokens: ['--ot-card', '--lv', '--ot-edge'], tag: 'alert',
      render: function (p) { return C.alert({ level: lv(p), live: p.live }); } },
    { id: 'ladder', group: 'patterns', name: ['Intervention ladder', 'Escada de intervenção'], wide: true,
      desc: ['Interventions escalate: voice, then visual, then haptic, then active control. Each level lights up one more rung.', 'As intervenções escalam: voz, depois visual, depois tátil, depois controle ativo. Cada nível acende mais um degrau.'],
      props: { level: LEVEL }, tokens: ['--ot-row', '--lv'], tag: 'ladder',
      render: function (p) { return C.ladder({ level: lv(p) }); } },
    { id: 'takeover', group: 'patterns', name: ['Active takeover', 'Tomada de controle'], wide: true,
      desc: ['Level 3, phase 2, only on Level 2+ vehicles with ADAS, when the driver does not answer in 5 seconds.', 'Nível 3, fase 2, só em veículos Nível 2+ com ADAS, quando o motorista não responde em 5 segundos.'],
      props: { step: [{ type: 'range', min: 0, max: 5 }, 2] }, tokens: ['--ot-row', '--ot-l1', '--ot-l3'], tag: 'takeover',
      render: function (p) { return C.takeover({ step: p.step }); } },
    { id: 'dash', group: 'patterns', name: ['VW Play screen', 'Tela do VW Play'], wide: true,
      desc: ['The 1333 x 620 infotainment frame with the Otto Vigilant event log, as designed in Figma.', 'A moldura de infotainment 1333 x 620 com o registro de eventos do Otto Vigilant, como desenhei no Figma.'],
      props: {}, tokens: ['--ot-bg', '--ot-card', '--ot-row'], tag: 'dash',
      render: function () {
        var html = '<h2 class="ot-title">Otto Vigilant</h2><p class="ot-sec">' + L('Event log', 'Registro de eventos') + '</p><div style="display:grid;gap:14px;font-size:16px">' +
          C.event({ level: 1, title: L('Mild tiredness · Nov 20, 2:30pm', 'Cansaço Leve - 20 de Novembro, 14h30'), desc: L('Coffee break accepted', 'Pausa para café aceita') }) +
          C.event({ level: 3, title: L('Critical fatigue · Dec 21, 10:10pm', 'Fadiga Crítica - 21 de Dezembro, 22h10'), desc: L('Driver on BR-101 at night, dozed off.', 'Motorista em BR-101 à noite, cochilou.'), desc2: L('System took control | Safe stop', 'Sistema assumiu controle | Parada segura') }) + '</div>';
        return C.dash({ html: html, active: 'bag' });
      } }
  ];

  var cur = STORIES[0], values = {}, tab = 'controls';
  var $ = function (s) { return document.querySelector(s); };
  var stage = $('#sb-stage');
  function defaults(s) { var v = {}; Object.keys(s.props || {}).forEach(function (k) { v[k] = s.props[k][1]; }); return v; }

  function buildNav(q) {
    var out = '';
    ['foundations', 'components', 'patterns'].forEach(function (g) {
      var items = STORIES.filter(function (s) { return s.group === g && (!q || L(s.name[0], s.name[1]).toLowerCase().indexOf(q) > -1); });
      if (!items.length) return;
      out += '<div><h6>' + t(g) + '</h6>' + items.map(function (s) { return '<button type="button" data-id="' + s.id + '"' + (s.id === cur.id ? ' aria-current="true"' : '') + '>' + L(s.name[0], s.name[1]) + '</button>'; }).join('') + '</div>';
    });
    $('#sb-nav').innerHTML = out;
  }

  function syncLevels() {
    var has = cur.props && cur.props.level;
    document.querySelectorAll('#sb-levels button').forEach(function (b) {
      var l = +b.dataset.level, off = !has || (cur.props.level[0].min > l);
      b.disabled = !!off; b.style.opacity = off ? 0.35 : 1;
      b.setAttribute('aria-pressed', has && +values.level === l ? 'true' : 'false');
    });
  }

  function renderStage() {
    var mode = stage.dataset.mode;
    stage.className = 'sb-stage ot' + (cur.wide ? ' is-wide' : '');
    stage.dataset.mode = mode;
    stage.innerHTML = cur.render(values);
    OT.fit(stage);
    stage.querySelectorAll('.ot-sw').forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); }); });
    syncLevels();
  }

  function renderPanel() {
    var p = $('#sb-panel');
    document.querySelectorAll('.sb-tabs button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === tab ? 'true' : 'false'); });
    if (tab === 'controls') {
      var keys = Object.keys(cur.props || {});
      if (!keys.length) { p.innerHTML = '<p class="sb-none">' + t('none') + '</p>'; return; }
      p.innerHTML = '<div class="sb-ctl">' + keys.map(function (k) {
        var d = cur.props[k][0], v = values[k], inp;
        if (d.type === 'select') inp = '<select data-k="' + k + '">' + d.options.map(function (o) { return '<option' + (o === v ? ' selected' : '') + ' value="' + o + '">' + o + '</option>'; }).join('') + '</select>';
        else if (d.type === 'bool') inp = '<input type="checkbox" data-k="' + k + '"' + (v ? ' checked' : '') + '>';
        else if (d.type === 'range') inp = '<input type="range" data-k="' + k + '" min="' + d.min + '" max="' + d.max + '" value="' + v + '">';
        else inp = '<input type="text" data-k="' + k + '" value="' + OT.esc(v) + '">';
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
      var attrs = Object.keys(values).map(function (k) { var v = values[k], d = cur.props[k][1]; if (v === '' || v === false || v === d) return ''; return '  ' + k + ': ' + (typeof v === 'string' ? JSON.stringify(v) : v); }).filter(Boolean);
      p.innerHTML = '<pre class="sb-code">&lt;div class="ot" data-mode="night"&gt;\n  &lt;!-- ' + L('HTML returned by the component', 'HTML devolvido pelo componente') + ' --&gt;\n&lt;/div&gt;\n\nel.innerHTML = OT.c.' + cur.tag + '({' + (attrs.length ? '\n' + attrs.join(',\n') + '\n' : '') + '});</pre>';
    } else {
      var tk = cur.tokens || cur.specs || [];
      p.innerHTML = '<div class="sb-toks">' + tk.map(function (x) { return '<div class="sb-tok"><b>' + x + '</b><span>' + (x.indexOf('--p-') === 0 ? L('primitive', 'primitivo') : x.indexOf('--ot') === 0 ? L('semantic', 'semântico') : x.indexOf('--lv') === 0 ? L('runtime', 'execução') : '') + '</span></div>'; }).join('') + '</div>';
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
    try { history.replaceState(null, '', '#' + id); } catch (e) {}
  }

  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    OT.lang = lang;
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.dataset.t); });
    $('#sb-search').placeholder = t('search');
    document.querySelectorAll('.sb-lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });
    document.querySelectorAll('a[data-keep-lang]').forEach(function (a) { var h = a.getAttribute('href').split('?')[0]; a.setAttribute('href', h + (lang === 'pt' ? '?lang=pt' : '')); });
    select(cur.id);
  }

  $('#sb-nav').addEventListener('click', function (e) { var b = e.target.closest('button[data-id]'); if (b) select(b.dataset.id); });
  $('#sb-search').addEventListener('input', function () { buildNav(this.value.trim().toLowerCase()); });
  $('#sb-menu').addEventListener('click', function () { document.body.classList.toggle('sb-open'); });
  document.querySelectorAll('.sb-tabs button').forEach(function (b) { b.addEventListener('click', function () { tab = b.dataset.tab; renderPanel(); }); });
  document.querySelectorAll('#sb-levels button').forEach(function (b) { b.addEventListener('click', function () { if (b.disabled) return; values.level = +b.dataset.level; renderStage(); renderPanel(); }); });
  document.querySelectorAll('#sb-modes button').forEach(function (b) { b.addEventListener('click', function () { stage.dataset.mode = b.dataset.mode; document.querySelectorAll('#sb-modes button').forEach(function (o) { o.setAttribute('aria-pressed', o === b); }); }); });
  document.querySelectorAll('.sb-lang button').forEach(function (b) { b.addEventListener('click', function () { lang = b.dataset.l; applyLang(); }); });

  var start = STORIES.filter(function (s) { return s.id === location.hash.slice(1); })[0];
  if (start) cur = start;
  applyLang();
})();
