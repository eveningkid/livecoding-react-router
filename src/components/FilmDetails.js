import React from "react";
import { Link } from "react-router-dom";
import "./FilmDetails.css";

class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      isLoading: true
    };
  }

  componentDidMount() {
    const filmId = this.props.match.params.filmId;

    fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
      .then(response => response.json())
      .then(film => {
        this.setState({ film: film, isLoading: false });
      });
  }

  render() {
    return (
      <div className="FilmDetails">
        <Link to="/">Back to movies</Link>

        <div>
          {this.state.isLoading ? (
            "Loading..."
          ) : (
            <React.Fragment>
              <h1>{this.state.film.title}</h1>
              <p>{this.state.film.description}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default FilmDetails;
