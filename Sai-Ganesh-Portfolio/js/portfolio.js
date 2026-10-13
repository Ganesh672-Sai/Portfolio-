/**
 * SAI GANESH PORTFOLIO - PORTFOLIO.JS
 * Category filters, search functionality, and lightbox modal
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('portfolio-search');
  const emptyState = document.getElementById('portfolio-empty-state');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  // Filter & Search Logic
  const applyFilters = () => {
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.getAttribute('data-title') || card.querySelector('.project-title')?.textContent || '').toLowerCase();
      const cardMeta = (card.querySelector('.project-category')?.textContent || '').toLowerCase();

      const matchesCategory = currentCategory === 'all' || cardCategory.toLowerCase() === currentCategory.toLowerCase();
      const matchesSearch = !currentSearchQuery || cardTitle.includes(currentSearchQuery) || cardMeta.includes(currentSearchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  // Category Buttons Click
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Lightbox Modal Functionality
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const openModal = (card) => {
    if (!modal) return;

    const img = card.querySelector('img');
    const title = card.getAttribute('data-title') || card.querySelector('.project-title')?.textContent || 'Design Project';
    const category = card.getAttribute('data-category-label') || card.querySelector('.project-category')?.textContent || 'Graphic Design';
    const desc = card.getAttribute('data-desc') || 'A custom high-impact visual design project crafted with precision, strategic brand positioning, and attention to detail.';

    if (modalImg && img) modalImg.src = img.src;
    if (modalTitle) modalTitle.textContent = title;
    if (modalCategory) modalCategory.textContent = category;
    if (modalDesc) modalDesc.textContent = desc;

    const externalLink = card.getAttribute('data-link');
    const externalLinkText = card.getAttribute('data-link-text') || 'View Publication';
    const modalLinkBtn = document.getElementById('modal-link-btn');
    if (modalLinkBtn) {
      if (externalLink) {
        modalLinkBtn.href = externalLink;
        modalLinkBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${externalLinkText}`;
        modalLinkBtn.style.display = 'inline-flex';
      } else {
        modalLinkBtn.style.display = 'none';
      }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Attach modal trigger to project cards
  projectCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on an external link
      if (e.target.closest('a') && !e.target.closest('.view-project-trigger')) {
        return;
      }
      e.preventDefault();
      openModal(card);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
