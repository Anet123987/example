const menuToggleBtn = document.querySelector('.js-mobile-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

const openMobileMenu = () => {
  if (!mobileMenu || !overlay || !closeMenuBtn) return;

  mobileMenu.hidden = false;
  mobileMenu.removeAttribute('inert');
  mobileMenu.classList.add('is-open');
  overlay.classList.add('is-active');
  closeMenuBtn.focus(); // Ставим фокус на кнопку закрытия
};

const closeMobileMenu = () => {
  if (!mobileMenu || !overlay) return;

  mobileMenu.classList.remove('is-open');
  overlay.classList.remove('is-active');
  mobileMenu.setAttribute('inert', '');
  mobileMenu.hidden = true;
  menuToggleBtn?.focus(); // Возвращаем фокус кнопке открытия меню (по желанию)
};

// События открытия и закрытия меню
menuToggleBtn?.addEventListener('click', openMobileMenu);
closeMenuBtn?.addEventListener('click', closeMobileMenu);
overlay?.addEventListener('click', closeMobileMenu);

// Закрытие по Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
    closeMobileMenu();
  }
});

// Закрытие меню при клике по якорным ссылкам внутри меню
document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});
