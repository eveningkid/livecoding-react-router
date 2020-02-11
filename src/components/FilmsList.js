import React from 'react';
import Film from './Film';
import './FilmsList.css';

class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((films) => {
        this.setState({ films: films, isLoading: false });
      });
  }

  render() {
    return (
      <div className="FilmsList">
        {this.state.isLoading ? (
          'Loading movies...'
        ) : this.state.films.map((film) => 
          <Film
            key={film.id}
            id={film.id}
            title={film.title}
            releaseDate={film.release_date}
          />
        )}
      </div>
    );
  }
}

export default FilmsList;
