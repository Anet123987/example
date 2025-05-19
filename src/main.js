import './css/styles.css';
import { getArtists } from './artist-api.js';
import { createArtistsMarkup } from './create.js';

const list = document.querySelector('.artists-list');
const pagination = document.querySelector('.pagination');
const searchInput = document.querySelector('#search-input');

const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalArtistName = document.getElementById('modal-artist-name');
const modalArtistBio = document.getElementById('modal-artist-bio');

let currentPage = 1;
let currentQuery = '';


let debounceTimeout;
searchInput.addEventListener('input', e => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    currentQuery = e.target.value.trim();
    currentPage = 1;
    loadArtists(currentPage, currentQuery);
  }, 300);
});

async function loadArtists(page, query = '') {
  try {
    const { artists, totalArtists } = await getArtists(page, query);
    list.innerHTML = createArtistsMarkup(artists);

 
    document.querySelectorAll('.artists-learn-more-btn').forEach((button, index) => {
      button.addEventListener('click', () => {
        const artist = artists[index];
        modalArtistName.textContent = artist.strArtist;
        modalArtistBio.textContent = artist.strBiographyEN || 'No biography available.';
        modal.classList.remove('hidden');
      });
    });

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
      if (page < 1 || page > totalPages) return;
      currentPage = page;
      loadArtists(currentPage, currentQuery);
    });
    pagination.appendChild(btn);
  };

  addButton('←', current - 1, false, current === 1);

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      addButton(i, i, i === current);
    }
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 4; i++) addButton(i, i, i === current);
      pagination.appendChild(document.createTextNode('...'));
      addButton(totalPages, totalPages, false);
    } else if (current >= totalPages - 2) {
      addButton(1, 1, false);
      pagination.appendChild(document.createTextNode('...'));
      for (let i = totalPages - 3; i <= totalPages; i++) {
        addButton(i, i, i === current);
      }
    } else {
      addButton(1, 1, false);
      pagination.appendChild(document.createTextNode('...'));
      addButton(current - 1, current - 1);
      addButton(current, current, true);
      addButton(current + 1, current + 1);
      pagination.appendChild(document.createTextNode('...'));
      addButton(totalPages, totalPages);
    }
  }

  addButton('→', current + 1, false, current === totalPages);
}


modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


loadArtists(currentPage);
