/* OTTO Vigilant · componentes do "VW Safety" recriados em JS puro (HTML como string).
   Usado pela landing, pelo Storybook e pelo protótipo. window.OT = { c, icon, LV, lang, L, fit, levelOf, score } */
(function () {
  'use strict';
  var OT = window.OT = { lang: /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en', c: {} };
  var C = OT.c;
  function L(en, pt) { return OT.lang === 'pt' ? pt : en; }
  OT.L = L;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]; }); }
  OT.esc = esc;

  /* ---- Ícones (grade 24, traço) ---- */
  var P = {
    warn: '<path d="M12 3.2 2.6 20h18.8L12 3.2z"/><path d="M12 10v4.4M12 17.4v.1"/>',
    back: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    power: '<path d="M12 3v8"/><path d="M6.3 6.8a8 8 0 1 0 11.4 0"/>',
    bag: '<path d="M6 8h12l1 13H5L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    volume: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 9a4 4 0 0 1 0 6"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>',
    home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.2"/><path d="M3.3 10.5 9.8 11M20.7 10.5 14.2 11M12 14.2V21"/>',
    car: '<path d="M4 16V12l2-5h12l2 5v4"/><path d="M3 16h18v3H3z"/><circle cx="7.5" cy="13.5" r="1"/><circle cx="16.5" cy="13.5" r="1"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    cup: '<path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M17 9h2a2 2 0 0 1 0 5h-2M7 3v2M11 3v2M15 3v2"/>',
    shield: '<path d="M12 3 4 6v6c0 4.6 3.2 7.8 8 9 4.8-1.2 8-4.4 8-9V6l-8-3z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    check: '<path d="m4 12.5 5 5L20 6.5"/>',
    bell: '<path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4l2-2z"/><path d="M10 21h4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    camera: '<path d="M3 8h4l2-3h6l2 3h4v12H3V8z"/><circle cx="12" cy="13" r="3.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
    close: '<path d="M5 5l14 14M19 5 5 19"/>',
    temp: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
    vibe: '<path d="M8 6v12M4 9v6M16 6v12M20 9v6M12 3v18"/>',
    lane: '<path d="M7 21 10 3M17 21 14 3"/><path d="M12 5v3M12 11v3M12 17v3"/>',
    hazard: '<path d="M12 3 2.6 20h18.8L12 3z"/><path d="M12 8 7 17h10L12 8z"/>',
    stop: '<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8l5-5z"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3.5 3.5 0 0 0 3 5.5A3 3 0 0 0 12 20V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3.5 3.5 0 0 1-3 5.5A3 3 0 0 1 12 20"/>',
    nav: '<path d="m3 11 18-8-8 18-2-8-8-2z"/>'
  };
  function icon(n, s) { return '<svg viewBox="0 0 24 24" width="' + (s || 24) + '" height="' + (s || 24) + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || '') + '</svg>'; }
  OT.icon = icon;

  /* ---- Níveis de risco ---- */
  var LV = OT.LV = {
    0: { n: ['Normal', 'Normal'], r: '< 30%' },
    1: { n: ['Mild fatigue', 'Cansaço leve'], r: '30–50%' },
    2: { n: ['Moderate fatigue', 'Fadiga moderada'], r: '50–75%' },
    3: { n: ['Critical fatigue', 'Fadiga crítica'], r: '> 75%' }
  };
  function lvName(l) { return L(LV[l].n[0], LV[l].n[1]); }
  OT.lvName = lvName;
  OT.levelOf = function (s) { return s > 75 ? 3 : s >= 50 ? 2 : s >= 30 ? 1 : 0; };
  /* Motor de risco multimodal: câmera (50%), voz (20%) e telemetria (30%). */
  OT.score = function (v) {
    var tele = Math.min(100, v.hours * 7 + v.steer * 0.3);
    return Math.round(Math.min(100, v.visual * 0.5 + v.voice * 0.2 + tele * 0.3));
  };

  var MSG = {
    1: ['Percebi que você está com os olhos cansados. Que tal uma parada rápida?\n\nEncontrei um café legal em 2.3 km na sua rota.', 'I noticed your eyes look tired. How about a quick stop?\n\nI found a nice café 2.3 km ahead on your route.'],
    2: ['Sua fadiga tá em nível moderado agora.\nVocê precisa descansar, isso não é sugestão.\n\nAchei um lugar seguro em 3.5 km, com tudo que você precisa.\nVocê topa?', 'Your fatigue is at a moderate level now.\nYou need to rest, this is not a suggestion.\n\nI found a safe place 3.5 km away with everything you need.\nAre you in?'],
    3: ['Você cochilou agora. Eu vi e peguei no volante.\nNão se preocupa, você está seguro.\n\nEncostei o carro no acostamento... você precisa descansar.\nEncontrei um posto de gasolina em 1.2 km na sua rota.', 'You just dozed off. I saw it and took the wheel.\nDon’t worry, you’re safe.\n\nI pulled over to the shoulder... you need to rest.\nI found a gas station 1.2 km ahead on your route.']
  };
  OT.msg = function (l) { return L(MSG[l][1], MSG[l][0]).replace(/\n/g, '\n'); };
  // As mensagens no código estão em PT (índice 0) e EN (1): L(en, pt)
  OT.msg = function (l) { return OT.lang === 'pt' ? MSG[l][0] : MSG[l][1]; };

  /* ---- Componentes ---- */
  C.button = function (p) {
    p = p || {};
    return '<button type="button" class="ot-btn' + (p.variant === 'outline' ? ' ot-btn--outline' : '') + '" data-level="' + (p.level == null ? 1 : p.level) + '"' + (p.act ? ' data-act="' + p.act + '"' : '') + '>' + esc(p.label || L('Confirm', 'Confirmar')) + '</button>';
  };
  C.badge = function (p) {
    var l = +(p && p.level != null ? p.level : 1);
    return '<span class="ot-badge" data-level="' + l + '"><i></i>' + esc((p && p.label) || lvName(l)) + '</span>';
  };
  var H = [40, 60, 80, 100, 80, 60, 40, 30, 50, 70, 90, 70, 50, 30];
  C.wave = function (p) {
    p = p || {};
    return '<div class="ot-wave' + (p.live === false ? '' : ' is-live') + '" data-level="' + (p.level == null ? 1 : p.level) + '" role="img" aria-label="' + L('OTTO is speaking', 'OTTO está falando') + '">' +
      H.map(function (h, i) { return '<i style="height:' + h + '%;--n:' + i + '"></i>'; }).join('') + '</div>';
  };
  C.alert = function (p) {
    p = p || {}; var l = +(p.level || 1);
    var later = L('Maybe later', 'Deixa pra depois'), go = l === 3 ? L('Got it, let’s go', 'Entendi, vamos lá') : L('Sure, let’s go', 'Claro, vamos lá');
    return '<div class="ot-alert" data-level="' + l + '" role="alertdialog" aria-label="' + esc(lvName(l)) + '">' +
      '<h2>' + L('OTTO is speaking...', 'Otto está falando...') + '</h2>' + C.wave({ level: l, live: p.live }) +
      '<p>' + esc(p.text || OT.msg(l)) + '</p>' +
      '<div class="ot-acts">' + (l < 3 ? C.button({ label: later, variant: 'outline', level: l, act: 'later' }) : '') + C.button({ label: go, level: l, act: 'accept' }) + '</div></div>';
  };
  C.event = function (p) {
    p = p || {}; var l = +(p.level || 1);
    var inner = '<span class="ico" data-level="' + l + '">' + icon('warn', 48) + '</span><div><b>' + esc(p.title) + '</b><span>' + esc(p.desc) + (p.desc2 ? '<br>' + esc(p.desc2) : '') + '</span></div>';
    return p.act ? '<button type="button" class="ot-ev" data-level="' + l + '" data-act="' + p.act + '">' + inner + '</button>' : '<div class="ot-ev" data-level="' + l + '">' + inner + '</div>';
  };
  C.gauge = function (p) {
    var s = Math.max(0, Math.min(100, +(p && p.score != null ? p.score : 42))), l = OT.levelOf(s);
    var len = Math.PI * 50, seg = function (a, b, col) { return '<path class="seg" d="M10 60A50 50 0 0 1 110 60" stroke="' + col + '" stroke-dasharray="' + ((b - a) / 100 * len).toFixed(2) + ' ' + len.toFixed(2) + '" stroke-dashoffset="' + (-a / 100 * len).toFixed(2) + '"/>'; };
    return '<div class="ot-gauge" data-level="' + l + '"><svg viewBox="0 0 120 66" role="img" aria-label="' + L('Risk score', 'Score de risco') + ' ' + s + '%">' +
      seg(0, 30, 'var(--ot-line)') + seg(30, 50, 'var(--ot-l1)') + seg(50, 75, 'var(--ot-l2)') + seg(75, 100, 'var(--ot-l3)') +
      '<g class="needle" style="transform:rotate(' + (s * 1.8 - 90) + 'deg)"><path d="M60 60V16" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#fff"/></g></svg>' +
      '<div class="read"><b>' + s + '%</b><span>' + lvName(l) + '</span></div></div>';
  };
  C.signal = function (p) {
    p = p || {}; var pct = Math.max(0, Math.min(100, +p.pct || 0));
    return '<div class="ot-sig"' + (p.level != null ? ' data-level="' + p.level + '"' : '') + '>' + icon(p.icon || 'eye', 22) + '<label>' + esc(p.label) + '</label><output>' + esc(p.value != null ? p.value : pct + '%') + '</output><div class="bar"><i style="width:' + pct + '%"></i></div></div>';
  };
  C.ladder = function (p) {
    var l = +(p && p.level != null ? p.level : 1), n = l === 0 ? 0 : l + 1;
    var st = [['mic', L('Voice', 'Voz'), L('soft, then firm', 'suave, depois firme')], ['eye', L('Visual', 'Visual'), L('by risk level', 'por nível de risco')], ['vibe', L('Haptic', 'Tátil'), L('wheel and seat', 'volante e banco')], ['wheel', L('Control', 'Controle'), L('only Level 2+', 'só em nível 2+')]];
    return '<div class="ot-ladder" data-level="' + l + '">' + st.map(function (s, i) { return '<div class="ot-step' + (i < n ? ' on' : '') + '">' + icon(s[0], 28) + '<b>' + s[1] + '</b><small>' + s[2] + '</small></div>'; }).join('') + '</div>';
  };
  C.takeover = function (p) {
    var n = +(p && p.step != null ? p.step : 0);
    var st = [L('Controlled deceleration', 'Desaceleração controlada'), L('Lane keeping centers the car', 'Manutenção de faixa centraliza o carro'), L('Hazard lights on', 'Pisca-alerta acionado'), L('Looking for a safe shoulder', 'Procurando acostamento seguro'), L('Full stop, parking brake on', 'Parada completa, freio de estacionamento')];
    return '<ol class="ot-take" style="margin:0;padding:0" data-level="3">' + st.map(function (s, i) { return '<li class="' + (i < n ? 'done' : i === n ? 'on' : '') + '"><span class="n">' + (i < n ? '✓' : i + 1) + '</span><span>' + s + '</span></li>'; }).join('') + '</ol>';
  };
  C.tile = function (p) {
    p = p || {};
    var mk = '<span class="mk" style="background:' + (p.bg || '#2a2d33') + '">' + (p.mark || icon(p.icon || 'nav', 30)) + '</span>';
    var inner = mk + '<div><b>' + esc(p.name) + '</b><span>' + esc(p.desc) + '</span></div>';
    return p.act ? '<button type="button" class="ot-tile" data-act="' + p.act + '">' + inner + '</button>' : '<div class="ot-tile">' + inner + '</div>';
  };
  C.toggle = function (p) {
    p = p || {};
    return '<button type="button" class="ot-sw" role="switch" aria-pressed="' + (p.on ? 'true' : 'false') + '"' + (p.act ? ' data-act="' + p.act + '"' : '') + '><div><b>' + esc(p.label) + '</b>' + (p.hint ? '<small>' + esc(p.hint) + '</small>' : '') + '</div><span class="trk"></span></button>';
  };
  C.toast = function (p) {
    p = p || {}; var l = +(p.level != null ? p.level : 1);
    return '<div class="ot-toast" data-level="' + l + '" role="status">' + icon(p.icon || 'check', 26) + '<div><b>' + esc(p.title) + '</b><span>' + esc(p.text) + '</span></div></div>';
  };
  var VWD = 'M12 22.586c-5.786 0-10.543-4.8-10.543-10.586 0-1.2.214-2.357.6-3.471l6.172 12c.085.171.171.3.385.3.215 0 .3-.129.386-.3l2.871-6.386q.064-.129.129-.129c.086 0 .086.086.129.129l2.914 6.386c.086.171.171.3.386.3.214 0 .3-.129.385-.3l6.172-12c.385 1.071.6 2.228.6 3.471-.043 5.786-4.8 10.586-10.586 10.586m0-13.329c-.086 0-.086-.086-.129-.128l-3.3-7.115a10.12 10.12 0 0 1 6.858 0l-3.3 7.115c-.043.042-.043.128-.129.128m-3.471 7.714c-.086 0-.086-.085-.129-.128L3 6.47c.943-1.542 2.314-2.828 3.9-3.728l3.814 8.228c.086.172.172.215.3.215h1.972c.128 0 .214-.043.3-.215l3.771-8.228c1.586.9 2.957 2.186 3.9 3.728L15.6 16.843q-.065.128-.129.128c-.085 0-.085-.085-.128-.128L13.286 12.3c-.086-.171-.172-.214-.3-.214h-1.972c-.128 0-.214.043-.3.214l-2.057 4.543c-.043.043-.043.128-.128.128M12 24c6.643 0 12-5.357 12-12S18.643 0 12 0 0 5.357 0 12s5.357 12 12 12';
  OT.vw = function (s) { return '<svg viewBox="0 0 24 24" width="' + (s || 28) + '" height="' + (s || 28) + '" fill="currentColor" aria-hidden="true"><path d="' + VWD + '"/></svg>'; };
  OT.mark = function (s) {
    s = s || 34;
    return '<svg viewBox="0 0 40 40" width="' + s + '" height="' + s + '" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#001e50"/><g transform="translate(7 7) scale(1.1)" fill="#fff"><path d="' + VWD + '"/></g></svg>';
  };

  /* Moldura do VW Play (1333 x 620). Conteúdo entra no painel principal. */
  C.dash = function (p) {
    p = p || {};
    var side = ['back', 'phone', 'music', 'power', 'bag', 'volume'].map(function (n, i) { return '<button type="button" data-nav="' + n + '" aria-label="' + (n === 'bag' ? 'Otto Vigilant' : n) + '"' + (p.active === n ? ' aria-current="true"' : '') + (n === 'back' ? ' data-act="home"' : '') + '>' + (n === 'bag' ? OT.vw(34) : icon(n, 28)) + '</button>'; }).join('');
    return '<div class="ot-fit"><div class="ot-dash" data-mode="' + (p.mode || 'night') + '">' +
      '<div class="ot-side">' + side + '</div>' +
      '<div class="ot-status"><span class="home">' + icon('home', 22) + '</span><span>' + L('Wi-Fi', 'Wi-Fi') + '</span><span>' + esc(p.time || '21:15') + '</span><i class="av"></i></div>' +
      '<div class="ot-main"><div class="ot-panel" data-panel>' + (p.html || '') + '</div></div>' +
      '<div class="ot-rside"><span class="ps">P</span><span>' + icon('car', 28) + '</span><span>' + icon('gear', 28) + '</span></div></div></div>';
  };
  /* Ajusta a moldura 1333x620 à largura do elemento (.ot-fit). */
  OT.fit = function (root) {
    (root || document).querySelectorAll('.ot-fit').forEach(function (h) {
      if (h._ro) return;
      var d = h.querySelector('.ot-dash'); if (!d) return;
      var go = function () { var s = h.clientWidth / 1333; d.style.transform = 'scale(' + s + ')'; h.style.height = (620 * s) + 'px'; };
      h._ro = new ResizeObserver(go); h._ro.observe(h); go();
    });
  };
  OT.dashSet = function (host) { return host; };
})();
