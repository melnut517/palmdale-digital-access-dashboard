/* Palmdale Digital Access Dashboard — rendering.
   Content comes from data/content.js; status comes from data/progress.js. */
(function () {
  "use strict";

  var C = window.CONTENT;
  var P = window.PROGRESS;
  var STATUSES = ["not-started", "planning", "in-progress", "complete"];

  var state = { lang: initialLang(), filter: "all", view: "cards" };

  // ---------- helpers ----------
  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "es" || q === "en") return q;
    try { var s = localStorage.getItem("pda-lang"); if (s === "es" || s === "en") return s; } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }
  function t(key) { return C.ui[state.lang][key]; }
  function L(obj) { return obj == null ? "" : typeof obj === "string" ? obj : (obj[state.lang] || obj.en || ""); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function prog(id) { return (P.strategies && P.strategies[id]) || {}; }
  function statusOf(id) { var s = prog(id).status; return STATUSES.indexOf(s) >= 0 ? s : "not-started"; }
  function allStrategies() {
    var out = [];
    C.goals.forEach(function (g) { g.strategies.forEach(function (s) { out.push({ goal: g, s: s }); }); });
    return out;
  }
  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + "T12:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString(state.lang === "es" ? "es-US" : "en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  // ---------- icons (decorative; always paired with text) ----------
  var ICONS = {
    wifi: '<path d="M2 9a15 15 0 0 1 20 0"/><path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1.2" fill="currentColor"/>',
    devices: '<rect x="2" y="4" width="14" height="10" rx="1.5"/><path d="M5 18h8"/><rect x="17" y="8" width="5" height="11" rx="1"/>',
    literacy: '<path d="M2 8l10-4 10 4-10 4z"/><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 8v6"/>',
    dollar: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.6-.6-3-1.6M12 6.5v11"/>',
    lightbulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    "not-started": '<circle cx="12" cy="12" r="8"/>',
    planning: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" stroke="none" opacity=".35"/><path d="M12 8v4l2.5 2"/>',
    "in-progress": '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" stroke="none"/>',
    complete: '<circle cx="12" cy="12" r="9" fill="currentColor" stroke="none"/><path d="M8 12.5l2.7 2.7L16 9.8" stroke="#fff"/>',
    chevron: '<path d="M8 10l4 4 4-4"/>',
    home: '<path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" fill="currentColor" stroke="none"/>',
    phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.2" fill="currentColor" stroke="none"/><rect x="8.5" y="5" width="7" height="12" rx=".6" fill="#fff" stroke="none"/><circle cx="12" cy="19.2" r=".9" fill="#fff" stroke="none"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  };
  function icon(name, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || "") + "</svg>";
  }
  function chip(status) {
    return '<span class="status status-' + status + '">' + icon(status) + "<span>" + esc(t("status")[status]) + "</span></span>";
  }

  // ---------- static text ----------
  function renderText() {
    document.documentElement.lang = state.lang;
    document.title = t("title") + " | " + t("cityName");
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
    var btn = $("lang-toggle");
    btn.textContent = t("langToggle");
    btn.setAttribute("lang", state.lang === "en" ? "es" : "en");
    btn.setAttribute("aria-label", t("langToggleLabel"));
    var nav = t("nav");
    $("nav-list").innerHTML = ["progress", "need", "heard", "funding", "resources"].map(function (k) {
      return '<li><a href="#' + k + '">' + esc(nav[k]) + "</a></li>";
    }).join("");
    $("updated").innerHTML = P.lastUpdated ? esc(t("lastUpdated")) + ": <strong>" + esc(fmtDate(P.lastUpdated)) + "</strong>" : "";
    $("download").textContent = t("download");
    $("print").textContent = t("print");
  }

  function renderKpis() {
    $("kpis").innerHTML = t("kpis").map(function (k, idx) {
      var icons = "";
      for (var i = 0; i < k.of; i++) {
        icons += '<span class="pict' + (i === 0 ? " on" : "") + '">' + icon(i === 0 ? k.icon : "home") + "</span>";
      }
      return '<li class="kpi kpi-' + (idx + 1) + '">' +
        '<p class="kpi-ratio">' + esc(k.ratio) + "</p>" +
        '<p class="kpi-label">' + esc(k.label) + "</p>" +
        '<div class="picto picto-' + k.of + '" role="img" aria-label="' + esc(k.ratio + " " + k.label) + '">' + icons + "</div>" +
        '<p class="kpi-note">' + esc(k.note) + "</p></li>";
    }).join("");
  }

  function renderMomentum() {
    $("momentum").innerHTML = t("momentum").map(function (m) {
      var final = (m.prefix || "") + m.count.toLocaleString("en-US") + (m.suffix || "");
      return '<li><span class="m-value" data-count="' + m.count + '" data-prefix="' + esc(m.prefix || "") + '" data-suffix="' + esc(m.suffix || "") + '">' + esc(final) + '</span><span class="m-label">' + esc(m.label) + "</span></li>";
    }).join("");
  }

  // ---------- progress ----------
  function counts() {
    var c = { "not-started": 0, planning: 0, "in-progress": 0, complete: 0 };
    allStrategies().forEach(function (x) { c[statusOf(x.s.id)]++; });
    return c;
  }

  var RING_ORDER = ["complete", "in-progress", "planning", "not-started"];

  function ring(statuses, size, center, caption, cls) {
    var sorted = statuses.slice().sort(function (a, b) { return RING_ORDER.indexOf(a) - RING_ORDER.indexOf(b); });
    var n = sorted.length, gap = n > 1 ? 3.5 : 0, cx = 60, r = 50, paths = "";
    sorted.forEach(function (st, i) {
      var a0 = (i * 360) / n + gap / 2 - 90, a1 = ((i + 1) * 360) / n - gap / 2 - 90;
      var p0 = [cx + r * Math.cos(a0 * Math.PI / 180), cx + r * Math.sin(a0 * Math.PI / 180)];
      var p1 = [cx + r * Math.cos(a1 * Math.PI / 180), cx + r * Math.sin(a1 * Math.PI / 180)];
      var large = a1 - a0 > 180 ? 1 : 0;
      paths += '<path class="arc arc-' + st + '" style="--i:' + i + '" pathLength="1" d="M' + p0[0].toFixed(2) + " " + p0[1].toFixed(2) +
        " A" + r + " " + r + " 0 " + large + " 1 " + p1[0].toFixed(2) + " " + p1[1].toFixed(2) + '"/>';
    });
    var desc = RING_ORDER.map(function (st) {
      var c = statuses.filter(function (x) { return x === st; }).length;
      return c ? c + " " + t("status")[st] : null;
    }).filter(Boolean).join(", ");
    return '<figure class="ring ' + (cls || "") + '">' +
      '<div class="ring-art" style="width:' + size + "px;height:" + size + 'px">' +
      '<svg viewBox="0 0 120 120" role="img" aria-label="' + esc(caption + ": " + desc) + '">' + paths + "</svg>" +
      '<span class="ring-center">' + center + "</span></div>" +
      "<figcaption>" + esc(caption) + "</figcaption></figure>";
  }

  function renderOverall() {
    var c = counts(), total = allStrategies().length;
    var all = allStrategies().map(function (x) { return statusOf(x.s.id); });
    var big = ring(all, 168, '<strong>' + c.complete + '</strong><span>/ ' + total + "</span>", t("overallLabel"), "ring-big");
    var goals = C.goals.map(function (g) {
      var st = g.strategies.map(function (s) { return statusOf(s.id); });
      var done = st.filter(function (x) { return x === "complete"; }).length;
      return ring(st, 112, "<strong>" + done + "</strong><span>/ " + st.length + "</span>", t("fields").goal + " " + g.id + ": " + L(g.name), "ring-goal " + g.color);
    }).join("");
    var moving = c.planning + c["in-progress"];
    big = big.replace("</figcaption>", '<span class="underway"><strong>' + moving + "</strong> " + esc(t("underway")) + "</span></figcaption>");
    $("overall").innerHTML = big + '<div class="ring-goals">' + goals + "</div>";
  }

  function renderFilters() {
    var c = counts(), total = allStrategies().length;
    var opts = [{ key: "all", label: t("filterAll"), n: total }].concat(STATUSES.map(function (s) {
      return { key: s, label: t("status")[s], n: c[s] };
    }));
    $("filters").innerHTML = opts.map(function (o) {
      var on = state.filter === o.key;
      return '<button type="button" class="chip-btn' + (o.key !== "all" ? " f-" + o.key : "") + '" data-filter="' + o.key + '" aria-pressed="' + on + '">' +
        (o.key !== "all" ? icon(o.key) : "") + "<span>" + esc(o.label) + '</span> <span class="count">' + o.n + "</span></button>";
    }).join("");
    $("views").innerHTML = [["cards", t("viewCards")], ["table", t("viewTable")]].map(function (v) {
      return '<button type="button" data-view="' + v[0] + '" aria-pressed="' + (state.view === v[0]) + '">' + esc(v[1]) + "</button>";
    }).join("");
  }

  function visible(id) { return state.filter === "all" || statusOf(id) === state.filter; }

  function detailRows(id) {
    var p = prog(id), f = t("fields"), tbd = '<span class="tbd">' + esc(t("tbd")) + "</span>";
    function row(label, val, empty) { return "<div><dt>" + esc(label) + "</dt><dd>" + (val ? esc(val) : empty) + "</dd></div>"; }
    return '<dl class="details-list">' +
      row(f.lead, L(p.lead), tbd) +
      row(f.partners, L(p.partners), tbd) +
      row(f.timeframe, L(p.timeframe), tbd) +
      row(f.measure, L(p.measure), tbd) +
      row(f.update, L(p.update), '<span class="tbd">' + esc(t("noUpdate")) + "</span>") +
      "</dl>";
  }

  function renderCards() {
    var shown = 0;
    $("goal-cards").innerHTML = C.goals.map(function (g) {
      var items = g.strategies.filter(function (s) { return visible(s.id); });
      shown += items.length;
      var done = g.strategies.filter(function (s) { return statusOf(s.id) === "complete"; }).length;
      return '<article class="goal-card ' + g.color + '">' +
        '<header class="goal-head">' + '<span class="goal-icon">' + icon(g.icon) + "</span>" +
        '<div><p class="goal-num">' + esc(t("fields").goal) + " " + g.id + "</p><h3>" + esc(L(g.name)) + "</h3>" +
        '<p class="goal-count">' + done + " / " + g.strategies.length + " " + esc(t("overall")) + "</p></div></header>" +
        (items.length ? '<ul class="strategy-list">' + items.map(function (s) {
          return '<li><details class="strategy"><summary>' +
            '<span class="sid">' + s.id + '</span><span class="stitle">' + esc(L(s)) + "</span>" + chip(statusOf(s.id)) +
            icon("chevron", "chev") + "</summary>" + detailRows(s.id) + "</details></li>";
        }).join("") + "</ul>" : '<p class="empty">' + esc(t("noMatch")) + "</p>") +
        "</article>";
    }).join("");
    return shown;
  }

  function renderMatrix() {
    var f = t("fields"), shown = 0;
    var rows = allStrategies().filter(function (x) { return visible(x.s.id); }).map(function (x) {
      shown++;
      var p = prog(x.s.id), tbd = '<span class="tbd">' + esc(t("tbd")) + "</span>";
      return "<tr>" +
        '<th scope="row"><span class="sid">' + x.s.id + "</span> " + esc(L(x.s)) + "</th>" +
        "<td>" + chip(statusOf(x.s.id)) + "</td>" +
        "<td>" + (L(p.lead) ? esc(L(p.lead)) : tbd) + "</td>" +
        "<td>" + (L(p.partners) ? esc(L(p.partners)) : tbd) + "</td>" +
        "<td>" + (L(p.timeframe) ? esc(L(p.timeframe)) : tbd) + "</td>" +
        "<td>" + (L(p.measure) ? esc(L(p.measure)) : tbd) + "</td>" +
        "<td>" + (L(p.update) ? esc(L(p.update)) : '<span class="tbd">' + esc(t("noUpdate")) + "</span>") + "</td>" +
        "</tr>";
    }).join("");
    $("matrix").innerHTML =
      '<div class="table-scroll" tabindex="0" role="region" aria-label="' + esc(t("viewTable")) + '"><table>' +
      "<caption>" + esc(t("viewTable")) + "</caption>" +
      "<thead><tr><th scope=\"col\">" + esc(f.strategy) + '</th><th scope="col">' + esc(f.status) + '</th><th scope="col">' + esc(f.lead) + '</th><th scope="col">' + esc(f.partners) + '</th><th scope="col">' + esc(f.timeframe) + '</th><th scope="col">' + esc(f.measure) + '</th><th scope="col">' + esc(f.update) + "</th></tr></thead>" +
      "<tbody>" + (rows || '<tr><td colspan="7">' + esc(t("noMatch")) + "</td></tr>") + "</tbody></table></div>";
    return shown;
  }

  function renderProgress() {
    renderOverall();
    renderFilters();
    var nCards = renderCards(); renderMatrix();
    $("goal-cards").hidden = state.view !== "cards";
    $("matrix").hidden = state.view !== "table";
    var label = state.filter === "all" ? t("filterAll") : t("status")[state.filter];
    $("filter-status").textContent = label + ": " + nCards;
  }

  function renderMilestones() {
    $("milestones").innerHTML = C.milestones.map(function (m) {
      return '<li><span class="m-date">' + esc(L(m.date)) + '</span><span class="m-text">' + esc(L(m)) + "</span></li>";
    }).join("");
  }

  // ---------- charts: horizontal bars, direct-labeled, shared scale ----------
  function barChart(title, rows, max, note) {
    return '<figure class="chart">' +
      "<figcaption><span class=\"chart-title\">" + esc(title) + "</span>" + (note ? '<span class="chart-note">' + esc(note) + "</span>" : "") + "</figcaption>" +
      '<table class="bars"><tbody>' + rows.map(function (r) {
        var w = Math.max(1, (r.value / max) * 100);
        return '<tr class="' + (r.highlight ? "hl" : "") + '"><th scope="row">' + esc(L(r)) + "</th>" +
          '<td><span class="bar-track"><span class="bar" style="width:' + w.toFixed(1) + '%"></span></span><span class="bar-val">' + r.value.toFixed(1) + "%</span></td></tr>";
      }).join("") + "</tbody></table></figure>";
  }

  function renderCharts() {
    $("breakdowns").innerHTML = C.breakdowns.map(function (b) { return barChart(L(b.title), b.rows, 25); }).join("");
    $("comparisons").innerHTML =
      barChart(t("compareNote"), C.comparisons.internet, 12) +
      barChart(t("deviceCompareNote"), C.comparisons.devices, 12);
  }

  // ---------- what we heard ----------
  function renderHeard() {
    $("engagement").innerHTML = C.engagement.map(function (e) {
      return '<li><span class="e-value">' + esc(e.value) + '</span><span class="e-label">' + esc(L(e)) + "</span></li>";
    }).join("");
    $("event-photos").innerHTML = C.eventPhotos.map(function (p) {
      return '<li><img src="' + esc(p.src) + '" alt="' + esc(L(p.alt)) + '" loading="lazy" width="460" height="345"></li>';
    }).join("") + '<li class="photo-caption">' + esc(t("photoCaption")) + "</li>";
    $("challenges").innerHTML = C.challenges.map(function (c) {
      return '<li class="challenge"><span class="c-icon">' + icon(c.icon) + "</span><h3>" + esc(L(c.title)) + "</h3><p>" + esc(L(c)) + "</p></li>";
    }).join("");
    $("groups").innerHTML = C.groups.map(function (g) {
      return "<li><strong>" + esc(L(g)) + "</strong><span>" + esc(L(g.detail)) + "</span></li>";
    }).join("");
  }

  function renderFunding() {
    $("funding-secured").innerHTML = C.funding.secured.map(function (f) {
      return '<li><span class="f-amount">' + esc(f.amount) + '</span><span>' + esc(L(f)) + "</span></li>";
    }).join("");
    $("funding-watch").innerHTML = C.funding.watch.map(function (f) { return "<li>" + esc(L(f)) + "</li>"; }).join("");
  }

  // ---------- Internet providers: monthly price ranges ----------
  var TYPE_ORDER = ["fiber", "cable", "5g", "fixed", "satellite"];
  var PRICE_MAX = 150;

  function money(v) { return "$" + (v % 1 ? v.toFixed(2) : v); }
  function pct(v) { return (v / PRICE_MAX) * 100; }

  function renderProviders() {
    var cols = t("providerCols"), types = t("types");
    var rows = C.providers.slice().sort(function (a, b) { return a.min - b.min || a.max - b.max; });
    var lc = C.lowCostRange;
    var ticks = [0, 25, 50, 75, 100, 125, 150];
    var legend = '<ul class="prov-legend">' + TYPE_ORDER.map(function (k) {
      return '<li><span class="swatch t-' + k + '"></span>' + esc(types[k]) + "</li>";
    }).join("") + '<li><span class="swatch lowcost"></span>' + esc(t("lowCost")) + " (" + money(lc[0]) + "–" + money(lc[1]) + ")</li></ul>";

    var band = '<span class="lc-band" style="left:' + pct(lc[0]) + "%;width:" + (pct(lc[1]) - pct(lc[0])) + '%"></span>';
    var head = '<div class="prov-row prov-head" role="row">' +
      '<span role="columnheader">' + esc(cols.provider) + "</span>" +
      '<span role="columnheader" class="prov-axis-head"><span class="sr-only">' + esc(cols.price) + "</span>" +
      '<span class="axis" aria-hidden="true">' + ticks.map(function (v) {
        return '<span class="tick" style="left:' + pct(v) + '%">$' + v + "</span>";
      }).join("") + "</span></span>" +
      '<span role="columnheader">' + esc(cols.price) + "</span>" +
      '<span role="columnheader">' + esc(cols.speed) + "</span>" +
      '<span role="columnheader">' + esc(t("coverage")) + "</span></div>";

    var body = rows.map(function (p, i) {
      var price = p.min === p.max ? money(p.min) : money(p.min) + "–" + money(p.max);
      var where = p.citywide ? t("citywideSoon") : p.zips.length + " " + t(p.zips.length === 1 ? "zipOne" : "zipCount");
      var whereFull = p.citywide ? t("citywideSoon") : p.zips.join(", ");
      var left = pct(p.min), width = Math.max(pct(p.max) - pct(p.min), 0);
      return '<div class="prov-row" role="row" tabindex="0" data-i="' + i + '" data-tip="' + esc(p.name + " · " + types[p.type] + " · " + price + " " + t("perMonth") + " · " + t("upTo") + " " + p.speed + " · " + whereFull) + '">' +
        '<span role="rowheader" class="prov-name"><strong>' + esc(p.name) + '</strong><span class="prov-type"><span class="swatch t-' + p.type + '" aria-hidden="true"></span>' + esc(types[p.type]) + "</span></span>" +
        '<span role="cell" class="prov-track" aria-hidden="true">' + band + ticks.map(function (v) { return '<span class="grid" style="left:' + pct(v) + '%"></span>'; }).join("") +
        '<span class="range t-' + p.type + (width === 0 ? " single" : "") + '" style="left:' + left + "%;width:" + width + '%"></span></span>' +
        '<span role="cell" class="prov-price">' + esc(price) + "</span>" +
        '<span role="cell" class="prov-speed">' + esc(t("upTo") + " " + p.speed) + "</span>" +
        '<span role="cell" class="prov-where" title="' + esc(whereFull) + '">' + esc(where) + (p.citywide ? "" : '<span class="sr-only">: ' + esc(whereFull) + "</span>") + "</span></div>";
    }).join("");

    $("providers").innerHTML = legend +
      '<div class="prov-table" role="table" aria-label="' + esc(t("providersTitle")) + '">' + head + body + "</div>" +
      '<div class="prov-tip" id="prov-tip" aria-hidden="true" hidden></div>';
  }

  function showTip(row) {
    var tip = $("prov-tip"); if (!tip || !row) return;
    tip.textContent = row.getAttribute("data-tip");
    tip.hidden = false;
    var fig = $("providers").getBoundingClientRect(), r = row.getBoundingClientRect();
    tip.style.top = (r.bottom - fig.top + 6) + "px";
    tip.style.left = Math.max(0, Math.min(r.left - fig.left + 16, fig.width - tip.offsetWidth)) + "px";
  }
  function hideTip() { var tip = $("prov-tip"); if (tip) tip.hidden = true; }
  document.addEventListener("mouseover", function (e) { var r = e.target.closest && e.target.closest(".prov-row[data-tip]"); if (r) showTip(r); });
  document.addEventListener("mouseout", function (e) { var r = e.target.closest && e.target.closest(".prov-row[data-tip]"); if (r && !r.contains(e.relatedTarget)) hideTip(); });
  document.addEventListener("focusin", function (e) { var r = e.target.closest && e.target.closest(".prov-row[data-tip]"); if (r) showTip(r); else hideTip(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") hideTip(); });

  function renderResources() {
    $("resource-grid").innerHTML = C.resources.map(function (cat) {
      return '<section class="resource-col" aria-labelledby="res-' + cat.id + '">' +
        '<h3 id="res-' + cat.id + '"><span class="r-icon">' + icon(cat.icon) + "</span>" + esc(L(cat.title)) + "</h3>" +
        '<ul class="resource-list">' + cat.items.map(function (r) {
          var name = r.url
            ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.name) + icon("external", "ext") + '<span class="sr-only"> (' + esc(t("visit")) + ")</span></a>"
            : esc(r.name);
          return '<li><p class="r-name">' + name + '</p><p class="r-desc">' + esc(L(r)) + '</p><p class="r-cost"><span class="sr-only">' + esc(t("cost")) + ": </span>" + esc(L(r.cost)) + "</p></li>";
        }).join("") + "</ul></section>";
    }).join("");
  }

  function renderFooter() {
    var parts = [];
    if (C.studyUrl) parts.push('<a href="' + esc(C.studyUrl) + '">' + esc(t("footerStudy")) + "</a>");
    if (C.contactEmail) parts.push(esc(t("footerContact")) + ' <a href="mailto:' + esc(C.contactEmail) + '">' + esc(C.contactEmail) + "</a>");
    parts.push(esc(t("source")));
    if (state.lang === "es") parts.push(esc(t("footerNote")));
    $("footer").innerHTML = "<p><strong>" + esc(t("cityName")) + "</strong> · " + esc(t("title")) + "</p>" +
      parts.map(function (p) { return "<p>" + p + "</p>"; }).join("");
  }

  // ---------- CSV export of the implementation matrix ----------
  function downloadCsv() {
    var f = t("fields");
    var head = [f.goal, f.strategy + " #", f.strategy, f.status, f.lead, f.partners, f.timeframe, f.measure, f.update];
    var lines = [head].concat(allStrategies().map(function (x) {
      var p = prog(x.s.id);
      return [L(x.goal.name), x.s.id, L(x.s), t("status")[statusOf(x.s.id)], L(p.lead), L(p.partners), L(p.timeframe), L(p.measure), L(p.update)];
    })).map(function (r) {
      return r.map(function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; }).join(",");
    });
    var blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "palmdale-digital-access-implementation-matrix" + (state.lang === "es" ? "-es" : "") + ".csv";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  // ---------- wiring ----------
  function renderAll() {
    renderText(); renderKpis(); renderMomentum(); renderProgress(); renderMilestones();
    renderCharts(); renderHeard(); renderFunding(); renderProviders(); renderResources(); renderFooter();
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.id === "lang-toggle") {
      state.lang = state.lang === "en" ? "es" : "en";
      try { localStorage.setItem("pda-lang", state.lang); } catch (err) {}
      var url = new URL(location.href); url.searchParams.set("lang", state.lang);
      history.replaceState(null, "", url);
      renderAll();
      b.focus();
    } else if (b.dataset.filter) {
      state.filter = b.dataset.filter; renderProgress();
      var again = document.querySelector('[data-filter="' + state.filter + '"]'); if (again) again.focus();
    } else if (b.dataset.view) {
      state.view = b.dataset.view; renderProgress();
      var v = document.querySelector('[data-view="' + state.view + '"]'); if (v) v.focus();
    } else if (b.id === "download") {
      downloadCsv();
    } else if (b.id === "print") {
      window.print();
    }
  });

  // Open all strategy details when printing so nothing is hidden on paper.
  window.addEventListener("beforeprint", function () { document.querySelectorAll("details.strategy").forEach(function (d) { d.setAttribute("data-was", d.open); d.open = true; }); });
  window.addEventListener("afterprint", function () { document.querySelectorAll("details.strategy").forEach(function (d) { d.open = d.getAttribute("data-was") === "true"; }); });

  // ---------- motion: count-up, growing bars, drawing rings ----------
  // Content always renders in its final state; motion is added only when the
  // visitor hasn't asked for reduced motion. Each block animates once.
  var motionOK = "IntersectionObserver" in window &&
    !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  function countUp(el) {
    var target = +el.getAttribute("data-count"), pre = el.getAttribute("data-prefix") || "", suf = el.getAttribute("data-suffix") || "";
    var start = null, dur = 1200;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(target * eased).toLocaleString("en-US") + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  renderAll();

  if (motionOK) {
    document.documentElement.classList.add("motion");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        e.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(e.target);
      });
    }, { threshold: 0.25 });
    ["kpis", "momentum", "overall", "breakdowns", "comparisons", "providers"].forEach(function (id) { io.observe($(id)); });
  }
})();
