import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import Navigation from '../components/Navigation';
// import { listPageReLoading, focusNav } from '../atom/atoms';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import axios from 'axios';
import styles from './Home.module.css';

// const listNums = [...Array(10)].map((_, i) => i + 1);
function Home() {
  // const { num, detail } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // const [reloading, setReloading] = useRecoilState(listPageReLoading);
  // const focusPage = useSetRecoilState(focusNav);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&limit=10&sort_by=year`
      )
    ).json();
    // console.log(json.data.limit);
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    console.log(getMovies);
  }, []);
  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>
            <b>LOADING...</b>
          </span>
        </div>
      ) : (
        <div className={styles.movies_con}>
          <h2 className={styles.title}>!WATCHE!</h2>
          <div className={styles.movies}>
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
          <div>
            {movies.map((movie) => (
              <Navigation key={movie.id} id={movie.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
