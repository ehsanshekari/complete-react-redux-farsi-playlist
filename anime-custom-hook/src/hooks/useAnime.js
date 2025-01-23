import { useState, useEffect } from 'react';
import axios from 'axios';

function useAnime(term) {
  const [animeSeries, setAnimeSeries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = async (term) => {
    setAnimeSeries([]);
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?limit=5&q=${term}`
      );
      setAnimeSeries(response.data.data);
      setError(null);
      setLoading(false);
    } catch (e) {
      setAnimeSeries([]);
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    search(term);
  }, [term]);

  return [loading, error, animeSeries, search];
}

export default useAnime;