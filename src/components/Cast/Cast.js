import { useState, useEffect } from "react";
import * as themoiebdApi from "../../services/themoiebd-api";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    themoiebdApi
      .fetMovieCast(movieId)
      .then((response) => setCast(response.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          {cast.map(({ cast_id, character, name, profile_path }) => (
            <li key={cast_id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              )}
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </div>
      )}
    </>
  );
}
