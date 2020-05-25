import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import SearchPlayer from '../components/SearchPlayer';
import Player from '../components/Player';
import {Soldier} from '../images/Soldier.js';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const Home = () => {
    const { player } = useContext(PlayerContext);

    return (
      <Container maxWidth="sm" style={{ paddingTop: "6rem" }}>
        <div className="header">
            <Soldier/>
            <Typography variant="h3">CS:GO Stat Tracker</Typography>
        </div>
        <SearchPlayer />
        {player.platformUserId && <Player />}
      </Container>
    );
}

export default Home
