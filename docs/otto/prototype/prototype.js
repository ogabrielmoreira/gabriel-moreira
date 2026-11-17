/* Protótipo OTTO Vigilant: simula um motorista cansado e mostra o motor de risco,
   os três níveis de alerta e a tomada de controle, com os componentes de ../ui/otto.js. */
(function () {
  'use strict';
  var OT = window.OT, C = OT.c, L = OT.L;
  var lang = OT.lang;
  var UI = {
    en: { title: 'VW Play prototype', case: 'Case study', note: 'The screen is the car. The panel on the right is the driver: move the sliders and OTTO reacts.', eyebrow: 'Interactive', h1: 'Simulate a tired driver', lead: 'The risk engine fuses the camera (50%), voice (20%) and telemetry (30%) into one score. Cross a threshold and OTTO speaks, escalating from a suggestion to active control.', noticeTag: 'Independent concept', notice: 'Independent, non-profit concept for study and portfolio, with no link to Volkswagen do Brasil or the official OTTO. The interface was rebuilt from scratch.', presets: 'Quick scenarios', inputs: 'Driver and car signals', options: 'Options', ladder: 'Intervention ladder' },
    pt: { title: 'Protótipo VW Play', case: 'Case', note: 'A tela é o carro. O painel ao lado é o motorista: mexa nos controles e o OTTO reage.', eyebrow: 'Interativo', h1: 'Simule um motorista cansado', lead: 'O motor de risco funde a câmera (50%), a voz (20%) e a telemetria (30%) em um score. Ao cruzar um limiar, o OTTO fala e escala de uma sugestão até o controle ativo.', noticeTag: 'Conceito independente', notice: 'Conceito independente e sem fins lucrativos, para estudo e portfólio, sem vínculo com a Volkswagen do Brasil nem com o OTTO oficial. A interface foi recriada do zero.', presets: 'Cenários rápidos', inputs: 'Sinais do motorista e do carro', options: 'Opções', ladder: 'Escada de intervenção' }
  };
  function t(k) { return UI[lang][k]; }

  var DEF = { visual: 12, voice: 8, hours: 1, steer: 10 };
  var S = { v: Object.assign({}, DEF), micro: false, screen: 'home', contrast: false, adas: true, contact: true, voice: true, caption: '', tok: 0,
    alert: 0, shown: 0, take: null, log: [], preset: 'ok', timers: [] };
  var host = document.getElementById('pp-host');
  var panel, over;

  function seedLog() {
    S.log = [
      { level: 1, title: L('Mild tiredness · Nov 20, 2:30pm', 'Cansaço Leve - 20 de Novembro, 14h30'), desc: L('Coffee break accepted', 'Pausa para café aceita'), replay: 1 },
      { level: 3, title: L('Critical fatigue · Dec 21, 10:10pm', 'Fadiga Crítica - 21 de Dezembro, 22h10'), desc: L('Driver on BR-101 at night, dozed off.', 'Motorista em BR-101 à noite, cochilou.'), desc2: L('System took control | Safe stop', 'Sistema assumiu controle | Parada segura'), replay: 3 }
    ];
  }
  function score() { return S.micro ? Math.max(76, OT.score(S.v)) : OT.score(S.v); }
  function level() { return S.micro ? 3 : OT.levelOf(OT.score(S.v)); }

  /* ---- telas ---- */
  function viewHome() {
    return '<h2 class="ot-title">' + L('Discover your apps', 'Descubra seus apps') + '</h2><div style="height:26px"></div><div class="pv-home">' +
      C.tile({ name: 'Otto Vigilant', desc: L('Monitoring and safety', 'Monitoramento e Segurança'), mark: OT.mark(54), bg: 'transparent', act: 'open' }) +
      C.tile({ name: L('Navigation', 'Navegação'), desc: L('Maps and traffic alerts', 'Mapas e alertas de trânsito'), icon: 'nav', bg: '#1b6de0' }) +
      C.tile({ name: L('My car', 'Meu carro'), desc: L('Full integration with your car', 'Integração total com seu carro'), icon: 'car', bg: '#0a2a66' }) +
      C.tile({ name: L('Insurance', 'Seguradora'), desc: L('Assistance and coverage', 'Assistência e cobertura'), icon: 'shield', bg: '#0e7a8a' }) +
      '</div><p class="pv-hint">' + L('Tap Otto Vigilant to open the module.', 'Toque em Otto Vigilant para abrir o módulo.') + '</p>';
  }
  function liveHtml() {
    var s = score(), l = level(), v = S.v, tele = Math.min(100, v.hours * 7 + v.steer * 0.3);
    return C.gauge({ score: s }) + '<div class="pv-sigs">' +
      C.signal({ label: L('Eyelid closure (PERCLOS)', 'Fechamento das pálpebras (PERCLOS)'), icon: 'eye', pct: S.micro ? 100 : v.visual, level: OT.levelOf(S.micro ? 100 : v.visual) }) +
      C.signal({ label: L('Voice fatigue', 'Fadiga na voz'), icon: 'mic', pct: v.voice, level: OT.levelOf(v.voice) }) +
      C.signal({ label: L('Telemetry (wheel, lane, time)', 'Telemetria (volante, faixa, tempo)'), icon: 'wheel', pct: Math.round(tele), level: OT.levelOf(tele) }) + '</div>';
  }
  function viewVigilant() {
    return '<div class="pv-grid"><div><h2 class="ot-title">Otto Vigilant</h2><p class="ot-sec">' + L('Event log', 'Registro de eventos') + '</p><div class="pv-events">' +
      S.log.slice(0, 3).map(function (e, i) { return C.event({ level: e.level, title: e.title, desc: e.desc, desc2: e.desc2, act: 'replay:' + i }); }).join('') +
      '</div></div><div class="pv-live" id="pv-live"><p class="ot-sec" style="margin:14px 0 0">' + L('Live monitoring', 'Monitoramento ao vivo') + '</p>' + liveHtml() + '</div></div>';
  }
  function viewTakeover() {
    var T = S.take, done = T.step >= 5;
    var speeds = [110, 92, 74, 46, 20, 0];
    return '<div class="pv-takeover"><div><span class="ot-badge" data-level="3"><i></i>' + OT.lvName(3) + '</span><h2 class="ot-title" style="margin-top:18px;font-size:50px">' + (done ? L('Stopped safely', 'Parada segura') : L('OTTO has the wheel', 'O OTTO assumiu o volante')) + '</h2>' +
      '<div class="pv-speed" style="margin-top:24px">' + speeds[Math.min(T.step, 5)] + '<small>km/h</small></div>' +
      (done ? '<div style="margin-top:26px">' + C.button({ label: L('Resume', 'Retomar'), level: 1, act: 'resume' }) + '</div>' : '') + '</div>' +
      '<div class="pv-take">' + C.takeover({ step: T.step }) + '<div class="pv-cap">' + C.wave({ level: 3, live: S.speaking }) + '<p>' + OT.esc(S.caption || '') + '</p></div></div></div>';
  }
  function render() {
    panel.innerHTML = S.take ? viewTakeover() : S.screen === 'home' ? viewHome() : viewVigilant();
    host.querySelectorAll('.ot-side button').forEach(function (b) { b.setAttribute('aria-current', S.screen === 'vigilant' && b.dataset.nav === 'bag' ? 'true' : 'false'); });
  }
  function renderOverlay() {
    var l = S.alert;
    over.className = 'ot-over' + (l ? ' on' : '');
    over.dataset.level = l || 0;
    over.innerHTML = l ? C.alert({ level: l }) + (l === 3 && S.adas ? '<div class="pv-count" id="pv-count"><i></i></div>' : '') : '';
  }
  function sideRefresh() {
    var s = score(), l = level();
    document.getElementById('pp-score').innerHTML = '<span class="d" style="background:' + ['#7da2ff', '#00b374', '#ff9500', '#e63946'][l] + '"></span><div><b>' + s + '%</b> · ' + OT.lvName(l) + '</div>';
    var lad = document.getElementById('pp-ladder'); lad.innerHTML = C.ladder({ level: l });
    var lv = document.getElementById('pv-live'); if (lv) lv.innerHTML = '<p class="ot-sec" style="margin:14px 0 0">' + L('Live monitoring', 'Monitoramento ao vivo') + '</p>' + liveHtml();
  }

  /* ---- voz do OTTO: clipes gravados (macOS: Luciana em PT, Samantha em EN) ---- */
  var CAP = {
    a1: [0, 0], a2: [0, 0], a3: [0, 0],
    t0: ['I’m slowing down, safely.', 'Estou reduzindo a velocidade, com segurança.'],
    t1: ['Keeping the car centered in the lane.', 'Mantendo o carro centralizado na faixa.'],
    t2: ['Hazard lights on.', 'Acionei o pisca-alerta.'],
    t3: ['Looking for a safe shoulder.', 'Procurando um acostamento seguro.'],
    t4: ['I’m parking.', 'Estou estacionando.'],
    t5: ['Done, we stopped safely. Parking brake on. Rest now, I’ll keep watch.', 'Pronto, paramos com segurança. Freio de estacionamento acionado. Descanse, eu fico de olho.'],
    ok12: ['Okay. I added the stop to your route.', 'Certo. Adicionei a parada na sua rota.'],
    ok3: ['Glad you answered. I’ll guide you to the station.', 'Que bom que você respondeu. Vou te guiar até o posto.'],
    contact: ['I notified your emergency contact.', 'Avisei o seu contato de emergência.']
  };
  var audio = null;
  function stopVoice() { S.tok++; if (audio) { audio.onended = null; audio.onerror = null; try { audio.pause(); } catch (e) {} audio = null; } }
  function speak(key, done) {
    var tok = ++S.tok, fired = false;
    var fin = function () { if (fired || tok !== S.tok) return; fired = true; audio = null; S.speaking = false; wave(false); done && done(); };
    var cap = CAP[key];
    S.caption = cap && cap[0] ? L(cap[0], cap[1]) : S.caption;
    if (S.take) render();
    if (!S.voice) { setTimeout(fin, key.charAt(0) === 'a' ? 900 : 1500); return; }
    try {
      audio = new Audio('audio/' + lang + '/' + key + '.mp3'); S.speaking = true; wave(true);
      audio.onended = function () { setTimeout(fin, key.charAt(0) === 't' ? 350 : 0); };
      audio.onerror = function () { setTimeout(fin, 1500); };
      var p = audio.play(); if (p && p.catch) p.catch(function () { setTimeout(fin, 2500); });
    } catch (e) { setTimeout(fin, 1500); }
  }
  function wave(on) { document.querySelectorAll('#pp-host .ot-wave').forEach(function (w) { w.classList.toggle('is-live', !!on); }); }

  /* ---- lógica ---- */
  function clearTimers() { S.timers.forEach(clearTimeout); S.timers = []; }
  function openAlert(l) {
    stopVoice(); clearTimers();
    S.alert = l; S.shown = Math.max(S.shown, l); renderOverlay();
    speak('a' + l, function () {
      if (l === 3 && S.adas && S.alert === 3) {
        var c = document.getElementById('pv-count'); if (c) c.classList.add('go');
        S.timers.push(setTimeout(startTakeover, 5000));
      }
    });
  }
  function closeAlert(accepted) {
    var l = S.alert;
    clearTimers(); stopVoice(); S.alert = 0; renderOverlay();
    if (accepted && l) {
      speak(l === 3 ? 'ok3' : 'ok12');
      toast(L('You answered in time', 'Você respondeu a tempo'), l === 3 ? L('OTTO keeps watching and guides you to the stop.', 'O OTTO segue vigiando e guia você até a parada.') : L('Route to the stop added to navigation.', 'Rota até a parada adicionada à navegação.'), 1);
    }
  }
  function toast(title, text, l) {
    var el = document.createElement('div'); el.className = 'pv-toast';
    el.innerHTML = C.toast({ level: l, title: title, text: text });
    over.parentNode.appendChild(el); setTimeout(function () { el.remove(); }, 3600);
  }
  function startTakeover() {
    clearTimers(); stopVoice(); S.alert = 0; renderOverlay();
    S.take = { step: 0 }; render();
    var run = function () {
      var n = S.take.step;
      if (n >= 5) { finishTakeover(); return; }
      speak('t' + n, function () { if (!S.take) return; S.take.step = n + 1; render(); run(); });
    };
    run();
  }
  function finishTakeover() {
    S.log.unshift({ level: 3, title: L('Critical fatigue · today, 9:15pm', 'Fadiga Crítica - hoje, 21h15'), desc: L('Simulated micro-sleep on the highway.', 'Micro-sono simulado na rodovia.'), desc2: L('System took control | Safe stop', 'Sistema assumiu controle | Parada segura'), replay: 3 });
    speak('t5', function () {
      if (S.contact && S.take) { toast(L('Emergency contact notified', 'Contato de emergência avisado'), L('Sent with your location.', 'Enviado com a sua localização.'), 1); speak('contact'); }
    });
  }
  function resume() {
    clearTimers(); stopVoice(); S.take = null; S.micro = false; S.shown = 0; Object.assign(S.v, DEF); S.preset = 'ok'; buildControls(); render(); sideRefresh();
  }
  /* Dispara o alerta quando o nível sobe. Cair para 0 reinicia. */
  function evaluate() {
    sideRefresh();
    var l = level();
    if (S.take) return;
    if (l === 0) { S.shown = 0; if (S.alert) closeAlert(false); return; }
    if (l < S.shown) S.shown = l - 1 < 0 ? 0 : l - 1;
    if (l > S.shown && l !== S.alert) openAlert(l);
  }

  /* ---- controles do painel ---- */
  var PRE = { ok: { v: { visual: 12, voice: 8, hours: 1, steer: 10 }, micro: false, c: '#7da2ff', n: ['Alert driver', 'Motorista atento'] },
    l1: { v: { visual: 40, voice: 35, hours: 2.5, steer: 30 }, micro: false, c: '#00b374', n: ['Mild tiredness', 'Cansaço leve'] },
    l2: { v: { visual: 70, voice: 60, hours: 5, steer: 60 }, micro: false, c: '#ff9500', n: ['Moderate fatigue', 'Fadiga moderada'] },
    l3: { v: { visual: 90, voice: 80, hours: 8, steer: 90 }, micro: true, c: '#e63946', n: ['Micro-sleep', 'Micro-sono'] } };
  var SL = [['visual', 'Camera, fatigue score (VW-IMS)', 'Câmera, score de fadiga (VW-IMS)', 0, 100, 1, '%', 'PERCLOS, blinks, yawns, head tilt', 'PERCLOS, piscadas, bocejos, inclinação da cabeça'],
    ['voice', 'Voice, fatigue score', 'Voz, score de fadiga', 0, 100, 1, '%', 'Slurred speech, long pauses, tone', 'Fala arrastada, pausas longas, tom'],
    ['hours', 'Continuous driving', 'Direção contínua', 0, 10, 0.5, 'h', '2h suggests, 5h recommends', '2h sugere, 5h recomenda'],
    ['steer', 'Steering corrections', 'Correções de volante', 0, 100, 1, '%', 'Lane variation and abrupt corrections', 'Variação de faixa e correções bruscas']];

  function buildControls() {
    document.getElementById('pp-presets').innerHTML = Object.keys(PRE).map(function (k) { var p = PRE[k]; return '<button type="button" data-p="' + k + '" aria-pressed="' + (S.preset === k) + '"><i style="background:' + p.c + '"></i>' + L(p.n[0], p.n[1]) + '</button>'; }).join('');
    document.getElementById('pp-sliders').innerHTML = SL.map(function (s) {
      return '<label class="pp-sl"><span>' + L(s[1], s[2]) + '</span><output>' + S.v[s[0]] + s[6] + '</output><input type="range" data-k="' + s[0] + '" min="' + s[3] + '" max="' + s[4] + '" step="' + s[5] + '" value="' + S.v[s[0]] + '"><small>' + L(s[7], s[8]) + '</small></label>';
    }).join('');
    var O = [['contrast', 'High-contrast mode', 'Modo de alto contraste', 'Used in critical scenarios', 'Usado em cenários críticos'], ['adas', 'Level 2+ vehicle (ADAS)', 'Veículo Nível 2+ (ADAS)', 'Allows active takeover at level 3', 'Permite a tomada de controle no nível 3'], ['contact', 'Emergency contact', 'Contato de emergência', 'Notified after a takeover', 'Avisado depois de uma tomada de controle'], ['voice', 'OTTO voice', 'Voz do OTTO', 'Spoken alerts and takeover narration', 'Alertas falados e narração da tomada de controle']];
    document.getElementById('pp-opts').innerHTML = O.map(function (o) { return '<button type="button" class="pp-opt" data-o="' + o[0] + '" role="switch" aria-pressed="' + !!S[o[0]] + '"><span>' + L(o[1], o[2]) + '<small>' + L(o[3], o[4]) + '</small></span><span class="trk"></span></button>'; }).join('');
  }

  document.getElementById('pp-presets').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-p]'); if (!b) return;
    if (S.take) resume();
    var p = PRE[b.dataset.p]; S.preset = b.dataset.p; Object.assign(S.v, p.v); S.micro = p.micro;
    if (b.dataset.p === 'ok') { clearTimers(); stopVoice(); S.alert = 0; renderOverlay(); }
    buildControls(); evaluate();
  });
  document.getElementById('pp-sliders').addEventListener('input', function (e) {
    var el = e.target; if (!el.dataset.k) return;
    var d = SL.filter(function (s) { return s[0] === el.dataset.k; })[0];
    S.v[el.dataset.k] = +el.value; S.micro = false; S.preset = '';
    el.parentNode.querySelector('output').textContent = el.value + d[6];
    document.querySelectorAll('#pp-presets button').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    evaluate();
  });
  document.getElementById('pp-opts').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-o]'); if (!b) return;
    var k = b.dataset.o; S[k] = !S[k]; b.setAttribute('aria-pressed', S[k]);
    if (k === 'contrast') host.dataset.mode = S[k] ? 'contrast' : 'night';
  });

  host.addEventListener('click', function (e) {
    var a = e.target.closest('[data-act]'); if (!a) return;
    var act = a.dataset.act;
    if (act === 'open') { S.screen = 'vigilant'; render(); }
    else if (act === 'home') { S.screen = 'home'; render(); }
    else if (act === 'accept') closeAlert(true);
    else if (act === 'later') closeAlert(false);
    else if (act === 'resume') resume();
    else if (act.indexOf('replay:') === 0) { var ev = S.log[+act.split(':')[1]]; if (ev && !S.take) openAlert(ev.replay); }
    else if (a.classList.contains('ot-side') || a.closest('.ot-side')) { S.screen = 'home'; render(); }
  });
  host.addEventListener('click', function (e) {
    var sb = e.target.closest('.ot-side button'); if (!sb) return;
    var n = sb.dataset.nav; if (n === 'bag') { S.screen = 'vigilant'; render(); }
  });

  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    OT.lang = lang;
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.dataset.t); });
    document.querySelectorAll('.pp-lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });
    document.querySelectorAll('a[data-keep-lang]').forEach(function (a) { var h = a.getAttribute('href').split('?')[0]; a.setAttribute('href', h + (lang === 'pt' ? '?lang=pt' : '')); });
  }
  function boot() {
    applyLang(); seedLog();
    host.innerHTML = C.dash({ html: '' });
    OT.fit(host);
    panel = host.querySelector('[data-panel]');
    over = document.createElement('div'); over.className = 'ot-over'; panel.parentNode.appendChild(over);
    buildControls(); render(); sideRefresh(); renderOverlay();
  }
  document.querySelectorAll('.pp-lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.dataset.l === lang) return;
      lang = b.dataset.l; OT.lang = lang; clearTimers(); stopVoice();
      var keep = { v: S.v, micro: S.micro, contrast: S.contrast, adas: S.adas, contact: S.contact, voice: S.voice, preset: S.preset };
      S = { v: keep.v, micro: keep.micro, screen: 'home', contrast: keep.contrast, adas: keep.adas, contact: keep.contact, voice: keep.voice, caption: '', tok: 0, alert: 0, shown: 0, take: null, log: [], preset: keep.preset, timers: [] };
      host.innerHTML = ''; boot(); host.dataset.mode = S.contrast ? 'contrast' : 'night';
      try { history.replaceState(null, '', lang === 'pt' ? '?lang=pt' : location.pathname); } catch (e) {}
    });
  });
  boot();
})();
