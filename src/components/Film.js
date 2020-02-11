import React from 'react';
import { Link } from 'react-router-dom';
import './Film.css';

function Film(props) {
  return (
    <Link to={`/film/${props.id}`} className="Film">
      <h1>{props.title}</h1>
      <h2>{props.releaseDate}</h2>
    </Link>
  );
}

export default Film;
