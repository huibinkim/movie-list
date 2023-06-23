import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import Navigation from '../components/Navigation';
// import { listPageReLoading, focusNav } from '../atom/atoms';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import axios from 'axios';
import styles from './Home.module.css';
// import Post from './Post';

// const listNums = [...Array(10)].map((_, i) => i + 1);
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  // const limit = 10;
  // const offset = (page - 1) * limit;
  // const postsData = (posts) => {
  //   if (posts) {
  //     let result = posts.slice(offset, offset + limit);
  //     return result;
  //   }
  // };
  // const [contentInfo, setContentInfo] = useState([]);
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
            <Navigation />
            {/* {movies.map((movie) => (
              <Navigation key={movie.id} id={movie.id} />
            ))} */}
          </div>
          {/* <Post info={contentInfo}></Post> */}
        </div>
      )}
    </div>
  );
}
export default Home;
