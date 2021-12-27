import { getQueriesFromLocalStorage } from "../helpers";
import { LOCAL_STORAGE_KEY, IMAGES_ON_PAGE } from "../constants";
const BASE_URL = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

export function getImagesByQuery(query) {
  return fetch(`${BASE_URL}&query=${query}&per_page=${IMAGES_ON_PAGE}`).then(
    (response) => response.json()
  );
}

export function getImagesByPage(page) {
  const query = getQueriesFromLocalStorage(LOCAL_STORAGE_KEY)[0];
  return fetch(
    `${BASE_URL}&query=${query}&page=${page}&per_page=${IMAGES_ON_PAGE}`
  ).then((response) => response.json());
}
