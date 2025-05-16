const menuToggleBtn = document.querySelector('.js-mobile-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

// Открывает меню
function openMobileMenu() {
  mobileMenu.hidden = false;
  mobileMenu.removeAttribute('inert');
  mobileMenu.classList.add('is-open');
  overlay.classList.add('is-active');
  closeMenuBtn.focus(); // Фокус на кнопку закриття
}

// Закрывает меню
function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  overlay.classList.remove('is-active');
  mobileMenu.setAttribute('inert', '');
  mobileMenu.hidden = true;
}

// Открытие по кнопке-бургеру
menuToggleBtn?.addEventListener('click', openMobileMenu);

// Закрытие по кнопке-кресту
closeMenuBtn?.addEventListener('click', closeMobileMenu);

// Закрытие по клику на оверлей
overlay?.addEventListener('click', closeMobileMenu);

// Закрытие по Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
});

// Закрытие при переходе по якорю
document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});
