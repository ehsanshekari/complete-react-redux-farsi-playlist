import noImage from '../assets/images/no-image.jpg'

function Anime({ anime, onAnimeClick }) {
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: '540px' }}
      onClick={() => onAnimeClick(anime)}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            src={anime.images.jpg.image_url ? anime.images.jpg.image_url : noImage}
            alt="cover"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{anime.title}</h5>
            <p className="card-text">
              <small className="text-muted">{anime.score}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
