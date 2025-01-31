import React from 'react';
import noImage from '../assets/images/no-image.jpg'

class Anime extends React.Component {
  render() {
    return (
      <div
        className="card mb-3"
        style={{ maxWidth: '540px' }}
        onClick={() => this.props.onAnimeClick(this.props.anime)}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={this.props.anime.images.jpg.image_url ? this.props.anime.images.jpg.image_url : noImage}
              alt="cover"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.anime.title}</h5>
              <p className="card-text">
                <small className="text-muted">{this.props.anime.score}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Anime;
