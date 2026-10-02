(function () {
  var root = document.documentElement;
  var KEY = 'theme';

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function current() {
    var s = saved();
    if (s === 'light' || s === 'dark') return s;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var s = saved();
  if (s === 'light' || s === 'dark') root.setAttribute('data-theme', s);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
      });
    }

    // Duplicate the marquee group once so the loop is seamless.
    var track = document.querySelector('.marquee-track');
    if (track && track.firstElementChild) {
      var copy = track.firstElementChild.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      track.appendChild(copy);
    }
  });
})();
