import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function MusicContent({ coverImg, summary, genres, year, title, rating, id }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <div className={styles.movie__list}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>
          ({year}) / {rating}
        </h3>
        <p className={styles.movie__summary}>
          {summary.length > 235 ? `${summary.slice(0, 200)}...` : summary}
        </p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MusicContent.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MusicContent;