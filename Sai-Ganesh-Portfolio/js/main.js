/**
 * SAI GANESH PORTFOLIO - MAIN.JS
 * Core interactivity, navigation, theme toggle, and utility behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark / Light) with LocalStorage
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('sg-theme') || 'dark';

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sg-theme', theme);
    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector('i');
      if (icon) {
        if (theme === 'light') {
          icon.className = 'fa-solid fa-moon';
          themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
          themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
        } else {
          icon.className = 'fa-solid fa-sun';
          themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
          themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
        }
      }
    }
  };

  applyTheme(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // 2. Mobile Menu Navigation (Hamburger Drawer)
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
          hamburger.setAttribute('aria-expanded', 'true');
        } else {
          icon.className = 'fa-solid fa-bars';
          hamburger.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close on link click
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // 3. Highlight Current Active Nav Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 4. Sticky Header Blur and Back to Top Button
  const headerNav = document.querySelector('.header-nav');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling
    if (headerNav) {
      if (scrollY > 40) {
        headerNav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
      } else {
        headerNav.style.boxShadow = 'none';
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. FAQ Accordion (For pricing and services pages)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach((other) => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 6. Service Category Filter Tabs (WHAT I DO)
  const serviceFilterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card[data-service-cat]');

  if (serviceFilterBtns.length > 0 && serviceCards.length > 0) {
    serviceFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        serviceFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-service-filter') || 'all';

        serviceCards.forEach((card) => {
          const cardCat = card.getAttribute('data-service-cat') || '';
          if (filter === 'all' || cardCat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
