import { useEffect, useState } from 'react';
import MusicContent from '../components/MusicCon';

function Music() {
  const [loading, setLoading] = useState(true);
  const [musicInfos, setMusicInfos] = useState([]);
  const getMusics = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_genres=comedy`)
    ).json();
    setMusicInfos(json.data.movies);
    setLoading(false);
    console.log(json.data.movies);
  };

  useEffect(() => {
    getMusics();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>LOADING</h1>
      ) : (
        // <div>
        //   <h2>MUSIC</h2>
        <div>
          {}
          {musicInfos.includes('music').map((musicInfo) => (
            <MusicContent
              key={musicInfo.id}
              id={musicInfo.id}
              coverImg={musicInfo.medium_cover_image}
              year={musicInfo.year}
              title={musicInfo.title}
              genres={musicInfo.genres}
              summary={musicInfo.summary}
              rating={musicInfo.rating}
            />
          ))}
        </div>
        // </div>
      )}
    </div>
  );
}

export default Music;
