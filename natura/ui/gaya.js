/* GaYa · mini design system: componentes como funções que devolvem HTML.
   Usado pelo Storybook, pelo protótipo e pelas demos do case.
   Recriação independente, com temas genéricos. Sem marcas reais. */
(function () {
  'use strict';

  var P = {
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    bell: '<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',
    bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
    home: '<path d="M4 11l8-7 8 7v9H4z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    heart: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    warn: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',
    ok: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
    image: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M4 17l5-4 4 3 3-2 4 3"/>',
    back: '<path d="M15 5l-7 7 7 7"/>'
  };
  function icon(n) { return '<svg class="gy-i" viewBox="0 0 24 24" aria-hidden="true">' + (P[n] || '') + '</svg>'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function cls() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  var C = {
    button: function (p) {
      return '<button type="button" class="' + cls('gy-btn', p.variant !== 'filled' && 'gy-btn--' + p.variant, p.size !== 'md' && 'gy-btn--' + p.size, p.block && 'gy-btn--block') + '"' + (p.disabled ? ' disabled' : '') + '>' + (p.icon ? icon(p.icon) : '') + esc(p.label) + '</button>';
    },
    iconButton: function (p) {
      return '<button type="button" class="' + cls('gy-ib', p.filled && 'gy-ib--filled') + '" aria-label="' + esc(p.icon) + '">' + icon(p.icon) + (p.count ? '<span class="gy-badge-dot">' + esc(p.count) + '</span>' : '') + '</button>';
    },
    chip: function (p) {
      return '<button type="button" class="gy-chip" aria-pressed="' + (p.selected ? 'true' : 'false') + '"' + (p.disabled ? ' disabled' : '') + '>' + esc(p.label) + '</button>';
    },
    badge: function (p) { return '<span class="' + cls('gy-badge', p.soft && 'gy-badge--soft') + '">' + esc(p.label) + '</span>'; },
    checkbox: function (p) {
      return '<label class="gy-check"><input type="checkbox"' + (p.checked ? ' checked' : '') + (p.disabled ? ' disabled' : '') + '><span class="box">' + icon('check') + '</span>' + esc(p.label) + '</label>';
    },
    switch: function (p) {
      return '<label class="gy-switch"><input type="checkbox"' + (p.on ? ' checked' : '') + '><span class="track"></span>' + esc(p.label) + '</label>';
    },
    textField: function (p) {
      return '<label class="' + cls('gy-field', p.error && 'is-error') + '"><span>' + esc(p.label) + '</span><div class="ctl">' + (p.icon ? icon(p.icon) : '') + '<input type="' + (p.password ? 'password' : 'text') + '" placeholder="' + esc(p.placeholder) + '"' + (p.value ? ' value="' + esc(p.value) + '"' : '') + '></div>' + (p.helper ? '<small>' + esc(p.helper) + '</small>' : '') + '</label>';
    },
    select: function (p) {
      return '<div class="gy-field gy-select"><span>' + esc(p.label) + '</span><div class="ctl" role="button" tabindex="0"><span>' + esc(p.placeholder) + '</span>' + icon('down') + '</div></div>';
    },
    card: function (p) {
      return '<article class="gy-card"><div class="media"></div><div class="body"><h4>' + esc(p.title) + '</h4><p>' + esc(p.text) + '</p></div></article>';
    },
    tabs: function (p) {
      var a = Math.min(+p.active, 2);
      return '<div class="gy-tabs" role="tablist">' + p.labels.split('|').map(function (l, i) { return '<button type="button" role="tab" aria-selected="' + (i === a) + '">' + esc(l) + '</button>'; }).join('') + '</div>';
    },
    alert: function (p) {
      var ic = { info: 'info', success: 'ok', warning: 'warn', error: 'warn' }[p.kind];
      return '<div class="' + cls('gy-alert', p.kind !== 'info' && 'gy-alert--' + p.kind) + '" role="alert">' + icon(ic) + '<div><b>' + esc(p.title) + '</b>' + esc(p.text) + '</div></div>';
    },
    dialog: function (p) {
      return '<div class="gy-dialog" role="dialog"><header><h4>' + esc(p.title) + '</h4>' + C.iconButton({ icon: 'close' }) + '</header><div class="content">' + esc(p.text) + '</div><footer>' + C.button({ label: 'Back', variant: 'outline', size: 'md' }) + C.button({ label: 'Confirm', variant: 'filled', size: 'md' }) + '</footer></div>';
    },
    counter: function (p) {
      return '<div class="gy-counter"><button type="button" aria-label="-"' + (+p.value <= 1 ? ' disabled' : '') + '>' + icon('minus') + '</button><output>' + esc(p.value) + '</output><button type="button" aria-label="+">' + icon('plus') + '</button></div>';
    },
    progress: function (p) { return '<div class="gy-progress" role="progressbar" aria-valuenow="' + p.value + '"><i style="width:' + p.value + '%"></i></div>'; },
    avatar: function (p) { return '<span class="gy-avatar">' + esc(p.initials) + '</span>'; },
    listItem: function (p) {
      return '<div class="gy-li"><span class="lead">' + icon(p.icon) + '</span><div class="t"><b>' + esc(p.title) + '</b><span>' + esc(p.sub) + '</span></div>' + icon('down').replace('<svg', '<svg style="transform:rotate(-90deg)"') + '</div>';
    },
    appBar: function (p) {
      return '<div class="gy-appbar">' + C.iconButton({ icon: 'menu' }) + '<h3>' + esc(p.title) + '</h3>' + C.iconButton({ icon: 'search' }) + C.iconButton({ icon: 'bag', count: p.count }) + '</div>';
    },
    bottomNav: function (p) {
      var it = [['home', 'Home'], ['grid', 'Catalog'], ['heart', 'Saved'], ['user', 'Profile']];
      return '<nav class="gy-nav">' + it.map(function (x, i) { return '<button type="button"' + (i === +p.active ? ' aria-current="page"' : '') + '>' + icon(x[0]) + x[1] + '</button>'; }).join('') + '</nav>';
    }
  };

  window.GY = { icon: icon, esc: esc, c: C };
})();
