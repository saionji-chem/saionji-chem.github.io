// 西園寺聖樹 オフィシャルサイト - スクリプト

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ナビゲーションのアクティブ状態を更新
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav);
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// フォーム送信
function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Google Formに送信する場合はここに処理を追加
  // 例：fetch('https://docs.google.com/forms/d/...', { method: 'POST', body: formData })
  
  // デモ用：アラート表示
  alert('お問い合わせありがとうございます。確認後、ご連絡させていただきます。');
  form.reset();
}

// ページ遷移時にスクロール位置をリセット
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});
