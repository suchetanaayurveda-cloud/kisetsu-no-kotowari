/**
 * 二十四節気 × アーユルヴェーダ × 日本の食
 * Landing Page JavaScript
 */

'use strict';

/* ========================================
   1. HEADER SCROLL EFFECT
   ======================================== */
(function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 初期実行
})();


/* ========================================
   2. INTERSECTION OBSERVER — FADE IN
   ======================================== */
(function initFadeInObserver() {
  const options = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 一度表示したら監視解除
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // fade-in-up クラスを持つ要素を監視
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // チェックリスト
  document.querySelectorAll('.checklist-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });

  // 問題カード
  document.querySelectorAll('.problem-card').forEach(el => {
    observer.observe(el);
  });
})();


/* ========================================
   3. FAQ ACCORDION
   ======================================== */
(function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const inner = item.querySelector('.faq-a-inner');

    if (!question || !answer || !inner) return;

    // キーボード操作対応
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFAQ(item, answer, inner, question);
      }
    });

    question.addEventListener('click', () => {
      toggleFAQ(item, answer, inner, question);
    });
  });

  function toggleFAQ(item, answer, inner, question) {
    const isOpen = item.classList.contains('open');

    // 他の開いているFAQを閉じる
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('open')) {
        closeFAQ(otherItem);
      }
    });

    if (isOpen) {
      closeFAQ(item);
    } else {
      openFAQ(item, answer, inner, question);
    }
  }

  function openFAQ(item, answer, inner, question) {
    item.classList.add('open');
    answer.style.maxHeight = inner.offsetHeight + 'px';
    question.setAttribute('aria-expanded', 'true');
  }

  function closeFAQ(item) {
    item.classList.remove('open');
    const answer = item.querySelector('.faq-answer');
    const question = item.querySelector('.faq-question');
    if (answer) answer.style.maxHeight = '0';
    if (question) question.setAttribute('aria-expanded', 'false');
  }
})();


/* ========================================
   4. SMOOTH SCROLL (for anchor links)
   ======================================== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.getElementById('site-header')
        ? document.getElementById('site-header').offsetHeight
        : 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    });
  });
})();


/* ========================================
   5. STICKY CTA — SHOW/HIDE ON MOBILE
   ======================================== */
(function initStickyCTA() {
  const stickyCTA = document.getElementById('sticky-cta');
  if (!stickyCTA) return;

  const hero = document.getElementById('hero');
  const ctaSection = document.getElementById('section-cta');

  const updateStickyCTA = () => {
    if (window.innerWidth > 768) {
      stickyCTA.style.display = 'none';
      stickyCTA.setAttribute('aria-hidden', 'true');
      return;
    }

    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    const ctaTop = ctaSection ? ctaSection.getBoundingClientRect().top : Infinity;
    const windowHeight = window.innerHeight;

    if (heroBottom < 0 && ctaTop > windowHeight) {
      stickyCTA.style.display = 'flex';
      stickyCTA.setAttribute('aria-hidden', 'false');
    } else {
      stickyCTA.style.display = 'none';
      stickyCTA.setAttribute('aria-hidden', 'true');
    }
  };

  window.addEventListener('scroll', updateStickyCTA, { passive: true });
  window.addEventListener('resize', updateStickyCTA, { passive: true });
  updateStickyCTA();
})();


/* ========================================
   6. PRICING CARD HOVER EFFECT
   ======================================== */
(function initPricingAnimation() {
  const pricingCards = document.querySelectorAll('.pricing-card');

  pricingCards.forEach(card => {
    // IntersectionObserver でフェードイン
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.2 });

    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

    observer.observe(card);
  });
})();


/* ========================================
   7. SCHEDULE ITEMS — STAGGER ANIMATION
   ======================================== */
(function initScheduleAnimation() {
  const scheduleItems = document.querySelectorAll('.schedule-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  scheduleItems.forEach(item => {
    observer.observe(item);
  });
})();


/* ========================================
   8. NUMBER COUNTER (bonus value)
   ======================================== */
(function initCounterAnimation() {
  const bonusTotalEl = document.querySelector('.bonus-total-num');
  if (!bonusTotalEl) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounter(bonusTotalEl, 0, 150000, 1500, (val) => {
          return '¥' + val.toLocaleString('ja-JP') + '以上相当';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(bonusTotalEl);

  function animateCounter(el, start, end, duration, formatter) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(start + (end - start) * eased);
      el.textContent = formatter(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
})();


/* ========================================
   9. HERO PARTICLES (subtle)
   ======================================== */
(function initHeroParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // パフォーマンスに配慮して少数のパーティクルのみ
  const particleCount = window.innerWidth > 768 ? 12 : 6;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.setAttribute('aria-hidden', 'true');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(184, 151, 90, ${Math.random() * 0.3 + 0.05});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particle-float ${Math.random() * 10 + 8}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      pointer-events: none;
      z-index: 1;
    `;
    hero.appendChild(particle);
  }

  // CSSアニメーション追加
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      50% { transform: translateY(-${window.innerWidth > 768 ? 80 : 40}px) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.floor(Math.random() * 40 + 20)}px); }
    }
  `;
  document.head.appendChild(style);
})();


/* ========================================
   10. LEARN CARD HOVER — MOBILE TOUCH
   ======================================== */
(function initLearnCardTouch() {
  if (window.matchMedia('(hover: none)').matches) {
    document.querySelectorAll('.learn-card').forEach(card => {
      card.addEventListener('touchstart', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 20px 60px rgba(26, 22, 18, 0.12)';
      }, { passive: true });
      card.addEventListener('touchend', () => {
        setTimeout(() => {
          card.style.transform = '';
          card.style.boxShadow = '';
        }, 200);
      }, { passive: true });
    });
  }
})();


/* ========================================
   11. SECTION PROGRESS INDICATOR (subtle)
   ======================================== */
(function initProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.setAttribute('aria-hidden', 'true');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, #b8975a, #d4b07a);
    z-index: 1001;
    transition: width 0.1s linear;
    width: 0%;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(scrollPercent, 100) + '%';
  }, { passive: true });
})();


/* ========================================
   12. CTA BUTTON — PAYMENT URL CONFIGURATION
      ─────────────────────────────────────────
      申込みURLの設定はここ1か所だけ変更すれば OK。
      このJSが index.html の href="#" を上書きします。

      対象ボタン（index.html）：
        #btn-package-apply  → 全講座パッケージ（¥114,000）
        #btn-single-apply   → 1回参加（¥38,000）

      ※ sticky-cta は #section-cta、header-cta は #section-pricing への
         スクロールリンクなので変更不要。

      STORES product URLs are configured here.
   ======================================== */
(function initCTAButtons() {
  const pkgBtn = document.getElementById('btn-package-apply');
  const singleBtn = document.getElementById('btn-single-apply');

  const PACKAGE_URL = 'https://viorto.shop/items/6a2bd3f1ea71f300c11b0b59';
  const SINGLE_URL  = 'https://viorto.shop/items/6a2bd33c1c72b400460c4ab0';

  if (pkgBtn) {
    pkgBtn.setAttribute('href', PACKAGE_URL);
    pkgBtn.setAttribute('target', '_blank');
    pkgBtn.setAttribute('rel', 'noopener noreferrer');
  }
  if (singleBtn) {
    singleBtn.setAttribute('href', SINGLE_URL);
    singleBtn.setAttribute('target', '_blank');
    singleBtn.setAttribute('rel', 'noopener noreferrer');
  }

  // Header CTAも設定
  const headerCta = document.querySelector('.header-cta');
  if (headerCta) {
    headerCta.setAttribute('href', '#section-pricing');
  }
})();


/* ========================================
   13. REDUCED MOTION SUPPORT
   ======================================== */
(function respectReducedMotion() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.querySelectorAll('.hero-deco--circle1, .hero-deco--circle2').forEach(el => {
      el.style.animation = 'none';
    });
    document.querySelectorAll('.nijuushi-circle').forEach(el => {
      el.style.animation = 'none';
    });
  }
})();


/* ========================================
   14. BONUS ITEM STAGGER
   ======================================== */
(function initBonusAnimation() {
  const bonusItems = document.querySelectorAll('.bonus-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  bonusItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(16px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
  });
})();


/* ========================================
   INIT LOG
   ======================================== */
console.log(
  '%c二十四節気 × アーユルヴェーダ × 日本の食%c LP Ready',
  'color:#b8975a;font-family:serif;font-size:14px;',
  'color:#7a8c6e;font-size:12px;'
);
