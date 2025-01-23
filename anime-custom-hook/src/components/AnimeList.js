import Anime from './Anime';

function AnimeList({ animeSeries, onAnimeClick }) {
  const renderedList = animeSeries.map((anime) => (
    <Anime anime={anime} onAnimeClick={onAnimeClick} key={anime.mal_id} />
  ));

  return <div>{renderedList}</div>;
}

export default AnimeList;
