import { useState, useEffect } from "react";
import s from "./HomePage.module.css";
import * as themoiebdApi from "../../services/themoiebd-api";
import MovieList from "../../components/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    themoiebdApi
      .fetTrendingMovies()
      .then((response) => setMovies(response.results));
  }, []);

  return (
    <>
      <h2 className={s.title}>Trending today</h2>

      {movies && <MovieList movies={movies} url={"/movies"} />}
    </>
  );
}

export default HomePage;
