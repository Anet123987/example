const photo = 'https://cdn.acowebs.com/wp-content/uploads/2023/10/3acwebs-1-768x442.jpg'

export function createArtistsMarkup(arr) {
  return arr
    .map(({ strArtist, strBiographyEN, strArtistThumb, _id, genres }) => {
      const flattenedGenres = genres.flatMap(genre => genre.split('/')).map(g => g.trim());
      const uniqueGenres = [...new Set(flattenedGenres)];
      const genresMarkup = uniqueGenres
        .map(genre => `<span class="artists-genre">${genre}</span>`)
        .join('');

      return `
        <li class="artists-item" style="max-width:472px; max-height:527px;">
          <div class="artists-box-img">
            <img
              data-id="${_id}"
              src="${strArtistThumb || photo}"
              alt="${strArtist}"
              class="artists-img"
              loading="lazy"
              width="472"
              height="300"
            />
          </div>
          <div class="artists-box-genres">${genresMarkup}</div>
          <div class="artists-content">
            <h4 class="artists-name">${strArtist}</h4>
            <p class="artists-descr">${strBiographyEN}</p>
            <button type="button" class="artists-learn-more-btn" aria-label="Learn more about ${strArtist}">
              Learn More
              <svg class="icon-caret-right" width="24" height="24">
                <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-caret-right"></use>
              </svg>
            </button>
          </div>
        </li>
      `;
    })
    .join('');
}