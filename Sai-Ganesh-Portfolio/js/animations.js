/**
 * SAI GANESH PORTFOLIO - ANIMATIONS.JS
 * GSAP + ScrollTrigger animations with robust fallbacks
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Counter Animation for Achievements (Works with or without GSAP)
  const counterElements = document.querySelectorAll('.counter-val');
  let animatedCounters = false;

  const runCounters = () => {
    if (animatedCounters) return;
    animatedCounters = true;

    counterElements.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 1600; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quadratic
        const easeProgress = progress * (2 - progress);
        const currentVal = Math.floor(easeProgress * target);

        counter.textContent = currentVal + (counter.getAttribute('data-suffix') || '+');

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target + (counter.getAttribute('data-suffix') || '+');
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  // IntersectionObserver for stats
  const achievementsSection = document.querySelector('.achievements-col, .achievements-grid');
  if (achievementsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(achievementsSection);
  }

  // 2. GSAP & ScrollTrigger Animations
  if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Stagger Reveal
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (document.querySelector('.hero-greeting')) {
      heroTimeline
        .from('.hero-greeting', { opacity: 0, y: 20, duration: 0.5 })
        .from('.hero-name', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
        .from('.hero-profession', { opacity: 0, y: 25, duration: 0.6 }, '-=0.4')
        .from('.service-tag-line', { opacity: 0, y: 15, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .from('.hero-desc', { opacity: 0, y: 15, duration: 0.5 }, '-=0.2')
        .from('.hero-cta-group .btn', { opacity: 0, y: 20, duration: 0.5, stagger: 0.15 }, '-=0.2')
        .from('.hero-social-block', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.portrait-wrapper', { opacity: 0, scale: 0.88, duration: 0.9, ease: 'back.out(1.4)' }, '-=1')
        .from('.floating-badge', { opacity: 0, scale: 0, duration: 0.5, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.5');
    }

    // Scroll-triggered content panel reveals
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.content-panel').forEach((panel) => {
        gsap.from(panel, {
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 35,
          duration: 0.75,
          ease: 'power2.out'
        });
      });

      // Staggered Project Cards Reveal (Safe fromTo to prevent blank cards)
      if (document.querySelector('.featured-grid')) {
        gsap.fromTo('.featured-grid .project-card',
          { y: 15, opacity: 1 },
          {
            scrollTrigger: {
              trigger: '.featured-grid',
              start: 'top 95%',
              toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out'
          }
        );
      }

      // Staggered Services Cards Reveal (Safe fromTo to prevent blank cards)
      if (document.querySelector('.services-grid')) {
        gsap.fromTo('.services-grid .service-card',
          { y: 15, opacity: 0.6 },
          {
            scrollTrigger: {
              trigger: '.services-grid',
              start: 'top 95%',
              toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: 'power2.out'
          }
        );
      }

      // Refresh on window load to recalculate positions accurately
      window.addEventListener('load', () => {
        ScrollTrigger.refresh();
      });
    }
  }

  // 3. Swiper Carousel for Testimonials (if present)
  if (typeof Swiper !== 'undefined' && document.querySelector('.testimonials-swiper')) {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }
});
