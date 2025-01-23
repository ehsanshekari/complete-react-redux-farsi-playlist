import AnimeList from './AnimeList';
import AnimeDetail from './AnimeDetail';
import { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import Loading from './Loading/Loading';
import useAnime from '../hooks/useAnime';

function App() {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const initialSearch = 'pokemon';
  const [loading, error, animeSeries, search] = useAnime(initialSearch);

  useEffect(() => {
    setSelectedAnime(animeSeries[0]);
  }, [animeSeries]);

  const onAnimeClick = (anime) => {
    setSelectedAnime(anime);
  };

  const renderContent = () => {
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
      <SearchInput onFormSubmit={search} initialValue={initialSearch} />
      {renderContent()}
    </div>
  );
}

export default App;
