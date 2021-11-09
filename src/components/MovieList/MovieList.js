import { Link } from "react-router-dom";

export default function MovieList({ movies, url }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
