/* ptblog — single-page personal blog render logic */
/* global SITE_DATA */
(function () {
  var S = window.SITE_DATA;
  if (!S) return;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ---------- hero ---------- */
  if (document.getElementById('hero-greeting')) {
    document.getElementById('hero-greeting').textContent = S.hero.greeting;
    document.getElementById('hero-intro').innerHTML = S.hero.intro;
    document.getElementById('hero-about').textContent = S.hero.about;
    document.getElementById('stack-chips').innerHTML = S.hero.stack.map(function (t) {
      return '<span class="chip">' + esc(t) + '</span>';
    }).join('');
    document.title = S.author + ' · Tech Blog';
  }

  /* ---------- notes ---------- */
  if (document.getElementById('notes-grid')) {
    document.getElementById('notes-grid').innerHTML = S.notes.map(function (n) {
      return '<div class="note-card">'
        + '<span class="note-ico">' + esc(n.icon) + '</span>'
        + '<h3>' + esc(n.title) + '</h3>'
        + '<p>' + esc(n.summary) + '</p>'
        + '<a class="note-link" href="' + esc(n.link) + '">Read notes &rarr;</a>'
        + '</div>';
    }).join('');
  }

  /* ---------- projects ---------- */
  if (document.getElementById('projects-grid')) {
    var statusMap = {
      maintaining: 'Maintaining',
      developing: 'In development',
      'open-source': 'Open source',
      template: 'Template'
    };
    document.getElementById('projects-grid').innerHTML = S.projects.map(function (p, i) {
      return '<div class="project-card">'
        + '<div class="proj-head"><span class="proj-no">' + String(i + 1).padStart(2, '0') + '</span>'
        + '<span class="proj-status">' + esc(statusMap[p.status] || p.status) + '</span></div>'
        + '<h3>' + esc(p.title) + '</h3>'
        + '<p>' + esc(p.summary) + '</p>'
        + '<div class="proj-stack">' + p.stack.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>'
        + '</div>';
    }).join('');
  }

  /* ---------- footer ---------- */
  if (document.getElementById('foot-brand')) {
    document.getElementById('foot-brand').textContent = S.brand;
    document.getElementById('foot-author').textContent = S.author;
  }
})();
