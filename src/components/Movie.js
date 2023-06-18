import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ coverImg, summary, genres, year, title, rating, id }) {
  return (
    <div className={styles.content}>
      <div className={styles.contentBox}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>/{year}
        </h2>
        <img src={coverImg} alt={title} />
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <p>{rating}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
