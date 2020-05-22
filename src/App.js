import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import Header from './components/layout/Header';
import './App.css';

import Home from './pages/Home';
import Overview from './pages/Overview';

const App = () => {
  return (
    <PlayerProvider>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/player/:player" component={Overview}/>
        </Switch>
      </Router>
    </PlayerProvider>
  );
}

export default App;
