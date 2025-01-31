import AnimeList from './AnimeList';
import AnimeDetail from './AnimeDetail';
import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import Loading from './Loading/Loading';

class App extends React.Component {
  state = {
    animeSeries: [],
    loading: false,
    error: null,
    selectedAnime: null,
  };

  componentDidMount() {
    this.search('dororo');
  }

  // componentDidUpdate(){}

  search = async (term) => {
    this.setState({ animeSeries: [], loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?limit=5&q=${term}`
      );
      this.setState({
        animeSeries: response.data.data,
        loading: false,
        error: null,
      });
      this.setState({ selectedAnime: response.data.data[0] });
    } catch (e) {
      this.setState({ animeSeries: [], loading: false, error: e.message });
    }
  };

  // const onAnimeClick = (anime) => {
  //   setSelectedAnime(anime);
  // };

  onAnimeClick = (anime) => {
    this.setState({ selectedAnime: anime });
  }

  renderContent() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.error) {
      return <div className="alert alert-danger">{this.state.error}</div>;
    }

    return (
      <div className="row">
        <div className="col-4">
          <AnimeList
            animeSeries={this.state.animeSeries}
            onAnimeClick={this.onAnimeClick}
          />
        </div>
        <div className="col-8">
          <AnimeDetail anime={this.state.selectedAnime} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container m-5">
        <SearchInput onFormSubmit={this.search} initialValue={'dororo'} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
