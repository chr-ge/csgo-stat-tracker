import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from './components/layout/Header';
import themeObject from './util/theme';
import './App.css';

import Home from './pages/Home';
// import Overview from './pages/PlayerStats';
// import Weapons from './pages/Weapons';
// import Maps from './pages/Maps';
import PlayerGrid from './components/PlayerGrid';

const theme = createMuiTheme(themeObject);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <PlayerProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/player/:player/overview" component={PlayerGrid}/>
            <Route exact path="/player/:player/weapons" component={PlayerGrid}/>
            <Route exact path="/player/:player/maps" component={PlayerGrid}/>
          </Switch>
        </Router>
      </PlayerProvider>
    </MuiThemeProvider>
  );
}

export default App;
