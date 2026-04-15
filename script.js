// 西園寺聖樹 オフィシャルサイト - スクリプト

document.addEventListener('DOMContentLoaded', function () {

  /* --------------------------------------------------
     ハンバーガーメニュー
  -------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // メニュー内リンクをタップしたら閉じる
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --------------------------------------------------
     スムーススクロール（同一ページ内アンカー）
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
          10
        ) || 64;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* --------------------------------------------------
     ナビゲーション アクティブ状態（index.html のみ有効）
  -------------------------------------------------- */
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length > 0 && navAnchors.length > 0) {
    function updateActiveNav() {
      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
        10
      ) || 64;
      let current = '';
      sections.forEach(function (section) {
        if (window.pageYOffset >= section.offsetTop - navHeight - 8) {
          current = section.getAttribute('id');
        }
      });
      navAnchors.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }

    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });
  }

});
