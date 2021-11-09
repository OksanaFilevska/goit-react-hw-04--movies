import { useState, useEffect } from "react";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import Searchbar from "../../components/Searchbar";
import * as themoiebdApi from "../../services/themoiebd-api";
import MovieList from "../../components/MovieList";
// import s from "./MoviesPage.module.css";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const { url } = useRouteMatch();
  const querySearch = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (querySearch === null) {
      return;
    }

    setQuery(querySearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }

    themoiebdApi
      .fetMoviesSearch(query)
      .then((response) => setMovies(response.results));
  }, [query]);

  const handleSubmit = (value) => {
    setQuery(value);
    history.push({ ...location, search: `query=${value}` });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />

      {movies &&
        (movies.length ? (
          <MovieList movies={movies} url={url} />
        ) : (
          <p>Not found `${query}`</p>
        ))}
    </>
  );
}

export default MoviesPage;
