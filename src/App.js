import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilmsList from './components/FilmsList';
import FilmDetails from './components/FilmDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={FilmsList} />
      <Route path="/film/:filmId" component={FilmDetails} />
    </Switch>
  );
}

export default App;
