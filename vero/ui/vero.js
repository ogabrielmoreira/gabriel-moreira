/* Vero ID · telas do fluxo de consentimento de câmera (HTML puro).
   VX.mount(el, {screen, lang, interactive}) desenha um celular dentro de `el`.
   Sem `interactive`, a tela é estática; com ele, os botões percorrem o fluxo inteiro. */
(function (root) {
  'use strict';
  var COPY = {
    pt: {
      back: '‹ Voltar', stepAria: 'Etapa', homeTitle: 'Verificação de identidade',
      homeSub: 'Última etapa para concluir sua conta. Leva cerca de 2 minutos.',
      homeItems: ['Dados pessoais', 'Documento de identidade', 'Prova de vida'], done: 'Concluído', pending: 'Pendente', cta: 'Avançar',
      exTitle: 'Vamos confirmar que é você', exSub: 'Uma selfie rápida protege sua conta contra fraudes.',
      exItems: [['Selfie automática', 'Centralize o rosto; a captura é automática.'], ['Uso restrito', 'Câmera usada apenas nesta verificação.'], ['Exigência legal', 'Bancos precisam confirmar o titular da conta.']],
      prTitle: 'Toque em “Permitir”', tutDeny: 'Não Permitir', tutAllow: 'Permitir',
      tutCaption: 'O navegador vai pedir acesso à câmera. Toque em <b>Permitir</b>.', privacy: 'Câmera usada <b>só nesta verificação</b>.',
      alertTitle: '“exemplo.com.br” Deseja Acessar a Câmera', alertMsg: 'A câmera será usada para a prova de vida.',
      denTitle: 'Câmera não habilitada', denSub: 'Sem ela não dá para concluir a prova de vida. Para resolver:',
      denSteps: ['Toque em <b>Avançar</b> abaixo.', 'Quando a solicitação aparecer, toque em <b>Permitir</b>.', 'Se a solicitação não aparecer, habilite a câmera em <b>Ajustes › Navegador › Câmera</b>.'],
      liveTitle: 'Enquadre seu rosto', liveMsgs: ['Centralize o rosto no oval', 'Mantenha o rosto parado…', 'Capturando…'], liveHint: 'Procure um lugar iluminado e evite acessórios',
      procTitle: 'Verificando…', procSub: 'Isso leva alguns segundos.',
      okTitle: 'Identidade verificada', okSub: 'Sua prova de vida foi concluída. Você já pode continuar usando sua conta.', okCta: 'Concluir'
    },
    en: {
      back: '‹ Back', stepAria: 'Step', homeTitle: 'Identity verification',
      homeSub: 'Last step to finish your account. Takes about 2 minutes.',
      homeItems: ['Personal details', 'ID document', 'Liveness check'], done: 'Done', pending: 'Pending', cta: 'Continue',
      exTitle: 'Let’s confirm it’s you', exSub: 'A quick selfie protects your account from fraud.',
      exItems: [['Automatic selfie', 'Center your face; capture is automatic.'], ['Limited use', 'Camera used for this verification only.'], ['Legal requirement', 'Banks must confirm the account holder.']],
      prTitle: 'Tap “Allow”', tutDeny: 'Don’t Allow', tutAllow: 'Allow',
      tutCaption: 'Your browser will ask for camera access. Tap <b>Allow</b>.', privacy: 'Camera used <b>for this verification only</b>.',
      alertTitle: '“example.com” Would Like to Access the Camera', alertMsg: 'The camera will be used for the liveness check.',
      denTitle: 'Camera not enabled', denSub: 'We can’t complete the liveness check without it. To fix it:',
      denSteps: ['Tap <b>Continue</b> below.', 'When the request appears, tap <b>Allow</b>.', 'If it doesn’t appear, enable the camera in <b>Settings › Browser › Camera</b>.'],
      liveTitle: 'Frame your face', liveMsgs: ['Center your face in the oval', 'Hold still…', 'Capturing…'], liveHint: 'Find a well-lit spot and remove accessories',
      procTitle: 'Verifying…', procSub: 'This takes a few seconds.',
      okTitle: 'Identity verified', okSub: 'Your liveness check is complete. You can keep using your account.', okCta: 'Finish'
    }
  };
  var I = {
    scan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h18"/><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2l8 5H4z"/></svg>',
    off: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 2l20 20"/><path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1"/><path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"/><path d="M14.1 15.1A3 3 0 1 1 9.9 10.9"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M4 12.5l5 5L20 6.5"/></svg>',
    checkBig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>',
    face: '<svg viewBox="0 0 120 150" fill="none"><ellipse cx="60" cy="58" rx="34" ry="40" fill="#AEB4C0"/><path d="M14 150c4-34 24-48 46-48s42 14 46 48" fill="#AEB4C0"/></svg>'
  };
  var STATUS = '<div class="vx-status" aria-hidden="true"><span>9:41</span><span class="ic"><svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx=".8"/><rect x="4.5" y="5" width="3" height="6" rx=".8"/><rect x="9" y="2.5" width="3" height="8.5" rx=".8"/><rect x="13.5" y="0" width="3" height="11" rx=".8"/></svg><svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M7.5 9.2a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8zM7.5 5.6c1.6 0 3 .6 4.1 1.7l-1.3 1.3a4.1 4.1 0 00-5.6 0L3.4 7.3a5.8 5.8 0 014.1-1.7zM7.5 1.9c2.6 0 5 1 6.8 2.8l-1.3 1.3a7.6 7.6 0 00-11 0L.7 4.7A9.6 9.6 0 017.5 1.9z"/></svg><svg width="23" height="11" viewBox="0 0 25 12" fill="none"><rect x=".5" y=".5" width="20" height="11" rx="3" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="17" height="8" rx="1.8" fill="currentColor"/><path d="M22 4v4c.8-.3 1.4-1.1 1.4-2S22.800 4.300 22 4z" fill="currentColor" opacity=".5"/></svg></span></div>';
  function dots(n, c) { var h = '<div class="vx-dots" role="progressbar" aria-valuemin="1" aria-valuemax="4" aria-valuenow="' + n + '" aria-label="' + c.stepAria + ' ' + n + '/4">'; for (var i = 0; i < 4; i++) h += '<i class="' + (i < n ? 'on' : '') + '"></i>'; return h + '</div>'; }
  var back = function (c) { return '<div class="vx-nav"><button class="vx-back" data-go="back" type="button">' + c.back + '</button></div>'; };
  var ORG = function (o) { return o ? '<div class="vx-org"><span>' + o[1] + '</span><b>' + o[0] + '</b></div>' : ''; };
  var SCREENS = {
    home: function (c) {
      var rows = c.homeItems.map(function (t, i) { return '<div class="vx-row ' + (i < 2 ? 'done' : 'pending') + '"><span class="st">' + (i < 2 ? I.check : '●') + '</span><span class="lbl">' + t + '</span><span class="hint">' + (i < 2 ? c.done : c.pending) + '</span></div>'; }).join('');
      return '<div class="vx-nav"></div><h4>' + c.homeTitle + '</h4><p class="sub">' + c.homeSub + '</p><div class="vx-check">' + rows + '</div><div class="vx-spacer"></div><button class="vx-btn" data-go="intro" type="button">' + c.cta + '</button>';
    },
    intro: function (c, o) {
      var ic = [I.scan, I.lock, I.bank];
      return back(c) + ORG(o) + dots(1, c) + '<h4>' + c.exTitle + '</h4><p class="sub">' + c.exSub + '</p>' + c.exItems.map(function (x, i) { return '<div class="vx-info"><span class="ic">' + ic[i] + '</span><div><b>' + x[0] + '</b><span>' + x[1] + '</span></div></div>'; }).join('') + '<div class="vx-spacer"></div><button class="vx-btn" data-go="allow" type="button">' + c.cta + '</button>';
    },
    allow: function (c, o) {
      return back(c) + ORG(o) + dots(2, c) + '<h4>' + c.prTitle + '</h4><div class="vx-tut"><div class="vx-tdev" aria-hidden="true"><span class="nt"></span><div class="ln"><i></i><i></i></div><div class="vx-dlg"><div class="t"></div><div class="b"></div><div class="ac"><span>' + c.tutDeny + '</span><span class="al">' + c.tutAllow + '</span></div></div><span class="vx-tap"></span></div><p class="vx-cap">' + c.tutCaption + '</p></div><div class="vx-priv"><span>' + I.lock + '</span><span>' + c.privacy + '</span></div><div class="vx-spacer"></div><button class="vx-btn" data-go="prompt" type="button">' + c.cta + '</button>';
    },
    denied: function (c) {
      return '<div class="vx-nav"></div><div class="vx-badge warn">' + I.off + '</div><h4 style="text-align:center">' + c.denTitle + '</h4><p class="sub" style="text-align:center">' + c.denSub + '</p><div class="vx-steps">' + c.denSteps.map(function (s, i) { return '<div class="ds"><span class="n">' + (i + 1) + '</span><span>' + s + '</span></div>'; }).join('') + '</div><div class="vx-spacer"></div><button class="vx-btn" data-go="prompt" type="button">' + c.cta + '</button>';
    },
    live: function (c) {
      return '<div class="vx-nav"></div><div class="vx-live"><h4>' + c.liveTitle + '</h4><div class="vx-oval" role="img"><div class="face">' + I.face + '</div><div class="scan"></div></div><p class="vx-lstat" aria-live="polite" data-live>' + c.liveMsgs[0] + '</p><p class="vx-lhint">' + c.liveHint + '</p></div>';
    },
    proc: function (c) { return '<div class="vx-proc"><div class="vx-spin" role="status"></div><div><h4 style="margin-bottom:4px">' + c.procTitle + '</h4><p class="sub" style="margin:0">' + c.procSub + '</p></div></div>'; },
    ok: function (c) { return '<div class="vx-ok"><div class="vx-badge">' + I.checkBig + '</div><h4>' + c.okTitle + '</h4><p class="sub">' + c.okSub + '</p></div><button class="vx-btn" data-go="home" type="button">' + c.okCta + '</button>'; }
  };
  var ALERT = function (c) { return '<div class="vx-dim"><div class="vx-alert" role="alertdialog"><div class="ab"><p class="at">' + c.alertTitle + '</p><p class="am">' + c.alertMsg + '</p></div><div class="aa"><button type="button" data-go="deny">' + c.tutDeny + '</button><button type="button" class="bd" data-go="allowok">' + c.tutAllow + '</button></div></div></div>'; };

  function fit(el) {
    var dev = el.querySelector('.vx-dev'); if (!dev) return;
    var s = el.clientWidth / 320; dev.style.transform = 'scale(' + s + ')';
  }
  var ro = ('ResizeObserver' in root) ? new ResizeObserver(function (es) { es.forEach(function (e) { fit(e.target); }); }) : null;

  function mount(el, opt) {
    opt = opt || {};
    var lang = opt.lang || 'en', interactive = !!opt.interactive, state = { screen: opt.screen || 'home', alert: !!opt.alert }, timers = [];
    el.classList.add('vx-phone'); el.innerHTML = '<div class="vx-dev"><div class="vx-scr0"><span class="vx-island"></span>' + STATUS + '<div class="vx-body"></div><span class="vx-home"></span></div></div>';
    var dev = el.querySelector('.vx-dev'), scr0 = el.querySelector('.vx-scr0'), body = el.querySelector('.vx-body');
    function clear() { timers.forEach(clearTimeout); timers = []; }
    function draw() {
      var c = COPY[lang]; clear();
      body.innerHTML = SCREENS[state.screen](c, opt.org);
      var old = scr0.querySelector('.vx-dim'); if (old) old.remove();
      if (state.alert) scr0.insertAdjacentHTML('beforeend', ALERT(c));
      if (state.screen === 'live') {
        var st = body.querySelector('[data-live]');
        timers.push(setTimeout(function () { if (st) st.textContent = c.liveMsgs[1]; }, 1400));
        timers.push(setTimeout(function () { if (st) st.textContent = c.liveMsgs[2]; }, 2600));
        if (interactive) timers.push(setTimeout(function () { go('proc'); }, 3400));
      }
      if (state.screen === 'proc' && interactive) timers.push(setTimeout(function () { go('ok'); }, 2200));
      if (opt.onChange) opt.onChange(state.screen, state.alert);
    }
    function go(to) {
      if (to === 'back') { to = { intro: 'home', allow: 'intro' }[state.screen] || 'home'; }
      if (to === 'prompt') { state.alert = true; draw(); return; }
      if (to === 'deny') { state.alert = false; state.screen = 'denied'; draw(); return; }
      if (to === 'allowok') { state.alert = false; state.screen = 'live'; draw(); return; }
      state.alert = false; state.screen = to; draw();
    }
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-go]'); if (!b || !interactive) return;
      go(b.getAttribute('data-go'));
    });
    if (!interactive) el.setAttribute('aria-hidden', 'true');
    draw(); fit(el); if (ro) ro.observe(el); else root.addEventListener('resize', function () { fit(el); });
    return { go: go, setLang: function (l) { lang = l; draw(); }, get screen() { return state.screen; } };
  }
  function auto(lang) {
    document.querySelectorAll('[data-vx]').forEach(function (el) {
      el._vx = mount(el, { screen: el.getAttribute('data-vx'), alert: el.hasAttribute('data-alert'), lang: lang, interactive: el.hasAttribute('data-live') });
    });
  }
  root.VX = { mount: mount, auto: auto, COPY: COPY };
})(window);
