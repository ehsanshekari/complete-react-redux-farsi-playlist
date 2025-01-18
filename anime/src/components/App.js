import AnimeList from './AnimeList';
import AnimeDetail from './AnimeDetail';
import { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import Loading from './Loading/Loading';

function App() {
  // const [series, setSeries] = useState([]);
  // const [Loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [animeResponse, setAnimeResponse] = useState({
    animeSeries: [],
    loading: false,
    error: null,
  });
  const [selectedAnime, setSelectedAnime] = useState(null);
  const initialSearch = 'dororo'

  useEffect(() => {
    search(initialSearch);
  }, []);

  const search = async (term) => {
    setAnimeResponse({ animeSeries: [], loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?limit=5&q=${term}`
      );
      setAnimeResponse({
        animeSeries: response.data.data,
        loading: false,
        error: null,
      });
      setSelectedAnime(response.data.data[0]);
    } catch (e) {
      setAnimeResponse({ animeSeries: [], loading: false, error: e.message });
    }
  };

  const onAnimeClick = (anime) => {
    setSelectedAnime(anime);
  };

  const renderContent = () => {
    const { animeSeries, loading, error } = animeResponse;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    return (
      <div className="row">
        <div className="col-4">
          <AnimeList animeSeries={animeSeries} onAnimeClick={onAnimeClick} />
        </div>
        <div className="col-8">
          <AnimeDetail anime={selectedAnime} />
        </div>
      </div>
    );
  };

  return (
    <div className="container m-5">
      <SearchInput onFormSubmit={search} initialValue={initialSearch}/>
      {renderContent()}
    </div>
  );
}

export default App;
