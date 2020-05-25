import React, { useEffect, useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import Player from '../Player';
import PlayerStats from '../PlayerStats';
import SearchAgainButton from '../SearchAgainButton';

//material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const PlayerGrid = ({match}) => {
    const { loading, player, searchPlayer } = useContext(PlayerContext);

    useEffect(() => {
        if(!player.platformUserId){
            searchPlayer(match.params.player);
        }
    });

    return (
        <Container style={{ marginTop: '6rem'}}>
            {!loading && <Grid container spacing={2}>
                <Grid item sm={4}>
                    <Player />
                    <SearchAgainButton />
                </Grid>
                <Grid item sm={8}>
                    <PlayerStats />
                </Grid>
            </Grid>}
        </Container>
    )
}

export default PlayerGrid
