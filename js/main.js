/* ptblog English Site — shared render logic */
(function () {
  var S = window.SITE_DATA;
  if (!S) return;

  function qs(name) {
    var m = location.search.match(new RegExp('[?&]' + name + '=([^&]*)'));
    return m ? decodeURIComponent(m[1]) : '';
  }
  function catName(id) {
    var c = S.categories.filter(function (x) { return x.id === id; })[0];
    return c ? c.name : 'Unknown';
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function resCard(r) {
    return '<div class="res-card">'
      + '<a class="res-cover" href="detail.html?id=' + r.id + '" style="background:' + (r.accent === 'teal' ? '#E4F1EF' : r.accent === 'gold' ? '#F7EFE2' : '#E8F2EC') + '">'
      + '<span class="cov-tag">' + esc(catName(r.category_id)) + '</span>' + coverSvg(r.accent) + '</a>'
      + '<div class="res-body">'
      + '<h3><a href="detail.html?id=' + r.id + '">' + esc(r.title) + '</a></h3>'
      + '<p class="res-sum">' + esc(r.summary) + '</p>'
      + '<div class="res-meta">'
      + '<span class="hot">Heat ' + r.hot + '</span>'
      + (r.outer_link ? '<a class="ext" href="' + esc(r.outer_link) + '" target="_blank" rel="noopener">Open ↗</a>' : '')
      + '</div></div></div>';
  }

  /* ---------- index ---------- */
  if (document.getElementById('hero-panel')) {
    document.getElementById('stat-res').textContent = S.resources.length;
    document.getElementById('stat-cat').textContent = S.categories.length;
    var hp = document.getElementById('hero-panel');
    hp.innerHTML = '<h3>Featured topics</h3>'
      + S.resources.slice(0, 4).map(function (r) {
        return '<div class="hero-topic"><span class="tag">' + esc(catName(r.category_id)) + '</span> ' + esc(r.title) + '</div>';
      }).join('');
    document.getElementById('cat-grid').innerHTML = S.categories.map(function (c) {
      var n = S.resources.filter(function (r) { return r.category_id === c.id; }).length;
      return '<a class="cat-card" href="resources.html?cat=' + c.id + '">'
        + '<span class="cat-ico">' + coverSvg(c.id === 'c2' ? 'teal' : c.id === 'c3' ? 'gold' : 'green') + '</span>'
        + '<h3>' + esc(c.name) + '</h3><p>' + esc(c.desc) + '</p>'
        + '<span class="cat-meta">' + n + ' resources →</span></a>';
    }).join('');
    document.getElementById('res-grid').innerHTML = S.resources
      .slice().sort(function (a, b) { return b.hot - a.hot; }).slice(0, 6)
      .map(resCard).join('');
  }

  /* ---------- list ---------- */
  if (document.getElementById('chips')) {
    var activeCat = qs('cat') || 'all';
    var chipsEl = document.getElementById('chips');
    var all = S.categories.reduce(function (s, c) { return s + S.resources.filter(function (r) { return r.category_id === c.id; }).length; }, 0);
    var chipHtml = '<button class="chip' + (activeCat === 'all' ? ' active' : '') + '" data-cat="all">All (' + all + ')</button>';
    S.categories.forEach(function (c) {
      var n = S.resources.filter(function (r) { return r.category_id === c.id; }).length;
      chipHtml += '<button class="chip' + (activeCat === c.id ? ' active' : '') + '" data-cat="' + c.id + '">' + esc(c.name) + ' (' + n + ')</button>';
    });
    chipsEl.innerHTML = chipHtml;

    function render() {
      var kw = (document.getElementById('search-input').value || '').trim().toLowerCase();
      var list = S.resources.filter(function (r) {
        if (activeCat !== 'all' && r.category_id !== activeCat) return false;
        if (kw) {
          var hay = (r.title + ' ' + r.summary).toLowerCase();
          if (hay.indexOf(kw) < 0) return false;
        }
        return true;
      });
      document.getElementById('res-grid').innerHTML = list.map(resCard).join('');
      document.getElementById('empty').style.display = list.length ? 'none' : 'block';
    }
    chipsEl.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      activeCat = b.getAttribute('data-cat');
      Array.prototype.forEach.call(chipsEl.querySelectorAll('.chip'), function (x) {
        x.classList.toggle('active', x === b);
      });
      render();
    });
    document.getElementById('search-input').addEventListener('input', render);
    render();
  }

  /* ---------- detail ---------- */
  if (document.getElementById('article')) {
    var id = qs('id');
    var r = S.resources.filter(function (x) { return x.id === id; })[0];
    var article = document.getElementById('article');
    if (!r) {
      article.innerHTML = '<h1>Resource not found</h1><p>The resource may have been removed.</p>';
    } else {
      document.title = r.title + ' — ptblog';
      document.getElementById('crumbs').innerHTML = '<a href="index.html">Home</a> / <a href="resources.html?cat=' + r.category_id + '">' + esc(catName(r.category_id)) + '</a> / ' + esc(r.title);
      article.innerHTML = '<h1>' + esc(r.title) + '</h1>'
        + '<p class="sum">' + esc(r.summary) + '</p>'
        + '<div class="content">' + r.content + '</div>';
      var related = S.resources.filter(function (x) { return x.category_id === r.category_id && x.id !== r.id; }).slice(0, 5);
      document.getElementById('aside').innerHTML =
        '<div class="aside-card"><h4>Details</h4><ul class="aside-meta">'
        + '<li><span>Category</span>' + esc(catName(r.category_id)) + '</li>'
        + '<li><span>Heat</span>' + r.hot + '</li>'
        + (r.outer_link ? '<li><a class="btn btn-primary aside-link" href="' + esc(r.outer_link) + '" target="_blank" rel="noopener">Open External Link</a></li>' : '')
        + '</ul></div>'
        + (related.length ? '<div class="aside-card"><h4>Related in ' + esc(catName(r.category_id)) + '</h4><ul class="related">'
          + related.map(function (x) { return '<li><a href="detail.html?id=' + x.id + '">' + esc(x.title) + '</a></li>'; }).join('')
          + '</ul></div>' : '');
    }
  }
})();
