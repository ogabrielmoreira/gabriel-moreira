/* SimpleApp: protótipo navegável feito com os componentes GaYa recriados. */
(function () {
  'use strict';
  var G = window.GY, C = G.c, I = G.icon;
  var lang = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';
  var UI = {
    en: { title: 'SimpleApp prototype', case: 'Case study', note: 'Tap what looks tappable. Change the theme and mode on the right: the components stay the same, only tier 2 tokens change.', eyebrow: 'Interactive', h1: 'SimpleApp, built with GaYa', lead: 'A small app to test the components in context, the same idea as the SimpleApp library I launched for prototyping inside the team.', noticeTag: 'Independent recreation', notice: 'Independent, authorial adaptation for portfolio use. Generic themes, placeholder content, no real brand data.', theme: 'Theme', mode: 'Mode', light: 'Light', dark: 'Dark' },
    pt: { title: 'Protótipo SimpleApp', case: 'Case', note: 'Toque no que parece tocável. Troque tema e modo ao lado: os componentes são os mesmos, só os tokens da camada 2 mudam.', eyebrow: 'Interativo', h1: 'SimpleApp, feito com o GaYa', lead: 'Um app pequeno para testar os componentes em contexto, a mesma ideia da biblioteca SimpleApp que lancei para prototipação dentro do time.', noticeTag: 'Recriação independente', notice: 'Adaptação independente e autoral para uso em portfólio. Temas genéricos, conteúdo de exemplo, sem dado real de marca.', theme: 'Tema', mode: 'Modo', light: 'Claro', dark: 'Escuro' }
  };
  function L(en, pt) { return lang === 'pt' ? pt : en; }
  var STEPS = [['login', 'Login', 'Login'], ['home', 'Home', 'Início'], ['showcase', 'Showcase', 'Vitrine'], ['order', 'Bag', 'Sacola'], ['notify', 'Notification', 'Notificação']];
  var tabIdx = { home: 0, showcase: 0, order: 0 }, screen = 'login', qty = [1, 2], device = document.getElementById('pp-device'), root = document.getElementById('pp-screen');

  function nav(active) {
    return '<nav class="gy-nav">' + [['home', L('Home', 'Início'), 'home', 'home'], ['showcase', L('Catalog', 'Catálogo'), 'grid', 'showcase'], ['order', L('Bag', 'Sacola'), 'bag', 'order'], ['notify', L('Alerts', 'Avisos'), 'bell', 'notify']].map(function (x) {
      return '<button type="button" data-go="' + x[3] + '"' + (x[3] === active ? ' aria-current="page"' : '') + '>' + I(x[2]) + x[1] + '</button>';
    }).join('') + '</nav>';
  }
  function bar(title, count) { return '<div class="gy-appbar">' + C.iconButton({ icon: 'menu' }) + '<h3>' + title + '</h3>' + C.iconButton({ icon: 'search' }) + C.iconButton({ icon: 'bag', count: count || '' }) + '</div>'; }

  function tabsFor(k) {
    var labels = L('Label|Label|Label', 'Rótulo|Rótulo|Rótulo').split('|');
    return '<div class="gy-tabs" role="tablist">' + labels.map(function (l, i) { return '<button type="button" role="tab" data-tab="' + k + ':' + i + '" aria-selected="' + (i === tabIdx[k]) + '">' + l + '</button>'; }).join('') + '</div>';
  }

  var VIEWS = {
    login: function () {
      return '<div class="sc-login"><div class="sc-logo" role="img" aria-label="GaYa"></div>' +
        C.textField({ label: L('Username (*)', 'Usuário (*)'), placeholder: L('Type your username', 'Digite seu usuário'), icon: 'user' }) +
        C.textField({ label: L('Password (*)', 'Senha (*)'), placeholder: L('Type your password', 'Digite sua senha'), icon: 'lock', password: true }) +
        '<div class="sc-row">' + C.checkbox({ label: L('Remember me', 'Lembrar senha'), checked: true }) + C.button({ label: L('Recover', 'Recuperar'), variant: 'text', size: 'sm' }) + '</div>' +
        '<button type="button" class="gy-btn gy-btn--block" data-go="home">' + L('Sign in', 'Acessar') + '</button>' +
        '<button type="button" class="gy-btn gy-btn--outline gy-btn--block">' + L('Create account', 'Cadastrar') + '</button></div>';
    },
    home: function () {
      return bar(L('Title page', 'Título'), '9') + tabsFor('home') + '<div class="pp-scroll"><div class="sc-pad"><div class="sc-h">' + L('Products', 'Produtos') + '</div>' +
        '<div class="sc-hscroll"><div style="width:250px">' + C.card({ title: L('News', 'Notícia'), text: L('The ideal space to share everything relevant about your product or story.', 'O espaço ideal para compartilhar tudo o que é relevante sobre seu produto.') }) + '</div><div style="width:250px">' + C.card({ title: L('Highlight', 'Destaque'), text: L('Use this field to highlight benefits and campaigns.', 'Use este campo para destacar benefícios e campanhas.') }) + '</div></div>' +
        '<div class="gy-dots"><i class="on"></i><i></i><i></i></div>' +
        C.alert({ kind: 'info', title: L('Heads up', 'Aviso'), text: L('New cycle available. Tap Catalog to explore.', 'Novo ciclo disponível. Toque em Catálogo para explorar.') }) + '</div></div>' + nav('home');
    },
    showcase: function () {
      return bar(L('Title page', 'Título')) + tabsFor('showcase') + '<div class="pp-scroll"><div class="sc-pad"><div class="sc-row"><div class="sc-h">' + L('Select the desired cycle', 'Selecione o ciclo desejado') + '</div>' + C.badge({ label: L('Available', 'Disponível'), soft: true }) + '</div>' +
        C.select({ label: '', placeholder: L('Filter', 'Filtrar') }) +
        '<div class="sc-hscroll" id="chips">' + ['Chip label', 'Chip label', 'Chip label', 'Chip label'].map(function (l, i) { return C.chip({ label: l, selected: i === 0 }); }).join('') + '</div>' +
        '<div class="sc-hscroll"><div style="width:230px">' + C.card({ title: L('Product A', 'Produto A'), text: '99,90' }) + '</div><div style="width:230px">' + C.card({ title: L('Product B', 'Produto B'), text: '79,90' }) + '</div></div>' +
        C.switch({ label: L('Only available items', 'Somente itens disponíveis'), on: true }) + '</div></div>' + nav('showcase');
    },
    order: function () {
      var items = [L('Product with up to two lines at most', 'Produto com até duas linhas no máximo'), L('Another product name goes here', 'Outro nome de produto aqui')];
      var total = qty[0] * 99.9 + qty[1] * 49.9;
      return bar(L('Bag', 'Sacola')) + '<div class="pp-scroll"><div class="sc-points">' + L('Available points', 'Pontuação disponível') + '<b>100 pts</b></div>' +
        items.map(function (n, i) { return '<div class="sc-prod"><div class="sc-img">' + I('image') + '</div><div><b>' + n + '</b><small>' + L('Size', 'Tamanho') + ': 100ml</small><div class="pr">R$ ' + (i ? '49,90' : '99,90') + '</div><div class="ft"><button type="button" class="gy-ib" aria-label="remove">' + I('trash') + '</button><div class="gy-counter" data-i="' + i + '"><button type="button" aria-label="-"' + (qty[i] <= 1 ? ' disabled' : '') + '>' + I('minus') + '</button><output>' + qty[i] + '</output><button type="button" aria-label="+">' + I('plus') + '</button></div></div></div></div>'; }).join('') + '</div>' +
        '<div class="sc-total"><div class="sc-row"><span>Total</span><b>R$ ' + total.toFixed(2).replace('.', ',') + '</b></div><button type="button" class="gy-btn gy-btn--block gy-btn--lg" data-act="confirm">' + L('Confirm order', 'Confirmar pedido') + '</button></div>' + nav('order');
    },
    notify: function () {
      return bar(L('Alerts', 'Avisos')) + '<div class="pp-scroll"><div class="gy-list">' +
        C.listItem({ title: L('Order #1042', 'Pedido #1042'), sub: L('Delivered yesterday', 'Entregue ontem'), icon: 'bag' }) + C.listItem({ title: L('New cycle', 'Novo ciclo'), sub: L('Opens tomorrow', 'Abre amanhã'), icon: 'bell' }) + C.listItem({ title: L('Profile', 'Perfil'), sub: L('Complete your data', 'Complete seus dados'), icon: 'user' }) + '</div></div>' +
        '<div class="sc-sheet" data-sheet>' + C.dialog({ title: L('Notification', 'Notificação'), text: L('This is an example of a notification in modal format, ideal as a reference for design studies.', 'Este é um exemplo de notificação em formato modal, ideal como referência para estudos de design.') }) + '</div>' + nav('notify');
    }
  };

  function render() {
    root.innerHTML = VIEWS[screen]();
    document.querySelectorAll('#pp-steps button').forEach(function (b) { b.setAttribute('aria-current', b.dataset.go === screen ? 'true' : 'false'); });
  }
  function go(s) { screen = s; render(); }

  root.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]'); if (g) { go(g.dataset.go); return; }
    var tb = e.target.closest('[data-tab]'); if (tb) { var p = tb.dataset.tab.split(':'); tabIdx[p[0]] = +p[1]; render(); return; }
    var chip = e.target.closest('.gy-chip'); if (chip) { chip.setAttribute('aria-pressed', chip.getAttribute('aria-pressed') !== 'true'); return; }
    var cb = e.target.closest('.gy-counter button');
    if (cb && !cb.disabled) { var i = +cb.parentNode.dataset.i; qty[i] = Math.max(1, qty[i] + (cb.getAttribute('aria-label') === '+' ? 1 : -1)); var sc = root.querySelector('.pp-scroll').scrollTop; render(); root.querySelector('.pp-scroll').scrollTop = sc; return; }
    var cl = e.target.closest('.gy-dialog button'); if (cl) { var sh = root.querySelector('[data-sheet]'); if (sh) sh.remove(); return; }
    if (e.target.closest('[data-act="confirm"]')) { var t = document.createElement('div'); t.className = 'sc-toast'; t.innerHTML = C.alert({ kind: 'success', title: L('Order confirmed', 'Pedido confirmado'), text: L('We will notify you when it ships.', 'Avisaremos quando for enviado.') }); root.appendChild(t); setTimeout(function () { t.remove(); }, 2600); }
  });

  document.getElementById('pp-steps').innerHTML = STEPS.map(function (s) { return '<li><button type="button" data-go="' + s[0] + '"></button></li>'; }).join('');
  document.getElementById('pp-steps').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) go(b.dataset.go); });

  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = UI[lang][el.dataset.t]; });
    document.querySelectorAll('#pp-steps button').forEach(function (b, i) { b.textContent = L(STEPS[i][1], STEPS[i][2]); });
    document.querySelectorAll('.pp-lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });
    document.querySelectorAll('a[data-keep-lang]').forEach(function (a) { var h = a.getAttribute('href').split('?')[0]; a.setAttribute('href', h + (lang === 'pt' ? '?lang=pt' : '')); });
    render();
  }
  document.querySelectorAll('.pp-lang button').forEach(function (b) { b.addEventListener('click', function () { lang = b.dataset.l; applyLang(); }); });
  function seg(id, attr) {
    document.querySelectorAll('#' + id + ' button').forEach(function (b) { b.addEventListener('click', function () { device.dataset[attr] = b.dataset.v; document.querySelectorAll('#' + id + ' button').forEach(function (o) { o.setAttribute('aria-pressed', o === b); }); }); });
  }
  seg('pp-themes', 'theme'); seg('pp-modes', 'mode');
  applyLang();
})();
