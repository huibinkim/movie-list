import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading~~</h1>
      ) : (
        <div>
          <div>
            <h1 className={styles.title}>WATCH</h1>
          </div>
          <div className={styles.content_card}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                year={movie.year}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
