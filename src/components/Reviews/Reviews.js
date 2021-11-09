import { useState, useEffect } from "react";
import * as themoiebdApi from "../../services/themoiebd-api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    themoiebdApi
      .fetMovieReviews(movieId)
      .then((response) => setReviews(response.results));
  }, [movieId]);

  return (
    <>
      {reviews && (
        <div>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map(({ author, content, id }) => (
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </div>
      )}
    </>
  );
}
