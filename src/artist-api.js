import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const imagesOnPage = 8;

export async function getArtists(page = 1, name = '') {
  const BASE_URL = 'https://sound-wave.b.goit.study/api/artists';
  const params = {
    limit: imagesOnPage,
    page,
  };
  if (name) {
    params.name = name;
  }

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    iziToast.warning({
      message: `Request error: ${error.message}`,
      position: 'center',
    });
    throw error;
  }
}
