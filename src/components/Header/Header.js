import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  </header>
);

export default Header;
