/**
 * SAI GANESH PORTFOLIO - CURSOR.JS
 * Smooth magnetic cursor with orange glow and hover expansion
 */

document.addEventListener('DOMContentLoaded', () => {
  // Disable on touch devices or if reduced motion is requested
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isTouchDevice || prefersReducedMotion) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';

  const outline = document.createElement('div');
  outline.className = 'custom-cursor-outline';

  document.body.appendChild(dot);
  document.body.appendChild(outline);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  const animate = () => {
    // Smooth lerp follow
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);

  // Hover states on interactive elements
  const interactiveSelector = 'a, button, input, textarea, select, .project-card, .service-card, .filter-btn, .theme-toggle';

  const updateHoverTargets = () => {
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener('mouseenter', () => {
        outline.style.width = '48px';
        outline.style.height = '48px';
        outline.style.borderColor = 'var(--primary-orange)';
        outline.style.backgroundColor = 'rgba(255, 121, 0, 0.12)';
      });

      el.addEventListener('mouseleave', () => {
        outline.style.width = '32px';
        outline.style.height = '32px';
        outline.style.borderColor = 'var(--primary-orange)';
        outline.style.backgroundColor = 'transparent';
      });
    });
  };

  updateHoverTargets();

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    outline.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    outline.style.opacity = '1';
  });
});
