import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import Header from './components/layout/Header';
import './App.css';

import Home from './pages/Home';

const App = () => {
  return (
    <PlayerProvider>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </PlayerProvider>
  );
}

export default App;
