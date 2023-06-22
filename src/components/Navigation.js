import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation({ id }) {
  return (
    <div className={styles.nav}>
      <Link className={styles.navHome} to="/">
        Home
      </Link>
      <br />
      <Link className={styles.navRating} to={`/movie:${id}`}>
        Rating
      </Link>
      <Link className={styles.navRating} to={`/movie:${id}`}>
        Music
      </Link>
      <Link className={styles.navRating} to={`/movie:${id}`}>
        Animation
      </Link>
    </div>
  );
}
Navigation.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Navigation;
