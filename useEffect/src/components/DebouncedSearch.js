import { useEffect, useState } from 'react';
import axios from 'axios';

function DebouncedSearch() {
  const [term, setTerm] = useState('dororo');
  const [animeSeries, setAnimeSeries] = useState([]);

  useEffect(() => {
    console.log('This is useEffect!');
    // https://api.jikan.moe/v4/anime?limit=5&q=${term}

    const search = async () => {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?limit=5&q=${term}`);
      setAnimeSeries(response.data.data);
    }

    const timer = setTimeout(search, 300);

    return () => {
      clearTimeout(timer);
      console.log('Cleanup function!');
    }
  }, [term])


  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1 className="mb-4">Anime Search</h1>
        <p className="text-muted">Find your favorite anime series easily!</p>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for anime..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div>
        <h3 className="mb-4">Anime List:</h3>
        <div className="row g-3">
          {animeSeries.map((anime) => (
            <div className="col-md-6 col-lg-4" key={anime.mal_id}>
              <div className="card h-100">
                <img
                  src={anime.images.jpg.image_url}
                  className="card-img-top"
                  alt={anime.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{anime.title}</h5>
                  <p className="card-text">
                    <strong>Episodes:</strong> {anime.episodes || 'N/A'}
                  </p>
                  <a
                    href={anime.url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DebouncedSearch;
