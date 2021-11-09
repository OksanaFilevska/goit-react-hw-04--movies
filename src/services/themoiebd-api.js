const API_KEY = "88b02296e8522c5c1bc29b4c81488e30";
const BASE_URL = "https://api.themoviedb.org/3/";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetTrendingMovies(currentPage = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${currentPage}`
  );
}

export function fetMoviesSearch(query, currentPage = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${currentPage}&include_adult=false`
  );
}

export function fetMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?&api_key=${API_KEY}&language=en-US`
  );
}

export function fetMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
