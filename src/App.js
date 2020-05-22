import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import SearchPlayer from './components/SearchPlayer';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <Header />
      <div className="container">
        <SearchPlayer />
      </div>
    </PlayerProvider>
  );
}

export default App;
