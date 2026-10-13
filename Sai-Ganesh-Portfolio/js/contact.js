/**
 * SAI GANESH PORTFOLIO - CONTACT.JS
 * Accessible form validation with transparent submission feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForms = document.querySelectorAll('.contact-form, #contact-form');

  contactForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"], #contact-name');
      const emailInput = form.querySelector('[name="email"], #contact-email');
      const messageInput = form.querySelector('[name="message"], #contact-message');
      const statusAlert = form.querySelector('.form-status-alert') || createStatusAlert(form);

      // Validation
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) {
        showStatus(statusAlert, 'Please enter your name.', 'error');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!email || !emailRegex.test(email)) {
        showStatus(statusAlert, 'Please enter a valid email address.', 'error');
        if (emailInput) emailInput.focus();
        return;
      }

      if (!message) {
        showStatus(statusAlert, 'Please write your message or project requirements.', 'error');
        if (messageInput) messageInput.focus();
        return;
      }

      // Honest submission feedback (no fake delivery claim)
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
      }

      setTimeout(() => {
        showStatus(
          statusAlert,
          `Thank you, ${name}! Your inquiry has been validated locally. Since this is running as a static demonstration without a backend email server, please also feel free to reach out directly at muduganesh49@gmail.com or via WhatsApp for immediate response!`,
          'success'
        );

        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 900);
    });
  });

  function createStatusAlert(form) {
    const alert = document.createElement('div');
    alert.className = 'form-status-alert';
    form.appendChild(alert);
    return alert;
  }

  function showStatus(alertEl, message, type) {
    alertEl.className = `form-status-alert ${type}`;
    alertEl.textContent = message;
    alertEl.style.display = 'block';

    if (type === 'error') {
      setTimeout(() => {
        alertEl.style.display = 'none';
      }, 5000);
    }
  }
});
