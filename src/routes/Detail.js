import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  // console.log(x); movie id 값
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
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
        <div>
          <h2>
            {infos.title}/ {infos.year}
          </h2>
          <img src={infos.medium_cover_image} alt={infos.title} />
          <p>{infos.rating}</p>
          <ul>
            {infos.genres.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p>
            {infos.summary ? (
              <p>{infos.summary}</p>
            ) : (
              <p>줄거리 정보가 없습니다.</p>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
export default Detail;
