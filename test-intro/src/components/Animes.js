import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Animes() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await axios.get(
        'https://api.jikan.moe/v4/anime?limit=3&q=dororo'
      );
      setAnimes(response.data.data);
    };

    fetchAnimes();
  }, []);

  return (
    <div>
      {animes.map((anime) => (
        <div key={anime.mal_id} className="mt-3" data-testid={`anime-${anime.mal_id}`}>
          <h3>{anime.title}</h3>
        </div>
      ))}
    </div>
  );
}
