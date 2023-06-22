import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  // console.log(x); movie id 값
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setInfos(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>detail loading...</h1>
      ) : (
        <div className={styles.content}>
          <h2>
            {infos.title} ({infos.year})
          </h2>
          <div className={styles.content_box}>
            <img src={infos.medium_cover_image} alt={infos.title} />
            <p>⭐️ {infos.rating}</p>
            <ul className={styles.detail_genres}>
              {infos.genres.map((h) => (
                <li key={h}>{h} </li>
              ))}
            </ul>
            <p className={styles.detail_info}>
              <br />
              {infos.description_full ? (
                <span>{infos.description_full}</span>
              ) : (
                <span>줄거리 정보가 없습니다.</span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
