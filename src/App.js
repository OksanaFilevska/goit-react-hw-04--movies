import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import Header from "./components/Header";
import Container from "./components/Container/Container";
// import HomePage from "./views/HomePage";
// import MoviesPage from "./views/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage";

const HomePage = lazy(() =>
  import("./views/HomePage" /*webpackChunkName: "homePage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /*webpackChunkName: "moviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /*webpackChunkName: "movieDetailsPage" */)
);

export default function App() {
  return (
    <Container>
      <Header />

      <Suspense
        fallback={
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
