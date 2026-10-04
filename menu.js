(function () {
  var button = document.querySelector('.menu-button');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) { return; }

  function setOpen(open, returnFocus) {
    nav.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (!open && returnFocus) { button.focus(); }
  }

  button.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'), false);
  });

  document.addEventListener('click', function (event) {
    if (!nav.classList.contains('is-open')) { return; }
    if (nav.contains(event.target) || button.contains(event.target)) { return; }
    setOpen(false, false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false, true); }
  });

  window.matchMedia('(min-width: 821px)').addEventListener('change', function (event) {
    if (event.matches) { setOpen(false, false); }
  });
})();
