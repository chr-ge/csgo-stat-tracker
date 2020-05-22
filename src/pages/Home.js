import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import SearchPlayer from '../components/SearchPlayer';
import Player from '../components/Player';

import Container from '@material-ui/core/Container';

const Home = () => {
    const { player } = useContext(PlayerContext);

    return (
        <Container maxWidth="sm" style={{ paddingTop: '6rem'}}>
          <SearchPlayer />
          {player.platformUserId && 
              <Player />
          }
        </Container>
    )
}

export default Home
