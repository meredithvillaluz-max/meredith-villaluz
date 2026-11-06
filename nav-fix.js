/* Shared menu fix: keeps the top menu tidy on laptops and adds a menu button on tablets and phones. */
(function () {
  var css = [
    'nav{gap:1.5rem}',
    '.nav-logo{flex-shrink:0;white-space:nowrap}',
    '.nav-links{flex-wrap:nowrap}',
    '.nav-links a{white-space:nowrap}',
    '@media(max-width:1280px){nav{padding:1rem 2.5rem}.nav-links{gap:1.25rem}.nav-links a{font-size:.66rem;letter-spacing:.09em}}',
    '.nav-toggle{display:none;flex-direction:column;justify-content:center;gap:5px;width:42px;height:42px;padding:0 10px;background:transparent;border:1px solid rgba(27,56,41,.2);cursor:pointer;flex-shrink:0}',
    '.nav-toggle span{display:block;height:2px;background:#1A3829;transition:transform .25s,opacity .25s}',
    'nav.open .nav-toggle span:nth-child(1){transform:translateY(7px) rotate(45deg)}',
    'nav.open .nav-toggle span:nth-child(2){opacity:0}',
    'nav.open .nav-toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}',
    '@media(max-width:1060px){nav{padding:1rem 1.5rem}.nav-toggle{display:flex}',
    '.nav-links{display:none!important;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:flex-start;gap:1.1rem!important;padding:1.2rem 1.5rem 1.6rem;background:rgba(253,251,248,.98);border-bottom:1px solid rgba(27,56,41,.1);box-shadow:0 12px 24px rgba(13,27,18,.08)}',
    'nav.open .nav-links{display:flex!important}',
    '.nav-links a{font-size:.78rem!important}}'
  ].join('\n');
  var style = document.createElement('style');
  style.id = 'nav-fix';
  style.textContent = css;
  document.head.appendChild(style);

  function init() {
    var nav = document.querySelector('nav');
    var links = nav && nav.querySelector('.nav-links');
    if (!links || nav.querySelector('.nav-toggle')) return;
    var btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(btn);
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) nav.classList.remove('open');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
