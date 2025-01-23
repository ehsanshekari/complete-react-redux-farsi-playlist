// import noImage from '../assets/images/no-image.jpg'

function AnimeDetail({ anime }) {
  if (!anime) {
    return null;
  }

  // debugger;
  // console.log('anime:', anime);

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={anime.images.jpg.large_image_url}
        alt="cover"
      />
      <div className="card-body">
        <h5 className="card-title">{anime.title}</h5>
        <p className="card-text">{anime.synopsis}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Score: {anime.score}</li>
        <li className="list-group-item">
          Genres: {anime.genres.map((genre) => genre.name).join(', ')}
        </li>
        <li className="list-group-item">Studio: {anime.studios.map((studio) => studio.name).join(', ')}</li>
      </ul>
    </div>
  );
}

export default AnimeDetail;
