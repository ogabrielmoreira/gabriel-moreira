/* Protótipo da jornada · Informes de Rendimento (App Bradesco)
   App navegável com as telas do case, feitas com os componentes de ../ui/bds.js.
   As telas ficam em português (é o produto); o painel ao lado troca EN/PT. */
(function () {
  'use strict';
  var B = window.BDS;
  var lang = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function L(en, pt) { return lang === 'pt' ? pt : en; }

  var UI = {
    en: { title: 'Journey prototype', case: 'Case study', note: 'The app screens stay in Portuguese, as in the real product. Tap what looks tappable.', eyebrow: 'Interactive', h1: 'From the notification to the PDF', lead: 'Eight stages, the same ones as the journey in the case. Tap through the app or let it play by itself.', play: 'Play the journey', pause: 'Pause', again: 'Play again', restart: 'Restart', version: 'Selection screen', v2022: '2022', v2: 'Improved', action: 'User action', think: 'Thinking / feeling', opp: 'Design opportunity', tap: 'Tap the notification', noticeTag: 'A 2022 project, published now', notice: 'I designed this journey in 2022. The project sat in a drawer for a few years: I only have the release to publish it now, and I waited for it. Some of the original files were lost along the way but, now that the feature is public in the app, I recreated the interface as I had made it back then. It is documented in my Figma, rebuilt in code, and the Storybook is available too. Try the prototype. Independent material, not affiliated with the bank.' },
    pt: { title: 'Protótipo da jornada', case: 'Case', note: 'As telas do app ficam em português, como no produto real. Toque no que parece tocável.', eyebrow: 'Interativo', h1: 'Da notificação ao PDF', lead: 'Oito etapas, as mesmas da jornada do case. Navegue pelo app ou deixe tocar sozinho.', play: 'Tocar a jornada', pause: 'Pausar', again: 'Tocar de novo', restart: 'Reiniciar', version: 'Tela de seleção', v2022: '2022', v2: 'Melhorada', action: 'Ação do usuário', think: 'Pensando / sentindo', opp: 'Oportunidade de design', tap: 'Toque na notificação', noticeTag: 'Projeto de 2022, publicado agora', notice: 'Eu criei esta jornada em 2022. O projeto ficou alguns anos parado: só agora tenho a liberação para publicar, e esperei por ela. Parte dos arquivos originais se perdeu no caminho mas, com a funcionalidade agora pública no app, recriei a interface como havia feito na época. Ela está documentada no meu Figma, reconstruída em código, e o Storybook também está disponível. Teste o protótipo. Material independente, sem vínculo com o banco.' }
  };
  function t(k) { return UI[lang][k]; }

  var STAGES = [
    { n: ['Discovery', 'Descoberta'], a: ['Gets the notification announcing income tax statements in the app.', 'Recebe a notificação avisando que o informe de rendimentos chegou ao app.'], k: ['“I need this to file my taxes. Where do I find it?”', '“Preciso disso para declarar o IR. Onde eu acho?”'], o: ['Contextual push during tax season, leading straight to the feature.', 'Push contextual na época do IR, levando direto para a funcionalidade.'] },
    { n: ['Access', 'Acesso'], a: ['Opens the app and signs in.', 'Abre o app e entra na conta.'], k: ['“I want to get this done quickly.”', '“Quero resolver isso rápido.”'], o: ['Keep the notification destination after sign-in.', 'Manter o destino da notificação depois do login.'] },
    { n: ['Entry', 'Entrada'], a: ['Taps “Informe de rendimentos” in Quick access.', 'Toca em “Informe de rendimentos” no Acesso rápido.'], k: ['“Found it without digging through menus.”', '“Achei sem precisar procurar em menus.”'], o: ['Featured shortcut on the home screen during tax season.', 'Atalho em destaque na home durante o período de declaração.'] },
    { n: ['Lookup', 'Consulta'], a: ['Waits while the available statements are fetched.', 'Aguarda a busca dos informes disponíveis.'], k: ['“Did it freeze?”', '“Será que travou?”'], o: ['Illustration and a time expectation (up to 30 s) ease the wait.', 'Ilustração e expectativa de tempo (até 30 s) reduzem a ansiedade da espera.'] },
    { n: ['Selection', 'Seleção'], a: ['Picks the year and which statements to merge.', 'Escolhe o ano e quais informes quer juntar.'], k: ['“I only need 2021, for my account.”', '“Só preciso de 2021, da conta.”'], o: ['Year chips, a pre-selected item and help for statements from other products.', 'Chips de ano, item já selecionado e ajuda para informes de outros produtos.'] },
    { n: ['Generation', 'Geração'], a: ['Waits while everything is merged into one file.', 'Aguarda a junção em um único arquivo.'], k: ['“A single file is easier to send to my accountant.”', '“Um arquivo só facilita mandar pro contador.”'], o: ['Progress feedback in a friendly tone.', 'Feedback de progresso com linguagem próxima.'] },
    { n: ['Delivery', 'Entrega'], a: ['Saves or shares the generated PDF.', 'Salva ou compartilha o PDF gerado.'], k: ['“Done, that was it.”', '“Pronto, era isso.”'], o: ['Clear next steps: save, generate others, back to home.', 'Próximos passos claros: salvar, gerar outros, voltar ao início.'] },
    { n: ['Rating', 'Avaliação'], a: ['Rates the experience with stars and an optional comment.', 'Avalia a experiência com estrelas e comentário opcional.'], k: ['“That was easier than I expected.”', '“Foi mais fácil do que eu esperava.”'], o: ['Satisfaction survey at the end of the flow to improve the service.', 'Coleta de satisfação no fim do fluxo para evoluir o serviço.'] }
  ];

  var YEARS = ['2021', '2020', '2019', '2018', '2017'];
  var screensEl = $('#pp-screens');
  var cur = null, timers = [];
  var state = { screen: null, v2: false, year: '2021', playing: false, stage: 0, rateOpen: false, ended: false };

  function later(ms, fn) { var id = setTimeout(fn, ms); timers.push(id); return id; }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }

  // ---------- Telas ----------
  var SCREENS = {
    lock: function () {
      return B.statusBar({ time: '15:29' }) +
        '<div class="ps-lock-clock"><span>Qua., 16 de nov.</span><b>15:29</b></div>' +
        '<div class="ps-lock-push"></div><p class="ps-lock-hint">' + t('tap') + '</p>' + B.homeIndicator();
    },
    splash: function () {
      return '<div class="ps-splash-mark"><img src="' + B.assets + 'symbol-red.svg" alt="" /><img src="' + B.assets + 'wordmark-red.svg" alt="Bradesco" /></div>' + B.homeIndicator({ dark: true });
    },
    login: function () {
      return B.statusBar({ time: '15:15' }) +
        '<div class="ps-login-actions">' + B.icon('menu') + B.icon('bell') + '</div>' +
        '<div class="ps-login-logo"><img src="' + B.assets + 'bradesco-white.svg" alt="Bradesco" /></div>' +
        '<div class="ps-login-acc"><div><b>Gabriel</b>' + B.icon('down') + '</div><p>Agência **00        Conta *****00-0</p></div>' +
        '<div class="ps-login-cta">' + B.button({ label: 'Entrar', variant: 'white', act: 'enter' }) + '<span class="ps-link">Acessar outra conta</span></div>' +
        '<div class="ps-login-short"><div>' + B.icon('lock') + 'Chave de<br>Segurança</div><div>' + B.icon('chat') + 'BIA</div><div>' + B.icon('pix') + 'PIX</div></div>';
    },
    home: function () {
      return '<header class="ps-home-head">' + B.statusBar({ time: '15:22' }) + '<div class="ps-home-greet"><b>Olá, Gabriel</b>' + B.icon('bell') + B.icon('logout') + '</div></header>' +
        '<div class="ps-home-body"><div class="ps-home-strip"></div>' +
        '<div class="bds-card ps-balance"><b>Saldo</b><div class="ps-balance-row"><i></i>' + B.icon('eye') + '<a>Ver extrato</a></div></div>' +
        '<div class="ps-shortcuts"><div class="bds-card">' + B.icon('pix') + 'Pix</div><div class="bds-card">' + B.icon('barcode') + 'Pagar</div></div>' +
        '<h3 class="ps-h">Acesso rápido</h3>' +
        '<div class="ps-quick">' + B.quick({ icon: 'pix', label: 'Pix' }) + '<span class="is-hint">' + B.quick({ icon: 'doc', label: 'Informe de rendimentos', act: 'quick-doc' }) + '</span>' + B.quick({ icon: 'card', label: 'Cartões' }) + B.quick({ icon: 'chart', label: 'Investimentos' }) + '</div>' +
        '<h3 class="ps-h">Ofertas</h3>' +
        '<div class="bds-card ps-offer"><i></i><div><b>1, 2, 3... Tá na mão!</b><small>Liberamos seu crédito pessoal! Contrate em poucos cliques.</small></div>' + B.icon('right') + '</div>' +
        '<h3 class="ps-h">Cofrinhos</h3>' +
        '<div class="bds-card ps-piggy"><b>Guarde a partir de R$ 1,00</b><i></i></div></div>' +
        '<div class="ps-home-nav">' + B.nav({ current: 'Início' }) + '</div>' +
        '<div class="bds-scrim" data-for="ps-of"></div>' +
        '<div class="bds-sheet" id="ps-of" aria-hidden="true"><button class="bds-sheet-close" type="button" data-act="sheet-close" aria-label="Fechar">' + B.icon('close') + '</button>' +
        '<div class="ps-sheet-img"></div><h2 style="text-align:center">Conecte suas contas</h2><p style="text-align:center">Com o Open Finance, você aumenta suas chances de obter mais limite no cartão e nos empréstimos.</p>' +
        B.button({ label: 'Conectar contas', act: 'sheet-close' }) + B.button({ label: 'Agora não', variant: 'outline', act: 'sheet-close' }) + '</div>';
    },
    intro: function () {
      return B.topBar({ time: '15:16' }) + '<div class="ps-body ps-brand ps-center">' + B.lion({ red: true }) + '</div>';
    },
    closed: function () {
      return B.topBar({ time: '15:16' }) + '<div class="ps-body ps-brand ps-center" style="justify-content:flex-start;padding:150px 24px 34px">' + B.lion({ red: true }) +
        '<h2>O período de IR acabou</h2><p>Mas os informes dos últimos 5 anos continuam disponíveis por aqui.</p><p>A gente avisa quando os do próximo ano estiverem prontos.</p>' +
        '<div style="margin-top:auto;width:100%">' + B.button({ label: 'Consultar informes', variant: 'white', act: 'fetch' }) + '</div></div>';
    },
    fetching: function () {
      return B.topBar({ time: '15:16' }) + '<div class="ps-body ps-center">' + B.lion() + '<h2>Estamos consultando seus informes...</h2><p>Isso pode levar até 30 segundos.<br>Já, já a gente te mostra.</p><div class="bds-dots"><i></i><i></i><i></i></div></div>';
    },
    statements: function () {
      var y = state.year;
      if (!state.v2) {
        return B.topBar({ time: '15:16' }) + '<div class="ps-ir-body"><div class="ps-ir-scroll"><h1>Informes de rendimentos</h1>' +
          B.chips({ scroll: true, items: YEARS, selected: y }) +
          '<h3 id="ps-ytitle">Aqui estão os informes de ' + y + ' que você pode juntar em um único arquivo</h3><p class="ps-sub">Agora, é só escolher.</p>' +
          B.checkbox({ label: 'Conta - IRPF' }) + '<div style="margin-top:auto">' + B.accordion() + '</div></div>' +
          '<div class="ps-ir-foot">' + B.button({ label: 'Gerar informes', act: 'gen' }) + '</div></div>';
      }
      return B.topBar({ time: '15:16' }) + '<div class="ps-ir-body"><div class="ps-ir-scroll ps-v2"><h1>Informes de rendimentos</h1><p class="ps-sub">Escolha o ano e os informes que você quer juntar em um único PDF.</p>' +
        '<div><div class="ps-label">Ano-base</div>' + B.chips({ years: true, items: YEARS, selected: y }) + '</div>' +
        '<div class="ps-sec-head"><b id="ps-avail">Disponíveis em ' + y + '</b><button type="button" data-act="select-all">Selecionar todos</button></div>' +
        B.selCard() + B.help() + '</div>' +
        '<div class="ps-ir-foot ps-ir-foot--bar"><div class="ps-summary"><span id="ps-sum">1 informe selecionado</span><span>Será gerado 1 arquivo PDF</span></div>' + B.button({ label: 'Gerar informe', act: 'gen' }) + '</div></div>';
    },
    generating: function () {
      return B.topBar({ time: '15:16' }) + '<div class="ps-body ps-center">' + B.lion() + '<h2>É hora de juntar tudo em um único arquivo...</h2><p>Esse processo leva alguns segundos, mas logo entregaremos seus informes.</p><div class="bds-dots"><i></i><i></i><i></i></div></div>';
    },
    generated: function () {
      var app = function (bg, ic, label) { return '<button class="ps-share-app" type="button" data-act="share-close"><span style="background:' + bg + '">' + B.icon(ic) + '</span>' + label + '</button>'; };
      var act = function (ic, label) { return '<button class="ps-share-app" type="button" data-act="share-close"><span>' + B.icon(ic) + '</span>' + label + '</button>'; };
      return B.topBar({ time: '15:16' }) +
        '<div class="ps-ir-body ps-brand"><div class="ps-done-top">' + B.success() + '<b>Informe gerado</b><p>Ele está em um único arquivo.<br>Agora, é só salvar.</p></div>' +
        '<div class="ps-actions"><div class="bds-list">' +
        B.listItem({ icon: 'save', label: 'Salvar arquivo', act: 'save' }) + B.listItem({ icon: 'receipt', label: 'Gerar outros informes', act: 'others' }) +
        B.listItem({ icon: 'search', label: 'Ver informes não disponíveis aqui', act: 'unavailable' }) + B.listItem({ icon: 'home', label: 'Voltar ao início', act: 'home' }) +
        '</div></div></div>' +
        // share sheet
        '<div class="ps-share" id="ps-share">' + B.statusBar({ time: '15:17' }) + '<div class="ps-share-sheet">' +
        '<div class="ps-share-file"><i></i><div><b>IR_16112022151711</b><small>Documento PDF · 28 KB</small></div><button class="ps-share-x" type="button" data-act="share-close" aria-label="Fechar">' + B.icon('x') + '</button></div><hr />' +
        '<div class="ps-share-row">' + app('#1e88ff', 'wifi', 'AirDrop') + app('#34c759', 'chat', 'Mensagens') + app('#1e88ff', 'mail', 'Mail') + app('#f5c400', 'doc', 'Notas') + '</div><hr />' +
        '<div class="ps-share-row ps-share-row--act">' + act('copy', 'Copiar') + act('tag', 'Marcação') + act('print', 'Imprimir') + '</div>' +
        '<div class="ps-share-list"><button type="button" data-act="share-close">' + B.icon('tag') + 'Adicionar etiquetas</button><button type="button" data-act="share-close">' + B.icon('folder') + 'Salvar em Arquivos</button><button type="button" data-act="share-close">' + B.icon('print') + 'Imprimir</button></div>' +
        '</div></div>' +
        // avaliação
        '<div class="bds-scrim" data-for="ps-rate"></div>' +
        '<div class="bds-sheet ps-rate" id="ps-rate" aria-hidden="true"><div class="ps-rate-form"><h2>Conta pra gente o que achou dessa experiência</h2><p>Sua opinião nos ajuda a entregar serviços do jeito que você precisa.</p>' +
        B.stars() + B.textArea() + B.button({ label: 'Enviar avaliação', disabled: true, act: 'rate-send' }) + B.button({ label: 'Agora não', variant: 'text', act: 'rate-skip' }) + '</div>' +
        '<div class="ps-rate-thanks">' + B.success() + '<h2 style="text-align:center">Valeu pela avaliação!</h2><p style="text-align:center">Sua opinião ajuda a melhorar o serviço.</p></div></div>';
    }
  };

  var CLASS = { lock: 'ps-lock', splash: 'ps-splash', login: 'ps-brand ps-login', home: 'ps-home', intro: '', closed: '', fetching: '', statements: '', generating: '', generated: '' };

  // ---------- Ao entrar em cada tela ----------
  var ENTER = {
    lock: function (el) {
      later(700, function () { var slot = $('.ps-lock-push', el); if (slot) slot.innerHTML = B.push({ animate: true, act: 'open-app' }); });
    },
    splash: function () { later(1500, function () { go('login', 'fade'); }); },
    home: function (el) { later(550, function () { B.sheet($('#ps-of', el), true); }); },
    intro: function () { later(1500, function () { go('closed', 'fade'); }); },
    fetching: function () { later(2400, function () { go('statements', 'push'); }); },
    generating: function () { later(2800, function () { go('generated', 'fade'); }); },
    generated: function () { if (state.rateOpen) later(700, openRate); }
  };

  var STAGE_OF = { lock: 0, splash: 1, login: 1, home: 2, intro: 3, closed: 3, fetching: 3, statements: 4, generating: 5, generated: 6 };
  var BACK = { closed: 'home', statements: 'home', generated: 'statements', intro: 'home' };

  function go(id, mode) {
    clearTimers();
    var el = document.createElement('section');
    el.className = 'ps ' + (CLASS[id] || '') + ' enter-' + mode;
    el.setAttribute('data-screen', id);
    el.innerHTML = SCREENS[id]();
    var old = cur;
    screensEl.appendChild(el);
    void el.offsetWidth;
    el.classList.add('enter-active');
    if (old) {
      old.className = old.className.replace(/\benter-\w+/g, '').trim() + ' exit-' + mode;
      setTimeout(function () { if (old.parentNode) old.parentNode.removeChild(old); }, 650);
    }
    cur = el; state.screen = id;
    setStage(id === 'generated' && state.rateOpen ? 7 : STAGE_OF[id]);
    if (ENTER[id]) ENTER[id](el);
    autoplay();
  }

  function openRate() {
    state.rateOpen = true; setStage(7);
    B.sheet($('#ps-rate', cur), true);
  }
  function closeShare() {
    var s = $('#ps-share', cur);
    if (s) s.classList.remove('is-open');
    later(650, openRate);
  }
  function finishRating(sent) {
    var sheet = $('#ps-rate', cur);
    if (sent) sheet.classList.add('is-sent');
    later(sent ? 1900 : 150, function () {
      B.sheet(sheet, false);
      state.rateOpen = false; state.ended = true;
      markAllDone();
      if (state.playing) { state.playing = false; syncPlay(); }
      setPlayLabel();
    });
  }

  // ---------- Ações (cliques dentro do aparelho) ----------
  screensEl.addEventListener('click', function (e) {
    var a = e.target.closest('[data-act]');
    if (!a || a.disabled) return;
    var act = a.dataset.act;
    if (state.playing && e.isTrusted) { state.playing = false; syncPlay(); }
    switch (act) {
      case 'open-app': go('splash', 'zoom'); break;
      case 'enter': go('home', 'fade'); break;
      case 'sheet-close': B.sheet($('#ps-of', cur), false); break;
      case 'quick-doc': go('intro', 'push'); break;
      case 'fetch': go('fetching', 'push'); break;
      case 'gen': go('generating', 'push'); break;
      case 'back': if (BACK[state.screen]) go(BACK[state.screen], 'pop'); break;
      case 'save': $('#ps-share', cur).classList.add('is-open'); break;
      case 'share-close': closeShare(); break;
      case 'others': go('statements', 'pop'); break;
      case 'unavailable': go('statements', 'pop'); later(700, function () { var h = $('[data-bds-accordion]', cur); if (h && h.getAttribute('aria-expanded') !== 'true') h.click(); }); break;
      case 'home': go('home', 'pop'); break;
      case 'rate-send': finishRating(true); break;
      case 'rate-skip': finishRating(false); break;
      case 'select-all': var c = $('[data-bds-selcard]', cur); if (c && c.getAttribute('aria-checked') !== 'true') c.click(); break;
    }
  });

  // Campos que mudam a tela: ano, checkbox, card selecionável, estrelas
  screensEl.addEventListener('bds:change', function (e) {
    var d = e.detail || {}, tg = e.target;
    if (tg.matches('[data-bds-chips]')) {
      state.year = d.value;
      var h = $('#ps-ytitle', cur), v = $('#ps-avail', cur);
      if (h) h.textContent = 'Aqui estão os informes de ' + d.value + ' que você pode juntar em um único arquivo';
      if (v) v.textContent = 'Disponíveis em ' + d.value;
    }
    if (tg.matches('[data-bds-selcard]')) {
      var sum = $('#ps-sum', cur); if (sum) sum.textContent = d.checked ? '1 informe selecionado' : 'Nenhum informe selecionado';
      var g = $('[data-act="gen"]', cur); if (g) g.disabled = !d.checked;
    }
    if (tg.matches('[data-bds-stars]')) {
      var s = $('[data-act="rate-send"]', cur); if (s) s.disabled = !d.value;
    }
  });
  screensEl.addEventListener('bds:toggle', function (e) {
    var d = e.detail || {};
    if (d.open && e.target.matches('.bds-help')) later(480, function () { e.target.closest('.bds-helpcard').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); });
  });
  screensEl.addEventListener('change', function (e) {
    if (e.target.matches('.bds-checkbox input')) {
      var g = $('[data-act="gen"]', cur); if (g) g.disabled = !e.target.checked;
    }
  });

  // ---------- Etapas e painel ----------
  var stepsEl = $('#pp-steps'), detailEl = $('#pp-detail');
  function buildSteps() {
    stepsEl.innerHTML = STAGES.map(function (s, i) {
      return '<li data-i="' + i + '" data-state="todo"><button type="button"><i>' + (i + 1 < 10 ? '0' : '') + (i + 1) + '</i>' + L(s.n[0], s.n[1]) + '</button></li>';
    }).join('');
  }
  function setStage(i) {
    if (i === undefined) return;
    state.stage = i;
    Array.prototype.forEach.call(stepsEl.children, function (li, k) { li.dataset.state = k < i ? 'done' : (k === i ? 'now' : 'todo'); });
    var s = STAGES[i];
    detailEl.innerHTML = '<div><small>' + t('action') + '</small><p>' + L(s.a[0], s.a[1]) + '</p></div><div><small>' + t('think') + '</small><p>' + L(s.k[0], s.k[1]) + '</p></div><div class="opp"><small>' + t('opp') + '</small><p>' + L(s.o[0], s.o[1]) + '</p></div>';
  }
  function markAllDone() { Array.prototype.forEach.call(stepsEl.children, function (li) { li.dataset.state = 'done'; }); }
  stepsEl.addEventListener('click', function (e) {
    var li = e.target.closest('li'); if (!li) return;
    jump(+li.dataset.i);
  });
  function jump(i) {
    state.ended = false; state.rateOpen = (i === 7);
    var target = ['lock', 'login', 'home', 'fetching', 'statements', 'generating', 'generated', 'generated'][i];
    go(target, 'fade');
    setStage(i);
    setPlayLabel();
  }

  // ---------- Modo automático ----------
  function tap(sel, ms, then) {
    later(ms, function () {
      var el = $(sel, cur);
      if (el) el.click();
      if (then) then();
    });
  }
  function autoplay() {
    if (!state.playing) return;
    switch (state.screen) {
      case 'lock': tap('[data-act="open-app"]', 2300); break;
      case 'login': tap('[data-act="enter"]', 1700); break;
      case 'home': tap('#ps-of [data-act="sheet-close"]', 2400); tap('[data-act="quick-doc"]', 4100); break;
      case 'closed': tap('[data-act="fetch"]', 1700); break;
      case 'statements': tap('.bds-chip[data-value="2020"]', 1300); tap('.bds-chip[data-value="2021"]', 2000); tap('[data-act="gen"]', 3000); break;
      case 'generated':
        if (state.rateOpen) {
          tap('.bds-star[data-value="4"]', 1600); tap('[data-act="rate-send"]', 3000);
        } else {
          tap('[data-act="save"]', 2600);
          later(5200, function () { var b = $('.ps-share-list button:nth-child(2)', cur); if (b) b.click(); });
          later(5200 + 650 + 1600, function () { var b = $('.bds-star[data-value="4"]', cur); if (b) b.click(); });
          later(5200 + 650 + 3000, function () { var b = $('[data-act="rate-send"]', cur); if (b) b.click(); });
        }
        break;
    }
  }
  function setPlayLabel() {
    var b = $('#pp-play');
    b.firstElementChild.textContent = state.playing ? t('pause') : (state.ended ? t('again') : t('play'));
  }
  function syncPlay() { $('#pp-play').dataset.playing = String(state.playing); setPlayLabel(); }
  $('#pp-play').addEventListener('click', function () {
    if (state.playing) { state.playing = false; clearTimers(); syncPlay(); return; }
    if (state.ended) { restart(true); return; }
    state.playing = true; syncPlay();
    // retoma a partir da tela atual
    if (state.screen === 'splash' || state.screen === 'intro' || state.screen === 'fetching' || state.screen === 'generating') ENTER[state.screen](cur);
    autoplay();
  });
  function restart(play) {
    clearTimers();
    state.ended = false; state.rateOpen = false; state.year = '2021';
    state.playing = !!play; syncPlay();
    go('lock', 'fade');
  }
  $('#pp-restart').addEventListener('click', function () { restart(false); });

  // Versão da tela de seleção
  document.querySelectorAll('.pp-seg button').forEach(function (b) {
    b.addEventListener('click', function () {
      state.v2 = b.dataset.v === 'v2';
      document.querySelectorAll('.pp-seg button').forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      if (state.screen === 'statements') go('statements', 'fade');
    });
  });

  // ---------- Escala do aparelho ----------
  function fit() {
    var st = $('#pp-stage'), wrap = $('#pp-wrap'), sc = $('#pp-scale');
    var narrow = window.innerWidth <= 960;
    var w = st.clientWidth - 48;
    var h = narrow ? 99999 : st.clientHeight - 84;
    var s = Math.max(0.3, Math.min(1, w / 402, h / 874));
    sc.style.transform = 'scale(' + s + ')';
    wrap.style.width = 402 * s + 'px';
    wrap.style.height = 874 * s + 'px';
  }
  window.addEventListener('resize', fit);

  // ---------- Idioma e início ----------
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.dataset.t); });
  document.title = t('title') + ' · Bradesco | Gabriel Moreira';
  document.querySelectorAll('[data-keep-lang]').forEach(function (a) { if (lang === 'pt') a.href = a.getAttribute('href') + '?lang=pt'; });
  document.querySelectorAll('.pp-lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.l === lang));
    b.addEventListener('click', function () { if (b.dataset.l !== lang) location.href = location.pathname + (b.dataset.l === 'pt' ? '?lang=pt' : ''); });
  });
  buildSteps();
  fit();
  go('lock', 'fade');
  setPlayLabel();
})();
