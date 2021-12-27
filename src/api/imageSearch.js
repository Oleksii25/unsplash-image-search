const BASE_URL = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

export function getImagesByQuery(query) {
  return fetch(`${BASE_URL}&query=${query}&per_page=30`).then((response) =>
    response.json()
  );
}
