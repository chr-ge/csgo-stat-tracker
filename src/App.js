import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import Header from './components/layout/Header';
import './App.css';

import Home from './pages/Home';
// import Overview from './pages/PlayerStats';
// import Weapons from './pages/Weapons';
// import Maps from './pages/Maps';
import PlayerStats from './components/PlayerStats';

const App = () => {
  return (
    <PlayerProvider>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/player/:player/overview" component={PlayerStats}/>
          <Route exact path="/player/:player/weapons" component={PlayerStats}/>
          <Route exact path="/player/:player/maps" component={PlayerStats}/>
        </Switch>
      </Router>
    </PlayerProvider>
  );
}

export default App;
