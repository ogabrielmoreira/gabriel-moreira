/* BDS · construtores de HTML e comportamentos dos componentes do case Bradesco.
   Cada função de BDS.* devolve o HTML de um componente; os comportamentos
   (chips, card selecionável, acordeão, estrelas, onda de toque) funcionam por
   delegação de eventos, então valem para qualquer HTML inserido depois. */
(function () {
  'use strict';

  var ASSETS = (document.currentScript && document.currentScript.dataset.assets) || '../assets/';

  // Sprite de ícones (bds-icons.js) entra uma vez no <body>.
  function mountSprite() {
    if (window.BDS_SPRITE && !document.getElementById('bds-sprite')) {
      var d = document.createElement('div');
      d.id = 'bds-sprite';
      d.innerHTML = window.BDS_SPRITE;
      document.body.insertBefore(d, document.body.firstChild);
    }
  }
  if (document.body) mountSprite(); else document.addEventListener('DOMContentLoaded', mountSprite);

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function icon(name, cls) {
    return '<svg class="bds-icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }
  var CHECK = '<svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path class="bds-check-draw" d="M4.33 9l2.92 2.92L13.67 5.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var BDS = {
    assets: ASSETS,
    esc: esc,
    icon: icon,

    statusBar: function (o) {
      o = o || {};
      return '<div class="bds-statusbar' + (o.dark ? ' bds-statusbar--dark' : '') + '"><span>' + esc(o.time || '15:16') + '</span>' +
        '<svg aria-hidden="true"><use href="#i-status"/></svg></div>';
    },
    homeIndicator: function (o) {
      return '<div class="bds-homeind' + (o && o.dark ? ' bds-homeind--dark' : '') + '"></div>';
    },
    topBar: function (o) {
      o = o || {};
      return '<header class="bds-topbar">' + BDS.statusBar({ time: o.time }) +
        '<div class="bds-topbar-row"><button class="bds-topbar-btn" type="button" data-act="back" aria-label="Voltar">' + icon('back') + '</button>' +
        '<span class="bds-topbar-title">' + esc(o.title || 'Imposto de Renda') + '</span><span class="bds-topbar-slot"></span></div></header>';
    },
    button: function (o) {
      o = o || {};
      return '<button class="bds-btn bds-btn--' + (o.variant || 'primary') + (o.loading ? ' is-loading' : '') + '" type="button"' +
        (o.disabled ? ' disabled' : '') + (o.act ? ' data-act="' + o.act + '"' : '') + '>' + esc(o.label || 'Label') + '</button>';
    },
    chips: function (o) {
      o = o || {};
      var items = o.items || ['2021', '2020', '2019', '2018', '2017'];
      var sel = o.selected === undefined ? items[0] : o.selected;
      return '<div class="bds-chips' + (o.years ? ' bds-chips--years' : '') + (o.scroll ? ' bds-chips--scroll' : '') + '" role="radiogroup" aria-label="' + esc(o.label || 'Ano-base') + '" data-bds-chips>' +
        items.map(function (y) {
          return '<button class="bds-chip" type="button" role="radio" aria-checked="' + (y === sel) + '" data-value="' + esc(y) + '">' + esc(y) + '</button>';
        }).join('') + '</div>';
    },
    checkbox: function (o) {
      o = o || {};
      return '<label class="bds-checkbox"><input type="checkbox"' + (o.checked === false ? '' : ' checked') + (o.name ? ' name="' + o.name + '"' : '') + ' />' +
        '<span class="bds-checkbox-box">' + CHECK + '</span><span>' + esc(o.label || 'Label') + '</span></label>';
    },
    nav: function (o) {
      var cur = (o && o.current) || 'Início';
      var items = [['Início', 'nav-home'], ['Chat', 'nav-chat'], ['Shop', 'nav-shop'], ['Perfil', 'nav-user'], ['Serviços', 'nav-grid']];
      return '<nav class="bds-nav" aria-label="Navegação" data-bds-nav>' + items.map(function (it) {
        return '<button class="bds-nav-item" type="button"' + (it[0] === cur ? ' aria-current="page"' : '') + '><span class="bds-nav-ic">' + icon(it[1]) + '</span>' + it[0] + '</button>';
      }).join('') + '</nav>';
    },
    listItem: function (o) {
      o = o || {};
      return '<button class="bds-listitem" type="button"' + (o.act ? ' data-act="' + o.act + '"' : '') + '>' + icon(o.icon || 'save') +
        '<span>' + esc(o.label || 'Label') + '</span>' + icon('right', 'bds-listitem-chev') + '</button>';
    },
    quick: function (o) {
      o = o || {};
      return '<button class="bds-quick" type="button"' + (o.act ? ' data-act="' + o.act + '"' : '') + '><span class="bds-quick-tile">' + icon(o.icon || 'doc') + '</span>' + esc(o.label || 'Label') + '</button>';
    },
    push: function (o) {
      o = o || {};
      return '<button class="bds-push' + (o.animate ? ' is-in' : '') + '" type="button"' + (o.act ? ' data-act="' + o.act + '"' : '') + '>' +
        '<span class="bds-push-app"><img src="' + ASSETS + 'symbol-white.svg" alt="" /></span><span class="bds-push-txt">' +
        '<span class="bds-push-head"><b>' + esc(o.title || 'Novidade: informe de rendimentos') + '</b><small>agora</small></span>' +
        '<p>' + esc(o.body || 'Agora você gera seu informe de rendimentos em PDF direto pelo app, sem precisar ir à agência. Confira!') + '</p></span></button>';
    },
    accordion: function (o) {
      o = o || {};
      var item = function (ic, t, html) {
        return '<div class="bds-accordion-item"><span class="bds-accordion-ic">' + icon(ic) + '</span><div><b>' + t + '</b><p>' + html + '</p></div></div>';
      };
      return '<div class="bds-card bds-accordion"><button class="bds-accordion-head" type="button" aria-expanded="' + !!o.open + '" data-bds-accordion>' +
        '<div><b>Precisa de outros informes?</b><small>Confira onde acessar os que não estão aqui.</small></div>' +
        '<span class="bds-accordion-toggle"><svg aria-hidden="true"><use href="#i-chevron"/></svg></span></button>' +
        '<div class="bds-accordion-panel"><div><div class="bds-accordion-items">' +
        item('heart', 'Bradesco Saúde', 'Acesse bradescoseguros.com.br, clique em <strong>Fazer login</strong> e selecione a opção <strong>Saúde</strong>. Depois de acessar com seus dados, vá em <strong>Extratos</strong> e escolha o que precisa.') +
        item('tooth', 'Bradesco Dental', 'Acesse bradescoseguros.com.br, clique em <strong>Fazer login</strong> e selecione a opção <strong>Dental</strong>. Depois de acessar com seus dados, vá em <strong>Extrato de Imposto de Renda</strong> e escolha o que precisa.') +
        item('globe', 'Bradesco Bank', 'Acesse o app ou o online banking e vá em Extratos &amp; Documentos pra consultar seus informes e outros materiais disponíveis.') +
        '</div></div></div></div>';
    },
    selCard: function (o) {
      o = o || {};
      return '<button class="bds-selcard" type="button" role="checkbox" aria-checked="' + (o.checked !== false) + '" data-bds-selcard>' +
        '<span class="bds-selcard-check">' + CHECK + '</span><span class="bds-selcard-ic">' + icon('doc-sm') + '</span>' +
        '<span class="bds-selcard-txt"><b>' + esc(o.name || 'Conta - IRPF') + '</b><small>' + esc(o.meta || 'Conta corrente · Pessoa Física') + '</small></span>' +
        '<span class="bds-pill">' + esc(o.status || 'Disponível') + '</span></button>';
    },
    help: function (o) {
      o = o || {};
      var item = function (ic, t, txt) {
        return '<div class="bds-help-item"><span class="bds-help-ic">' + icon(ic) + '</span><div><b>' + t + '</b><p>' + txt + '</p></div></div>';
      };
      return '<div class="bds-helpcard"><button class="bds-help" type="button" aria-expanded="' + !!o.open + '" data-bds-accordion>' + icon('info') +
        '<div><b>Precisa de informes de outros produtos?</b><small>Saúde, Dental e Bradesco Bank</small></div>' + icon('down', 'bds-help-chev') + '</button>' +
        '<div class="bds-help-panel"><div><div class="bds-help-items">' +
        item('heart', 'Bradesco Saúde', 'bradescoseguros.com.br › Fazer login › Saúde › Extratos') +
        item('tooth', 'Bradesco Dental', 'bradescoseguros.com.br › Fazer login › Dental › Extrato de Imposto de Renda') +
        item('globe', 'Bradesco Bank', 'App ou online banking › Extratos &amp; Documentos') +
        '</div></div></div></div>';
    },
    stars: function (o) {
      var v = (o && o.value) || 0, s = '';
      for (var i = 1; i <= 5; i++) {
        s += '<button class="bds-star' + (i <= v ? ' is-on' : '') + '" type="button" role="radio" aria-checked="' + (i === v) + '" aria-label="' + i + (i === 1 ? ' estrela' : ' estrelas') + '" data-value="' + i + '"><svg aria-hidden="true"><use href="#i-star"/></svg></button>';
      }
      return '<div class="bds-stars" role="radiogroup" aria-label="Avaliação" data-bds-stars data-value="' + v + '">' + s + '</div>';
    },
    textArea: function (o) {
      o = o || {};
      return '<div class="bds-field"><textarea class="bds-textarea" maxlength="400" placeholder="' + esc(o.placeholder || 'Deixe seu comentário') + '" aria-label="Comentário" data-bds-count></textarea>' +
        '<div class="bds-field-help"><span>Opcional</span><span data-bds-counter>0/400</span></div></div>';
    },
    lion: function (o) {
      return '<img class="bds-lion" src="' + ASSETS + (o && o.red ? 'lion-red.svg' : 'lion.svg') + '" width="250" height="200" alt="Leão do Imposto de Renda" />';
    },
    success: function () {
      return '<svg class="bds-success" viewBox="0 0 250 210" fill="none" role="img" aria-label="Informe gerado">' +
        '<path class="s-blob" d="M40 90C30 40 90 10 140 30C180 46 230 50 224 100C220 136 194 130 184 160C172 194 114 200 74 174C44 154 46 120 40 90Z" fill="#B60C33"/>' +
        '<g class="s-doc"><path d="M125.36 41.239L54.8942 69.7091C52.8459 70.5367 51.8563 72.868 52.6839 74.9163L93.8906 176.906C94.7182 178.955 97.0495 179.944 99.0978 179.117L169.564 150.647C171.612 149.819 172.602 147.488 171.774 145.44L130.567 43.4493C129.74 41.401 127.408 40.4114 125.36 41.239Z" fill="#84BD2B"/>' +
        '<path d="M74.655 91.9241L126.577 70.9461M80.6487 106.759L132.571 85.781M86.6424 121.594L138.565 100.616M92.6361 136.429L144.558 115.451M98.6298 151.264L135.717 136.28" stroke-width="1.5" stroke="#1E2749"/></g>' +
        '<g class="s-bubble"><path d="M186 90C206.987 90 224 72.9868 224 52C224 31.0132 206.987 14 186 14C165.013 14 148 31.0132 148 52C148 72.9868 165.013 90 186 90Z" fill="white"/><path d="M158 78L148 92L172 84L158 78Z" fill="white"/>' +
        '<path class="s-check" d="M170 54L181 65L201 42" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke="#6BA51F"/></g></svg>';
    },
    /* Abre/fecha um bottom sheet (e o scrim irmão, se existir). */
    sheet: function (el, open) {
      if (!el) return;
      el.classList.toggle('is-open', open);
      el.setAttribute('aria-hidden', String(!open));
      var scrim = el.parentNode.querySelector('.bds-scrim[data-for="' + el.id + '"]');
      if (scrim) scrim.classList.toggle('is-open', open);
    }
  };
  window.BDS = BDS;

  function fire(el, name, detail) {
    el.dispatchEvent(new CustomEvent(name, { bubbles: true, detail: detail }));
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target : e.target.parentNode;
    if (!t || !t.closest) return;

    // Onda de toque nos botões
    var btn = t.closest('.bds-btn');
    if (btn && !btn.disabled && !btn.classList.contains('bds-btn--text')) {
      var r = btn.getBoundingClientRect();
      var scale = r.width / btn.offsetWidth || 1;
      var s = document.createElement('span');
      s.className = 'bds-ripple';
      s.style.left = (e.clientX ? (e.clientX - r.left) / scale : btn.offsetWidth / 2) + 'px';
      s.style.top = (e.clientY ? (e.clientY - r.top) / scale : btn.offsetHeight / 2) + 'px';
      btn.appendChild(s);
      setTimeout(function () { s.remove(); }, 600);
    }

    // Chips: seleção única
    var chip = t.closest('[data-bds-chips] .bds-chip');
    if (chip) {
      chip.parentNode.querySelectorAll('.bds-chip').forEach(function (c) { c.setAttribute('aria-checked', String(c === chip)); });
      fire(chip.parentNode, 'bds:change', { value: chip.dataset.value });
    }

    // Card selecionável
    var card = t.closest('[data-bds-selcard]');
    if (card) {
      var on = card.getAttribute('aria-checked') !== 'true';
      card.setAttribute('aria-checked', String(on));
      fire(card, 'bds:change', { checked: on });
    }

    // Acordeão
    var acc = t.closest('[data-bds-accordion]');
    if (acc) {
      var open = acc.getAttribute('aria-expanded') !== 'true';
      acc.setAttribute('aria-expanded', String(open));
      fire(acc, 'bds:toggle', { open: open });
    }

    // Estrelas
    var star = t.closest('[data-bds-stars] .bds-star');
    if (star) {
      var group = star.parentNode, v = +star.dataset.value;
      group.dataset.value = v;
      group.querySelectorAll('.bds-star').forEach(function (b) {
        var bv = +b.dataset.value;
        b.classList.toggle('is-on', bv <= v);
        b.setAttribute('aria-checked', String(bv === v));
        b.classList.remove('is-pop');
        if (bv <= v) { void b.offsetWidth; b.style.animationDelay = (bv - 1) * 45 + 'ms'; b.classList.add('is-pop'); }
      });
      fire(group, 'bds:change', { value: v });
    }

    // Navigation bar
    var nav = t.closest('[data-bds-nav] .bds-nav-item');
    if (nav) {
      nav.parentNode.querySelectorAll('.bds-nav-item').forEach(function (n) {
        if (n === nav) n.setAttribute('aria-current', 'page'); else n.removeAttribute('aria-current');
      });
    }
  });

  // Contador do campo de comentário
  document.addEventListener('input', function (e) {
    var ta = e.target;
    if (ta.matches && ta.matches('[data-bds-count]')) {
      var c = ta.parentNode.querySelector('[data-bds-counter]');
      if (c) c.textContent = ta.value.length + '/400';
      fire(ta, 'bds:change', { value: ta.value });
    }
  });
})();
