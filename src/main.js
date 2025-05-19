import './css/styles.css';
import { getArtists } from './artist-api.js';
import { createArtistsMarkup } from './create.js';

const list = document.querySelector('.artists-list');
const pagination = document.querySelector('.pagination');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

let currentPage = 1;
let currentQuery = '';

async function loadArtists(page = 1, query = '') {
  try {
    const { artists, totalArtists } = await getArtists(page, query);
    list.innerHTML = createArtistsMarkup(artists);

    const totalPages = Math.ceil(totalArtists / 8);
    renderPagination(totalPages, page);
  } catch (err) {
    list.innerHTML = `<li>Ошибка загрузки данных</li>`;
  }
}

function renderPagination(totalPages, current) {
  pagination.innerHTML = '';
  if (totalPages <= 1) return;

  const addButton = (label, page, isActive = false, isDisabled = false) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    if (isActive) btn.classList.add('active');
    if (isDisabled) btn.disabled = true;
    btn.addEventListener('click', () => {
      if (page < 1 || page > totalPages) return; // защита от невалидных страниц
      currentPage = page;
      loadArtists(currentPage, currentQuery);
    });
    pagination.appendChild(btn);
  };

  // Кнопка "←"
  addButton('←', current - 1, false, current === 1);

  // Логика показа номеров страниц с "..."
  if (totalPages <= 5) {
    // Если всего 5 или меньше страниц — показать все
    for (let i = 1; i <= totalPages; i++) {
      addButton(i, i, i === current);
    }
  } else {
    // Иначе — показываем 1, 2, 3 ... last
    if (current <= 3) {
      // Показываем 1 2 3 ... N
      for (let i = 1; i <= 3; i++) {
        addButton(i, i, i === current);
      }
      const dots = document.createElement('span');
      dots.textContent = '...';
      pagination.appendChild(dots);
      addButton(totalPages, totalPages, current === totalPages);
    } else if (current >= totalPages - 2) {
      // Показываем 1 ... N-2 N-1 N
      addButton(1, 1, current === 1);
      const dots = document.createElement('span');
      dots.textContent = '...';
      pagination.appendChild(dots);
      for (let i = totalPages - 2; i <= totalPages; i++) {
        addButton(i, i, i === current);
      }
    } else {
      // Показываем 1 ... current ... N
      addButton(1, 1, false);
      const dots1 = document.createElement('span');
      dots1.textContent = '...';
      pagination.appendChild(dots1);

      addButton(current - 1, current - 1, false);
      addButton(current, current, true);
      addButton(current + 1, current + 1, false);

      const dots2 = document.createElement('span');
      dots2.textContent = '...';
      pagination.appendChild(dots2);

      addButton(totalPages, totalPages, false);
    }
  }

  // Кнопка "→"
  addButton('→', current + 1, false, current === totalPages);
}

// Обработчик кнопки поиска
searchBtn.addEventListener('click', () => {
  currentQuery = searchInput.value.trim();
  currentPage = 1;
  loadArtists(currentPage, currentQuery);
});

// Также поиск по вводу (если хочешь)
searchInput.addEventListener('input', (e) => {
  currentQuery = e.target.value.trim();
  currentPage = 1;
  loadArtists(currentPage, currentQuery);
});

// Инициализация
loadArtists(currentPage, currentQuery);
