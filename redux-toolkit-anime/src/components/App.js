import AnimeList from './AnimeList';
import AnimeDetail from './AnimeDetail';
import { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import Loading from './Loading/Loading';
import { useGetAnimesQuery } from '../redux/services/animeApi';

function App() {
  const initialSearch = 'dororo';
  const [term, setTerm] = useState(initialSearch);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const {
    data: { data: animeSeries } = [],
    error,
    isError,
    isLoading,
  } = useGetAnimesQuery(term);

  useEffect(() => {
    if (animeSeries) {
      setSelectedAnime(animeSeries[0]);
    }
  }, [animeSeries]);

  const onAnimeClick = (anime) => {
    setSelectedAnime(anime);
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      console.log('error', error);
      return <div className="alert alert-danger">{error.error}</div>;
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
      <SearchInput
        onFormSubmit={(searchTerm) => {
          setTerm(searchTerm);
        }}
        initialValue={initialSearch}
      />
      {renderContent()}
    </div>
  );
}

export default App;
