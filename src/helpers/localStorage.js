export const saveQuriesToLocalStorage = (key, queries) => {
  localStorage.setItem(key, JSON.stringify(queries));
}

export const getQueriesFromLocalStorage = (key) => {
  const queriesFromStorage = localStorage.getItem(key);
  const parsedQueries = JSON.parse(queriesFromStorage);
  return parsedQueries;
}
