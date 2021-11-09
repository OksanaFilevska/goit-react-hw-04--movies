import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [searchQuery, SetSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get("query");

    if (queryValue === null) {
      return;
    }

    SetSearchQuery(queryValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNameChange = (event) => {
    SetSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(searchQuery.trim().toLowerCase());
    SetSearchQuery("");
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleNameChange}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
  onSubmit: PropTypes.func,
};
